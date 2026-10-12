'use client';
import React from 'react';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <div id="home" className="relative flex flex-col items-center justify-center text-center px-4 pt-48 pb-32">
      {/* Status badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-indigo-500/30 bg-indigo-950/20 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-indigo-300">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 8px #34d399' }} />
        Local Active — Enterprise Systems Online
      </div>

      {/* H1 */}
      <h1 className="mb-6 max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-[#f0f0f0]" style={{ letterSpacing: '-0.04em' }}>
        We Build the{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-[#f0f0f0]">
          Infrastructure
        </span>{' '}
        Your Business Runs On.
      </h1>

      {/* Sub */}
      <p className="mb-10 max-w-2xl text-base md:text-lg text-[#a0a0b0] font-sans leading-relaxed">
        Enterprise-grade platforms, edge-native apps, and critical performance fixes — shipped within 24–72 hours. Client-owned. Zero vendor lock-in.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
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
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {[
          { dot: 'bg-emerald-400', glow: '#34d399', label: 'Client-Owned Infrastructure' },
          { dot: 'bg-indigo-400', glow: '#818cf8', label: 'Milestone-Based Delivery' },
          { dot: 'bg-violet-400', glow: '#a78bfa', label: 'Full IP Transfer on Completion' },
        ].map(({ dot, glow, label }) => (
          <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2a2a3a] bg-[#1a1a2a]/60">
            <span className={`h-1.5 w-1.5 rounded-full ${dot} flex-shrink-0`} style={{ boxShadow: `0 0 6px ${glow}` }} />
            <span className="text-xs font-mono text-[#a0a0b0] tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
