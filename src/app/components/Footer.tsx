'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);



const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-500">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-500">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

interface FooterProps {
  isAlwaysVisible?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isAlwaysVisible }) => {
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  return (
    <footer id="contact" aria-labelledby="contact-heading" className="relative z-0 text-slate-400 border-t border-[#334155] font-sans overflow-hidden" style={{ background: 'rgb(15, 23, 42)' }}>

      {/* Dynamic ambient radial core glow - Base layer (z-10) */}
      <div
        className="absolute inset-0 z-10 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 80%, rgba(26, 81, 244, 0.15) 0%, rgba(2, 6, 23, 0) 65%)',
        }}
      ></div>

      {/* High-end hardware processor micro-dot matrix pattern - Stacked safely on top (z-11) */}
      <div
        className="absolute inset-0 z-11 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="w-full relative px-4 md:px-6 py-10 md:py-16 mx-auto z-20">

        {/* Top Contact Bar styled like node routing configurations */}
        <div className={`mx-auto grid grid-cols-1 gap-8 mb-14 md:grid-cols-2 justify-items-stretch ${isAlwaysVisible ? 'is-visible' : ''}`}>

          <div className="flex items-start space-x-4 p-4 rounded-lg bg-[#1e293b] border border-[#334155]">
            <div className="mt-1"><PhoneIcon /></div>
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Voice Telemetry</p>
              <p className="text-sm mt-1"><a href="tel:8043627561" className="text-slate-300 transition-colors hover:text-indigo-400 font-mono">(804) 362-7561</a></p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-lg bg-[#1e293b] border border-[#334155]">
            <div className="mt-1"><EmailIcon /></div>
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Direct Signal Packet</p>
              <p className="text-sm mt-1">
                <a href="mailto:contact@majestikmagik.dev" className="hover:text-indigo-400 transition-colors py-1 block font-mono">
                  contact@majestikmagik.dev
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#334155] mb-12"></div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 justify-items-stretch">
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">System Core Links</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm w-full">
              <li><a href="/privacy-policy" className="hover:text-indigo-400 transition-colors py-1 block font-mono text-sm">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-indigo-400 transition-colors py-1 block font-mono text-sm">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="hover:text-indigo-400 transition-colors py-1 block font-mono text-sm">Cookie Policy</a></li>
              <li><a href="/refund-policy" className="hover:text-indigo-400 transition-colors py-1 block font-mono text-sm">Refund Policy</a></li>
              <li><a href="/intellectual-property" className="hover:text-indigo-400 transition-colors py-1 block font-mono text-sm">Intellectual Property</a></li>
              <li><a href="/cyber-security-policy" className="hover:text-indigo-400 transition-colors py-1 block font-mono text-sm">Cyber Security</a></li>
              <li><a href="/sitemap.xml" className="hover:text-indigo-400 transition-colors py-1 block font-mono text-sm font-mono text-sm">Sitemap</a></li>
              <li><a href="/faq" className="hover:text-indigo-400 transition-colors py-1 block font-mono text-sm">FAQ</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start space-y-6">
            <div>
              <h3 className="mb-3 text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Social Links</h3>
              <ul className="space-x-5 flex items-center text-lg text-slate-500">
                <li><a href="https://www.facebook.com/majestikmagik/" target="_blank" rel="noopener noreferrer" aria-label="Visit Majestik Magik on Facebook" className="hover:text-indigo-400 transition-colors"><FacebookIcon /></a></li>
                <li><a href="https://www.instagram.com/majestikmagik/" target="_blank" rel="noopener noreferrer" aria-label="Visit Majestik Magik on Instagram" className="hover:text-indigo-400 transition-colors"><InstagramIcon /></a></li>
                <li><a href="https://github.com/majestikmagik" target="_blank" rel="noopener noreferrer" aria-label="Visit Majestik Magik on Github" className="hover:text-indigo-400 transition-colors"><GitHubIcon /></a></li>
                <li><a href="https://www.linkedin.com/company/majestikmagik/" target="_blank" rel="noopener noreferrer" aria-label="Visit Majestik Magik on LinkedIn" className="hover:text-indigo-400 transition-colors"><LinkedInIcon /></a></li>
              </ul>
            </div>

            <div className="w-full border-t border-slate-900 pt-6">
              <h3 className="mb-4 text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Hardware & Platform Partners</h3>
              <ul className="flex flex-wrap items-center gap-10 opacity-40 hover:opacity-75 transition-opacity duration-300">
                <li>
                  <Image
                    src="/img/partners/wpengine_member-badge.webp"
                    alt="WP Engine Partner"
                    width={160}
                    height={80}
                    loading="lazy"
                    className="h-20 w-auto grayscale object-contain"
                  />
                </li>
                <li>
                  <Image
                    src="/img/partners/gcp-logo.webp"
                    alt="Google Cloud Startup"
                    width={220}
                    height={160}
                    loading="lazy"
                    className="h-24 w-auto grayscale object-contain"
                  />
                </li>
                <li>
                  <Image
                    src="/img/partners/aws-activate-logo_white.webp"
                    alt="AWS Activate Partner"
                    width={240}
                    height={100}
                    loading="lazy"
                    className="h-12 w-auto grayscale object-contain"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar built inside full deep canvas layout */}
      <div className="relative border-t border-[#334155] py-6 z-20" style={{ background: 'rgb(15, 23, 42)' }}>
        <div className="w-full px-6 mx-auto flex flex-col items-center justify-between text-xs font-mono text-slate-400 md:flex-row">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Majestik Magik, Inc. All nodes protected.
          </p>

          {isClient && isDesktop && (
            <div className="text-center md:text-right max-w-md">
              <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6a67624122933556471da38c" data-style-height="52px" data-style-width="100%" data-token="d76c4f8c-d0c3-4fa3-a72b-cc2de3857170">
                <a href="https://www.trustpilot.com/review/majestikmagik.dev" target="_blank" rel="noopener">Trustpilot</a>
              </div>

              <div className="mt-2 text-[11px] leading-relaxed text-slate-400 italic">
                “Majestik Magik didn’t just build a website - they built a platform that empowers my voice and mission.” <span className="text-slate-400 not-italic font-sans block mt-0.5">– Dr. Parris Gainer</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;