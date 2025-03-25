
import React, { useEffect, useRef } from 'react';

export default function Education() {
  const diplomaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const diploma = diplomaRef.current;
    if (!diploma) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = diploma.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) / 25;
      const moveY = (e.clientY - centerY) / 25;
      
      diploma.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    };
    
    const handleMouseLeave = () => {
      diploma.style.transform = 'translate3d(0, 0, 0) rotateX(0) rotateY(0)';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    diploma.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      diploma.removeEventListener('mouseleave', handleMouseLeave);
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
          {/* 3D Diploma */}
          <div className="md:w-1/2 flex justify-center perspective">
            <div 
              ref={diplomaRef}
              className="relative w-64 h-64 transition-transform duration-200 preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="w-56 h-72 bg-gradient-to-br from-neon-purple/40 to-neon-blue/40 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center shadow-xl p-4">
                  <div className="text-center">
                    <div className="text-neon-teal text-sm mb-2">DEGREE</div>
                    <div className="text-xl font-bold mb-1">B.Tech</div>
                    <div className="text-sm text-white/80 mb-3">Computer Science Engineering</div>
                    <div className="w-full h-px bg-white/20 my-2"></div>
                    <div className="text-neon-teal text-xs mt-2">SREYAS INSTITUTE OF</div>
                    <div className="text-neon-teal text-xs mb-2">ENGINEERING & TECHNOLOGY</div>
                    <div className="w-full h-px bg-white/20 my-2"></div>
                    <div className="text-xs text-white/70 mt-2">2021 - 2025</div>
                    <div className="text-xs text-white/70">CGPA: 7.5/10</div>
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
                  <span className="text-sm text-white/60 mr-3">2021 - 2025</span>
                  <span className="bg-white/10 text-white/90 text-xs px-2 py-1 rounded-full">CGPA: 7.5/10</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">Trainings and Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                    <div>
                      <span className="font-medium">Web Development Workshop -IIT Bombay</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                    <div>
                      <span className="font-medium">Accenture UI/UX Certification</span>
                      <p className="text-white/70 text-sm">UX Prototypes and Wireframes Designing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                    <div>
                      <span className="font-medium">Google UI/UX Certification</span>
                      <p className="text-white/70 text-sm">UX Prototypes and Wireframes Designing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                    <div>
                      <span className="font-medium">NPTEL Certifications</span>
                      <p className="text-white/70 text-sm">Internet Of things, Cloud Computing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                    <div>
                      <span className="font-medium">BITS, Hyderabad ICAN 2.0</span>
                      <p className="text-white/70 text-sm">Workshop on IoT enabled Cyber Physical Systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                    <div>
                      <span className="font-medium">PupilFirst School under AICTE</span>
                      <p className="text-white/70 text-sm">Web Development Training for 2 months where I've developed milestone and capstone projects</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Publications</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                    <div>
                      <span className="font-medium">Human Following Robot with user authentication</span>
                      <p className="text-white/70 text-sm">Article Id: CRD/2564 Volume 25 Issue 1 2025, SL.No.36</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
