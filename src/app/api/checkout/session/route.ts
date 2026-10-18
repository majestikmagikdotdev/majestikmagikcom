import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const sessionId = new URL(req.url).searchParams.get('session_id');

  if (!sessionId || !sessionId.startsWith('pi_')) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const intent = await stripe.paymentIntents.retrieve(sessionId);

  return NextResponse.json({
    status: intent.status,
    amount: intent.amount ? intent.amount / 100 : null,
    serviceName: intent.metadata?.serviceName ?? null,
    serviceId: intent.metadata?.serviceId ?? null,
    customerName: intent.shipping?.name ?? null,
  });
}
