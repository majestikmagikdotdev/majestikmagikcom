import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import portfolioData from '@/data/portfolio-links.json';
import { ExternalLink, Github, Youtube, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio – Majestik Magik',
  description: 'Production applications, deployed systems, and client work by Majestik Magik. Real results across automotive, e-commerce, SaaS, and service industries.',
  alternates: { canonical: 'https://majestikmagik.dev/portfolio' },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-40 px-4 sm:px-6 lg:px-8" style={{
        background: "rgb(15, 23, 42)",        
      }}>
            {/* High-end hardware processor micro-dot matrix pattern */}
      <div
        className="absolute inset-0 z-[11] pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(247, 248, 248, 0.3) 1.0px, transparent 1.0px)',
          backgroundSize: '24px 24px',
        }}
      ></div>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 py-10">
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
    Real Clients • Proven Solutions
  </div>

  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
    Engineered Systems & Deployed Work
  </h1>

  <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
    From eliminating 4G mobile latency for automotive dealerships to diagnosing broken webhooks, restoring spam-flagged email deliverability, and building custom storefronts for real business owners. Production applications built and optimized with speed, precision, and measurable performance.
  </p>
</div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioData.map((project) => (
          <div 
            key={project.id}
            className="bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between backdrop-blur-sm"
          >
            {/* Screenshot */}
            {project.image && (
              <div className="mb-5 rounded-xl overflow-hidden border border-slate-800">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div>
              {/* Category & Featured Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                    <Zap className="w-3 h-3 mr-1" /> Featured
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-bold text-white tracking-tight mb-1">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-slate-400 mb-4">
                {project.subtitle}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Metrics Badges */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl text-center">
                      <div className="text-xs font-bold text-indigo-300">{metric.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-md font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-300/10 hover:bg-indigo-400/30 text-indigo-300 border border-indigo-400 text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live App
                </a>
              )}
              
              {project.demoVideoUrl && (
                <a
                  href={project.demoVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 bg-slate-800 hover:bg-slate-700 text-red-400 rounded-xl transition-colors"
                  title="Watch Video Demo"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors"
                  title="View Source Code"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social Section */}
      <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-slate-800/60 text-center">
        <p className="text-sm text-slate-500 uppercase tracking-widest font-mono mb-6">Find me on</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/jmathtech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            <Github className="w-4 h-4" /> jmathtech
          </a>
          <a
            href="https://github.com/majestikmagikai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            <Github className="w-4 h-4" /> majestikmagikai
          </a>
          <a
            href="https://youtube.com/@majestikmagik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-red-500/50 text-slate-300 hover:text-red-400 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            <Youtube className="w-4 h-4" /> @majestikmagik
          </a>
        </div>
      </div>
    </div>
  );
}