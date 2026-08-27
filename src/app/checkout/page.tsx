'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const getStripePromise = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (!key) throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set');
  return loadStripe(key);
};

function CheckoutForm({ serviceName, price }: { serviceName: string; price: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError(null);

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (stripeError) {
      setError(stripeError.message ?? 'Payment failed');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-slate-700 pb-4 mb-2">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Service</p>
        <p className="text-white font-mono font-semibold">{serviceName}</p>
        <p className="text-indigo-400 font-mono font-bold text-lg mt-1">{price}</p>
      </div>

      <PaymentElement />

      {error && (
        <p className="text-red-400 text-sm font-mono">{error}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono font-bold uppercase tracking-wider text-sm py-3 px-6 rounded transition-colors"
      >
        {loading ? 'Processing…' : 'Confirm Payment'}
      </button>

      <p className="text-center text-xs text-slate-500 font-mono">
        Secured by Stripe · SSL encrypted
      </p>
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

  if (!clientSecret) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <span className="text-slate-400 font-mono text-sm animate-pulse">Initializing checkout…</span>
      </div>
    );
  }

  return (
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
      <CheckoutForm serviceName={serviceName} price={`$${priceAmount.toLocaleString()}`} />
    </Elements>
  );
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-3 bg-indigo-950/40 px-3 py-1 rounded border border-indigo-500/30">
            Secure Checkout
          </span>
          <h1 className="text-2xl font-bold text-white font-mono">Complete Your Order</h1>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 md:p-8">
          <Suspense fallback={<div className="text-slate-400 font-mono text-sm animate-pulse">Loading…</div>}>
            <CheckoutInner />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
