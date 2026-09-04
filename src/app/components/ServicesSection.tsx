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
    title: "Build a High-Converting Website",
    description: "A fast, mobile-friendly site that turns visitors into leads.",
    bullets: [
      "Built with React & Next.js for lightning-fast load times",
      "Optimized for mobile and tablet visitors",
      "Designed to turn visitors into inquiries",
      "Deployed and live within days—not months",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lazy-logo w-8 h-8 mb-4 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>
    )
  },
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
    title: "Turn Ads Into Sales (Paid Campaigns)",
    description: "Pay for clicks and leads that actually convert into customers.",
    bullets: [
      "Set up and manage Google & Meta (Facebook/Instagram) ads",
      "Connect ads to your CRM and email so leads get followed up",
      "Track which ads are working—and which are wasting money",
      "Optimize campaigns monthly to improve your ROI",
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
            Services That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
              Get Results
            </span>
          </h2>
          <p id="services-desc" className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed">
            Whether you need a new site, a speed improvement, more leads from Google, or a working ads campaign—we handle it and make sure it works.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 stagger-children scroll-animate">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="group p-6 transition-all duration-300 bg-[#1e293b] rounded-lg border border-[#334155] hover:border-indigo-500/50 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] hover:-translate-y-1"
            >
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;