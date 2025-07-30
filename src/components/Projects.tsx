import React, { useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { ExternalLink, Github, Play, Star, GitBranch, Eye } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Esports Talks Website',
      description: 'A comprehensive esports community platform for India\'s premier gaming community, featuring community management, content creation, brand partnerships, and tournament organization.',
      image: '/talkesp.png',
      liveLink: 'https://www.talkesports.in/',
      githubLink: 'https://github.com/Pranavfr/esports-talks',
      techStack: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      gradient: 'from-forest-500 to-nature-teal',
      category: 'Community Platform',
      features: ['8K+ Members', 'Content Creation', 'Brand Partnerships', 'Tournament Management'],
      stats: { users: '8K+', engagement: '40K+', events: '50+' }
    },
    {
      title: 'Personality Test App',
      description: 'Advanced quiz-based application that analyzes user personalities using MBTI logic with detailed insights and personalized recommendations.',
      image: '/personality.png',
      liveLink: 'https://personality-test-weld.vercel.app/',
      githubLink: 'https://github.com/Pranavfr/PersonalityTest',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      gradient: 'from-nature-gold to-nature-coral',
      category: 'Psychology App',
      features: ['MBTI Analysis', 'Detailed Insights', 'Personality Types', 'Interactive Quiz'],
      stats: { users: '2K+', accuracy: '95%', types: '16' }
    },
    {
      title: 'URL Shortener',
      description: 'Military-grade URL shortener with advanced security features, analytics dashboard, and comprehensive link management system.',
      image: '/urlshortener.png',
      liveLink: 'https://url-shortener-pranav.vercel.app/',
      githubLink: 'https://github.com/Pranavfr/url-shortener',
      techStack: ['Python', 'Flask', 'MongoDB', 'HTML/CSS', 'JavaScript'],
      gradient: 'from-sage-500 to-sage-600',
      category: 'Utility Tool',
      features: ['Security Features', 'Analytics Dashboard', 'Link Management', 'QR Codes'],
      stats: { links: '1K+', clicks: '50K+', security: '100%' }
    },
    {
      title: 'GlowHelp AI Chatbot',
      description: 'AI-powered chatbot for personalized skincare guidance using advanced machine learning and natural language processing.',
      image: '/glowhelp.png',
      liveLink: 'https://pranavfr.github.io/glowhelpai-chatbot/',
      githubLink: 'https://github.com/Pranavfr/glowhelpai-chatbot',
      techStack: ['React', 'OpenAI API', 'JavaScript', 'CSS3', 'Vercel'],
      gradient: 'from-nature-teal to-forest-500',
      category: 'AI Application',
      features: ['AI Chatbot', 'Skincare Guidance', 'Personalized Advice', 'Natural Language'],
      stats: { users: '5K+', accuracy: '90%', languages: '5' }
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Showcasing my latest work and innovative solutions across various technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-700 p-4 sm:p-6 hover:border-gray-600 transition-all duration-500 transform hover:scale-105"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay with Stats */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                  >
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-cyan-400 font-bold text-sm sm:text-lg">{value}</div>
                            <div className="text-gray-300 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Click to visit overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm font-medium">
                        Click to visit live site →
                      </div>
                    </div>
                  </motion.div>
                </motion.a>
              </div>

              {/* Project Info */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="inline-block px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-600">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-1 sm:gap-2 ml-2">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play size={14} className="sm:w-4 sm:h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                    </motion.a>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/Pranavfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ExternalLink size={16} className="sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;