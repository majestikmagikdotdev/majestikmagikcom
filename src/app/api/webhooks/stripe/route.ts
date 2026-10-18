import { NextRequest, NextResponse } from 'next/server';

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
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') ?? '';

  const valid = await verifyStripeSignature(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  if (!valid) return NextResponse.json({ error: 'Signature verification failed' }, { status: 400 });

  let event: { type: string; data: { object: Record<string, unknown> } };
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  try {
    if (event.type === 'payment_intent.succeeded') {
      const intentId = event.data.object['id'] as string;

      // Fetch expanded intent with charge billing details
      const intentRes = await fetch(
        `https://api.stripe.com/v1/payment_intents/${intentId}?expand[]=latest_charge`,
        { headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` } }
      );
      const intent = await intentRes.json() as Record<string, unknown>;
      const charge = intent['latest_charge'] as Record<string, unknown> | null;
      const billing = charge?.['billing_details'] as Record<string, unknown> | null;

      const sanitize = (v: unknown) => typeof v === 'string' ? v.replace(/[\r\n\t]/g, ' ').trim() : null;
      const customerEmail = billing?.['email'] as string | null;
      const customerName = sanitize(billing?.['name']);
      const metadata = intent['metadata'] as Record<string, string> | null;
      const serviceName = sanitize(metadata?.['serviceName']) ?? 'Service';
      const serviceId = metadata?.['serviceId'] ?? null;
      const amountTotal = typeof intent['amount_received'] === 'number' ? intent['amount_received'] / 100 : null;

      // Upsert to Supabase via REST
      await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/orders`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
            'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
            'Prefer': 'resolution=merge-duplicates',
          },
          body: JSON.stringify({
            stripe_session_id: intentId,
            customer_email: customerEmail,
            customer_name: customerName,
            amount_total: amountTotal,
            service_id: serviceId,
            service_name: serviceName,
            payment_status: 'succeeded',
            created_at: new Date().toISOString(),
          }),
        }
      );

      // Send confirmation email via Resend
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (customerEmail && emailRegex.test(customerEmail) && customerEmail.length <= 254) {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
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
                  We'll be in touch within <strong style="color:#f1f5f9;">24 hours</strong> to kick things off. If you have any questions, reach us at <a href="mailto:contact@majestikmagik.dev" style="color:#6366f1;">contact@majestikmagik.dev</a>.
                </p>
                <p style="font-size:12px;color:#475569;border-top:1px solid #1e293b;padding-top:20px;margin-top:8px;">
                  Majestik Magik · majestikmagik.dev
                </p>
              </div>
            `,
          }),
        });
      }
    }

    if (event.type === 'payment_intent.payment_failed') {
      const intentId = event.data.object['id'] as string;
      await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/orders?stripe_session_id=eq.${intentId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
            'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          },
          body: JSON.stringify({ payment_status: 'failed' }),
        }
      );
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
