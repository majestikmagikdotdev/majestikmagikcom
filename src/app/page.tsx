'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HomeHero from './components/HomeHero';
import ClientMarquee from './components/ClientMarquee';
import HomeServices from './components/HomeServices';
import WhyUsStatement from './components/WhyUsStatement';
import ProcessSection from './components/ProcessSection';
import HomePricing from './components/HomePricing';
import TestimonialsSection from './components/TestimonialsSection';
import OfflineDemoSection from './components/OfflineDemoSection';
import NodePipelineSection from './components/NodePipelineSection';
import ESignCanvas from './components/ESignCanvas';

const ChatbotController = dynamic(() => import('./components/ChatbotController'));

/* ─── Grid SVG background ─────────────────────────────────────────────────── */
function GridCanvas() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    />
  );
}

/* ─── Grid beam overlay ───────────────────────────────────────────────────── */
function GridBeams() {
  // viewBox matches 40×22 cells at 48px = 1920×1056
  // Beams snap to grid lines. Each beam: a path + linearGradient.
  // Animation is pure CSS keyframes on stroke-dashoffset.
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 w-full h-full"
      viewBox="0 0 1920 1056"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Vertical beam — indigo, col 14 (x=672) */}
        <linearGradient id="vb1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#6366f1" stopOpacity="0" />
          <stop offset="50%"  stopColor="#a5b4fc" stopOpacity="1" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
        {/* Vertical beam — teal, col 28 (x=1344) */}
        <linearGradient id="vb2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0d9488" stopOpacity="0" />
          <stop offset="50%"  stopColor="#5eead4" stopOpacity="1" />
          <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
        </linearGradient>
        {/* Horizontal beam — violet, row 10 (y=480) */}
        <linearGradient id="hb1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0" />
          <stop offset="50%"  stopColor="#c4b5fd" stopOpacity="1" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Vertical beam 1 — indigo, travels full height, 4s loop */}
      <line
        x1="672" y1="0" x2="672" y2="1056"
        stroke="url(#vb1)" strokeWidth="1.5"
        strokeDasharray="180 1056"
        style={{ animation: 'beam-v 4s linear infinite' }}
      />
      {/* Vertical beam 2 — teal, offset start by 1.8s */}
      <line
        x1="1344" y1="0" x2="1344" y2="1056"
        stroke="url(#vb2)" strokeWidth="1.5"
        strokeDasharray="180 1056"
        style={{ animation: 'beam-v 5s linear 1.8s infinite' }}
      />
      {/* Horizontal beam — violet, travels full width, 6s loop */}
      <line
        x1="0" y1="480" x2="1920" y2="480"
        stroke="url(#hb1)" strokeWidth="1.5"
        strokeDasharray="240 1920"
        style={{ animation: 'beam-h 6s linear 0.6s infinite' }}
      />
    </svg>
  );
}

/* ─── Ambient corner glows ────────────────────────────────────────────────── */
function AmbientGlows() {
  return (
    <>
      {/* Top-center indigo hero glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 z-0 w-[900px] h-[500px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%)',
        }}
      />
      {/* Bottom-left emerald glow — "Local Active" */}
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-0 left-0 z-0 w-[500px] h-[400px]"
        style={{
          background: 'radial-gradient(ellipse at 0% 100%, rgba(52,211,153,0.10) 0%, transparent 65%)',
        }}
      />
      {/* Bottom-right electric purple glow — "Encrypted Sync" */}
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-0 right-0 z-0 w-[500px] h-[400px]"
        style={{
          background: 'radial-gradient(ellipse at 100% 100%, rgba(167,139,250,0.10) 0%, transparent 65%)',
        }}
      />
    </>
  );
}

export default function App() {
  const [halloween, setHalloween] = useState(false);

  useEffect(() => {
    const onToggle = () => setHalloween(document.body.classList.contains('halloween'));
    window.addEventListener('app:halloween', onToggle);
    return () => window.removeEventListener('app:halloween', onToggle);
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: halloween ? '#141414' : '#181818' }}>
      <GridCanvas />
      <GridBeams />
      <AmbientGlows />

      <main
        aria-label="Majestik Magik — Local-First Enterprise Software Infrastructure & Native Systems"
        className="relative z-10"
      >
        <HomeHero />
        <ClientMarquee />
        <OfflineDemoSection />
        <NodePipelineSection />
        <ESignCanvas />
        <WhyUsStatement />
        <HomeServices />
        <ProcessSection />
        <HomePricing />
        <TestimonialsSection />

      </main>

      <ChatbotController />
    </div>
  );
}
