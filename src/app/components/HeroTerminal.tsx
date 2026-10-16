'use client';
import { useEffect, useState, useRef } from 'react';

const BOOT_LINES = [
  { text: '$ majestik-diagnostics --full', color: '#606070', delay: 0 },
  { text: 'Initializing audit engine...', color: '#404050', delay: 400 },
  { text: '✓ DNS resolved          4ms', color: '#34d399', delay: 900 },
  { text: '✓ TLS handshake         11ms', color: '#34d399', delay: 1300 },
  { text: '✓ TTFB                  18ms', color: '#34d399', delay: 1700 },
  { text: '✓ LCP                   0.9s', color: '#34d399', delay: 2100 },
  { text: '✓ CLS                   0.00', color: '#34d399', delay: 2500 },
  { text: '✓ FID                   6ms', color: '#34d399', delay: 2900 },
  { text: '', delay: 3200 },
  { text: 'Running Lighthouse audit...', color: '#404050', delay: 3500 },
  { text: '  Performance           100', color: '#818cf8', delay: 4100 },
  { text: '  Accessibility         100', color: '#818cf8', delay: 4400 },
  { text: '  Best Practices        100', color: '#818cf8', delay: 4700 },
  { text: '  SEO                   100', color: '#818cf8', delay: 5000 },
  { text: '', delay: 5200 },
  { text: '✓ All systems nominal.', color: '#34d399', delay: 5500 },
  { text: '$ _', color: '#606070', delay: 5900 },
];

const LIVE_METRICS = [
  { label: 'LATENCY', getValue: () => `${10 + Math.floor(Math.random() * 6)}ms` },
  { label: 'UPTIME',  getValue: () => '99.98%' },
  { label: 'EDGE NODES', getValue: () => '310+' },
];

export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [metrics, setMetrics] = useState(['12ms', '99.98%', '310+']);
  const [mounted, setMounted] = useState(false);
  const [blink, setBlink] = useState(true);
  const reducedMotion = useRef(false);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [visibleLines]);

  useEffect(() => {
    setMounted(true);
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion.current) {
      setVisibleLines(BOOT_LINES.length);
      return;
    }

    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );

    const metricInterval = setInterval(() => {
      setMetrics(LIVE_METRICS.map(m => m.getValue()));
    }, 2000);

    const blinkInterval = setInterval(() => setBlink(b => !b), 530);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(metricInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div
      className="w-full rounded-xl overflow-hidden border border-[#1e1e2e] flex-shrink-0"
      style={{ background: '#0a0a12', fontFamily: 'var(--font-geist-mono, monospace)' }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e1e2e]" style={{ background: '#0e0e1a' }}>
        <span className="text-[#404050]">[</span>
        <span className="text-indigo-400 text-xs font-mono">user</span>
        <span className="text-[#404050]">@</span>
        <span className="text-emerald-400 text-xs font-mono">majestik</span>
        <span className="text-[#404050]">]</span>
        <span className="text-[#404050] text-xs font-mono ml-1">~</span>
        <span className="ml-3 text-xs text-[#404050] tracking-widest uppercase">diagnostics — bash</span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 5px #34d399' }} />
          <span className="text-xs text-[#404050]">LIVE</span>
        </span>
      </div>

      {/* Live metric chips */}
      <div className="flex gap-3 px-4 py-2.5 border-b border-[#1e1e2e]">
        {LIVE_METRICS.map((m, i) => (
          <div key={m.label} className="flex items-center gap-1.5">
            <span className="text-xs font-mono text-[#404050] tracking-widest">{m.label}</span>
            <span className="text-sm font-mono font-bold text-indigo-400">
              {mounted ? metrics[i] : '—'}
            </span>
          </div>
        ))}
      </div>

      {/* Terminal output */}
      <div ref={outputRef} className="px-4 py-4 space-y-1 h-[260px] overflow-y-auto scrollbar-thin" style={{ scrollbarColor: '#2a2a3a #0a0a12' }}>
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => {
          const isCursor = i === BOOT_LINES.length - 1;
          return (
            <div key={i} className="text-sm leading-relaxed whitespace-pre">
              {isCursor ? (
                <span style={{ color: line.color }}>
                  {'$ '}
                  <span
                    className="inline-block w-[7px] h-[13px] align-middle"
                    style={{
                      background: '#818cf8',
                      opacity: blink ? 1 : 0,
                      transition: 'opacity 80ms',
                    }}
                  />
                </span>
              ) : (
                <span style={{ color: line.color || '#606070' }}>{line.text}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
