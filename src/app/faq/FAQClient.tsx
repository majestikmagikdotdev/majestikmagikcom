'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What do you actually build?',
    answer: 'Websites, web apps, custom software systems, and everything in between. React, Next.js, WordPress, Shopify, local-first apps, AI integrations. If your business runs on it digitally, we can build it.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Email contact@majestikmagik.dev or use the contact form. We\'ll do a quick 15-20 min call and get you a proposal within 2-3 business days.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'Local service businesses, startups, SaaS, and e-commerce. HVAC, plumbing, roofing, manufacturing, professional services. If you have customers and a website, we can help.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Simple sites: a few days to a week. Mid-sized projects: 4-6 weeks. Custom builds or e-commerce: 6-10+ weeks. Mostly depends on how fast you can get us feedback and content.',
  },
  {
    question: 'What does the process look like?',
    answer: 'Discovery, scope, design, build, review, launch, handoff. You have one point of contact the whole way through. No handoffs to a junior team halfway in.',
  },
  {
    question: 'Do you require a deposit?',
    answer: 'Yes. Usually 40-50% upfront to book your spot, with the rest tied to milestones or due before launch.',
  },
  {
    question: 'What platforms do you work with?',
    answer: 'Next.js, React, WordPress, Shopify, headless CMS setups. We recommend based on what actually fits your goals, not what\'s easiest for us.',
  },
  {
    question: 'Do you offer WordPress training?',
    answer: 'Yes. Video tutorials and live walkthroughs. You can find them at majestikmagik.dev/training/wordpress.',
  },
  {
    question: 'Who owns the site after launch?',
    answer: 'You do. Full stop. Code, content, assets, credentials. Everything transfers to you on final payment.',
  },
  {
    question: 'Do you handle hosting and domains?',
    answer: 'We can set it all up. Hosting stays in your name, we just help configure it. You\'re never locked into us for infrastructure.',
  },
  {
    question: 'Do you offer maintenance plans?',
    answer: 'Yes. Updates, backups, uptime monitoring, security, small edits, and monthly performance reports. Tailored to what your site actually needs.',
  },
  {
    question: 'Can you fix my site speed?',
    answer: 'Yes. We audit images, scripts, caching, CDN, and server config. Guaranteed 90+ Lighthouse scores on the speed overhaul package.',
  },
  {
    question: 'Do you do SEO?',
    answer: 'Technical SEO, on-page optimization, schema markup, and content guidance. We also set up analytics and goal tracking so you can see what\'s working.',
  },
  {
    question: 'What about accessibility?',
    answer: 'We follow WCAG 2.1 AA standards. Proper structure, contrast, keyboard navigation, and ARIA. Not an afterthought.',
  },
  {
    question: 'How many revisions do I get?',
    answer: 'Two rounds per page or template in the base scope. More are welcome and billed at our hourly rate or via a change order.',
  },
  {
    question: 'Can you migrate my existing site?',
    answer: 'Yes. We audit your current stack, plan the migration, and move everything with minimal downtime. We can redesign during the move if needed.',
  },
  {
    question: 'Do you set up payments and subscriptions?',
    answer: 'Yes. Stripe for one-time payments, subscriptions, and marketplaces. Security and compliance best practices included.',
  },
  {
    question: 'How do you handle security?',
    answer: 'Hardened hosting, HTTPS, least-privilege access, regular updates, WAF and CDN options, backups, and monitoring. Standard on every build.',
  },
  {
    question: 'What analytics will I have?',
    answer: 'GA4 or a privacy-friendly alternative, Search Console, optional heatmaps, and event tracking. Monthly summaries if you\'re on a maintenance plan.',
  },
  {
    question: 'Do you write copy?',
    answer: 'We can refine yours or write new. We also offer brand voice frameworks if you\'d rather handle it in-house.',
  },
  {
    question: 'What if I need something urgent after launch?',
    answer: 'We offer expedited support and on-call options. For actual emergencies like downtime, we prioritize immediately.',
  },
  {
    question: 'Can you connect my CRM or marketing tools?',
    answer: 'Yes. HubSpot, Mailchimp, Brevo, Zapier, Meta and Google pixels, custom APIs. If it has an integration, we can wire it up.',
  },
  {
    question: 'How do you price projects?',
    answer: 'Fixed-price packages for common builds. Custom quotes for complex work. You get clear deliverables, a timeline, and a payment schedule before anything starts.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'See our Refund Policy at /refund-policy. We scope carefully and communicate at every milestone so there are no surprises.',
  },
  {
    question: 'What are your support hours?',
    answer: 'Monday through Friday, 9am to 5pm ET. Premium after-hours plans available for teams that need extended coverage.',
  },
  {
    question: 'Can you help with branding?',
    answer: 'Yes. Brand discovery, logo kits, typography, color systems, and usage guidelines. Everything you need to stay consistent across channels.',
  },
  {
    question: 'How do I send files and credentials securely?',
    answer: 'We\'ll send a secure upload link or a password manager request. Don\'t email passwords. We use least-privilege access and revoke everything when we\'re done.',
  },
  {
    question: 'Can you audit my current site?',
    answer: 'Yes. Tech, UX, SEO, and conversion audits with a prioritized roadmap and quick-win recommendations.',
  },
  {
    question: 'Where are your policies?',
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
        <div className="max-w-3xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-indigo-300 bg-indigo-400/10 hover:bg-indigo-300/20 border border-indigo-400/20 px-3 py-1.5 rounded-lg transition-colors duration-200 mb-10"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#111120] px-3 py-1 rounded border border-[#2a2a3a]">
              FAQ
            </span>
            <h1
              className="text-5xl md:text-6xl font-black text-[#f0f0f0] mb-4"
              style={{ letterSpacing: '-0.04em', lineHeight: '1' }}
            >
              Got questions?
              <br />
              <span className="text-[#404050]">We&apos;ve got answers.</span>
            </h1>
            <p className="text-sm text-[#a0a0b0] leading-relaxed max-w-lg">
              Everything you actually want to know about working with us.
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
                placeholder="Search — e.g. SEO, refunds, WordPress..."
                className="w-full px-4 py-3 bg-[#0e0e1a] border border-[#2a2a3a] rounded-lg text-[#f0f0f0] text-sm placeholder-[#404050] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
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
                Nothing found. Try <span className="text-indigo-400">SEO</span>, <span className="text-indigo-400">refund</span>, or <span className="text-indigo-400">hosting</span>.
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
              Ask us directly
            </Link>
          </p>

        </div>
      </main>
    </div>
  );
};

export default FAQPage;
