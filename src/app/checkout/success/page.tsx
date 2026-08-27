'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const NEXT_STEPS = [
  'Check your email for a payment receipt from Stripe.',
  'We\'ll reach out within 24 hours to align on project scope and schedule.',
  'Once scoped, we\'ll send a project brief for your review before work begins.',
  'You\'ll receive progress updates throughout delivery.',
];

type SessionData = {
  status: string;
  amount: number | null;
  serviceName: string | null;
  serviceId: string | null;
  customerName: string | null;
};

function SuccessInner() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id') ?? searchParams.get('payment_intent');
  const [data, setData] = useState<SessionData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!sessionId) { setError(true); return; }
    fetch(`/api/checkout/session?session_id=${sessionId}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) { setError(true); return; }
        setData(d);
      })
      .catch(() => setError(true));
  }, [sessionId]);

  if (error) {
    return (
      <div className="text-center">
        <p className="text-slate-400 font-mono text-sm mb-6">Could not load order details.</p>
        <Link href="/" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-sm uppercase tracking-wider px-6 py-3 rounded transition-colors cursor-pointer">
          Back to Home
        </Link>
      </div>
    );
  }

  if (!data) {
    return <p className="text-slate-400 font-mono text-sm animate-pulse">Loading your order…</p>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
          <span className="text-3xl">✅</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2" style={{ letterSpacing: '-0.03em' }}>
          Payment Confirmed
        </h1>
        <p className="text-slate-400 font-mono text-sm">
          {data.customerName ? `Thank you, ${data.customerName}.` : 'Thank you.'} Your order has been received.
        </p>
      </div>

      {/* Order Summary Card */}
      <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 md:p-8 mb-6">
        <p className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4">Order Summary</p>
        <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
          <div>
            <p className="text-white font-mono font-semibold">{data.serviceName ?? 'Service'}</p>
            <p className="text-xs text-slate-500 font-mono mt-1">One-time payment</p>
          </div>
          <p className="text-indigo-400 font-mono font-bold text-lg whitespace-nowrap">
            ${data.amount?.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm font-mono">
          <span className="text-slate-400">Status</span>
          <span className="inline-flex items-center gap-1.5 text-green-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            {data.status === 'succeeded' ? 'Paid' : data.status}
          </span>
        </div>
      </div>

      {/* Next Steps */}
      <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 md:p-8 mb-8">
        <p className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-5">What Happens Next</p>
        <ol className="space-y-4">
          {NEXT_STEPS.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-950 border border-indigo-500/40 flex items-center justify-center text-xs font-mono font-bold text-indigo-400">
                {i + 1}
              </span>
              <p className="text-sm text-slate-300 font-mono leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-sm uppercase tracking-wider px-8 py-3 rounded transition-colors cursor-pointer"
        >
          Back to Home
        </Link>
        <a
          href="mailto:contact@majestikmagik.dev"
          className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white font-mono text-sm uppercase tracking-wider px-8 py-3 rounded transition-colors cursor-pointer"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default function CheckoutSuccess() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-16 flex flex-col items-center justify-center">
      <Suspense fallback={
        <p className="text-slate-400 font-mono text-sm animate-pulse">Loading your order…</p>
      }>
        <SuccessInner />
      </Suspense>
    </main>
  );
}
