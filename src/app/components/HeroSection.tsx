'use client';

import React, { useState } from 'react';
import { MagicWandIcon, LightbulbIcon, ZapIcon } from './Icons';
import ScrollToServices from './ScrollToServices';
import RequestQuoteModal from './RequestQuoteModal';

interface HeroSectionProps {
  onLearnMore?: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="home" aria-labelledby="home-heading" aria-describedby="home-desc" className="scroll-animate relative z-0 overflow-hidden pt-20 pb-12 md:pt-48 md:pb-36" style={{ background: 'rgb(15, 23, 42)' }}>

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
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-50 via-indigo-500 to-white" style={{ letterSpacing: '-0.02em' }}>
            Get Your Business{' '}<br />Found Online
          </span>
        </h1>

        {/* Subheadline */}
        <p id="home-desc" className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-slate-200 font-sans leading-relaxed"
          style={{ animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' }}
        >
          We build fast websites, fix broken sites, and make sure Google and AI can find you. So you attract more leads and grow your business.
        </p>

        {/* Dual CTA */}
        <div className="mb-10 md:mb-28 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block text-white cursor-pointer font-mono uppercase tracking-wider text-sm py-4 px-10 rounded transition-all duration-200 bg-indigo-600 hover:bg-indigo-500 font-bold"
          >
            Request a Quote →
          </button>
          <ScrollToServices />
        </div>

        {/* Trust Chips */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {[
            { icon: <ZapIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />, label: 'Built Fast', delay: '0s' },
            { icon: <MagicWandIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />, label: 'Fixed in 24–72 Hours', delay: '0.3s' },
            { icon: <LightbulbIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />, label: 'Get More Leads', delay: '0.6s' },
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

        <p className="sr-only">Majestik Magik builds platforms and digital systems for small and mid-size businesses. Web engineering, AI visibility, and performance optimization shipped within 72 hours.</p>
      </div>
      <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
