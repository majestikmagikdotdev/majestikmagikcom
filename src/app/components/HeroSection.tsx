'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onLearnMore?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {

  return (
    <section id="home" aria-labelledby="home-heading" className="relative z-0 pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden" style={{ background: 'rgb(15, 23, 42)' }}>

      {/* Apple-style centered cinematic ambient radial core glow */}
      <div
        className="absolute inset-0 z-10 opacity-90 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(99, 102, 241, 0.5) 0%, rgba(99, 102, 241, 0.2) 30%, rgb(15, 23, 42) 65%)',
          animation: 'pulse 4s ease-in-out infinite',
          
        }}        
      ></div>

      {/* High-end hardware processor micro-dot matrix pattern */}
      <div
        className="absolute inset-0 z-[11] pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(247, 248, 248, 0.3) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="w-full relative px-6 mx-auto z-20 text-center">

        {/* Floating Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400 scroll-animate opacity-90 ease-in-out duration-500">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          WEB ENGINEERING & AI OPTIMIZATION PLATFORM
        </div>

        {/* Massive Apple-Inspired Header Stack */}
        <h1 id="home-heading" className="mb-6 text-7xl md:text-8xl lg:text-9xl xl:text-13xl slate-100 font-bold tracking-tighter leading-[0.9] scroll-animate opacity-90 ease-in-out duration-500">
          Introducing{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 via-indigo-400 to-white scroll-animate opacity-90 ease-in-out duration-1000">
            Pivot Quest
          </span>
          <span className="sr-only"> by Majestik Magik — Web Engineering & AI Optimization Services</span>
        </h1>

        {/* Elegant Centered Description */}
        <p className="mx-auto mb-10 text-base md:text-xl text-slate-400 font-sans leading-relaxed scroll-animate opacity-90 ease-in-out duration-500">
          A platform powering high-performance web architecture, AI workflow, and end-to-end digital operations.
        </p>

        {/* Clean Call To Action Layer */}
        <div className="mb-20 md:mb-28 scroll-animate opacity-90 ease-in-out duration-500">
          <a
            href="https://app.majestikmagik.dev/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-mono uppercase tracking-wider text-sm py-3 px-8 rounded transition-all duration-200 border border-indigo-500/50"
          >
            LEARN MORE
          </a>
          <p className="mt-3 text-xs text-slate-500 tracking-wide">
            Built for founders, by a solo founder
          </p>
        </div>

        {/* Centerpiece Hardware Device / Interface Frame */}
        <div className="w-full mx-auto relative z-10">

          {/* Dynamic Aurora Ambient Glow Wrapper (Fades in/out behind the mockup) */}
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 via-purple-600/20 to-indigo-500/30 rounded-3xl blur-3xl opacity-75 animate-[pulse_6s_ease-in-out_infinite] pointer-events-none z-0" />
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl opacity-50 pointer-events-none z-0" />

          {/* Mobile: Hidden for instant LCP / Desktop: Rendered frame */}
          <div className="hidden md:block group relative z-10 border border-[#334155] rounded-xl overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.08)] bg-[#1e293b] p-2 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_80px_rgba(99,102,241,0.15)]">

            {/* Top glass reflection highlight with an indigo-tinted gradient across the hardware frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-300/10 to-white/5 pointer-events-none z-30" />

            <Image
              src="/img/screenshot_mm_ai.webp"
              alt="Pivot Quest Screenshot"
              width={1920}
              height={1080}
              priority
              fetchPriority="high"
              loading="eager"
              className="w-full h-auto rounded-xl border border-indigo-950/50 transition-transform"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            />

          </div>
        </div>

        {/* Feature Chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {['Powered by Majestik Core', 'Sub-Second Latency', 'Contextual Intelligence'].map((chip) => (
            <span
              key={chip}
              className="text-xs font-mono text-slate-500/70 bg-[#1e293b] border border-[#334155] px-3 py-1.5 rounded tracking-wide"
            >
              {chip}
            </span>
          ))}
        </div>

        <p className="sr-only">
          Pivot Quest is a gamified AI engine that keeps your business decisions sharp, your team aligned, and your execution on track.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;