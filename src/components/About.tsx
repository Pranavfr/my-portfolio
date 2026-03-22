import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUserShield, FaDiscord, FaLightbulb, FaAward, FaBullseye, FaBolt } from 'react-icons/fa';

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
      label: 'Innovation Leader',
      icon: FaLightbulb,
      color: 'from-orange-500 to-red-500',
      description: 'Exploring emerging technologies and building creative technical solutions.',
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
                className="text-center p-4 sm:p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-cyan-400" />
                <div className="text-lg sm:text-2xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{achievement.label}</div>
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
                Transforming Ideas into Reality
              </h3>
              <p className="font-body text-body-lg text-gray-300 leading-relaxed mb-4">
                I am a cybersecurity-focused developer and AI safety evaluator with experience in full-stack development and AI red teaming. I build secure web applications, evaluate AI systems for safety risks, and develop intelligent automation tools.
              </p>
              <p className="font-body text-body-lg text-gray-300 leading-relaxed">
                This experience includes delivering highly secure web applications, rigorously evaluating AI models for policy compliance, and engineering intelligent automation systems.
              </p>
            </div>

            <div className="space-y-tight">
              <h4 className="font-heading text-heading-md sm:text-heading-lg font-bold text-white mb-6 tracking-tight">Core Expertise</h4>
              {[
                { skill: 'Full-Stack Development', level: 95, color: 'cyan' },
                { skill: 'Cybersecurity', level: 90, color: 'green' },
                { skill: 'Bot Development', level: 88, color: 'purple' },
                { skill: 'Problem Solving', level: 98, color: 'blue' }
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm sm:text-base text-gray-300 font-medium">{item.skill}</span>
                    <span className={`text-${item.color}-400 font-bold text-sm sm:text-base`}>{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
                    <motion.div
                      className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
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
                  className="p-4 sm:p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${tag.color} flex items-center justify-center mb-3 sm:mb-4`}>
                    <IconComponent size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {tag.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 leading-relaxed">
                    {tag.description}
                  </p>

                  <span className="text-xs text-gray-500">
                    {tag.specialty}
                  </span>
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