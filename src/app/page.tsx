import dynamic from 'next/dynamic';
import {
  HeroSection,
  PricingSection,
  TeamSection,
  TestimonialsSection,
  FAQSection,
  AIContentLayer,
  ServicesSection,
  ContactFormSection,
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

        {/* 2. Social proof — establish trust before the ask */}
        <TestimonialsSection />

        {/* 3. Problem/solution — build resonance and desire */}
        <ServicesSection />

        {/* 4. Why us — competitive differentiation */}
        <ComparisonChart />

        {/* 5. The ask — now they're ready to buy */}
        <PricingSection pricingPlans={[]} />

        {/* 6. Who's behind it — reinforce credibility post-price */}
        <TeamSection />

        {/* 7. Handle objections — close */}
        <FAQSection />

        {/* 8. Clear contact path — visible next step for ready buyers */}
        <ContactFormSection
          title="Let's Build Something Great Together"
          subtitle="Have questions? Need a custom quote? Tell us about your project and we'll get back to you within 24 hours."
        />
      </main>
      <ChatbotController />
    </>
  );
}
