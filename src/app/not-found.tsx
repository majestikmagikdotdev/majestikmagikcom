import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Majestik Magik',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      style={{ background: 'rgb(15, 23, 42)' }}
    >
      {/* Dot matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(rgba(247, 248, 248, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(99, 102, 241, 0.15) 0%, transparent 65%)' }}
      />

      <div className="relative z-10">
        <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-6 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
          Error 404
        </span>

        <h1
          className="text-7xl md:text-9xl font-bold text-white mb-4"
          style={{ letterSpacing: '-0.09em' }}
        >
          Page{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-white">
            Not Found
          </span>
        </h1>

        <p className="text-slate-300 text-lg mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="font-mono uppercase tracking-wider text-xs text-indigo-300 bg-indigo-400/30 hover:bg-indigo-300/30 border border-indigo-400/30 px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
