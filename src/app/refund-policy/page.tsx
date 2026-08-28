'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '../components/Icons';

const RefundPolicyContent = () => {
  return (
    <div className="scroll-animate text-slate-300 leading-relaxed space-y-6">
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent mb-2">
          Refund Policy
        </h1>
        <p className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase">
          Last Updated: August 28, 2026
        </p>
      </div>

      <p className="text-[1.05rem] text-slate-200">
        At{' '}
        <a href="https://majestikmagik.dev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
          majestikmagik.dev
        </a>
        , we strive to provide high-quality digital products, custom software architecture, and engineering services. We understand that project scope and circumstances can evolve. This policy outlines the conditions under which refunds are evaluated and issued.
      </p>

      {/* Section 1 */}
      <div className="space-y-4 pt-4 border-t border-indigo-500/10">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Digital Products</h2>
        <p className="text-sm text-indigo-400 uppercase tracking-wider font-semibold text-xs">Templates, E-Books, &amp; Pre-Built Software Licenses</p>
        <p>Due to the intangible nature of digital assets, which cannot be returned once access is delivered, our refund terms for digital products are as follows:</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li><strong className="text-slate-200">No Refunds After Download:</strong> Once a digital asset or code package has been downloaded, cloned, or accessed, we generally do not offer refunds.</li>
          <li><strong className="text-slate-200">Exceptions for Technical Issues:</strong> If you experience significant technical defects preventing access or execution, and our support team cannot resolve the issue within a reasonable timeframe, you may be eligible for a store credit or refund. Technical support must be contacted within <strong className="text-indigo-400">7 calendar days</strong> of purchase.</li>
          <li><strong className="text-slate-200">Misrepresentation:</strong> If a pre-built digital asset is demonstrably different from its documented specification, you may request a review within <strong className="text-indigo-400">7 calendar days</strong> of purchase with supporting evidence.</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="space-y-4 pt-6 border-t border-indigo-500/10">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Professional Services</h2>
        <p className="text-sm text-indigo-400 uppercase tracking-wider font-semibold text-xs">Custom Software Engineering, Architecture, &amp; Subscriptions</p>
        <p>Refunds for custom engineering and agency services are handled based on project milestones, engineering resource allocation, and work completed:</p>
        <ul className="list-disc list-inside space-y-3 pl-2">
          <li>
            <strong className="text-slate-200">Initial Project Deposits (Strictly Non-Refundable):</strong> All initial project deposits (e.g., Milestone 1 / Project Initiation deposits) are strictly non-refundable. Upfront deposits secure immediate engineering availability, environment setup, database architecture, and initial infrastructure provisioning. Once a deposit is received and project initiation commences, no refunds will be granted for the deposit amount under any circumstances.
          </li>
          <li>
            <strong className="text-slate-200">Milestone-Based Custom Development:</strong> For ongoing development phases following Milestone 1:
            <ul className="list-disc list-inside space-y-2 pl-6 mt-2 text-slate-300">
              <li><span className="text-slate-200 font-medium">Work Approved/In Progress:</span> Payments made toward active or accepted milestones are non-refundable once work has commenced or acceptance criteria have been verified.</li>
              <li><span className="text-slate-200 font-medium">Project Cancellation:</span> If a client cancels a contract prior to the initiation of a subsequent milestone, any unearned, prepaid funds held for unstarted future milestones will be returned, minus any non-recoverable third-party expenses or administrative fees incurred.</li>
            </ul>
          </li>
          <li>
            <strong className="text-slate-200">Monthly &amp; Annual Retainers / Subscriptions:</strong>
            <ul className="list-disc list-inside space-y-2 pl-6 mt-2 text-slate-300">
              <li><span className="text-slate-200 font-medium">Monthly Maintenance Retainers:</span> Monthly support retainers are non-refundable once the billing period has begun. You may cancel your retainer at any time prior to the next billing cycle to prevent future charges.</li>
              <li><span className="text-slate-200 font-medium">Annual Subscriptions:</span> For annual service retainers, a pro-rated refund may be requested for full unused future months, minus a <strong className="text-indigo-400">15% administrative processing fee</strong> and any non-refundable third-party infrastructure setup fees.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="space-y-4 pt-6 border-t border-indigo-500/10">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Cancellation Prior to Service Commencement</h2>
        <p>
          If a client cancels a custom service engagement in writing before any work has begun, before initial code repository scaffolding is created, and before cloud infrastructure accounts are configured, a refund of paid fees may be issued at Majestik Magik&apos;s sole discretion, minus a <strong className="text-indigo-400">5% credit card payment processing fee</strong>.
        </p>
      </div>

      {/* Section 4 */}
      <div className="space-y-4 pt-6 border-t border-indigo-500/10">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">How to Request a Review or Refund</h2>
        <p>To request a refund or billing review under this policy:</p>
        <ol className="list-decimal list-inside space-y-3 pl-2">
          <li>
            <strong className="text-slate-200">Contact Us:</strong> Email{' '}
            <a href="mailto:contact@majestikmagik.dev" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
              contact@majestikmagik.dev
            </a>{' '}
            with your primary contract reference or order number and a clear description of your request.
          </li>
          <li><strong className="text-slate-200">Review Window:</strong> Our finance and technical leads will review your request against completed project milestones, repository commit histories, and contractual acceptance criteria within <strong className="text-indigo-400">5 business days</strong>.</li>
          <li><strong className="text-slate-200">Refund Processing:</strong> If a refund or partial refund is approved, it will be credited back to your original payment method (or via Bank Transfer/Stripe) within <strong className="text-indigo-400">7–10 business days</strong>.</li>
        </ol>
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