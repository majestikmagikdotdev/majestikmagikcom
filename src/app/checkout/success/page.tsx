import Link from 'next/link';

export default function CheckoutSuccess() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-4 text-center">
      <div className="rounded-lg border border-indigo-500/30 bg-indigo-950/20 p-10 max-w-md w-full">
        <div className="mb-4 text-4xl">✅</div>
        <h1 className="text-2xl font-bold font-mono mb-2">Payment Confirmed</h1>
        <p className="text-slate-400 text-sm mb-6">
          Your order has been received. You&apos;ll hear from us within 24 hours at the email you provided.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-sm uppercase tracking-wider px-6 py-3 rounded transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
