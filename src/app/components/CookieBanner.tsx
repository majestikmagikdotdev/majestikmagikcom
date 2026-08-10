"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('majestik_magik_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('majestik_magik_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transform border-t border-slate-800 bg-slate-950/90 p-4 backdrop-blur-md transition-transform duration-500 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      aria-describedby="cookie-message"
    >
      <div className="w-full flex flex-col items-center justify-between md:flex-row">
        <p id="cookie-message" className="mb-3 text-xs font-mono tracking-tight text-slate-400 md:mb-0 md:mr-4 max-w-4xl">
          [System Event Matrix]: We map data cookies to safely optimize user telemetry and analyze site pipeline routing. By committing &quot;Accept&quot;, you assign execution authorization. Details in our <Link href="/privacy-policy" className="text-indigo-400 hover:text-indigo-300 underline font-medium">Privacy Policy Documentation</Link>.
        </p>
        <button
          onClick={handleAccept}
          className="flex-shrink-0 cursor-pointer rounded-lg bg-indigo-600 px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(26,81,244,0.3)] transition-colors hover:bg-indigo-500 focus:outline-none"
          aria-label="Accept cookies"
          type="button"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}