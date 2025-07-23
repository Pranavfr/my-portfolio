import React from 'react';
import { ChevronDown, Download, Mail, Eye, Laptop, Shield, Bot } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Pranav Rathore
        </h1>
        
        <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 font-light">
          <span className="text-cyan-400 flex items-center gap-2 inline-flex">
            <Shield size={20} />
            Cybersecurity Analyst
          </span> • 
          <span className="text-blue-400 flex items-center gap-2 inline-flex">
            <Laptop size={20} />
            Full-Stack Developer
          </span> • 
          <span className="text-purple-400 flex items-center gap-2 inline-flex">
            <Bot size={20} />
            Discord Bot Creator
          </span>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Building secure, modern, and interactive digital experiences where security meets innovation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Eye size={20} />
            View Projects
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Contact Me
          </button>
          
          <button className="border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">50+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">3+</div>
            <div className="text-sm text-gray-500">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">100%</div>
            <div className="text-sm text-gray-500">Secure</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400">24/7</div>
            <div className="text-sm text-gray-500">Available</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown size={24} className="text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;