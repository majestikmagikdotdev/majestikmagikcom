'use client';

import React, { useState, useEffect, useRef } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

interface LogLine {
  text: string;
  color: string;
  delay: number;
  fontWeight?: string;
}

export const CoreEngineSection = () => {
  const [visibleLogs, setVisibleLogs] = useState<LogLine[]>([]);
  const [showCursor, setShowCursor] = useState(false);
  const [isIntersected, setIsIntersected] = useState(false); // Tracks scroll entry state
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery('(max-width: 767px)');


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          // Play only when visible to save CPU cycles
          videoRef.current?.play().catch(() => { });
        } else {
          // Pause immediately when scrolled away
          videoRef.current?.pause();
        }
      },
      { threshold: 0.15 } // Trigger when 15% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Delay video initialization so LCP image finishes downloading first
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback for browsers that block it
        });
      }
    }, 2500); // Wait 2.5s until critical initial render is complete

    return () => clearTimeout(timer);
  }, []);


  // Terminal Line Typing simulation
  useEffect(() => {
    if (!isIntersected) return; // Wait to type logs until scrolled into view

    const logs: LogLine[] = [
      { text: "user@majestik-node1:~$ ./launch_core.py --env=production", color: "#6366f1", delay: 300 },
      { text: "[INFO] Initializing Majestik Core Engine v1.0...", color: "#a5b4fc", delay: 600 },
      { text: "[SYSTEM] Verifying host hardware environment... CPU: OK | RAM: OK", color: "#a5b4fc", delay: 400 },
      { text: "[SYSTEM] Booting secure local machine execution layers...", color: "#a5b4fc", delay: 500 },
      { text: "[DATABASE] Connecting to localized Vector Instance...", color: "#38bdf8", delay: 600 },
      { text: "[DATABASE] pgvector extension found. Mapping 1536-dim embeddings...", color: "#34d399", delay: 400 },
      { text: "[MODULE] Loading external microservice registry...", color: "#38bdf8", delay: 500 },
      { text: "[API] Registering module: Pivot Quest GEO & Core Web Vitals Audit...", color: "#c084fc", fontWeight: "bold", delay: 500 },
      { text: "[API] External endpoint attached: RapidAPI Gateway [ACTIVE]", color: "#34d399", delay: 400 },
      { text: "[CACHE] Initializing context-window memory cache (Redis pipeline)...", color: "#f43f5e", delay: 500 },
      { text: "[CACHE] Volatile state memory: ACTIVE (Target latency: 0.8ms)", color: "#34d399", delay: 400 },
      { text: "[SECURITY] Applying zero-trust local isolation protocols...", color: "#fbbf24", delay: 500 },
      { text: "[ENGINE] Fetching localized model graph fragments...", color: "#a5b4fc", delay: 600 },
      { text: "[ENGINE] Custom contextual guardrails applied successfully.", color: "#34d399", delay: 400 },
      { text: "[SUCCESS] Majestik Core RAG Engine is fully operational.", color: "#c084fc", fontWeight: "bold", delay: 500 },
      { text: "user@majestik-node1:~$ READY_FOR_RAPID_EXECUTION=true", color: "#6366f1", delay: 300 },
      { text: "user@majestik-node1:~$ listening on http://localhost:8080...", color: "#38bdf8", delay: 200 }
    ];
    let currentLine = 0;
    let timeoutId: NodeJS.Timeout;

    const typeLog = () => {
      if (currentLine < logs.length) {
        const nextLog = logs[currentLine];
        if (nextLog) {
          setVisibleLogs((prev) => [...prev, nextLog]);
          currentLine++;
          timeoutId = setTimeout(typeLog, nextLog.delay);
        }
      } else {
        setShowCursor(true);
      }
    };

    timeoutId = setTimeout(typeLog, 1000);

    return () => clearTimeout(timeoutId);
  }, [isIntersected]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  return (
    <section
      ref={sectionRef}
      id="core-engine"
      aria-labelledby="core-engine-heading"
      style={{
        position: "relative",
        padding: "100px 20px",
        background: "rgb(15, 23, 42)",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >

      {/* Background video — desktop only to avoid blocking mobile LCP */}
      {!isMobile && (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            opacity: 0.18,
            transform: "translateZ(0)",
            willChange: "transform",
            backfaceVisibility: "hidden"
          }}
        >
          <source src="/videos/bare-metal-hardware.webm" type="video/webm" />
          <track kind="captions" src="data:text/vtt," label="No audio captions" default />
        </video>
      )}

      {/* Micro Dot Matrix Overlay Pattern Layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          backgroundImage: "radial-gradient(rgba(30, 38, 79, 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Interactive Component Layout */}
      <div
        className="split-container flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-[50px] md:gap-[60px]"
        style={{
          zIndex: 3
        }}
      >
        {/* Left Column: Core Infrastructure Copy */}
        <div
          className="text-column w-full md:flex-1 max-w-full md:max-w-[500px] text-center md:text-left"
          style={{
            opacity: isIntersected ? 1 : 0,
            transform: isIntersected ? "translateX(0)" : "translateX(-120px)",
            transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 4.5s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          {/* Status Tag */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", justifyContent: "inherit" }}>
            <span style={{ color: "#6366f1", fontSize: "12px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>
              The Architecture Engine
            </span>
            <span style={{ background: "rgba(99, 102, 241, 0.15)", color: "#a5b4fc", border: "1px solid rgba(99, 102, 241, 0.3)", padding: "2px 8px", borderRadius: "12px", fontSize: "10px", fontWeight: 600 }}>
              CURRENTLY IN DEVELOPMENT
            </span>
          </div>

          <h2 id="core-engine-heading" style={{ color: "#ffffff", fontSize: "36px", fontWeight: "bold", lineHeight: "1.2", marginBottom: "20px" }}>
            Meet Majestik Core
          </h2>

          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: "1.7", marginBottom: "16px" }}>
            A proprietary, hybrid Local AI and cloud API domain-specific model architected precisely for high-performance automation and enterprise data security.
          </p>

          <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "28px" }}>
            While the full Majestik Core AI engine framework is being built, our specialized microservices are rolling out today—starting with specialized SEO & Performance audit endpoints on RapidAPI.
          </p>

          {/* Live Feature API Card */}
          <div style={{
            background: "rgba(18, 24, 54, 0.6)",
            border: "1px solid #1e264f",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "left"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#34d399", letterSpacing: "1px", textTransform: "uppercase" }}>
                ● Live API Endpoint
              </span>
              <span style={{ fontSize: "11px", color: "#64748b" }}>RapidAPI</span>
            </div>
            <div style={{ color: "#ffffff", fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>
              Pivot Quest: GEO & Web Vitals Audit
            </div>
            <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5", marginBottom: "12px" }}>
              The Pivot Quest API delivers fast, full-spectrum Web Vitals metrics, technical diagnostics, and Generative Engine Optimization (GEO) insights in a single, unified JSON payload.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5", marginBottom: "12px" }}>
              Designed for SEO platforms, performance dashboards, agency site-audit tools, and automated site monitors, this API inspects actual loading/responsiveness metrics alongside AI-crawler readiness (GPTBot, ClaudeBot, Perplexity, etc.).
            </p>
            <a
              href="https://rapidapi.com/jamilmatheny-OvPZsHzjBUA/api/pivot-quest-geo-core-web-vitals-audit-api"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '6px',
                background: isButtonHovered ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: '#a5b4fc',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span>Test endpoint on RapidAPI</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Linux Terminal Window */}
        <div
          style={{
            flex: "1.2",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: isIntersected ? 1 : 0,
            transform: isIntersected ? "translateX(0)" : "translateX(120px)",
            transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 4.5s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div
            className="terminal-window"
            style={{
              width: "100%",
              maxWidth: "600px",
              background: "rgba(12, 15, 36, 0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid #1e264f",
              borderRadius: "6px",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6)",
              fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
              overflow: "hidden"
            }}
          >
            {/* Linux Terminal Header Bar */}
            <div
              className="terminal-header"
              style={{
                background: "rgba(21, 26, 54, 0.95)",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #1e264f",
                userSelect: "none"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6373b3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
                <div className="terminal-title" style={{ color: "#a5b4fc", fontSize: "13px", fontWeight: 500, letterSpacing: "0.3px" }}>
                  user@majestik-node1: ~
                </div>
              </div>

              <div className="terminal-controls" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ display: "block", width: "10px", height: "1px", background: "#6373b3" }}></span>
                <span style={{ display: "block", width: "9px", height: "9px", border: "1px solid #6373b3", borderRadius: "1px" }}></span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6373b3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalBodyRef}
              className="terminal-body"
              style={{
                padding: "24px",
                color: "#a5b4fc",
                fontSize: "13px",
                lineHeight: "1.6",
                height: "520px",
                overflowY: "auto",
                textAlign: "left"
              }}
            >
              {visibleLogs.map((log, index) => {
                if (!log) return null;

                return (
                  <p
                    key={index}
                    style={{
                      color: log.color || "#a5b4fc",
                      margin: "0 0 8px 0",
                      fontWeight: log.fontWeight || 'normal'
                    }}
                  >
                    {log.text}
                    {index === visibleLogs.length - 1 && showCursor && (
                      <span className="terminal-cursor-blink" style={{ marginLeft: "4px" }}>█</span>
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreEngineSection;