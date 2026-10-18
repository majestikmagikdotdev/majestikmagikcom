'use client';
import React, { useEffect, useRef } from 'react';

const STEPS = [
  {
    number: '01',
    phase: 'Week 1',
    title: 'We figure out exactly what you need.',
    desc: 'It starts with a deep dive into your workflow, requirements, and goals so the scope reflects how your business actually operates. Everything gets priced, documented, and put in writing before a single line of code is written.',
    color: 'indigo',
  },
  {
    number: '02',
    phase: 'Weeks 1–2',
    title: "Let's build.",
    desc: 'Full-stack architecture, database design, API integrations, and core feature development all happen here. For offline-ready builds, local-first storage and sync logic gets wired in during this phase. Progress is visible as it happens through the Pivot Quest client portal, not just when the build is handed over at the end.',
    color: 'violet',
  },
  {
    number: '03',
    phase: 'Week 3',
    title: 'You kick the tires.',
    desc: 'A full staging walkthrough covers QA across devices and browsers before anything touches production. Your feedback gets incorporated in rounds, and nothing goes live until you have signed off on it.',
    color: 'purple',
  },
  {
    number: '04',
    phase: 'Launch & Beyond',
    title: 'It goes live. You own it.',
    desc: 'Production deployment, custom domain setup, and a full codebase handoff. The code, docs, and IP are yours outright. Support is available after launch if you need it.',
    color: 'emerald',
  },
];

const colorMap: Record<string, { num: string; phase: string; bar: string }> = {
  indigo:  { num: 'text-indigo-400',  phase: 'text-indigo-400/60',  bar: 'bg-indigo-500' },
  violet:  { num: 'text-violet-400',  phase: 'text-violet-400/60',  bar: 'bg-violet-500' },
  purple:  { num: 'text-purple-400',  phase: 'text-purple-400/60',  bar: 'bg-purple-500' },
  emerald: { num: 'text-emerald-400', phase: 'text-emerald-400/60', bar: 'bg-emerald-500' },
};

export default function ProcessSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full px-4 md:px-6 py-20 md:py-32" aria-label="Our process">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#d4d4d8]"
            style={{ letterSpacing: '-0.02em', lineHeight: '1', fontFamily: 'var(--font-im-fell-english)' }}
          >
            Here&apos;s what happens
            <br />
            <span className="text-[#707080]">after you reach out.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div ref={lineRef} className="connector-line absolute left-[19px] top-6 bottom-6 w-px bg-[#1e1e2e] hidden md:block" />

          <div className="flex flex-col gap-0">
            {STEPS.map((s) => {
              const c = colorMap[s.color];
              return (
                <div
                  key={s.number}
                  className="reveal relative flex gap-6 md:gap-8 pb-10 last:pb-0"
                >
                  {/* Step number node */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full bg-[#0a0a12] border border-[#1e1e2e] flex items-center justify-center font-mono text-xs font-bold ${c.num} z-10`}
                    aria-hidden="true"
                    >
                      {s.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] font-mono font-semibold uppercase tracking-[0.12em] ${c.phase}`}>
                        {s.phase}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-[#d0d0e0] mb-2"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#808090] leading-relaxed max-w-xl">{s.desc}</p>

                    {/* Accent bar */}
                    <div className={`mt-4 h-px w-12 ${c.bar} opacity-40 rounded-full`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
