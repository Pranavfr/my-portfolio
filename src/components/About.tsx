import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUserShield, FaDiscord, FaLightbulb, FaAward, FaBullseye, FaBolt } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';
import HackerTerminal from './HackerTerminal';

const About = () => {
  const tags = [
    {
      label: 'Full-Stack Developer',
      icon: FaLaptopCode,
      color: 'from-cyan-500 to-blue-500',
      description: 'Building scalable and secure web applications using modern frameworks and backend technologies.',
      specialty: 'React, Node.js, Python'
    },
    {
      label: 'Cybersecurity Expert',
      icon: FaUserShield,
      color: 'from-green-500 to-teal-500',
      description: 'Applying secure coding practices, vulnerability analysis, and OWASP security principles.',
      specialty: 'OWASP, Penetration Testing'
    },
    {
      label: 'Discord Bot Creator',
      icon: FaDiscord,
      color: 'from-purple-500 to-pink-500',
      description: 'Developing intelligent automation bots and integrations using APIs and AI tools.',
      specialty: 'Discord.js, Integrations'
    },
    {
      label: 'Automation & Research',
      icon: FaLightbulb,
      color: 'from-orange-500 to-red-500',
      description: 'Building custom tools and experimenting with deep API integrations to solve edge-case problems.',
      specialty: 'AI, Automation, APIs'
    },
  ];

  const achievements = [
    { icon: FaAward, label: 'Top Rated', value: '5★' },
    { icon: FaBullseye, label: 'Success Rate', value: '100%' },
    { icon: FaBolt, label: 'Response Time', value: '<2hrs' },
    { icon: FaUserShield, label: 'Security Level', value: 'Max' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section-padding-lg px-6 sm:px-8 lg:px-12 bg-gray-800">
      <motion.div
        className="container-wide space-y-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="font-heading text-display-sm sm:text-display-md font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight text-balance">
            About Me
          </h2>
          <p className="font-body text-body-xl sm:text-body-xl text-gray-400 container-narrow text-balance leading-relaxed">
            Passionate about creating secure, innovative, and impactful digital solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 container-content"
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <SpotlightCard className="text-center p-4 sm:p-6 rounded-xl border border-gray-800 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-cyan-400" />
                  <div className="text-lg sm:text-2xl font-bold text-white mb-1">{achievement.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{achievement.label}</div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start"
          variants={containerVariants}
        >
          <motion.div className="space-y-content" variants={itemVariants}>
            <div className="prose-improved">
              <h3 className="font-heading text-heading-lg sm:text-heading-xl font-bold text-white mb-6 tracking-tight">
                My Engineering Philosophy
              </h3>
              <p className="font-body text-body-lg text-gray-300 leading-relaxed mb-4">
                I specialize in bridging the gap between scalable development and secure systems. Rather than just building web apps, I focus on how they handle data defensively.
              </p>
              <p className="font-body text-body-lg text-gray-300 leading-relaxed">
                Concurrently at Mercor, I apply these rigorous security principles directly to large language models, actively stress-testing them to expose critical vulnerabilities and policy breaches before they reach production.
              </p>
            </div>

            <div className="space-y-tight">
              <h4 className="font-heading text-heading-md sm:text-heading-lg font-bold text-white mb-6 tracking-tight">System Workflow</h4>
              <HackerTerminal />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={containerVariants}
          >
            {tags.map((tag, index) => {
              const IconComponent = tag.icon;
              return (
                <motion.div
                  key={tag.label}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-full"
                >
                  <SpotlightCard className="p-4 sm:p-6 rounded-xl border border-gray-800 transition-colors duration-300 h-full flex flex-col">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${tag.color} flex items-center justify-center mb-3 sm:mb-4`}>
                      <IconComponent size={20} className="sm:w-6 sm:h-6 text-white" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {tag.label}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 leading-relaxed flex-grow">
                      {tag.description}
                    </p>

                    <span className="text-xs text-gray-500 font-medium">
                      {tag.specialty}
                    </span>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;