'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

function useMouseGlow(ref: React.RefObject<HTMLDivElement | null>) {
  const pos = useRef({ x: 50, y: 30 });
  const target = useRef({ x: 50, y: 30 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.06);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.06);
      if (ref.current) {
        ref.current.style.background = `radial-gradient(ellipse at ${pos.current.x}% ${pos.current.y}%, rgba(99,102,241,0.22) 0%, transparent 65%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [ref]);
}

export default function HomeHero() {
  const glowRef = useRef<HTMLDivElement>(null);
  useMouseGlow(glowRef);

  return (
    <div id="home" className="relative flex flex-col items-center justify-center text-center px-4 pt-28 sm:pt-40 md:pt-48 pb-20 md:pb-32">

      {/* Mouse-tracked radial glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 w-full h-full transition-none"
      />

      {/* Status badge */}
      <div className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-md border border-indigo-500/30 bg-indigo-950/20 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-indigo-300">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 8px #34d399' }} />
        </span>
        Local Active — Enterprise Systems Online
      </div>

      {/* H1 */}
      <h1 className="relative z-10 mb-6 max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-[#f0f0f0]" style={{ letterSpacing: '-0.04em' }}>
        We Build the{' '}
        <span className="relative inline-block">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #818cf8 0%, #a5b4fc 25%, #5eead4 50%, #a5b4fc 75%, #818cf8 100%)',
              backgroundSize: '200% auto',
              animation: 'shimmer 3s linear infinite',
            }}
          >
            Infrastructure
          </span>
        </span>{' '}
        Your Business Runs On.
      </h1>

      {/* Sub */}
      <p className="relative z-10 mb-10 max-w-2xl text-base md:text-lg text-[#a0a0b0] font-sans leading-relaxed">
        Enterprise-grade platforms, edge-native apps, and critical performance fixes — shipped within 24–72 hours. Client-owned. Zero vendor lock-in.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mb-16">
        <Link
          href="/start-a-project"
          className="inline-block font-mono uppercase tracking-wider text-sm py-3.5 px-7 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold border border-indigo-400/30 transition-all duration-200"
        >
          Request a Quote →
        </Link>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('app:scroll-to', { detail: 'services' }))}
          className="inline-block font-mono uppercase tracking-wider text-sm py-3.5 px-7 rounded-full border border-[#2a2a3a] text-[#a0a0b0] hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-200 cursor-pointer"
        >
          View Services ↓
        </button>
      </div>

      {/* Trust chips */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        {[
          { dot: 'bg-emerald-400', ping: 'bg-emerald-400', glow: '#34d399', label: 'Client-Owned Infrastructure' },
          { dot: 'bg-indigo-400',  ping: 'bg-indigo-400',  glow: '#818cf8', label: 'Milestone-Based Delivery' },
          { dot: 'bg-violet-400',  ping: 'bg-violet-400',  glow: '#a78bfa', label: 'Full IP Transfer on Completion' },
        ].map(({ dot, ping, glow, label }) => (
          <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2a2a3a] bg-[#1a1a2a]/60">
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${ping} opacity-75`} />
              <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dot}`} style={{ boxShadow: `0 0 6px ${glow}` }} />
            </span>
            <span className="text-xs font-mono text-[#a0a0b0] tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
