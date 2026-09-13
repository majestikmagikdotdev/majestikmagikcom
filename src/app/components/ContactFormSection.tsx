'use client';

import React, { useState } from 'react';
import { CheckCircleIcon } from './Icons';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', business: '', projectNeed: '' });
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
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
                <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 bg-clip-text text-transparent">Great Together</span>
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
        <div className="max-w-2xl mx-auto bg-[#1e293b] border border-[#334155] rounded-lg p-8 md:p-10">
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
              className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-mono text-sm font-bold uppercase tracking-wide rounded-lg transition-all duration-200 cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Request Sent' : !acknowledgedPolicy ? 'Acknowledge Policy to Continue' : 'Send My Request'}
            </button>            
          </form>
        </div>        
      </div>
    </section>
  );
}
