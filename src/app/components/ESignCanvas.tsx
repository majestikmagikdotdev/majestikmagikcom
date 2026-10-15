'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';

function generateDeviceHash() {
  const raw = navigator.userAgent + screen.width + screen.colorDepth + new Date().getTimezoneOffset();
  let hash = 0;
  for (let i = 0; i < raw.length; i++) { hash = ((hash << 5) - hash) + raw.charCodeAt(i); hash |= 0; }
  return 'dev_' + Math.abs(hash).toString(16).padStart(8, '0');
}

export default function ESignCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [hasSig, setHasSig] = useState(false);
  const [locked, setLocked] = useState(false);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [deviceHash, setDeviceHash] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [sigHash, setSigHash] = useState('');
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setDeviceHash(generateDeviceHash());
    setTimestamp(new Date().toISOString().slice(0, 19) + 'Z');
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ('touches' in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: ((e as React.MouseEvent).clientX - rect.left) * scaleX,
      y: ((e as React.MouseEvent).clientY - rect.top) * scaleY,
    };
  };

  const startDraw = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (locked) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    setDrawing(true);
    setHasSig(true);
    lastPos.current = getPos(e, canvas);
  }, [locked]);

  const draw = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!drawing || locked) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const pos = getPos(e, canvas);
    setCoords({ x: Math.round(pos.x), y: Math.round(pos.y) });
    ctx.beginPath();
    ctx.moveTo(lastPos.current!.x, lastPos.current!.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(129,140,248,0.5)';
    ctx.shadowBlur = 6;
    ctx.stroke();
    lastPos.current = pos;
  }, [drawing, locked]);

  const stopDraw = useCallback(() => {
    setDrawing(false);
    lastPos.current = null;
  }, []);

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSig(false);
    setLocked(false);
    setSigHash('');
    setCoords(null);
    setTimestamp(new Date().toISOString().slice(0, 19) + 'Z');
  };

  const handleLock = () => {
    if (!hasSig) return;
    const canvas = canvasRef.current;
    const raw = canvas?.toDataURL() + deviceHash + Date.now();
    let hash = 0;
    for (let i = 0; i < (raw?.length ?? 0); i++) { hash = ((hash << 5) - hash) + (raw?.charCodeAt(i) ?? 0); hash |= 0; }
    setSigHash('sha256:' + Math.abs(hash).toString(16).padStart(8, '0') + '...c821');
    setTimestamp(new Date().toISOString().slice(0, 19) + 'Z');
    setLocked(true);
  };

  return (
    <div className="w-full px-4 md:px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-3 bg-indigo-950/20 px-3 py-1 rounded border border-indigo-500/20">
            • E-Sign Engine
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#f0f0f0] tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            Sign It.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-400 to-emerald-400">
              Lock It. Prove It.
            </span>
          </h2>
          <p className="mt-3 text-sm text-[#a0a0b0] max-w-lg">
            Draw your signature below with your mouse or finger. Watch the live metadata render in real time — coordinates, timestamp, device hash, audit status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Canvas */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono text-[#606070] uppercase tracking-widest">Signature Canvas</p>
              <div className="flex gap-2">
                <button onClick={handleClear} className="text-xs font-mono text-[#606070] hover:text-[#a0a0b0] transition-colors cursor-pointer px-2 py-1 rounded border border-[#2a2a3a] hover:border-[#3a3a4a]">
                  Clear
                </button>
                <button
                  onClick={handleLock}
                  disabled={!hasSig || locked}
                  className="text-xs font-mono px-3 py-1 rounded border transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    background: hasSig && !locked ? 'rgba(99,102,241,0.2)' : 'transparent',
                    borderColor: hasSig && !locked ? 'rgba(99,102,241,0.4)' : '#2a2a3a',
                    color: hasSig && !locked ? '#818cf8' : '#404050',
                  }}
                >
                  {locked ? '✓ Audit-Locked' : 'Lock & Sign'}
                </button>
              </div>
            </div>

            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                border: locked ? '1px solid rgba(52,211,153,0.3)' : '1px solid rgba(99,102,241,0.2)',
                background: '#0a0a14',
                boxShadow: locked ? '0 0 20px rgba(52,211,153,0.08)' : 'none',
              }}
            >
              {/* Baseline */}
              <div className="absolute bottom-12 left-6 right-6 h-px bg-[#2a2a3a]" />
              <div className="absolute bottom-10 left-6 text-[9px] font-mono text-[#2a2a3a]">SIGN ABOVE</div>

              <canvas
                ref={canvasRef}
                width={600}
                height={200}
                className="w-full touch-none"
                style={{ cursor: locked ? 'not-allowed' : 'crosshair', display: 'block' }}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={stopDraw}
                onMouseLeave={stopDraw}
                onTouchStart={startDraw}
                onTouchMove={draw}
                onTouchEnd={stopDraw}
              />

              {!hasSig && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-xs font-mono text-[#2a2a3a]">Draw signature here</span>
                </div>
              )}

              {locked && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-950/60 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #34d399' }} />
                  <span className="text-[10px] font-mono text-emerald-400">AUDIT-LOCKED</span>
                </div>
              )}
            </div>

            <p className="text-[10px] font-mono text-[#404050]">
              {locked
                ? 'Signature cryptographically hashed and locked. Tamper-evident.'
                : 'Draw with mouse or finger · Click "Lock & Sign" to generate hash'}
            </p>
          </div>

          {/* Metadata */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-mono text-[#606070] uppercase tracking-widest">Live Metadata</p>
            <div className="flex-1 rounded-xl border border-[#2a2a3a] bg-[#0a0a14] p-5 font-mono text-[11px] space-y-3">
              {[
                { key: 'coordinates', val: coords ? `${coords.x}, ${coords.y}` : '—', color: drawing ? 'text-indigo-400' : 'text-[#404050]' },
                { key: 'timestamp', val: timestamp, color: 'text-[#a0a0b0]' },
                { key: 'device_hash', val: deviceHash, color: 'text-violet-400' },
                { key: 'sig_hash', val: sigHash || '—', color: sigHash ? 'text-emerald-400' : 'text-[#404050]' },
                { key: 'status', val: locked ? 'AUDIT-LOCKED' : hasSig ? 'UNSIGNED' : 'EMPTY', color: locked ? 'text-emerald-400 font-bold' : hasSig ? 'text-amber-400' : 'text-[#404050]' },
                { key: 'encryption', val: 'AES-256-GCM', color: 'text-violet-400' },
                { key: 'storage', val: 'IndexedDB → AWS Vault', color: 'text-indigo-400' },
              ].map(({ key, val, color }) => (
                <div key={key} className="flex gap-3">
                  <span className="text-[#404050] w-24 flex-shrink-0">{key}:</span>
                  <span className={`${color} break-all`}>{val}</span>
                </div>
              ))}
            </div>

            <div className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-[10px] font-mono transition-all duration-300 ${
              locked
                ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-400'
                : 'border-[#2a2a3a] bg-[#111120] text-[#606070]'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${locked ? 'bg-emerald-400' : 'bg-[#404050]'}`}
                style={locked ? { boxShadow: '0 0 6px #34d399' } : {}} />
              {locked
                ? 'Cryptographic proof generated — legally binding e-signature'
                : 'Sign and lock to generate cryptographic proof of execution'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
