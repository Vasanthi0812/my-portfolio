
import React, { useState, useRef, useEffect } from 'react';
import { Github, Link, X } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  details: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "MegNan Chits",
    description: "A financial management application for chit funds",
    image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    details: "MegNan Chits is a comprehensive financial management system for chit funds. It features secure user authentication, real-time transaction tracking, and automated payment reminders. The application was built with a React.js frontend for a responsive user interface and Node.js backend with MongoDB for efficient data management."
  },
  {
    id: 2,
    title: "Energize-Routine",
    description: "A wellness application for daily routine management",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    details: "Energize-Routine is a mobile application designed to help users optimize their daily wellness routines. It includes features like customizable workout plans, nutrition tracking, and meditation sessions. The app was developed using React Native for cross-platform compatibility and Firebase for backend services."
  },
  {
    id: 3,
    title: "WiseIN",
    description: "An AI-powered learning platform for students",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["TypeScript", "Next.js", "TensorFlow.js", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    details: "WiseIN is an intelligent learning platform that adapts to individual student needs. It uses machine learning algorithms to analyze learning patterns and provide personalized content recommendations. The platform was built with Next.js and TypeScript for optimal performance and type safety, with TensorFlow.js for the AI components."
  },
  {
    id: 4,
    title: "Vaartha Press",
    description: "A multilingual news aggregation platform",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    details: "Vaartha Press is a news aggregation platform that collects and categorizes news from various sources in multiple languages. It features automatic translation, content categorization, and user preference tracking. The platform was developed using WordPress with custom PHP plugins for advanced functionality."
  }
];

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const openModal = (project: Project) => {
    setModalProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  const navigateCarousel = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const scrollPosition = index * (320 + 16); // Card width + gap
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-gradient-radial from-neon-blue/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-radial from-neon-purple/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A selection of my most notable projects showcasing my skills and expertise.
          </p>
        </div>
        
        {/* Project Display */}
        <div className="mb-12">
          <div className="glass-panel rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
            <div className="overflow-hidden rounded-xl">
              <img 
                src={projects[activeIndex].image} 
                alt={projects[activeIndex].title}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">{projects[activeIndex].title}</h3>
              <p className="text-white/80 mb-4">{projects[activeIndex].description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeIndex].technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-white/10 backdrop-blur-md border border-white/20 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={projects[activeIndex].githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={projects[activeIndex].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <Link size={16} />
                  <span>Live Demo</span>
                </a>
                <button
                  onClick={() => openModal(projects[activeIndex])}
                  className="flex items-center gap-2 bg-neon-blue/20 backdrop-blur-md border border-neon-blue/30 px-4 py-2 rounded-full text-sm font-medium hover:bg-neon-blue/30 transition-all duration-300"
                >
                  <span>Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-2 -mx-2 space-x-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`snap-start flex-shrink-0 w-80 transition-all duration-300 perspective ${
                  activeIndex === index ? 'scale-100' : 'scale-95 opacity-60'
                }`}
                onClick={() => navigateCarousel(index)}
              >
                <div 
                  className={`glass-panel rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 h-full ${
                    activeIndex === index ? 'neon-border' : ''
                  }`}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <p className="text-white/70 text-sm mt-1 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-white/10 px-2 py-0.5 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateCarousel(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-neon-teal w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      {modalOpen && modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={closeModal}></div>
          
          <div className="relative bg-[#0d0d12] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 animate-fade-in">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="h-56 overflow-hidden">
              <img 
                src={modalProject.image} 
                alt={modalProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{modalProject.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {modalProject.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-white/10 backdrop-blur-md border border-white/20 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Overview</h4>
                <p className="text-white/80 leading-relaxed">{modalProject.details}</p>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={modalProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a 
                  href={modalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <Link size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
