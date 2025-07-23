import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Pranav delivered an exceptional Discord bot that transformed our community engagement. His attention to security and user experience is outstanding.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, SecureApp Solutions',
      content: 'Working with Pranav on our web application was a game-changer. His cybersecurity expertise ensured our platform was both functional and secure.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Startup Founder',
      content: 'Pranav\'s full-stack development skills are impressive. He built our entire platform from scratch with modern technologies and best practices.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 perspective-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text animate-fade-in-up">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group card-3d p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 glass holographic magnetic animate-fade-in-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <Quote className="text-cyan-400 animate-float animate-glow" size={32} />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="text-yellow-400 fill-current animate-pulse-3d magnetic" 
                    size={16}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm sm:text-base text-gray-300 text-center mb-6 leading-relaxed italic group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/20 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300 animate-float"
                />
                <div className="text-center">
                  <h4 className="text-sm sm:text-base text-white font-semibold group-hover:neon-text transition-all duration-300">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;