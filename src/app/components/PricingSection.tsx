'use client';

import React, { useState, useEffect, useRef } from 'react';

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
      'Export clean front-end code off Lovable, Bolt.new, or Webflow',
      'Fix UI rendering issues, CSS breakages, and broken links',
      'Deploy to Vercel, Netlify, or Cloudflare with custom DNS',
    ],
    price: '$200',
    url: 'https://book.stripe.com/bJe00jd8y0qi4tE11ddEs09'
  },
  {
    service: 'Shopify Email & Notification Engine',
    bullets: [
      'Fix broken layout logic in transactional email templates',
      'Patch dynamic variables and Liquid syntax errors',
      'Optimize marketing email templates for deliverability',
    ],
    price: '$600',
    url: 'https://book.stripe.com/bJefZh2tU7SK2lw6lxdEs03'
  },
  {
    service: 'DNS, SPF, DKIM & Deliverability Setup',
    bullets: [
      'Resolve MX, TXT, SPF, and DKIM configuration failures',
      'Eliminate email spam flagging and domain blacklisting',
      'Repair domain mapping and email routing issues',
    ],
    price: '$250',
    url: 'https://book.stripe.com/14AaEX1pQeh82lw39ldEs04'
  },
  {
    service: 'Core Web Vitals & Speed Overhaul',
    bullets: [
      'Maximize LCP, INP, and CLS scores across mobile and desktop',
      'Purge rendering bloat and defer non-critical scripts',
      'Optimize script hydration for measurable performance gains',
    ],
    price: '$1,500',
    url: 'https://book.stripe.com/28E5kDfgGflcd0abFRdEs05'
  },
  {
    service: 'Landing Page Redesign & Engineering',
    bullets: [
      'Redesign static pages into high-fidelity responsive interfaces',
      'Integrate full-stack APIs and backend data pipelines',
      'Engineered to engage users and convert visitors',
    ],
    price: '$3,000',
    url: 'https://book.stripe.com/7sY9AT6Ka6OG9NYdNZdEs06'
  },
  {
    service: 'Technical GEO & AI Visibility Audit',
    bullets: [
      'Audit site structure for AI crawler compatibility',
      'Inject optimized JSON-LD graph schema',
      'Ensure ChatGPT Search and Perplexity cite your site',
    ],
    price: '$2,500',
    url: 'https://book.stripe.com/eVq00j5G66OGaS2bFRdEs07'
  },
  {
    service: 'Contact Form & Webhook Debugging',
    bullets: [
      'Debug client-side input validation and form logic',
      'Fix broken Webhook routing pipelines',
      'Restore secure lead-capture form deliveries',
    ],
    price: '$150',
    url: 'https://book.stripe.com/8x228r8Si0qi2lw8tFdEs08'
  },
];

const PricingSection: React.FC<PricingSectionProps> = ({
  microServices = DEFAULT_MICRO_SERVICES,
}) => {
  const [isIntersected, setIsIntersected] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.unobserve(entry.target); // Trigger reveal only once
        }
      },
      { threshold: 0.1 } // Fires when 10% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="micro-services-heading"
      aria-describedby="micro-services-desc"
      className="relative z-0 py-24 md:py-36 overflow-hidden"
      style={{
        position: "relative",
        padding: "100px 20px",
        background: "rgb(15, 23, 42)",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      

      {/* High-end hardware processor micro-dot matrix pattern - Stacked safely on top (z-11) */}
      <div 
        className="absolute inset-0 z-11 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="w-full relative px-6 mx-auto z-20">
        {/* Micro Services */}
        <div
          id="micro-services"
          aria-labelledby="micro-services-heading"
          className="mt-auto md:mt-auto"
        >
          {/* Header block with progressive fade-in */}
          <div 
            className="text-center mx-auto mb-16"
            style={{
              opacity: isIntersected ? 1 : 0,
              transform: isIntersected ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 2s ease-in, transform 2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
              Core Execution
            </span>
            
            <h2
              id="micro-services-heading"
              className="mb-2 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-slate-100 font-bold tracking-tight"
              style={{ letterSpacing: '-0.08em' }}
            >
              On-Demand {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
                Performance Tuning
              </span>
            </h2>
            
            <p id="micro-services-desc" className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed">
              High-impact performance upgrades and critical codebase patches—prioritized and shipped within a 24-72 hour window.
            </p>
          </div>

          {/* Core Hardware Cards Matrix with Staggered Transition */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {microServices.map((m, idx) => (
              <div
                key={m.service}
                className="services-card-hover-animate flex flex-col justify-between rounded-lg bg-[#1e293b] border border-[#334155] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-indigo-500/30 hover:shadow-[0_4px_32px_rgba(99,102,241,0.08)] transition duration-200"
                style={{
                  opacity: isIntersected ? 1 : 0,
                  transform: isIntersected ? 'translateY(0)' : 'translateY(40px)',
                  transition: `
                    opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150}ms, 
                    transform 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150}ms,
                    border-color 0.3s ease,
                    box-shadow 0.3s ease
                  `
                }}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-slate-200 font-mono text-base font-semibold tracking-wide leading-snug">{m.service}</h3>
                    <span className="text-indigo-400 font-mono font-bold text-base whitespace-nowrap bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-900/50">{m.price}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
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
                    className="inline-flex w-full items-center justify-center rounded px-4 py-2.5 text-sm font-mono font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-200"
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
            style={{
              opacity: isIntersected ? 1 : 0,
              transition: 'opacity 2s ease-in'
            }}
          >
            Need an operational script not listed?{' '}
            <a href="#contact" className="inline-flex items-center font-mono text-xs text-indigo-300 bg-indigo-400/30 hover:bg-indigo-300/30 border border-indigo-400/30 px-3 py-1.5 rounded-lg transition-colors duration-200">Request a custom micro-service</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;