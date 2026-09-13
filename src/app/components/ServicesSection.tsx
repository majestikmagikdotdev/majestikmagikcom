import React from 'react';

// Define an interface for the service data
interface Service {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactElement;
}

const customBuildServices: Service[] = [
  {
    title: "Custom Platform Architecture",
    description: "Full-stack software built around how your business actually operates.",
    bullets: [
      "Custom database architecture designed for your data, not a template",
      "Client-owned infrastructure from day one—no vendor lock-in",
      "Milestone-based delivery with objective acceptance criteria",
      "Full IP transfer and complete documentation on handoff",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-indigo-400"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>
    )
  },
  {
    title: "Marketplace & Monetization Systems",
    description: "Payment processing, subscriptions, and multi-sided platforms built to scale.",
    bullets: [
      "Stripe-integrated payment flows on your own merchant account",
      "Subscription billing, webhooks, and transaction reconciliation",
      "Multi-role systems for vendors, organizers, or marketplace participants",
      "Built nationwide-ready from the first migration",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-emerald-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    )
  },
];

const quickFixServices: Service[] = [
  {
    title: "Fix Your Website & Improve Speed",
    description: "Is your site broken or slow? We fix it and make it work better.",
    bullets: [
      "Fix broken links, design issues, and mobile problems",
      "Speed up slow pages (90+ Lighthouse scores guaranteed)",
      "Improve page load times to reduce bounce rates",
      "Fix backend integrations and data pipelines",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-purple-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    )
  },
  {
    title: "Get Found on Google & AI Search",
    description: "Show up when customers search for your business on Google and AI.",
    bullets: [
      "Optimize for Google Search and local visibility",
      "Get found on ChatGPT, Perplexity, and Google AI answers",
      "Complete technical SEO audit and fixes",
      "Set up analytics so you can track results",
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-sky-400"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
  },
  {
    title: "Domain & Email Deliverability Fixes",
    description: "Stop landing in spam. Get your emails authenticated and trusted.",
    bullets: [
      "SPF, DKIM, and DMARC configuration and audit",
      "Blacklist remediation across 50+ global databases",
      "Reputation monitoring setup and 30-day guarantee",
      "Fast turnaround—most fixes delivered in 24 hours",
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-orange-400"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  },
  {
    title: "Emergency Revenue & Pipeline Fixes",
    description: "Losing leads or payments to broken integrations? We find it and fix it fast.",
    bullets: [
      "Audit Stripe webhooks, forms, and API integrations",
      "Root-cause diagnosis for dropped leads or failed payments",
      "Same-day to 24-hour turnaround for critical issues",
      "30 days of free monitoring after the fix ships",
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-rose-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="group p-6 transition-all duration-300 bg-[#1e293b] rounded-lg border border-[#334155] hover:border-indigo-500/50 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] hover:-translate-y-1">
    <div className="transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-400 w-fit">
      {service.icon}
    </div>
    <h3 className="mb-1 text-lg font-semibold text-slate-100 tracking-tight">{service.title}</h3>
    <p className="text-sm text-slate-400 mb-4">{service.description}</p>
    <ul className="space-y-2">
      {service.bullets.map((b) => (
        <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" aria-labelledby="services-heading" aria-describedby="services-desc" className="scroll-animate py-16 md:py-24 border-t border-[#334155]" style={{ background: 'rgb(15, 23, 42)' }}>
      <div className="w-full px-4 md:px-6">
        <div className="mb-8 text-left">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
            Two Ways We Can Work Together
          </span>
          <h2 id="services-heading" className="mb-4 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-slate-100 font-bold tracking-tight" style={{ letterSpacing: '-0.04em' }}>
            Custom Builds{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
              & Quick Fixes
            </span>
          </h2>
          <p id="services-desc" className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed max-w-3xl">
            Ready to architect a full platform? That&apos;s our main focus. Need something smaller fixed fast—broken emails, slow pages, missing leads? We handle that too, at a fixed price.
          </p>
        </div>

        {/* Custom Builds */}
        <div className="mb-12">
          <h3 className="mb-4 text-sm font-mono font-bold tracking-widest text-indigo-400 uppercase">
            Custom Builds
          </h3>
          <div className="grid gap-4 md:grid-cols-2 stagger-children scroll-animate">
            {customBuildServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        {/* Quick Fixes */}
        <div>
          <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-sm font-mono font-bold tracking-widest text-indigo-400 uppercase">
              Quick Fixes
            </h3>
            <a href="/#services-pricing" className="text-xs font-mono text-indigo-300 hover:text-indigo-200 underline underline-offset-4">
              See fixed pricing &amp; turnaround times →
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2 stagger-children scroll-animate">
            {quickFixServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;