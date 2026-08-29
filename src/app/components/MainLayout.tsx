'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Scroll-animate + per-section blur observer
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-animate, .stagger-children, .scroll-blur');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          e.target.classList.remove('is-blurred');
        } else {
          e.target.classList.remove('is-visible');
          e.target.classList.add('is-blurred');
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

// On homepage mount, scroll to stored section target
  useEffect(() => {
    if (!isHomePage) return;
    const target = sessionStorage.getItem('scrollTo');
    if (!target) return;
    sessionStorage.removeItem('scrollTo');
    // Small delay to let the page render
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) smoothScrollTo(el);
    }, 100);
  }, [isHomePage]);

  const navItems = [
    { name: 'Home', url: '/#home' },
    { name: 'Testimonials', url: '/#testimonials' },
    { name: 'Services', url: '/#services' },
    { name: 'Pricing', url: '/#services-pricing' },
    { name: 'About', url: '/#about' },
    { name: 'FAQ', url: '/#faq' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Pivot Quest Login', url: 'https://app.majestikmagik.dev/', external: true },
  ];

  const isPolicyPage = [
    '/privacy-policy',
    '/terms-of-service',
    '/refund-policy',
    '/cookie-policy',
    '/intellectual-property-policy',
    '/cyber-security-policy',
  ].includes(pathname);

  const smoothScrollTo = (target: HTMLElement) => {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const duration = 1200;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + (end - start) * easeInOutCubic(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        window.history.replaceState(null, '', '/');
      }
    };

    requestAnimationFrame(step);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; url: string; external?: boolean }) => {
    if (item.external) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      e.preventDefault();
      return;
    }

    e.preventDefault();
    const [path, hash] = item.url.split('#');

    if (hash && isHomePage) {
      const el = document.getElementById(hash);
      if (el) smoothScrollTo(el);
    } else if (hash && !isHomePage) {
      sessionStorage.setItem('scrollTo', hash);
      router.push(path || '/');
    } else {
      router.push(item.url);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navItems={navItems}
        handleNavClick={handleNavClick}
      />
      <main key={pathname}><div className="page-enter">{children}</div></main>
      <Footer isAlwaysVisible={isPolicyPage} />
      <CookieBanner />
    </div>
  );
}