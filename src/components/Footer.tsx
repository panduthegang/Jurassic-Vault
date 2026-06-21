import React from 'react';
import { Clock, MapPin, Globe, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black pt-28 pb-16 px-4 sm:px-8 border-t border-white/5 sticky bottom-0 z-0 overflow-hidden font-sans">
      {/* Background Image with immersive blending overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-45 select-none"
        style={{ backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1782019348/Footer_g533x2.png')` }}
      />
      {/* Top fade gradient ensures smooth transition from the preceding section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      {/* Overall radial gradient and bottom fade to ensure text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Vantage/Aions Inspired Majestic Call-to-Action */}
        <div className="text-center mb-24 max-w-xl mx-auto">
          <h3 className="font-display italic text-4xl sm:text-6xl text-white font-normal mb-4 tracking-tight leading-none">
            See yesterday, today.
          </h3>
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light mb-7 max-w-md mx-auto">
            Step back into the original living archives of the Mesozoic. Synchronize your biometrics with our high-fidelity telemetry grid.
          </p>
          
        </div>

        {/* Horizontal Navigation Metadata Rails in Liquid Glass container */}
        <div className="rounded-3xl liquid-glass p-8 sm:p-10 border border-white/[0.08] backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-10 border-b border-white/5 pb-10">

            {/* Location details */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-white/70" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/55 mb-1.5">
                  Primary Coordinates
                </h4>
                <p className="font-sans text-sm text-white/80 font-light">
                  Sector 9 Prehistoric Sanctuary
                </p>
                <p className="font-sans text-xs text-white/50 font-light mt-0.5">
                  Volcanic Basin Rim, Sector North
                </p>
              </div>
            </div>

            {/* Visiting Hours */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                <Clock className="w-4 h-4 text-white/70" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/55 mb-1.5">
                  Vault Hours
                </h4>
                <p className="font-sans text-sm text-white/80 font-light">
                  Monday – Sunday: 08:00 – 20:00
                </p>
                <p className="font-sans text-xs text-white/50 font-light mt-0.5">
                  Active bio-reconstruction sync hourly
                </p>
              </div>
            </div>

            {/* Network Hub / Social links */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                <Globe className="w-4 h-4 text-white/70" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/55 mb-2.5">
                  Biological Network Hub
                </h4>
                <div className="flex justify-center md:justify-start gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass hover:bg-white/5 text-white/75 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    title="Twitter"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass hover:bg-white/5 text-white/75 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    title="Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass hover:bg-white/5 text-white/75 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Brand alignment & copyright line */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" className="w-7 h-7 invert opacity-60" alt="Kronos Logo" />
              <span className="font-sans font-light tracking-[0.2em] text-[#ffffff] text-xs">
                KRONOS
              </span>
            </div>

            <p className="font-mono text-[8px] uppercase tracking-widest text-white/40 text-center sm:text-right">
              &copy; {currentYear} KRONOS. ALL REAL-TIME RECONSTRUCTION SECURITY SECURED.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
