'use client';

export default function ScrollToServices() {
  function handleClick() {
    const target = document.getElementById('services');
    if (!target) return;
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const duration = 1200;
    let startTime: number | null = null;
    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      window.scrollTo(0, start + (end - start) * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  return (
    <button
      onClick={handleClick}
      className="inline-block text-slate-200 cursor-pointer font-mono uppercase tracking-wider text-sm py-4 px-10 rounded transition-all duration-200 border border-white/20 hover:border-white/40 hover:text-white bg-white/5 hover:bg-white/10"
    >
      Explore Services →
    </button>
  );
}
