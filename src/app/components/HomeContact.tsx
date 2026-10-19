'use client';
import React, { useState } from 'react';
import Image from '@/app/components/Img';
import Link from 'next/link';

export default function HomeContact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', agencyName: '', locations: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
      const res = await fetch('/api/contact', { method: 'POST', body: payload });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', agencyName: '', locations: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch { setSubmitStatus('error'); }
    finally { setIsSubmitting(false); }
  };

  const inputCls = "w-full px-4 py-3 bg-[#0e0e1a] border border-[#2a2a3a] rounded-lg text-[#d4d4d8] text-sm placeholder-[#606070] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] transition-all disabled:opacity-50";

  return (
    <div id="contact" className="w-full px-4 md:px-6 py-20 md:py-28">

      <div className="reveal max-w-7xl mx-auto mb-10">
        <h2
          className="text-4xl sm:text-5xl font-black text-[#d4d4d8] mb-4"
          style={{ letterSpacing: '-0.02em', lineHeight: '1', fontFamily: 'var(--font-im-fell-english)' }}
        >
          Interested in DMAS Intake?
          <br />
          <span className="text-[#707080]">Let&apos;s talk.</span>
        </h2>
        <p className="text-sm text-[#a0a0b0] leading-relaxed">We&apos;ll reach back out within 24 hours to schedule a demo.</p>
      </div>

      <div className="reveal max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">

        {/* Founder Credentials */}
        <div className="bg-[#111120] border border-[#2a2a3a] rounded-xl p-6 space-y-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 p-1 rounded-full bg-gradient-to-b from-indigo-500/30 to-transparent border border-[#2a2a3a]">
              <Image
                src="/img/0-jamil.jpg"
                alt="Portrait of Jamil Matheny"
                width={100}
                height={100}
                className="object-cover w-24 h-24 rounded-full border-2 border-[#0e0e1a] grayscale hover:grayscale-0 transition-all duration-500"
                quality={75}
              />
            </div>
            <h3 className="text-xl font-bold text-[#d4d4d8]">Jamil Matheny</h3>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">Founder</p>
            <a href="mailto:contact@majestikmagik.dev" className="font-mono text-xs text-[#808090] hover:text-indigo-400 transition-colors">contact@majestikmagik.dev</a>
          </div>

          <div className="flex justify-center opacity-80">
            <Image src="/img/my_signature.webp" alt="Jamil Matheny Signature" width={180} height={72} className="h-16 invert w-auto object-contain" />
          </div>

          <p className="text-xs text-[#a0a0b0] leading-relaxed">
            After watching businesses stay stuck with outdated software they couldn&apos;t control or get real support for, Jamil Matheny started building it for them instead.
            <Link href="/about/jamil-matheny" className="inline-flex items-center ml-1 font-mono text-xs text-indigo-300 hover:text-indigo-100 transition-colors">Read More</Link>
          </p>

          <div className="flex gap-3 justify-center border-t border-[#2a2a3a] pt-4">
            <a href="https://github.com/jmathtech" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="text-[#808090] hover:text-indigo-400 p-2 bg-[#0e0e1a] rounded border border-[#2a2a3a] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/jamil-matheny" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-[#808090] hover:text-indigo-400 p-2 bg-[#0e0e1a] rounded border border-[#2a2a3a] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#111120] border border-[#2a2a3a] rounded-xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {submitStatus === 'success' && (
              <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-lg">
                <p className="text-sm font-semibold text-emerald-300">✓ Request received. We&apos;ll be in touch within 24 hours.</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-950/40 border border-red-500/40 rounded-lg">
                <p className="text-sm text-red-300">Something went wrong. Email us at <a href="mailto:contact@majestikmagik.dev" className="underline">contact@majestikmagik.dev</a></p>
              </div>
            )}

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#808090] mb-2">Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} className={inputCls} placeholder="John Smith" />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#808090] mb-2">Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} className={inputCls} placeholder="you@agency.com" />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#808090] mb-2">Phone *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required disabled={isSubmitting} className={inputCls} placeholder="(555) 000-0000" />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#808090] mb-2">Agency Name *</label>
              <input type="text" name="agencyName" value={formData.agencyName} onChange={handleChange} required disabled={isSubmitting} className={inputCls} placeholder="Your Agency Name" />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#808090] mb-2">Number of Locations *</label>
              <select name="locations" value={formData.locations} onChange={e => setFormData(prev => ({ ...prev, locations: e.target.value }))} required disabled={isSubmitting} className={inputCls}>
                <option value="" disabled>Select...</option>
                <option value="1">1</option>
                <option value="2-5">2–5</option>
                <option value="6-10">6–10</option>
                <option value="10+">10+</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="btn-premium w-full py-3 px-6 text-white font-mono text-sm font-bold uppercase tracking-wide rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:bg-[#2a2a3a]"
            >
              {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Demo Requested' : 'Request a Demo'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
