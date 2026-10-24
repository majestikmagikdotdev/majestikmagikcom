'use client';
import React from 'react';
import Link from 'next/link';

const PILLARS = [
  { label: 'AES-256 encrypted. HIPAA-ready.' },
  { label: 'Works offline. Syncs on reconnect.' },
  { label: 'EVV-compliant GPS logging.' },
  { label: 'DMAS-97A/B · DMAS-98R · DMAS-99 compliant.' },
];

export default function DmasCallout() {
  return (
    <section
      aria-label="Healthcare and Field Operations"
      className="w-full px-4 md:px-6 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl border border-[#1e1e2e] bg-[#0a0a12] overflow-hidden p-8 md:p-12">
          {/* Subtle indigo ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.07) 0%, transparent 60%)',
            }}
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:gap-16">
            {/* Left: copy */}
            <div className="flex-1 mb-10 lg:mb-0">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/30">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"
                  style={{ boxShadow: '0 0 6px #818cf8' }}
                />
                <span className="text-[11px] font-mono text-indigo-400 tracking-widest uppercase">
                  Healthcare &amp; Field Operations
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-[#d4d4d8] mb-5"
                style={{ letterSpacing: '-0.02em', lineHeight: '1.05', fontFamily: 'var(--font-im-fell-english)' }}
              >
                An offline-first compliance engine that eliminates{' '}
                <span className="text-indigo-400">Medicaid audit clawbacks</span>{' '}
                for rural home health agencies.
              </h2>

              <p className="text-sm text-[#a0a0b0] leading-relaxed mb-8 max-w-xl">
                When care aides lose cell service in dead zones, cloud apps crash and agencies fall back to paper, costing them tens of thousands in state audit clawbacks. DMAS Intake runs entirely on-device, captures DMAS-97A/B, DMAS-98R, and DMAS-99 with cryptographic AES-256 signatures, and syncs the moment connectivity returns.
              </p>

              <Link
                href="https://dmas.majestikmagik.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs py-3 px-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-400/50 active:scale-[0.97] transition-all duration-200"
              >
                Schedule a Compliance Audit Demo
                <span>→</span>
              </Link>
            </div>

            {/* Right: pillars */}
            <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:w-80">
              {PILLARS.map(({ label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#1e1e2e] bg-[#0e0e1a]"
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: '#818cf8', boxShadow: '0 0 6px #818cf8' }}
                  />
                  <span className="text-[11px] font-mono text-[#707080] leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
