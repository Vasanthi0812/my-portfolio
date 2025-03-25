import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16 flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-neon-purple/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-neon-teal/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-gradient-radial from-neon-blue/20 to-transparent blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-mono text-neon-teal mb-4">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-4 neon-glow-purple">
            Sornapudi Meghana Vasanthi
          </h1>
          <p className="text-xl md:text-2xl text-white/80">Designer And Developer</p>
        </div>
        
        {/* 3D Card */}
        <div ref={cardRef} className="glass-panel rounded-2xl p-8 md:p-10 max-w-xl w-full mx-auto preserve-3d transition-transform duration-200">
          <div className="relative z-10 preserve-3d">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-2 border-neon-teal/50 mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-radial from-neon-blue/50 to-neon-purple/30 flex items-center justify-center">
                  <span className="text-4xl">SMV</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">Sornapudi Meghana Vasanthi</h3>
              
              <p className="text-white/70 mb-4 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-neon-teal mr-2 animate-pulse-glow"></span>
                Hyderabad, Telangana
              </p>
              
              <div className="flex space-x-4 mb-6">
                <a href="https://www.linkedin.com/in/meghana-vasanthi/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors duration-300 group">
                  <Linkedin size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a href="https://github.com/Vasanthi0812" target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple transition-colors duration-300 group">
                  <Github size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sornapudi.vasanthi@gmail.com"target="_blank" rel="noopener noreferrer" className="hover:text-neon-teal transition-colors duration-300 group">
                  <Mail size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>

              {/* Download Resume Button */}
              <a 
                href="/VASANTHI.pdf" 
                download="Sornapudi_Meghana_Vasanthi_Resume.pdf"
                className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Card reflections */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-neon-blue/10 via-transparent to-neon-purple/10"></div>
        </div>
        
        <div className="mt-24 animate-bounce">
          <a href="#skills" className="text-white/50 hover:text-white transition-colors duration-300">
            <div className="flex flex-col items-center">
              <span className="mb-2">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
