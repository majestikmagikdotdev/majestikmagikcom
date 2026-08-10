import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Majestik Magik',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#07080e] flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-indigo-500 uppercase tracking-widest text-xs mb-4">Error 404</p>
      <h1 className="text-6xl font-bold text-slate-100 mb-4">Page Not Found</h1>
      <p className="text-slate-400 max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="font-mono uppercase tracking-wider text-xs text-indigo-300 border border-indigo-400/30 bg-indigo-400/10 hover:bg-indigo-400/20 px-6 py-3 rounded-lg transition-colors duration-200"
      >
        Back to Home
      </Link>
    </main>
  );
}
