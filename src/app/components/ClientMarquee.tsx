'use client';
import Image from 'next/image';

const LOGOS = [
  { src: '/img/noel_customs.webp',  alt: 'Noel Customs',  width: 120, height: 48 },
  { src: '/img/parrisgainer.webp',  alt: 'Parris Gainer', width: 120, height: 48 },
  { src: '/img/cearco.webp',        alt: 'Cearco',        width: 120, height: 48 },
  { src: '/img/agriAI.webp',        alt: 'AgriAI',        width: 120, height: 48 },
  { src: '/img/father-figure-logo-official-640-C0t24ieq.webp', alt: 'Father Figure', width: 160, height: 48 },
  { src: '/img/middlemanmotors.png', alt: 'Middle Man Motors', width: 120, height: 48 },
];

export default function ClientMarquee() {
  return (
    <div className="w-full py-6 px-4 md:px-6">
      <p className="text-center text-[11px] font-mono text-[#606070] mb-8 tracking-widest uppercase">
        Trusted by
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-6 justify-items-center items-center gap-8 md:gap-10">
        {LOGOS.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-10 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            loading="eager"
          />
        ))}
      </div>
    </div>
  );
}
