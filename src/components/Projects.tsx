import React from 'react';
import { ExternalLink, Github, Star, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Personality Test App',
      description: 'An advanced quiz-based application that analyzes user personalities using sophisticated MBTI logic with interactive UI, dynamic scoring, and detailed personality insights.',
      image: '/personality.png',
      liveLink: 'https://personality-test-weld.vercel.app/',
      githubLink: 'https://github.com/Pranavfr/PersonalityTest',
      techStack: ['React', 'Tailwind CSS', 'JavaScript', 'MBTI API'],
      gradient: 'from-cyan-500 to-blue-500',
      category: 'Web App',
      features: ['16 Personality Types', 'Interactive Quiz', 'Detailed Analysis', 'Social Sharing']
    },
    {
      title: 'SecureURL Shortener',
      description: 'A military-grade URL shortener with advanced security features including password protection, QR code generation, analytics dashboard, and automatic expiration.',
      image: '/urlshortener.png',
      liveLink: 'https://urlshortnerfront-production.up.railway.app/',
      githubLink: 'https://github.com/Pranavfr/url-shortener',
      techStack: ['Flask', 'MongoDB', 'HTML5', 'JavaScript', 'Chart.js'],
      gradient: 'from-green-500 to-teal-500',
      category: 'Security Tool',
      features: ['Password Protection', 'QR Codes', 'Analytics', 'Auto Expiry']
    },
    {
      title: 'GlowHelp AI Chatbot',
      description: 'An intelligent AI-powered chatbot for personalized skincare guidance, built with OpenRouter API integration and advanced natural language processing.',
      image: '/glowhelp.png',
      liveLink: 'https://pranavfr.github.io/glowhelpai-chatbot/',
      githubLink: 'https://github.com/Pranavfr/glowhelpai-chatbot',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'OpenRouter API', 'AI/ML'],
      gradient: 'from-purple-500 to-pink-500',
      category: 'AI Assistant',
      features: ['AI Recommendations', 'Skin Analysis', 'Product Suggestions', '24/7 Support']
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend creativity with functionality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-gray-400"
                      >
                        <Sparkles size={10} className="text-yellow-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Projects Completed', value: '50+', color: 'cyan' },
            { label: 'Happy Clients', value: '25+', color: 'green' },
            { label: 'Code Commits', value: '1000+', color: 'purple' },
            { label: 'Success Rate', value: '100%', color: 'blue' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gray-900 rounded-xl border border-gray-700"
            >
              <div className={`text-2xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;