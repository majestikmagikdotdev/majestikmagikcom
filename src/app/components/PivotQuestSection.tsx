'use client';

import React from 'react';

const PivotQuestSection: React.FC = () => {
  return (
    <section
      id="pivot-quest"
      aria-labelledby="pivot-quest-heading"
      aria-describedby="pivot-quest-desc"
      className="scroll-animate relative z-0 py-12 md:py-24"
      style={{ background: 'var(--bg-app)', fontFamily: 'var(--font-sans)' }}
    >
      <div
        className="absolute inset-0 z-11 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(100, 116, 139, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="w-full relative px-4 md:px-6 mx-auto z-20">
        <div className="text-center mx-auto mb-8 md:mb-16 max-w-3xl">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[var(--bg-surface)] px-3 py-1 rounded border border-[var(--border-light)]">
            Not Ready to Build Yet?
          </span>
          <h2
            id="pivot-quest-heading"
            className="mb-2 text-[2.75rem] sm:text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight"
            style={{ letterSpacing: '-0.04em', color: 'var(--text-primary)' }}
          >
            Meet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-500 to-slate-800">
              Pivot Quest
            </span>
          </h2>
          <p id="pivot-quest-desc" className="mt-4 text-base md:text-lg font-sans leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            An AI co-founder to help you get there. Still working through your business model, data sourcing, or operational plan? Pivot Quest is a self-service tool built to help founders think through those pieces before engineering begins. Come back when you&apos;re ready to build.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center max-w-md rounded-lg p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_32px_rgba(67,56,202,0.12)] transition duration-200"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)' }}>
            <div className="flex items-center gap-1.5 mb-3">
              <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
              <span className="text-xs font-mono text-emerald-600 font-semibold">Self-Service &amp; Available Now</span>
            </div>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              Work through data sourcing, operational planning, and business mechanics on your own timeline—no engagement required.
            </p>
            <a
              href="https://app.majestikmagik.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded px-4 py-2.5 text-sm font-mono font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-600 hover:border-indigo-500 transition-all duration-200 cursor-pointer"
            >
              Try Pivot Quest →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PivotQuestSection;
