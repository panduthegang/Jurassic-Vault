import React from 'react';
import { motion } from 'motion/react';
import { Clock, Shield, Feather, Globe, Compass, Sparkles } from 'lucide-react';
import { 
  DISCOVERIES_COL1, 
  DISCOVERIES_COL2, 
  DISCOVERIES_COL3, 
  DiscoveryData 
} from '../data/discoveries';

const ICON_MAP = {
  Clock,
  Shield,
  Feather,
  Globe,
  Compass,
  Sparkles
};

export default function Discoveries() {
  const renderCard = (discovery: DiscoveryData) => {
    const IconComponent = ICON_MAP[discovery.iconName] || Compass;
    
    return (
      <div
        key={discovery.id}
        className="w-full rounded-2xl liquid-glass border border-white/[0.08] p-5 sm:p-6 bg-white/[0.01] hover:border-white/20 transition-all duration-300 flex flex-col justify-between select-none relative group"
      >
        {/* Subtle decorative background glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 75%)' }}
        />
        
        <div>
          {/* Card Top Metadata */}
          <div className="flex items-center justify-between mb-4 text-[9px] font-mono tracking-widest text-white/40 uppercase">
            <span className="flex items-center gap-1.5">
              <IconComponent className="w-3.5 h-3.5 text-white/50" />
              {discovery.tag}
            </span>
            <span>#{discovery.id}</span>
          </div>

          {/* Title */}
          <h3 className="font-sans font-semibold text-lg text-white mb-2 leading-snug tracking-tight">
            {discovery.title}
          </h3>
        </div>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light mt-2">
          {discovery.description}
        </p>
      </div>
    );
  };

  return (
    <section id="discoveries" className="w-full bg-black py-24 px-4 sm:px-8 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Dynamic light blur elements */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.015] rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 block mb-3">
            CHRONICLES OF DEEP TIME
          </span>
          <h2 className="font-display italic text-5xl sm:text-7xl text-white font-normal mb-4">
            Prehistoric Ledger
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/50 max-w-lg mx-auto font-light leading-relaxed">
            An automated stream of paleontological insights, biological discoveries, and evolutionary milestones. Hover to pause the telemetry stream.
          </p>
        </div>

        {/* 3-Column Vertical Infinite Scroll Marquee Container */}
        <div className="relative h-[650px] overflow-hidden rounded-3xl border border-white/[0.05] bg-black/40 backdrop-blur-sm p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
          before:absolute before:top-0 before:left-0 before:right-0 before:h-20 before:bg-gradient-to-b before:from-black before:to-transparent before:z-20 before:pointer-events-none
          after:absolute after:bottom-0 after:left-0 after:right-0 after:h-20 after:bg-gradient-to-t after:from-black after:to-transparent after:z-20 after:pointer-events-none"
        >
          {/* Column 1 - Scrolling UP */}
          <div className="flex flex-col gap-6 overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 animate-marquee-up hover-pause">
              {[...DISCOVERIES_COL1, ...DISCOVERIES_COL1].map((disc, idx) => (
                <div key={`${disc.id}-${idx}`}>
                  {renderCard(disc)}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Scrolling DOWN */}
          <div className="hidden sm:flex flex-col gap-6 overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 animate-marquee-down hover-pause">
              {[...DISCOVERIES_COL2, ...DISCOVERIES_COL2].map((disc, idx) => (
                <div key={`${disc.id}-${idx}`}>
                  {renderCard(disc)}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Scrolling UP */}
          <div className="hidden md:flex flex-col gap-6 overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 animate-marquee-up hover-pause">
              {[...DISCOVERIES_COL3, ...DISCOVERIES_COL3].map((disc, idx) => (
                <div key={`${disc.id}-${idx}`}>
                  {renderCard(disc)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
