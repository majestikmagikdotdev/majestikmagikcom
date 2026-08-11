import type { Metadata } from 'next';
import Script from 'next/script';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import MainLayout from './components/MainLayout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://majestikmagik.dev'),
  alternates: {
    canonical: 'https://majestikmagik.dev',
  },
  title: 'Majestik Magik - Web Engineering & AI Optimization Services',
  description:
    'High-impact web engineering, Core Web Vitals optimization, and AI visibility services for founders and businesses. Shipped within 24–72 hours.',
  authors: [{ name: 'Majestik Magik' }],
  manifest: '/site.webmanifest',
  icons: {
    icon: '/img/majestikmagik_logo_indigo-64x64.webp',
    shortcut: '/img/majestikmagik_logo_indigo-64x64.webp',
    apple: '/img/majestikmagik_logo_indigo-64x64.webp',
  },
  openGraph: {
    title: 'Majestik Magik - Web Engineering & AI Optimization Services',
    description:
      'High-impact web engineering, Core Web Vitals optimization, and AI visibility services for founders and businesses. Shipped within 24–72 hours.',
    url: 'https://majestikmagik.dev',
    siteName: 'Majestik Magik',
    images: [
      {
        url: '/img/screenshot_mm_main.webp',
        width: 1200,
        height: 630,
        alt: 'Majestik Magik website screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Majestik Magik - Web Engineering & AI Optimization Services',
    description:
      'High-impact web engineering, Core Web Vitals optimization, and AI visibility services for founders and businesses. Shipped within 24–72 hours.',
    images: ['/img/screenshot_mm_main.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Head>
        <link
          rel="preload"
          href="/fonts/inter-v12-latin-regular.woff2" // Adjust path if needed
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-[#07080e] text-slate-200 overflow-x-hidden antialiased">
        <MainLayout>{children}</MainLayout>

        {/* Global Trustpilot Widget - Desktop only, loaded after page is idle */}
        <Script
          strategy="lazyOnload"
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        />

        {/* Speakable Schema — signals key chunks to AI crawlers */}
        <script
          type="application/ld+json"
          id="speakable-structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://majestikmagik.dev",
              "name": "Majestik Magik - Web Engineering & AI Optimization Services",
              "description": "High-impact web engineering, Core Web Vitals optimization, and AI visibility services for founders and businesses. Shipped within 24–72 hours.",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [
                  "#home-heading",
                  "#services-heading",
                  "#micro-services-heading",
                  "#team-heading",
                  "[aria-label='Majestik Magik - Web Engineering & AI Optimization Services']"
                ]
              },
              "mainEntity": {
                "@type": "ItemList",
                "name": "Core Services",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "AI Infrastructure & Growth Systems", "description": "Custom AI workflow integrations, scalable infrastructure on AWS and Cloudflare, automated pipelines, and new revenue streams through AI-driven precision." },
                  { "@type": "ListItem", "position": 2, "name": "Custom Website Engineering", "description": "React and Next.js architecture optimized for speed and SEO, tailored UI/UX, full-stack API integrations, deployed to Vercel, Cloudflare, or AWS." },
                  { "@type": "ListItem", "position": 3, "name": "Technical SEO & AI Visibility", "description": "Structured JSON-LD schema for Google and LLM crawlers, Core Web Vitals optimization, GEO strategy for ChatGPT Search and Perplexity." },
                  { "@type": "ListItem", "position": 4, "name": "Digital Marketing & Paid Campaigns", "description": "Meta and Google campaign setup, CRM integrations, conversion tracking, and monthly performance reporting." },
                  { "@type": "ListItem", "position": 5, "name": "AI Code Extraction & Frontend Quick-Fix", "description": "Clean export of front-end assets off no-code platforms. Fix UI rendering, CSS breakages, and deploy to Vercel, Netlify, or Cloudflare. Starting at $200." },
                  { "@type": "ListItem", "position": 6, "name": "Core Web Vitals & Speed Overhaul", "description": "Maximize LCP, INP, and CLS scores. Crush mobile latency by purging rendering bloat and optimizing script hydration. Starting at $1,500." },
                  { "@type": "ListItem", "position": 7, "name": "Technical GEO & AI Visibility Audit", "description": "Audit platform performance and inject optimized graph schema so AI engines like ChatGPT Search and Perplexity crawl, cite, and recommend your site. Starting at $2,500." }
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
                    "jobTitle": "Lead Software Engineer & Architect",
                    "url": "https://github.com/jmathtech"
                  },
                  "knowsAbout": [
                    "Low-level web engineering",
                    "Core Web Vitals optimization",
                    "Next.js architecture",
                    "GraphQL API design",
                    "Generative Engine Optimization",
                    "Performance troubleshooting",
                    "Stripe subscription infrastructure",
                    "Technical SEO",
                    "E-commerce deployment",
                    "Lovable code export and migration",
                    "Base44 app rescue service",
                    "Fix broken vibe coded app",
                    "Connect Supabase database to Lovable",
                    "Deploy Bolt.new to AWS and Vercel",
                    "AI prototype to production deployment",
                    "Vibe coding rescue and repair",
                    "AI-generated app debugging",
                    "No-code to production migration"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Engineering & Optimization Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Website Speed Optimization",
                          "description": "Deep hardware-conscious optimizations to eliminate script execution overhead, maximize Core Web Vitals, and drop mobile latencies by 50% or more."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Technical Platform Repair",
                          "description": "Same-day bug fixes and logic debugging for React, WordPress, Shopify, and Webflow ecosystems."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "TechService",
                  "@id": "https://app.majestikmagik.dev/",
                  "name": "Pivot Quest",
                  "provider": { "@id": "https://majestikmagik.dev/" },
                  "description": "An AI-powered business operating engine featuring multi-model chat environments, dynamic data tables, and scalable asynchronous API infrastructure.",
                  "category": "SaaS Platform",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "description": "Usage-based metered token billing via integrated Stripe infrastructure."
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://majestikmagik.dev/faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What services does Majestik Magik offer?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Custom web design & development (React/Next.js/WordPress), eCommerce, SEO, analytics, CRM tools, AI integrations, and ongoing support/maintenance for professional services, e-commerce, and small businesses. We work with industries such as manufacturing, professional services, HVAC, plumbing, roofing, etc to deliver high-quality digital and AI solutions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I request a quote?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Email contact@majestikmagik.dev or use the contact form on our site. We’ll schedule a 15–20 min discovery call and send a proposal within 2–3 business days."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What industries do you specialize in?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Local service businesses, startups/SaaS, and eCommerce. We tailor deliverables to your industry’s workflow."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does Majestik Magik fix slow mobile page load times?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We employ low-level engineering tactics such as custom delayed script-hydration engines and third-party script deferrals. This isolates primary CPU threads, raising mobile performance benchmarks efficiently."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is Generative Engine Optimization or GEO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "GEO optimizes technical web infrastructure and structured semantics so real-time AI crawlers (like ChatGPT Search and Perplexity) can parse, understand, and cite your business in chat-driven searches."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does a typical website project take?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Basic sites: ~1–5+ days. Mid-sized: 4–6 weeks. Custom/complex or eCommerce: 6–10+ weeks. Timelines depend on content readiness and feedback speed."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What does your process look like?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Discovery → Scope/Proposal → Design → Build → Review/QA → Launch → Training & post-launch support. You’ll have a single point of contact throughout."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you require a deposit?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Projects usually start with 40–50% to book the slot, with the remainder tied to milestones or pre-launch."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What platforms/CMS do you support?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "WordPress (with performance/security best practices), custom Next.js sites, and headless setups. We recommend based on your goals and team capacity."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you provide WordPress training?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes—video tutorials and live walkthroughs. Start here: https://majestikmagik.dev/training/wordpress"
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Who owns my website and content after launch?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You do. Upon final payment, you own your site code (per contract), content, and assets. We’ll transfer admin credentials and repos as needed."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you handle hosting and domains?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We can set up hosting (e.g., WP Engine, AWS) and configure your domain/DNS. You can keep accounts in your name; we’ll help manage access securely."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer maintenance plans?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes—updates, backups, uptime monitoring, security hardening, small edits, and monthly performance/SEO reports. Plans are tailored to your site."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you improve my site speed and Core Web Vitals?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. We optimize images, code-split, cache, tune servers/CDN, and audit third-party scripts to lift CWV scores."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you do SEO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes—technical SEO, on-page optimization, schema, and content guidance. We also set up analytics, goals, and dashboards."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What about accessibility (ADA/WCAG)?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We follow WCAG 2.1 AA best practices in structure, contrast, keyboard navigation, and ARIA. We can add ongoing monitoring if needed."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How many design revisions are included?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Typically two rounds per page/template in the base scope. Additional revisions are welcome and billed at our hourly rate or via a change order."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you migrate my current site?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We’ll audit your stack, create a migration plan, and move content with minimum downtime. We can modernize the design during the move."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you integrate payments and subscriptions?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes—Stripe for one-time payments, subscriptions, and marketplaces. We also implement best practices for security and compliance."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you handle security?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hardened hosting, least-privilege access, HTTPS, regular updates, WAF/CDN options, backups, and security monitoring are standard in our builds."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What analytics will I get?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "GA4 or privacy-friendly analytics, Search Console, heatmaps (optional), and goal/event tracking with monthly summaries in maintenance plans."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you write copy or create content?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We can refine your copy or create new content. We also offer guided prompts and brand voice frameworks if you prefer to draft in-house."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What if I need urgent changes after launch?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We offer expedited support windows and on-call options. For emergencies (e.g., downtime), we prioritize incident response immediately."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you connect my CRM or marketing tools?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes—HubSpot, Mailchimp/Brevo, Zapier, Meta/Google pixels, and custom APIs. For local businesses, we can also onboard you to our Community CRM."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you price projects?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Fixed-scope packages for common builds and customized quotes for complex work. We’ll provide clear deliverables, timeline, and payment schedule."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer refunds?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "See our Refund Policy at /refund-policy. We scope carefully and communicate milestones to avoid surprises."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are your support hours?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Standard support is Monday–Friday, 9am–5pm ET. We offer premium/after-hours support plans for teams that need extended coverage."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you help with branding or logos?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes—brand discovery, logo kits, typography/color systems, and usage guidelines to keep your brand consistent across channels."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I send files and credentials securely?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We’ll share a secure upload link or password manager request. Avoid emailing passwords; we use least-privilege access and revoke when finished."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you help with site audits and roadmaps?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes—tech, UX, SEO, and conversion audits with priority roadmaps and quick-win recommendations."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you export and migrate a Lovable app to a real codebase?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We specialize in Lovable code export and migration — taking your AI-generated project and moving it into a clean, production-ready Next.js or React codebase with proper routing, environment variables, and deployment pipelines."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer a Base44 app rescue service?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. If your Base44 app is broken, stalled, or needs to be migrated off the platform, we can audit the generated code, patch logic errors, and redeploy it as a standalone production application."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you fix a broken vibe coded app?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. We rescue vibe-coded apps built with Lovable, Bolt.new, Base44, or similar AI builders. Common fixes include broken routing, missing API integrations, database connection errors, and deployment failures."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you connect a Supabase database to a Lovable app?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We configure Supabase projects, set up Row Level Security, wire environment variables, and connect your Lovable-exported frontend to a live Supabase backend with auth, storage, and real-time data."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you deploy a Bolt.new app to AWS or Vercel?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We take your Bolt.new export, clean up the build config, and deploy it to Vercel, AWS Amplify, or Cloudflare Pages — including custom domains, CI/CD pipelines, and environment variable management."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you handle AI prototype to production deployment?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We take AI-generated prototypes from tools like Lovable, Bolt.new, v0, or Base44 and harden them for production: refactoring fragile code, adding error handling, securing API keys, setting up databases, and deploying to scalable infrastructure."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where can I read your policies?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Privacy, Terms, Cookies, Refunds, IP, and Cyber Security policies are linked in our site footer for transparency."
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