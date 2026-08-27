import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'edge';

const VALID_SERVICE_IDS = new Set([
  'ai-code-extraction',
  'shopify-email-engine',
  'dns-deliverability',
  'core-web-vitals',
  'landing-page-redesign',
  'geo-ai-audit',
  'webhook-debugging',
]);

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { serviceId, serviceName, price } = await req.json();

  if (!serviceId || !price) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!VALID_SERVICE_IDS.has(serviceId)) {
    return NextResponse.json({ error: 'Invalid service' }, { status: 400 });
  }

  const safeName = String(serviceName).replace(/[\/\\\r\n\t.]/g, ' ').trim().slice(0, 100);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(price * 100),
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
    metadata: { serviceId, serviceName: safeName },
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
