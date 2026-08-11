'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onLearnMore?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {

  return (
    <section id="home" aria-labelledby="home-heading" aria-describedby="home-desc" className="relative z-0 pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden" style={{ background: 'rgb(15, 23, 42)' }}>

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

      <div className="w-full relative px-6 mx-auto z-20 text-center">

        {/* Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-indigo-300 scroll-animate">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          WEB ENGINEERING & AI OPTIMIZATION PLATFORM
        </div>

        {/* H1 */}
        <h1
          id="home-heading"
          className="mb-6 text-[1.75rem] xs:text-[2.25rem] sm:text-[3rem] md:text-[6rem] lg:text-[11rem] text-white leading-[0.9] scroll-animate opacity-90 ease-in-out duration-500"
          style={{ letterSpacing: '-0.06em' }}
        >
          <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-400 to-white">
            Introducing{' '}
          </span>
          <span className="font-black">Pivot Quest</span>

          <span className="sr-only"> by Majestik Magik — Web Engineering & AI Optimization Services</span>
        </h1>

        {/* Subheadline */}
        <p id="home-desc" className="mx-auto mb-10 text-lg md:text-xl text-slate-200 font-sans leading-relaxed scroll-animate opacity-95 ease-in-out duration-500">
          Web engineering and AI optimization for small-to-mid size businesses that need results fast.
        </p>

        {/* Dual CTA */}
        <div className="mb-20 md:mb-28 flex flex-col sm:flex-row items-center justify-center gap-4 scroll-animate opacity-90 ease-in-out duration-500">
          <a
            href="https://app.majestikmagik.dev/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-mono uppercase tracking-wider text-sm py-4 px-10 rounded transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
          >
            Get Started Free
          </a>
          <a
            href="https://majestikmagik.dev/#services"
            className="inline-block text-slate-200 font-mono uppercase tracking-wider text-sm py-4 px-10 rounded transition-all duration-200 border border-white/20 hover:border-white/40 hover:text-white bg-white/5 hover:bg-white/10"
          >
            Explore Services →
          </a>
        </div>

        {/* Dashboard Preview */}
        <div className="w-full mx-auto relative z-10">

          {/* Aurora glow behind mockup */}
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 via-indigo-500/20 to-purple-600/20 rounded-3xl blur-3xl opacity-75 animate-[pulse_6s_ease-in-out_infinite] pointer-events-none z-0" />
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl opacity-50 pointer-events-none z-0" />

          {/* Browser chrome frame */}
          <div className="hidden md:block group relative z-10 border border-[#334155] rounded-xl overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.1)] bg-[#1e293b] transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_80px_rgba(99,102,241,0.2)]">

            {/* Browser top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-[#334155]">
              <span className="w-3 h-3 rounded-full bg-[#334155]" />
              <span className="w-3 h-3 rounded-full bg-[#334155]" />
              <span className="w-3 h-3 rounded-full bg-[#334155]" />
              <div className="ml-4 flex-1 bg-[#1e293b] rounded px-3 py-1 text-xs font-mono text-slate-500 text-left">
                app.majestikmagik.dev
              </div>
            </div>

            {/* Glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-300/5 to-white/5 pointer-events-none z-30" />

            <Image
              src="/img/screenshot_mm_ai.webp"
              alt="Pivot Quest Dashboard Screenshot"
              width={1920}
              height={1080}
              priority
              fetchPriority="high"
              loading="eager"
              className="w-full h-auto transition-transform"
              sizes="(max-width: 1024px) 960px, 1200px"
            />
          </div>
        </div>

        {/* Feature Chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {['Powered by Majestik Core', 'Sub-Second Latency', 'Contextual Intelligence'].map((chip) => (
            <span
              key={chip}
              className="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded tracking-wide backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm text-slate-400 tracking-wide">
          Built for founders, by a solo founder
        </p>

        <p className="sr-only">
          Pivot Quest is a web engineering and AI optimization platform for businesses that need results fast.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
