'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.01-.166 1.98-.465 2.912C20.243 16.14 18.82 17.61 17 18.75c-1.79.99-3.76 1.5-5 1.5s-3.21-.51-5-1.5c-1.82-1.14-3.243-2.61-4.535-4.088C3.166 13.98 3 13.01 3 12s.166-1.98.465-2.912C3.757 7.86 5.18 6.39 7 5.25c1.79-.99 3.76-1.5 5-1.5s3.21.51 5 1.5c1.82 1.14 3.243 2.61 4.535 4.088C20.834 10.02 21 10.99 21 12Z" />
  </svg>
);

const OshaSeal = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0">
    <circle cx="32" cy="32" r="30" fill="#7c2d12" stroke="#f97316" strokeWidth="2" />
    <circle cx="32" cy="32" r="24" fill="none" stroke="#fb923c" strokeWidth="1" strokeDasharray="3 2" />
    <text x="32" y="22" textAnchor="middle" fill="#fb923c" fontSize="7" fontWeight="bold" fontFamily="monospace" letterSpacing="2">OSHA</text>
    <text x="32" y="33" textAnchor="middle" fill="#fed7aa" fontSize="11" fontWeight="bold" fontFamily="monospace">30</text>
    <text x="32" y="42" textAnchor="middle" fill="#fb923c" fontSize="5" fontFamily="monospace" letterSpacing="1">CONSTRUCTION</text>
    <path d="M20 47 L32 44 L44 47" stroke="#f97316" strokeWidth="1" fill="none" />
  </svg>
);

const ForkliftSeal = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0">
    <circle cx="32" cy="32" r="30" fill="#1c1917" stroke="#eab308" strokeWidth="2" />
    <circle cx="32" cy="32" r="24" fill="none" stroke="#facc15" strokeWidth="1" strokeDasharray="3 2" />
    <text x="32" y="20" textAnchor="middle" fill="#facc15" fontSize="5.5" fontWeight="bold" fontFamily="monospace" letterSpacing="1.5">CERTIFIED</text>
    <rect x="18" y="30" width="18" height="10" rx="1" fill="#facc15" />
    <rect x="36" y="33" width="3" height="7" rx="0.5" fill="#facc15" />
    <rect x="39" y="34" width="8" height="1.5" rx="0.5" fill="#fde047" />
    <rect x="39" y="37" width="8" height="1.5" rx="0.5" fill="#fde047" />
    <rect x="34" y="26" width="2" height="14" rx="0.5" fill="#fde047" />
    <circle cx="22" cy="41" r="2.5" fill="#1c1917" stroke="#facc15" strokeWidth="1" />
    <circle cx="32" cy="41" r="2.5" fill="#1c1917" stroke="#facc15" strokeWidth="1" />
    <text x="32" y="52" textAnchor="middle" fill="#facc15" fontSize="5" fontFamily="monospace" letterSpacing="1">OPERATOR</text>
  </svg>
);

const JamilMathenyPage = () => {
  return (
    <div className="min-h-screen" style={{ background: '#181818', color: '#f0f0f0' }}>

      {/* Indigo grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.13) 0%, transparent 55%)' }} />
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(52,211,153,0.07) 0%, transparent 50%)' }} />
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(167,139,250,0.07) 0%, transparent 50%)' }} />

      <div className="relative z-10 w-full px-6 py-40">
        <div className="max-w-4xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-indigo-300 bg-indigo-400/30 hover:bg-indigo-300/30 border border-indigo-400/30 px-3 py-1.5 rounded-lg transition-colors duration-200 mb-10"
          >
            ← Back to Home
          </Link>

          {/* Page label */}
          <div className="mb-4">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-[#111120] px-3 py-1 rounded border border-[#2a2a3a]">
              About the Founder
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-2"
            style={{ letterSpacing: '-0.09em', color: '#f0f0f0' }}
          >
            Jamil{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #818cf8, #a78bfa, #f8fafc, #818cf8)', backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite' }}
            >
              Matheny
            </span>
          </h1>
          <p className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-12">
            Founder, Majestik Magik Inc.
          </p>

          {/* Article card */}
          <article
            className="rounded-2xl border p-8 md:p-12 space-y-6 text-sm leading-relaxed"
            style={{ background: '#111120', borderColor: '#2a2a3a', color: '#a0a0b0' }}
          >
            {/* Photo + intro */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl opacity-40" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', filter: 'blur(8px)' }} />
                  <Image
                    src="/img/0-jamil.webp"
                    alt="Jamil Matheny"
                    width={180}
                    height={180}
                    className="relative rounded-xl object-cover"
                    style={{ border: '1px solid rgba(99,102,241,0.2)' }}
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="text-base font-medium leading-relaxed" style={{ color: '#f0f0f0' }}>
                Jamil Matheny is the founder of Majestik Magik, Inc. He got tired of watching businesses stuck with outdated, clunky software they couldn&apos;t control or get real support for. So he started building it for them instead.
              </p>
            </div>

            <p>
              He grew up in Virginia, got his first taste of hardware from a neighbor who worked in IT, and taught himself to code through Myspace and Yahoo Geocities. That&apos;s not a joke. That&apos;s actually how a lot of good developers got started.
            </p>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl opacity-40" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', filter: 'blur(8px)' }} />
                  <Link href="/img/344705572_03be87188e_b.jpg" target="_blank">
                    <Image
                      src="/img/344705572_03be87188e_b.jpg"
                      alt="Jamil Matheny featured in the Richmond Times-Dispatch"
                      width={160}
                      height={240}
                      className="relative rounded-xl object-cover"
                      style={{ border: '1px solid rgba(99,102,241,0.2)' }}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <p>
                  Before Majestik Magik, Jamil covered E3 in Los Angeles as a journalist for Advanced Media Network (now Gamezone.com) and got featured in the Richmond Times-Dispatch for his take on gaming culture. He also fronted a heavy metal band called Spiral Fracture, won the 2012 Battle of the Bands, and performed at the Rockstar Energy Mayhem Festival on the same bill as Slipknot and Anthrax.
                </p>
                <p>
                  In between, he ran a photography business, built a solo cleaning operation, and worked at FedEx and Amazon. Not as a detour. As research. Every job taught him something about how businesses actually run.
                </p>
              </div>
            </div>

            <p>
              He&apos;s largely self-taught, obsessive about building things, and has been that way since he was making model cars and soldering circuits as a kid. That same instinct is what drives Majestik Magik. He doesn&apos;t just want to build websites. He wants to build the systems businesses actually depend on.
            </p>

            {/* Pull quote */}
            <p style={{ color: '#a0a0b0' }}>He&apos;s a father, a builder, and genuinely obsessed with making things work.</p>

            {/* Stat chips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-[#2a2a3a]">
              {[
                { label: 'Company', value: 'Majestik Magik Inc.' },
                { label: 'Location', value: 'Virginia, USA' },
                { label: 'Focus', value: 'Local-First Systems' },
                { label: 'Philosophy', value: 'Align. Build. Ship.' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg p-3 border border-[#2a2a3a]" style={{ background: '#0e0e1a' }}>
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: '#606070' }}>{label}</p>
                  <p className="text-xs font-mono font-bold" style={{ color: '#f0f0f0' }}>{value}</p>
                </div>
              ))}
            </div>

            {/* Federal Vendor Credentials */}
            <div className="pt-4 border-t border-[#2a2a3a] space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f0f0f0' }}>Federal Vendor Credentials</p>
              {['SAM.gov Registered Entity', 'UEI: F1TGDDS92AK3', 'CAGE Code: 14BU8'].map(item => (
                <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                  <ShieldCheckIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-xs font-mono text-indigo-300 tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="pt-4 border-t border-[#2a2a3a] space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f0f0f0' }}>Certifications</p>
              <a href="/majestikmagikai_42433375_20260917185138_30hourconstructionindustryoutreach.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors">
                <OshaSeal />
                <div>
                  <span className="text-xs font-mono text-amber-300 font-bold block">OSHA 30 — Construction Industry Outreach</span>
                  <span className="text-[11px] text-amber-400/60 mt-0.5 block">U.S. Dept. of Labor • View Certificate →</span>
                </div>
              </a>
              <a href="/Certificate_1004230428-3.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors">
                <ForkliftSeal />
                <div>
                  <span className="text-xs font-mono text-amber-300 font-bold block">Forklift Operator Certification</span>
                  <span className="text-[11px] text-amber-400/60 mt-0.5 block">Powered Industrial Truck • View Certificate →</span>
                </div>
              </a>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
};

export default JamilMathenyPage;
