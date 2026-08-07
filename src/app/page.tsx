import {
  HeroSection,
  PricingSection,
  CoreEngineSection,
  TeamSection,
  TestimonialsSection,
} from './components';
import ChatbotController from './components/ChatbotController';
import ScrollAnimator from './components/ScrollAnimator';

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
