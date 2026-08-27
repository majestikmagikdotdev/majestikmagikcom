import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export const runtime = 'edge';

async function verifyStripeSignature(body: string, sig: string, secret: string): Promise<boolean> {
  const parts = Object.fromEntries(sig.split(',').map(p => p.split('=')));
  const timestamp = parts['t'];
  const signature = parts['v1'];
  if (!timestamp || !signature) return false;

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signed = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${timestamp}.${body}`));
  const expected = Array.from(new Uint8Array(signed)).map(b => b.toString(16).padStart(2, '0')).join('');
  return expected === signature;
}

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const resend = new Resend(process.env.RESEND_API_KEY!);

  const body = await req.text();
  const sig = req.headers.get('stripe-signature') ?? '';

  const valid = await verifyStripeSignature(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  if (!valid) return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = JSON.parse(body) as Stripe.Event;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
    case 'checkout.session.completed':
    case 'checkout.session.async_payment_succeeded': {
      const sanitize = (val: string) => val.replace(/[\r\n\t]/g, ' ').trim();

      let customerEmail: string | null | undefined;
      let customerName: string | null;
      let serviceName: string;
      let amountTotal: number | null;
      let sessionId: string;

      if (event.type === 'payment_intent.succeeded') {
        const intentRaw = event.data.object as Stripe.PaymentIntent;
        const intentRes = await fetch(
          `https://api.stripe.com/v1/payment_intents/${intentRaw.id}?expand[]=latest_charge`,
          { headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` } }
        );
        const intent = await intentRes.json() as Stripe.PaymentIntent & { latest_charge: Stripe.Charge | null };
        const charge = intent.latest_charge;
        customerEmail = charge?.billing_details?.email ?? null;
        customerName = charge?.billing_details?.name ? sanitize(charge.billing_details.name) : null;
        serviceName = sanitize(intent.metadata?.serviceName ?? 'Service');
        amountTotal = intent.amount_received ? intent.amount_received / 100 : null;
        sessionId = intent.id;
      } else {
        const session = event.data.object as Stripe.Checkout.Session;
        customerEmail = session.customer_details?.email;
        customerName = session.customer_details?.name ? sanitize(session.customer_details.name) : null;
        serviceName = sanitize(session.metadata?.serviceName ?? 'Service');
        amountTotal = session.amount_total ? session.amount_total / 100 : null;
        sessionId = session.id;
      }

      await supabase.from('orders').upsert({
        stripe_session_id: sessionId,
        customer_email: customerEmail,
        customer_name: customerName,
        amount_total: amountTotal,
        service_id: event.type === 'payment_intent.succeeded'
          ? (event.data.object as Stripe.PaymentIntent).metadata?.serviceId
          : (event.data.object as Stripe.Checkout.Session).metadata?.serviceId,
        service_name: serviceName,
        payment_status: 'succeeded',
        created_at: new Date().toISOString(),
      }, { onConflict: 'stripe_session_id' });

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (customerEmail && emailRegex.test(customerEmail) && customerEmail.length <= 254) {
        await resend.emails.send({
          from: 'Majestik Magik <no-reply@majestikmagik.dev>',
          to: customerEmail,
          subject: `Order Confirmed — ${serviceName}`,
          html: `
            <div style="font-family:monospace;max-width:560px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:40px;border-radius:8px;">
              <h1 style="font-size:24px;font-weight:900;margin-bottom:4px;color:#ffffff;">Order Confirmed ✅</h1>
              <p style="color:#94a3b8;font-size:14px;margin-bottom:32px;">Thank you${customerName ? `, ${customerName}` : ''}. Your payment was received.</p>

              <div style="background:#1e293b;border:1px solid #334155;border-radius:6px;padding:20px;margin-bottom:24px;">
                <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#6366f1;margin-bottom:8px;">Service</p>
                <p style="font-size:16px;font-weight:700;color:#ffffff;margin-bottom:12px;">${serviceName}</p>
                <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#6366f1;margin-bottom:4px;">Amount Paid</p>
                <p style="font-size:22px;font-weight:900;color:#818cf8;">$${amountTotal?.toLocaleString()}</p>
              </div>

              <p style="font-size:14px;color:#94a3b8;line-height:1.6;margin-bottom:24px;">
                We'll be in touch within <strong style="color:#f1f5f9;">24 hours</strong> to kick things off. If you have any questions in the meantime, reply to this email or reach us at <a href="mailto:contact@majestikmagik.dev" style="color:#6366f1;">contact@majestikmagik.dev</a>.
              </p>

              <p style="font-size:12px;color:#475569;border-top:1px solid #1e293b;padding-top:20px;margin-top:8px;">
                Majestik Magik · majestikmagik.dev
              </p>
            </div>
          `,
        });
      }
      break;
    }

    case 'payment_intent.payment_failed': {
      const intent = event.data.object as Stripe.PaymentIntent;
      await supabase.from('orders')
        .update({ payment_status: 'failed' })
        .eq('stripe_session_id', intent.id);
      break;
    }

    case 'payment_intent.partially_funded': {
      const intent = event.data.object as Stripe.PaymentIntent;
      const funded = intent.amount_received ? intent.amount_received / 100 : null;
      const remaining = intent.amount && intent.amount_received
        ? (intent.amount - intent.amount_received) / 100
        : null;
      await supabase.from('orders')
        .update({
          payment_status: 'partially_funded',
          amount_paid: funded,
          amount_remaining: remaining,
        })
        .eq('stripe_session_id', intent.id);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
