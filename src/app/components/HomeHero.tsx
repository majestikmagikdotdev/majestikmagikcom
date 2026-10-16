'use client';
import React from 'react';
import Link from 'next/link';

const TRUST_CHIPS = [
  { color: '#34d399', label: 'Works offline. Syncs on reconnect.' },
  { color: '#34d399', label: 'You own it. Forever.' },
];

export default function HomeHero() {
  return (
    <section id="home" aria-label="Hero" className="relative flex flex-col w-full px-4 md:px-6 pt-28 sm:pt-32 md:pt-40 pb-32 md:pb-40">
      <div className="max-w-7xl mx-auto w-full">

        <div className="flex flex-col">
          {/* Left: copy */}
          <div className="flex flex-col items-start">

            {/* Availability indicator */}
            <div className="relative z-10 mb-8 inline-flex items-center gap-2.5">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #34d399' }} />
              </span>
              <span className="text-xs text-[#808090]">Taking new projects</span>
            </div>

            {/* H1 */}
            <h1
              className="relative z-10 mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black leading-[0.95] text-[#f0f0f0]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Your site is slow.
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a5b4fc 40%, #c4b5fd 70%, #818cf8 100%)',
                  backgroundSize: '200% auto',
                  animation: 'shimmer 1.8s cubic-bezier(0.16,1,0.3,1) 0.3s both',
                }}
              >
                We fix that.
              </span>
            </h1>

            {/* Subheading */}
            <p className="relative z-10 mb-10 text-base md:text-lg text-[#a0a0b0] leading-relaxed" style={{ letterSpacing: '-0.01em' }}>
              For field crews and rural operations. Your software should work where you work.
            </p>

            {/* CTAs */}
            <div className="relative z-10 flex flex-row items-start gap-3 mb-10">
              <Link
                href="/#contact"
                className="btn-premium group inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs py-3 px-6 rounded-full text-white font-bold active:scale-[0.97] transition-transform duration-75"
              >
                Fix my site
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs py-3 px-6 rounded-full border border-[#2a2a3a] text-[#808090] hover:border-[#3a3a4a] hover:text-[#a0a0b0] active:scale-[0.97] transition-all duration-200"
              >
                See the work ↓
              </Link>
            </div>

            {/* Trust chips */}
            <div className="relative z-10 grid grid-cols-2 gap-2">
              {TRUST_CHIPS.map(({ color, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-5.5 py-2 rounded-full border border-[#1e1e2e] bg-[#0e0e1a]/60"
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
        </div>
      </div>
    </section>
  );
}
