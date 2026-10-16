'use client';
import React from 'react';
import Link from 'next/link';
import HeroTerminal from './HeroTerminal';

const TRUST_CHIPS = [
  { color: '#34d399', label: 'You own it. Forever.' },
  { color: '#818cf8', label: 'Pay as we hit milestones' },
  { color: '#a78bfa', label: 'Full code handoff on launch' },
];

export default function HomeHero() {
  return (
    <section id="home" aria-label="Hero" className="relative flex flex-col pt-26 sm:pt-30 md:pt-34 pb-24 md:pb-26 max-w-7xl mx-auto w-full">

      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
        {/* Left: copy */}
        <div className="flex flex-col items-start flex-1 min-w-0">

          {/* Availability indicator */}
          <div className="relative z-10 mb-8 inline-flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #34d399' }} />
            </span>
            <span className="text-xs text-[#808090]">Taking new projects</span>
          </div>

          {/* H1 */}
          <h1
            className="relative z-10 mb-6 max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black leading-[0.95] text-[#f0f0f0]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Your site is slow.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a5b4fc 40%, #c4b5fd 70%, #818cf8 100%)',
                backgroundSize: '200% auto',
                animation: 'shimmer 4s linear infinite',
              }}
            >
              We fix that.
            </span>
          </h1>

          {/* Subheading */}
          <p className="relative z-10 mb-10 max-w-xl text-base md:text-lg text-[#a0a0b0] leading-relaxed" style={{ letterSpacing: '-0.01em' }}>
            60% of Google searches now end without a single click. AI answers the question before anyone visits your site. The businesses that survive that are the ones whose websites give people a reason to show up on purpose.
          </p>

          {/* CTAs */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start gap-3 mb-16">
            <Link
              href="/#contact"
              className="btn-premium group inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs py-3 px-6 rounded-full text-white font-bold"
            >
              Fix my site
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs py-3 px-6 rounded-full border border-[#2a2a3a] text-[#808090] hover:border-[#3a3a4a] hover:text-[#a0a0b0] transition-all duration-200"
            >
              See the work ↓
            </Link>
          </div>

          {/* Trust chips */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start gap-2">
            {TRUST_CHIPS.map(({ color, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1e1e2e] bg-[#0e0e1a]/60"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: color, boxShadow: `0 0 5px ${color}` }}
                />
                <span className="text-[11px] font-mono text-[#707080] tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: terminal */}
        <div className="relative z-10 w-full lg:w-[420px] xl:w-[460px] flex-shrink-0 mt-14 lg:mt-0">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}
