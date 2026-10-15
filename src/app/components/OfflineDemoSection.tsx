'use client';
import React, { useState, useEffect, useRef } from 'react';

type FormData = { name: string; company: string; scope: string; budget: string };

function SyncAnimation() {
  return (
    <div className="flex items-center gap-3 mt-4 px-4 py-3 rounded-lg border border-emerald-500/30 bg-emerald-950/20">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" style={{ boxShadow: '0 0 8px #34d399' }} />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-mono text-emerald-400">AWS Encrypted Vault — Syncing</span>
          <span className="text-xs font-mono text-emerald-300">TLS 1.3</span>
        </div>
        <div className="h-1 w-full bg-[#1a1a2a] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full animate-[sync-bar_2s_ease-in-out_infinite]" style={{ width: '100%', animation: 'syncBar 2s ease-in-out infinite' }} />
        </div>
      </div>
    </div>
  );
}

export default function OfflineDemoSection() {
  const [offline, setOffline] = useState(false);
  const [synced, setSynced] = useState(false);
  const [form, setForm] = useState<FormData>({ name: '', company: '', scope: '', budget: '' });
  const [recordId, setRecordId] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setRecordId('DRAFT-' + Math.random().toString(36).slice(2, 8).toUpperCase());
    setTimestamp(new Date().toISOString().slice(0, 19) + 'Z');
    setMounted(true);
  }, []);
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleToggle = () => {
    if (offline) {
      // Going back online
      setOffline(false);
      if (pdfGenerated) {
        setSynced(true);
        if (syncTimer.current) clearTimeout(syncTimer.current);
        syncTimer.current = setTimeout(() => setSynced(false), 4000);
      }
    } else {
      setOffline(true);
      setSynced(false);
    }
  };

  const handleGenerate = () => {
    if (!form.name || !form.scope) return;
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setPdfGenerated(true); }, 1200);
  };

  const inputCls = "w-full px-3 py-2 bg-[#0e0e1a] border border-[#2a2a3a] rounded-lg text-[#f0f0f0] text-xs font-mono placeholder-[#404050] focus:outline-none focus:border-indigo-500 transition-all";

  return (
    <div className="w-full px-4 md:px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-3 bg-emerald-950/20 px-3 py-1 rounded border border-emerald-500/20">
              • Live Demo
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#f0f0f0] tracking-tight" style={{ letterSpacing: '-0.03em' }}>
              Still works when{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #34d399, #818cf8, #34d399)', backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite' }}
              >
                the WiFi goes out.
              </span>
            </h2>
            <p className="mt-3 text-sm text-[#a0a0b0] max-w-lg">
              No connection? The form still submits. The PDF still generates. Come back online and it catches up on its own.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex-shrink-0">
            <button
              onClick={handleToggle}
              className={`relative flex items-center gap-3 px-5 py-3 rounded-xl border font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                offline
                  ? 'border-red-500/40 bg-red-950/20 text-red-400'
                  : 'border-emerald-500/40 bg-emerald-950/20 text-emerald-400'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${offline ? 'bg-red-400' : 'bg-emerald-400 animate-pulse'}`}
                style={{ boxShadow: offline ? '0 0 8px #f87171' : '0 0 8px #34d399' }} />
              {offline ? 'Cell Tower Outage — Offline' : 'Simulate Offline Mode'}
              <span className="text-[10px] font-normal normal-case tracking-normal opacity-60">
                {offline ? '↑ click to restore' : '↓ click to kill signal'}
              </span>
            </button>
          </div>
        </div>

        {/* Demo Canvas */}
        <div className={`relative rounded-2xl border transition-all duration-500 overflow-hidden ${
          offline ? 'border-red-500/20' : 'border-[#2a2a3a]'
        }`} style={{ background: '#0e0e1a' }}>

          {/* Offline overlay scanline */}
          {offline && (
            <div className="absolute inset-0 z-10 pointer-events-none" style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(239,68,68,0.03) 2px, rgba(239,68,68,0.03) 4px)',
            }} />
          )}

          {/* Status bar */}
          <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-5 py-3 border-b transition-colors duration-300 ${
            offline ? 'border-red-500/20 bg-red-950/10' : 'border-[#2a2a3a] bg-[#111120]'
          }`}>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${offline ? 'bg-red-400' : 'bg-emerald-400 animate-pulse'}`}
                style={{ boxShadow: offline ? '0 0 6px #f87171' : '0 0 6px #34d399' }} />
              <span className="text-xs font-mono text-[#606070]">
                {offline ? 'NETWORK: DISCONNECTED — LOCAL ENGINE ACTIVE' : 'NETWORK: CONNECTED — LIVE SYNC ENABLED'}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono text-[#404050]">
              <span className={offline ? 'text-red-400/60' : 'text-emerald-400/60'}>SQLite</span>
              <span>·</span>
              <span className={offline ? 'text-red-400/60' : 'text-indigo-400/60'}>IndexedDB</span>
              <span>·</span>
              <span className={offline ? 'text-[#404050]' : 'text-violet-400/60'}>AWS Vault</span>
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form */}
            <div>
              <p className="text-xs font-mono text-[#606070] uppercase tracking-widest mb-4">
                {offline ? '⚡ Local Draft — Stored in IndexedDB' : 'Project Intake Form'}
              </p>
              <div className="space-y-3">
                <input className={inputCls} placeholder="Full Name *" value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                <input className={inputCls} placeholder="Company" value={form.company}
                  onChange={e => setForm(p => ({ ...p, company: e.target.value }))} />
                <input className={inputCls} placeholder="Project Scope *" value={form.scope}
                  onChange={e => setForm(p => ({ ...p, scope: e.target.value }))} />
                <input className={inputCls} placeholder="Budget Range" value={form.budget}
                  onChange={e => setForm(p => ({ ...p, budget: e.target.value }))} />
                <button
                  onClick={handleGenerate}
                  disabled={!form.name || !form.scope}
                  className="w-full py-2.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    background: offline
                      ? 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(99,102,241,0.15))'
                      : 'rgba(99,102,241,0.8)',
                    border: offline ? '1px solid rgba(52,211,153,0.3)' : '1px solid rgba(99,102,241,0.4)',
                    color: offline ? '#34d399' : '#fff',
                  }}
                >
                  {generating ? 'Generating Draft PDF...' : pdfGenerated ? '✓ Draft PDF Generated' : 'Generate Draft PDF'}
                </button>
              </div>

              {synced && <SyncAnimation />}
            </div>

            {/* Live record preview */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-mono text-[#606070] uppercase tracking-widest">Live Record Preview</p>
              <div className="flex-1 rounded-xl border border-[#2a2a3a] bg-[#0a0a14] p-4 font-mono text-[11px] space-y-2">
                {[
                  { key: 'record_id', val: mounted ? recordId : '—', color: 'text-indigo-400' },
                  { key: 'client_name', val: form.name || '—', color: 'text-[#f0f0f0]' },
                  { key: 'company', val: form.company || '—', color: 'text-[#f0f0f0]' },
                  { key: 'scope', val: form.scope || '—', color: 'text-[#f0f0f0]' },
                  { key: 'storage', val: offline ? 'IndexedDB (local)' : 'AWS Encrypted Vault', color: offline ? 'text-emerald-400' : 'text-violet-400' },
                  { key: 'sync_status', val: synced ? 'SYNCED ✓' : offline ? 'PENDING — queued' : 'LIVE', color: synced ? 'text-emerald-400' : offline ? 'text-amber-400' : 'text-emerald-400' },
                  { key: 'encryption', val: 'AES-256-GCM', color: 'text-violet-400' },
                  { key: 'timestamp', val: mounted ? timestamp : '—', color: 'text-[#606070]' },
                ].map(({ key, val, color }) => (
                  <div key={key} className="flex gap-2">
                    <span className="text-[#404050] w-24 sm:w-28 flex-shrink-0 truncate">{key}:</span>
                    <span className={color}>{val}</span>
                  </div>
                ))}
              </div>
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-[10px] font-mono transition-colors duration-300 ${
                offline
                  ? 'border-emerald-500/20 bg-emerald-950/10 text-emerald-400'
                  : 'border-violet-500/20 bg-violet-950/10 text-violet-400'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${offline ? 'bg-emerald-400' : 'bg-violet-400 animate-pulse'}`} />
                {offline
                  ? 'Local-first engine active — zero data loss guaranteed'
                  : 'End-to-end encrypted — TLS 1.3 + AES-256-GCM at rest'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
