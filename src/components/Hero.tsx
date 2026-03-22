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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-5xl mx-auto text-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-heading text-display-md sm:text-display-lg font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight text-balance"
          variants={titleVariants}
        >
          Pranav Rathore
        </motion.h1>
        
        <motion.div 
          className="text-body-lg sm:text-body-xl text-gray-300 mb-6 font-medium flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          variants={itemVariants}
        >
          <span className="text-cyan-400 flex items-center gap-1 sm:gap-2">
            <Shield size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Cybersecurity Engineer</span>
            <span className="sm:hidden">Cyber Engineer</span>
          </span>
          <span className="hidden sm:inline text-gray-500">•</span>
          <span className="text-blue-400 flex items-center gap-1 sm:gap-2">
            <Bot size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">AI Red Teamer</span>
            <span className="sm:hidden">Red Teamer</span>
          </span>
          <span className="hidden sm:inline text-gray-500">•</span>
          <span className="text-purple-400 flex items-center gap-1 sm:gap-2">
            <Laptop size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Full-Stack Developer</span>
            <span className="sm:hidden">Full-Stack</span>
          </span>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <p className="font-body text-body-lg sm:text-body-xl text-gray-400 container-narrow px-6 text-balance leading-relaxed mb-4 mx-auto">
            Cybersecurity-focused developer specializing in AI safety evaluation, red teaming, and modern full-stack applications.
          </p>
          <p className="font-body text-body-md sm:text-body-lg text-cyan-400/90 container-narrow px-6 text-balance leading-relaxed font-medium mx-auto">
            Currently working as an AI Red Teamer & Reviewer at Mercor, evaluating and securing large language models.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center mb-16 sm:mb-20 px-6"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-3 text-body-md sm:text-body-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={16} className="sm:w-5 sm:h-5" />
            View Projects
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3 text-body-md sm:text-body-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={16} className="sm:w-5 sm:h-5" />
            Contact Me
          </motion.button>
          
          <motion.button 
            className="border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3 text-body-md sm:text-body-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} className="sm:w-5 sm:h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
          variants={itemVariants}
        >
          {[
            { value: '15+', label: 'Projects Built', color: 'text-cyan-400' },
            { value: 'AI Red Teaming', label: 'Experience', color: 'text-blue-400' },
            { value: '11', label: 'Open-Source Repositories', color: 'text-purple-400' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center p-4 rounded-xl border border-gray-800 bg-gray-900/30 sm:border-none sm:bg-transparent sm:p-0"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-xl sm:text-xl lg:text-2xl font-bold ${stat.color} mb-1 sm:mb-0`}>{stat.value}</div>
              <div className="text-sm sm:text-sm text-gray-400 sm:text-gray-500 font-medium sm:font-normal">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <ChevronDown size={20} className="sm:w-6 sm:h-6 text-cyan-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;