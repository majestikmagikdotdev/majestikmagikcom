import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Libre_Baskerville, Playfair_Display, IM_Fell_English, Cinzel } from 'next/font/google';
import MainLayout from './components/MainLayout';
import './globals.css';
import '../../public/animations.css';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const imFellEnglish = IM_Fell_English({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-im-fell-english',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://majestikmagik.dev'),
  alternates: {
    canonical: 'https://majestikmagik.dev',
  },
  title: 'Majestik Magik — Offline-First EVV & DMAS Compliance Software for Rural Home Health',
  description:
    'DMAS Intake is a local-first compliance engine for Virginia home health agencies. Capture DMAS-97A/B, DMAS-98R, and DMAS-99 with AES-256 encryption and EVV GPS logging — no signal required. Syncs automatically when connectivity returns.',
  authors: [{ name: 'Majestik Magik' }],
  manifest: '/site.webmanifest',
  icons: {
    icon: '/img/majestikmagik_logo_indigo-64x64.webp',
    shortcut: '/img/majestikmagik_logo_indigo-64x64.webp',
    apple: '/img/majestikmagik_logo_indigo-64x64.webp',
  },
  openGraph: {
    title: 'Majestik Magik — Offline-First EVV & DMAS Compliance Software for Rural Home Health',
    description:
      'DMAS Intake is a local-first compliance engine for Virginia home health agencies. Capture DMAS-97A/B, DMAS-98R, and DMAS-99 with AES-256 encryption and EVV GPS logging — no signal required. Syncs automatically when connectivity returns.',
    url: 'https://majestikmagik.dev',
    siteName: 'Majestik Magik',
    images: [
      {
        url: '/img/image.png',
        width: 1200,
        height: 630,
        alt: 'DMAS Intake — Offline-First EVV Compliance Software',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Majestik Magik — Offline-First EVV & DMAS Compliance Software for Rural Home Health',
    description:
      'DMAS Intake is a local-first compliance engine for Virginia home health agencies. Capture DMAS-97A/B, DMAS-98R, and DMAS-99 with AES-256 encryption and EVV GPS logging — no signal required.',
    images: ['/img/image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${libreBaskerville.variable} ${playfairDisplay.variable} ${imFellEnglish.variable} ${cinzel.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="image"
          href="/img/screenshot_mm_ai.webp"
          type="image/webp"
          media="(min-width: 768px)"
        />
      </head>
      <body className="bg-[#07080e] text-slate-200 antialiased">
        <MainLayout>{children}</MainLayout>
        <Script
          strategy="lazyOnload"
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        />

        {/* Speakable Schema */}
        <script
          type="application/ld+json"
          id="speakable-structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://majestikmagik.dev",
              "name": "Majestik Magik — Offline-First EVV & DMAS Compliance Software for Rural Home Health",
              "description": "DMAS Intake is a local-first compliance engine for Virginia home health agencies. Capture DMAS-97A/B, DMAS-98R, and DMAS-99 with AES-256 encryption and EVV GPS logging — no signal required.",
              "slogan": "Zero signal. Zero data loss.",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [
                  "#home-heading",
                  "#services-heading",
                  "#micro-services-heading",
                  "#team-heading",
                  "[aria-label='Majestik Magik — Local-First Enterprise Software Infrastructure & Native Systems']"
                ]
              },
              "mainEntity": {
                "@type": "ItemList",
                "name": "Core Capabilities",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Offline-First EVV Compliance", "description": "Electronic Visit Verification that works without cell service. GPS coordinates, visit timestamps, and aide signatures are captured on-device and synced when connectivity returns." },
                  { "@type": "ListItem", "position": 2, "name": "DMAS Form Capture", "description": "Digital capture of DMAS-97A/B, DMAS-98R, and DMAS-99 forms with cryptographic AES-256 signatures. Eliminates paper fallback and reduces Medicaid audit clawback risk." },
                  { "@type": "ListItem", "position": 3, "name": "Rural Field Operations", "description": "Purpose-built for home health agencies operating in rural Virginia where cell coverage is unreliable. Aides complete visits and documentation regardless of signal strength." },
                  { "@type": "ListItem", "position": 4, "name": "Automatic Sync Engine", "description": "All offline visit records queue locally and sync automatically to the agency dashboard the moment an internet connection is detected. Zero manual intervention required." }
                ]
              }
            })
          }}
        />

        {/* Website Search Schema */}
        <script
          type="application/ld+json"
          id="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Majestik Magik",
              "url": "https://majestikmagik.dev",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://majestikmagik.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Deep GEO & AI Engine Semantic Schema */}
        <script
          type="application/ld+json"
          id="geo-ai-structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://majestikmagik.dev/",
                  "name": "Majestik Magik",
                  "url": "https://majestikmagik.dev",
                  "logo": "https://majestikmagik.dev/img/majestikmagik_logo_indigo-64x64.webp",
                  "telephone": "+1-804-362-7561",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Richmond",
                    "addressRegion": "VA",
                    "postalCode": "23222",
                    "addressCountry": "US"
                  },
                  "founder": {
                    "@type": "Person",
                    "name": "Jamil Matheny",
                    "jobTitle": "Founder & Lead Software Engineer",
                    "url": "https://github.com/jmathtech"
                  },
                  "knowsAbout": [
                    "Offline-first web application architecture",
                    "Electronic Visit Verification (EVV)",
                    "DMAS-97A/B DMAS-98R DMAS-99 compliance",
                    "Virginia Medicaid home health compliance",
                    "Local-first software for rural field operations",
                    "AES-256 encryption for healthcare data",
                    "HIPAA-ready mobile field tools",
                    "Medicaid audit clawback prevention",
                    "IndexedDB offline data persistence",
                    "Progressive Web App development",
                    "Home care agency software Virginia",
                    "Rural broadband gap compliance solutions"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "DMAS Intake — Offline-First EVV & Compliance Platform",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "DMAS Intake — Offline EVV & Form Capture",
                          "description": "Local-first Electronic Visit Verification and DMAS form capture for Virginia home health agencies. Works without cell service. Captures DMAS-97A/B, DMAS-98R, and DMAS-99 with AES-256 encryption and GPS logging. Syncs automatically when connectivity returns."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Agency Compliance Dashboard",
                          "description": "Real-time dashboard for home health agency directors to monitor visit records, EVV sync status, aide activity, and Medicaid audit readiness across all locations."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Multi-Location Deployment",
                          "description": "DMAS Intake scales across single and multi-location home health agencies in Virginia. Centralized oversight with per-location visit tracking and compliance reporting."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "TechService",
                  "@id": "https://dmas-intake.majestikmagik.dev/",
                  "name": "DMAS Intake",
                  "provider": { "@id": "https://majestikmagik.dev/" },
                  "description": "An offline-first Electronic Visit Verification and DMAS compliance platform for rural Virginia home health agencies. Captures DMAS-97A/B, DMAS-98R, and DMAS-99 forms with AES-256 encryption and EVV GPS logging without requiring an internet connection.",
                  "category": "Healthcare Compliance Software",
                  "areaServed": {
                    "@type": "State",
                    "name": "Virginia",
                    "addressCountry": "US"
                  },
                  "audience": {
                    "@type": "Audience",
                    "audienceType": "Home health agencies, DMAS providers, Medicaid waiver service providers in Virginia"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://majestikmagik.dev/faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is DMAS Intake?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DMAS Intake is an offline-first Electronic Visit Verification and compliance platform built for Virginia home health agencies. It allows care aides to capture DMAS-97A/B, DMAS-98R, and DMAS-99 forms with GPS logging and AES-256 encrypted signatures directly on their device — no internet connection required. Records sync automatically to the agency dashboard when connectivity is restored."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What EVV software works offline in rural Virginia?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DMAS Intake by Majestik Magik is purpose-built for rural Virginia home health agencies where cell coverage is unreliable. It is a local-first Progressive Web App that stores all visit data on-device using AES-256 encryption and syncs automatically when an internet connection is detected. It supports DMAS-97A/B, DMAS-98R, and DMAS-99 compliance and EVV GPS logging without requiring a signal."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does offline EVV compliance work for home health agencies?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DMAS Intake uses a local-first architecture where all visit data — including GPS coordinates, aide signatures, visit start and end times, and DMAS form entries — is written to encrypted on-device storage the moment it is captured. When the device reconnects to the internet, all queued records sync to the agency's compliance dashboard automatically. This eliminates paper fallback and protects agencies from Medicaid audit clawbacks caused by missing EVV data."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are DMAS-97A/B, DMAS-98R, and DMAS-99 forms?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DMAS-97A/B, DMAS-98R, and DMAS-99 are Virginia Medicaid documentation forms required for home health and personal care services. DMAS-97A/B is the Personal Care Assessment form, DMAS-98R is the Aide Plan of Care, and DMAS-99 is the Aide Record used to document each visit. Accurate completion of these forms is required for Medicaid reimbursement and state compliance audits. DMAS Intake digitizes and encrypts all three forms for offline capture and automatic sync."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is DMAS Intake HIPAA compliant?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DMAS Intake is built with HIPAA-readiness as a core design principle. All patient and visit data is encrypted at rest using AES-256 and transmitted over TLS. Data is stored locally on the aide's device in an encrypted IndexedDB store and is never exposed to third-party services. Agencies retain full ownership of their data."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What causes Medicaid audit clawbacks for home health agencies?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Medicaid audit clawbacks occur when a home health agency cannot produce complete EVV records or properly completed DMAS forms for a billed visit. Common causes include paper documentation that was lost or incomplete, cloud-based EVV apps that failed to record visits when the aide had no cell service, and missing GPS verification data. DMAS Intake eliminates these gaps by capturing all required data offline and syncing it automatically."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the federal EVV mandate and how does it affect Virginia home health agencies?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The 21st Century Cures Act requires all Medicaid-funded personal care and home health services to use Electronic Visit Verification. Virginia enforces this mandate through DMAS. Agencies that cannot produce compliant EVV records risk claim denials and audit clawbacks. Rural agencies are disproportionately affected because standard cloud-based EVV tools fail without cell service. DMAS Intake solves this with offline-first EVV that works regardless of connectivity."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I request a demo of DMAS Intake?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can request a demo at https://majestikmagik.dev or visit the live portal at https://dmas-intake.majestikmagik.dev. Fill out the intake form with your agency name, number of locations, and contact information and the team will reach back out within 24 hours to schedule a walkthrough."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Who built DMAS Intake?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DMAS Intake was built by Jamil Matheny, founder of Majestik Magik, Inc., based in Richmond, Virginia. It was developed specifically for rural Virginia home health agencies after identifying that existing EVV solutions fail in low-connectivity environments, leaving agencies exposed to Medicaid audit clawbacks."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
