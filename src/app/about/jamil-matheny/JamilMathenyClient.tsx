'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
                Jamil Matheny is the founder of Majestik Magik, Inc. He started the company because he got tired of watching businesses overpay for software they didn&apos;t own and couldn&apos;t control. So he builds it for them instead.
              </p>
            </div>

            <p>
              He grew up in Virginia, got his first taste of hardware from a neighbor who worked in IT, and taught himself to code through Myspace and Yahoo Geocities. That&apos;s not a joke — that&apos;s actually how a lot of good developers got started.
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
          </article>

        </div>
      </div>
    </div>
  );
};

export default JamilMathenyPage;
