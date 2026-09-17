'use client';

import React, { useState } from 'react';
import { CheckCircleIcon } from '../components/Icons';

const BUDGET_OPTIONS = [
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  'Not sure yet — need scoping',
];

const PROJECT_TYPES = [
  'New Build',
  'Rebuild / Migration',
  'Feature Addition',
  'Performance Overhaul',
  'AI Integration',
  'Other',
];

const TIMELINES = [
  'ASAP (within 2 weeks)',
  '1 month',
  '3 months',
  '6+ months',
  'Flexible',
];

const BUSINESS_STAGES = [
  'Pre-launch',
  'Early Revenue',
  'Scaling',
  'Enterprise',
];

const REFERRAL_SOURCES = [
  'Google Search',
  'ChatGPT / AI Search',
  'Referral from someone I know',
  'Social Media',
  'Portfolio / Case Study',
  'Other',
];

const SAFE_FILENAME_RE = /[^a-zA-Z0-9._-]/g;

export default function StartAProjectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    projectType: '',
    budget: '',
    timeline: '',
    businessStage: '',
    currentStack: '',
    hasDesigns: '',
    projectNeed: '',
    referral: '',
  });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [attachmentError, setAttachmentError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [acknowledgedPolicy, setAcknowledgedPolicy] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
      attachments.forEach((f) => {
        const safe = f.name.replace(SAFE_FILENAME_RE, '_');
        payload.append('attachments', new File([f], safe, { type: f.type }));
      });
      payload.append('formType', 'custom-build');

      const res = await fetch('/api/contact', { method: 'POST', body: payload });
      const json = await res.json();

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', business: '', projectType: '', budget: '',
          timeline: '', businessStage: '', currentStack: '', hasDesigns: '',
          projectNeed: '', referral: '',
        });
        setAttachments([]);
      } else {
        setErrorMessage(json.error ?? 'Something went wrong.');
        setSubmitStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 bg-slate-800/60 border border-[#334155] rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed';
  const labelClass = 'block text-xs font-mono font-bold uppercase tracking-wide text-slate-400 mb-2';

  return (
    <main className="min-h-screen py-16 md:py-24 px-4 md:px-6" style={{ background: 'rgb(15, 23, 42)' }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
            Custom Build Intake
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            Start a{' '}
            <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 bg-clip-text text-transparent">
              Project
            </span>
          </h1>
          <p className="text-slate-400 text-base">
            This form is for large custom builds with a minimum budget of $10,000. Fill out as much as you can — the more detail you provide, the faster we can scope and respond.
          </p>

          {/* Pre-qual notice */}
          <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-left">
            <p className="text-sm text-amber-100/90">
              <span className="font-semibold text-amber-300">Before you submit:</span> We build for founders who have already nailed down their business model, data, and budget. If you&apos;re still working through those pieces,{' '}
              <a href="https://app.majestikmagik.dev" className="text-amber-300 hover:text-amber-200 underline font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                Pivot Quest
              </a>{' '}
              can help you get there first.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-8 md:p-10">
          {submitStatus === 'success' ? (
            <div className="py-12 flex flex-col items-center text-center gap-4">
              <CheckCircleIcon className="w-12 h-12 text-green-400" />
              <h2 className="text-xl font-bold text-slate-100">We received your project brief.</h2>
              <p className="text-slate-400 text-sm max-w-sm">
                We&apos;ll review the details and follow up within 24 hours to schedule a discovery call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-lg">
                  <p className="text-sm text-red-300 font-semibold mb-1">Something went wrong.</p>
                  <p className="text-xs text-red-200">{errorMessage || 'Please try again or email us at contact@majestikmagik.dev'}</p>
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="sap-name" className={labelClass}>Your Name *</label>
                <input id="sap-name" type="text" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} className={inputClass} placeholder="Jane Smith" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="sap-email" className={labelClass}>Email Address *</label>
                <input id="sap-email" type="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} className={inputClass} placeholder="you@company.com" />
              </div>

              {/* Business */}
              <div>
                <label htmlFor="sap-business" className={labelClass}>Business / Company Name *</label>
                <input id="sap-business" type="text" name="business" value={formData.business} onChange={handleChange} required disabled={isSubmitting} className={inputClass} placeholder="Acme Corp" />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="sap-projectType" className={labelClass}>Project Type *</label>
                <select id="sap-projectType" name="projectType" value={formData.projectType} onChange={handleChange} required disabled={isSubmitting} className={inputClass}>
                  <option value="">Select a project type...</option>
                  {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="sap-budget" className={labelClass}>
                  Budget Range *{' '}
                  <span className="normal-case font-normal text-slate-500">(minimum $10,000)</span>
                </label>
                <select id="sap-budget" name="budget" value={formData.budget} onChange={handleChange} required disabled={isSubmitting} className={inputClass}>
                  <option value="">Select a budget range...</option>
                  {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="sap-timeline" className={labelClass}>Desired Timeline *</label>
                <select id="sap-timeline" name="timeline" value={formData.timeline} onChange={handleChange} required disabled={isSubmitting} className={inputClass}>
                  <option value="">Select a timeline...</option>
                  {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Business Stage */}
              <div>
                <label htmlFor="sap-businessStage" className={labelClass}>Business Stage *</label>
                <select id="sap-businessStage" name="businessStage" value={formData.businessStage} onChange={handleChange} required disabled={isSubmitting} className={inputClass}>
                  <option value="">Select your stage...</option>
                  {BUSINESS_STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Current Stack */}
              <div>
                <label htmlFor="sap-currentStack" className={labelClass}>
                  Current Tech Stack{' '}
                  <span className="normal-case font-normal text-slate-500">(optional)</span>
                </label>
                <input id="sap-currentStack" type="text" name="currentStack" value={formData.currentStack} onChange={handleChange} disabled={isSubmitting} className={inputClass} placeholder="e.g., WordPress, React, Shopify, Supabase..." />
              </div>

              {/* Designs */}
              <div>
                <label htmlFor="sap-hasDesigns" className={labelClass}>Do you have designs or wireframes?</label>
                <select id="sap-hasDesigns" name="hasDesigns" value={formData.hasDesigns} onChange={handleChange} disabled={isSubmitting} className={inputClass}>
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="sap-projectNeed" className={labelClass}>Describe Your Project *</label>
                <textarea
                  id="sap-projectNeed"
                  name="projectNeed"
                  value={formData.projectNeed}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="What are you building? What problem does it solve? Who are your users? Any specific features or integrations required?"
                />
              </div>

              {/* Referral */}
              <div>
                <label htmlFor="sap-referral" className={labelClass}>
                  How did you hear about us?{' '}
                  <span className="normal-case font-normal text-slate-500">(optional)</span>
                </label>
                <select id="sap-referral" name="referral" value={formData.referral} onChange={handleChange} disabled={isSubmitting} className={inputClass}>
                  <option value="">Select...</option>
                  {REFERRAL_SOURCES.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              {/* Attachments */}
              <div>
                <label htmlFor="sap-attachment" className={labelClass}>
                  Attach Documents{' '}
                  <span className="normal-case font-normal text-slate-500">(PDF only, max 5MB each — optional)</span>
                </label>
                <label htmlFor="sap-attachment" className="flex items-center gap-3 w-full px-4 py-3 bg-slate-800/60 border border-dashed border-[#334155] hover:border-indigo-500 rounded-lg cursor-pointer transition-colors group">
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                  </svg>
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Click to upload PDFs</span>
                </label>
                <input id="sap-attachment" type="file" accept="application/pdf" multiple onChange={handleFileChange} disabled={isSubmitting} className="sr-only" />
                {attachments.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {attachments.map((f) => (
                      <li key={f.name} className="flex items-center justify-between px-3 py-1.5 bg-slate-800/60 border border-[#334155] rounded text-xs text-slate-300">
                        <span className="truncate">📎 {f.name} <span className="text-slate-500">({(f.size / 1024).toFixed(0)} KB)</span></span>
                        <button type="button" onClick={() => removeAttachment(f.name)} className="ml-3 text-slate-500 hover:text-red-400 transition-colors flex-shrink-0" aria-label={`Remove ${f.name}`}>✕</button>
                      </li>
                    ))}
                  </ul>
                )}
                {attachmentError && <p className="mt-1.5 text-xs text-red-400">{attachmentError}</p>}
              </div>

              {/* Policy Acknowledgment */}
              <div className="flex items-start space-x-3 p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
                <input
                  id="sap-policy"
                  type="checkbox"
                  checked={acknowledgedPolicy}
                  onChange={(e) => setAcknowledgedPolicy(e.target.checked)}
                  disabled={isSubmitting}
                  className="mt-1 w-4 h-4 rounded border border-indigo-500 bg-slate-800 text-indigo-600 focus:ring-indigo-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <label htmlFor="sap-policy" className="text-xs text-slate-300 leading-relaxed cursor-pointer">
                  <span className="font-semibold text-slate-200">I confirm that my business model, data sources, and budget are ready for engineering execution according to the</span>{' '}
                  <a href="/ready-to-build-policy" className="text-indigo-400 hover:text-indigo-300 underline font-semibold transition-colors">
                    Ready-to-Build Policy
                  </a>.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !acknowledgedPolicy}
                className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-mono text-sm font-bold uppercase tracking-wide rounded-lg transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : !acknowledgedPolicy ? 'Acknowledge Policy to Continue' : 'Submit Project Brief'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
