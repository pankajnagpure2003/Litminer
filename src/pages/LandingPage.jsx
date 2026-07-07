import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WebGLShader from '../components/landing/WebGLShader';
import HeroSection from '../components/landing/HeroSection';
import StatsSection from '../components/landing/StatsSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import PricingSection from '../components/landing/PricingSection';
import WhyUsSection from '../components/landing/WhyUsSection';
import CTASection from '../components/landing/CTASection';

export default function LandingPage() {
  return (
    <div className="bg-[#09090B] text-[#e5e1e4] min-h-screen overflow-x-hidden">
      {/* WebGL Background Shader */}
      <WebGLShader />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <PricingSection />
        <WhyUsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
