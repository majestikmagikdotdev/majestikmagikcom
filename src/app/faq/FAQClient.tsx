'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is DMAS Intake?',
    answer: 'DMAS Intake is an offline-first Electronic Visit Verification and compliance platform built for Virginia home health agencies. Care aides capture DMAS-97A/B, DMAS-98R, and DMAS-99 forms with GPS logging and AES-256 encrypted signatures directly on their device — no internet connection required. Records sync automatically to the agency dashboard when connectivity is restored.',
  },
  {
    question: 'What problem does DMAS Intake solve?',
    answer: 'Rural Virginia home health agencies operate in areas with unreliable or no cell service. Standard cloud-based EVV tools fail without a signal, forcing aides to fall back to paper. Incomplete or missing EVV records trigger Medicaid audit clawbacks — agencies lose reimbursement for visits they actually completed. DMAS Intake eliminates that risk by working entirely offline.',
  },
  {
    question: 'How does offline EVV work?',
    answer: 'DMAS Intake is a local-first Progressive Web App. All visit data — GPS coordinates, aide signatures, visit start and end times, and DMAS form entries — is written to encrypted on-device storage the moment it is captured. When the device reconnects to the internet, all queued records sync to the agency compliance dashboard automatically. Zero manual intervention required.',
  },
  {
    question: 'What are DMAS-97A/B, DMAS-98R, and DMAS-99?',
    answer: 'These are Virginia Medicaid documentation forms required for home health and personal care services. DMAS-97A/B is the Personal Care Assessment, DMAS-98R is the Aide Plan of Care, and DMAS-99 is the Aide Record used to document each visit. Accurate completion is required for Medicaid reimbursement and state compliance audits. DMAS Intake digitizes and encrypts all three for offline capture.',
  },
  {
    question: 'What is the federal EVV mandate?',
    answer: 'The 21st Century Cures Act requires all Medicaid-funded personal care and home health services to use Electronic Visit Verification. Virginia enforces this through DMAS. Agencies that cannot produce compliant EVV records risk claim denials and audit clawbacks. Rural agencies are disproportionately affected because standard cloud-based EVV tools fail without cell service.',
  },
  {
    question: 'Is DMAS Intake HIPAA compliant?',
    answer: 'DMAS Intake is built with HIPAA-readiness as a core design principle. All patient and visit data is encrypted at rest using AES-256 and transmitted over TLS. Data is stored locally on the aide\'s device in an encrypted IndexedDB store and is never exposed to third-party services. Agencies retain full ownership of their data.',
  },
  {
    question: 'What causes Medicaid audit clawbacks?',
    answer: 'Clawbacks occur when an agency cannot produce complete EVV records or properly completed DMAS forms for a billed visit. Common causes: paper documentation that was lost or incomplete, cloud EVV apps that failed to record visits when the aide had no signal, and missing GPS verification data. DMAS Intake captures all required data offline and syncs it automatically.',
  },
  {
    question: 'Does it work without Wi-Fi or cell service?',
    answer: 'Yes. That is the entire point. DMAS Intake runs entirely on-device. Aides can complete full visit documentation — forms, GPS, signatures — with zero bars of signal. The app queues everything locally and syncs the moment any internet connection is detected.',
  },
  {
    question: 'What devices does it run on?',
    answer: 'DMAS Intake is a Progressive Web App, so it runs on any modern smartphone or tablet — iOS or Android — without requiring an app store download. Aides access it through their browser and can add it to their home screen for a native app experience.',
  },
  {
    question: 'How does the agency dashboard work?',
    answer: 'Agency directors and compliance officers get a real-time dashboard to monitor visit records, EVV sync status, aide activity, and audit readiness across all locations. When aides sync, records appear immediately with GPS verification, timestamps, and form data attached.',
  },
  {
    question: 'Does DMAS Intake support multiple locations?',
    answer: 'Yes. DMAS Intake is built to scale across single and multi-location home health agencies. Directors get centralized oversight with per-location visit tracking and compliance reporting.',
  },
  {
    question: 'How is visit data secured?',
    answer: 'All data is encrypted at rest with AES-256 on the aide\'s device and transmitted over TLS. No visit data touches third-party servers. The agency owns all records and can export them for audit purposes at any time.',
  },
  {
    question: 'How do I request a demo?',
    answer: 'Fill out the intake form at majestikmagik.dev with your name, agency name, phone, and number of locations. We\'ll reach back out within 24 hours to schedule a walkthrough. You can also visit the live portal at dmas-intake.majestikmagik.dev or email contact@majestikmagik.dev directly.',
  },
  {
    question: 'Who built DMAS Intake?',
    answer: 'DMAS Intake was built by Jamil Matheny, founder of Majestik Magik, Inc., based in Richmond, Virginia. It was developed after identifying that existing EVV solutions fail in low-connectivity rural environments, leaving agencies exposed to Medicaid audit clawbacks for visits their aides actually completed.',
  },
  {
    question: 'Where can I read your privacy and data policies?',
    answer: 'Privacy, Terms, Cookies, Refunds, IP, and Cybersecurity policies are all linked in the site footer.',
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setOpenIndex(null);
  }, [query]);

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(({ question, answer }) =>
      (question + ' ' + answer).toLowerCase().includes(q)
    );
  }, [query]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen" style={{ background: '#181818' }}>

      {/* Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.13) 0%, transparent 55%)' }} />

      <main className="relative z-10 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-indigo-300 bg-indigo-400/10 hover:bg-indigo-300/20 border border-indigo-400/20 px-3 py-1.5 rounded-lg transition-colors duration-200 mb-10"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#111120] px-3 py-1 rounded border border-[#2a2a3a]">
              DMAS Intake FAQ
            </span>
            <h1
              className="text-5xl md:text-6xl font-black text-[#d4d4d8] mb-4"
              style={{ letterSpacing: '-0.02em', lineHeight: '1', fontFamily: 'var(--font-im-fell-english)' }}
            >
              Questions about
              <br />
              <span className="text-[#404050]">DMAS Intake & EVV.</span>
            </h1>
            <p className="text-sm text-[#a0a0b0] leading-relaxed max-w-lg">
              Everything a home health agency director or compliance officer needs to know about offline-first EVV and DMAS compliance.
            </p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <input
                id="faq-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search — e.g. offline, HIPAA, clawbacks, DMAS-99..."
                className="w-full px-4 py-3 bg-[#0e0e1a] border border-[#2a2a3a] rounded-lg text-[#d4d4d8] text-sm placeholder-[#404050] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#404050] hover:text-[#a0a0b0] transition-colors text-lg"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
            <p className="mt-2 text-xs font-mono text-[#404050]">
              {filteredFaqs.length} result{filteredFaqs.length === 1 ? '' : 's'}{query ? ` for "${query}"` : ''}
            </p>
          </div>

          {/* FAQ list */}
          <div className="border border-[#1e1e2e] rounded-2xl overflow-hidden">
            {filteredFaqs.length === 0 ? (
              <div className="px-6 py-10 text-center text-sm text-[#606070]">
                Nothing found. Try <span className="text-indigo-400">offline</span>, <span className="text-indigo-400">HIPAA</span>, or <span className="text-indigo-400">clawback</span>.
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`border-b border-[#1e1e2e] last:border-b-0 transition-colors duration-150 ${isOpen ? 'bg-[#0e0e1a]' : 'hover:bg-[#0e0e1a]/50'}`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-[#c0c0d0]">{faq.question}</span>
                      <span className={`text-indigo-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                        ▶
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                      <p className="px-6 pb-5 text-sm text-[#a0a0b0] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <p className="mt-8 text-center text-xs font-mono text-[#404050]">
            Still have a question?{' '}
            <Link href="/#contact" className="text-[#a0a0b0] hover:text-indigo-400 transition-colors underline underline-offset-2">
              Request a demo
            </Link>
          </p>

        </div>
      </main>
    </div>
  );
};

export default FAQPage;
