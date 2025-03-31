
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import PainPointsSection from '../components/PainPointsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import IntegrationSection from '../components/IntegrationSection';
import TestimonialsSection from '../components/TestimonialsSection';
import UseCasesSection from '../components/UseCasesSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <PainPointsSection />
        <HowItWorksSection />
        <IntegrationSection />
        <TestimonialsSection />
        <UseCasesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
