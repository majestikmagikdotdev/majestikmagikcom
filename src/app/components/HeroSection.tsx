'use client';

import React from 'react';
import { MagicWandIcon, LightbulbIcon, ZapIcon } from './Icons';
import ScrollToServices from './ScrollToServices';

interface HeroSectionProps {
  onLearnMore?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="home" aria-labelledby="home-heading" aria-describedby="home-desc" className="relative z-0 pt-20 pb-12 md:pt-48 md:pb-36 overflow-hidden" style={{ background: 'rgb(15, 23, 42)' }}>

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
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-950/20 border border-indigo-500/30 shadow-sm px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-indigo-300"
          style={{ animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          System Status: Online & Ready
        </div>

        {/* H1 */}
        <h1
          id="home-heading"
          className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white leading-tight opacity-90"
          style={{ letterSpacing: '-0.04em', animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards' }}
        >
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-50 via-indigo-500 to-white" style={{ letterSpacing: '-0.06em' }}>
            Web Engineering <br /> & AI Optimization
          </span> 
         
        </h1>

        {/* Subheadline */}
        <p id="home-desc" className="mx-auto mb-10 text-lg md:text-xl text-slate-200 font-sans leading-relaxed"
          style={{ animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' }}
        >
          Boost Core Web Vitals to 90+ & Optimize Site Messaging in 72 Hours.
        </p>

        {/* Dual CTA */}
        <div className="mb-10 md:mb-28 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' }}
        >
          <a
            href="https://book.stripe.com/eVq00j5G66OGaS2bFRdEs07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-mono uppercase tracking-wider text-sm py-4 px-10 rounded transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
          >
            Request an Engineering Audit
          </a>
          <ScrollToServices />
        </div>

        {/* Dashboard Preview */}
        <div className="w-full mx-auto relative z-10">

          {/* Aurora glow behind mockup */}
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 via-indigo-500/20 to-purple-600/20 rounded-3xl blur-3xl opacity-75 animate-[pulse_6s_ease-in-out_infinite] pointer-events-none z-0" />
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl opacity-50 pointer-events-none z-0" />

          {/* Browser chrome frame */}
          <div className="group relative z-10 border border-[#334155] rounded-xl overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.1)] bg-[#1e293b] transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_80px_rgba(99,102,241,0.2)]">

            {/* Browser top bar */}
            <div className="hidden md:flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-[#334155]">
              <span className="w-3 h-3 rounded-full bg-[#334155]" />
              <span className="w-3 h-3 rounded-full bg-[#334155]" />
              <span className="w-3 h-3 rounded-full bg-[#334155]" />
              <div className="ml-4 flex-1 bg-[#1e293b] rounded px-3 py-1 text-xs font-mono text-slate-500 text-left">
                https://majestikmagikai.github.io/father-figure-nutrition/product/15-day-fresh-start-cleanse
              </div>
            </div>

            {/* Glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-300/5 to-white/5 pointer-events-none z-30" />

            {/* Static Image Preview */}
            <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"                
                className="w-full h-full object-cover"
              >
                <source
                  src="/videos/fatherfigurenutrition_project.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Feature Chips */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 shadow-sm">
            <MagicWandIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <span className="text-xs font-mono text-indigo-300 tracking-wide">
              Core Web Vitals Optimization
            </span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 shadow-sm">
            <ZapIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <span className="text-xs font-mono text-indigo-300 tracking-wide">
              Sub-Second Latency
            </span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 shadow-sm">
            <LightbulbIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <span className="text-xs font-mono text-indigo-300 tracking-wide">
              GEO-Targeted AI Content Layer
            </span>
          </div>
        </div>

        <p className="sr-only">Majestik Magik provides on-demand web engineering and AI optimization services to boost performance and clarify messaging for businesses.</p>
      </div>
    </section>
  );
};

export default HeroSection;
