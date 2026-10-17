'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.01-.166 1.98-.465 2.912C20.243 16.14 18.82 17.61 17 18.75c-1.79.99-3.76 1.5-5 1.5s-3.21-.51-5-1.5c-1.82-1.14-3.243-2.61-4.535-4.088C3.166 13.98 3 13.01 3 12s.166-1.98.465-2.912C3.757 7.86 5.18 6.39 7 5.25c1.79-.99 3.76-1.5 5-1.5s3.21.51 5 1.5c1.82 1.14 3.243 2.61 4.535 4.088C20.834 10.02 21 10.99 21 12Z" />
  </svg>
);

const OshaSeal = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0">
    <circle cx="32" cy="32" r="30" fill="#7c2d12" stroke="#f97316" strokeWidth="2" />
    <circle cx="32" cy="32" r="24" fill="none" stroke="#fb923c" strokeWidth="1" strokeDasharray="3 2" />
    <text x="32" y="22" textAnchor="middle" fill="#fb923c" fontSize="7" fontWeight="bold" fontFamily="monospace" letterSpacing="2">OSHA</text>
    <text x="32" y="33" textAnchor="middle" fill="#fed7aa" fontSize="11" fontWeight="bold" fontFamily="monospace">30</text>
    <text x="32" y="42" textAnchor="middle" fill="#fb923c" fontSize="5" fontFamily="monospace" letterSpacing="1">CONSTRUCTION</text>
    <path d="M20 47 L32 44 L44 47" stroke="#f97316" strokeWidth="1" fill="none" />
  </svg>
);

const ForkliftSeal = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0">
    <circle cx="32" cy="32" r="30" fill="#1c1917" stroke="#eab308" strokeWidth="2" />
    <circle cx="32" cy="32" r="24" fill="none" stroke="#facc15" strokeWidth="1" strokeDasharray="3 2" />
    <text x="32" y="20" textAnchor="middle" fill="#facc15" fontSize="5.5" fontWeight="bold" fontFamily="monospace" letterSpacing="1.5">CERTIFIED</text>
    <rect x="18" y="30" width="18" height="10" rx="1" fill="#facc15" />
    <rect x="36" y="33" width="3" height="7" rx="0.5" fill="#facc15" />
    <rect x="39" y="34" width="8" height="1.5" rx="0.5" fill="#fde047" />
    <rect x="39" y="37" width="8" height="1.5" rx="0.5" fill="#fde047" />
    <rect x="34" y="26" width="2" height="14" rx="0.5" fill="#fde047" />
    <circle cx="22" cy="41" r="2.5" fill="#1c1917" stroke="#facc15" strokeWidth="1" />
    <circle cx="32" cy="41" r="2.5" fill="#1c1917" stroke="#facc15" strokeWidth="1" />
    <text x="32" y="52" textAnchor="middle" fill="#facc15" fontSize="5" fontFamily="monospace" letterSpacing="1">OPERATOR</text>
  </svg>
);

const Rule = () => <hr className="border-none border-t border-[#2a2a3a] my-0" style={{ borderTopWidth: '1px', borderColor: '#2a2a3a' }} />;

type ModalContent = { type: 'image'; src: string; caption: string } | null;

function Modal({ content, onClose }: { content: ModalContent; onClose: () => void }) {
  useEffect(() => {
    if (!content) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [content, onClose]);

  if (!content) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div className="relative w-full" style={{ maxWidth: '42rem' }} onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 font-mono text-xs text-[#606070] hover:text-[#d4d4d8] transition-colors cursor-pointer"
        >
          close ✕
        </button>
        {content.type === 'image' ? (
          <Image
            src={content.src}
            alt={content.caption}
            width={800}
            height={800}
            className="w-full h-auto rounded-xl"
            style={{ border: '1px solid rgba(99,102,241,0.2)' }}
          />
        ) : null}
        <p className="mt-3 font-mono text-[11px] text-[#505060] text-center">{content.caption}</p>
      </div>
    </div>
  );
}

const ROLES = ['Developer', 'Writer', 'Artist', 'Builder'];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pause = 1400) {
  const [display, setDisplay] = React.useState('');
  const [wordIndex, setWordIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const word = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, display.length + 1));
        if (display.length + 1 === word.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setDisplay(word.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return display;
}

const JamilMathenyPage = () => {
  const [modal, setModal] = React.useState<ModalContent>(null);
  const role = useTypewriter(ROLES);
  return (
    <div className="min-h-screen" style={{ color: '#d4d4d8' }}>
      <div className="relative z-10 w-full px-6 pt-36 pb-24">
        <div className="max-w-3xl mx-auto">

          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-indigo-300 hover:text-indigo-200 transition-colors duration-200 mb-16"
          >
            ← Back to Home
          </Link>

          {/* Dateline + section label */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#505060]">Profile</span>
            <span className="font-mono text-[11px] text-[#505060]">Richmond, VA</span>
          </div>

          <Rule />

          {/* Headline */}
          <div className="mt-8 mb-3">
            <h1
              className="text-5xl md:text-7xl font-black leading-[0.92]"
              style={{ letterSpacing: '-0.04em', color: '#d4d4d8' }}
            >
              Jamil{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #818cf8, #a78bfa, #f8fafc, #818cf8)', backgroundSize: '200% auto', animation: 'shimmer 1.8s both' }}
              >
                Matheny
              </span>
            </h1>
          </div>

          {/* Byline */}
          <p className="font-mono text-xs text-[#505060] tracking-widest uppercase mb-8">
            Founder, Majestik Magik Inc. &nbsp;·&nbsp; <span style={{ color: '#818cf8' }}>{role}<span className="animate-pulse">|</span></span>
          </p>

          <Rule />

          {/* Lede */}
          <p
            className="mt-8 mb-8 text-lg md:text-xl leading-relaxed font-medium"
            style={{ color: '#d4d4d8', letterSpacing: '-0.01em' }}
          >
            He builds the software that businesses actually depend on: field tools that work without a signal, systems that don&apos;t require a support ticket to understand, and infrastructure that holds up when it matters.
          </p>

          <Rule />

          {/* Photos + body */}
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">

            {/* Photos */}
            <div className="flex flex-row md:flex-col gap-4 flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl opacity-30" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', filter: 'blur(8px)' }} />
                <Image
                  src="/img/0-jamil.webp"
                  alt="Jamil Matheny"
                  width={160}
                  height={160}
                  className="relative rounded-xl object-cover"
                  style={{ border: '1px solid rgba(99,102,241,0.2)' }}
                  loading="lazy"
                />
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl opacity-30" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', filter: 'blur(8px)' }} />
                <button onClick={() => setModal({ type: 'image', src: '/img/344705572_03be87188e_b.jpg', caption: 'Richmond Times-Dispatch, 2007' })} className="cursor-pointer block">
                  <Image
                    src="/img/344705572_03be87188e_b.jpg"
                    alt="Jamil Matheny featured in the Richmond Times-Dispatch"
                    width={160}
                    height={160}
                    className="relative rounded-xl object-cover hover:opacity-80 transition-opacity"
                    style={{ border: '1px solid rgba(99,102,241,0.2)' }}
                    loading="lazy"
                  />
                </button>
                <p className="mt-2 font-mono text-[10px] text-[#505060] leading-snug">Richmond Times-Dispatch, 2007</p>
              </div>
            </div>

            {/* Body copy */}
            <div className="space-y-5 text-[15px] leading-relaxed" style={{ color: '#a0a0b0', fontFamily: '"Libre Baskerville", Georgia, serif' }}>
              <p>
                Matheny grew up in Virginia. When his neighbor came home with an old computer part, he would sit down and teach him what it was and how to install it. That neighbor was the first mentor he ever had. As for coding, he figured that out on his own through Myspace and Yahoo Geocities. Not a punchline, but a credential. That&apos;s how a generation of developers learned to ship, and most of them are better for it. He kept sharpening his skills by building cool websites and apps, and later picked up formal education at ECPI University in 2019.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-indigo-500 pl-5 py-1 my-6">
                <p className="text-base italic leading-relaxed" style={{ color: '#d4d4d8', fontFamily: '"Playfair Display", Georgia, serif' }}>
                  &ldquo;Every one of those jobs taught him something about how operations actually work at ground level. That knowledge is in everything he builds.&rdquo;
                </p>
              </blockquote>

              <p>
                Before Majestik Magik, he covered E3 in Los Angeles in 2005 and 2006 as a journalist for Advanced Media Network and was featured in the Richmond Times-Dispatch for his writing on gaming culture. He fronted a heavy metal band called Spiral Fracture, won the 2012 Battle of the Bands, and performed at the Rockstar Energy Mayhem Festival on the same bill as Slipknot and Anthrax.
              </p>
              <p>
                He also ran a photography business in 2018, built a solo cleaning operation, and put in time as a delivery driver at FedEx and Amazon. None of that was a detour.
              </p>
              <p>
                He&apos;s been building things since he was assembling model cars and soldering circuits as a kid. That instinct never left. It just found a better medium.
              </p>
              <p style={{ color: '#d4d4d8' }} className="font-medium">
                He&apos;s a father, a builder, and someone who takes it personally when software fails the people using it.
              </p>
            </div>
          </div>

          {/* Stat chips */}
          <div className="mt-12">
            <Rule />
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Company', value: 'Majestik Magik Inc.' },
                { label: 'Location', value: 'Virginia, USA' },
                { label: 'Focus', value: 'Local-First Systems' },
                { label: 'Philosophy', value: 'Align. Build. Ship.' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg p-3 border border-[#2a2a3a]" style={{ background: '#0e0e1a' }}>
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: '#606070' }}>{label}</p>
                  <p className="text-xs font-mono font-bold" style={{ color: '#d4d4d8' }}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Federal Vendor Credentials */}
          <div className="mt-12">
            <Rule />
            <p className="mt-6 mb-3 font-mono text-[11px] uppercase tracking-widest" style={{ color: '#505060' }}>Federal Vendor Credentials</p>
            <div className="space-y-2">
              {['SAM.gov Registered Entity', 'UEI: F1TGDDS92AK3', 'CAGE Code: 14BU8'].map(item => (
                <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                  <ShieldCheckIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-xs font-mono text-indigo-300 tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <Rule />
            <p className="mt-6 mb-3 font-mono text-[11px] uppercase tracking-widest" style={{ color: '#505060' }}>Certifications</p>
            <div className="space-y-2">
              <a href="/majestikmagikai_42433375_20260917185138_30hourconstructionindustryoutreach.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors">
                <OshaSeal />
                <div>
                  <span className="text-xs font-mono text-amber-300 font-bold block">OSHA 30 · Construction Industry Outreach</span>
                  <span className="text-[11px] text-amber-400/60 mt-0.5 block">U.S. Dept. of Labor · View Certificate →</span>
                </div>
              </a>
              <a href="/Certificate_1004230428-3.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors">
                <ForkliftSeal />
                <div>
                  <span className="text-xs font-mono text-amber-300 font-bold block">Forklift Operator Certification</span>
                  <span className="text-[11px] text-amber-400/60 mt-0.5 block">Powered Industrial Truck · View Certificate →</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
      <Modal content={modal} onClose={() => setModal(null)} />
    </div>
  );
};

export default JamilMathenyPage;
