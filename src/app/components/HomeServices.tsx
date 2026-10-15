'use client';
import React, { useEffect, useRef, useState } from 'react';

function AnimatedBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-px w-full bg-[#1e1e2e] rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
    </div>
  );
}


function PerfMockup() {
  const bars = [
    { label: 'Performance', pct: 97, color: 'bg-emerald-500' },
    { label: 'SEO', pct: 100, color: 'bg-indigo-500' },
    { label: 'Best Practices', pct: 95, color: 'bg-violet-500' },
  ];
  return (
    <div className="w-full h-36 rounded-xl bg-[#0a0a12] border border-[#1e1e2e] p-4 flex flex-col justify-center gap-3">
      <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 mb-0.5">
        <span className="w-1 h-1 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 4px #34d399' }} />
        Lighthouse audit complete
      </div>
      {bars.map(({ label, pct, color }) => (
        <div key={label}>
          <div className="flex justify-between text-[10px] font-mono text-[#404050] mb-1">
            <span>{label}</span>
            <span className="text-[#606070]">{pct}</span>
          </div>
          <AnimatedBar pct={pct} color={color} />
        </div>
      ))}
    </div>
  );
}

function SystemsMockup() {
  const bars = [
    { label: 'Inventory Engine', pct: 92, color: 'bg-violet-500' },
    { label: 'Fleet Tracker', pct: 78, color: 'bg-indigo-500' },
    { label: 'Logistics API', pct: 85, color: 'bg-purple-500' },
  ];
  return (
    <div className="w-full h-36 rounded-xl bg-[#0a0a12] border border-[#1e1e2e] p-4 flex flex-col justify-center gap-3">
      <div className="px-1.5 py-0.5 bg-violet-950/40 border border-violet-500/20 rounded text-[10px] font-mono text-violet-400 w-fit mb-0.5">OWNED INFRA</div>
      {bars.map(({ label, pct, color }) => (
        <div key={label}>
          <div className="flex justify-between text-[10px] font-mono text-[#404050] mb-1">
            <span>{label}</span><span className="text-[#606070]">{pct}%</span>
          </div>
          <AnimatedBar pct={pct} color={color} />
        </div>
      ))}
    </div>
  );
}

function OfflineMockup() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1800);
    return () => clearInterval(id);
  }, []);
  const ops: string[] = ['READ  users       0ms', 'WRITE fleet_log   0ms', 'SYNC  deferred    0ms', 'QUERY inventory   0ms'];
  return (
    <div className="w-full h-36 rounded-xl bg-[#0a0a12] border border-[#1e1e2e] p-4 flex flex-col justify-between font-mono">
      <div className="flex items-center gap-1.5">
        <span className="w-1 h-1 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 5px #34d399' }} />
        <span className="text-[10px] text-[#404050]">OFFLINE. SQLite Engine.</span>
      </div>
      <div className="space-y-1">
        {ops.map((op, i) => (
          <div key={op} className="text-[10px] text-[#404050] transition-opacity duration-500" style={{ opacity: tick % ops.length === i ? 1 : 0.25 }}>
            <span className="text-[#606070]">›</span> {op}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        <span className="px-1.5 py-0.5 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-[9px] rounded font-mono">SQLCipher</span>
        <span className="px-1.5 py-0.5 bg-[#111120] border border-[#1e1e2e] text-[#404050] text-[9px] rounded font-mono">0ms latency</span>
      </div>
    </div>
  );
}

function AppMockup() {
  const events = [
    { time: '09:14', msg: 'Stripe webhook received', status: 'ok' },
    { time: '09:14', msg: 'Subscription activated', status: 'ok' },
    { time: '09:15', msg: 'Welcome email queued', status: 'ok' },
    { time: '09:15', msg: 'Slack notification sent', status: 'ok' },
  ];
  return (
    <div className="w-full h-36 rounded-xl bg-[#0a0a12] border border-[#1e1e2e] p-4 flex flex-col justify-between font-mono overflow-hidden">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="w-1 h-1 rounded-full bg-violet-400" style={{ boxShadow: '0 0 4px #a78bfa' }} />
        <span className="text-[10px] text-[#404050]">event log</span>
      </div>
      <div className="space-y-1">
        {events.map((e, _i) => (
          <div
            key={e.msg}
            className="flex items-center gap-2 text-[10px]"
          >
            <span className="text-[#404050] flex-shrink-0">{e.time}</span>
            <span className="text-violet-400/60">›</span>
            <span className="text-[#606070] truncate">{e.msg}</span>
            <span className="ml-auto text-emerald-400 flex-shrink-0">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SERVICES = [
  {
    id: '01', tag: 'INTERFACES', title: 'Web Design & Landing Pages',
    desc: 'Your site is the first thing people judge you by. We make sure it\'s not embarrassing. Fast, sharp, and built to actually convert.',
    bullets: ['Copy hierarchy engineered for conversion', 'Mobile-first, sub-second load times', 'Custom Lighthouse audit with llms.txt and robots.txt'],
    mockup: <PerfMockup />, accent: 'indigo',
  },
  {
    id: '02', tag: 'APPLICATIONS', title: 'Web Applications',
    desc: 'Not another tool your team ignores. We build apps around how your people actually work. Real-time, integrated, and genuinely useful.',
    bullets: ['Auth, roles, and permissions built to your workflow', 'Live data feeds, webhooks, and third-party APIs', 'Stripe billing, subscriptions, and payout logic'],
    mockup: <AppMockup />, accent: 'violet',
  },
  {
    id: '03', tag: 'SYSTEMS', title: 'Systems-as-a-Service',
    desc: 'You\'re paying monthly for software you\'ll never own. We build the same thing; inventory, fleet, logistics. Then we hand you the keys.',
    bullets: ['Full IP transfer. No subscriptions, no lock-in', 'Managed cloud or local-first deployment', 'Complete handoff docs and onboarding support'],
    mockup: <SystemsMockup />, accent: 'purple',
  },
  {
    id: '04', tag: 'LOCAL-FIRST', title: 'Local-First & Mobile Apps',
    desc: 'Works offline. Works fast. Works when the WiFi doesn\'t. Encrypted on-device storage with sync that catches up quietly in the background.',
    bullets: ['Sub-millisecond response. No server round-trip', 'SQLCipher encrypted storage on-device', 'Background sync resumes automatically when online'],
    mockup: <OfflineMockup />, accent: 'emerald',
  },
];

const accentMap: Record<string, { tag: string; dot: string; spotlight: string }> = {
  indigo:  { tag: 'text-indigo-400',  dot: 'bg-indigo-400',  spotlight: '99,102,241' },
  violet:  { tag: 'text-violet-400',  dot: 'bg-violet-400',  spotlight: '167,139,250' },
  purple:  { tag: 'text-purple-400',  dot: 'bg-purple-400',  spotlight: '192,132,252' },
  emerald: { tag: 'text-emerald-400', dot: 'bg-emerald-400', spotlight: '52,211,153' },
};

function handleSpotlight(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
}

const CARD_TOP_BASE = 88;
const CARD_TOP_STEP = 24;

export default function HomeServices() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 768;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const update = () => {
      if (!isDesktop()) {
        overlayRefs.current.forEach(o => { if (o) o.style.opacity = '0'; });
        cardRefs.current.forEach(el => { if (el) el.style.transform = ''; });
        return;
      }
      cardRefs.current.forEach((el, i) => {
        if (!el || i === SERVICES.length - 1) return;
        const next = cardRefs.current[i + 1];
        if (!next) return;
        const stickyTop = CARD_TOP_BASE + i * CARD_TOP_STEP;
        const nextTop = next.getBoundingClientRect().top;
        const cardH = el.offsetHeight;
        const progress = Math.max(0, Math.min(1, (stickyTop + cardH - nextTop) / cardH));
        if (!reducedMotion) el.style.transform = `scale(${1 - progress * 0.04})`;
        const overlay = overlayRefs.current[i];
        if (overlay) overlay.style.opacity = String(progress * 0.5);
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div id="services" className="w-full px-4 md:px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f0f0f0]"
            style={{ letterSpacing: '-0.04em', lineHeight: '1' }}
          >
            What we actually do.
          </h2>
          <p className="mt-5 text-sm text-[#a0a0b0] max-w-lg leading-relaxed">
            Full-stack platforms, quick fixes, and everything in between. Shipped fast, owned by you. No retainers. No surprises.
          </p>
        </div>

        {/* Sticky stacking cards */}
        <div className="flex flex-col">
          {SERVICES.map((s, i) => {
            const a = accentMap[s.accent];
            return (
              <div
                key={s.id}
                ref={el => { cardRefs.current[i] = el; }}
                onMouseMove={handleSpotlight}
                className="reveal spotlight relative md:sticky rounded-2xl bg-[#0e0e1a] border border-[#1e1e2e] p-6 md:p-8 mb-5 md:mb-[10vh] transition-colors duration-300"
                style={{
                  top: `${CARD_TOP_BASE + i * CARD_TOP_STEP}px`,
                  zIndex: 10 + i,
                  transformOrigin: 'top center',
                  willChange: 'transform',
                  ['--spotlight-color' as string]: a.spotlight,
                }}
              >
                {/* Spinning gradient border */}
                <div className="spin-ring" />
                {/* Darken overlay on stack */}
                <div
                  ref={el => { overlayRefs.current[i] = el; }}
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-[#07080e]"
                  style={{ opacity: 0 }}
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Mockup */}
                  <div className="lg:col-span-4">{s.mockup}</div>

                  {/* Content */}
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#404050]">{s.id}</span>
                      <span className="w-px h-3 bg-[#2a2a3a]" />
                      <span className={`text-[10px] font-mono font-bold tracking-[0.15em] ${a.tag}`}>{s.tag}</span>
                    </div>
                    <h3 className="mb-3 text-xl md:text-2xl font-bold text-[#f0f0f0]" style={{ letterSpacing: '-0.03em' }}>{s.title}</h3>
                    <p className="text-sm text-[#a0a0b0] leading-relaxed mb-5">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.bullets.map(b => (
                        <li key={b} className="flex items-center gap-2.5 text-sm text-[#a0a0b0]">
                          <span className={`w-1 h-1 rounded-full flex-shrink-0 ${a.dot}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
