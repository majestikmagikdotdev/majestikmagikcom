import dynamic from 'next/dynamic';
import {
  HeroSection,
  PricingSection,
  CoreEngineSection,
  TeamSection,
  TestimonialsSection,
} from './components';
import ScrollAnimator from './components/ScrollAnimator';

const ChatbotController = dynamic(() => import('./components/ChatbotController'));

export default function App() {
  return (
    <>
      <ScrollAnimator />
      <main aria-label="Majestik Magik - Web Engineering & AI Optimization Services">
        <HeroSection />
        <CoreEngineSection />
        <PricingSection pricingPlans={[]} />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <ChatbotController />
    </>
  );
}
