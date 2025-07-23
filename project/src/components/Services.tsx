import React from 'react';
import { Monitor, Smartphone, MessageSquare, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web solutions with modern frameworks and secure backend systems.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Cross-platform mobile applications with intuitive user experiences.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageSquare,
      title: 'Discord Bot Development',
      description: 'Custom Discord bots with advanced features and seamless integration.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Improve your online visibility with comprehensive SEO strategies.',
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 perspective-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text animate-fade-in-up">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group card-3d p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 text-center glass holographic magnetic animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-float animate-glow`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:neon-text transition-all duration-300">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;