'use client';
import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    number: '01',
    phase: 'Week 1',
    title: 'We figure out exactly what you need',
    desc: 'Deep-dive into your workflow, requirements, and goals. We scope it, price it, and put it in writing. No surprises later.',
    color: 'indigo',
  },
  {
    number: '02',
    phase: 'Weeks 1–2',
    title: 'We build it',
    desc: 'Full-stack architecture, database design, API integrations, core features. You see progress as it happens — not just at the end.',
    color: 'violet',
  },
  {
    number: '03',
    phase: 'Week 3',
    title: 'You kick the tires',
    desc: 'Staging walkthrough, QA across devices, your feedback rounds. We don\'t push to production until you sign off.',
    color: 'purple',
  },
  {
    number: '04',
    phase: 'Launch & Beyond',
    title: 'It goes live. You own it.',
    desc: 'Production deployment, custom domain setup, full codebase handoff. It\'s yours — docs, IP, everything. We stick around if you need us.',
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(STEPS.map(() => false));

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(v => { const n = [...v]; n[i] = true; return n; });
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section className="w-full px-4 md:px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-[#404050] mb-5">How it works</p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f0f0f0]"
            style={{ letterSpacing: '-0.04em', lineHeight: '1' }}
          >
            Here&apos;s what happens
            <br />
            <span className="text-[#404050]">after you reach out.</span>
          </h2>
          <p className="mt-5 text-sm text-[#a0a0b0] max-w-lg leading-relaxed"> You know what’s happening at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-[#1e1e2e] hidden md:block" />

          <div className="flex flex-col gap-0">
            {STEPS.map((s, i) => {
              const c = colorMap[s.color];
              return (
                <div
                  key={s.number}
                  ref={el => { cardRefs.current[i] = el; }}
                  className="relative flex gap-6 md:gap-8 pb-10 last:pb-0"
                  style={{
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '500ms',
                    transitionDelay: `${i * 80}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    opacity: visible[i] ? 1 : 0,
                    transform: visible[i] ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  {/* Step number node */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full bg-[#0a0a12] border border-[#1e1e2e] flex items-center justify-center font-mono text-xs font-bold ${c.num} z-10`}
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
                    <p className="text-sm text-[#606070] leading-relaxed max-w-xl">{s.desc}</p>

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
