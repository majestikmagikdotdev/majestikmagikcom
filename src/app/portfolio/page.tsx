import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portfolioData from '@/data/portfolio-links.json';

export const metadata: Metadata = {
  title: 'Portfolio – Majestik Magik',
  description: 'Production applications, deployed systems, and client work by Majestik Magik. Real results across automotive, e-commerce, SaaS, and service industries.',
  alternates: { canonical: 'https://majestikmagik.dev/portfolio' },
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

export default function Portfolio() {
  return (
    <div className="scroll-animate min-h-screen text-slate-100" style={{ background: 'rgb(15, 23, 42)' }}>

      {/* Dot matrix pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.07] z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(247, 248, 248, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full px-6 py-40">

        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-indigo-300 bg-indigo-400/30 hover:bg-indigo-300/30 border border-indigo-400/30 px-3 py-1.5 rounded-lg transition-colors duration-200 mb-8"
          >
            ← Back to Home
          </Link>

          <div className="mb-4">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
              Portfolio
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.09em' }}
          >
            Engineered Systems &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-white">
              Deployed Work
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Production applications built with speed, precision, and measurable performance. Real clients, real results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg bg-[#1e293b] border border-[#334155] hover:border-indigo-500/40 hover:shadow-[0_4px_32px_rgba(99,102,241,0.08)] transition-all duration-200"
            >
              {/* Screenshot */}
              {project.image && (
                <div className="overflow-hidden rounded-t-lg border-b border-[#334155]">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col flex-grow p-6">
                {/* Category & Featured */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-[#0f172a] px-3 py-1 rounded border border-[#334155]">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-mono text-green-400 bg-green-950/30 border border-green-800/40 px-2.5 py-0.5 rounded">
                      ⚡ Featured
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h2
                  className="text-xl font-bold text-white mb-1"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {project.title}
                </h2>
                <p className="text-xs font-mono text-indigo-400 mb-3">{project.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">{project.description}</p>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="bg-[#0f172a] border border-[#334155] p-3 rounded text-center">
                        <div className="text-xs font-bold font-mono text-indigo-300">{metric.value}</div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="mt-auto flex items-center gap-2 pt-4 border-t border-[#334155]">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 font-mono text-xs text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 py-2.5 px-4 rounded transition-all duration-200"
                    >
                      <ExternalLinkIcon /> Live App
                    </a>
                  )}
                  {project.demoVideoUrl && (
                    <a
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 font-mono text-xs text-slate-200 hover:text-red-400 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded transition-all duration-200"
                      title="Watch Demo"
                    >
                      <YoutubeIcon />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 font-mono text-xs text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded transition-all duration-200"
                      title="View Source"
                    >
                      <GithubIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Footer */}
        <div className="border-t border-[#334155] pt-12 text-center">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Find me on</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'jmathtech', url: 'https://github.com/jmathtech', icon: <GithubIcon /> },
              { label: 'majestikmagikai', url: 'https://github.com/majestikmagikai', icon: <GithubIcon /> },
              { label: '@majestikmagik', url: 'https://youtube.com/@majestikmagik', icon: <YoutubeIcon /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 px-4 py-2.5 rounded transition-all duration-200"
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
