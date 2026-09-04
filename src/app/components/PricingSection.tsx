'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import RequestQuoteModal from './RequestQuoteModal';

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
      'AI-assisted parsing and scraping of complex codebases into clean, deployable front-end assets',
      'Fix UI rendering failures, CSS breakages, broken routing, and hydration errors',
      'Deploy to Vercel, Netlify, or Cloudflare with custom domain DNS and SSL configuration',
    ],
    price: '$1,850',
    priceAmount: 1850,
    turnaround: '48–72 hrs',
  },
  {
    serviceId: 'shopify-email-engine',
    service: 'Shopify Email & Notification Engine',
    bullets: [
      'Custom transactional Liquid template coding for order, shipping, and account notifications',
      'Automated flow logic, dynamic variable patching, and A/B-ready template architecture',
      'High-converting marketing email design optimized for deliverability and open rates',
    ],
    price: '$1,250',
    priceAmount: 1250,
    turnaround: '24–48 hrs',
  },
  {
    serviceId: 'dns-deliverability',
    service: 'DNS, SPF, DKIM & Deliverability Setup',
    bullets: [
      'Full domain reputation setup: MX, TXT, SPF, DKIM, and DMARC alignment',
      'Eliminate spam flagging, domain blacklisting, and email routing failures',
      'Inbox warm-up strategy and ongoing deliverability monitoring recommendations',
    ],
    price: '$600',
    priceAmount: 600,
    turnaround: '24 hrs',
  },
  {
    serviceId: 'core-web-vitals',
    service: 'Core Web Vitals & Speed Overhaul',
    bullets: [
      'Guaranteed 90+ Lighthouse and PageSpeed scores across mobile and desktop',
      'Server-side caching, image optimization pipeline, and script execution overhaul',
      'Eliminate render-blocking resources and implement lazy hydration strategies',
    ],
    price: '$2,200',
    priceAmount: 2200,
    turnaround: '48–72 hrs',
  },
  {
    serviceId: 'landing-page-redesign',
    service: 'Landing Page Redesign & Engineering',
    bullets: [
      'Custom Next.js and Tailwind code with elite animations and sub-second load times',
      'High-converting layout architecture with full-stack API and backend integrations',
      'Fully responsive, accessibility-compliant, and production-deployed',
    ],
    price: '$4,500',
    priceAmount: 4500,
    turnaround: '5–7 days',
  },
  {
    serviceId: 'geo-ai-audit',
    service: 'Technical GEO & AI Visibility Audit',
    bullets: [
      'Cutting-edge Generative Engine Optimization ensuring your brand ranks inside AI answers',
      'Inject structured JSON-LD graph schema targeting ChatGPT, Perplexity, and Claude',
      'Full site audit for AI crawler compatibility, entity coverage, and citation readiness',
    ],
    price: '$3,500',
    priceAmount: 3500,
    turnaround: '3–5 days',
  },
  {
    serviceId: 'webhook-debugging',
    service: 'Contact Form & Webhook Debugging',
    bullets: [
      'Enterprise-grade API, payload, and webhook error-handling audit',
      'Debug input validation logic, fix broken routing pipelines, and patch delivery failures',
      'Restore secure lead-capture with end-to-end webhook verification and logging',
    ],
    price: '$450',
    priceAmount: 450,
    turnaround: '24 hrs',
  },
];

const PricingSection: React.FC<PricingSectionProps> = ({
  microServices = DEFAULT_MICRO_SERVICES,
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      style={{ background: 'rgb(248, 250, 252)' }}
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
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-white px-3 py-1 rounded border border-[#334155]">
              Common Services
            </span>
            <h2
              id="micro-services-heading"
              className="mb-2 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-slate-900 font-bold tracking-tight"
              style={{ letterSpacing: '-0.04em' }}
            >
              Services We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-500 to-slate-800">
                Deliver Fast
              </span>
            </h2>
            <p id="micro-services-desc" className="mt-4 text-base md:text-lg text-slate-600 font-sans leading-relaxed">
              These are services we specialize in. Most are delivered within 24–72 hours. Let's talk about what your business needs and we'll give you an accurate quote and timeline.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {microServices.map((m) => (
              <div
                key={m.serviceId}
                className="services-card-hover-animate flex flex-col justify-between rounded-lg bg-white border border-slate-300 p-4 md:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:border-indigo-500 hover:shadow-[0_4px_32px_rgba(67,56,202,0.15)] transition duration-200"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-slate-700 font-mono text-base font-semibold tracking-wide leading-snug">{m.service}</h3>
                    <span className="text-indigo-700 font-mono font-bold text-base whitespace-nowrap bg-indigo-100/50 px-2 py-0.5 rounded border border-indigo-200/50">{m.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                    <span className="text-xs font-mono text-emerald-600 font-semibold">Delivered in {m.turnaround}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex w-full items-center justify-center rounded px-4 py-2.5 text-sm font-mono font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-600 hover:border-indigo-500 transition-all duration-200 cursor-pointer"
                  >
                    Request a Quote
                  </button>
                  <button
                    onClick={() => handleCheckout(m)}
                    className="inline-flex w-full items-center justify-center rounded px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 bg-white hover:bg-indigo-50 border border-indigo-200 hover:border-indigo-300 transition-all duration-200 cursor-pointer"
                  >
                    Buy Now
                  </button>
                  <p className="pt-1 text-center text-xs text-slate-500 font-mono">Or <a href="tel:8043627561" className="text-indigo-600 hover:text-indigo-700 font-semibold">call (804) 362-7561</a></p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center font-mono text-xs text-slate-500 tracking-wide">
            Need a service not listed?{' '}
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center font-mono text-xs text-indigo-600 bg-indigo-100/50 hover:bg-indigo-200/50 border border-indigo-200/50 px-3 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer">Ask us</button>.
          </p>
        </div>
      </div>
      <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PricingSection;
