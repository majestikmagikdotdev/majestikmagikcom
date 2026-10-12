'use client';
import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    phase: 'WEEK 1',
    number: '01',
    title: 'Discovery & Scope',
    desc: 'Deep-dive workflow scoping, requirements gathering, technical architecture planning, transparent milestone pricing, and formal contract execution.',
    color: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-400',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    align: 'self-start lg:w-[480px]',
  },
  {
    phase: 'WEEKS 1–2',
    number: '02',
    title: 'Core Engineering',
    desc: 'Full-stack architecture buildout, database design, API integrations, core feature development, and iterative code review against the agreed spec.',
    color: 'border-violet-500/40 bg-violet-950/20 text-violet-400',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
    align: 'self-end lg:w-[480px] lg:mr-12',
  },
  {
    phase: 'WEEK 3',
    number: '03',
    title: 'Demo & Verification',
    desc: 'Staging environment walkthrough, QA testing across devices and edge cases, client feedback rounds, and formal sign-off before production deployment.',
    color: 'border-purple-500/40 bg-purple-950/20 text-purple-400',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    align: 'self-start lg:ml-24 lg:w-[480px]',
  },
  {
    phase: 'LAUNCH & BEYOND',
    number: '04',
    title: 'Production & Handoff',
    desc: 'Production deployment, custom domain and infrastructure setup, full IP and codebase handoff, documentation, and ongoing support as needed.',
    color: 'border-emerald-500/60 bg-emerald-950/30 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    align: 'self-end lg:w-[500px]',
  },
];

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
    <section className="w-full px-4 md:px-8 py-24 text-[#f0f0f0] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-3 bg-[#1a1a2a] px-3 py-1 rounded border border-[#2a2a3a]">
            • Client Journey
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            What to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-[#f0f0f0]">
              expect.
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#a0a0b0] max-w-xl">
            A clear, 4-step delivery pipeline engineered to bring enterprise systems online with zero downtime or audit risk.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative flex flex-col gap-12 lg:gap-16">
          {/* Dashed connector line — desktop only */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" fill="none" strokeWidth="2">
              {/* dim static track */}
              <path d="M 240 100 L 240 220 L 750 220 L 750 360 L 340 360 L 340 500 L 800 500 L 800 680" stroke="#2a2a3e" strokeDasharray="6 6" />
              {/* animated flow */}
              <path d="M 240 100 L 240 220 L 750 220 L 750 360 L 340 360 L 340 500 L 800 500 L 800 680" stroke="#6366f1" strokeDasharray="12 120" strokeOpacity="0.7" style={{ animation: 'pipeline-flow 3s linear infinite' }} />
            </svg>
          </div>

          {STEPS.map((s, i) => (
            <div
              key={s.number}
              ref={el => { cardRefs.current[i] = el; }}
              className={`relative z-10 flex flex-col sm:flex-row items-stretch rounded-2xl border ${s.color} bg-[#111120] p-1 transition-all duration-300 hover:brightness-110 ${s.align}`}
              style={{
                transitionProperty: 'opacity, transform, filter',
                transitionDuration: '600ms',
                transitionDelay: `${i * 120}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? 'translateY(0)' : 'translateY(32px)',
                filter: visible[i] ? 'blur(0px)' : 'blur(6px)',
              }}
            >
              {/* Vertical side badge */}
              <div className="flex sm:flex-col items-center justify-center px-4 py-3 sm:py-0 bg-[#0e0e1a] rounded-xl border border-[#2a2a3a] font-mono text-[10px] tracking-widest text-[#606070] uppercase sm:[writing-mode:vertical-lr] sm:rotate-180">
                {s.phase}
              </div>

              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 text-[11px] font-mono font-bold rounded border ${s.badge}`}>
                    {s.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#f0f0f0] tracking-tight">{s.title}</h3>
                </div>
                <p className="text-sm text-[#a0a0b0] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
