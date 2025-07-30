import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShieldCheck, Cpu, Award, Target, Zap, Sparkles } from 'lucide-react';

const About = () => {
  const tags = [
    { 
      label: 'Full-Stack Developer', 
      icon: Monitor, 
      color: 'from-cyan-500 to-blue-500',
      description: 'Building end-to-end web applications with modern frameworks',
      specialty: 'React, Node.js, Python'
    },
    { 
      label: 'Cybersecurity Expert', 
      icon: ShieldCheck, 
      color: 'from-green-500 to-teal-500',
      description: 'Securing applications with industry best practices',
      specialty: 'OWASP, Penetration Testing'
    },
    { 
      label: 'Discord Bot Creator', 
      icon: Cpu, 
      color: 'from-purple-500 to-pink-500',
      description: 'Creating intelligent bots with AI integration',
      specialty: 'Discord.js, AI Integration'
    },
    { 
      label: 'Innovation Leader', 
      icon: Sparkles, 
      color: 'from-orange-500 to-red-500',
      description: 'Pioneering solutions with emerging technologies',
      specialty: 'AI, Blockchain, IoT'
    },
  ];

  const achievements = [
    { icon: Award, label: 'Top Rated', value: '5★' },
    { icon: Target, label: 'Success Rate', value: '100%' },
    { icon: Zap, label: 'Response Time', value: '<2hrs' },
    { icon: ShieldCheck, label: 'Security Level', value: 'Max' },
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating secure, innovative, and impactful digital solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                className="text-center p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Transforming Ideas into Reality
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A passionate <span className="text-cyan-400 font-semibold">full-stack developer</span> and 
                <span className="text-green-400 font-semibold"> cybersecurity enthusiast</span> who thrives on 
                solving complex problems through innovative code solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                From <span className="text-blue-400 font-semibold">secure web applications</span> to 
                <span className="text-purple-400 font-semibold"> intelligent Discord bots</span>, 
                I merge cutting-edge technology with creative problem-solving.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-4">Core Expertise</h4>
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
                    <span className="text-gray-300 font-medium">{item.skill}</span>
                    <span className={`text-${item.color}-400 font-bold`}>{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {tags.map((tag, index) => {
              const IconComponent = tag.icon;
              return (
                <motion.div
                  key={tag.label}
                  className="p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tag.color} flex items-center justify-center mb-4`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {tag.label}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-3 leading-relaxed">
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