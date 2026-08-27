'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '../components/Icons';

/**
 * Content Component for the Cyber Security Policy
 * This contains only the text and formatting for the policy itself.
 */
const CyberSecurityPolicyContent: React.FC = () => {
    return (
        <div className="scroll-animate text-slate-300 leading-relaxed space-y-6">
            <div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent mb-2">
                    Cyber Security Policy
                </h1>
                <p className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                    Our Commitment to Your Website Security
                </p>
            </div>

            <p className="text-[1.05rem] text-slate-200">
                At{' '}
                <a href="https://majestikmagik.dev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
                    majestikmagik.dev
                </a>
                , we understand that the security of your website is paramount. Just like a well-crafted spell requires careful protection, your online presence deserves robust defenses against the ever-evolving landscape of cyber threats. We want to assure you that we are committed to employing diligent practices and technologies to safeguard your website and the information it holds.
            </p>

            {/* Section 1 */}
            <div className="space-y-4 pt-4 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Our Proactive Security Measures</h2>
                <p>Here&apos;s a glimpse into our ongoing efforts to protect your digital realm from various cyber threats:</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                    <li><strong className="text-slate-200">Protection Against SQL Injection Attacks:</strong> We implement secure coding practices and input validation techniques to prevent malicious SQL queries from being injected into our databases, safeguarding your website&apos;s data integrity.</li>
                    <li><strong className="text-slate-200">Defense Against Cross-Site Scripting (XSS) Attacks:</strong> We employ measures to sanitize user input and encode output to prevent attackers from injecting malicious scripts into your website, protecting your visitors from potential harm.</li>
                    <li><strong className="text-slate-200">Regular Security Assessments:</strong> We conduct periodic reviews and assessments of our systems and infrastructure to identify potential vulnerabilities.</li>
                    <li><strong className="text-slate-200">Industry-Standard Encryption:</strong> We utilize robust encryption methods (like HTTPS/TLS) to protect sensitive data in transit.</li>
                    <li><strong className="text-slate-200">Firewall Protection:</strong> Our systems are fortified with firewalls that act as barriers against unauthorized access.</li>
                    <li><strong className="text-slate-200">Malware Scanning and Prevention:</strong> We implement measures to detect and prevent the introduction of malicious software.</li>
                    <li><strong className="text-slate-200">Secure Hosting Environment:</strong> We partner with reputable hosting providers that maintain stringent security protocols.</li>
                    <li><strong className="text-slate-200">Regular Software Updates and Patching:</strong> We diligently keep our software and systems up-to-date with the latest security updates.</li>
                    <li><strong className="text-slate-200">Access Controls:</strong> We implement strict access controls to limit who can access sensitive areas of our systems.</li>
                    <li><strong className="text-slate-200">Data Backup and Recovery:</strong> We maintain regular backups of critical data to ensure business continuity.</li>
                    <li><strong className="text-slate-200">Continuous Monitoring:</strong> Our systems are continuously monitored for suspicious activity and potential indicators of compromise.</li>
                </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Your Role in Maintaining Security</h2>
                <p>While we are dedicated to providing a secure environment, website security is a shared responsibility. We encourage you to:</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                    <li><strong className="text-slate-200">Utilize Two-Factor Authentication (2FA):</strong> This significantly reduces the risk of unauthorized access on compatible platforms.</li>
                    <li><strong className="text-slate-200">Regularly Update Your Passwords:</strong> It&apos;s highly important to refresh your credentials periodically.</li>
                    <li><strong className="text-slate-200">Consider No-Password Email-Only Authentication:</strong> Where available, this method streamlines your secure log-in sequence and completely eliminates brute-force password risks.</li>
                    <li>Use strong, globally unique combinations for every account.</li>
                    <li>Keep your hardware operating systems and web browsers updated to their latest stable patches.</li>
                    <li>Maintain sharp vigilance against suspicious unsolicited emails and strange links (phishing).</li>
                </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Our Ongoing Commitment</h2>
                <p>
                    The digital landscape is constantly changing, and so too are the tactics employed by cyber attackers. We are committed to staying informed about the latest security threats and adapting our practices accordingly. Our goal is to provide you with a reliable and secure platform for your online endeavors.
                </p>
            </div>

            {/* Section 4 */}
            <div className="pt-6 border-t border-indigo-500/10">
                <p className="text-slate-400 text-sm">
                    If you have any questions or concerns about our security practices, please do not hesitate to contact our core security team at{' '}
                    <a href="mailto:contact@majestikmagik.dev" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
                        contact@majestikmagik.dev
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

/**
 * The main page component that wraps the content with a layout.
 * This is the component that Next.js will render for the page.
 */
const CyberSecurityPolicyPage = () => {
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
                        <CyberSecurityPolicyContent />
                    </article>
                </div>
            </main>
        </div>
    );
};

export default CyberSecurityPolicyPage;