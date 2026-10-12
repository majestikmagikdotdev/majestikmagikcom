'use client';
import React, { useEffect, useRef, useState } from 'react';

function AnimatedBar({ pct, color, triggered, delay }: { pct: number; color: string; triggered: boolean; delay: number }) {
  return (
    <div className="h-1.5 w-full bg-[#2a2a3a] rounded-full overflow-hidden">
      <div
        className={`h-full ${color} rounded-full transition-all ease-out`}
        style={{ width: triggered ? `${pct}%` : '0%', transitionDuration: '900ms', transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, triggered };
}

function PerfMockup() {
  const { ref, triggered } = useInView();
  const bars = [
    { label: 'Performance', pct: 97, color: 'bg-emerald-500' },
    { label: 'SEO', pct: 100, color: 'bg-indigo-500' },
    { label: 'Best Practices', pct: 95, color: 'bg-violet-500' },
  ];
  return (
    <div ref={ref} className="w-full h-36 bg-[#0e0e1a] rounded-xl border border-[#2a2a3a] p-4 flex flex-col justify-center gap-2.5">
      <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 6px #34d399' }} />
        Lighthouse audit complete
      </div>
      {bars.map(({ label, pct, color }, i) => (
        <div key={label}>
          <div className="flex justify-between text-[10px] font-mono text-[#606070] mb-0.5">
            <span>{label}</span><span className="text-[#a0a0b0]">{triggered ? pct : 0}</span>
          </div>
          <AnimatedBar pct={pct} color={color} triggered={triggered} delay={i * 120} />
        </div>
      ))}
    </div>
  );
}

function SystemsMockup() {
  const { ref, triggered } = useInView();
  const bars = [
    { label: 'Inventory Engine', pct: 92, color: 'bg-violet-500' },
    { label: 'Fleet Tracker', pct: 78, color: 'bg-indigo-500' },
    { label: 'Logistics API', pct: 85, color: 'bg-purple-500' },
  ];
  return (
    <div ref={ref} className="w-full h-36 bg-[#0e0e1a] rounded-xl border border-[#2a2a3a] p-4 flex flex-col justify-center gap-2.5">
      <div className="px-2 py-0.5 bg-violet-950/60 border border-violet-500/30 rounded text-[10px] font-mono text-violet-300 w-fit mb-1">OWNED INFRASTRUCTURE</div>
      {bars.map(({ label, pct, color }, i) => (
        <div key={label}>
          <div className="flex justify-between text-[10px] font-mono text-[#606070] mb-0.5">
            <span>{label}</span><span className="text-[#a0a0b0]">{pct}%</span>
          </div>
          <AnimatedBar pct={pct} color={color} triggered={triggered} delay={i * 100} />
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
  const ops = ['READ  users       0ms', 'WRITE fleet_log   0ms', 'SYNC  deferred    0ms', 'QUERY inventory   0ms'];
  return (
    <div className="w-full h-36 bg-[#0e0e1a] rounded-xl border border-[#2a2a3a] p-4 flex flex-col justify-between font-mono">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 8px #34d399' }} />
        <span className="text-[10px] text-[#a0a0b0]">OFFLINE MODE — SQLite Engine</span>
      </div>
      <div className="space-y-1">
        {ops.map((op, i) => (
          <div key={op} className="text-[10px] text-[#606070] transition-opacity duration-500" style={{ opacity: tick % ops.length === i ? 1 : 0.3 }}>
            <span className="text-[#a0a0b0]">›</span> {op}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        <span className="px-2 py-0.5 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[9px] rounded-full">SQLCipher</span>
        <span className="px-2 py-0.5 bg-[#1a1a2a] border border-[#2a2a3a] text-[#a0a0b0] text-[9px] rounded-full">0ms latency</span>
      </div>
    </div>
  );
}

function AppMockup() {
  const { ref, triggered } = useInView();
  const [users, setUsers] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const target = 1284;
    const inc = Math.ceil(target / 75);
    const id = setInterval(() => setUsers(n => { const v = n + inc; if (v >= target) { clearInterval(id); return target; } return v; }), 16);
    return () => clearInterval(id);
  }, [triggered]);
  return (
    <div ref={ref} className="w-full h-36 bg-[#0e0e1a] rounded-xl border border-[#2a2a3a] p-4 flex items-center justify-around font-mono text-xs text-[#a0a0b0]">
      {[
        { val: users.toLocaleString(), label: 'ACTIVE USERS', color: 'text-violet-400' },
        { val: '99.98%', label: 'UPTIME', color: 'text-emerald-400' },
        { val: '12ms', label: 'LATENCY', color: 'text-indigo-400' },
      ].map(({ val, label, color }) => (
        <div key={label} className="bg-[#141420] p-3 rounded-lg border border-[#2a2a3a] text-center">
          <span className={`block ${color} font-bold text-sm`}>{val}</span>
          <span className="text-[9px] text-[#606070]">{label}</span>
        </div>
      ))}
    </div>
  );
}

const SERVICES = [
  {
    id: '01', tag: 'INTERFACES THAT CONVERT', title: 'Web Design & Landing Pages',
    desc: 'Sharp, fast, and built to drive action — not just look good. Every layout decision is made with your visitor\'s next move in mind.',
    bullets: ['Copy hierarchy and layout engineered for conversion', 'Mobile-first with sub-second load times', 'Custom Lighthouse audit — generates accurate llms.txt and robots.txt to improve AI visibility and conversion'],
    mockup: <PerfMockup />, accent: 'indigo',
  },
  {
    id: '02', tag: 'DASHBOARDS, PORTALS, TOOLS', title: 'Web Applications',
    desc: 'Custom web apps your team will actually use — clean UX, real-time data, and the integrations that keep your operation running.',
    bullets: ['Auth, roles, and permissions built to your workflow', 'Live data feeds, webhooks, and third-party APIs', 'Stripe billing, subscriptions, and payout logic'],
    mockup: <AppMockup />, accent: 'violet',
  },
  {
    id: '03', tag: 'CUSTOM OPERATIONAL ENGINES', title: 'Systems-as-a-Service',
    desc: 'Stop renting tools you don\'t control. We build the inventory, fleet, and logistics engines your business runs on — and you own them outright.',
    bullets: ['Full IP transfer — no subscriptions, no lock-in', 'Managed cloud or local-first deployment your choice', 'Complete handoff docs and onboarding support'],
    mockup: <SystemsMockup />, accent: 'purple',
  },
  {
    id: '04', tag: 'BARE-METAL RELIABILITY', title: 'Local-First & Mobile Apps',
    desc: 'Apps that run at full speed whether the network is up or not. Built on encrypted local storage with a deferred sync engine that catches up silently.',
    bullets: ['Sub-millisecond response — no server round-trip', 'SQLCipher encrypted storage on-device', 'Background sync resumes automatically when online'],
    mockup: <OfflineMockup />, accent: 'emerald',
  },
];

const accentMap: Record<string, { tag: string; bullet: string; border: string }> = {
  indigo: { tag: 'text-indigo-400', bullet: 'text-indigo-400', border: 'border-indigo-500/20' },
  violet: { tag: 'text-violet-400', bullet: 'text-violet-400', border: 'border-violet-500/20' },
  purple: { tag: 'text-purple-400', bullet: 'text-purple-400', border: 'border-purple-500/20' },
  emerald: { tag: 'text-emerald-400', bullet: 'text-emerald-400', border: 'border-emerald-500/20' },
};

export default function HomeServices() {
  return (
    <div id="services" className="w-full px-4 md:px-6 py-20 md:py-28">
      <div className="mb-14">
        <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1a1a2a] px-3 py-1 rounded border border-[#2a2a3a]">
          • Services
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#f0f0f0] tracking-tight" style={{ letterSpacing: '-0.04em' }}>
          Built for the work{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-[#f0f0f0]">that actually matters.</span>
        </h2>
        <p className="mt-4 text-base text-[#a0a0b0] max-w-2xl">Full-stack platforms, quick fixes, and everything in between — shipped fast, owned by you.</p>
      </div>

      <div className="flex flex-col gap-4">
        {SERVICES.map((s, i) => {
          const a = accentMap[s.accent];
          return (
            <div
              key={s.id}
              className={`md:sticky rounded-2xl border ${a.border} bg-[#111120] p-6 md:p-8`}
              style={{ top: `${72 + i * 18}px` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-2">{s.mockup}</div>
                <div className="lg:col-span-10">
                  <span className={`text-xs font-mono font-semibold tracking-wider ${a.tag}`}>{s.tag}</span>
                  <h3 className="mt-1 mb-3 text-xl md:text-2xl font-bold text-[#f0f0f0] tracking-tight">{s.title}</h3>
                  <p className="text-sm text-[#a0a0b0] leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[#a0a0b0]">
                        <span className={`flex-shrink-0 ${a.bullet}`}>✦</span>{b}
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
  );
}
