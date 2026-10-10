'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '../components/Icons';

const PrivacyPolicyContent: React.FC = () => {
    return (
        <div className="page-body-font scroll-animate text-slate-300 leading-relaxed m-6 space-y-6 pt-24 md:pt-32">
            <div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent mb-2">
                    Privacy Policy
                </h1>
                <p className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                    Last Updated: October 10, 2026
                </p>
            </div>

            <p className="text-[1.05rem] text-slate-200">
                Majestik Magik (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) builds local-first software designed to respect your hardware, your privacy, and your ownership of data. This Privacy Policy describes how information is handled across our mobile application Signal³ (the &quot;App&quot;) and our website,{' '}
                <a href="https://majestikmagik.dev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
                    https://majestikmagik.dev
                </a>{' '}
                (the &quot;Site&quot;).
            </p>
            <p className="text-slate-300">By using our App or Site, you agree to the terms outlined in this policy.</p>

            {/* Section 1 */}
            <div className="space-y-4 pt-4 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">1. Signal³ Mobile Application (Local-First Data Policy)</h2>
                <p>
                    Signal³ is engineered as an offline-native, local-first application. We believe your daily focus tasks, schedules, and financial bill tracking belong strictly to you—not on our servers.
                </p>
                <ul className="list-disc list-inside space-y-3 pl-2">
                    <li>
                        <strong className="text-slate-200">Zero Cloud Storage / On-Device Data:</strong> All tasks, bills, schedules, voice notes, and preferences created inside Signal³ are stored locally on your physical device hardware (using local SQLite storage). We do not collect, transmit, host, monitor, or back up your personal application data to external servers.
                    </li>
                    <li>
                        <strong className="text-slate-200">Data Ownership &amp; Management:</strong> Because your data resides solely on your device, you have 100% control and ownership over it.
                        <ul className="list-disc list-inside space-y-2 pl-6 mt-2 text-slate-300">
                            <li>If you uninstall the App or clear your device application data, your stored information will be permanently deleted.</li>
                            <li>We cannot restore lost data, as we never hold copies or backups of your database.</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-slate-200">On-Device Voice Capture:</strong> If you use voice capture features, audio processing occurs entirely on your device using native operating system tools. No audio recordings or voice transcripts are transmitted to us.
                    </li>
                    <li>
                        <strong className="text-slate-200">Calendar Integration:</strong> If you enable Google Calendar integration, Signal³ interacts directly with your calendar locally on your device via standard API protocols to add or update events. We do not access, sell, or collect your calendar history.
                    </li>
                </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">2. Information Handled via Google Play Billing &amp; RevenueCat</h2>
                <p>
                    While Signal³ operates offline for core productivity features, subscriptions and purchases are processed via official store payment infrastructures:
                </p>
                <ul className="list-disc list-inside space-y-3 pl-2">
                    <li>
                        <strong className="text-slate-200">Subscription &amp; Purchase Management:</strong> When you purchase a subscription or lifetime access through Google Play, transaction details (such as subscription status, renewal dates, and anonymous user IDs) are validated using RevenueCat and Google Play Billing.
                    </li>
                    <li>
                        <strong className="text-slate-200">Financial &amp; Payment Data:</strong> Majestik Magik does not process, collect, or store your credit card details, bank account numbers, or billing addresses. All payment transactions are handled securely by Google Play.
                    </li>
                </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">3. Website &amp; Support Interactions (https://majestikmagik.dev)</h2>
                <p>If you interact with our Site, submit support inquiries, or reach out to us directly:</p>
                <ul className="list-disc list-inside space-y-3 pl-2">
                    <li>
                        <strong className="text-slate-200">Direct Communications:</strong> When you email us or fill out a support request, we collect your contact information (such as email address and name) and the contents of your message to respond to your inquiry.
                    </li>
                    <li>
                        <strong className="text-slate-200">Log Data &amp; Web Analytics:</strong> Our web servers automatically log standard web usage data (IP address, browser type, referring pages, date/time stamps) to ensure server security and performance.
                    </li>
                    <li>
                        <strong className="text-slate-200">Cookies:</strong> Our Site may use basic cookies to optimize user navigation and performance. You can control cookie preferences directly through your web browser.
                    </li>
                </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">4. Third-Party Services</h2>
                <p>
                    We do not sell, trade, or rent your personal data to third parties. We only integrate essential, privacy-compliant service frameworks to support app operations:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                    <li><strong className="text-slate-200">Google Play Services:</strong> For app delivery, in-app purchases, and optional calendar synchronization.</li>
                    <li><strong className="text-slate-200">RevenueCat:</strong> For verifying active subscription status and receipt validation.</li>
                </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-3 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">5. Children&apos;s Privacy</h2>
                <p>
                    Our App and Site are not directed to children under the age of 13 (or 16 in certain jurisdictions). Signal³ does not knowingly collect or solicit personal information from children. Since the App stores data locally on the user&apos;s device, no personal profiles are harvested or maintained.
                </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">6. Your Rights &amp; Choices</h2>
                <p>Because Signal³ stores data locally on your device, you can exercise your data rights directly at any time:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                    <li><strong className="text-slate-200">Access &amp; Portability:</strong> Your data is accessible inside the App at all times.</li>
                    <li><strong className="text-slate-200">Deletion:</strong> You can wipe your data instantly by clearing the App&apos;s storage via your Android device settings or by uninstalling the application.</li>
                </ul>
            </div>

            {/* Section 7 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">7. Data Protection &amp; Security</h2>
                <p>
                    We prioritize the security of user data. Any sensitive user data, including Google OAuth tokens and calendar information retrieved via Google API Services, is stored using industry-standard security mechanisms, including local end-to-end encryption (SQLCipher AES-256) and secure HTTPS/TLS transport protocols. Data is never exposed or transmitted in unencrypted formats.
                </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">8. Google Data Retention &amp; Deletion</h2>
                <p>
                    We do not retain or store user Google data on remote servers. All OAuth tokens and synced calendar events reside locally on the user&apos;s client device. Users may delete or revoke access to their Google user data at any time by:
                </p>
                <ul className="list-disc list-inside space-y-3 pl-2">
                    <li>
                        <strong className="text-slate-200">Disconnecting within the App:</strong> Disconnecting your Google account within the application settings instantly purges all local cached tokens and calendar data from the device.
                    </li>
                    <li>
                        <strong className="text-slate-200">Revoking via Google:</strong> Revoking application permissions directly through the{' '}
                        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">Google Security Settings</a>{' '}
                        page. Upon revocation, all associated Google user data is immediately and permanently deleted from local app storage.
                    </li>
                </ul>
            </div>

            {/* Section 9 */}
            <div className="space-y-3 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">9. Changes to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time to reflect changes in our software or legal requirements. Updated versions will be posted on this page with an updated &quot;Last Updated&quot; date.
                </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3 pt-6 border-t border-indigo-500/10">
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">10. Contact Us</h2>
                <p>If you have questions about this Privacy Policy or our local-first software philosophy, please contact us:</p>
                <div className="p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-xl inline-block min-w-[200px]">
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
                <p className="mt-4 text-xs text-slate-400">By using our App or Site, you consent to the terms of this Privacy Policy.</p>
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

export default PrivacyPolicyContent;
