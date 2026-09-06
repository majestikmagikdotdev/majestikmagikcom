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
            {title}
          </h2>
          <p
            id="contact-desc"
            className="text-slate-400 text-base"
          >
            {subtitle}
          </p>
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-700 disabled:cursor-not-allowed text-white font-mono text-sm font-bold uppercase tracking-wide rounded-lg transition-all duration-200 cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Request Sent' : 'Send My Request'}
            </button>

            {/* Footer Text */}
            <div className="text-xs text-slate-500 text-center pt-2">
              <p>
                Prefer to call?{' '}
                <a
                  href="tel:8043627561"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
                >
                  (804) 362-7561
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Trust Statement */}
        <p className="text-center text-xs text-slate-500 mt-8">
          We respect your privacy. No spam, just honest conversation about your business needs.
        </p>
      </div>
    </section>
  );
}
