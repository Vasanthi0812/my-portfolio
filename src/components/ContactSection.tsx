
import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you'd make an API call here
      console.log('Form submitted:', formData);
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form state after 3 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }, 1500);
  };
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com', 
      color: 'group-hover:text-neon-blue' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com', 
      color: 'group-hover:text-neon-purple' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:email@example.com', 
      color: 'group-hover:text-neon-teal' 
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-radial from-neon-teal/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-radial from-neon-purple/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Get In Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="glass-panel rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-teal/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-teal/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-teal/50 transition-all"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  formState === 'submitting' 
                    ? 'bg-white/20 cursor-not-allowed' 
                    : formState === 'success'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                    : 'bg-gradient-to-r from-neon-blue/50 to-neon-purple/50 hover:from-neon-blue/60 hover:to-neon-purple/60'
                }`}
              >
                {formState === 'idle' && 'Send Message'}
                {formState === 'submitting' && 'Sending...'}
                {formState === 'success' && 'Message Sent!'}
                {formState === 'error' && 'Error! Try Again'}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="glass-panel rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Location</h4>
                  <p className="font-medium">Hyderabad, Telangana, India</p>
                </div>
                
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Email</h4>
                  <a href="mailto:contact@example.com" className="font-medium hover:text-neon-teal transition-colors">
                    contact@example.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Open for</h4>
                  <p className="font-medium">Freelance, Full-time opportunities</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center py-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <link.icon size={24} className={`mb-2 transition-colors duration-300 ${link.color}`} />
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
