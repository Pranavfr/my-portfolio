import React, { useState, useRef } from 'react';
import { motion, easeOut } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, Clock, Award, MessageCircle, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_yhfw0n4', // EmailJS service ID
        'template_bvjhvrs', // EmailJS template ID
        {
          from_name: formData.name,
          to_name: 'Pranav', // Your name
          from_email: formData.email,
          message: formData.message,
        },
        'aCQirRTtXKeTwLmWd' // EmailJS public key
      );

      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message. I will get back to you soon!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pranav16022016@gmail.com',
      href: 'mailto:pranav16022016@gmail.com',
      color: 'from-cyan-500 to-blue-500',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8521667782',
      href: 'tel:+918521667782',
      color: 'from-green-500 to-teal-500',
      description: 'Available for urgent projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'pranav-rathore-46aa56288',
      href: 'https://linkedin.com/in/pranav-rathore-46aa56288',
      color: 'from-blue-500 to-indigo-500',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Pranavfr',
      href: 'https://github.com/Pranavfr',
      color: 'from-gray-600 to-gray-800',
      description: 'Check out my code repositories'
    },
  ];

  const quickStats = [
    { icon: Clock, label: 'Response Time', value: '<2 Hours', color: 'cyan' },
    { icon: Award, label: 'Client Rating', value: '5★', color: 'yellow' },
    { icon: MessageCircle, label: 'Projects Delivered', value: '15+', color: 'green' },
    { icon: MapPin, label: 'Availability', value: 'Remote', color: 'purple' },
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
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {quickStats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center p-4 sm:p-6 bg-gray-800 rounded-xl border border-gray-700"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-${stat.color}-400`} />
                <div className={`text-lg sm:text-xl font-bold text-${stat.color}-400 mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8 sm:gap-12"
          variants={containerVariants}
        >
          <motion.div className="bg-gray-800 rounded-xl border border-gray-700 p-6 sm:p-8" variants={cardVariants}>
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Send className="text-white sm:w-6 sm:h-6" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project, requirements, timeline, and budget..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} className="sm:w-5 sm:h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div className="space-y-4 sm:space-y-6" variants={containerVariants}>
            <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Available for full-time positions, freelance projects, and consulting opportunities.
              </p>
            </motion.div>
            
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-4 sm:p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                      <IconComponent size={20} className="sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                        {info.label}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 font-medium break-all">
                        {info.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div 
              className="p-4 sm:p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20"
              variants={cardVariants}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Clock className="text-white sm:w-6 sm:h-6" size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-cyan-400">Currently Available</h4>
              </div>
              <ul className="text-sm sm:text-base text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Full-time positions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Freelance projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Consulting opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Open source collaboration
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;