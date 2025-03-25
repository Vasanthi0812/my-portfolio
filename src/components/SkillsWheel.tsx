import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent } from "@/components/ui/card";

type Skill = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'programming' | 'cms' | 'uiux';
  level: number; // 1-5
  description: string;
};

const skills: Skill[] = [
  // Frontend Technologies
  { 
    name: 'HTML5', 
    icon: '</>', 
    category: 'frontend', 
    level: 5,
    description: 'Advanced HTML5 skills, including semantic markup, accessibility, and modern web standards.'
  },
  { 
    name: 'Tailwind CSS', 
    icon: 'TW', 
    category: 'frontend', 
    level: 5,
    description: 'Expert in utility-first CSS with Tailwind, creating responsive and custom designs efficiently.'
  },
  { 
    name: 'Bootstrap', 
    icon: 'BS', 
    category: 'frontend', 
    level: 4,
    description: 'Creating responsive web designs with Bootstrap framework components and utilities.'
  },
  { 
    name: 'JavaScript', 
    icon: 'JS', 
    category: 'frontend', 
    level: 5,
    description: 'Expert JavaScript knowledge including ES6+, async/await, and functional programming.'
  },
  { 
    name: 'TypeScript', 
    icon: 'TS', 
    category: 'frontend', 
    level: 4,
    description: 'Strong TypeScript skills for type-safe application development with React.'
  },
  { 
    name: 'Node.js', 
    icon: 'N', 
    category: 'frontend', 
    level: 4,
    description: 'Using Node.js for frontend tooling, bundlers, and development environments.'
  },
  { 
    name: 'React.js', 
    icon: '⚛️', 
    category: 'frontend', 
    level: 5,
    description: 'Advanced knowledge of React.js including hooks, context API, and performance optimization.'
  },
  
  // Backend Technologies
  { 
    name: 'Node.js', 
    icon: 'N', 
    category: 'backend', 
    level: 4,
    description: 'Building RESTful APIs and server-side applications with Node.js and Express.'
  },
  { 
    name: 'Express.js', 
    icon: 'EX', 
    category: 'backend', 
    level: 4,
    description: 'Creating robust server-side applications and REST APIs with Express.js.'
  },
  { 
    name: 'PowerBI', 
    icon: 'PB', 
    category: 'backend', 
    level: 3,
    description: 'Data visualization and business intelligence with Power BI for insights and reporting.'
  },
  { 
    name: 'Tableau', 
    icon: 'TB', 
    category: 'backend', 
    level: 3,
    description: 'Creating interactive data visualizations and dashboards with Tableau.'
  },
  { 
    name: 'API Routes', 
    icon: 'API', 
    category: 'backend', 
    level: 4,
    description: 'Designing and implementing RESTful and GraphQL API endpoints for web applications.'
  },
  
  // Databases
  { 
    name: 'SQL', 
    icon: 'SQL', 
    category: 'database', 
    level: 4,
    description: 'Proficient in writing complex SQL queries, database design, and optimization.'
  },
  { 
    name: 'MySQL', 
    icon: 'MY', 
    category: 'database', 
    level: 4,
    description: 'Database design, implementation, and optimization with MySQL for web applications.'
  },
  { 
    name: 'PostgreSQL', 
    icon: 'PG', 
    category: 'database', 
    level: 3,
    description: 'Working with PostgreSQL databases for relational data storage and retrieval.'
  },
  
  // Programming Languages
  { 
    name: 'C', 
    icon: 'C', 
    category: 'programming', 
    level: 3,
    description: 'Fundamentals of C programming for system-level development and algorithms.'
  },
  { 
    name: 'C++', 
    icon: 'C++', 
    category: 'programming', 
    level: 3,
    description: 'Object-oriented programming with C++ for applications and data structures.'
  },
  { 
    name: 'Java', 
    icon: 'J', 
    category: 'programming', 
    level: 3,
    description: 'Java development for cross-platform applications and enterprise solutions.'
  },
  { 
    name: 'PHP', 
    icon: '🐘', 
    category: 'programming', 
    level: 4,
    description: 'PHP development skills for server-side logic and database integration.'
  },
  { 
    name: 'Ruby', 
    icon: 'R', 
    category: 'programming', 
    level: 2,
    description: 'Basic Ruby programming for web applications and scripting tasks.'
  },
  
  // Content Management System
  { 
    name: 'WordPress', 
    icon: 'WP', 
    category: 'cms', 
    level: 4,
    description: 'Custom WordPress theme and plugin development for client websites.'
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
  { 
    name: 'Spline', 
    icon: 'SP', 
    category: 'uiux', 
    level: 3,
    description: 'Creating 3D web experiences and interactive interfaces with Spline.'
  },
  { 
    name: 'Adobe Illustrator', 
    icon: 'AI', 
    category: 'uiux', 
    level: 3,
    description: 'Vector graphics design for logos, icons, and illustrations using Adobe Illustrator.'
  },
  { 
    name: 'Adobe Photoshop', 
    icon: 'PS', 
    category: 'uiux', 
    level: 3,
    description: 'Image editing, manipulation, and digital asset creation with Adobe Photoshop.'
  },
  { 
    name: 'Coral Draw', 
    icon: 'CD', 
    category: 'uiux', 
    level: 2,
    description: 'Vector illustration and page layout design using Coral Draw.'
  },
];

export default function SkillsWheel() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const categoryLabels = {
    'frontend': 'Frontend Technologies',
    'backend': 'Backend Technologies',
    'database': 'Databases',
    'programming': 'Programming Languages',
    'cms': 'Content Management System',
    'uiux': 'UI/UX'
  };

  const filterSkills = (category: string) => {
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
        
        {/* Side Headings */}
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-4">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <div
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeCategory === key
                      ? 'bg-white/20 backdrop-blur-md border border-white/30 text-white'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <h3 className="font-medium">{label}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Skills Wheel - Fixed center positioning */}
              <div className="perspective">
                <div className="relative mx-auto w-full max-w-md aspect-square">
                  {filterSkills(activeCategory).map((skill, index) => {
                    const totalSkills = filterSkills(activeCategory).length;
                    const angle = (index * (360 / totalSkills)) * (Math.PI / 180);
                    const radius = 140; // Adjust as needed
                    const centerPoint = 150; // Fixed center point
                    const x = radius * Math.cos(angle) + centerPoint;
                    const y = radius * Math.sin(angle) + centerPoint;
                    
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
                          <div className="text-xs mt-1 font-medium">{skill.name.split(' ')[0]}</div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Center circle - Fixed positioning */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full neo-blur flex items-center justify-center">
                    <div className="text-gradient-neon text-lg font-bold text-center">
                      {categoryLabels[activeCategory as keyof typeof categoryLabels]}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skill Details - Removed View Related Projects button */}
              <Card className={`transition-all duration-500 h-80 bg-transparent border-white/20 ${
                activeSkill ? 'opacity-100' : 'opacity-40'
              }`}>
                <CardContent className="p-8 h-full flex flex-col justify-center">
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
                      
                      {/* Removed "View Related Projects" button */}
                    </>
                  ) : (
                    <div className="text-center">
                      <p className="text-xl text-white/50">Select a skill to view details</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
