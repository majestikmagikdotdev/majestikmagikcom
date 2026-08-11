'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersect } from '../hooks/useIntersect';

type Testimonial = {
  name: string;
  image?: string;
  testimonial: string;
  stars: 1 | 2 | 3 | 4 | 5;
  source?: string;
  location?: string;
  date?: string;
};

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-amber-400' : 'text-slate-700'}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

const TestimonialsSection = () => {
  const { ref, intersected } = useIntersect();
  const fadeUp = {
    opacity: intersected ? 1 : 0,
    transform: intersected ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 2s ease-in, transform 2s cubic-bezier(0.16, 1, 0.3, 1)',
  };
  const testimonials: Testimonial[] = [
    {
      name: 'Noel Customs',
      image: '/img/noel_customs.webp',
      testimonial: 'OMG you are the freaking best!! The changes have made my life so much easier. I will definitely be in contact when I need someone.',
      stars: 5,
      source: 'Verified Node Operator',
    },
    {
      name: 'Dr. Parris Gainer',
      image: '/img/parrisgainer.webp',
      testimonial: 'Majestik Magik didn\u2019t just build a website \u2014 they built a platform that empowers my voice and mission.',
      stars: 5,
      source: 'Verified Node Operator',
    },
    {
      name: 'John M',
      testimonial: "Jamil was magnificent. He's got a winning personality and really delivered on cleaning our place.",
      stars: 5,
      source: 'Verified Node Operator',
      location: 'Henrico, VA',
    },
  ];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative z-0 py-24 md:py-36 overflow-hidden border-t border-[#334155]"
      style={{ background: 'rgb(15, 23, 42)' }}
    >
      <div className="w-full relative px-6 z-20">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
            Customer Satisfaction
          </span>
          <h2 className="mb-4 text-[2.5rem] sm:text-3xl md:text-5xl lg:text-7xl text-slate-100 font-bold tracking-tight" style={{ letterSpacing: '-0.08em', ...fadeUp }}>
            What Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-slate-300">
              Say
            </span>
          </h2>
          <p className="text-base text-slate-400 font-sans leading-relaxed" style={{ ...fadeUp, transitionDelay: '0.2s' }}>
            Real feedback from founders, creators, and platform builders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {testimonials.map((t, index) => (
            <article
              key={`${t.name}-${index}`}
              className="flex h-full flex-col rounded-lg bg-[#1e293b] p-6 border border-[#334155] hover:border-indigo-500/30 hover:shadow-[0_4px_32px_rgba(99,102,241,0.08)] transition-all duration-200"
              style={{ ...fadeUp, transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <header className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-[#334155] border border-[#2a2f45] flex-shrink-0">
                  {t.image ? (
                    <Image src={t.image} alt={t.name} width={40} height={40} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="w-full h-full rounded-full grid place-items-center text-indigo-400 font-mono font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-mono font-bold tracking-wide text-slate-200">{t.name}</h3>
                  <div className="flex items-center gap-0.5 mt-1" role="img" aria-label={`${t.stars} out of 5 stars`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} filled={n <= t.stars} />
                    ))}
                  </div>
                </div>
              </header>

              <p className="text-slate-300 text-sm font-sans leading-relaxed mb-6 flex-grow">
                &ldquo;{t.testimonial}&rdquo;
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-500 border-t border-[#334155] pt-4">
                {t.source && (
                  <span className="inline-flex items-center gap-1.5 text-indigo-400/90 font-bold">
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
