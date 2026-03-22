import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Mercor',
      logo: '/mercor.png',
      roles: [
        {
          title: 'AI Red Teamer / Reviewer',
          period: 'Mar 14, 2026 - Present',
          description: [
            'Promoted to evaluate dataset quality and conduct peer reviews of annotations to ensure high standards and consistency.',
            'Perform adversarial testing and AI red teaming to identify safety vulnerabilities and model policy violations.',
            'Execute direct annotations and comprehensive evaluations of AI responses for complex prompts.',
            'Onboard and mentor new annotators to maintain project accuracy and operational efficiency.'
          ],
        },
        {
          title: 'Annotator',
          period: 'Feb 28, 2026 - Mar 13, 2026',
          description: [
            'Generated and annotated diverse datasets to support AI model training, alignment, and response quality.',
            'Validated model outputs against strict project guidelines to ensure factual accuracy and harmlessness.',
            'Contributed to iterative improvements in overall AI model performance and safety metrics.'
          ],
        }
      ]
    },
    {
      company: 'Esports Talks',
      logo: '/etlogo.png',
      link: 'https://www.esportstalks.in/',
      roles: [
        {
          title: 'Fullstack Developer',
          period: 'Previous Experience',
          description: [
            'Contributed directly to the end-to-end development of a scaling esports community platform.',
            'Engineered dynamic features for community engagement, streamlined tournament organization, and robust content management.'
          ],
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section id="experience" className="section-padding-lg px-6 sm:px-8 lg:px-12 bg-gray-900 border-t border-gray-800">
      <motion.div 
        className="max-w-4xl mx-auto space-y-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="font-heading text-display-sm sm:text-display-md font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
            Work Experience
          </h2>
          <p className="font-body text-body-xl text-gray-400 container-narrow mx-auto text-balance leading-relaxed">
            My professional journey and experiences
          </p>
        </motion.div>

        <div className="space-y-8 lg:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[2.25rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div key={index} className="relative pl-14 md:pl-28" variants={itemVariants}>
              {/* Company Logo Icon Timeline Marker */}
              <div className="absolute left-[-0.65rem] md:left-1.5 top-0 md:top-2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-900 border border-gray-700 shadow-lg shadow-cyan-500/20 z-10 overflow-hidden transition-all duration-300 hover:border-cyan-500/50">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + exp.company + '&background=0D8BD9&color=fff';
                  }}
                />
              </div>

              {/* Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 sm:p-8 hover:border-cyan-500/50 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-wide flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                  {exp.company}
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-2 mt-1 text-gray-400 hover:text-cyan-400 transition-colors"
                      title={`Visit ${exp.company} Website`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </h3>
                
                <div className="space-y-8">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      {/* Timeline connector for multiple roles */}
                      {roleIndex > 0 && (
                        <div className="absolute -top-6 left-2 w-0.5 h-6 bg-gray-700" />
                      )}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-400" />
                          <h4 className="text-lg font-semibold text-gray-200">{role.title}</h4>
                        </div>
                        <span className="flex items-center gap-2 text-sm text-cyan-400 font-mono bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
                          <Calendar size={14} />
                          {role.period}
                        </span>
                      </div>
                      
                      <ul className="text-gray-400 text-sm leading-relaxed pl-5 ml-1 border-l-2 border-gray-700 space-y-2 list-disc marker:text-cyan-500">
                        {role.description.map((bullet, idx) => (
                          <li key={idx} className="pl-1">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
