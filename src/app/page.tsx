'use client';

import dynamic from 'next/dynamic';
import HomeHero from './components/HomeHero';
import HomeServices from './components/HomeServices';
import HomePricing from './components/HomePricing';
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
          linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    />
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
  return (
    <div className="relative min-h-screen" style={{ background: '#181818' }}>
      <GridCanvas />
      <AmbientGlows />

      <main
        aria-label="Majestik Magik — Local-First Enterprise Software Infrastructure & Native Systems"
        className="relative z-10"
      >
        <HomeHero />
        <OfflineDemoSection />
        <NodePipelineSection />
        <ESignCanvas />
        <HomeServices />
        <HomePricing />

      </main>

      <ChatbotController />
    </div>
  );
}
