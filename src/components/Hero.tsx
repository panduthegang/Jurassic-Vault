import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Eye } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden pt-32 pb-16 px-4 sm:px-8">
      {/* Immersive Videosphere with Maximum Visibility & Minimal Framing Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        {/* Solid fallback */}
        <div className="absolute inset-0 bg-black z-[-3]" />
        
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-[-2] ${
            videoLoaded ? 'opacity-95' : 'opacity-20'
          }`}
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source
            src="https://res.cloudinary.com/dkev7ein3/video/upload/v1781963268/Dinasour_Hero_z9oxpu.mp4"
            type="video/mp4"
          />
        </video>

        {/* Minimal gradient to fade to black at the base while preserving full central and top video details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
      </div>

      {/* Main Core Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Compact, Ultra-clean display typography with Instrument Serif display and Manrope body */}
        <div className="max-w-3xl mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display italic text-7xl sm:text-9xl tracking-tight leading-none text-white font-normal"
          >
            The Jurassic
            <span className="block text-white/90 mt-2">
              Vault
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-white/90 max-w-lg mx-auto font-light leading-relaxed mt-8"
          >
            Discover lost ecosystems, iconic species,
and the giants that once ruled our planet.
          </motion.p>
        </div>

        {/* Pure liquid glass styled action buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center z-20"
        >
          <button className="w-full sm:w-auto px-9 py-4 rounded-full liquid-glass text-white hover:bg-white/5 font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer">
            <Compass className="w-4 h-4 text-white" />
            Enter Experience
          </button>

          <button className="w-full sm:w-auto px-9 py-4 rounded-full liquid-glass text-white hover:bg-white/5 font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer">
            <Eye className="w-4 h-4 text-white" />
            Vocalized Reconstruct
          </button>
        </motion.div>

      </div>
    </section>
  );
}
