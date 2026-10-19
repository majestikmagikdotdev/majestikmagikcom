'use client';

import React, { useState } from 'react';
import Image from '@/app/components/Img';
import Link from 'next/link';
import { CheckCircleIcon, GithubIcon, LinkedInIcon } from './Icons';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', agencyName: '', locations: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
      const response = await fetch('/api/contact', { method: 'POST', body: payload });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', agencyName: '', locations: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      aria-describedby="contact-desc"
      className="scroll-animate relative z-0 py-12 md:py-24 border-t border-[#334155]"
      style={{ background: 'rgb(15, 23, 42)' }}
    >
      <div className="w-full px-4 md:px-6 mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
            DMAS Intake
          </span>
          <h2
            id="contact-heading"
            className="text-[2.5rem] sm:text-3xl md:text-5xl lg:text-7xl font-bold text-slate-100 tracking-tight mb-4"
            style={{ letterSpacing: '-0.06em' }}
          >
            Interested in DMAS Intake? Let&apos;s talk.
          </h2>
          <p id="contact-desc" className="text-slate-400 text-base mb-8">
            We&apos;ll reach back out within 24 hours to schedule a demo.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">

          {/* Founder Credentials */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6 space-y-6">

            {/* Photo + name */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 p-1 rounded-full bg-gradient-to-b from-indigo-500/30 to-transparent border border-slate-800">
                <Image
                  src="/img/0-jamil.jpg"
                  alt="Portrait of Jamil Matheny"
                  width={100}
                  height={100}
                  className="object-cover w-24 h-24 rounded-full border-2 border-slate-950 grayscale hover:grayscale-0 transition-all duration-500"
                  quality={75}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Jamil Matheny</h3>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">Founder</p>
              <a href="mailto:contact@majestikmagik.dev" className="font-mono text-xs text-slate-500 hover:text-indigo-400 transition-colors">contact@majestikmagik.dev</a>
            </div>

            {/* Signature */}
            <div className="flex justify-center opacity-80">
              <Image src="/img/my_signature.webp" alt="Jamil Matheny Signature" width={180} height={72} className="h-16 invert w-auto object-contain" />
            </div>

            {/* Bio */}
            <p className="text-xs text-slate-400 leading-relaxed">
              Jamil Matheny is the Founder of Majestik Magik, Inc., a digital solutions agency born from a lifelong passion for technology and a deep-seated desire to help businesses achieve their goals.
              <Link href="/about/jamil-matheny" className="inline-flex items-center ml-1 font-mono text-xs text-indigo-300 hover:text-indigo-100 transition-colors">Read More</Link>
            </p>

            {/* Social links */}
            <div className="flex gap-3 justify-center border-t border-[#334155] pt-4">
              {[
                { name: 'GitHub', url: 'https://github.com/jmathtech', icon: <GithubIcon className="w-4 h-4" /> },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jamil-matheny', icon: <LinkedInIcon className="w-4 h-4" /> },
              ].map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  className="text-slate-500 hover:text-indigo-400 p-2 bg-[#0f172a] rounded border border-[#334155] transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>

          </div>

          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-950/40 border border-green-500/50 rounded-lg flex items-start gap-3 animate-in fade-in">
                <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-green-300 mb-1">
                    Success! We received your request.
                  </p>
                  <p className="text-xs text-green-200">
                    We&apos;ll review your project and get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-lg">
                <p className="text-sm text-red-300 mb-2 font-semibold">
                  Something went wrong.
                </p>
                <p className="text-xs text-red-200">
                  Please try again or email us directly at{' '}
                  <a href="mailto:contact@majestikmagik.dev" className="text-red-300 hover:text-red-200 underline">
                    contact@majestikmagik.dev
                  </a>
                </p>
              </div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">Name *</label>
              <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} className="w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50" placeholder="John Smith" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">Email *</label>
              <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} className="w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50" placeholder="you@agency.com" />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">Phone *</label>
              <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required disabled={isSubmitting} className="w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50" placeholder="(555) 000-0000" />
            </div>

            {/* Agency Name */}
            <div>
              <label htmlFor="contact-agency" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">Agency Name *</label>
              <input id="contact-agency" type="text" name="agencyName" value={formData.agencyName} onChange={handleChange} required disabled={isSubmitting} className="w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50" placeholder="Your Agency Name" />
            </div>

            {/* Number of Locations */}
            <div>
              <label htmlFor="contact-locations" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">Number of Locations *</label>
              <select id="contact-locations" name="locations" value={formData.locations} onChange={e => setFormData(prev => ({ ...prev, locations: e.target.value }))} required disabled={isSubmitting} className="w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50">
                <option value="" disabled>Select...</option>
                <option value="1">1</option>
                <option value="2-5">2–5</option>
                <option value="6-10">6–10</option>
                <option value="10+">10+</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="btn-premium w-full py-3 px-6 text-white font-mono text-sm font-bold uppercase tracking-wide rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
            >
              {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Demo Requested' : 'Request a Demo'}
            </button>
          </form>
          </div>
        </div>        
      </div>
    </section>
  );
}
