'use client';

import React, { useState } from 'react';
import { XMarkIcon } from './Icons';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestQuoteModal({ isOpen, onClose }: RequestQuoteModalProps) {
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
      // Send to your email service or API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', business: '', projectNeed: '' });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-md bg-[#1e293b] rounded-lg border border-indigo-500/30 shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="flex items-center justify-between p-6 border-b border-[#334155]">
          <h2 id="modal-title" className="text-xl font-bold text-slate-100">
            Request a Quote
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
            type="button"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {submitStatus === 'success' && (
            <div className="p-3 bg-green-950/30 border border-green-500/30 rounded-lg text-green-300 text-sm">
              ✓ Thanks! We&apos;ll reach out within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-3 bg-red-950/30 border border-red-500/30 rounded-lg text-red-300 text-sm">
              Oops! Something went wrong. Please try again or email us at contact@majestikmagik.dev
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-slate-900/50 border border-[#334155] rounded text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-slate-900/50 border border-[#334155] rounded text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="business" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">
              Business Name
            </label>
            <input
              id="business"
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-slate-900/50 border border-[#334155] rounded text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="Your Business Name"
            />
          </div>

          <div>
            <label htmlFor="projectNeed" className="block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2">
              What Do You Need Help With?
            </label>
            <textarea
              id="projectNeed"
              name="projectNeed"
              value={formData.projectNeed}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 bg-slate-900/50 border border-[#334155] rounded text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              placeholder="e.g., Build a new website, fix our website speed, improve our Google visibility..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-700 disabled:cursor-not-allowed cursor-pointer text-white font-mono text-sm font-bold uppercase tracking-wide rounded transition-colors duration-200"
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
        </form>

        <div className="px-6 pb-6 text-xs text-slate-500 text-center">
          Or call <a href="tel:8043627561" className="text-indigo-400 hover:text-indigo-300">(804) 362-7561</a>
        </div>
      </div>
    </div>
  );
}
