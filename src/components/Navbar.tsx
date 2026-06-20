import React from 'react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

const DinosaurLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Sleek, continuous outline/fill dinosaur (Diplodocus / Brachiosaurus style) */}
    <path d="M3 18c3 0 5-2 6-4.5s1.2-5 3.3-8.8c.8-1.5 2.2-1.5 2.5-.2.5 2.3-.5 5.5 2 7.7 2 1.8 4.2 1.8 5.2 3.8s-.5 2-2 2h-6v2M11.5 18v2.5M8 18v1.5" />
  </svg>
);

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Eternity' },
    { id: 'exhibits', label: 'Vaults' },
    { id: 'lab', label: 'Acoustics' },
    { id: 'expeditions', label: 'Journeys' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4">
      <div className="max-w-5xl mx-auto rounded-full liquid-glass py-2.5 px-6 sm:px-8 flex items-center justify-between transition-all duration-500">
        {/* Brand / Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10">
            <DinosaurLogo />
          </div>
          <div>
            <span className="font-sans font-light tracking-widest text-[#ffffff] text-sm">
              KRONOS
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links - Liquid Glass Buttons */}
        <nav className="flex items-center gap-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 liquid-glass text-white hover:bg-white/5 ${
                currentSection === item.id
                  ? 'bg-white/20 font-bold'
                  : 'opacity-85 hover:opacity-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
