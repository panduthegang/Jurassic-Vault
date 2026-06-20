import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');

  return (
    <div className="relative min-h-screen bg-[#040407] text-white selection:bg-white/20 selection:text-white">
      {/* Curved Pure Glassmorphism Navbar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={(sec) => setCurrentSection(sec)}
      />

      {/* Main Container */}
      <main>
        {/* Minimal High-Impact Pure Glassmorphism Hero Section */}
        <Hero />
      </main>
    </div>
  );
}
