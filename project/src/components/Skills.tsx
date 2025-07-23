import React from 'react';
import { Palette, Server, HardDrive, ShieldCheck, Settings, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Palette,
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 'Next.js', 'TypeScript'],
      color: 'from-cyan-500 to-blue-500',
      description: 'Crafting beautiful, responsive user interfaces'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'Flask', 'Python', 'REST APIs', 'GraphQL'],
      color: 'from-green-500 to-teal-500',
      description: 'Building robust, scalable server architectures'
    },
    {
      title: 'Database Management',
      icon: HardDrive,
      skills: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL', 'Redis'],
      color: 'from-purple-500 to-pink-500',
      description: 'Designing efficient data storage solutions'
    },
    {
      title: 'Cybersecurity',
      icon: ShieldCheck,
      skills: ['OWASP Top 10', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'Kali Linux', 'Penetration Testing'],
      color: 'from-red-500 to-orange-500',
      description: 'Protecting applications from cyber threats'
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'AWS', 'CI/CD'],
      color: 'from-indigo-500 to-purple-500',
      description: 'Streamlining development workflows'
    },
    {
      title: 'Specialized Technologies',
      icon: Zap,
      skills: ['Discord.js', 'Socket.io', 'Chart.js', 'QR Code Gen', 'JWT Auth', 'SEO', 'AI Integration'],
      color: 'from-yellow-500 to-orange-500',
      description: 'Cutting-edge technologies and integrations'
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mastering the latest technologies to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm border border-gray-600 hover:border-gray-500 transition-colors duration-300"
                    >
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {category.skills.length}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Technologies', value: '25+', color: 'cyan' },
            { label: 'Frameworks', value: '15+', color: 'blue' },
            { label: 'Tools', value: '20+', color: 'purple' },
            { label: 'Years Experience', value: '3+', color: 'green' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700"
            >
              <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
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

export default Skills;