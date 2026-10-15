import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portfolioData from '@/data/portfolio-links.json';

export const metadata: Metadata = {
  title: 'Case Studies – Majestik Magik',
  description: 'The problems, the builds, the results. Real client work across automotive, e-commerce, SaaS, and service businesses.',
  alternates: { canonical: 'https://majestikmagik.dev/case-studies' },
};

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const storyHighlights: Record<string, string> = {
  'cearco-chemicals': 'Cearco Chemicals wanted an upgraded website with the next stage of ecommerce in mind. The new platform was built as a strong digital foundation for product expansion, future ordering workflows, and streamlined lead capture.',
  'middleman-motors': 'Middleman Motors came to Majestik Magik with a lovable independent dealership website, but the build never made it into production. We bridged the launch gap with a production-ready deployment path, reliable infrastructure, and a polished sales experience.',
  'noel-customs': 'Noel Customs was having trouble with Shopify email notifications and custom invoice templates for every customer. I fixed the flow so shoppers can see receipts clearly and get notified automatically after each order.',
  'parris-gainer': 'I built a custom WordPress theme for Parris Gainer to simplify her admin panel and let her manage content for her book on disability and stroke recovery. She wanted a central hub for her message that she can continue promoting through social media.',
};

const testimonials: Record<string, { quote: string; author: string; role?: string }> = {
  'middleman-motors': { quote: 'Majestik Magik took our stalled site and made it launch-ready. Reliable, fast, and polished for our customers.', author: 'Owner, Middleman Motors' },
  'cearco-chemicals': { quote: 'They rebuilt our site with commerce in mind and gave us a foundation to sell products online when we were ready.', author: 'CEO, CEARCO Chemicals' },
  'noel-customs': { quote: 'Fixed our Shopify emails and invoices so customers always receive clear receipts. A huge reduction in support requests.', author: 'Noel, Noel Customs' },
  'parris-gainer': { quote: 'The custom WordPress theme made managing my book content simple. Now I have a central hub to share my message.', author: 'Parris Gainer', role: 'Author & Advocate' },
  'jamil-cleaning-app': { quote: 'Built this booking app as a side project and used it to run my own cleaning business. Practical and dependable.', author: 'Jamil' },
};

export default function CaseStudies() {
  return (
    <div className="min-h-screen" style={{ background: '#181818', color: '#f0f0f0' }}>

      {/* Indigo grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.13) 0%, transparent 55%)' }} />
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(52,211,153,0.07) 0%, transparent 50%)' }} />
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(167,139,250,0.07) 0%, transparent 50%)' }} />

      <div className="relative z-10 w-full px-6 py-40">

        {/* Header */}
        <div className="mb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-indigo-300 bg-indigo-400/30 hover:bg-indigo-300/30 border border-indigo-400/30 px-3 py-1.5 rounded-lg transition-colors duration-200 mb-8"
          >
            ← Back to Home
          </Link>

          <div className="mb-4">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-[#111120] px-3 py-1 rounded border border-[#2a2a3a]">
              Case Studies
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ letterSpacing: '-0.09em', color: '#f0f0f0' }}
          >
            Real Client Work,{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #818cf8, #a78bfa, #f8fafc, #818cf8)', backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite' }}
            >
              Real Results
            </span>
          </h1>

          <p className="text-lg max-w-3xl leading-relaxed" style={{ color: '#a0a0b0' }}>
            Problems solved, systems delivered, and measurable outcomes across automotive, e-commerce, SaaS, and service industries.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24">
          {portfolioData.map((project, index) => (
            <article
              key={project.id}
              className="scroll-animate grid gap-10 lg:grid-cols-2 lg:items-start border-t border-[#2a2a3a] pt-16"
            >
              {/* Screenshot */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-lg overflow-hidden border border-[#2a2a3a]" style={{ background: '#111120' }}>

                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2a3a]" style={{ background: '#0e0e1a' }}>
                    <span className="w-3 h-3 rounded-full bg-[#2a2a3a]" />
                    <span className="w-3 h-3 rounded-full bg-[#2a2a3a]" />
                    <span className="w-3 h-3 rounded-full bg-[#2a2a3a]" />
                    <div className="ml-3 flex-1 rounded px-3 py-1 text-xs font-mono text-left truncate" style={{ background: '#111120', color: '#606070' }}>
                      {project.liveUrl || 'majestikmagik.dev'}
                    </div>
                  </div>

                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <div className="h-64 flex items-center justify-center text-slate-500 font-mono text-sm">
                      No preview available
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-[#111120] px-3 py-1 rounded border border-[#2a2a3a]">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-mono text-green-400 bg-green-950/30 border border-green-800/40 px-2.5 py-0.5 rounded">
                      ⚡ Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ letterSpacing: '-0.05em', color: '#f0f0f0' }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono text-indigo-400">{project.subtitle}</p>
                </div>

                <p className="leading-relaxed" style={{ color: '#a0a0b0' }}>{project.description}</p>

                {/* Story */}
                {storyHighlights[project.id] && (
                  <div className="rounded-lg border border-[#2a2a3a] p-5" style={{ background: '#111120' }}>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">Project Story</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#a0a0b0' }}>{storyHighlights[project.id]}</p>
                  </div>
                )}

                {/* Testimonial */}
                {testimonials[project.id] && (
                  <div className="rounded-lg border border-[#2a2a3a] p-5" style={{ background: '#111120' }}>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">Client Testimonial</h3>
                    <blockquote className="text-sm italic leading-relaxed" style={{ color: '#a0a0b0' }}>
                      &ldquo;{testimonials[project.id].quote}&rdquo;
                    </blockquote>
                    <p className="text-xs font-mono mt-3" style={{ color: '#606070' }}>
                      {testimonials[project.id].author}{testimonials[project.id].role ? `, ${testimonials[project.id].role}` : ''}
                    </p>
                  </div>
                )}

                {/* Metrics + Tech Stack */}
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="rounded-lg border border-[#2a2a3a] p-5" style={{ background: '#111120' }}>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">Key Outcomes</h3>
                      <div className="space-y-3">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-mono font-bold text-white">{metric.value}</p>
                              <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: '#606070' }}>{metric.label}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-lg border border-[#2a2a3a] p-5" style={{ background: '#111120' }}>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded" style={{ color: '#a0a0b0' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 py-2.5 px-4 rounded transition-all duration-200"
                    >
                      <ExternalLinkIcon /> View Live Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 py-2.5 px-4 rounded transition-all duration-200"
                    >
                      <GithubIcon /> Source
                    </a>
                  )}
                  {project.demoVideoUrl && (
                    <a
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-slate-200 hover:text-red-400 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 py-2.5 px-4 rounded transition-all duration-200"
                    >
                      <YoutubeIcon /> Demo Video
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 border-t border-[#2a2a3a] pt-12 text-center">
          <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: '#606070' }}>Ready to build something?</p>
          <Link
            href="/#contact"
            className="inline-block font-mono uppercase tracking-wider text-sm py-4 px-10 rounded transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', color: '#f0f0f0', boxShadow: '0 0 30px rgba(99,102,241,0.25)' }}
          >
            Get In Touch
          </Link>
        </div>

      </div>
    </div>
  );
}
