import React from 'react';
import { Clock, MapPin, Globe, Twitter, Instagram, Linkedin, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-16 px-4 sm:px-8 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Curved Liquid Glass footer container */}
      <div className="max-w-4xl mx-auto rounded-3xl liquid-glass p-8 sm:p-12 border border-white/[0.08]">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-10 border-b border-white/5 pb-10">
          
          {/* Location details */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
              <MapPin className="w-4 h-4 text-white/70" />
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/55 mb-1">
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
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/55 mb-1">
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
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/55 mb-2">
                Biological Network Hub
              </h4>
              <div className="flex justify-center md:justify-start gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass hover:bg-white/5 text-white/75 hover:text-white transition-all cursor-pointer"
                  title="Twitter"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass hover:bg-white/5 text-white/75 hover:text-white transition-all cursor-pointer"
                  title="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass hover:bg-white/5 text-white/75 hover:text-white transition-all cursor-pointer"
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
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
              <Shield className="w-3 h-3 text-white/60" />
            </div>
            <span className="font-sans font-light tracking-[0.2em] text-[#ffffff] text-xs">
              KRONOS SYSTEM
            </span>
          </div>

          <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 text-center sm:text-right">
            &copy; {currentYear} KRONOS. ALL REAL-TIME RECONSTRUCTION SECURITY SECURED.
          </p>
        </div>

      </div>
    </footer>
  );
}
