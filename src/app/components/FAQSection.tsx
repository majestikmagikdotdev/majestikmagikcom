'use client';

import React, { useState } from 'react';
import { useIntersect } from '../hooks/useIntersect';

const faqs = [
  {
    q: 'What services does Majestik Magik offer?',
    a: 'We offer custom web engineering, AI infrastructure, technical SEO, GEO optimization, Core Web Vitals audits, and on-demand micro-services for founders and businesses.',
  },
  {
    q: 'How quickly can you ship a fix or project?',
    a: 'On-demand micro-services are prioritized and shipped within 24–72 hours. Larger projects follow a scoped timeline communicated upfront.',
  },
  {
    q: 'What is Generative Engine Optimization (GEO)?',
    a: 'GEO optimizes your site structure and schema so AI crawlers like ChatGPT Search and Perplexity can parse, cite, and recommend your business in real-time.',
  },
  {
    q: 'Can you fix a broken vibe-coded or AI-generated app?',
    a: 'Yes. We rescue apps built with Lovable, Bolt.new, Base44, and similar tools. Common fixes include broken routing, missing API integrations, and deployment failures.',
  },
  {
    q: 'Do you handle hosting, DNS, and domain setup?',
    a: 'Yes. We configure hosting on WP Engine, AWS, Vercel, or Cloudflare and handle DNS, SPF, DKIM, and domain mapping.',
  },
  {
    q: 'What platforms and frameworks do you work with?',
    a: 'Next.js, React, TypeScript, WordPress, Shopify, Supabase, PostgreSQL, AWS, Cloudflare, and Stripe — among others.',
  },
  {
    q: 'How do I get started?',
    a: 'Email contact@majestikmagik.dev or use the contact section below. We schedule a 15–20 minute discovery call and send a proposal within 2–3 business days.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, intersected } = useIntersect();
  const fadeUp = {
    opacity: intersected ? 1 : 0,
    transform: intersected ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 2s ease-in, transform 2s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <section
      ref={ref}
      id="faq"
      aria-labelledby="faq-heading"
      aria-describedby="faq-desc"
      className="relative z-0 py-24 border-t border-[#334155]"
      style={{ background: 'rgb(15, 23, 42)' }}
    >
      <div className="w-full px-6">
        <div className="mb-12 text-left">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-[2.5rem] sm:text-3xl md:text-5xl lg:text-7xl font-bold text-slate-100 tracking-tight mb-3" style={{ letterSpacing: '-0.06em', ...fadeUp }}>
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-slate-300">
              Questions
            </span>
          </h2>
          <p id="faq-desc" className="text-slate-400 text-base" style={{ ...fadeUp, transitionDelay: '0.2s' }}>
            Quick answers to the most common questions about our services and process.
          </p>
        </div>

        <div className="space-y-3" style={{ ...fadeUp, transitionDelay: '0.3s' }} itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#334155] bg-[#1e293b] overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-slate-200 font-mono text-sm font-semibold tracking-wide hover:text-indigo-300 transition-colors duration-200"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span itemProp="name">{faq.q}</span>
                <span className={`ml-4 flex-shrink-0 text-indigo-400 transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="px-5 pb-5 text-sm text-slate-300 font-sans leading-relaxed border-t border-[#334155] pt-4" itemProp="text">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="text-xs font-mono text-slate-500">More questions?</span>
          <a href="/faq" className="inline-flex items-center font-mono text-xs text-indigo-300 bg-indigo-400/30 hover:bg-indigo-300/30 border border-indigo-400/30 px-3 py-1.5 rounded-lg transition-colors duration-200">
            View the full FAQ
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
