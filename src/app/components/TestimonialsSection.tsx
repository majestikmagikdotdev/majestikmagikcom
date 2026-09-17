'use client';

import React from 'react';
import Image from 'next/image';
type Testimonial = {
  name: string;
  image?: string;
  testimonial: string;
  stars: 1 | 2 | 3 | 4 | 5;
  source?: string;
  location?: string;
  date?: string;
};

const Star = ({ filled, className }: { filled: boolean; className?: string }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-amber-400' : 'text-slate-700'} ${className || ''}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Noel Customs',
      image: '/img/noel_customs.webp',
      testimonial: 'OMG you are the freaking best!! The changes have made my life so much easier. I will definitely be in contact when I need someone.',
      stars: 5,
      source: 'Verified Client',
      location: 'Richmond, VA',
    },
    {
      name: 'Dr. Parris Gainer',      
      testimonial: 'Majestik Magik didn\u2019t just build a website \u2014 they built a platform that empowers my voice and mission.',
      stars: 5,
      source: 'Verified Client',
      location: 'Richmond, VA',
    },
    {
      name: 'John M',
      testimonial: "Jamil was magnificent. He's got a winning personality and really delivered.",
      stars: 5,
      source: 'Verified Client',
      location: 'Henrico, VA',
    },
  ];

  return (
    <section
      id="testimonials"
      className="scroll-animate relative z-0 py-12 md:py-24 border-t border-[#334155]"
      style={{
        position: 'relative',
        padding: '120px 20px',
        background: 'var(--bg-app)',
        fontFamily: 'var(--font-sans)',
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(100, 116, 139, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="w-full relative z-20">
        {/* Section Header */}
        <div className="mb-8 text-left">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[var(--bg-surface)] px-3 py-1 rounded border border-[var(--border-light)]">
            Customer Satisfaction 
          </span>
          <h2 className="mb-4 text-[2.5rem] sm:text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight" style={{ letterSpacing: '-0.06em', color: 'var(--text-primary)' }}>
            What Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-500 to-slate-800">
              Say
            </span>
          </h2>
          <p className="text-base font-sans leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Real feedback from founders, creators, and platform builders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch mx-auto">
          {testimonials.map((t, index) => (
            <article
              key={`${t.name}-${index}`}
              className="testimonials-card-hover-animate flex h-full flex-col rounded-lg p-4 md:p-6 hover:shadow-[0_4px_32px_rgba(67,56,202,0.12)] hover:scale-[1.05] hover:-translate-y-1 transition-all duration-700"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)' }}
            >
              <header className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-light)' }}>
                  {t.image ? (
                    <Image src={t.image} alt={t.name} width={40} height={40} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="w-full h-full rounded-full grid place-items-center text-indigo-400 font-mono font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-mono font-semibold tracking-wide" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{t.name}</h3>
                  <div className="flex items-center gap-0.5 mt-1" role="img" aria-label={`${t.stars} out of 5 stars`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} filled={n <= t.stars} className={n > t.stars ? 'text-slate-300' : ''} />
                    ))}
                  </div>
                </div>
              </header>

              <p className="text-sm font-sans leading-relaxed mb-6 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                &ldquo;{t.testimonial}&rdquo;
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono pt-4" style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)' }}>
                {t.source && (
                  <span className="inline-flex items-center gap-1.5 text-indigo-600 font-bold">
                    <svg className="w-3 h-3 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                    </svg>
                    {t.source}
                  </span>
                )}
                {t.location && <span className="text-slate-600">• {t.location}</span>}
                {t.date && <span className="text-slate-600">• {t.date}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
