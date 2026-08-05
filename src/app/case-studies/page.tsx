import React from 'react';
import Image from 'next/image';
import portfolioData from '@/data/portfolio-links.json';
import { ExternalLink, Github, Youtube, Zap } from 'lucide-react';

const storyHighlights: Record<string, string> = {
    'cearco-chemicals':
        'Cearco Chemicals wanted an upgraded website with the next stage of ecommerce in mind. The new platform was built as a strong digital foundation for product expansion, future ordering workflows, and streamlined lead capture.',
    'middleman-motors':
        'Middleman Motors came to Majestik Magik with a lovable independent dealership website, but the build never made it into production. We bridged the launch gap with a production-ready deployment path, reliable infrastructure, and a polished sales experience.',
    'noel-customs':
        'Noel Customs was having trouble with Shopify email notifications and custom invoice templates for every customer. I fixed the flow so shoppers can see receipts clearly and get notified automatically after each order.',
    'parris-gainer':
        'I built a custom WordPress theme for Parris Gainer to simplify her admin panel and let her manage content for her book on disability and stroke recovery. She wanted a central hub for her message that she can continue promoting through social media.',
    };

const testimonials: Record<string, { quote: string; author: string; role?: string }> = {
    'middleman-motors': {
        quote: 'Majestik Magik took our stalled site and made it launch-ready — reliable, fast, and polished for our customers.',
        author: 'Owner, Middleman Motors',
    },
    'cearco-chemicals': {
        quote: 'They rebuilt our site with commerce in mind and gave us a foundation to sell products online when we were ready.',
        author: 'CEO, CEARCO Chemicals',
    },
    'noel-customs': {
        quote: 'Fixed our Shopify emails and invoices so customers always receive clear receipts — a huge reduction in support requests.',
        author: 'Noel, Noel Customs',
    },
    'parris-gainer': {
        quote: 'The custom WordPress theme made managing my book content simple — now I have a central hub to share my message.',
        author: 'Parris Gainer',
        role: 'Author & Advocate',
    },
    'jamil-cleaning-app': {
        quote: 'Built this booking app as a side project and used it to run my own cleaning business — practical and dependable.',
        author: 'Jamil',
    },
};

export default function CaseStudies() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 py-24 px-4 sm:px-6 lg:px-8">
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(rgba(248, 250, 252, 0.25) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16 relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.17),_transparent_38%)] opacity-70 pointer-events-none" />
                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-800 text-indigo-300 text-xs font-semibold uppercase tracking-[0.24em] mb-4">
                            <Zap className="w-3.5 h-3.5 text-emerald-400" />
                            Case Studies
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                            Real client work, organized as strategic case studies.
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg text-slate-400 leading-relaxed">
                            These case studies spotlight the problems solved, systems delivered, and measurable business outcomes achieved for real clients across automotive, e-commerce, SaaS, and service-based industries.
                        </p>
                    </div>
                </div>

                <div className="space-y-20">
                    {portfolioData.map((project, index) => (
                        <article
                            key={project.id}
                            className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center"
                        >
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="rounded-[2rem] overflow-hidden border border-slate-800 bg-slate-900/80 shadow-lg shadow-slate-950/10">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} screenshot`}
                                            width={1200}
                                            height={800}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="h-80 bg-slate-900 flex items-center justify-center text-slate-500">
                                            No preview available
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300 bg-indigo-950/70 border border-indigo-800/60 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    {project.featured && (
                                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300 bg-emerald-950/70 border border-emerald-800/60 px-3 py-1 rounded-full">
                                            <Zap className="w-3 h-3" /> Featured work
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h2 className="text-3xl font-bold tracking-tight text-white">
                                            {project.title}
                                        </h2>
                                        <p className="text-base text-slate-400 mt-2">{project.subtitle}</p>
                                    </div>

                                    <p className="text-slate-300 leading-relaxed">{project.description}</p>
                                    {storyHighlights[project.id] && (
                                        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
                                            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400 mb-3">
                                                Project story
                                            </h3>
                                            <p className="text-slate-300 leading-relaxed">{storyHighlights[project.id]}</p>
                                        </div>
                                    )}
                                    {testimonials[project.id] && (
                                        <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                                            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400 mb-3">Client testimonial</h3>
                                            <blockquote className="text-slate-300 italic">“{testimonials[project.id].quote}”</blockquote>
                                            <p className="text-sm text-slate-400 mt-3">— {testimonials[project.id].author}{testimonials[project.id].role ? `, ${testimonials[project.id].role}` : ''}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
                                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400 mb-3">
                                            Key outcomes
                                        </h3>
                                        <div className="space-y-3 text-slate-300">
                                            {project.metrics?.map((metric, metricIndex) => (
                                                <div key={metricIndex} className="flex items-start gap-3">
                                                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                                    <div>
                                                        <p className="text-sm font-semibold text-white">{metric.value}</p>
                                                        <p className="text-xs text-slate-500 uppercase tracking-[0.2em] mt-0.5">{metric.label}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
                                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400 mb-3">
                                            Technology & tools
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-2xl border border-indigo-500/20 bg-indigo-300/10 px-4 py-3 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-400/20"
                                        >
                                            <ExternalLink className="w-4 h-4" /> View live project
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
                                        >
                                            <Github className="w-4 h-4" /> Source
                                        </a>
                                    )}
                                    {project.demoVideoUrl && (
                                        <a
                                            href={project.demoVideoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-400/20"
                                        >
                                            <Youtube className="w-4 h-4" /> Demo video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
