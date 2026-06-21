import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpeciesArchive from './components/SpeciesArchive';
import Discoveries from './components/Discoveries';
import Footer from './components/Footer';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'exhibits', 'discoveries'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);
      if (intersectingEntries.length > 0) {
        // Sort by intersection ratio descending to get the most visible section
        intersectingEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setCurrentSection(intersectingEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -40% 0px',
      threshold: [0.1, 0.25, 0.5]
    });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
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

        {/* Vertical Infinite Marquee Discoveries Section */}
        <Discoveries />
      </main>

      {/* Minimal Liquid Glass Centered Footer */}
      <Footer />
    </div>
  );
}
