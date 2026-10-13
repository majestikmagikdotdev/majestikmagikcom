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
      pos.current.x = lerp(pos.current.x, target.current.x, 0.05);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.05);
      if (ref.current) {
        ref.current.style.background = `radial-gradient(900px ellipse at ${pos.current.x}% ${pos.current.y}%, rgba(99,102,241,0.13) 0%, transparent 60%)`;
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

const TRUST_CHIPS = [
  { color: '#34d399', label: 'Client-Owned Infrastructure' },
  { color: '#818cf8', label: 'Milestone-Based Delivery' },
  { color: '#a78bfa', label: 'Full IP Transfer on Completion' },
];

export default function HomeHero() {
  const glowRef = useRef<HTMLDivElement>(null);
  useMouseGlow(glowRef);

  return (
    <div id="home" className="relative flex flex-col items-center justify-center text-center px-4 pt-26 sm:pt-30 md:pt-34 pb-24 md:pb-26">

      {/* Mouse-tracked glow */}
      <div ref={glowRef} aria-hidden className="pointer-events-none fixed inset-0 z-0 w-full h-full" />

      {/* Status badge */}
      <div className="relative z-10 mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#2a2a3a] bg-[#111120]/80 px-4 py-1.5 backdrop-blur-sm">
        <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #34d399' }} />
        </span>
        <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-[#606070]">
          Systems Online
        </span>
      </div>

      {/* H1 */}
      <h1
        className="relative z-10 mb-6 max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black leading-[0.95] text-[#f0f0f0]"
        style={{ letterSpacing: '-0.04em' }}
      >
        We Build the{' '}
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a5b4fc 40%, #c4b5fd 70%, #818cf8 100%)',
            backgroundSize: '200% auto',
            animation: 'shimmer 4s linear infinite',
          }}
        >
          Infrastructure
        </span>
        <br />
        Your Business Runs On.
      </h1>

      {/* Subheading */}
      <p className="relative z-10 mb-10 max-w-xl text-base md:text-lg text-[#606070] leading-relaxed" style={{ letterSpacing: '-0.01em' }}>
        Enterprise-grade platforms, edge-native apps, and critical performance fixes —
        client-owned with zero vendor lock-in.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mb-16">
        <Link
          href="/start-a-project"
          className="group inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs py-3 px-6 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all duration-200 border border-indigo-500/50"
        >
          Start a Project
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs py-3 px-6 rounded-full border border-[#2a2a3a] text-[#606070] hover:border-[#3a3a4a] hover:text-[#a0a0b0] transition-all duration-200"
        >
          View Work ↓
        </Link>
      </div>

      {/* Trust chips */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2">
        {TRUST_CHIPS.map(({ color, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1e1e2e] bg-[#0e0e1a]/60"
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: color, boxShadow: `0 0 5px ${color}` }}
            />
            <span className="text-[11px] font-mono text-[#505060] tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
