'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon, LinkedInIcon } from './Icons';

// Simple icon for federal credentials
const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.01-.166 1.98-.465 2.912C20.243 16.14 18.82 17.61 17 18.75c-1.79.99-3.76 1.5-5 1.5s-3.21-.51-5-1.5c-1.82-1.14-3.243-2.61-4.535-4.088C3.166 13.98 3 13.01 3 12s.166-1.98.465-2.912C3.757 7.86 5.18 6.39 7 5.25c1.79-.99 3.76-1.5 5-1.5s3.21.51 5 1.5c1.82 1.14 3.243 2.61 4.535 4.088C20.834 10.02 21 10.99 21 12Z" />
  </svg>
);
import { useIntersect } from '../hooks/useIntersect'; // Assuming GithubIcon is exported from Icons.tsx

interface TeamMember {
  name: string;
  email: string;
  emailUrl: string;
  title: string;
  bio: string;
  imageUrl: string;
  url: string;
  social: { name: string; url: string; icon: React.ReactElement }[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Jamil Matheny",
    title: "Founder & CEO",
    email: "contact@majestikmagik.dev",
    emailUrl: "mailto:contact@majestikmagik.dev",
    bio: "Jamil Matheny is the Founder & CEO of Majestik Magik, Inc., a digital solutions agency born from a lifelong passion for technology and a deep-seated desire to help businesses achieve their goals. He leads the company with a core mission: to create effective, purpose-driven software solutions that solve real-world business challenges.",
    imageUrl: "/img/0-jamil.jpg",
    url: "/about/jamil-matheny",
    social: [
      { name: "GitHub", url: "https://github.com/jmathtech", icon: <GithubIcon className="w-5 h-5" /> },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/jamil-matheny", icon: <LinkedInIcon className="w-5 h-5" /> },
    ]
  },
];

const TeamSection: React.FC = () => {
  const { ref, intersected } = useIntersect();
  const fadeUp = {
    opacity: intersected ? 1 : 0,
    transform: intersected ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 2s ease-in, transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="team-heading"
      aria-describedby="team-desc"
      className="relative z-0 py-16 md:py-28 overflow-hidden"
      style={{ background: "rgb(15, 23, 42)" }}
    >

      {/* High-end hardware processor micro-dot matrix pattern - Stacked safely on top (z-11) */}
      <div
        className="absolute inset-0 z-11 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="w-full relative px-4 md:px-6 z-20">
        {/* Header Section */}
        <div className="mb-8 text-center mx-auto">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
            People Behind Majestik Magik 
          </span>

          <h2 id="team-heading" className="flex flex-wrap items-center justify-center mb-6 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-slate-100 font-bold tracking-tight" style={{ letterSpacing: '-0.04em', ...fadeUp }}>
            <Image
              src="https://www.svgrepo.com/show/500929/magic.svg"
              className="lazy-logo w-12 h-12 mr-3 filter invert opacity-80"
              width={48}
              height={48}
              alt="Majestik Magik team icon"
              loading="lazy"
            />
            Meet the{' '}
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
              Founder
            </span>
          </h2>

          <p id="team-desc" className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed" style={{ ...fadeUp, transitionDelay: '0.2s' }}>
            The creative mind and tech wizard turning your digital dreams into production-ready infrastructure.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" style={{ ...fadeUp, transitionDelay: '0.3s' }}>
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Shipped' },
            { value: '24–72hr', label: 'Delivery Window', note: 'Project timeline may vary depending on scope' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center p-4 md:p-6 rounded-lg bg-[#1e293b] border border-[#334155] text-center">
              <span className="text-3xl font-bold text-indigo-300 font-mono">{stat.value}</span>
              <span className="mt-1 text-xs font-mono uppercase tracking-widest text-slate-400">{stat.label}</span>
              {'note' in stat && <span className="mt-2 text-[10px] font-sans text-slate-500 italic">{stat.note}</span>}
            </div>
          ))}
        </div>

        {/* Profile Card + Tech Stack */}
        <div className="grid gap-6 md:grid-cols-2" style={{ ...fadeUp, transitionDelay: '0.4s' }}>
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="flex flex-col items-center p-5 md:p-8 text-center rounded-lg bg-[#1e293b] border border-[#334155] shadow-[0_4px_24px_rgba(0,0,0,0.4)] team-card-hover-animate duration-200 hover:border-indigo-500/30 transition-all"
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="relative mb-4 p-1 rounded-full bg-gradient-to-b from-indigo-500/30 to-transparent border border-slate-800 shadow-[0_0_30px_rgba(26,81,244,0.15)]">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  className="object-cover w-24 h-24 md:w-40 md:h-40 rounded-full border-2 border-slate-950 grayscale hover:grayscale-0 transition-all duration-500"
                  width={160}
                  height={160}
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 767px) 96px, 160px"
                />
              </div>
              <h3 className="mb-1 text-3xl font-bold tracking-tight text-slate-100">{member.name}</h3>
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400">{member.title}</p>
              <p className="mb-6 font-mono text-xs text-slate-500 hover:text-indigo-400 transition-colors">
                <a href={member.emailUrl}>{member.email}</a>
              </p>
              <div className="relative mb-6 opacity-80 filter brightness-115 contrast-125">
                <Image src="/img/my_signature.webp" alt="Jamil Matheny Signature" width={160} height={106} className="h-16 invert w-auto object-contain" />
              </div>
              <p className="flex-grow px-2 mb-6 text-md text-slate-400 leading-relaxed font-sans">
                {member.bio}
                <Link href={member.url} className="inline-flex items-center mt-4 font-mono text-sm text-indigo-300 hover:text-indigo-100 transition-colors px-2 py-1.5 duration-500">
                  Read More
                </Link>
              </p>

              <div className="flex mt-auto space-x-4 border-t border-slate-900/80 pt-4 w-full justify-center">
                {member.social.map((socialLink, i) => (
                  <a
                    key={`${socialLink.name}-${i}`}
                    href={socialLink.url}
                    title={socialLink.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 text-slate-500 hover:text-indigo-400 p-2 bg-[#1e293b] rounded border border-[#334155]"
                    aria-label={`Connect with ${member.name} on ${socialLink.name}`}
                  >
                    {socialLink.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Tech Stack Card */}
          <div className="flex flex-col p-5 md:p-8 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-indigo-500/30 transition-all duration-200" style={{ ...fadeUp, transitionDelay: '0.5s' }}>
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155] self-start">
              Tech Stack
            </span>
            <h3 className="font-bold text-slate-100 mb-2">Core Competencies</h3>
            <p className="text-sm text-slate-400 font-sans mb-6">Languages, frameworks, and platforms used to ship production-grade systems.</p>
            <div className="flex flex-wrap gap-2">
              {[
                'Next.js', 'React', 'React 3D', 'Three.js', 'WebGL', 'TypeScript', 'Node.js', 'Python',
                'Tailwind CSS', 'PostgreSQL', 'Supabase', 'AWS', 'Google Cloud', 'Cloudflare',
                'Stripe Webhooks', 'GraphQL', 'Docker', 'Git', 'GitHub Actions', 'Vercel',
                'WordPress', 'Shopify', 'Gemini AI', 'Claude AI'
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-indigo-300/80 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full tracking-wide hover:bg-indigo-500/20 hover:text-indigo-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Federal Vendor Credentials */}
            <div className="mt-6">
              <h3 className="font-bold text-slate-100 mb-2">Federal Vendor Credentials</h3>
              <div className="flex flex-col gap-3 items-start"> {/* Changed to flex-col and items-start for stacked, left-aligned cards */}
                <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 shadow-sm duration-200 transition-colors">
                  <ShieldCheckIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-xs font-mono text-indigo-300 tracking-wide">
                    SAM.gov Registered Entity
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 shadow-sm duration-200 transition-colors">
                  <ShieldCheckIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-xs font-mono text-indigo-300 tracking-wide">
                    UEI: F1TGDDS92AK3
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 shadow-sm duration-200 transition-colors">
                  <ShieldCheckIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-xs font-mono text-indigo-300 tracking-wide">
                    CAGE Code: Pending Annual Update
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;