import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed':
    case 'checkout.session.async_payment_succeeded': {
      const session = event.data.object as Stripe.Checkout.Session;
      await supabase.from('orders').upsert({
        stripe_session_id: session.id,
        customer_email: session.customer_details?.email,
        amount_total: session.amount_total ? session.amount_total / 100 : null,
        service_id: session.metadata?.serviceId,
        service_name: session.metadata?.serviceName,
        payment_status: session.payment_status,
        created_at: new Date().toISOString(),
      }, { onConflict: 'stripe_session_id' });
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
