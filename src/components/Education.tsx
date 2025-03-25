
import React, { useEffect, useRef } from 'react';

export default function Education() {
  const capRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cap = capRef.current;
    if (!cap) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = cap.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) / 20;
      const moveY = (e.clientY - centerY) / 20;
      
      cap.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    };
    
    const handleMouseLeave = () => {
      cap.style.transform = 'translate3d(0, 0, 0) rotateX(0) rotateY(0)';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    cap.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cap.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="education" className="min-h-screen py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-radial from-neon-blue/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-radial from-neon-teal/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Education</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 3D Cap */}
          <div className="md:w-1/2 flex justify-center perspective">
            <div 
              ref={capRef}
              className="relative w-64 h-64 transition-transform duration-200 preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Cap */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="w-48 h-48 bg-gradient-to-br from-neon-purple/40 to-neon-blue/40 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center shadow-xl">
                  <div className="relative">
                    <div className="w-32 h-16 bg-black/40 rounded-t-lg flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">B</span>
                    </div>
                    <div className="absolute top-0 w-40 h-4 bg-black/50 rounded transform -translate-x-4" style={{ transform: 'translateZ(5px)' }}></div>
                    <div className="absolute top-16 left-1/2 w-2 h-12 bg-black/40 transform -translate-x-1/2" style={{ transform: 'translateZ(2px)' }}></div>
                    <div className="absolute top-28 left-1/2 w-8 h-8 rounded-full bg-neon-teal/60 transform -translate-x-1/2 animate-pulse-glow" style={{ transform: 'translateZ(10px)' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Reflection */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-full"
                style={{ transform: 'translateZ(15px) rotateX(90deg) scale(0.8)' }}
              ></div>
              
              {/* Glow */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-neon-teal/30 rounded-full blur-md"></div>
            </div>
          </div>
          
          {/* Education Details */}
          <div className="md:w-1/2">
            <div className="glass-panel rounded-2xl p-8">
              <div className="mb-6 pb-6 border-b border-white/10">
                <h3 className="text-2xl font-bold mb-2">B.Tech in Computer Science Engineering</h3>
                <div className="text-neon-teal mb-2">Sreyas Institute of Engineering & Technology</div>
                <div className="text-white/70">Affiliated to JNTUH, Hyderabad</div>
                <div className="flex items-center mt-3">
                  <span className="text-sm text-white/60 mr-3">2018 - 2022</span>
                  <span className="bg-white/10 text-white/90 text-xs px-2 py-1 rounded-full">CGPA: 8.4/10</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Key Courses</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Data Structures</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Algorithms</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Web Development</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Database Systems</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Computer Networks</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">IoT</span>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Key Projects</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                      <div>
                        <span className="font-medium">Human Following Robot</span>
                        <p className="text-white/70 text-sm">Developed an autonomous robot that can follow a human using computer vision and sensor fusion.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                      <div>
                        <span className="font-medium">Smart Home Automation System</span>
                        <p className="text-white/70 text-sm">Built an IoT-based home automation system with mobile application control.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                      <div>
                        <span className="font-medium">Natural Language Processing for Text Summarization</span>
                        <p className="text-white/70 text-sm">Implemented NLP algorithms for automatic text summarization of news articles.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
