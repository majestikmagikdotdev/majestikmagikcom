'use client';

import React from 'react';

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
  service: string;
  price: string;
  bullets: string[];
  url: string;
};

interface PricingSectionProps {
  pricingPlans: PricingPlan[];
  handleNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, item: string) => void;
  microServices?: MicroService[];
}

const DEFAULT_MICRO_SERVICES: MicroService[] = [
  {
    service: 'AI Code Extraction & Frontend Quick-Fix',
    bullets: [
      'AI-assisted parsing and scraping of complex codebases into clean, deployable front-end assets',
      'Fix UI rendering failures, CSS breakages, broken routing, and hydration errors',
      'Deploy to Vercel, Netlify, or Cloudflare with custom domain DNS and SSL configuration',
    ],
    price: '$1,850',
    url: 'https://book.stripe.com/bJe00jd8y0qi4tE11ddEs09'
  },
  {
    service: 'Shopify Email & Notification Engine',
    bullets: [
      'Custom transactional Liquid template coding for order, shipping, and account notifications',
      'Automated flow logic, dynamic variable patching, and A/B-ready template architecture',
      'High-converting marketing email design optimized for deliverability and open rates',
    ],
    price: '$1,250',
    url: 'https://book.stripe.com/bJefZh2tU7SK2lw6lxdEs03'
  },
  {
    service: 'DNS, SPF, DKIM & Deliverability Setup',
    bullets: [
      'Full domain reputation setup: MX, TXT, SPF, DKIM, and DMARC alignment',
      'Eliminate spam flagging, domain blacklisting, and email routing failures',
      'Inbox warm-up strategy and ongoing deliverability monitoring recommendations',
    ],
    price: '$600',
    url: 'https://book.stripe.com/14AaEX1pQeh82lw39ldEs04'
  },
  {
    service: 'Core Web Vitals & Speed Overhaul',
    bullets: [
      'Guaranteed 90+ Lighthouse and PageSpeed scores across mobile and desktop',
      'Server-side caching, image optimization pipeline, and script execution overhaul',
      'Eliminate render-blocking resources and implement lazy hydration strategies',
    ],
    price: '$2,200',
    url: 'https://book.stripe.com/28E5kDfgGflcd0abFRdEs05'
  },
  {
    service: 'Landing Page Redesign & Engineering',
    bullets: [
      'Custom Next.js and Tailwind code with elite animations and sub-second load times',
      'High-converting layout architecture with full-stack API and backend integrations',
      'Fully responsive, accessibility-compliant, and production-deployed',
    ],
    price: '$4,500',
    url: 'https://book.stripe.com/7sY9AT6Ka6OG9NYdNZdEs06'
  },
  {
    service: 'Technical GEO & AI Visibility Audit',
    bullets: [
      'Cutting-edge Generative Engine Optimization ensuring your brand ranks inside AI answers',
      'Inject structured JSON-LD graph schema targeting ChatGPT, Perplexity, and Claude',
      'Full site audit for AI crawler compatibility, entity coverage, and citation readiness',
    ],
    price: '$3,500',
    url: 'https://book.stripe.com/eVq00j5G66OGaS2bFRdEs07'
  },
  {
    service: 'Contact Form & Webhook Debugging',
    bullets: [
      'Enterprise-grade API, payload, and webhook error-handling audit',
      'Debug input validation logic, fix broken routing pipelines, and patch delivery failures',
      'Restore secure lead-capture with end-to-end webhook verification and logging',
    ],
    price: '$450',
    url: 'https://book.stripe.com/8x228r8Si0qi2lw8tFdEs08'
  },
];

const PricingSection: React.FC<PricingSectionProps> = ({
  microServices = DEFAULT_MICRO_SERVICES,
}) => {

  return (
    <section
      id="services-pricing"
      aria-labelledby="micro-services-heading"
      aria-describedby="micro-services-desc"
      className="scroll-animate relative z-0 py-12 md:py-24"
      style={{
        background: "rgb(248, 250, 252)", // Light background
      }}
    >
      

      {/* High-end hardware processor micro-dot matrix pattern - Stacked safely on top (z-11) */}
      <div 
        className="absolute inset-0 z-11 pointer-events-none opacity-20" // Slightly less opaque for light theme
        style={{
          backgroundImage: 'radial-gradient(rgba(100, 116, 139, 0.4) 1.2px, transparent 1.2px)', // Darker dots
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="w-full relative px-4 md:px-6 mx-auto z-20">
        {/* Micro Services */}
        <div
          id="micro-services"
          aria-labelledby="micro-services-heading"
          className="mt-auto md:mt-auto"
        >
          {/* Header block with progressive fade-in */}
          <div
            className="text-center mx-auto mb-8 md:mb-16"
          >
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-white px-3 py-1 rounded border border-[#334155]">
              On-Demand Services
            </span>

            <h2
              id="micro-services-heading"
              className="mb-2 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-slate-900 font-bold tracking-tight"
              style={{ letterSpacing: '-0.04em' }}
            >
              Ship It{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-500 to-slate-800">
                Within 72hrs
              </span>
            </h2>

            <p id="micro-services-desc" className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed">
              Pick your fix, pay once, and get it shipped. Every service is scoped, priced upfront, and delivered within 24–72 hours for most projects — no retainers, no surprises.
            </p>
          </div>

          {/* Core Hardware Cards Matrix with Staggered Transition */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {microServices.map((m) => (
              <div
                key={m.service}
                className="services-card-hover-animate flex flex-col justify-between rounded-lg bg-white border border-slate-300 p-4 md:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:border-indigo-500 hover:shadow-[0_4px_32px_rgba(67,56,202,0.15)] transition duration-200"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-slate-700 font-mono text-base font-semibold tracking-wide leading-snug">{m.service}</h3>
                    <span className="text-indigo-700 font-mono font-bold text-base whitespace-nowrap bg-indigo-100/50 px-2 py-0.5 rounded border border-indigo-200/50">{m.price}</span> {/* Light badge */}
                  </div>
                  <ul className="space-y-1.5">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700"> {/* Darker bullet text */}
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded px-4 py-2.5 text-sm font-mono font-bold uppercase tracking-wider text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 hover:border-indigo-300 transition-all duration-200" // Light button
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Network Link */}
          <p
            className="mt-12 text-center font-mono text-xs text-slate-500 tracking-wide"
          >
            Need a service not listed?{' '} {/* Keep text color, adjust link for contrast */}
            <a href="#contact" className="inline-flex items-center font-mono text-xs text-indigo-600 bg-indigo-100/50 hover:bg-indigo-200/50 border border-indigo-200/50 px-3 py-1.5 rounded-lg transition-colors duration-200">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;