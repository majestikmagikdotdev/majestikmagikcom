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
    service: 'Domain Protection & Email Deliverability',
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
    <div id="pricing" className="w-full px-4 md:px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-[#404050] mb-5">Fixed-Price Services</p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f0f0f0]"
            style={{ letterSpacing: '-0.04em', lineHeight: '1' }}
          >
            Pick one.
            <br />
            <span className="text-[#404050]">We ship it fast.</span>
          </h2>
          <p className="mt-5 text-sm text-[#606070] max-w-lg leading-relaxed">
            Fixed-price — pay and we deliver within 24–72 hours. For larger projects, request a quote.
          </p>
        </div>

        {/* Service rows */}
        <div className="border border-[#1e1e2e] rounded-2xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <div
              key={s.serviceId}
              className={`group flex flex-col md:flex-row md:items-center gap-4 px-6 py-5 hover:bg-[#0e0e1a] transition-colors duration-150 cursor-pointer ${
                i < SERVICES.length - 1 ? 'border-b border-[#1e1e2e]' : ''
              }`}
              onClick={() => handleCheckout(s)}
            >
              {/* Service name + bullets */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-[#303040] tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-semibold text-[#c0c0d0] group-hover:text-[#f0f0f0] transition-colors duration-150 leading-snug">
                    {s.service}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 pl-7">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-1.5 text-sm text-[#a0a0b0]">
                      <span className="w-0.5 h-0.5 rounded-full bg-[#404050] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: turnaround + price + CTA */}
              <div className="flex items-center gap-4 flex-shrink-0 pl-7 md:pl-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-[11px] font-mono text-[#404050] whitespace-nowrap">{s.turnaround}</span>
                </div>
                <span className="text-base font-mono font-bold text-indigo-400 whitespace-nowrap">{s.price}</span>
                <button
                  onClick={(e) => { e.stopPropagation(); handleCheckout(s); }}
                  className="text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-lg bg-[#111120] border border-[#2a2a3a] text-[#606070] hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-150 whitespace-nowrap cursor-pointer"
                >
                  Buy Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[11px] font-mono text-[#303040] text-center">
          Need something not listed?{' '}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('app:scroll-to', { detail: 'contact' }))}
            className="text-[#a0a0b0] hover:text-indigo-400 transition-colors cursor-pointer underline underline-offset-2"
          >
            Ask us
          </button>
        </p>
      </div>
    </div>
  );
}
