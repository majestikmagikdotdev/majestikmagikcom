'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  // Shared cancellation token so only one scroll animation (nav-click or
  // wheel-eased) ever drives window.scrollTo at a time.
  const scrollAnimationIdRef = useRef(0);
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

  // Eased/delayed smooth scrolling for mouse wheel input (desktop only)
  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarsePointer) return;

    let rafId: number | null = null;
    let isAnimating = false;
    let target = window.scrollY;

    const getMaxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const animate = (myId: number) => {
      // Another animation (e.g. a nav-click smooth scroll) took over — stop.
      if (scrollAnimationIdRef.current !== myId) {
        isAnimating = false;
        rafId = null;
        return;
      }
      const current = window.scrollY;
      const diff = target - current;
      if (Math.abs(diff) < 0.5) {
        window.scrollTo(0, target);
        isAnimating = false;
        rafId = null;
        return;
      }
      window.scrollTo(0, current + diff * 0.05);
      rafId = requestAnimationFrame(() => animate(myId));
    };

    const onWheel = (e: WheelEvent) => {
      // Let native scrolling happen inside elements that manage their own overflow
      const scrollableParent = (e.target as HTMLElement)?.closest?.(
        '[data-native-scroll], .overflow-y-auto, .overflow-auto, textarea'
      );
      if (scrollableParent) return;

      e.preventDefault();
      // Always resync target from the live scroll position when not mid-animation
      // so scrollbar drags or other scroll sources never get overwritten/fought.
      const base = isAnimating ? target : window.scrollY;
      target = Math.min(getMaxScroll(), Math.max(0, base + e.deltaY));
      if (!isAnimating) {
        isAnimating = true;
        const myId = ++scrollAnimationIdRef.current;
        rafId = requestAnimationFrame(() => animate(myId));
      }
    };

    // If the user scrolls via the scrollbar (or any non-wheel input) while our
    // eased animation isn't running, there's nothing to resync — native scroll
    // just works. This listener exists only to cancel a stale wheel animation
    // if some other input source moves the page unexpectedly.
    const onScroll = () => {
      if (!isAnimating) {
        target = window.scrollY;
      }
    };

    const onResize = () => {
      target = Math.min(getMaxScroll(), target);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  // Shared scroll-to-Y animation. Any caller that goes through this (nav
  // clicks, back-to-top button) claims the shared cancellation token, so it
  // always wins over a stale/lingering wheel-eased animation.
  const scrollToY = useCallback((end: number, resetHash = false) => {
    const start = window.scrollY;
    const duration = 1200;
    let startTime: number | null = null;
    const myId = ++scrollAnimationIdRef.current;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      // Another animation (e.g. the wheel scroll) took over — stop.
      if (scrollAnimationIdRef.current !== myId) return;

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
    { name: 'Services', url: '/#services' },
    { name: 'Pricing', url: '/#services-pricing' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Testimonials', url: '/#testimonials' },
    { name: 'About', url: '/#about' },
    { name: 'FAQ', url: '/#faq' },
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
  }, []);

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