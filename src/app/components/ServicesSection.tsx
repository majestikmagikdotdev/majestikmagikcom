import React from 'react';

// Define an interface for the service data
interface Service {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactElement;
}

const servicesData: Service[] = [
  {
    title: "AI Infrastructure & Growth Systems",
    description: "Build the intelligent backbone your business needs to scale.",
    bullets: [
      "Custom AI workflow integrations for operations and sales",
      "Scalable, resilient infrastructure built on AWS and Cloudflare",
      "Automated pipelines that reduce manual overhead",
      "New revenue streams unlocked through AI-driven precision",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-purple-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    )
  },
  {
    title: "Custom Website Engineering",
    description: "High-performance digital platforms built from concept to launch.",
    bullets: [
      "React and Next.js architecture optimized for speed and SEO",
      "Tailored UI/UX designed to convert visitors into leads",
      "Full-stack API integrations and backend data pipelines",
      "Deployed to Vercel, Cloudflare, or AWS with CI/CD",
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>
  },
  {
    title: "Technical SEO & AI Visibility",
    description: "Get found by search engines and cited by AI models.",
    bullets: [
      "Structured JSON-LD schema for Google and LLM crawlers",
      "On-page optimization, Core Web Vitals, and site speed",
      "GEO strategy to appear in ChatGPT Search and Perplexity",
      "Analytics setup with GA4, Search Console, and dashboards",
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-sky-400"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
  },
  {
    title: "Digital Marketing & Paid Campaigns",
    description: "Turn ad spend into predictable, measurable revenue.",
    bullets: [
      "Meta and Google campaign setup, targeting, and optimization",
      "CRM integrations with HubSpot, Mailchimp, and Zapier",
      "Conversion tracking, pixel setup, and funnel analytics",
      "Monthly reporting with actionable performance insights",
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-orange-400"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" aria-labelledby="services-heading" aria-describedby="services-desc" className="scroll-animate py-16 md:py-24 border-t border-[#334155]" style={{ background: 'rgb(15, 23, 42)' }}>
      <div className="w-full px-4 md:px-6">
        <div className="mb-8 text-left">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
            Built for Small &amp; Mid-Size Businesses
          </span>
          <h2 id="services-heading" className="mb-4 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-slate-100 font-bold tracking-tight" style={{ letterSpacing: '-0.04em' }}>
            Platforms That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
              Work For You
            </span>
          </h2>
          <p id="services-desc" className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed">
            Small and mid-size businesses deserve enterprise-grade technology. We build the platforms, infrastructure, and digital systems that help you compete, grow, and get found — without the agency overhead.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="p-6 transition-all duration-200 bg-[#1e293b] rounded-lg border border-[#334155] hover:border-indigo-500/30 hover:shadow-[0_4px_32px_rgba(99,102,241,0.08)]"
            >
              {service.icon}
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;