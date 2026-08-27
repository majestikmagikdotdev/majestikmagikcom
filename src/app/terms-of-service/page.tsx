'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '../components/Icons';

/**
 * Content Component for the Terms of Service
 */
const TermsOfServiceContent: React.FC = () => {
    return (
        <div className="scroll-animate text-slate-300 leading-relaxed space-y-6">
            <div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent mb-2">
                    Terms of Service
                </h1>
                <p className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                    Last Updated: July 14, 2026
                </p>
            </div>

            <p className="text-[1.05rem] text-slate-200">
                These Terms of Service (&quot;Terms&quot;) govern your use of the website{' '}
                <a href="https://majestikmagik.dev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
                    https://majestikmagik.dev
                </a>{' '}
                (the &quot;Site&quot;) and the website design and development services provided by Majestik Magik (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) (the &quot;Services&quot;). By accessing the Site or engaging our Services, you (&quot;you&quot; or &quot;client&quot;) agree to be bound by these Terms.
            </p>

            {/* Section 1 */}
            <div className="space-y-4 pt-4 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">1. Acceptance of Terms</h2>
                <p>
                    By using our Site or engaging our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site or engage our Services.
                </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">2. Services Provided</h2>
                <p>Majestik Magik offers website design and development services, which may include but are not limited to:</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                    <li>Website design (including mockups and visual concepts)</li>
                    <li>Website development (coding, implementation)</li>
                    <li>WordPress theme installation and customization</li>
                    <li>Plugin integration and configuration</li>
                    <li>Website maintenance and support</li>
                    <li>Training on website content management</li>
                </ul>
                <p className="text-sm text-slate-400">The specific details and scope of the Services will be outlined in a separate agreement or proposal provided to you.</p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">3. Majestik Core Service Terms</h2>
                <p>In addition to our website services, Majestik Magik provides Pivot Quest, an AI-powered platform designed to enhance business operations. The following terms specifically apply to your use of Majestik Core:</p>

                <h3 className="text-lg font-semibold text-indigo-400 uppercase tracking-wider text-xs pt-2">Majestik Core Usage Guidelines</h3>
                <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                    <li><strong className="text-slate-200">Permitted Use:</strong> Majestik Core may be used solely for lawful business purposes in accordance with applicable laws and regulations.</li>
                    <li><strong className="text-slate-200">Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your Majestik Core account credentials and for all activities that occur under your account.</li>
                    <li><strong className="text-slate-200">Data Input:</strong> You must ensure that any data, content, or information you input into Majestik Core is accurate, legal, and does not violate third-party rights.</li>
                    <li><strong className="text-slate-200">AI Output Review:</strong> While Majestik Core strives for accuracy, you acknowledge that AI-generated content may contain errors or inaccuracies. You agree to review and verify all AI-generated outputs before relying on them for business decisions.</li>
                    <li><strong className="text-slate-200">Prohibited Activities:</strong> You may not use Majestik Core to generate harmful, illegal, discriminatory, or misleading content, or for any purpose that violates these Terms.</li>
                </ul>

                <h3 className="text-lg font-semibold text-indigo-400 uppercase tracking-wider text-xs pt-4">Majestik Core Data and Privacy</h3>
                <p>Your use of Majestik Core involves the processing of data through our AI systems. You retain ownership of your data but grant us the necessary rights to process it for providing the Majestik Core service. Please refer to our Privacy Policy for detailed information about data handling practices.</p>
                
                <div className="mt-2 p-4 bg-amber-500/5 border-l-4 border-amber-500 rounded-r-xl text-slate-300 text-sm space-y-1">
                    <p className="font-semibold text-amber-400 uppercase tracking-wider text-xs">Important Notice</p>
                    <p><strong>Majestik Core conversations and outputs may be reviewed by our team for quality assurance and service improvement purposes.</strong> Do not input sensitive personal information, financial data, or confidential business secrets that you do not want reviewed.</p>
                </div>

                <h3 className="text-lg font-semibold text-indigo-400 uppercase tracking-wider text-xs pt-4">Majestik Core Availability and Updates</h3>
                <p>Majestik Core is provided on an &quot;as available&quot; basis. We may update, modify, or discontinue features of Majestik Core at our discretion. We will make reasonable efforts to provide advance notice of significant changes that may affect your use of the service.</p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">4. Client Responsibilities</h2>
                <p>To enable us to provide the Services effectively, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Provide us with clear and timely instructions, information, and materials necessary for the project.</li>
                    <li>Ensure that you have the legal right to use any content, images, trademarks, or other materials you provide to us.</li>
                    <li>Review and provide feedback on our work promptly.</li>
                    <li>Meet agreed-upon deadlines for providing information and approvals.</li>
                    <li>Pay our invoices according to the agreed-upon payment terms.</li>
                </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">5. Payment Terms</h2>
                <p>The fees for our Services will be outlined in a separate agreement or proposal. Unless otherwise agreed in writing, payment terms are as follows:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>A deposit may be required to commence work on a project.</li>
                    <li>Interim payments may be required at agreed-upon milestones.</li>
                    <li>The final balance is due upon completion of the project or as otherwise specified.</li>
                    <li>Payments are to be made in the currency specified in the agreement. Late payments may be subject to interest charges as permitted by applicable law in the United States.</li>
                </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">6. Intellectual Property</h2>
                <ul className="list-disc list-inside space-y-2 pl-2">
                    <li><strong className="text-slate-200">Client Content:</strong> You retain ownership of the content you provide to us (text, images, etc.). You grant us a non-exclusive license to use, reproduce, and modify this content solely for the purpose of providing the Services.</li>
                    <li><strong className="text-slate-200">Developed Work:</strong> Upon full payment of all agreed-upon fees, you will own the final website design and development work, excluding any third-party components (such as themes, plugins, or stock images) which may have their own licensing terms. We retain the right to showcase the completed project in our portfolio.</li>
                    <li><strong className="text-slate-200">Our Tools and Templates:</strong> We retain ownership of any proprietary tools, templates, code libraries, and processes used in the provision of the Services.</li>
                </ul>
            </div>

            {/* Section 7 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">7. Project Timeline</h2>
                <p>
                    Project timelines will be estimated and communicated in a separate agreement or proposal. These timelines are dependent on various factors, including the complexity of the project, the timely provision of materials and feedback from the client, and unforeseen circumstances. We will make reasonable efforts to adhere to the agreed-upon timelines but are not liable for delays outside of our direct control.
                </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">8. Warranties and Disclaimer</h2>
                <p>
                    We warrant that the Services will be performed in a professional and workmanlike manner. However, to the maximum extent permitted by applicable law in the United States, we disclaim all other warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                    We do not warrant that the Site or the developed website will be error-free, secure, or continuously available. You acknowledge that the internet and web technologies are subject to limitations and potential disruptions.
                </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">9. Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by applicable law in the United States, Majestik Magik shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or relating to your use of the Site or our Services, even if we have been advised of the possibility of such damages. Our total liability to you for any claim arising out of or relating to these Terms or our Services shall be limited to the total amount of fees paid by you to us for the specific Services in question.
                </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">10. Indemnification</h2>
                <p>You agree to indemnify and hold harmless Majestik Magik, its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Your breach of these Terms.</li>
                    <li>Your use of the Site or our Services.</li>
                    <li>Any content or materials you provide to us.</li>
                    <li>Your infringement of any intellectual property rights of third parties.</li>
                </ul>
            </div>

            {/* Section 11 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">11. Termination</h2>
                <p>
                    Either party may terminate the Services upon written notice if the other party materially breaches these Terms and fails to cure such breach within a reasonable period (as defined by applicable law in the United States) after receiving written notice of the breach. We may also terminate the Services for convenience upon reasonable notice to you. Upon termination, you shall pay us for all Services performed up to the date of termination.
                </p>
            </div>

            {/* Section 12 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">12. Governing Law and Dispute Resolution</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising out of or relating to these Terms or our Services shall be subject to the exclusive jurisdiction of the courts of the United States, unless otherwise agreed in writing.
                </p>
            </div>

            {/* Section 13 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">13. Entire Agreement</h2>
                <p>
                    These Terms, together with any separate agreements or proposals provided to you, constitute the entire agreement between you and Majestik Magik regarding the subject matter hereof and supersede all prior or contemporaneous communications and proposals, whether oral or written.
                </p>
            </div>

            {/* Section 14 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">14. Modifications to Terms</h2>
                <p>
                    We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site or engagement of our Services after the posting of revised Terms constitutes your acceptance of the changes. It is your responsibility to review these Terms periodically.
                </p>
            </div>

            {/* Section 15 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">15. Contact Us</h2>
                <p>If you have any questions or concerns about these Terms of Service, please contact us at:</p>
                <div className="p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-xl inline-block">
                    <p className="font-bold text-slate-100">Majestik Magik</p>
                    <p className="text-slate-300 text-sm">405 E. Laburnum Ave Ste #3</p>
                    <p className="text-slate-300 text-sm mb-2">Richmond, VA 23222</p>
                    <div className="space-y-1">
                        <a href="mailto:contact@majestikmagik.dev" className="text-sm text-indigo-400 hover:text-indigo-300 underline block">
                            contact@majestikmagik.dev
                        </a>
                        <a href="tel:8043627561" className="text-sm text-indigo-400 hover:text-indigo-300 underline block">
                            804.362.7561
                        </a>
                    </div>
                </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">By using our Site or engaging our Services, you signify your acceptance of these Terms of Service.</p>
        </div>
    );
};


/**
 * The main page component that wraps the content with a layout.
 */
const TermsOfServicePage = () => {
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
                        <TermsOfServiceContent />
                    </article>
                </div>
            </main>
        </div>
    );
};

export default TermsOfServicePage;