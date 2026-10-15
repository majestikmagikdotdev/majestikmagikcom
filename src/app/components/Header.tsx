'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import MagikLogo from './MagikLogo';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from './Icons';

export interface NavLinkItem {
  name: string;
  url: string;
  external?: boolean;
  description?: string;
  children?: NavLinkItem[];
}

interface HeaderProps {
  navItems: NavLinkItem[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, item: NavLinkItem) => void;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleNavClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoReady, setLogoReady] = useState(false);
  const [logoGlowBreath, setLogoGlowBreath] = useState(false);
  const [logoSpin, setLogoSpin] = useState(false);
  const [halloween, setHalloween] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastOut, setToastOut] = useState(false);
  const [showWitch, setShowWitch] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setLogoReady(true);
      setTimeout(() => setLogoGlowBreath(true), 750);
    }, 80);
    return () => clearTimeout(t);
  }, []);

  function handleLogoClick() {
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => { clickCount.current = 0; }, 500);
    if (clickCount.current >= 3) {
      clickCount.current = 0;
      setLogoSpin(true);
      setTimeout(() => setLogoSpin(false), 700);
      const next = !halloween;
      setHalloween(next);
      document.body.classList.toggle('halloween', next);
      window.dispatchEvent(new CustomEvent('app:halloween'));
      if (next) {
        setShowWitch(true);
        setTimeout(() => setShowWitch(false), 4000);
      }
      setShowToast(true);
      setTimeout(() => setToastOut(true), 3800);
      setTimeout(() => setShowToast(false), 4300);
    }
  }

  // State to track active hovered top-level element bounds
  const [hoveredRect, setHoveredRect] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  useEffect(() => {
    const handleDocumentClick = () => setOpenDropdown(null);
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const handleDropdownMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
    setHoveredRect((prev) => ({ ...prev, opacity: 0 }));
  };

  useEffect(() => {
    if (!isMobileMenuOpen) setOpenMobileDropdown(null);
  }, [isMobileMenuOpen]);

  // Updated handleMouseEnter: Calculates line position ONLY for top-level nav links
  const handleTopLevelMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    if (navRef.current) {
      const navBounds = navRef.current.getBoundingClientRect();
      const targetBounds = target.getBoundingClientRect();

      setHoveredRect({
        left: targetBounds.left - navBounds.left,
        width: targetBounds.width,
        opacity: 1,
      });
    }
  };

  const handleTopLevelMouseLeave = () => {
    // Only fade line out if no dropdown is currently active
    if (!openDropdown) {
      setHoveredRect((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? 'backdrop-blur-xl border-b border-[#2a2a3a] shadow-2xl'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
      style={isScrolled || isMobileMenuOpen ? { background: 'rgba(24,24,24,0.92)' } : undefined}
    >
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => {
            handleLogoClick();
            const el = document.getElementById('home');
            if (el) {
              const start = window.scrollY;
              const end = el.getBoundingClientRect().top + start;
              const duration = 1200;
              let startTime: number | null = null;
              const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
              const step = (ts: number) => {
                if (!startTime) startTime = ts;
                const p = Math.min((ts - startTime) / duration, 1);
                window.scrollTo(0, start + (end - start) * ease(p));
                if (p < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            }
          }}
          className="flex items-center space-x-3 text-lg font-bold font-mono uppercase tracking-wider text-slate-100 cursor-pointer"
          aria-label="Majestik Magik Home"
          type="button"
        >
          <span className="relative flex-shrink-0">
            {/* glow bloom — sits behind the image */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(139,92,246,0.4) 50%, transparent 75%)',
                animation: logoGlowBreath
                  ? 'logo-glow-breathe 3s ease-in-out infinite'
                  : logoReady ? 'logo-glow-bloom 700ms ease-out forwards' : 'none',
              }}
            />
            <MagikLogo
              className="relative w-8 h-8"
              style={{
                animation: logoSpin
                  ? 'logo-spin 700ms cubic-bezier(0.34,1.56,0.64,1) forwards'
                  : logoReady ? 'logo-stamp 600ms cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none',
                opacity: logoSpin ? 1 : 0,
                color: halloween ? '#22c55e' : '#6366f1',
              }}
            />
          </span>
          <span
            className="bg-clip-text text-transparent text-2xl bg-gradient-to-r from-white to-slate-300"
            style={{ letterSpacing: '-0.06em', animation: logoReady ? 'logo-wordmark-slide 400ms ease-out 300ms forwards' : 'none', opacity: 0 }}
          >
            Majestik Magik
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden xl:flex items-center relative py-4 space-x-8">
          {/* Animated Hover Line Tracker */}
          <div
            className="absolute bottom-0 h-[2px] transition-all duration-300 ease-out pointer-events-none z-10 flex justify-center"
            style={{
              transform: `translateX(${hoveredRect.left}px)`,
              width: `${hoveredRect.width}px`,
              opacity: hoveredRect.opacity,
            }}
          >
            <div
              className={`h-full rounded-full transition-all duration-300 ease-out origin-center ${
                hoveredRect.opacity > 0 ? 'w-full scale-x-100' : 'w-1/3 scale-x-50'
              }`}
            style={{ background: 'linear-gradient(90deg, #6366f1, #a78bfa)', boxShadow: '0 0 8px rgba(99,102,241,0.7)' }}
            />
          </div>

          {navItems.map((item) => {
            const isDropdown = item.children && item.children.length > 0;
            const isActiveDropdown = openDropdown === item.name;

            return (
              <div
                key={item.name}
                className={`relative group ${isDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => isDropdown && handleDropdownMouseEnter(item.name)}
                onMouseLeave={() => isDropdown && handleDropdownMouseLeave()}
                onMouseDown={(e) => e.stopPropagation()}
              >
                {item.external ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 font-mono uppercase tracking-wider text-sm py-2 px-4 rounded-lg transition-all duration-200"
                    onMouseEnter={handleTopLevelMouseEnter}
                    onMouseLeave={handleTopLevelMouseLeave}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.url || '#'}
                    className="text-[#a0a0b0] hover:text-indigo-300 transition-colors font-mono uppercase text-sm tracking-wider duration-200 py-1 flex items-center"
                    onClick={(e) => {
                      if (isDropdown && !item.url) {
                        e.preventDefault();
                        setOpenDropdown(isActiveDropdown ? null : item.name);
                      } else {
                        handleNavClick(e, item);
                      }
                    }}
                    onMouseEnter={handleTopLevelMouseEnter}
                    onMouseLeave={handleTopLevelMouseLeave}
                    aria-haspopup={isDropdown ? 'true' : undefined}
                    aria-expanded={isDropdown ? isActiveDropdown : undefined}
                  >
                    {item.name}
                    {isDropdown && (
                      <svg
                        className={`ml-1 w-3 h-3 transform transition-transform duration-200 ${
                          isActiveDropdown ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                )}

                {/* Mega-Menu / Dropdown Container */}
                {isDropdown && (
                  <div
                    className={`absolute z-20 transition-all duration-200 ease-out ${
                      isActiveDropdown ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{
                      top: 'calc(100% - 8px)',
                      left: '50%',
                      transform: isActiveDropdown ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
                      paddingTop: '20px',
                    }}
                  >
                    {item.name === 'Services' ? (
                      // Services: two-column mega-menu with callout
                      <div
                        className="flex gap-0 rounded-xl shadow-2xl overflow-hidden"
                        style={{
                          background: 'rgba(14,14,20,0.97)',
                          border: '1px solid rgba(99,102,241,0.12)',
                          backdropFilter: 'blur(24px)',
                          minWidth: '560px',
                        }}
                      >
                        <div className="flex-1 p-5">
                          <p className="text-xs font-mono uppercase tracking-widest text-[#404050] mb-3 px-2">Services</p>
                          <div className="space-y-1">
                            {item.children?.map((childItem) => (
                              <div key={childItem.name} className="flex flex-col px-3 py-2 rounded-lg hover:bg-indigo-500/5 transition-colors">
                                <span className="text-sm font-mono text-[#f0f0f0]">{childItem.name}</span>
                                {childItem.description && (
                                  <span className="text-xs text-[#606070] mt-0.5">{childItem.description}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div
                          className="w-52 p-5 flex flex-col justify-between"
                          style={{
                            background: 'linear-gradient(135deg, rgba(20,20,35,0.9) 0%, rgba(14,14,20,0.95) 100%)',
                            borderLeft: '1px solid rgba(99,102,241,0.1)',
                          }}
                        >
                          <div>
                            <p className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">Featured</p>
                            <p className="text-sm font-semibold text-[#f0f0f0] leading-snug mb-2">From Concept to Edge-Native Launch</p>
                            <p className="text-xs text-[#606070] leading-relaxed">Custom local-first infrastructure, zero latency, maximum privacy.</p>
                          </div>
                          <a
                            href="/start-a-project"
                            className="mt-4 inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg px-3 py-2"
                            onClick={(e) => {
                              handleNavClick(e, { name: 'Start a Project', url: '/start-a-project' });
                              setOpenDropdown(null);
                            }}
                          >
                            Start a Project →
                          </a>
                        </div>
                      </div>
                    ) : item.name === 'Portfolio' ? (
                      // Portfolio: project list (no links) on left, Case Studies callout on right
                      <div
                        className="flex gap-0 rounded-xl shadow-2xl overflow-hidden"
                        style={{
                          background: 'rgba(14,14,20,0.97)',
                          border: '1px solid rgba(99,102,241,0.12)',
                          backdropFilter: 'blur(24px)',
                          minWidth: '560px',
                        }}
                      >
                        <div className="flex-1 p-5">
                          <p className="text-xs font-mono uppercase tracking-widest text-[#404050] mb-3 px-2">Recent Work</p>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {item.children?.map((childItem) => (
                              <div key={childItem.name} className="flex flex-col px-3 py-2 rounded-lg hover:bg-indigo-500/5 transition-colors">
                                <span className="text-sm font-mono text-[#f0f0f0]">{childItem.name}</span>
                                {childItem.description && (
                                  <span className="text-xs text-[#606070] mt-0.5">{childItem.description}</span>
                                )}
                              </div>
                            ))}
                          </div>
                          <a
                            href="/portfolio"
                            className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors px-3"
                            onClick={(e) => {
                              handleNavClick(e, { name: 'Portfolio', url: '/portfolio' });
                              setOpenDropdown(null);
                            }}
                          >
                            View all projects →
                          </a>
                        </div>
                        <div
                          className="w-48 p-5 flex flex-col justify-between"
                          style={{
                            background: 'linear-gradient(135deg, rgba(20,20,35,0.9) 0%, rgba(14,14,20,0.95) 100%)',
                            borderLeft: '1px solid rgba(99,102,241,0.1)',
                          }}
                        >
                          <div>
                            <p className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">Case Studies</p>
                            <p className="text-sm font-semibold text-[#f0f0f0] leading-snug mb-2">Real Clients, Real Results</p>
                            <p className="text-xs text-[#606070] leading-relaxed">Problems solved and measurable outcomes across every project.</p>
                          </div>
                          <a
                            href="/case-studies"
                            className="mt-4 inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg px-3 py-2"
                            onClick={(e) => {
                              handleNavClick(e, { name: 'Case Studies', url: '/case-studies' });
                              setOpenDropdown(null);
                            }}
                          >
                            Read Case Studies →
                          </a>
                        </div>
                      </div>
                    ) : (
                      // Generic single-column dropdown
                      <div
                        className="rounded-xl shadow-2xl overflow-hidden"
                        style={{
                          background: 'rgba(14,14,20,0.97)',
                          border: '1px solid rgba(99,102,241,0.12)',
                          backdropFilter: 'blur(24px)',
                          minWidth: '260px',
                        }}
                      >
                        <div className="p-3 space-y-1">
                          <p className="text-xs font-mono uppercase tracking-widest text-[#404050] mb-2 px-2">{item.name}</p>
                          {item.children?.map((childItem) => (
                            <a
                              key={childItem.name}
                              href={childItem.url}
                              className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-indigo-500/8 transition-colors group cursor-pointer"
                              onClick={(e) => {
                                handleNavClick(e, childItem);
                                setOpenDropdown(null);
                              }}
                            >
                              <span className="text-sm font-mono text-[#f0f0f0] group-hover:text-indigo-300 transition-colors">{childItem.name}</span>
                              {childItem.description && (
                                <span className="text-xs text-[#606070] mt-0.5">{childItem.description}</span>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>



        {/* Desktop CTA Button */}
        <div className="hidden xl:flex items-center">
          <Link
            href="/#contact"
            className="btn-premium inline-flex items-center gap-2 font-mono uppercase tracking-wider text-sm text-white rounded-full px-5 py-2 cursor-pointer font-bold"
            onClick={(e) => handleNavClick(e, { name: 'Contact', url: '/#contact' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="mobile-menu"
            className="text-[#a0a0b0] hover:text-indigo-300 focus:outline-none p-1 rounded-md cursor-pointer"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMobileMenuOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="xl:hidden absolute top-full left-0 right-0 border-b border-[#2a2a3a] shadow-2xl z-40"
          style={{ background: 'rgba(24,24,24,0.97)', backdropFilter: 'blur(24px)' }}
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-8 space-y-4">
            {navItems.map((item) => {
              const isDropdown = item.children && item.children.length > 0;
              const isMobileDropdownOpen = openMobileDropdown === item.name;

              return (
                <div key={`mobile-${item.name}`}>
                  {isDropdown ? (
                    <>
                      <div className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-mono uppercase tracking-wider text-[#a0a0b0]">
                        <Link
                          href={item.url}
                          className="hover:text-indigo-400 transition-colors"
                          onClick={(e) => handleNavClick(e, item)}
                        >
                          {item.name}
                        </Link>
                        <button
                          className="p-1 hover:text-indigo-400 transition-colors cursor-pointer"
                          onClick={() => setOpenMobileDropdown(isMobileDropdownOpen ? null : item.name)}
                          aria-expanded={isMobileDropdownOpen}
                          aria-controls={`mobile-submenu-${item.name}`}
                        >
                          <svg
                            className={`w-4 h-4 transform transition-transform duration-200 ${
                              isMobileDropdownOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div
                        id={`mobile-submenu-${item.name}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isMobileDropdownOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div
                          className="mt-2 mx-1 rounded-xl overflow-hidden"
                          style={{
                            background: 'rgba(14,14,20,0.97)',
                            border: '1px solid rgba(99,102,241,0.12)',
                          }}
                        >
                          {item.name === 'Services' && (
                            <div className="p-4 space-y-1">
                              <p className="text-xs font-mono uppercase tracking-widest text-[#404050] mb-3 px-2">Services</p>
                              {item.children?.map((childItem) => (
                                <div key={childItem.name} className="flex flex-col px-3 py-2 rounded-lg">
                                  <span className="text-sm font-mono text-[#f0f0f0]">{childItem.name}</span>
                                  {childItem.description && (
                                    <span className="text-xs text-[#606070] mt-0.5">{childItem.description}</span>
                                  )}
                                </div>
                              ))}
                              <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(99,102,241,0.1)' }}>
                                <p className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2 px-2">Featured</p>
                                <p className="text-sm font-semibold text-[#f0f0f0] leading-snug mb-1 px-2">From Concept to Edge-Native Launch</p>
                                <p className="text-xs text-[#606070] leading-relaxed mb-3 px-2">Custom local-first infrastructure, zero latency, maximum privacy.</p>
                                <a
                                  href="/start-a-project"
                                  className="mx-2 inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg px-3 py-2"
                                  onClick={(e) => { handleNavClick(e, { name: 'Start a Project', url: '/start-a-project' }); setIsMobileMenuOpen(false); }}
                                >
                                  Start a Project →
                                </a>
                              </div>
                            </div>
                          )}
                          {item.name === 'Portfolio' && (
                            <div className="p-4">
                              <p className="text-xs font-mono uppercase tracking-widest text-[#404050] mb-3 px-2">Recent Work</p>
                              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                                {item.children?.map((childItem) => (
                                  <div key={childItem.name} className="flex flex-col px-3 py-2 rounded-lg">
                                    <span className="text-sm font-mono text-[#f0f0f0]">{childItem.name}</span>
                                    {childItem.description && (
                                      <span className="text-xs text-[#606070] mt-0.5">{childItem.description}</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                              <a
                                href="/portfolio"
                                className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors px-3"
                                onClick={(e) => { handleNavClick(e, { name: 'Portfolio', url: '/portfolio' }); setIsMobileMenuOpen(false); }}
                              >
                                View all projects →
                              </a>
                              <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(99,102,241,0.1)' }}>
                                <p className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2 px-2">Case Studies</p>
                                <p className="text-sm font-semibold text-[#f0f0f0] leading-snug mb-1 px-2">Real Clients, Real Results</p>
                                <p className="text-xs text-[#606070] leading-relaxed mb-3 px-2">Problems solved and measurable outcomes across every project.</p>
                                <a
                                  href="/case-studies"
                                  className="mx-2 inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg px-3 py-2"
                                  onClick={(e) => { handleNavClick(e, { name: 'Case Studies', url: '/case-studies' }); setIsMobileMenuOpen(false); }}
                                >
                                  Read Case Studies →
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.url}
                      className={`block rounded-lg px-3 py-2 text-sm font-mono uppercase tracking-wider text-[#a0a0b0] hover:bg-indigo-500/5 hover:text-indigo-300 transition-colors ${
                        item.external
                          ? 'border border-indigo-400/30 bg-indigo-300/10 text-indigo-300 text-center py-2.5'
                          : ''
                      }`}
                      onClick={(e) => handleNavClick(e, item)}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-4 border-t border-[#2a2a3a]">
              <Link
                href="/#contact"
                className="btn-premium inline-flex items-center justify-center gap-2 w-full font-mono uppercase tracking-wider text-sm text-white rounded-full px-5 py-3 cursor-pointer font-bold"
                onClick={(e) => handleNavClick(e, { name: 'Contact', url: '/#contact' })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Witch flyby */}
      {showWitch && (
        <div
          aria-hidden
          className="fixed z-[998] pointer-events-none"
          style={{
            top: '18vh',
            left: 0,
            animation: 'witch-fly 3.8s cubic-bezier(0.45,0,0.55,1) forwards',
            filter: 'drop-shadow(0 0 12px rgba(249,115,22,0.7))',
          }}
        >
          <Image src="/img/witch-broom.svg" alt="witch on broom" width={120} height={120} style={{ height: 'auto' }} unoptimized />
        </div>
      )}

      {/* Halloween toast */}
      {showToast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] px-5 py-3 rounded-2xl border text-sm font-mono flex items-center gap-3"
          style={{
            background: 'rgba(13,10,0,0.95)',
            borderColor: 'rgba(249,115,22,0.4)',
            color: '#f97316',
            backdropFilter: 'blur(12px)',
            animation: toastOut
              ? 'toast-out 500ms ease forwards'
              : 'toast-in 400ms cubic-bezier(0.34,1.56,0.64,1) forwards',
          }}
        >
          <span style={{ animation: 'halloween-flicker 1.5s ease-in-out infinite' }}>🎃</span>
          Happy Halloween! 🎃 triple-click the logo to escape.
        </div>
      )}
    </header>
  );
};

export default Header;