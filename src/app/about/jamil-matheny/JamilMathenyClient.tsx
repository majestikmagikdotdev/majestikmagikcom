'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const JamilMathenyPage = () => {
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
        <div className="max-w-4xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-indigo-300 bg-indigo-400/30 hover:bg-indigo-300/30 border border-indigo-400/30 px-3 py-1.5 rounded-lg transition-colors duration-200 mb-10"
          >
            ← Back to Home
          </Link>

          {/* Page label */}
          <div className="mb-4">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-[#111120] px-3 py-1 rounded border border-[#2a2a3a]">
              About the Founder
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-2"
            style={{ letterSpacing: '-0.09em', color: '#f0f0f0' }}
          >
            Jamil{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-white">
              Matheny
            </span>
          </h1>
          <p className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-12">
            Founder, Majestik Magik Inc.
          </p>

          {/* Article card */}
          <article
            className="rounded-2xl border p-8 md:p-12 space-y-6 text-sm leading-relaxed"
            style={{ background: '#111120', borderColor: '#2a2a3a', color: '#a0a0b0' }}
          >
            {/* Photo + intro */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl opacity-40" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', filter: 'blur(8px)' }} />
                  <Image
                    src="/img/0-jamil.webp"
                    alt="Jamil Matheny"
                    width={180}
                    height={180}
                    className="relative rounded-xl object-cover"
                    style={{ border: '1px solid rgba(99,102,241,0.2)' }}
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="text-base font-medium leading-relaxed" style={{ color: '#f0f0f0' }}>
                Jamil Matheny is the Founder of Majestik Magik, Inc., a digital solutions agency born from a lifelong passion for technology and a deep-seated desire to help businesses achieve their goals. He leads the company with a core mission: to create effective, purpose-driven software solutions that solve real-world business challenges.
              </p>
            </div>

            <p>
              A Virginia native, Jamil&apos;s fascination with technology began at an early age. Mentored by a neighbor who worked in IT, he gained a foundational understanding of computer hardware components. This interest grew through various school clubs and after-school programs, and his journey into programming was sparked by the creative possibilities of early web platforms like Myspace and Yahoo Geocities.
            </p>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl opacity-40" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', filter: 'blur(8px)' }} />
                  <Link href="/img/344705572_03be87188e_b.jpg" target="_blank">
                    <Image
                      src="/img/344705572_03be87188e_b.jpg"
                      alt="Jamil Matheny featured in the Richmond Times-Dispatch"
                      width={160}
                      height={240}
                      className="relative rounded-xl object-cover"
                      style={{ border: '1px solid rgba(99,102,241,0.2)' }}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <p>
                  With a natural knack for building—a hobby that has ranged from model cars and soldering to art—Jamil applied this same constructive mindset to his professional ambitions. As a largely self-taught programmer, he complemented his university studies by channeling his coding knowledge into a deep dive into business and entrepreneurship. Fueled by countless books on business and personal development, he worked numerous jobs over the years to analyze different operational models with the dream of one day creating his own company.
                </p>
                <p>
                  Jamil&apos;s entrepreneurial journey has been far from ordinary. From his early days as a journalist at Advanced Media Network (now Gamezone.com), covering events like E3 in Los Angeles and meeting icons such as Bill Gates, to being featured in the Richmond Times-Dispatch for his insights on gaming culture, Jamil has always had a forward-looking vision. He later fronted the heavy metal band Spiral Fracture, which won the 2012 Battle of the Bands contest and earned a spot performing at the Rockstar Energy Mayhem Festival alongside Slipknot and Anthrax.
                </p>
              </div>
            </div>

            <p>
              Resilient and adaptive, Jamil has also built businesses outside of tech, from a photography brand (Jamil Images, LLC) to a solo cleaning business. Each venture sharpened his eye for detail, client service, and operational discipline. Even while facing setbacks in manual labor jobs like FedEx and Amazon, he turned challenges into lessons that strengthened his resolve to pursue entrepreneurship full time.
            </p>

            {/* Pull quote */}
            <blockquote
              className="rounded-r-xl border-l-4 border-indigo-500 pl-5 py-3 text-base font-medium italic leading-relaxed"
              style={{ background: 'rgba(99,102,241,0.05)', color: '#f0f0f0' }}
            >
              These experiences—paired with his deep love of learning, his strong family values, and his role as a father—fuel his drive to build Majestik Magik into a trusted partner for businesses. His vision extends beyond web design: through AI innovation and healthcare projects like InsightMD, Jamil is determined to create impact-driven solutions that make a difference in people&apos;s lives. His philosophy is simple but powerful: &ldquo;I don&apos;t chase. I align. The win is already mine.&rdquo;
            </blockquote>

            {/* Stat chips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-[#2a2a3a]">
              {[
                { label: 'Company', value: 'Majestik Magik Inc.' },
                { label: 'Location', value: 'Virginia, USA' },
                { label: 'Focus', value: 'Local-First Systems' },
                { label: 'Philosophy', value: 'Align. Build. Ship.' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg p-3 border border-[#2a2a3a]" style={{ background: '#0e0e1a' }}>
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: '#606070' }}>{label}</p>
                  <p className="text-xs font-mono font-bold" style={{ color: '#f0f0f0' }}>{value}</p>
                </div>
              ))}
            </div>
          </article>

        </div>
      </div>
    </div>
  );
};

export default JamilMathenyPage;
