'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon } from './Icons'; // Assuming GithubIcon is exported from Icons.tsx

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
    ]
  },
];

const TeamSection: React.FC = () => {
  return (
    <section 
      id="about" 
      aria-labelledby="team-heading" 
      className="relative z-0 py-8 md:py-15 overflow-hidden"
      style={{
        background: "rgb(15, 23, 42)",        
      }}
    >      

      {/* High-end hardware processor micro-dot matrix pattern - Stacked safely on top (z-11) */}
      <div 
        className="absolute inset-0 z-11 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="container relative px-6 mx-auto z-20 max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-slate-900/90 px-3 py-1 rounded border border-slate-800">
            Human Architecture V1.0
          </span>
          
          <h2 id="team-heading" className="flex items-center justify-center mb-6 text-4xl md:text-5xl lg:text-6xl text-slate-100 font-bold tracking-tight scroll-animate">
            <Image
              src="https://www.svgrepo.com/show/500929/magic.svg"
              className="lazy-logo w-8 h-8 mr-3 filter invert opacity-80"
              width={32}
              height={32}
              alt="Majestik Magik team icon"
              loading="lazy"
            />
            Meet the{' '}
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
              Founder
            </span>
          </h2>
          
          <p className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed scroll-animate" style={{ transitionDelay: '0.3s' }}>
            The creative mind and tech wizard turning your digital dreams into production-ready infrastructure.
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="grid max-w-2xl gap-10 mx-auto md:grid-cols-1 lg:gap-16 scroll-animate">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="flex flex-col items-center p-8 text-center rounded-2xl bg-slate-800 border border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm team-card-hover-animate duration-300 transform hover:-translate-y-1 hover:border-indigo-500/50 transition-all"
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Profile Image Frame */}
              <div className="relative mb-6 p-1 rounded-full bg-gradient-to-b from-indigo-500/30 to-transparent border border-slate-800 shadow-[0_0_30px_rgba(26,81,244,0.15)]">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  className="object-cover w-32 h-32 rounded-full border-2 border-slate-950 md:w-40 md:h-40 grayscale hover:grayscale-0 transition-all duration-500"
                  width={160}
                  height={160}
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 767px) 128px, 160px"
                />
              </div>

              {/* Identity Matrix */}
              <h3 className="mb-1 text-3xl font-bold tracking-tight text-slate-100">{member.name}</h3>
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400">{member.title}</p>              
              <p className="mb-6 font-mono text-xs text-slate-500 hover:text-indigo-400 transition-colors">
                <a href={member.emailUrl}>{member.email}</a>
              </p>
              
              {/* Ink Identity Signature Asset */}
              <div className="relative mb-6 opacity-80 filter brightness-115 contrast-125">
                <Image src="/img/my_signature.webp" alt="Jamil Matheny Signature" width={160} height={106} className="h-16 invert w-auto object-contain" />
              </div>

              {/* Bio Block */}
              <p className="flex-grow px-2 mb-6 text-md text-slate-400 leading-relaxed font-sans max-w-xl">
                {member.bio}
                <Link href={member.url} className="transition-colors duration-300 font-mono font-bold text-xs text-indigo-400 hover:text-indigo-300 ml-2 whitespace-nowrap">
                  [Read Full Protocol]
                </Link>
              </p>

              {/* Tech Handles Stack */}
              <div className="flex mt-auto space-x-4 border-t border-slate-900/80 pt-4 w-full justify-center">
                {member.social.map(socialLink => (
                  <a
                    key={socialLink.name}
                    href={socialLink.url}
                    title={socialLink.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 text-slate-500 hover:text-indigo-400 p-2 bg-slate-950/40 rounded-lg border border-slate-900"
                    aria-label={`Connect with ${member.name} on ${socialLink.name}`}
                  >
                    {socialLink.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;