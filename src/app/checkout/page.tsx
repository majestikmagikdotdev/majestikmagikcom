'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const getStripePromise = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (!key) throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set');
  return loadStripe(key);
};

const SERVICE_BULLETS: Record<string, string[]> = {
  'ai-code-extraction': [
    'AI-assisted parsing and scraping of complex codebases into clean, deployable front-end assets',
    'Fix UI rendering failures, CSS breakages, broken routing, and hydration errors',
    'Deploy to Vercel, Netlify, or Cloudflare with custom domain DNS and SSL configuration',
  ],
  'shopify-email-engine': [
    'Custom transactional Liquid template coding for order, shipping, and account notifications',
    'Automated flow logic, dynamic variable patching, and A/B-ready template architecture',
    'High-converting marketing email design optimized for deliverability and open rates',
  ],
  'dns-deliverability': [
    'Full domain reputation setup: MX, TXT, SPF, DKIM, and DMARC alignment',
    'Eliminate spam flagging, domain blacklisting, and email routing failures',
    'Inbox warm-up strategy and ongoing deliverability monitoring recommendations',
  ],
  'core-web-vitals': [
    'Guaranteed 90+ Lighthouse and PageSpeed scores across mobile and desktop',
    'Server-side caching, image optimization pipeline, and script execution overhaul',
    'Eliminate render-blocking resources and implement lazy hydration strategies',
  ],
  'landing-page-redesign': [
    'Custom Next.js and Tailwind code with elite animations and sub-second load times',
    'High-converting layout architecture with full-stack API and backend integrations',
    'Fully responsive, accessibility-compliant, and production-deployed',
  ],
  'geo-ai-audit': [
    'Cutting-edge Generative Engine Optimization ensuring your brand ranks inside AI answers',
    'Inject structured JSON-LD graph schema targeting ChatGPT, Perplexity, and Claude',
    'Full site audit for AI crawler compatibility, entity coverage, and citation readiness',
  ],
  'webhook-debugging': [
    'Enterprise-grade API, payload, and webhook error-handling audit',
    'Debug input validation logic, fix broken routing pipelines, and patch delivery failures',
    'Restore secure lead-capture with end-to-end webhook verification and logging',
  ],
};

function OrderSummary({ serviceId, serviceName, price }: { serviceId: string; serviceName: string; price: string }) {
  const bullets = SERVICE_BULLETS[serviceId] ?? [];
  return (
    <div className="flex flex-col h-full">
      <Link
        href="/#services-pricing"
        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 px-4 py-2 rounded transition-all duration-200 mb-10"
      >
        <span>←</span> Back to Services
      </Link>

      <div className="mb-2">
        <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-indigo-950/40 px-3 py-1 rounded border border-indigo-500/30">
          Order Summary
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mt-4 mb-2 leading-tight" style={{ letterSpacing: '-0.03em' }}>
        {serviceName}
      </h1>

      <p className="text-3xl font-mono font-bold text-indigo-400 mb-8">{price}</p>

      {bullets.length > 0 && (
        <ul className="space-y-4 mb-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-8 border-t border-slate-800">
        <div className="flex items-center justify-between text-sm font-mono text-slate-400 mb-1">
          <span>Subtotal</span>
          <span>{price}</span>
        </div>
        <div className="flex items-center justify-between text-base font-mono font-bold text-white mt-3">
          <span>Total due today</span>
          <span className="text-indigo-400">{price}</span>
        </div>
        <p className="mt-6 text-xs text-slate-500 font-mono leading-relaxed">
          Timeline confirmed after project scoping. Please contact us at <a href="mailto:contact@majestikmagik.dev" className="text-indigo-400 hover:underline">contact@majestikmagik.dev</a> to discuss your project first. We&apos;ll reach out within 24 hours of payment to align on scope and schedule.
        </p>
      </div>
    </div>
  );
}

function CheckoutForm({ price }: { serviceName: string; price: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (!fullName.trim()) { setError('Please enter your full name.'); return; }
    if (!email.trim()) { setError('Please enter your email address.'); return; }
    setLoading(true);
    setError(null);

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
        payment_method_data: {
          billing_details: {
            name: fullName.trim(),
            email: email.trim(),
          },
        },
      },
    });

    if (stripeError) {
      const safeMsg = (stripeError.message ?? 'Payment failed').replace(/[\r\n\t]/g, ' ').trim();
      setError(safeMsg);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Jane Smith"
          required
          className="w-full bg-slate-800 border border-slate-600 focus:border-indigo-500 focus:outline-none rounded px-4 py-3 text-white font-mono text-sm placeholder-slate-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          required
          className="w-full bg-slate-800 border border-slate-600 focus:border-indigo-500 focus:outline-none rounded px-4 py-3 text-white font-mono text-sm placeholder-slate-500 transition-colors"
        />
      </div>


      <div>
        <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
          Payment Details
        </label>
        <PaymentElement />
      </div>

      {error && (
        <p className="text-red-400 text-sm font-mono">{error}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-white font-mono font-bold uppercase tracking-wider text-sm py-4 px-6 rounded transition-colors mt-2"
      >
        {loading ? 'Processing…' : `Pay ${price}`}
      </button>

      <div className="flex items-center justify-center gap-3 pt-1">
        <Image src="/img/Stripe_Logo,_revised_2016.svg.png" alt="Powered by Stripe" width={50} height={20} className="opacity-80" />
        <span className="text-slate-600">|</span>
        <span className="flex items-center gap-1 text-xs text-slate-500 font-mono">🔒 SSL encrypted</span>
      </div>
    </form>
  );
}

function CheckoutInner() {
  const searchParams = useSearchParams();
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const serviceId = searchParams.get('serviceId') ?? '';
  const serviceName = searchParams.get('serviceName') ?? 'Service';
  const price = searchParams.get('price') ?? '0';
  const priceAmount = parseFloat(price);
  const formattedPrice = `$${priceAmount.toLocaleString()}`;

  useEffect(() => {
    if (!serviceId || !priceAmount) return;
    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serviceId, serviceName, price: priceAmount }),
    })
      .then((r) => r.json())
      .then(({ clientSecret }) => setClientSecret(clientSecret));
  }, [serviceId, serviceName, priceAmount]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
      {/* Left — Order Summary */}
      <div className="relative w-full md:w-1/2 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 px-8 py-12 md:px-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.4) 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10">
        <OrderSummary serviceId={serviceId} serviceName={serviceName} price={formattedPrice} />
        </div>
      </div>

      {/* Right — Payment Form */}
      <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-20 flex flex-col justify-center">
        <div className="mb-8">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-indigo-950/40 px-3 py-1 rounded border border-indigo-500/30">
            Secure Checkout
          </span>
          <h2 className="text-xl font-bold text-white font-mono mt-4">Payment Information</h2>
        </div>

        {!clientSecret ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <span className="text-slate-400 font-mono text-sm animate-pulse">Initializing checkout…</span>
          </div>
        ) : (
          <Elements
            stripe={getStripePromise()}
            options={{
              clientSecret,
              appearance: {
                theme: 'night',
                variables: {
                  colorPrimary: '#6366f1',
                  colorBackground: '#0f172a',
                  colorText: '#f1f5f9',
                  fontFamily: 'monospace',
                  borderRadius: '6px',
                },
              },
            }}
          >
            <CheckoutForm serviceName={serviceName} price={formattedPrice} />
          </Elements>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <span className="text-slate-400 font-mono text-sm animate-pulse">Loading…</span>
      </div>
    }>
      <CheckoutInner />
    </Suspense>
  );
}
