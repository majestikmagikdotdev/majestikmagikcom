import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  HeroSection,
  PricingSection,
  TeamSection,
  TestimonialsSection,
  FAQSection,
  AIContentLayer,
  ServicesSection,
  PivotQuestSection,
} from './components';
import ComparisonChart from './components/ComparisonChart';

const ChatbotController = dynamic(() => import('./components/ChatbotController'));

export default function App() {
  return (
    <>
      <main aria-label="Majestik Magik — Web Engineering, AI Visibility & Digital Systems">
        {/* 1. Hook — who we are and what we do */}
        <HeroSection />
        <AIContentLayer />

        {/* 2. Problem/solution — build resonance and desire */}
        <ServicesSection />

        {/* 3. Why us — competitive differentiation */}
        <ComparisonChart />

        {/* 4. The ask — now they're ready to buy */}
        <PricingSection pricingPlans={[]} />

        {/* 5. Social proof — establish trust post-price */}
        <TestimonialsSection />

        {/* 6. Who's behind it — reinforce credibility */}
        <TeamSection />

        {/* 7. Handle objections — close */}
        <FAQSection />

        {/* 7.5. Not ready yet? Redirect to Pivot Quest instead of losing them */}
        <PivotQuestSection />

        {/* 8. Clear contact path — visible next step for ready buyers */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="relative z-0 py-16 md:py-28 border-t border-[#334155]"
          style={{ background: 'rgb(15, 23, 42)' }}
        >
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative z-20 w-full px-4 md:px-6 mx-auto text-center max-w-3xl">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-[#1e293b] px-3 py-1 rounded border border-[#334155]">
              Ready to Build?
            </span>
            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tight mb-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 bg-clip-text text-transparent">
                Great Together
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
              Custom builds start at $10,000. Tell us about your project and we&apos;ll get back to you within 24 hours with a scoping call.
            </p>
            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 border border-indigo-400/30"
            >
              Start a Project →
            </Link>
          </div>
        </section>
      </main>
      <ChatbotController />
    </>
  );
}
