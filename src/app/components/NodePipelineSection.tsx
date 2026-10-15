'use client';
import React, { useState, useRef, useCallback } from 'react';

const NODES = [
  { id: 'device', label: 'Local Device', sub: 'SQLite + SQLCipher', color: '#34d399', glow: 'rgba(52,211,153,0.4)' },
  { id: 'idb', label: 'IndexedDB', sub: 'Offline Queue', color: '#818cf8', glow: 'rgba(129,140,248,0.4)' },
  { id: 'vault', label: 'AWS Encrypted Vault', sub: 'AES-256-GCM', color: '#a78bfa', glow: 'rgba(167,139,250,0.4)' },
];

const FORM_STAGES = [
  {
    label: 'Raw Paper Form',
    desc: 'Handwritten DMAS intake — unstructured, unsearchable, no audit trail.',
    fields: [
      { k: 'Client Name', v: 'John Smith', style: 'font-["Caveat",cursive] text-[#a0a0b0] italic' },
      { k: 'Date', v: '7 / 14 / 25', style: 'font-["Caveat",cursive] text-[#a0a0b0] italic' },
      { k: 'Scope', v: 'Build platform...', style: 'font-["Caveat",cursive] text-[#a0a0b0] italic' },
      { k: 'Signature', v: '~~~', style: 'font-["Caveat",cursive] text-[#a0a0b0] italic text-xl' },
    ],
    badge: { text: 'PAPER', color: 'text-[#606070] border-[#2a2a3a]' },
  },
  {
    label: 'Digitized Record',
    desc: 'Structured fields, validated inputs, timestamped entry — ready for processing.',
    fields: [
      { k: 'client_name', v: 'John Smith', style: 'font-mono text-[#f0f0f0]' },
      { k: 'created_at', v: '2025-07-14T09:32:11Z', style: 'font-mono text-indigo-300' },
      { k: 'scope', v: 'Build platform...', style: 'font-mono text-[#f0f0f0]' },
      { k: 'status', v: 'PENDING_SIGNATURE', style: 'font-mono text-amber-400' },
    ],
    badge: { text: 'DIGITAL', color: 'text-indigo-400 border-indigo-500/30' },
  },
  {
    label: 'Cryptographically Signed',
    desc: 'E-signed, hash-locked, audit-trail immutable. Legally binding and tamper-evident.',
    fields: [
      { k: 'client_name', v: 'John Smith', style: 'font-mono text-[#f0f0f0]' },
      { k: 'signed_at', v: '2025-07-14T09:34:02Z', style: 'font-mono text-emerald-400' },
      { k: 'sig_hash', v: 'sha256:a3f9...c821', style: 'font-mono text-violet-400' },
      { k: 'status', v: 'AUDIT-LOCKED ✓', style: 'font-mono text-emerald-400 font-bold' },
    ],
    badge: { text: 'SIGNED', color: 'text-emerald-400 border-emerald-500/30' },
  },
];

export default function NodePipelineSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [stage, setStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setShowCursor(true);
  }, []);

  const s = FORM_STAGES[stage];

  return (
    <div className="w-full px-4 md:px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-violet-400 uppercase mb-3 bg-violet-950/20 px-3 py-1 rounded border border-violet-500/20">
            • Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#f0f0f0] tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            From Paper to{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #a78bfa, #818cf8, #a78bfa)', backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite' }}
            >
              Encrypted Record.
            </span>
          </h2>
          <p className="mt-3 text-sm text-[#a0a0b0] max-w-lg">
            Hover the nodes to see how data moves. Drag the slider to watch a form turn into a signed, verified record.
          </p>
        </div>

        {/* Node Pipeline */}
        <div
          ref={containerRef}
          className="relative rounded-2xl border border-[#2a2a3a] bg-[#0e0e1a] p-6 md:p-8 mb-6 overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { setShowCursor(false); setActiveNode(null); }}
        >
          {/* Cursor glow */}
          {showCursor && (
            <div
              className="pointer-events-none absolute z-0 w-48 h-48 rounded-full transition-all duration-75"
              style={{
                left: mousePos.x - 96,
                top: mousePos.y - 96,
                background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
              }}
            />
          )}

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            {NODES.map((node, i) => (
              <React.Fragment key={node.id}>
                <div
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                  onMouseEnter={() => setActiveNode(i)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div
                    className="w-20 h-20 rounded-2xl border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: activeNode === i ? node.color : '#2a2a3a',
                      background: activeNode === i ? `${node.glow}` : '#111120',
                      boxShadow: activeNode === i ? `0 0 24px ${node.glow}` : 'none',
                    }}
                  >
                    {i === 0 && (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: activeNode === i ? node.color : '#404050' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: activeNode === i ? node.color : '#404050' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: activeNode === i ? node.color : '#404050' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#f0f0f0] text-center" style={{ color: activeNode === i ? node.color : '#f0f0f0' }}>{node.label}</span>
                  <span className="text-[10px] font-mono text-[#404050] text-center">{node.sub}</span>
                </div>

                {i < NODES.length - 1 && (
                  <div className="hidden md:flex flex-1 items-center px-2 md:px-4">
                    <div className="w-full h-px relative overflow-hidden">
                      <div className="absolute inset-0" style={{ background: '#2a2a3a' }} />
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: activeNode !== null && activeNode >= i
                            ? `linear-gradient(90deg, ${NODES[i].color}, ${NODES[i + 1].color})`
                            : 'transparent',
                          boxShadow: activeNode !== null && activeNode >= i
                            ? `0 0 8px ${NODES[i].glow}`
                            : 'none',
                        }}
                      />
                    </div>
                    <svg className="w-3 h-3 flex-shrink-0 ml-1 text-[#2a2a3a]" fill="currentColor" viewBox="0 0 6 10">
                      <path d="M0 0l6 5-6 5V0z" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {activeNode !== null && (
            <div className="relative z-10 mt-6 px-4 py-3 rounded-lg border text-xs font-mono transition-all duration-200"
              style={{ borderColor: NODES[activeNode].color + '40', background: NODES[activeNode].glow + '20', color: NODES[activeNode].color }}>
              {activeNode === 0 && '⚡ SQLite + SQLCipher — instant local reads/writes, zero network dependency, sub-millisecond latency'}
              {activeNode === 1 && '📦 IndexedDB offline queue — captures all mutations while disconnected, deduplicates on reconnect'}
              {activeNode === 2 && '🔐 AWS Encrypted Vault — AES-256-GCM at rest, TLS 1.3 in transit, immutable audit log per record'}
            </div>
          )}
        </div>

        {/* Form Morphing Slider */}
        <div className="rounded-2xl border border-[#2a2a3a] bg-[#0e0e1a] p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs font-mono text-[#606070] uppercase tracking-widest">Form Architecture — Scrub to Transform</p>
            <span className={`text-xs font-mono px-2 py-0.5 rounded border ${s.badge.color}`}>{s.badge.text}</span>
          </div>

          <input
            type="range" min={0} max={2} step={1} value={stage}
            onChange={e => setStage(Number(e.target.value))}
            className="w-full mb-6 accent-indigo-500 cursor-pointer"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <p className="text-sm font-bold text-[#f0f0f0] mb-1">{s.label}</p>
              <p className="text-xs text-[#606070] mb-4">{s.desc}</p>
              <div className="space-y-2">
                {s.fields.map(({ k, v, style }) => (
                  <div key={k} className="flex gap-3 items-baseline">
                    <span className="text-[10px] font-mono text-[#404050] w-24 flex-shrink-0">{k}</span>
                    <span className={`text-sm ${style}`}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {[0, 1, 2].map(i => (
                <button
                  key={i}
                  onClick={() => setStage(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                    stage === i ? 'border-indigo-500/40 bg-indigo-950/20' : 'border-[#2a2a3a] bg-[#111120] hover:border-[#3a3a4a]'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-mono flex-shrink-0 ${
                    stage === i ? 'border-indigo-400 text-indigo-400' : 'border-[#2a2a3a] text-[#404050]'
                  }`}>{i + 1}</span>
                  <span className={`text-xs font-mono ${stage === i ? 'text-[#f0f0f0]' : 'text-[#606070]'}`}>
                    {FORM_STAGES[i].label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
