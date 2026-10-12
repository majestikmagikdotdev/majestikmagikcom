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
    <section id="testimonials" className="w-full px-4 md:px-6 py-20 md:py-28">
      <div className="mb-14">
        <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1a1a2a] px-3 py-1 rounded border border-[#2a2a3a]">
          • Customer Satisfaction
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#f0f0f0] tracking-tight" style={{ letterSpacing: '-0.04em' }}>
          What Clients{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-[#f0f0f0]">Say</span>
        </h2>
        <p className="mt-4 text-base text-[#a0a0b0] max-w-2xl">Real feedback from founders, creators, and platform builders.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <article
            key={`${t.name}-${index}`}
            className="flex flex-col rounded-xl border border-[#2a2a3a] bg-[#111120] p-6 hover:border-indigo-500/40 transition-colors duration-200"
          >
            <header className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-[#1a1a2a] border border-[#2a2a3a]">
                {t.image ? (
                  <Image src={t.image} alt={t.name} width={40} height={40} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <div className="w-full h-full rounded-full grid place-items-center text-indigo-400 font-mono font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-sm font-mono font-semibold text-[#f0f0f0]">{t.name}</h3>
                <div className="flex items-center gap-0.5 mt-1" role="img" aria-label={`${t.stars} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} filled={n <= t.stars} className={n > t.stars ? 'text-[#2a2a3a]' : ''} />
                  ))}
                </div>
              </div>
            </header>

            <p className="text-sm leading-relaxed text-[#a0a0b0] mb-6 flex-grow">&ldquo;{t.testimonial}&rdquo;</p>

            <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono pt-4 border-t border-[#2a2a3a] text-[#606070]">
              {t.source && (
                <span className="inline-flex items-center gap-1.5 text-indigo-400 font-bold">
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                  </svg>
                  {t.source}
                </span>
              )}
              {t.location && <span>• {t.location}</span>}
              {t.date && <span>• {t.date}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
