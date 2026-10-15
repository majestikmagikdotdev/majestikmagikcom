'use client';

import React, { useEffect, useRef, useState } from 'react';

// ── Mockup 01: Web Design wireframe ──────────────────────────────────────────
function WebDesignMockup() {
  return (
    <div className="w-full h-44 bg-[#0a0c14] rounded-xl border border-white/10 p-4 flex flex-col gap-2 justify-center">
      <div className="w-full h-3 bg-violet-600/30 rounded" />
      <div className="flex gap-2 flex-1">
        <div className="w-1/3 bg-violet-950/60 rounded border border-violet-500/20" />
        <div className="flex-1 flex flex-col gap-1.5 justify-center">
          <div className="h-2 w-full bg-slate-800 rounded" />
          <div className="h-2 w-4/5 bg-slate-800 rounded" />
          <div className="h-2 w-3/5 bg-slate-800 rounded" />
          <div className="mt-1 h-5 w-24 bg-violet-600/50 rounded border border-violet-500/30" />
        </div>
      </div>
    </div>
  );
}

// ── Mockup 02: Web Apps — animated counters ───────────────────────────────────
function WebAppMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true); }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const target = 1284;
    const step = 16;
    const inc = Math.ceil(target / (1200 / step));
    const id = setInterval(() => setUsers((n) => { const v = n + inc; if (v >= target) { clearInterval(id); return target; } return v; }), step);
    return () => clearInterval(id);
  }, [triggered]);

  return (
    <div ref={ref} className="w-full h-44 bg-[#0a0c14] rounded-xl border border-white/10 p-4 flex items-center justify-around font-mono text-xs text-slate-300">
      <div className="bg-slate-900 p-3 rounded-lg border border-white/5 text-center">
        <span className="block text-violet-400 font-bold text-sm">{users.toLocaleString()}</span>
        <span className="text-[10px] text-slate-500">ACTIVE USERS</span>
      </div>
      <div className="bg-slate-900 p-3 rounded-lg border border-white/5 text-center">
        <span className="block text-emerald-400 font-bold text-sm">99.98%</span>
        <span className="text-[10px] text-slate-500">UPTIME</span>
      </div>
      <div className="bg-slate-900 p-3 rounded-lg border border-white/5 text-center">
        <span className="block text-indigo-400 font-bold text-sm">12ms</span>
        <span className="text-[10px] text-slate-500">LATENCY</span>
      </div>
    </div>
  );
}

// ── Mockup 03: Systems — animated bar fill ────────────────────────────────────
function SystemsMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true); }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const bars = [
    { label: 'Inventory Engine', pct: 92, color: 'bg-violet-500' },
    { label: 'Fleet Tracker', pct: 78, color: 'bg-indigo-500' },
    { label: 'Logistics API', pct: 85, color: 'bg-purple-500' },
  ];

  return (
    <div ref={ref} className="w-full h-44 bg-[#0a0c14] rounded-xl border border-white/10 p-4 flex flex-col justify-center gap-3">
      <div className="px-2 py-1 bg-violet-950/80 border border-violet-500/30 rounded text-[11px] font-mono text-violet-300 w-fit">
        OWNED INFRASTRUCTURE
      </div>
      <div className="space-y-2">
        {bars.map(({ label, pct, color }, i) => (
          <div key={label}>
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-0.5">
              <span>{label}</span><span className="text-slate-400">{pct}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${color} rounded-full transition-all ease-out`}
                style={{ width: triggered ? `${pct}%` : '0%', transitionDuration: `${800 + i * 150}ms`, transitionDelay: triggered ? `${i * 80}ms` : '0ms' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Mockup 04: SEO — animated Lighthouse scores ───────────────────────────────
const lighthouseMetrics = [
  { label: 'Performance', target: 97, color: 'bg-emerald-500', textColor: 'text-emerald-400' },
  { label: 'SEO', target: 100, color: 'bg-violet-500', textColor: 'text-violet-400' },
  { label: 'Best Practices', target: 95, color: 'bg-indigo-500', textColor: 'text-indigo-400' },
];

function SEOMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [scores, setScores] = useState([0, 0, 0]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true); }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    lighthouseMetrics.forEach(({ target }, i) => {
      const step = 16;
      const inc = Math.ceil(target / ((900 + i * 150) / step));
      const id = setInterval(() => {
        setScores((prev) => {
          const next = [...prev];
          const v = next[i] + inc;
          if (v >= target) { next[i] = target; clearInterval(id); } else next[i] = v;
          return next;
        });
      }, step);
    });
  }, [triggered]);

  return (
    <div ref={ref} className="w-full h-44 bg-[#0a0c14] rounded-xl border border-white/10 p-4 flex flex-col justify-center gap-2.5">
      <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Lighthouse audit complete
      </div>
      {lighthouseMetrics.map(({ label, target, color, textColor }, i) => (
        <div key={label}>
          <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-0.5">
            <span>{label}</span><span className={textColor}>{scores[i]}</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${color} rounded-full transition-all ease-out`}
              style={{ width: triggered ? `${target}%` : '0%', transitionDuration: `${900 + i * 150}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Mockup 05: Local-First — animated offline status ─────────────────────────
function LocalFirstMockup() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, []);

  const ops = ['READ  users       0ms', 'WRITE fleet_log   0ms', 'SYNC  deferred    0ms', 'QUERY inventory   0ms'];

  return (
    <div className="w-full h-44 bg-slate-900/60 rounded-xl border border-slate-600/20 p-4 flex flex-col justify-between font-mono">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
        <span className="text-[11px] text-slate-300">OFFLINE MODE ACTIVE — SQLite Engine</span>
      </div>
      <div className="space-y-1">
        {ops.map((op, i) => (
          <div
            key={op}
            className="text-[10px] text-slate-400/70 transition-opacity duration-500"
            style={{ opacity: tick % ops.length === i ? 1 : 0.35 }}
          >
            <span className="text-slate-300">›</span> {op}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <span className="px-2 py-0.5 bg-slate-600 text-white text-[10px] rounded-full">SQLCipher</span>
        <span className="px-2 py-0.5 bg-slate-800/80 border border-slate-500/30 text-slate-300 text-[10px] rounded-full">0ms latency</span>
        <span className="px-2 py-0.5 bg-slate-800/80 border border-slate-500/30 text-slate-300 text-[10px] rounded-full">100% offline</span>
      </div>
    </div>
  );
}

// ── Services data ─────────────────────────────────────────────────────────────
const services = [
  {
    id: '01',
    category: 'INTERFACES THAT CONVERT',
    title: 'Web Design',
    description: 'Your site is the first thing people judge you by. We make sure it\'s not embarrassing. Fast, sharp, and built to actually convert.',
    bullets: ['Copy hierarchy engineered for conversion', 'Mobile-first, sub-second load times', 'Full production deployment with custom domain DNS'],
    isHighlighted: false,
    mockup: <WebDesignMockup />,
  },
  {
    id: '02',
    category: 'DASHBOARDS, PORTALS, TOOLS',
    title: 'Web Applications',
    description: 'Not another tool your team ignores. We build apps around how your people actually work. Real-time, integrated, and genuinely useful.',
    bullets: ['Role-based access, auth, and permissions', 'Real-time data pipelines and webhook integrations', 'Stripe billing, subscriptions, and reconciliation'],
    isHighlighted: false,
    mockup: <WebAppMockup />,
  },
  {
    id: '03',
    category: 'CUSTOM OPERATIONAL ENGINES',
    title: 'Systems-as-a-Service',
    description: 'You\'re paying monthly for software you\'ll never own. We build the same thing: inventory, fleet, logistics. Then we hand you the keys.',
    bullets: ['Full IP transfer. No subscriptions, no lock-in', 'Managed cloud or local-first deployment', 'Complete handoff docs and onboarding support'],
    isHighlighted: false,
    mockup: <SystemsMockup />,
  },
  {
    id: '04',
    category: 'FOUND FAST, LOADS FASTER',
    title: 'SEO & Core Web Vitals',
    description: 'Slow sites don\'t rank. Ugly markup doesn\'t rank. We fix both. Technical SEO, clean structure, and performance tuning that actually moves the needle.',
    bullets: ['90+ Lighthouse scores guaranteed', 'JSON-LD schema and GEO/AI visibility setup', 'Full audit with fixes delivered in days, not months'],
    isHighlighted: false,
    mockup: <SEOMockup />,
  },
  {
    id: '05',
    category: 'BARE-METAL RELIABILITY & ZERO LATENCY',
    title: 'Local-First & Mobile Apps',
    description: 'Works offline. Works fast. Works when the WiFi doesn\'t. Encrypted on-device storage with sync that catches up quietly in the background.',
    bullets: ['Sub-millisecond response. No server round-trip', 'SQLCipher encrypted storage on-device', 'Background sync resumes automatically when online'],
    isHighlighted: true,
    mockup: <LocalFirstMockup />,
  },
];

// ── Section ───────────────────────────────────────────────────────────────────
const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24 border-t border-[#334155]"
      style={{ background: 'rgb(15, 23, 42)' }}
    >
      <div className="w-full px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
            • Services
          </span>
          <h2
            id="services-heading"
            className="mb-4 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-slate-100 font-bold tracking-tight"
            style={{ letterSpacing: '-0.04em' }}
          >
            Everything you need{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
              to ship.
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed max-w-3xl">
            Full-stack platforms, quick fixes, and everything in between — shipped fast, owned by you.
          </p>
        </div>

        {/* Stacking Cards */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="sticky w-full rounded-3xl p-6 md:p-10"
              style={{
                top: `${72 + index * 20}px`,
                marginBottom: '2rem',
                ...(service.isHighlighted
                  ? {
                      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
                      border: '1px solid rgba(148,163,184,0.2)',
                    }
                  : {
                      background: 'rgba(19, 21, 34, 0.97)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(16px)',
                    }),
              }}
            >
              <div className="flex gap-6 items-center">
                {/* Number — far left inside card */}
                <span className={`hidden md:block text-2xl font-bold font-mono flex-shrink-0 ${service.isHighlighted ? 'text-slate-600' : 'text-slate-800'}`}>
                  {service.id}
                </span>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Mockup */}
                <div className={`lg:col-span-3 p-4 rounded-xl border shadow-inner ${service.isHighlighted ? 'bg-slate-900/60 border-slate-600/20' : 'bg-[#0a0c14] border-white/5'}`}>
                  {service.mockup}
                </div>

                {/* Content */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-2">
                      <span className={`text-xs font-mono tracking-wider font-semibold ${service.isHighlighted ? 'text-slate-300' : 'text-indigo-400'}`}>
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed mb-6 ${service.isHighlighted ? 'text-slate-300' : 'text-slate-400'}`}>
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className={`flex items-center text-xs md:text-sm ${service.isHighlighted ? 'text-slate-300' : 'text-slate-400'}`}>
                        <span className={`mr-2 flex-shrink-0 ${service.isHighlighted ? 'text-slate-400' : 'text-indigo-400'}`}>✦</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>        
      </div>
    </section>
  );
};

export default ServicesSection;
