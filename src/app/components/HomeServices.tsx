'use client';
import React, { useEffect, useRef, useState } from 'react';


function PerfMockup() {
  const rows = [
    { label: 'DMAS-97', value: '14 submitted',  note: 'this week' },
    { label: 'DMAS-98', value: '9 submitted',   note: 'this week' },
    { label: 'EVV',     value: '0 gaps',        note: 'audit-ready' },
    { label: 'Export',  value: 'state report',  note: 'ready' },
  ];
  return (
    <div className="w-full h-36 rounded-xl bg-[#0a0a12] border border-[#1e1e2e] p-4 flex flex-col justify-between font-mono">
      <div className="flex items-center gap-1.5 text-[10px] text-indigo-400">
        <span className="w-1 h-1 rounded-full bg-indigo-400" style={{ boxShadow: '0 0 4px #818cf8' }} />
        compliance dashboard · director view
      </div>
      <div className="space-y-1.5">
        {rows.map(({ label, value, note }) => (
          <div key={label} className="flex items-baseline gap-2 text-[10px]">
            <span className="text-[#707080] w-12 flex-shrink-0">{label}</span>
            <span className="text-indigo-400 font-bold">{value}</span>
            <span className="text-[#808090] truncate">{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemsMockup() {
  const modules = [
    { name: 'dmas-intake',    status: 'running', uptime: '47d' },
    { name: 'evv-logger',     status: 'running', uptime: '47d' },
    { name: 'audit-sync',     status: 'running', uptime: '47d' },
  ];
  return (
    <div className="w-full h-36 rounded-xl bg-[#0a0a12] border border-[#1e1e2e] p-4 flex flex-col justify-between font-mono">
      <div className="flex items-center gap-1.5">
        <span className="px-1.5 py-0.5 bg-violet-950/40 border border-violet-500/20 rounded text-[10px] text-violet-400">OWNED INFRA</span>
        <span className="text-[10px] text-[#808090] ml-auto">self-hosted</span>
      </div>
      <div className="space-y-1.5">
        {modules.map(({ name, status, uptime }) => (
          <div key={name} className="flex items-center gap-2 text-[10px]">
            <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
            <span className="text-[#808090] flex-1 truncate">{name}</span>
            <span className="text-emerald-400">{status}</span>
            <span className="text-[#808090]">{uptime}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfflineMockup() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1800);
    return () => clearInterval(id);
  }, []);
  const ops: string[] = ['READ  visit_log   0ms', 'WRITE dmas_98     0ms', 'SYNC  evv_queue   0ms', 'QUERY care_plan   0ms'];
  return (
    <div className="w-full h-36 rounded-xl bg-[#0a0a12] border border-[#1e1e2e] p-4 flex flex-col justify-between font-mono">
      <div className="flex items-center gap-1.5">
        <span className="w-1 h-1 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 5px #34d399' }} />
        <span className="text-[10px] text-[#707080]">OFFLINE. SQLite Engine.</span>
      </div>
      <div className="space-y-1">
        {ops.map((op, i) => (
          <div key={op} className="text-[10px] text-[#707080] transition-opacity duration-500" style={{ opacity: tick % ops.length === i ? 1 : 0.25 }}>
            <span className="text-[#808090]">›</span> {op}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        <span className="px-1.5 py-0.5 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-[9px] rounded font-mono">SQLCipher</span>
        <span className="px-1.5 py-0.5 bg-[#111120] border border-[#1e1e2e] text-[#707080] text-[9px] rounded font-mono">0ms latency</span>
      </div>
    </div>
  );
}

function AppMockup() {
  const events = [
    { time: '09:14', msg: 'Care coordinator logged in', status: 'ok' },
    { time: '09:14', msg: 'DMAS-97 submitted', status: 'ok' },
    { time: '09:15', msg: 'EVV audit log exported', status: 'ok' },
    { time: '09:15', msg: 'State report generated', status: 'ok' },
  ];
  return (
    <div className="w-full h-36 rounded-xl bg-[#0a0a12] border border-[#1e1e2e] p-4 flex flex-col justify-between font-mono overflow-hidden">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="w-1 h-1 rounded-full bg-violet-400" style={{ boxShadow: '0 0 4px #a78bfa' }} />
        <span className="text-[10px] text-[#707080]">event log</span>
      </div>
      <div className="space-y-1">
        {events.map((e) => (
          <div
            key={e.msg}
            className="flex items-center gap-2 text-[10px]"
          >
            <span className="text-[#707080] flex-shrink-0">{e.time}</span>
            <span className="text-violet-400/60">›</span>
            <span className="text-[#808090] truncate">{e.msg}</span>
            <span className="ml-auto text-emerald-400 flex-shrink-0">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SERVICES = [
  {
    id: '01', tag: 'LOCAL-FIRST', title: 'Offline-First Field Applications',
    desc: 'Built for care aides who lose signal in rural dead zones. The app runs entirely on-device, captures intake forms and EVV logs instantly, and syncs everything the moment connectivity returns. No crashes. No lost records. No clawbacks.',
    bullets: ['AES-256 encrypted storage on-device. Zero cloud dependency', 'EVV-compliant GPS logging queued and synced automatically', 'Sub-millisecond response. Works with zero bars'],
    mockup: <OfflineMockup />, accent: 'emerald',
  },
  {
    id: '02', tag: 'PORTALS', title: 'Compliance Dashboards & Agency Portals',
    desc: 'The director-facing side of your compliance operation. Role-based access for care coordinators, supervisors, and billing staff. Audit trails, state reporting exports, and real-time visibility into every field submission.',
    bullets: ['Role-based access: coordinators, supervisors, billing', 'Audit trail on every form submission and EVV entry', 'State reporting exports built to DMAS spec'],
    mockup: <PerfMockup />, accent: 'indigo',
  },
  {
    id: '03', tag: 'APPLICATIONS', title: 'Regulated Field Operations Software',
    desc: 'We build applications around how your field staff actually operates, not around what was easiest to ship. Everything is built for high-stakes regulated environments where a dropped record costs real money.',
    bullets: ['Auth, roles, and permissions built to your compliance workflow', 'EVV audit logging, care plan management, and visit verification', 'State reporting exports and HIPAA-ready data handling'],
    mockup: <AppMockup />, accent: 'violet',
  },
  {
    id: '04', tag: 'SYSTEMS', title: 'Owned Compliance Infrastructure',
    desc: 'Most agencies pay $400 to $800 a month forever to platforms like HHAeXchange or PointClickCare for software they will never own. We build the same intake, EVV, and audit systems, then hand you the keys with nothing on the meter.',
    bullets: ['Full IP transfer. No subscriptions, no platform lock-in', 'Self-hosted or managed cloud. Your data stays yours', 'Complete handoff docs and onboarding support'],
    mockup: <SystemsMockup />, accent: 'purple',
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
    <section id="services" aria-label="Services" className="w-full px-4 md:px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#d4d4d8]"
            style={{ letterSpacing: '-0.02em', lineHeight: '1', fontFamily: 'var(--font-im-fell-english)' }}
          >
            Built for regulated field operations.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-[#808090] leading-relaxed">
            We build local-first compliance infrastructure for home health agencies, personal care operators, and field teams working in cellular dead zones. Every system runs on-device, encrypts at rest, and syncs the moment signal returns.
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
                aria-label={s.title}
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
                    <h3 className="mb-3 text-xl md:text-2xl font-bold text-[#d4d4d8]" style={{ letterSpacing: '-0.03em' }}>{s.title}</h3>
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
    </section>
  );
}
