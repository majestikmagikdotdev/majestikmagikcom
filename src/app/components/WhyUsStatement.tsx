'use client';
import { useEffect, useRef, useState } from 'react';

export default function WhyUsStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-full px-4 md:px-6 pb-4 md:pb-8">
      <div
        ref={ref}
        className="max-w-7xl mx-auto border-t border-[#1e1e2e] pt-16 md:pt-20 transition-all duration-700 ease-out"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <p
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f0f0f0] max-w-3xl"
          style={{ letterSpacing: '-0.03em', lineHeight: '1.15' }}
        >
          Anyone can ship code now.
          <br />
          <span className="text-[#404050]">The difference is whether somebody with actual taste made the calls.</span>
        </p>
        <p className="mt-5 text-sm text-[#a0a0b0] max-w-lg leading-relaxed">
          When every tool does the same thing, people pick the one that feels like somebody actually chose it. That&apos;s the job.
        </p>
      </div>
    </div>
  );
}
