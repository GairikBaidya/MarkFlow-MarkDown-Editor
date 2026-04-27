import ParticleCanvas from "../components/landing/ParticleCanvas";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import LiveDemoSection from "../components/landing/LiveDemoSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FooterSection from "../components/landing/FooterSection";

export default function LandingPage() {
  return (
    <div className="relative bg-surface-base min-h-screen text-white overflow-x-hidden">
      <ParticleCanvas />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LiveDemoSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
