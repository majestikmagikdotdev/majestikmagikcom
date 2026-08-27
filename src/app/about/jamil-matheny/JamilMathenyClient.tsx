'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '../../components/Icons';

const JamilMathenyContent: React.FC = () => {
    return (
        <div className="scroll-animate text-slate-300 leading-relaxed space-y-6">
            <div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent mb-2">
                    Jamil Matheny, Founder &amp; CEO
                </h1>
                <p className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                    About the Founder
                </p>
            </div>

            <div className="relative float-left mr-6 mb-4 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <Image 
                    src="/img/0-jamil.jpg" 
                    alt="Jamil Matheny" 
                    width={180} 
                    height={180} 
                    className="relative rounded-xl border border-indigo-500/20 object-cover shadow-2xl md:w-[180px]" 
                    loading="lazy"
                />
            </div>

            <p className="text-[1.05rem] text-slate-200 font-medium">
                Jamil Matheny is the Founder &amp; CEO of Majestik Magik, Inc., a digital solutions agency born from a lifelong passion for technology and a deep-seated desire to help businesses achieve their goals. He leads the company with a core mission: to create effective, purpose-driven software solutions that solve real-world business challenges.
            </p> 
            
            <p>
                A Virginia native, Jamil&apos;s fascination with technology began at an early age. Mentored by a neighbor who worked in IT, he gained a foundational understanding of computer hardware components. This interest grew through various school clubs and after-school programs, and his journey into programming was sparked by the creative possibilities of early web platforms like Myspace and Yahoo Geocities.
            </p> 
            
            <div className="clear-both">
                <div className="relative float-right ml-6 mb-4 group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <Link href="/img/344705572_03be87188e_b.jpg" target="_blank">
                        <Image
                            src="/img/344705572_03be87188e_b.jpg"
                            alt="Jamil Matheny featured in the Richmond Times-Dispatch"
                            width={180}
                            height={270}
                            className="relative rounded-xl border border-indigo-500/20 object-cover shadow-2xl md:w-[200px]"
                            loading="lazy"
                        />
                    </Link>
                </div>
                
                <p>
                    With a natural knack for building—a hobby that has ranged from model cars and soldering to art—Jamil applied this same constructive mindset to his professional ambitions. As a largely self-taught programmer, he complemented his university studies by channeling his coding knowledge into a deep dive into business and entrepreneurship. Fueled by countless books on business and personal development, he worked numerous jobs over the years to analyze different operational models with the dream of one day creating his own company.
                </p> 
                
                <p className="mt-4">
                    Jamil’s entrepreneurial journey has been far from ordinary. From his early days as a journalist at Advanced Media Network (now Gamezone.com), covering events like E3 in Los Angeles and meeting icons such as Bill Gates, to being featured in the Richmond Times-Dispatch for his insights on gaming culture, Jamil has always had a forward-looking vision. He later fronted the heavy metal band Spiral Fracture, which won the 2012 Battle of the Bands contest and earned a spot performing at the Rockstar Energy Mayhem Festival alongside Slipknot and Anthrax—a testament to his leadership and stage presence.
                </p> 
                
                <p className="mt-4">
                    Resilient and adaptive, Jamil has also built businesses outside of tech, from a photography brand (Jamil Images, LLC) to a solo cleaning business. Each venture sharpened his eye for detail, client service, and operational discipline. Even while facing setbacks in manual labor jobs like FedEx and Amazon, he turned challenges into lessons that strengthened his resolve to pursue entrepreneurship full time.
                </p> 
                
                <p className="mt-4 border-l-4 border-indigo-500 pl-4 py-1 bg-indigo-500/5 rounded-r-md text-slate-200 font-medium italic">
                    These experiences—paired with his deep love of learning, his strong family values, and his role as a father—fuel his drive to build Majestik Magik into a trusted partner for businesses. His vision extends beyond web design: through AI innovation and healthcare projects like InsightMD, Jamil is determined to create impact-driven solutions that make a difference in people&apos;s lives. His philosophy is simple but powerful: &quot;I don&apos;t chase. I align. The win is already mine.&quot;
                </p>
            </div>
        </div>
    );
};

const JamilMathenyPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#07080e] selection:bg-indigo-500/30 selection:text-white">
            <main className="flex-grow py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors group text-sm font-semibold tracking-wide uppercase"
                        aria-label="Back to main site"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <article className="bg-[#0d0f1a] border border-indigo-500/15 p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                        <JamilMathenyContent />
                    </article>
                </div>
            </main>
        </div>
    );
};

export default JamilMathenyPage;