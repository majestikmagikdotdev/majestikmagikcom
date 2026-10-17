'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const TRUST_CHIPS = [
  { color: '#34d399', label: 'Works offline. Syncs on reconnect.' },
  { color: '#34d399', label: 'You own it. Forever.' },
];

const TERMINAL_LINES = [
  { prefix: 'Job #4471', label: 'LOADED FROM DEVICE', value: 'offline', valueColor: '#fbbf24' },
  { prefix: 'Form 14-B', label: 'SAVED LOCALLY', value: '0ms', valueColor: '#34d399' },
  { prefix: 'GPS Log', label: '3 ENTRIES QUEUED', value: 'syncing when back online', valueColor: '#818cf8' },
  { prefix: 'Signal', label: 'NO BARS', value: 'app still running', valueColor: '#34d399' },
];

function SyncTerminal() {
  const [visible, setVisible] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (visible >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), 520);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full rounded-xl bg-[#0a0a12] border border-[#1e1e2e] overflow-hidden font-mono">
      {/* Titlebar — Ubuntu/GNOME style */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#1e1e2e] bg-[#111120]">
        <span className="text-[11px] text-[#aaaaaa] tracking-wide font-sans">sync-engine · field-node-07</span>
        <div className="flex items-center gap-1.5">
          {/* Minimize */}
          <button aria-label="Minimize" className="w-4 h-4 rounded-full bg-[#1e1e2e] border border-[#2a2a3a] hover:bg-[#2a2a3a] transition-colors flex items-center justify-center">
            <span className="block w-2 h-px bg-[#aaaaaa]" />
          </button>
          {/* Maximize */}
          <button aria-label="Maximize" className="w-4 h-4 rounded-full bg-[#1e1e2e] border border-[#2a2a3a] hover:bg-[#2a2a3a] transition-colors flex items-center justify-center">
            <span className="block w-2 h-2 border border-[#aaaaaa] rounded-sm" />
          </button>
          {/* Close */}
          <button aria-label="Close" className="w-4 h-4 rounded-full bg-[#1e1e2e] border border-[#2a2a3a] hover:bg-[#e05c5c] hover:border-[#e05c5c] transition-colors flex items-center justify-center">
            <span className="text-[#aaaaaa] text-[9px] leading-none">✕</span>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4 space-y-2.5 min-h-[148px]">
        {TERMINAL_LINES.slice(0, visible).map(({ prefix, label, value, valueColor }) => (
          <div key={prefix} className="flex flex-wrap items-baseline gap-x-2 text-[11px] leading-relaxed">
            <span className="text-[#505060]">[</span>
            <span className="text-[#a0a0b0]">{prefix}</span>
            <span className="text-[#505060]">]</span>
            <span className="text-[#505060]">→</span>
            <span className="text-[#707080]">{label}:</span>
            <span style={{ color: valueColor }}>{value}</span>
          </div>
        ))}
        {visible < TERMINAL_LINES.length ? (
          <span
            className="inline-block w-1.5 h-3.5 bg-indigo-400 align-middle"
            style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s' }}
          />
        ) : (
          <div className="flex flex-wrap items-baseline gap-x-2 text-[11px] leading-relaxed mt-1 border-t border-[#1e1e2e] pt-2.5">
            <span className="text-[#505060]">$</span>
            <span className="text-[#a5b4fc]">ready to fix your stack?</span>
            <span className="text-[#505060]">→</span>
            <Link href="/#contact" className="text-[#34d399] hover:underline underline-offset-2 transition-colors">get started</Link>
            <span
              className="inline-block w-1.5 h-3.5 bg-indigo-400 align-middle ml-0.5"
              style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section id="home" aria-label="Hero" className="relative flex flex-col w-full px-4 md:px-6 pt-40 sm:pt-44 md:pt-52 pb-32 md:pb-40">
      <div className="max-w-7xl mx-auto w-full">

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left: copy */}
          <div className="flex flex-col items-start lg:flex-[3]">

            {/* Availability indicator */}
            <div className="relative z-10 mb-8 inline-flex items-center gap-2.5">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #34d399' }} />
              </span>
              <span className="text-xs text-[#808090]">Taking new projects</span>
            </div>

            {/* H1 */}
            <h1
              className="relative z-10 mb-6 text-5xl sm:text-5xl md:text-7xl lg:text-[88px] font-black leading-[0.95] text-[#d4d4d8]"
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
                className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs py-3 px-6 rounded-full border border-[#2a2a3a] bg-[#0e0e1a] text-[#a0a0b0] hover:border-[#3a3a4a] hover:text-[#c0c0d0] hover:bg-[#111120] active:scale-[0.97] transition-all duration-200"
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

          {/* Right: sync terminal */}
          <div className="hidden lg:flex lg:flex-[2] lg:justify-end mt-12 lg:mt-0">
            <div className="w-full max-w-md">
              <SyncTerminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
