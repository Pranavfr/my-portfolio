import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { Code, Database, Cloud, Shield, Cpu, Globe, Zap, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React', level: 95, color: 'cyan' },
        { name: 'TypeScript', level: 90, color: 'blue' },
        { name: 'Tailwind CSS', level: 92, color: 'cyan' },
        { name: 'Next.js', level: 88, color: 'blue' },
        { name: 'HTML/CSS', level: 98, color: 'cyan' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 90, color: 'green' },
        { name: 'Python', level: 85, color: 'teal' },
        { name: 'Flask', level: 88, color: 'green' },
        { name: 'Express.js', level: 92, color: 'teal' },
        { name: 'MongoDB', level: 87, color: 'green' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Penetration Testing', level: 88, color: 'red' },
        { name: 'OWASP', level: 92, color: 'pink' },
        { name: 'Network Security', level: 85, color: 'red' },
        { name: 'Cryptography', level: 80, color: 'pink' },
        { name: 'Security Auditing', level: 90, color: 'red' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'OpenAI API', level: 85, color: 'purple' },
        { name: 'Discord.js', level: 92, color: 'indigo' },
        { name: 'Natural Language Processing', level: 80, color: 'purple' },
        { name: 'Chatbot Development', level: 88, color: 'indigo' },
        { name: 'AI Integration', level: 85, color: 'purple' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-yellow-500',
      skills: [
        { name: 'Git', level: 95, color: 'orange' },
        { name: 'Docker', level: 80, color: 'yellow' },
        { name: 'Vercel', level: 90, color: 'orange' },
        { name: 'Railway', level: 85, color: 'yellow' },
        { name: 'CI/CD', level: 82, color: 'orange' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-emerald-500 to-green-500',
      skills: [
        { name: 'REST APIs', level: 92, color: 'emerald' },
        { name: 'GraphQL', level: 75, color: 'green' },
        { name: 'WebSocket', level: 85, color: 'emerald' },
        { name: 'JWT Authentication', level: 90, color: 'green' },
        { name: 'OAuth', level: 88, color: 'emerald' }
      ]
    }
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
        ease: easeOut
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
        ease: easeOut
      }
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A comprehensive toolkit for building secure, scalable, and innovative solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6 hover:border-gray-600 transition-colors duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <IconComponent size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base text-gray-300 font-medium">{skill.name}</span>
                        <span className={`text-${skill.color}-400 font-bold text-sm sm:text-base`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
                        <motion.div 
                          className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div 
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {[
            { icon: Zap, label: 'Fast Development', value: 'Agile' },
            { icon: Shield, label: 'Security First', value: 'OWASP' },
            { icon: Sparkles, label: 'Clean Code', value: 'Best Practices' },
            { icon: Globe, label: 'Cross Platform', value: 'Responsive' }
          ].map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.label}
                className="text-center p-4 sm:p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-cyan-400" />
                <div className="text-base sm:text-lg font-bold text-white mb-1">{skill.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{skill.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;