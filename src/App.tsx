import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpeciesArchive from './components/SpeciesArchive';
import Footer from './components/Footer';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Smoothly navigate to the Species LEDGER Vault matching exhibits, acoustics, or journeys
      const el = document.getElementById('exhibits');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-white selection:bg-white/20 selection:text-white">
      {/* Curved Liquid Glassmorphism Navbar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
      />

      {/* Main Container */}
      <main className="relative z-10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
        {/* Minimal High-Impact Pure Glassmorphism Hero Section */}
        <Hero />

        {/* Dynamic Liquid Glass Species Archive Section */}
        <SpeciesArchive />
      </main>

      {/* Minimal Liquid Glass Centered Footer */}
      <Footer />
    </div>
  );
}
