import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair, ArrowLeft, ArrowRight } from 'lucide-react';
import { DINOSAURS, Dinosaur } from '../data/dinosaurs';

// ─── Pre-build a URL map so images can be eagerly preloaded ──────────────────
const IMAGE_URLS = DINOSAURS.map((d) => d.image);

// ─── Memoized Card — only re-renders when its own dino changes ───────────────
const DinoCard = memo(function DinoCard({
  dino,
  idx,
  onSelect,
}: {
  dino: Dinosaur;
  idx: number;
  onSelect: (d: Dinosaur) => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      data-carousel-card
      onClick={() => onSelect(dino)}
      // will-change:transform creates a GPU composite layer → smooth scroll & no black flash
      className="snap-start flex-shrink-0 w-[85vw] sm:w-[325px] md:w-[calc((100%-48px)/3)] rounded-3xl liquid-glass overflow-hidden group flex flex-col border border-white/[0.08] p-4 bg-white/[0.01] cursor-pointer hover:border-white/20 transition-colors duration-300"
      style={{ willChange: 'transform' }}
    >
      {/* 1:1 Image Frame */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-950">
        {/* Skeleton — shown until image paints */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-zinc-900 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.4s_infinite]" />
          </div>
        )}
        <img
          src={dino.image}
          alt={dino.name}
          // First 4 eager, rest lazy — browser will also prefetch via <link> tags we inject
          loading={idx < 4 ? 'eager' : 'lazy'}
          decoding={idx < 4 ? 'sync' : 'async'}
          fetchPriority={idx === 0 ? 'high' : 'auto'}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Card text */}
      <div className="pt-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-sans font-semibold text-xl tracking-tight text-white mb-2">
            {dino.name}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6">
            {dino.description}
          </p>
        </div>
        <div className="w-full mt-auto py-2.5 rounded-full liquid-glass text-white/90 group-hover:text-white group-hover:bg-white/10 font-mono text-[9px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 group-hover:border-white/10">
          <Crosshair className="w-3.5 h-3.5 text-white" />
          Inspect Biometrics
        </div>
      </div>
    </div>
  );
});

// ─── Memoized Modal — rendered via a portal-like fixed div, isolated from carousel ──
const SpeciesModal = memo(function SpeciesModal({
  species,
  onClose,
}: {
  species: Dinosaur;
  onClose: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Reset loaded state when species changes (key prop on img handles this too)
  useEffect(() => {
    setImgLoaded(false);
  }, [species.id]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal box — elevated above backdrop */}
      <motion.div
        key="modal-box"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ type: 'spring', damping: 30, stiffness: 240, mass: 0.8 }}
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 z-[210] shadow-2xl my-auto grid grid-cols-1 md:grid-cols-2"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Left: Image */}
        <div className="p-6 md:p-8 md:pr-4 flex items-center justify-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-inner">
            {!imgLoaded && (
              <div className="absolute inset-0 bg-zinc-800 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.4s_infinite]" />
              </div>
            )}
            <img
              key={species.id}
              src={species.image}
              alt={species.name}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover select-none pointer-events-none rounded-2xl transition-opacity duration-300 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
          </div>
        </div>

        {/* Right: Info */}
        <div className="relative p-6 sm:p-8 md:pl-4 flex flex-col gap-5 justify-between">
          {/* Close button */}
          <div className="absolute top-5 right-5 z-50">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass text-white/70 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all font-mono text-[12px] cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {/* Header */}
            <div>
              <span className="font-mono text-[8px] uppercase text-white/40 tracking-[0.2em] block mb-0.5">
                GENETIC LEDGER SCAN
              </span>
              <h3 className="font-display italic text-3xl sm:text-4xl text-white font-normal tracking-tight">
                {species.name}
              </h3>
              <p className="font-mono text-[10px] text-white/50 italic mt-0.5">
                {species.scientificName}
              </p>
            </div>

            {/* Description */}
            <div className="border-t border-white/5 pt-4">
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {species.description}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 grid grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-[8px] text-white/40 block uppercase tracking-wider">Chronology</span>
                <span className="font-sans text-xs text-white/90 font-light mt-0.5 block">{species.period}</span>
              </div>
              <div>
                <span className="font-mono text-[8px] text-white/40 block uppercase tracking-wider">Diet Style</span>
                <span className="font-sans text-xs text-white/90 font-light mt-0.5 flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${species.diet === 'Carnivore' ? 'bg-red-500' : 'bg-green-500'}`} />
                  {species.diet}
                </span>
              </div>
              <div>
                <span className="font-mono text-[8px] text-white/40 block uppercase tracking-wider">Length x Height</span>
                <span className="font-sans text-xs text-white/90 font-light mt-0.5 block">{species.sizeLength} × {species.sizeHeight}</span>
              </div>
              <div>
                <span className="font-mono text-[8px] text-white/40 block uppercase tracking-wider">Estimated Mass</span>
                <span className="font-sans text-xs text-white/90 font-light mt-0.5 block">{species.weight}</span>
              </div>
            </div>

            {/* Biometrics */}
            <div className="border-t border-white/5 pt-4">
              <span className="font-mono text-[8px] uppercase tracking-widest text-white/40 block mb-2">
                Key Biometrics
              </span>
              <ul className="space-y-1.5">
                {species.biometrics.slice(0, 2).map((biometric, bIdx) => (
                  <li key={bIdx} className="flex gap-2 items-center text-xs text-white/85 font-sans">
                    <span className="text-white/30 font-mono text-[10px]">•</span>
                    <span className="font-light">{biometric}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Close action */}
            <div className="flex justify-center pt-3 border-t border-white/5">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full liquid-glass text-white/90 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 font-mono text-[9px] uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-md active:scale-95"
              >
                Close Ledger
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body!
  );
});

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function SpeciesArchive() {
  const [selectedSpecies, setSelectedSpecies] = useState<Dinosaur | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Inject <link rel="prefetch"> tags for images 5+ so the browser queues them
  // during idle time without competing with the initial paint.
  useEffect(() => {
    let mounted = true;
    const inject = () => {
      if (!mounted) return;
      IMAGE_URLS.slice(4).forEach((url) => {
        if (document.querySelector(`link[href="${url}"]`)) return;
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      });
    };
    // Use requestIdleCallback when available, else a 1s timeout
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(inject, { timeout: 2000 });
    } else {
      const t = setTimeout(inject, 1000);
      return () => clearTimeout(t);
    }
    return () => { mounted = false; };
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedSpecies) {
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

  const handleSelect = useCallback((dino: Dinosaur) => {
    setSelectedSpecies(dino);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedSpecies(null);
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>('[data-carousel-card]');
    if (!card) return;
    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section id="exhibits" className="w-full bg-black py-24 px-4 sm:px-8 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/[0.02] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <h2 className="font-display italic text-5xl sm:text-7xl text-white font-normal mb-3">
              The Species Ledger
            </h2>
            <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md uppercase tracking-widest font-normal">
              Verbatim biological cataloging from original high-fidelity fossil extractions
            </p>
          </div>

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

        {/* Carousel
          - overflow-x-scroll (not auto) → enables momentum/rubber-band on iOS
          - snap-x snap-mandatory for desktop arrow nav feel
          - touch-pan-x + overscroll-contain prevents janky page scroll bleed
          - contain:layout+style isolates reflows inside the scroll box
        */}
        <div
          ref={carouselRef}
          className="flex gap-6 items-stretch overflow-x-scroll scrollbar-none snap-x snap-mandatory pb-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            overscrollBehaviorX: 'contain',
            contain: 'layout style',
          }}
        >
          {DINOSAURS.map((dino, idx) => (
            <DinoCard
              key={dino.id}
              dino={dino}
              idx={idx}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      {/* Modal — rendered inside AnimatePresence but outside carousel DOM tree */}
      <AnimatePresence mode="wait">
        {selectedSpecies && (
          <SpeciesModal
            key={selectedSpecies.id}
            species={selectedSpecies}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
