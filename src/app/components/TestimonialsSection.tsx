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
};

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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full px-4 md:px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-[#404050] mb-5">Client Feedback</p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f0f0f0]"
            style={{ letterSpacing: '-0.04em', lineHeight: '1' }}
          >
            What clients say.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <article
              key={`${t.name}-${index}`}
              className="flex flex-col rounded-xl bg-[#0e0e1a] border border-[#1e1e2e] hover:border-[#2a2a3a] p-6 transition-colors duration-200"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" role="img" aria-label={`${t.stars} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map(n => (
                  <svg
                    key={n}
                    className={`w-3 h-3 ${n <= t.stars ? 'text-amber-400' : 'text-[#1e1e2e]'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#606070] leading-relaxed flex-grow mb-6">
                &ldquo;{t.testimonial}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e2e]">
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 bg-[#111120] border border-[#1e1e2e]">
                  {t.image ? (
                    <Image src={t.image} alt={t.name} width={28} height={28} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-indigo-400 font-mono font-bold text-xs">
                      {t.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-xs font-mono font-semibold text-[#a0a0b0]">{t.name}</p>
                  {t.location && (
                    <p className="text-[10px] font-mono text-[#404050]">{t.location}</p>
                  )}
                </div>
                {t.source && (
                  <div className="ml-auto flex items-center gap-1 text-[10px] font-mono text-indigo-400/70">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
