import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { serviceId, serviceName, price } = await req.json();

  if (!serviceId || !price) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(price * 100),
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
    metadata: { serviceId, serviceName },
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
