
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SkillsWheel from '../components/SkillsWheel';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectsCarousel from '../components/ProjectsCarousel';
import Education from '../components/Education';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <SkillsWheel />
        <ExperienceTimeline />
        <ProjectsCarousel />
        <Education />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
