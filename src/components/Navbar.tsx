import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}


export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Eternity' },
    { id: 'exhibits', label: 'Vaults' },
    { id: 'discoveries', label: 'Discoveries' }
  ];

  const handleMobileNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4">
        <div className="max-w-5xl mx-auto rounded-full liquid-glass py-2.5 px-5 sm:px-8 flex items-center justify-between transition-all duration-500">
          {/* Brand / Logo */}
          <div 
            onClick={() => handleMobileNav('home')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img src="/logo.svg" className="w-8 h-8 invert group-hover:scale-110 transition-transform duration-300" alt="Kronos Logo" />
            <div>
              <span className="font-sans font-light tracking-[0.25em] text-[#ffffff] text-sm">
                KRONOS
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 liquid-glass text-white hover:bg-white/5 cursor-pointer ${
                  currentSection === item.id
                    ? 'bg-white/20 font-bold'
                    : 'opacity-85 hover:opacity-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Hamburger Menu Icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass text-white/90 hover:text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full screen Liquid Glass Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xl flex flex-col justify-center items-center p-6 md:hidden"
          >
            {/* Absolute Decorative Blurred Ambient Circle */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/[0.03] rounded-full filter blur-[100px] pointer-events-none" />

            {/* Title / Header inside overlay */}
            <div className="text-center mb-12 relative z-50">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 block mb-2">
                SYSTEM SECTORS
              </span>
              <div className="flex items-center gap-2.5 justify-center">
                <img src="/logo.svg" className="w-7 h-7 invert" alt="Kronos Logo" />
                <span className="font-sans font-light tracking-[0.25em] text-[#ffffff] text-sm">
                  KRONOS
                </span>
              </div>
            </div>

            {/* Navigation links stack with staggered animations */}
            <nav className="flex flex-col gap-5 items-center w-full max-w-xs relative z-50">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={() => handleMobileNav(item.id)}
                  className={`w-full py-4 rounded-2xl liquid-glass text-white/95 text-center font-display italic text-2xl tracking-wide border border-white/5 hover:bg-white/10 transition-all cursor-pointer ${
                    currentSection === item.id
                      ? 'bg-white/20 font-bold border-white/20'
                      : ''
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Footer markers */}
            {/* <div className="absolute bottom-10 text-center text-white/30 font-mono text-[8px] uppercase tracking-[0.25em]">
              AUTHENTIC METADATA CODES SECURED
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
