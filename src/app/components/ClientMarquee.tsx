'use client';
import Image from 'next/image';

const LOGOS = [
  { src: '/img/noel_customs.webp',  alt: 'Noel Customs',  width: 120, height: 48 },
  { src: '/img/parrisgainer.webp',  alt: 'Parris Gainer', width: 120, height: 48 },
  { src: '/img/cearco.webp',        alt: 'Cearco',        width: 120, height: 48 },
  { src: '/img/agriAI.webp',        alt: 'AgriAI',        width: 120, height: 48 },
];

// Repeat enough times so the track is always wider than any viewport
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function ClientMarquee() {
  return (
    <div className="w-full py-10">
      <p className="text-center text-[11px] font-mono text-[#303040] mb-8 tracking-widest uppercase">
        Trusted by
      </p>

      <div
        className="w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)' }}
      >
        {/* Single track — translateX(-50%) lands on pixel-identical frame to 0% */}
        <div
          className="flex w-max gap-16 items-center"
          style={{
            animation: 'marquee-scroll-left 22s linear infinite',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        >
          {TRACK.map((logo, i) => (
            <div key={i} className="flex-shrink-0 opacity-40 grayscale">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
