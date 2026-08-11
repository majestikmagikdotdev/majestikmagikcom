'use client';

export default function ScrollToServices() {
  return (
    <button
      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      className="inline-block text-slate-200 cursor-pointer font-mono uppercase tracking-wider text-sm py-4 px-10 rounded transition-all duration-200 border border-white/20 hover:border-white/40 hover:text-white bg-white/5 hover:bg-white/10"
    >
      Explore Services →
    </button>
  );
}
