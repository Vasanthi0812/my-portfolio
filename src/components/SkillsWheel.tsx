import React, { useState } from 'react';

type Skill = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'uiux' | 'other';
  level: number; // 1-5
  description: string;
};

const skills: Skill[] = [
  // Frontend
  { 
    name: 'React.js', 
    icon: '⚛️', 
    category: 'frontend', 
    level: 5,
    description: 'Advanced knowledge of React.js including hooks, context API, and performance optimization.'
  },
  { 
    name: 'TypeScript', 
    icon: 'TS', 
    category: 'frontend', 
    level: 4,
    description: 'Strong TypeScript skills for type-safe application development with React.'
  },
  { 
    name: 'JavaScript', 
    icon: 'JS', 
    category: 'frontend', 
    level: 5,
    description: 'Expert JavaScript knowledge including ES6+, async/await, and functional programming.'
  },
  { 
    name: 'HTML/CSS', 
    icon: '</>', 
    category: 'frontend', 
    level: 5,
    description: 'Advanced HTML5 and CSS3 skills, including CSS Grid, Flexbox, and animations.'
  },
  
  // Backend
  { 
    name: 'Node.js', 
    icon: 'N', 
    category: 'backend', 
    level: 4,
    description: 'Building RESTful APIs and server-side applications with Node.js and Express.'
  },
  { 
    name: 'PHP', 
    icon: '🐘', 
    category: 'backend', 
    level: 4,
    description: 'PHP development skills for server-side logic and database integration.'
  },
  { 
    name: 'Database', 
    icon: '🗃️', 
    category: 'backend', 
    level: 4,
    description: 'Experience with MySQL, MongoDB, and database design principles.'
  },
  
  // UI/UX
  { 
    name: 'Figma', 
    icon: 'F', 
    category: 'uiux', 
    level: 4,
    description: 'UI/UX design with Figma for creating wireframes, prototypes, and design systems.'
  },
  { 
    name: 'Blender', 
    icon: 'B', 
    category: 'uiux', 
    level: 3,
    description: 'Creating 3D models and animations with Blender for interactive web experiences.'
  },
  
  // Other
  { 
    name: 'WordPress', 
    icon: 'WP', 
    category: 'other', 
    level: 4,
    description: 'Custom WordPress theme and plugin development for client websites.'
  },
  { 
    name: 'IoT', 
    icon: '🔌', 
    category: 'other', 
    level: 3,
    description: 'Working with IoT devices and integrating them with web applications.'
  },
];

export default function SkillsWheel() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterSkills = (category: string) => {
    if (category === 'all') return skills;
    return skills.filter(skill => skill.category === category);
  };

  const handleSkillClick = (skill: Skill) => {
    setActiveSkill(skill);
  };

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-radial from-neon-blue/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-radial from-neon-teal/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            An interactive showcase of my technical abilities and expertise across various domains.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'frontend', 'backend', 'uiux', 'other'].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-white/20 backdrop-blur-md border border-white/30' 
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Skills Wheel */}
          <div className="perspective">
            <div className="relative mx-auto w-full max-w-md aspect-square">
              {filterSkills(activeCategory).map((skill, index) => {
                const angle = (index * (360 / filterSkills(activeCategory).length)) * (Math.PI / 180);
                const radius = 140; // Adjust as needed
                const x = radius * Math.cos(angle) + radius;
                const y = radius * Math.sin(angle) + radius;
                
                return (
                  <div
                    key={skill.name}
                    className={`absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 glass-panel rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      activeSkill?.name === skill.name ? 'scale-125 neon-border' : 'hover:scale-110'
                    }`}
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`,
                      zIndex: activeSkill?.name === skill.name ? 10 : 1 
                    }}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-xl font-bold">{skill.icon}</div>
                      <div className="text-xs mt-1 font-medium">{skill.name.split('.')[0]}</div>
                    </div>
                  </div>
                );
              })}
              
              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full neo-blur flex items-center justify-center">
                <div className="text-gradient-neon text-lg font-bold">
                  {activeCategory === 'all' ? 'Skills' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Skill Details */}
          <div 
            className={`glass-panel rounded-2xl p-8 transition-all duration-500 h-80 flex flex-col justify-center ${
              activeSkill ? 'opacity-100' : 'opacity-40'
            }`}
          >
            {activeSkill ? (
              <>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center mr-4">
                    <span className="text-2xl">{activeSkill.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{activeSkill.name}</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-white/70 mb-2">Proficiency Level</p>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(level => (
                      <div 
                        key={level} 
                        className={`h-2 w-full rounded-full ${
                          level <= activeSkill.level ? 'bg-neon-teal/70' : 'bg-white/20'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <p className="text-white/80">{activeSkill.description}</p>
                
                <div className="mt-6">
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300">
                    View Related Projects
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <p className="text-xl text-white/50">Select a skill to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
