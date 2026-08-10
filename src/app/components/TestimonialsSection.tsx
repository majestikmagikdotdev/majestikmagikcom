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

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]' : 'text-slate-800'}`}
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
      testimonial:
        'OMG you are the freaking best!! The changes have made my life so much easier. I will definitely be in contact when I need someone.',
      stars: 5,
      source: 'Verified Node Operator',
    },
    {
      name: 'Parris Gainer',
      image: '/img/parrisgainer.webp',
      testimonial:
        'Majestik Magik didn’t just build a website — they built a platform that empowers my voice and mission.',
      stars: 5,
      source: 'Verified Node Operator',
    },
    {
      name: 'John M',
      testimonial:
        "Jamil was magnificent. He's got a winning personality and really delivered on cleaning our place.",
      stars: 5,
      source: 'Verified Node Operator',
      location: 'Henrico, VA',
    },    
  ];

  return (
    <section 
      id="testimonials" 
      className="relative z-0 py-24 md:py-36 overflow-hidden"
      style={{        
        background: "rgb(15, 23, 42)",    
      }}
    >      

      {/* High-end hardware processor micro-dot matrix pattern - Stacked safely on top (z-11) */}
      <div 
        className="absolute inset-0 z-11 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="container relative mx-auto px-6 z-20 max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-slate-900/90 px-3 py-1 rounded border border-slate-800">
            Telemetry Feedback V1.0
          </span>
          
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-slate-100 font-bold tracking-tight scroll-animate">
            What Do Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
              Say
            </span>
          </h2>
          
          <p className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed scroll-animate">
            Real feedback collected from visionaries, creators, and platform builders run across the ecosystem network.
          </p>
        </div>

        {/* Testimonials Matrix Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch border border-slate-800/60 rounded-2xl p-4">
          {testimonials.map((t, index) => (
            <article
              key={`${t.name}-${index}`}
              className="flex h-full flex-col rounded-xl bg-slate-800 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-slate-700/50 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 scroll-animate"
              style={{ transitionDelay: `${0.2 + index * 0.06}s` }}
            >
              <header className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 p-0.5 bg-gradient-to-b from-indigo-500/30 to-slate-800 border border-slate-800/80 flex-shrink-0">
                  {t.image ? (
                    <Image src={t.image} alt={t.name} width={48} height={48} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="w-full h-full rounded-full bg-slate-950 grid place-items-center text-indigo-400 font-mono font-bold text-sm">
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

              <p className="text-slate-400 text-sm font-sans leading-relaxed mb-6 italic flex-grow">
                “{t.testimonial}”
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-500 border-t border-slate-900/60 pt-4">
                {t.source && (
                  <span className="inline-flex items-center gap-1.5 text-indigo-400/90 font-bold">
                    <svg
                      className="w-3.5 h-3.5 text-indigo-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
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