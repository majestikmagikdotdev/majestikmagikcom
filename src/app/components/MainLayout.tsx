'use client';

import React, { useState, useEffect } from 'react'; 
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

// Structural CSS stays upfront

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  // Non-blocking asynchronous loading of keyframes — desktop only (mobile doesn't use these animations)
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/animations.css';
    document.head.appendChild(link);
  }, []);

  const navItems = [
    { name: 'Home', url: '/#home' },
    // { name: 'Core Engine', url: '/#core-engine' },
    { name: 'Services', url: '/#services' },
    { name: 'About', url: '/#about' },    
    { name: 'Testimonials', url: '/#testimonials' },
    { name: 'FAQ', url: '/#faq' },
    { name: 'Contact', url: '/#contact' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Login', url: 'https://app.majestikmagik.dev/dashboard', external: true }
  ];

  const pathname = usePathname();

  const isPolicyPage = [
    '/privacy-policy',
    '/terms-of-service',
    '/refund-policy',
    '/cookie-policy',
    '/intellectual-property-policy',
    '/cyber-security-policy'
  ].includes(pathname);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string, url: string, external?: boolean }) => {
    if (item.external) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      e.preventDefault();
      return;
    }

    e.preventDefault();
    const targetId = item.url.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (item.url.startsWith('/')) {
        window.location.href = item.url;
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navItems={navItems}
        handleNavClick={handleNavClick}
      />

      <main>
        {children}
      </main>

      <Footer isAlwaysVisible={isPolicyPage} />

      <CookieBanner />
    </div>
  );
}