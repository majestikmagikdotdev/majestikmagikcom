'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface PricingPlan {
  name: string;
  tagline?: string;
  description: string;
  bestFor: string;
  features: string[];
  price?: string;
  buttonText: string;
  highlight: boolean;
  url: string;
  coreBenefits?: string[];
  subscription?: string[];
  whatYouGet?: string[];
  timeline?: string;
  investment?: {
    setupFee: string;
    monthlyPlan: {
      name: string;
      price: string;
      includes: string[];
    };
  };
  optionalAddOns?: {
    name: string;
    description: string;
    price?: string;
  }[];
}

type MicroService = {
  serviceId: string;
  service: string;
  price: string;
  priceAmount: number;
  bullets: string[];
  turnaround: string;
};

interface PricingSectionProps {
  pricingPlans: PricingPlan[];
  handleNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, item: string) => void;
  microServices?: MicroService[];
}

const DEFAULT_MICRO_SERVICES: MicroService[] = [
  {
    serviceId: 'ai-code-extraction',
    service: 'AI Code Extraction & Frontend Quick-Fix',
    bullets: [
      'Your codebase is a mess. We untangle it and ship something that actually works',
      'Broken UI, busted routing, hydration errors. We find it, fix it, explain it',
      'Deployed to your domain with SSL. You don\'t touch a config file',
    ],
    price: '$1,850',
    priceAmount: 1850,
    turnaround: '48–72 hrs',
  },
  {
    serviceId: 'shopify-email-engine',
    service: 'Shopify Email & Notification Engine',
    bullets: [
      'Your order emails look like they\'re from 2012. We fix that with custom Liquid templates',
      'Automated flows that actually trigger correctly, every time',
      'Emails that land in inboxes, not spam folders',
    ],
    price: '$1,250',
    priceAmount: 1250,
    turnaround: '24–48 hrs',
  },
  {
    serviceId: 'dns-deliverability',
    service: 'Domain Protection & Email Deliverability',
    bullets: [
      'SPF, DKIM, DMARC set up correctly so your emails stop getting flagged',
      'We scan 50+ blacklists and get you removed if you\'re on any of them',
      '30 days of monitoring so you know it\'s actually staying fixed',
    ],
    price: '$1,450',
    priceAmount: 1450,
    turnaround: '24 hrs',
  },
  {
    serviceId: 'core-web-vitals',
    service: 'Core Web Vitals & Speed Overhaul',
    bullets: [
      'Guaranteed 90+ on Lighthouse, mobile and desktop, not just one of them',
      'We kill the render-blocking scripts, lazy-load what doesn\'t need to be eager',
      'Your site stops feeling slow. Customers stop leaving before it loads',
    ],
    price: '$2,200',
    priceAmount: 2200,
    turnaround: '48–72 hrs',
  },
  {
    serviceId: 'landing-page-redesign',
    service: 'Landing Page Redesign & Engineering',
    bullets: [
      'Built in Next.js and Tailwind. Not a template, not a drag-and-drop builder',
      'Animations, API integrations, backend logic. Whatever the page needs',
      'Production-deployed, yours to own, no monthly platform fee',
    ],
    price: '$7,000',
    priceAmount: 7000,
    turnaround: '5–7 days',
  },
  {
    serviceId: 'geo-ai-audit',
    service: 'Technical GEO & AI Visibility Audit',
    bullets: [
      'When someone asks ChatGPT or Perplexity about your industry, you should show up',
      'We wire in the structured data and schema that AI crawlers actually read',
      'Full audit of your entity coverage: what\'s missing, what\'s wrong, what to fix',
    ],
    price: '$3,500',
    priceAmount: 3500,
    turnaround: '3–5 days',
  },
  {
    serviceId: 'webhook-debugging',
    service: 'Emergency Revenue & Lead-Pipeline Audit',
    bullets: [
      'Leads coming in but nothing showing up in your CRM? We find the break',
      'Stripe webhooks firing into the void, forms dropping submissions. We trace it all',
      '30 days of free support after the fix so you\'re not back here in a week',
    ],
    price: '$1,850',
    priceAmount: 1850,
    turnaround: '12–24 hrs',
  },
];

const PricingSection: React.FC<PricingSectionProps> = ({
  microServices = DEFAULT_MICRO_SERVICES,
}) => {
  const router = useRouter();

  const handleScrollToContact = () => {
    window.dispatchEvent(new CustomEvent('app:scroll-to', { detail: 'contact' }));
  };

  function handleCheckout(m: MicroService) {
    const params = new URLSearchParams({
      serviceId: m.serviceId,
      serviceName: m.service,
      price: String(m.priceAmount),
    });
    router.push(`/checkout?${params.toString()}`);
  }

  return (
    <section
      id="services-pricing"
      aria-labelledby="micro-services-heading"
      aria-describedby="micro-services-desc"
      className="scroll-animate relative z-0 py-12 md:py-24"
      style={{ background: 'var(--bg-app)', fontFamily: 'var(--font-sans)' }}
    >
      <div
        className="absolute inset-0 z-11 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(100, 116, 139, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="w-full relative px-4 md:px-6 mx-auto z-20">
        <div id="micro-services" aria-labelledby="micro-services-heading" className="mt-auto md:mt-auto">
          <div className="text-center mx-auto mb-8 md:mb-16">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[var(--bg-surface)] px-3 py-1 rounded border border-[var(--border-light)]">
              Common Services
            </span>
            <h2
              id="micro-services-heading"
              className="mb-2 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight"
              style={{ letterSpacing: '-0.04em', color: 'var(--text-primary)' }}
            >
              Know what you need?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-500 to-slate-800">
                Here&apos;s the price.
              </span>
            </h2>
            <p id="micro-services-desc" className="mt-4 text-base md:text-lg font-sans leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Fixed-price, no negotiation, no scope creep. Pay and we deliver within 24–72 hours. For bigger builds, just ask.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {microServices.map((m) => (
              <div
                key={m.serviceId}
                className="services-card-hover-animate flex flex-col justify-between rounded-lg p-4 md:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_32px_rgba(67,56,202,0.12)] transition duration-200"
                style={{ background: 'var(--bg-surface)', border: '1px solid rgba(99,102,241,0.3)' }}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-mono text-base font-semibold tracking-wide leading-snug" style={{ color: 'var(--text-primary)' }}>{m.service}</h3>
                    <span className="text-indigo-700 font-mono font-bold text-base whitespace-nowrap bg-indigo-100/50 px-2 py-0.5 rounded border border-indigo-200/50">{m.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                    <span className="text-xs font-mono text-emerald-600 font-semibold">Delivered in {m.turnaround}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-2">
                  <button
                    onClick={() => handleCheckout(m)}
                    className="inline-flex w-full items-center justify-center rounded px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-600 hover:border-indigo-500 transition-all duration-200 cursor-pointer"
                  >
                    Buy Now
                  </button>

                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center font-mono text-xs tracking-wide" style={{ color: 'var(--text-muted)' }}>
            Need a service not listed?{' '}
            <button onClick={handleScrollToContact} className="inline-flex items-center font-mono text-xs text-indigo-600 bg-indigo-100/50 hover:bg-indigo-200/50 border border-indigo-200/50 px-3 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer">Ask us</button>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
