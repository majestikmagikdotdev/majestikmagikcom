'use client';

import React from 'react';
import { MagicWandIcon, LightbulbIcon, ZapIcon } from './Icons';
import ScrollToServices from './ScrollToServices';

interface HeroSectionProps {
  onLearnMore?: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = () => {
  const handleScrollToContact = () => {
    const target = document.getElementById('contact');
    if (!target) return;
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const duration = 1200;
    let startTime: number | null = null;
    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      window.scrollTo(0, start + (end - start) * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  return (
    <section id="home" aria-labelledby="home-heading" aria-describedby="home-desc" className="scroll-animate relative z-0 overflow-hidden pt-42 pb-42 md:pt-52 md:pb-42" style={{ background: 'rgb(15, 23, 42)' }}>

      {/* Noise overlay */}
      <div className="noise-overlay z-[9]" />

      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hero-breathe"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(99, 102, 241, 0.55) 0%, rgba(99, 102, 241, 0.2) 35%, rgb(15, 23, 42) 68%)',
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
          className="mb-4 inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-950/20 shadow-sm px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-indigo-300"
          style={{ animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Serving Ready-to-Build Founders &amp; Companies
        </div>

        {/* H1 */}
        <h1
          id="home-heading"
          className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white leading-tight opacity-90"
          style={{ letterSpacing: '-0.04em', animation: 'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards' }}
        >
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-50 via-indigo-300 to-white" style={{ letterSpacing: '-0.02em' }}>
            Ready to Build? So Are We.
          </span>
        </h1>

        {/* Subheadline */}
        <p id="home-desc" className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-slate-200 font-sans leading-relaxed"
          style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' }}
        >
          We architect and ship production-grade platforms for businesses that already know their model, their data, and their next move. We&apos;re not here to build your business plan; we&apos;re here to build your platform.
        </p>

        {/* Dual CTA */}
        <div className="mb-8 md:mb-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' }}
        >
          <button
            onClick={handleScrollToContact}
            className="inline-block text-white cursor-pointer font-mono uppercase tracking-wider text-sm py-4 px-10 rounded transition-all duration-200 bg-indigo-600 hover:bg-indigo-500 font-bold"
          >
            Request a Quote →
          </button>
          <ScrollToServices />
        </div>

        {/* Trust Chips */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          {[
            { icon: <ZapIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />, label: 'Client-Owned Infrastructure', delay: '0s' },
            { icon: <MagicWandIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />, label: 'Milestone-Based Delivery', delay: '0.3s' },
            { icon: <LightbulbIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />, label: 'Full IP Transfer on Completion', delay: '0.6s' },
          ].map(({ icon, label, delay }) => (
            <div
              key={label}
              className="chip-shimmer flex items-center gap-2 p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 shadow-sm"
              style={{ animationDelay: delay }}
            >
              {icon}
              <span className="text-xs font-mono text-indigo-300 tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        <p className="sr-only">Majestik Magik architects and builds custom software platforms for founders and companies with established business operations, data readiness, and defined budgets. Milestone-based engineering with full client ownership and IP transfer.</p>
      </div>
    </section>
  );
};

export default HeroSection;