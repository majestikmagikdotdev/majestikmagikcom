'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const SERVICES = [
  {
    serviceId: 'ai-code-extraction',
    service: 'AI Code Extraction & Frontend Quick-Fix',
    price: '$1,850', priceAmount: 1850, turnaround: '48–72 hrs',
    bullets: [
      'AI-assisted parsing of complex codebases into clean deployable assets',
      'Fix UI rendering failures, CSS breakages, broken routing, hydration errors',
      'Deploy to Vercel, Netlify, or Cloudflare with custom domain DNS and SSL',
    ],
  },
  {
    serviceId: 'shopify-email-engine',
    service: 'Shopify Email & Notification Engine',
    price: '$1,250', priceAmount: 1250, turnaround: '24–48 hrs',
    bullets: [
      'Custom transactional Liquid template coding for all notification types',
      'Automated flow logic, dynamic variable patching, A/B-ready architecture',
      'High-converting marketing email design optimized for deliverability',
    ],
  },
  {
    serviceId: 'dns-deliverability',
    service: 'Domain Protection & Email Deliverability (SPF, DKIM, DMARC)',
    price: '$1,450', priceAmount: 1450, turnaround: '24 hrs',
    bullets: [
      'Strict SPF, DKIM, and DMARC configuration with p=reject deployment',
      'Diagnostic scan across 50+ global blacklists with manual removal',
      '30-day monitoring via Google Postmaster Tools and MXToolbox',
    ],
  },
  {
    serviceId: 'core-web-vitals',
    service: 'Core Web Vitals & Speed Overhaul',
    price: '$2,200', priceAmount: 2200, turnaround: '48–72 hrs',
    bullets: [
      'Guaranteed 90+ Lighthouse and PageSpeed scores across mobile and desktop',
      'Server-side caching, image optimization pipeline, script execution overhaul',
      'Eliminate render-blocking resources, implement lazy hydration strategies',
    ],
  },
  {
    serviceId: 'landing-page-redesign',
    service: 'Landing Page Redesign & Engineering',
    price: '$7,000', priceAmount: 7000, turnaround: '5–7 days',
    bullets: [
      'Custom Next.js and Tailwind code with elite animations and sub-second loads',
      'High-converting layout with full-stack API and backend integrations',
      'Fully responsive, accessibility-compliant, and production-deployed',
    ],
  },
  {
    serviceId: 'geo-ai-audit',
    service: 'Technical GEO & AI Visibility Audit',
    price: '$3,500', priceAmount: 3500, turnaround: '3–5 days',
    bullets: [
      'GEO ensuring your brand ranks inside ChatGPT, Perplexity, and Claude',
      'Inject structured JSON-LD graph schema for AI crawler compatibility',
      'Full site audit for entity coverage and citation readiness',
    ],
  },
  {
    serviceId: 'webhook-debugging',
    service: 'Emergency Revenue & Lead-Pipeline Audit',
    price: '$1,850', priceAmount: 1850, turnaround: '12–24 hrs',
    bullets: [
      'Audit your entire lead and revenue pipeline for broken API integrations',
      'Identify root cause of missing Stripe webhooks or dropped form payloads',
      '30 days of free support post-fix to ensure full stability',
    ],
  },
];

export default function HomePricing() {
  const router = useRouter();

  function handleCheckout(s: typeof SERVICES[0]) {
    const params = new URLSearchParams({ serviceId: s.serviceId, serviceName: s.service, price: String(s.priceAmount) });
    router.push(`/checkout?${params.toString()}`);
  }

  return (
    <div id="pricing" className="w-full px-4 md:px-6 py-20 md:py-28">
      <div className="mb-14 text-center">
        <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1a1a2a] px-3 py-1 rounded border border-[#2a2a3a]">
          Common Services
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#f0f0f0] tracking-tight" style={{ letterSpacing: '-0.04em' }}>
          Services We{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-[#f0f0f0]">Deliver Fast</span>
        </h2>
        <p className="mt-4 text-base text-[#a0a0b0] max-w-2xl mx-auto">
          Fixed-price — pick one, pay, and we ship it within 24–72 hours. For larger projects, request a quote.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(s => (
          <div
            key={s.serviceId}
            className="flex flex-col justify-between rounded-xl border border-[#2a2a3a] bg-[#111120] p-5 hover:border-indigo-500/40 transition-colors duration-200"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-mono text-sm font-semibold text-[#f0f0f0] leading-snug">{s.service}</h3>
                <span className="text-indigo-400 font-mono font-bold text-sm whitespace-nowrap bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-500/20 flex-shrink-0">{s.price}</span>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
                <span className="text-xs font-mono text-emerald-400 font-semibold">Delivered in {s.turnaround}</span>
              </div>
              <ul className="space-y-1.5">
                {s.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[#a0a0b0]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => handleCheckout(s)}
              className="mt-5 w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center font-mono text-xs text-[#606070]">
        Need something not listed?{' '}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('app:scroll-to', { detail: 'contact' }))}
          className="text-indigo-400 hover:text-indigo-300 underline cursor-pointer"
        >
          Ask us
        </button>
      </p>
    </div>
  );
}
