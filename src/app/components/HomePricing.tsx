'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const SERVICES = [
  {
    serviceId: 'ai-code-extraction',
    service: 'AI Code Extraction & Frontend Quick-Fix',
    price: '$1,850', priceAmount: 1850, turnaround: '48–72 hrs',
    bullets: [
      'Your codebase is a mess. We untangle it and ship something that actually works',
      'Broken UI, busted routing, hydration errors. We find it, fix it, explain it',
      'Deployed to your domain with SSL. You don\'t touch a config file',
    ],
  },
  {
    serviceId: 'shopify-email-engine',
    service: 'Shopify Email & Notification Engine',
    price: '$1,250', priceAmount: 1250, turnaround: '24–48 hrs',
    bullets: [
      'Your order emails look like they\'re from 2012. We fix that with custom Liquid templates',
      'Automated flows that actually trigger correctly, every time',
      'Emails that land in inboxes, not spam folders',
    ],
  },
  {
    serviceId: 'dns-deliverability',
    service: 'Domain Protection & Email Deliverability',
    price: '$1,450', priceAmount: 1450, turnaround: '24 hrs',
    bullets: [
      'SPF, DKIM, DMARC set up correctly so your emails stop getting flagged',
      'We scan 50+ blacklists and get you removed if you\'re on any of them',
      '30 days of monitoring so you know it\'s actually staying fixed',
    ],
  },
  {
    serviceId: 'core-web-vitals',
    service: 'Core Web Vitals & Speed Overhaul',
    price: '$2,200', priceAmount: 2200, turnaround: '48–72 hrs',
    bullets: [
      'Guaranteed 90+ on Lighthouse, mobile and desktop, not just one of them',
      'We kill the render-blocking scripts, lazy-load what doesn\'t need to be eager',
      'Your site stops feeling slow. Customers stop leaving before it loads',
    ],
  },
  {
    serviceId: 'landing-page-redesign',
    service: 'Landing Page Redesign & Engineering',
    price: '$7,000', priceAmount: 7000, turnaround: '5–7 days',
    bullets: [
      'Built in Next.js and Tailwind. Not a template, not a drag-and-drop builder',
      'Animations, API integrations, backend logic. Whatever the page needs',
      'Production-deployed, yours to own, no monthly platform fee',
    ],
  },
  {
    serviceId: 'geo-ai-audit',
    service: 'Technical GEO & AI Visibility Audit',
    price: '$3,500', priceAmount: 3500, turnaround: '3–5 days',
    bullets: [
      'When someone asks ChatGPT or Perplexity about your industry, you should show up',
      'We wire in the structured data and schema that AI crawlers actually read',
      'Full audit of your entity coverage: what\'s missing, what\'s wrong, what to fix',
    ],
  },
  {
    serviceId: 'webhook-debugging',
    service: 'Emergency Revenue & Lead-Pipeline Audit',
    price: '$1,850', priceAmount: 1850, turnaround: '12–24 hrs',
    bullets: [
      'Leads coming in but nothing showing up in your CRM? We find the break',
      'Stripe webhooks firing into the void, forms dropping submissions. We trace it all',
      '30 days of free support after the fix so you\'re not back here in a week',
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
        <div className="reveal mb-14">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f0f0f0]"
            style={{ letterSpacing: '-0.04em', lineHeight: '1' }}
          >
            Know what you need?
            <br />
            <span className="text-[#404050]">Here&apos;s the price.</span>
          </h2>
          <p className="mt-5 text-sm text-[#a0a0b0] max-w-lg leading-relaxed"> Pay and we deliver within 24–72 hours. For bigger builds, just ask.
          </p>
        </div>

        {/* Service rows */}
        <div className="reveal border border-[#1e1e2e] rounded-2xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <div
              key={s.serviceId}
              className={`reveal group flex flex-col md:flex-row md:items-center gap-4 px-6 py-5 hover:bg-[#0e0e1a] transition-colors duration-150 cursor-pointer ${
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
                <ul className="flex flex-col gap-y-1 pl-7">
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

        <p className="mt-6 text-[11px] font-mono text-[#303040]">
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
