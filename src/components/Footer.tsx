
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-gradient-neon">SMV</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4 md:mb-0">
            <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-white/70 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-white/50 text-sm">
           Sornapudi Meghana Vasanthi
          </div>
        </div>
      </div>
    </footer>
  );
}
