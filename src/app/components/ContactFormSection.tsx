'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, GithubIcon, LinkedInIcon } from './Icons';

interface ContactFormSectionProps {
  title?: string;
  subtitle?: string;
  showBusiness?: boolean;
}

export default function ContactFormSection({
  title = 'Ready to Get Started?',
  subtitle = "Tell us about your project, and we'll get back to you within 24 hours with a quote and next steps.",
  showBusiness = true,
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    projectNeed: '',
  });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [attachmentError, setAttachmentError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [acknowledgedPolicy, setAcknowledgedPolicy] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttachmentError('');
    const incoming = Array.from(e.target.files ?? []);
    const invalid = incoming.find((f) => f.type !== 'application/pdf');
    if (invalid) { setAttachmentError('Only PDF files are accepted.'); e.target.value = ''; return; }
    const oversized = incoming.find((f) => f.size > 5 * 1024 * 1024);
    if (oversized) { setAttachmentError(`"${oversized.name}" exceeds the 5MB limit.`); e.target.value = ''; return; }
    setAttachments((prev) => {
      const existing = prev.map((f) => f.name);
      return [...prev, ...incoming.filter((f) => !existing.includes(f.name))];
    });
    e.target.value = '';
  };

  const removeAttachment = (name: string) =>
    setAttachments((prev) => prev.filter((f) => f.name !== name));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
      attachments.forEach((f) => payload.append('attachments', f));

      const response = await fetch('/api/contact', { method: 'POST', body: payload });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', business: '', projectNeed: '' });
        setAttachments([]);
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
            Ready to Start?
          </span>
          <h2
            id="contact-heading"
            className="text-[2.5rem] sm:text-3xl md:text-5xl lg:text-7xl font-bold text-slate-100 tracking-tight mb-4"
            style={{ letterSpacing: '-0.06em' }}
          >
            {title.includes('Great Together') ? (
              <>
                {title.replace('Great Together', '')}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg, #a5b4fc, #818cf8, #6366f1, #a5b4fc)', backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite' }}
                >Great Together</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p
            id="contact-desc"
            className="text-slate-400 text-base mb-8"
          >
            {subtitle}
          </p>

          {/* Ready-to-Build Policy Pre-Qualification Message */}
          <div className="mx-auto max-w-2xl mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <p className="text-sm text-amber-100/90">
              <span className="font-semibold text-amber-300">About Our Process:</span> We build high-performance software for founders who&apos;ve already nailed down their business model, data, and budget. If you&apos;re still working through those pieces, the {' '}
              <a href="https://app.majestikmagik.dev" className="text-amber-300 hover:text-amber-200 underline font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                Pivot Quest
              </a>
              {' '} chat can help you get there first; then come back when you&apos;re ready to build.
            </p>
          </div>          
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

            {/* Name Field */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="John Smith"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="you@company.com"
              />
            </div>

            {/* Business Field - Conditional */}
            {showBusiness && (
              <div>
                <label htmlFor="contact-business" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">
                  Business Name *
                </label>
                <input
                  id="contact-business"
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required={showBusiness}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your Business Name"
                />
              </div>
            )}

            {/* Project Need Field */}
            <div>
              <label htmlFor="contact-need" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">
                What Do You Need Help With? *
              </label>
              <textarea
                id="contact-need"
                name="projectNeed"
                value={formData.projectNeed}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                placeholder="e.g., Build a new website, fix our site speed, improve Google visibility, increase leads..."
              />
            </div>

            {/* Attachment Field */}
            <div>
              <label htmlFor="contact-attachment" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">
                Attach Documents <span className="normal-case font-normal text-slate-500">(PDF only, max 5MB each — optional)</span>
              </label>
              <label
                htmlFor="contact-attachment"
                className="flex items-center gap-3 w-full px-4 py-3 bg-slate-800/60 border border-dashed border-[#334155] hover:border-indigo-500 rounded-lg cursor-pointer transition-colors group"
              >
                <svg className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                </svg>
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  Click to upload PDFs
                </span>
              </label>
              <input
                id="contact-attachment"
                type="file"
                accept="application/pdf"
                multiple
                onChange={handleFileChange}
                disabled={isSubmitting}
                className="sr-only"
              />
              {attachments.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {attachments.map((f) => (
                    <li key={f.name} className="flex items-center justify-between px-3 py-1.5 bg-slate-800/60 border border-[#334155] rounded text-xs text-slate-300">
                      <span className="truncate">📎 {f.name} <span className="text-slate-500">({(f.size / 1024).toFixed(0)} KB)</span></span>
                      <button
                        type="button"
                        onClick={() => removeAttachment(f.name)}
                        className="ml-3 text-slate-500 hover:text-red-400 transition-colors flex-shrink-0"
                        aria-label={`Remove ${f.name}`}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {attachmentError && (
                <p className="mt-1.5 text-xs text-red-400">{attachmentError}</p>
              )}
            </div>

            {/* Ready-to-Build Policy Acknowledgment Checkbox */}
            <div className="flex items-start space-x-3 p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
              <input
                id="policy-acknowledgment"
                type="checkbox"
                checked={acknowledgedPolicy}
                onChange={(e) => setAcknowledgedPolicy(e.target.checked)}
                disabled={isSubmitting}
                className="mt-1 w-4 h-4 rounded border border-indigo-500 bg-slate-800 text-indigo-600 focus:ring-indigo-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="policy-acknowledgment" className="text-xs text-slate-300 leading-relaxed cursor-pointer">
                <span className="font-semibold text-slate-200">I confirm that my business model, data sources, and budget are ready for engineering execution according to the</span>{' '}
                <a href="/ready-to-build-policy" className="text-indigo-400 hover:text-indigo-300 underline font-semibold transition-colors">
                  Ready-to-Build Policy
                </a>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success' || !acknowledgedPolicy}
              className="btn-premium w-full py-3 px-6 text-white font-mono text-sm font-bold uppercase tracking-wide rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
            >
              {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Request Sent' : !acknowledgedPolicy ? 'Acknowledge Policy to Continue' : 'Send My Request'}
            </button>            
          </form>
          </div>
        </div>        
      </div>
    </section>
  );
}
