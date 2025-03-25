
import React, { useState } from 'react';

type Experience = {
  id: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Example Tech",
    duration: "Jan 2023 - Present",
    location: "Hyderabad, India",
    description: [
      "Developed responsive web applications using React.js and TypeScript",
      "Optimized web performance resulting in 40% faster load times",
      "Collaborated with UI/UX team to implement design systems",
      "Integrated RESTful APIs and implemented error handling strategies"
    ],
    technologies: ["React.js", "TypeScript", "Redux", "Tailwind CSS"]
  },
  {
    id: 2,
    position: "Full Stack Developer Intern",
    company: "Innovate Solutions",
    duration: "Jun 2022 - Dec 2022",
    location: "Remote",
    description: [
      "Built an e-commerce platform using MERN stack",
      "Designed and implemented database schemas with MongoDB",
      "Created reusable React components for the company's design system",
      "Contributed to backend development with Node.js and Express"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"]
  },
  {
    id: 3,
    position: "Web Developer",
    company: "Digital Creations",
    duration: "Jan 2022 - May 2022",
    location: "Hyderabad, India",
    description: [
      "Developed custom WordPress themes and plugins for clients",
      "Created responsive layouts using HTML, CSS, and JavaScript",
      "Optimized website performance and SEO",
      "Implemented e-commerce solutions using WooCommerce"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML/CSS", "WooCommerce"]
  }
];

export default function ExperienceTimeline() {
  const [activeExperience, setActiveExperience] = useState<Experience>(experiences[0]);
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = (experience: Experience) => {
    setActiveExperience(experience);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-radial from-neon-purple/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-radial from-neon-teal/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Professional Experience</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            An interactive timeline of my professional journey and achievements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Timeline */}
          <div className="md:col-span-2">
            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/20">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`mb-12 relative cursor-pointer group ${
                    activeExperience.id === exp.id ? 'opacity-100' : 'opacity-60'
                  }`}
                  onClick={() => handleCardClick(exp)}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-0 top-0 w-4 h-4 rounded-full transform -translate-x-1/2 transition-all duration-300 ${
                      activeExperience.id === exp.id 
                        ? 'bg-neon-teal scale-125' 
                        : 'bg-white/30 group-hover:bg-white/50'
                    }`}
                  ></div>
                  
                  <div className="pl-6">
                    <span className="text-sm text-white/70">{exp.duration}</span>
                    <h3 className="text-xl font-bold mt-1">{exp.position}</h3>
                    <div className={`text-lg text-white/90 transition-all duration-300 ${
                      activeExperience.id === exp.id ? 'text-neon-teal' : ''
                    }`}>
                      {exp.company}
                    </div>
                    <div className="text-sm text-white/60">{exp.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Card */}
          <div className="md:col-span-3 perspective">
            <div 
              className={`relative preserve-3d w-full h-[450px] transition-all duration-500 ${
                flipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front of card */}
              <div className="absolute inset-0 backface-hidden glass-panel rounded-2xl p-8 transform-gpu">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-1">{activeExperience.position}</h3>
                    <div className="text-xl text-neon-teal">{activeExperience.company}</div>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-white/70">{activeExperience.duration}</span>
                      <span className="mx-2 text-white/30">•</span>
                      <span className="text-sm text-white/70">{activeExperience.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-medium mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-3">
                      {activeExperience.description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 mt-2"></span>
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <button 
                      onClick={handleFlip}
                      className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                    >
                      View Technologies
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute inset-0 backface-hidden glass-panel rounded-2xl p-8 rotate-y-180 transform-gpu">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-1">Technologies Used</h3>
                    <div className="text-lg text-neon-teal">{activeExperience.company}</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3">
                      {activeExperience.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-lg font-medium mb-3">Skills Developed:</h4>
                      <p className="text-white/80">
                        During my time at {activeExperience.company}, I enhanced my expertise in {activeExperience.technologies.join(', ')}.
                        This experience strengthened my problem-solving abilities and collaboration skills within agile team environments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <button 
                      onClick={handleFlip}
                      className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
