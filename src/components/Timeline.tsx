import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      year: '2023 - 2027',
      title: 'Bachelor of Technology - BTech',
      company: 'Lovely Professional University',
      description: 'Computer Software Engineering',
      icon: GraduationCap,
      skills: ['Computer Science', 'Software Engineering']
    },
    {
      year: '2023',
      title: 'Introduction to Hardware and Operating Systems',
      company: 'Certification',
      description: 'Comprehensive study of computer hardware components and operating system fundamentals',
      icon: Award,
      skills: ['Hardware', 'Operating Systems']
    },
    {
      year: '2023',
      title: 'Packet Switching Networks and Algorithms',
      company: 'Certification',
      description: 'Advanced networking concepts focusing on packet switching and network algorithms',
      icon: Award,
      skills: ['Packet Switching', 'Network Algorithms']
    },
    {
      year: '2023',
      title: 'TCP/IP and Advanced Topics',
      company: 'Certification',
      description: 'In-depth study of TCP/IP protocols and advanced networking concepts',
      icon: Award,
      skills: ['TCP/IP', 'Network Communications']
    },
    {
      year: '2023',
      title: 'The Bits and Bytes of Computer Networking',
      company: 'Certification',
      description: 'Fundamental concepts of computer networking and data communication',
      icon: Award,
      skills: ['Computer Networking', 'Data Communication']
    },
    {
      year: '2023',
      title: 'Advanced Content Marketing',
      company: 'Certification',
      description: 'Strategic content marketing and digital communication techniques',
      icon: Award,
      skills: ['Content Marketing', 'Digital Marketing']
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Education & Certifications
        </h2>
        
        <div className="space-y-8">
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="relative bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <span className="text-sm text-blue-400 font-medium px-3 py-1 bg-blue-500/10 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 font-medium mb-2">{item.company}</p>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 