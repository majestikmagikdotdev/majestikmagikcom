import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'edge';

// Server-side price catalog — client-supplied price is ignored
const SERVICE_CATALOG: Record<string, { name: string; price: number }> = {
  'ai-code-extraction':   { name: 'AI Code Extraction & Frontend Quick-Fix', price: 1850 },
  'shopify-email-engine': { name: 'Shopify Email & Notification Engine',      price: 1250 },
  'dns-deliverability':   { name: 'DNS, SPF, DKIM & Deliverability Setup',    price: 600  },
  'core-web-vitals':      { name: 'Core Web Vitals & Speed Overhaul',         price: 2200 },
  'landing-page-redesign':{ name: 'Landing Page Redesign & Engineering',      price: 4500 },
  'geo-ai-audit':         { name: 'Technical GEO & AI Visibility Audit',      price: 3500 },
  'webhook-debugging':    { name: 'Contact Form & Webhook Debugging',         price: 450  },
};

// Rate limiting: max 10 requests per IP per 60 seconds
const rateLimitMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for') ?? 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { serviceId } = await req.json();

  if (!serviceId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const service = SERVICE_CATALOG[serviceId];
  if (!service) {
    return NextResponse.json({ error: 'Invalid service' }, { status: 400 });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: service.price * 100,
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
    metadata: { serviceId, serviceName: service.name },
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
