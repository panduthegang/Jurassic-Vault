import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair, ArrowLeft, ArrowRight } from 'lucide-react';
import { DINOSAURS, Dinosaur } from '../data/dinosaurs';

export default function SpeciesArchive() {
  const [selectedSpecies, setSelectedSpecies] = useState<Dinosaur | null>(null);
  const [modalImgLoaded, setModalImgLoaded] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Silently preload ALL dinosaur images into browser cache after initial render.
  // First 3 are already eager-loaded in the DOM; we skip those and start from index 3.
  // This ensures every card's image is cache-warm before the user ever clicks it.
  useEffect(() => {
    const timer = setTimeout(() => {
      DINOSAURS.slice(3).forEach((dino) => {
        const img = new Image();
        img.src = dino.image;
      });
    }, 800); // slight delay so it doesn't compete with initial page paint
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedSpecies) {
      setModalImgLoaded(false); // reset skeleton on each new selection
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedSpecies]);

  const scroll = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (container) {
      const card = container.querySelector('[data-carousel-card]');
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 24; // gap-6 matches tailwind spacing
        const scrollAmount = cardWidth + gap;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="exhibits" className="w-full bg-black py-24 px-4 sm:px-8 border-t border-white/5 relative z-10">
      {/* Absolute high-contrast mesh elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/[0.02] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title Group and Navigation Headers */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <h2 className="font-display italic text-5xl sm:text-7xl text-white font-normal mb-3">
              The Species Ledger
            </h2>
            <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md uppercase tracking-widest font-normal">
              Verbatim biological cataloging from original high-fidelity fossil extractions
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full flex items-center justify-center liquid-glass text-white/80 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full flex items-center justify-center liquid-glass text-white/80 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Area */}
        <div
          ref={carouselRef}
          className="flex gap-6 items-stretch overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {DINOSAURS.map((dino, idx) => (
            <div
              key={dino.id}
              data-carousel-card
              onClick={() => setSelectedSpecies(dino)}
              className="snap-start flex-shrink-0 w-[85vw] sm:w-[325px] md:w-[calc((100%-48px)/3)] rounded-3xl liquid-glass overflow-hidden group flex flex-col border border-white/[0.08] p-4 bg-white/[0.01] cursor-pointer hover:border-white/20 transition-all duration-300"
            >
              {/* 1:1 Portrait Image Frame with top-side padding inside round card */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-950">
                <img
                  src={dino.image}
                  alt={dino.name}
                  loading={idx < 3 ? "eager" : "lazy"}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              {/* Card Info Content */}
              <div className="pt-5 flex flex-col justify-between flex-grow">
                <div>
                  {/* Main Name */}
                  <h3 className="font-sans font-semibold text-xl tracking-tight text-white mb-2">
                    {dino.name}
                  </h3>
                  
                  {/* Brief description */}
                  <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6">
                    {dino.description}
                  </p>
                </div>

                {/* Liquid Glass Interactive Trigger Visual */}
                <div
                  className="w-full mt-auto py-2.5 rounded-full liquid-glass text-white/90 group-hover:text-white group-hover:bg-white/10 font-mono text-[9px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 group-hover:border-white/10"
                >
                  <Crosshair className="w-3.5 h-3.5 text-white" />
                  Inspect Biometrics
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Immersive Telemetry Diagnostic Modal (Selected Species details) */}
      <AnimatePresence>
        {selectedSpecies && (
          <div className="fixed inset-0 z-[200] overflow-y-auto flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpecies(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200]"
            />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="relative w-full max-w-3xl rounded-3xl liquid-glass overflow-hidden border border-white/10 bg-zinc-950/95 z-[210] shadow-2xl my-auto grid grid-cols-1 md:grid-cols-2"
            >
              {/* Left Column: Curved Immersive Image with Padding */}
              <div className="p-6 md:p-8 md:pr-4 flex items-center justify-center">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-inner">
                  {/* Skeleton shimmer — visible until image finishes loading */}
                  {!modalImgLoaded && (
                    <div className="absolute inset-0 rounded-2xl bg-zinc-800 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.4s_infinite]" />
                    </div>
                  )}
                  <img
                    key={selectedSpecies.id}
                    src={selectedSpecies.image}
                    alt={selectedSpecies.name}
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="async"
                    onLoad={() => setModalImgLoaded(true)}
                    className={`w-full h-full object-cover select-none pointer-events-none rounded-2xl transition-opacity duration-300 ${
                      modalImgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {/* Ambient shadow gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
                </div>
              </div>

              {/* Right Column: Diagnostic Content Details */}
              <div className="relative p-6 sm:p-8 md:pl-4 flex flex-col gap-5 justify-between">
                {/* Absolute Close Top Right Corner */}
                <div className="absolute top-5 right-5 z-50">
                  <button
                    onClick={() => setSelectedSpecies(null)}
                    className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass text-white/70 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all font-mono text-[12px] cursor-pointer"
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex flex-col gap-5">
                  {/* Header Info */}
                  <div>
                    <span className="font-mono text-[8px] uppercase text-white/40 tracking-[0.2em] block mb-0.5">
                      GENETIC LEDGER SCAN
                    </span>
                    <h3 className="font-display italic text-3xl sm:text-4xl text-white font-normal tracking-tight">
                      {selectedSpecies.name}
                    </h3>
                    <p className="font-mono text-[10px] text-white/50 italic mt-0.5">
                      {selectedSpecies.scientificName}
                    </p>
                  </div>

                  {/* Substantive Description Summary */}
                  <div className="border-t border-white/5 pt-4">
                    <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                      {selectedSpecies.description}
                    </p>
                  </div>

                  {/* Curated Key Specifications List */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 mt-1 grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-mono text-[8px] text-white/40 block uppercase tracking-wider">Chronology</span>
                      <span className="font-sans text-xs text-white/90 font-light mt-0.5 block">{selectedSpecies.period}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[8px] text-white/40 block uppercase tracking-wider">Diet Style</span>
                      <span className="font-sans text-xs text-white/90 font-light mt-0.5 flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${selectedSpecies.diet === 'Carnivore' ? 'bg-red-500' : 'bg-green-500'}`} />
                        {selectedSpecies.diet}
                      </span>
                    </div>
                    <div>
                      <span className="font-mono text-[8px] text-white/40 block uppercase tracking-wider">Length x Height</span>
                      <span className="font-sans text-xs text-white/90 font-light mt-0.5 block">{selectedSpecies.sizeLength} × {selectedSpecies.sizeHeight}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[8px] text-white/40 block uppercase tracking-wider">Estimated Mass</span>
                      <span className="font-sans text-xs text-white/90 font-light mt-0.5 block">{selectedSpecies.weight}</span>
                    </div>
                  </div>

                  {/* Main Biometrics List */}
                  <div className="border-t border-white/5 pt-4">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-white/40 block mb-2">
                      Key Biometrics
                    </span>
                    <ul className="space-y-1.5">
                      {selectedSpecies.biometrics.slice(0, 2).map((biometric, bIdx) => (
                        <li key={bIdx} className="flex gap-2 items-center text-xs text-white/85 font-sans">
                          <span className="text-white/30 font-mono text-[10px]">•</span>
                          <span className="font-light">{biometric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Centered Close Action Button */}
                  <div className="flex justify-center pt-3 border-t border-white/5">
                    <button
                      onClick={() => setSelectedSpecies(null)}
                      className="px-6 py-2.5 rounded-full liquid-glass text-white/90 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 font-mono text-[9px] uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-md active:scale-95"
                    >
                      Close Ledger
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
