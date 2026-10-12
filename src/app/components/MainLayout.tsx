'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
      { threshold: 0.1, rootMargin: `0px 0px ${window.innerWidth < 768 ? '0px' : '-60px'} 0px` }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Shared scroll-to-Y animation. Any caller that goes through this (nav
  // clicks, back-to-top button) claims the shared cancellation token, so it
  // always wins over a stale/lingering wheel-eased animation.
  const scrollToY = useCallback((end: number, resetHash = false) => {
    const start = window.scrollY;
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
      } else if (resetHash) {
        window.history.replaceState(null, '', '/');
      }
    };

    requestAnimationFrame(step);
  }, []);

  const smoothScrollTo = useCallback((target: HTMLElement) => {
    const end = target.getBoundingClientRect().top + window.scrollY;
    scrollToY(end, true);
  }, [scrollToY]);

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
  }, [isHomePage, smoothScrollTo]);

  const navItems = [
    { name: 'Home', url: '/#home' },
    {
      name: 'Services',
      url: '/#services',
      children: [
        { name: 'Systems-as-a-Service', url: '/#services-systems', description: 'Dashboards, inventory, logistics & custom portals.' },
        { name: 'Local-First & Edge Native Apps', url: '/#services-edge', description: 'Zero-latency offline engines, mobile-first SQLite.' },
        { name: 'White-Label Enterprise Dashboards', url: '/#services-dashboards', description: 'Modular admin systems & custom workflows.' },
      ],
    },
    {
      name: 'Portfolio',
      url: '/portfolio',
      children: [
        { name: 'Middleman Motors', url: '', description: 'Full-stack automotive inventory platform.' },
        { name: 'Pivot Quest Analytics', url: '', description: 'Web performance & Core Web Vitals monitor.' },
        { name: 'CEARCO Chemicals', url: '', description: 'Specialty chemical & e-commerce storefront.' },
        { name: 'Noel Customs', url: '', description: 'Custom apparel Shopify storefront.' },
        { name: 'Dr. Parris Gainer', url: '', description: 'Consulting & mental health advocacy portal.' },
        { name: 'Jamil Cleaning Services', url: '', description: 'Commercial & residential booking platform.' },
      ],
    },
    {
      name: 'About',
      url: '/about/jamil-matheny',
      children: [
        { name: 'Jamil Matheny', url: '/about/jamil-matheny', description: 'Founder of Majestik Magik — engineer, entrepreneur, builder.' },
      ],
    },
    { name: 'Contact', url: '/#contact' },
    { name: 'Pivot Quest', url: 'https://app.majestikmagik.dev/', external: true },
  ];

  const isPolicyPage = [
    '/privacy-policy',
    '/terms-of-service',
    '/refund-policy',
    '/cookie-policy',
    '/intellectual-property-policy',
    '/cyber-security-policy',
    '/ready-to-build-policy',
  ].includes(pathname);

  // Let any component (e.g. the floating "Back to Top" button) request a
  // cancellation-aware scroll without needing direct access to the shared ref.
  useEffect(() => {
    const onScrollToTop = () => scrollToY(0);
    window.addEventListener('app:scroll-to-top', onScrollToTop);
    return () => window.removeEventListener('app:scroll-to-top', onScrollToTop);
  }, [scrollToY]);

  useEffect(() => {
    const onScrollToId = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const el = document.getElementById(id);
      if (el) smoothScrollTo(el);
    };
    window.addEventListener('app:scroll-to', onScrollToId);
    return () => window.removeEventListener('app:scroll-to', onScrollToId);
  }, [smoothScrollTo]);

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