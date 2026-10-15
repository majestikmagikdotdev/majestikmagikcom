'use client';
import React, { useState } from 'react';

export default function HomeContact() {
  const [formData, setFormData] = useState({ name: '', email: '', business: '', projectNeed: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [acknowledgedPolicy, setAcknowledgedPolicy] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [attachmentError, setAttachmentError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttachmentError('');
    const incoming = Array.from(e.target.files ?? []);
    const invalid = incoming.find(f => f.type !== 'application/pdf');
    if (invalid) { setAttachmentError('Only PDF files are accepted.'); e.target.value = ''; return; }
    const oversized = incoming.find(f => f.size > 5 * 1024 * 1024);
    if (oversized) { setAttachmentError(`"${oversized.name}" exceeds the 5MB limit.`); e.target.value = ''; return; }
    setAttachments(prev => { const ex = prev.map(f => f.name); return [...prev, ...incoming.filter(f => !ex.includes(f.name))]; });
    e.target.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
      attachments.forEach(f => payload.append('attachments', f));
      const res = await fetch('/api/contact', { method: 'POST', body: payload });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', business: '', projectNeed: '' });
        setAttachments([]);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch { setSubmitStatus('error'); }
    finally { setIsSubmitting(false); }
  };

  const inputCls = "w-full px-4 py-3 bg-[#0e0e1a] border border-[#2a2a3a] rounded-lg text-[#f0f0f0] text-sm placeholder-[#404050] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50";

  return (
    <div id="contact" className="w-full px-4 md:px-6 py-20 md:py-28 border-t border-[#2a2a3a]">

      <div className="max-w-2xl mx-auto mb-10 text-center">
        <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-[#404050] mb-5">Work with us</p>
        <h2
          className="text-4xl sm:text-5xl font-black text-[#f0f0f0] mb-4"
          style={{ letterSpacing: '-0.04em', lineHeight: '1' }}
        >
          Got a project?
          <br />
          <span className="text-[#404050]">Tell us about it.</span>
        </h2>
        <p className="text-sm text-[#a0a0b0] leading-relaxed"> If it&apos;s a good fit, we&apos;ll get back to you within 24 hours.
        </p>
      </div>


      <div className="max-w-2xl mx-auto bg-[#111120] border border-[#2a2a3a] rounded-xl p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          {submitStatus === 'success' && (
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-lg">
              <p className="text-sm font-semibold text-emerald-300">✓ Request received — we&apos;ll be in touch within 24 hours.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-950/40 border border-red-500/40 rounded-lg">
              <p className="text-sm text-red-300">Something went wrong. Email us at <a href="mailto:contact@majestikmagik.dev" className="underline">contact@majestikmagik.dev</a></p>
            </div>
          )}

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#606070] mb-2">Your Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} className={inputCls} placeholder="John Smith" />
          </div>
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#606070] mb-2">Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} className={inputCls} placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#606070] mb-2">Business Name *</label>
            <input type="text" name="business" value={formData.business} onChange={handleChange} required disabled={isSubmitting} className={inputCls} placeholder="Your Business Name" />
          </div>
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#606070] mb-2">What Do You Need Help With? *</label>
            <textarea name="projectNeed" value={formData.projectNeed} onChange={handleChange} required disabled={isSubmitting} rows={4} className={inputCls + ' resize-none'} placeholder="e.g., Build a new platform, fix site speed, improve AI visibility..." />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wide text-[#606070] mb-2">
              Attach Documents <span className="normal-case font-normal text-[#404050]">(PDF only, max 5MB — optional)</span>
            </label>
            <label htmlFor="home-attachment" className="flex items-center gap-3 w-full px-4 py-3 bg-[#0e0e1a] border border-dashed border-[#2a2a3a] hover:border-indigo-500/50 rounded-lg cursor-pointer transition-colors">
              <svg className="w-4 h-4 text-[#404050]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32" />
              </svg>
              <span className="text-sm text-[#606070]">Click to upload PDFs</span>
            </label>
            <input id="home-attachment" type="file" accept="application/pdf" multiple onChange={handleFileChange} disabled={isSubmitting} className="sr-only" />
            {attachmentError && <p className="mt-1.5 text-xs text-red-400">{attachmentError}</p>}
            {attachments.length > 0 && (
              <ul className="mt-2 space-y-1">
                {attachments.map(f => (
                  <li key={f.name} className="flex items-center justify-between px-3 py-1.5 bg-[#0e0e1a] border border-[#2a2a3a] rounded text-xs text-[#a0a0b0]">
                    <span className="truncate">📎 {f.name}</span>
                    <button type="button" onClick={() => setAttachments(prev => prev.filter(x => x.name !== f.name))} className="ml-3 text-[#404050] hover:text-red-400 transition-colors">✕</button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-start gap-3 p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
            <input
              id="home-policy"
              type="checkbox"
              checked={acknowledgedPolicy}
              onChange={e => setAcknowledgedPolicy(e.target.checked)}
              disabled={isSubmitting}
              className="mt-1 w-4 h-4 rounded border border-indigo-500 bg-[#0e0e1a] text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
            <label htmlFor="home-policy" className="text-xs text-[#a0a0b0] leading-relaxed cursor-pointer">
              <span className="font-semibold text-[#f0f0f0]">I confirm my business model, data, and budget are ready</span> per the{' '}
              <a href="/ready-to-build-policy" className="text-indigo-400 hover:text-indigo-300 underline">Ready-to-Build Policy</a>.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success' || !acknowledgedPolicy}
            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-[#2a2a3a] disabled:cursor-not-allowed text-white font-mono text-sm font-bold uppercase tracking-wide rounded-lg transition-all duration-200 cursor-pointer"
          >
            {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Request Sent' : !acknowledgedPolicy ? 'Acknowledge Policy to Continue' : 'Send My Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
