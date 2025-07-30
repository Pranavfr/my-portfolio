import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Eye, Laptop, Shield, Bot } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <motion.div 
        className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Pranav Rathore
        </motion.h1>
        
        <motion.div 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 font-light"
          variants={itemVariants}
        >
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
        </motion.div>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Building secure, modern, and interactive digital experiences where security meets innovation
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={20} />
            View Projects
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Contact Me
          </motion.button>
          
          <motion.button 
            className="border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {[
            { value: '15+', label: 'Projects', color: 'text-cyan-400' },
            { value: '2+', label: 'Years Exp', color: 'text-blue-400' },
            { value: '11', label: 'GitHub Repos', color: 'text-purple-400' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <ChevronDown size={24} className="text-cyan-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;