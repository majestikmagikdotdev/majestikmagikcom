'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// --- SVG Icon Components ---
const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
);

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M8 5v14l11-7z" />
    </svg>
);

// --- Data for the video playlist ---
const videoData = [
    {
        id: 1,
        src: "/videos/wordpress/WordPress_Tutorial_01.mp4",
        title: "WordPress - Introduction & Adding A New Post",
        description: "Welcome to your WordPress training! This introductory module provides a tour of the WordPress dashboard and walks you through the essential first step: creating and publishing a new post.",
        playlistTitle: "Module 1: Intro & New Post"
    },
    {
        id: 2,
        src: "/videos/wordpress/WordPress_Tutorial_02.mp4",
        title: "WordPress - Editing A Post",
        description: "Take the next step in managing your WordPress site. This video guides you through the process of editing a post, covering how to change text and headlines, replace images, update categories and tags, and publish your revisions.",
        playlistTitle: "Module 2: Editing A Post"
    },    
    {
        id: 3,
        src: "/videos/wordpress/Wordpress_Tutorial_03.mp4",
        title: "WordPress - Adding Media & Images",
        description: "Enhance your posts with media! This module teaches you how to add images and other media files to your WordPress posts, making your content more engaging and visually appealing.",
        playlistTitle: "Module 3: Media & Images"
    },  
    {
        id: 4,
        src: "/videos/wordpress/Wordpress_Tutorial_04.mp4",
        title: "WordPress - Comments & Moderation",
        description: "Manage your community effectively! This video covers how to handle comments on your WordPress posts, including approving, replying to, and moderating comments to foster a positive environment.",
        playlistTitle: "Module 4: Comments & Moderation"
    },  
];

// --- Main Content Component ---
const VideoTrainingContent: React.FC = () => {
    const [currentVideo, setCurrentVideo] = useState(videoData[0]);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Effect to handle changing the video source and plays it when a new video is selected
    useEffect(() => {
        if (videoRef.current && currentVideo) {
            videoRef.current.load();
            videoRef.current.play().catch(error => {
                console.log("Autoplay was prevented by the browser:", error);
            });
        }
    }, [currentVideo]);

    const handleVideoSelect = (video: typeof videoData[0]) => {
        setCurrentVideo(video);
    };

    return (
    <div className="scroll-animate space-y-4">
            <div>
                <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent mb-4">
                    Training Modules
                </h1>
                <p className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                    Select a module from the playlist below to begin.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-indigo-500/10">
                {/* Video Player Section */}
                <div className="lg:col-span-2 bg-[#07080e]/60 border border-indigo-500/10 p-4 rounded-xl shadow-inner">
                    <video 
                        ref={videoRef} 
                        key={currentVideo.src} 
                        controls 
                        className="w-full h-auto aspect-video rounded-lg border border-indigo-500/5 shadow-2xl"
                    >
                        <source src={currentVideo.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="pt-6 px-1">
                        <h2 className="text-2xl font-bold text-slate-100 mb-3 tracking-tight">
                            {currentVideo.title}
                        </h2>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                            {currentVideo.description}
                        </p>
                    </div>
                </div>

                {/* Playlist Section */}
                <div className="lg:col-span-1 bg-[#07080e]/60 border border-indigo-500/10 p-5 rounded-xl flex flex-col h-fit">
                    <h3 className="text-lg font-bold text-slate-100 tracking-tight border-b border-indigo-500/10 pb-3 mb-4">
                        Video Playlist
                    </h3>
                    <ul className="space-y-2 max-h-[400px] lg:max-h-[500px] overflow-y-auto pr-1">
                        {videoData.map(video => {
                            const isSelected = currentVideo.id === video.id;
                            return (
                                <li
                                    key={video.id}
                                    onClick={() => handleVideoSelect(video)}
                                    className={`flex items-center gap-3 p-3.5 rounded-lg cursor-pointer transition-all duration-300 border ${
                                        isSelected 
                                            ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300 font-semibold shadow-md' 
                                            : 'bg-transparent border-transparent hover:bg-indigo-500/5 hover:border-indigo-500/5 text-slate-400'
                                    }`}
                                >
                                    <PlayIcon className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${isSelected ? 'text-indigo-400' : 'text-slate-600'}`} />
                                    <span className="text-sm tracking-wide">{video.playlistTitle}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// --- Page Component ---
const VideoTrainingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#07080e] selection:bg-indigo-500/30 selection:text-white">
            <main className="flex-grow py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors group text-sm font-semibold tracking-wide uppercase"
                        aria-label="Back to home"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    
                    <article className="bg-[#0d0f1a] border border-indigo-500/15 p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                        <VideoTrainingContent />
                    </article>
                </div>
            </main>
        </div>
    );
};

export default VideoTrainingPage;