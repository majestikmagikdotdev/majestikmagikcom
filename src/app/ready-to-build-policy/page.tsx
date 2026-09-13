'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '../components/Icons';

/**
 * Content Component for the Ready-to-Build Policy
 */
const ReadyToBuildPolicyContent: React.FC = () => {
    return (
        <div className="scroll-animate text-slate-300 leading-relaxed m-6 space-y-6 pt-24 md:pt-32">
            <div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent mb-2">
                    Ready-to-Build Policy
                </h1>
                <p className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                    Engagement Requirements & Contracting Standards
                </p>
            </div>

            {/* Core Principle */}
            <div className="space-y-4 pt-4 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Core Principle</h2>
                <p className="text-[1.05rem] text-slate-200">
                    Custom software is an accelerator for established operational mechanics, not a substitute for business discovery. We partner with founders and organizations that are fully prepared to build, launch, and execute.
                </p>
            </div>

            {/* The Readiness Checklist */}
            <div className="space-y-4 pt-4 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">The Readiness Checklist (4 Gates to Enter Contracting)</h2>
                <p className="text-[1.05rem] text-slate-200">
                    Before we issue a custom Scope of Work (SOW) or Master Services Agreement (MSA), every engagement must satisfy the following four operational gates:
                </p>
            </div>

            {/* Gate 1 */}
            <div className="space-y-4 pt-4 border-l-4 border-indigo-500/50 pl-6 bg-indigo-500/5 p-4 rounded">
                <h3 className="text-xl font-bold text-indigo-300 tracking-tight">1. Data & Sourcing Readiness</h3>
                
                <div className="space-y-2">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Requirement:</p>
                    <p className="text-slate-200">
                        The client has identified, verified, or secured access to all required production datasets, content feeds, or third-party APIs needed for application functionality.
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">The Rule:</p>
                    <p className="text-slate-200">
                        Developer time is reserved exclusively for engineering, architecture, and integration—not manual data entry, data scraping, or content discovery.
                    </p>
                </div>
            </div>

            {/* Gate 2 */}
            <div className="space-y-4 pt-4 border-l-4 border-indigo-500/50 pl-6 bg-indigo-500/5 p-4 rounded">
                <h3 className="text-xl font-bold text-indigo-300 tracking-tight">2. Operational & Business Mechanics</h3>
                
                <div className="space-y-2">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Requirement:</p>
                    <p className="text-slate-200">
                        The client&apos;s core business model, workflow logistics, regulatory compliance, and day-to-day operations are fully defined in the real world.
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">The Rule:</p>
                    <p className="text-slate-200">
                        Software automates existing workflows; it does not invent them. If operational discovery is still required, the client must complete an independent discovery phase before engineering contracts are drafted.
                    </p>
                </div>
            </div>

            {/* Gate 3 */}
            <div className="space-y-4 pt-4 border-l-4 border-indigo-500/50 pl-6 bg-indigo-500/5 p-4 rounded">
                <h3 className="text-xl font-bold text-indigo-300 tracking-tight">3. Single Decision-Maker & Technical Alignment</h3>
                
                <div className="space-y-2">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Requirement:</p>
                    <p className="text-slate-200">
                        The client has designated a single primary point of contact with direct authority to sign agreements, approve milestones, and make technical product decisions.
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">The Rule:</p>
                    <p className="text-slate-200">
                        Engagement reviews must stay focused on milestone acceptance criteria, agreed user flows, and technical deliverables—not fundamental scope pivots mid-stream.
                    </p>
                </div>
            </div>

            {/* Gate 4 */}
            <div className="space-y-4 pt-4 border-l-4 border-indigo-500/50 pl-6 bg-indigo-500/5 p-4 rounded">
                <h3 className="text-xl font-bold text-indigo-300 tracking-tight">4. Secured Budget & Liquidity</h3>
                
                <div className="space-y-2">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Requirement:</p>
                    <p className="text-slate-200">
                        Liquid capital for the upfront initiation deposit (e.g., 50%) is allocated and accessible for immediate disbursement upon contract execution.
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">The Rule:</p>
                    <p className="text-slate-200">
                        Legal and contract negotiations will not proceed until budget readiness is confirmed.
                    </p>
                </div>
            </div>

            {/* Back to Home */}
            <div className="pt-8 flex items-center space-x-2">
                <Link href="/" className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                    <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
};

export default ReadyToBuildPolicyContent;
