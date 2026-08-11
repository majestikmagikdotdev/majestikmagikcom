'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '../components/Icons';

const RefundPolicyContent = () => {
  return (
    <div className="text-slate-300 leading-relaxed space-y-6">
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent mb-2">
          Refund Policy
        </h1>
        <p className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase">
          Last Updated: July 14, 2026
        </p>
      </div>

      <p className="text-[1.05rem] text-slate-200">
        At{' '}
        <a href="https://majestikmagik.dev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
          majestikmagik.dev
        </a>
        , we strive to provide high-quality digital products and services. We understand that sometimes things don&apos;t work out as expected. This policy outlines the conditions under which refunds may be issued.
      </p>

      {/* Section 1 */}
      <div className="space-y-4 pt-4 border-t border-indigo-500/10">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Digital Products</h2>
        <p className="text-sm text-indigo-400 uppercase tracking-wider font-semibold text-xs">Templates, E-Books, &amp; Software Licenses</p>
        <p>Due to the intangible nature of digital products, which cannot be returned once delivered, our refund policy for these items is as follows:</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li><strong className="text-slate-200">No Refunds After Download:</strong> Once a digital product has been downloaded or accessed, we generally do not offer refunds.</li>
          <li><strong className="text-slate-200">Exceptions for Technical Issues:</strong> If you experience significant technical issues preventing you from accessing or using the product, and our support team cannot resolve the issue within a reasonable timeframe, you may be eligible for a refund. Please contact us within <strong className="text-indigo-400">7 days</strong> of delivery to report such issues.</li>
          <li><strong className="text-slate-200">Misrepresentation:</strong> If the digital product is significantly different from its description or if it fails to perform as advertised, you may be eligible for a refund. Evidence of misrepresentation will be required. Please contact us within <strong className="text-indigo-400">7 days</strong> of delivery to report such issues.</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="space-y-4 pt-6 border-t border-indigo-500/10">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Services</h2>
        <p className="text-sm text-indigo-400 uppercase tracking-wider font-semibold text-xs">Custom Development, Consulting, &amp; Subscriptions</p>
        <p>Refunds for services are handled on a case-by-case basis, depending on the nature of the service and work completed:</p>
        <ul className="list-disc list-inside space-y-3 pl-2">
          <li><strong className="text-slate-200">Project-Based Services:</strong> For custom development or consulting services, refunds will be evaluated based on the work completed and the agreed-upon milestones. If a project is cancelled before completion, any refund will be prorated based on the services already rendered and expenses incurred.</li>
          <li>
            <strong className="text-slate-200">Subscription Services:</strong>
            <ul className="list-disc list-inside space-y-2 pl-6 mt-2 text-slate-300">
              <li><span className="text-slate-200 font-medium">Monthly Subscriptions:</span> Monthly subscriptions are generally non-refundable once the service period has begun. You can cancel your subscription at any time to prevent future charges.</li>
              <li><span className="text-slate-200 font-medium">Annual Subscriptions:</span> For annual subscriptions, a refund may be issued for the unused portion of the subscription, minus any non-refundable setup fees or a pro-rated amount for the time already used. A cancellation fee may also apply.</li>
            </ul>
          </li>
          <li><strong className="text-slate-200">Cancellation Before Service Commencement:</strong> If you cancel a service before any work has begun or before the subscription period starts, a full refund may be issued.</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="space-y-4 pt-6 border-t border-indigo-500/10">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">How to Request a Refund</h2>
        <p>To request a refund, please follow these steps:</p>
        <ol className="list-decimal list-inside space-y-3 pl-2">
          <li>
            <strong className="text-slate-200">Contact Us:</strong> Send an email to{' '}
            <a href="mailto:contact@majestikmagik.dev" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
              contact@majestikmagik.dev
            </a>{' '}
            with your order number and a detailed explanation of why you are requesting a refund.
          </li>
          <li><strong className="text-slate-200">Provide Evidence:</strong> For technical issues or misrepresentation, please provide screenshots, error messages, or other relevant evidence to support your claim.</li>
          <li><strong className="text-slate-200">Review Process:</strong> We will review your request within <strong className="text-indigo-400">5 business days</strong> and may contact you for additional information.</li>
          <li><strong className="text-slate-200">Refund Issuance:</strong> If your refund request is approved, the refund will be processed to your original method of payment within <strong className="text-indigo-400">7-10 business days</strong>.</li>
        </ol>
      </div>

      {/* Section 4 */}
      <div className="space-y-3 pt-6 border-t border-indigo-500/10">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Changes to This Policy</h2>
        <p>
          We reserve the right to modify this refund policy at any time. Any changes will be posted on this page, and the &quot;Last Updated&quot; date will be revised accordingly. We encourage you to review this policy periodically.
        </p>
      </div>

      <div className="pt-6 border-t border-indigo-500/10">
        <p className="text-slate-400 text-sm">If you have any questions about our refund policy, please don&apos;t hesitate to contact us.</p>
      </div>
    </div>
  );
};

/**
 * The main page component that wraps the content with a layout.
 */
const RefundPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] selection:bg-indigo-500/30 selection:text-white">
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors group text-sm font-semibold tracking-wide uppercase"
            aria-label="Back to main site"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <article className="bg-[#0d0f1a] border border-indigo-500/15 p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <RefundPolicyContent />
          </article>
        </div>
      </main>
    </div>
  );
};

export default RefundPolicyPage;