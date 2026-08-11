import dynamic from 'next/dynamic';
import {
  HeroSection,
  PricingSection,
  // CoreEngineSection,
  TeamSection,
  TestimonialsSection,
  FAQSection,
  AIContentLayer,
} from './components';
import ScrollAnimator from './components/ScrollAnimator';

const ChatbotController = dynamic(() => import('./components/ChatbotController'));

export default function App() {
  return (
    <>
      <ScrollAnimator />
      <main aria-label="Majestik Magik - Web Engineering & AI Optimization Services">
        <HeroSection />
        <AIContentLayer />
        {/* <CoreEngineSection /> */}
        <PricingSection pricingPlans={[]} />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <ChatbotController />
    </>
  );
}
