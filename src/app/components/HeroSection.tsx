'use client';

import React from 'react';
import Link from 'next/link';
import { MagicWandIcon, LightbulbIcon, ZapIcon } from './Icons';
import ScrollToServices from './ScrollToServices';

interface HeroSectionProps {
  onLearnMore?: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="home" aria-labelledby="home-heading" aria-describedby="home-desc" className="scroll-animate relative z-0 pt-20 pb-12 md:pt-48 md:pb-36" style={{ background: 'rgb(15, 23, 42)' }}>

      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 z-10 opacity-90 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(99, 102, 241, 0.5) 0%, rgba(99, 102, 241, 0.2) 30%, rgb(15, 23, 42) 65%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Dot matrix pattern */}
      <div
        className="absolute inset-0 z-[11] pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(247, 248, 248, 0.3) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="w-full relative px-4 md:px-6 mx-auto z-20 text-center">

        {/* Status Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-950/20 shadow-sm px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-indigo-300"
          style={{ animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Serving Small &amp; Mid-Size Businesses
        </div>

        {/* H1 */}
        <h1
          id="home-heading"
          className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white leading-tight opacity-90"
          style={{ letterSpacing: '-0.04em', animation: 'fadeUp 3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards' }}
        >
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-50 via-indigo-500 to-white" style={{ letterSpacing: '-0.06em' }}>
            Your Business,{' '}<br />Built to Compete
          </span>
        </h1>

        {/* Subheadline */}
        <p id="home-desc" className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-slate-200 font-sans leading-relaxed"
          style={{ animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' }}
        >
          We build platforms, fix broken systems, and get your business found — by search engines and AI alike. Shipped within 72 hours.
        </p>

        {/* Dual CTA */}
        <div className="mb-10 md:mb-28 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' }}
        >
          <Link
            href="/#services-pricing"
            className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-mono uppercase tracking-wider text-sm py-4 px-10 rounded transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
          >
            See What We Fix
          </Link>
          <ScrollToServices />
        </div>

        {/* Trust Chips */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 shadow-sm">
            <ZapIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <span className="text-xs font-mono text-indigo-300 tracking-wide">Fast Deliverables</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 shadow-sm">
            <MagicWandIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <span className="text-xs font-mono text-indigo-300 tracking-wide">Pay Per Project. Tech Support on Retainer.</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 shadow-sm">
            <LightbulbIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <span className="text-xs font-mono text-indigo-300 tracking-wide">Visible to Google AI, ChatGPT &amp; Search</span>
          </div>
        </div>

        <p className="sr-only">Majestik Magik builds platforms and digital systems for small and mid-size businesses. Web engineering, AI visibility, and performance optimization shipped within 72 hours.</p>
      </div>
    </section>
  );
};

export default HeroSection;
