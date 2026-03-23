import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';

const EducationAndAchievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const education = [
    {
      school: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 7.3",
      date: "Aug 2023 - Present"
    },
    {
      school: "Trident Public School",
      location: "Muzaffarpur, Bihar",
      degree: "Intermediate",
      score: "Percentage: 80",
      date: "Apr 2021 - Mar 2023"
    },
    {
      school: "Sunshine Prep./High School",
      location: "Muzaffarpur, Bihar",
      degree: "Matriculation",
      score: "Percentage: 94",
      date: ""
    }
  ];

  const certificates = [
    { title: "GfG 160 Days of Problem Solving", provider: "GeeksforGeeks", date: "Nov 2025" },
    { title: "Prompt Engineering (ChatGPT, Generative AI & LLM)", provider: "Infosys", date: "Aug 2025" },
    { title: "Cloud Computing", provider: "NPTEL", date: "Mar 2025" },
    { title: "Packet Switching Networks and Algorithms", provider: "University of Colorado", date: "Nov 2024" }
  ];

  const achievements = [
    {
      title: "Qualified for Smart India Hackathon (SIH) 2025 Grand Finale",
      date: "Sep 2025",
      desc: "Advanced from the university’s Internal Hackathon round among 55+ teams with the same problem statement."
    },
    {
      title: "Solved 185+ problems on LeetCode with 100+ active days",
      date: "Jul 2025",
      desc: "Earned badges including 50 Days, 100 Days, LeetCode Knight, and Streak badges."
    }
  ];

  return (
    <section id="education" className="section-padding-lg px-6 sm:px-8 lg:px-12 bg-gray-900 border-t border-gray-800">
      <motion.div
        className="container-wide"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          
          {/* Left Column: Education */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-white w-6 h-6" />
              </div>
              <h2 className="font-heading text-display-sm sm:text-display-md font-bold text-white tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-gray-800">
              {education.map((item, index) => (
                <motion.div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" variants={itemVariants}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-blue-500 text-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-400/50 transition-colors shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                       <h3 className="font-bold text-lg text-white">{item.degree}</h3>
                       {item.date && <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full whitespace-nowrap">{item.date}</span>}
                    </div>
                    <div className="text-gray-300 font-medium mb-1">{item.school}</div>
                    <div className="text-sm text-gray-400 mb-3">{item.location}</div>
                    <div className="inline-block px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm font-semibold">
                      {item.score}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certificates & Achievements */}
          <motion.div className="space-y-12" variants={itemVariants}>
            
            {/* Achievements Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <FaTrophy className="text-white w-6 h-6" />
                </div>
                <h2 className="font-heading text-display-sm sm:text-display-md font-bold text-white tracking-tight">
                  Achievements
                </h2>
              </div>
              
              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="p-5 rounded-xl bg-gray-800 border border-gray-700 hover:border-yellow-400/50 transition-colors shadow-lg group"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-bold text-white text-lg group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                      <span className="text-xs font-medium text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded whitespace-nowrap mt-1">{item.date}</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certificates Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <FaCertificate className="text-white w-6 h-6" />
                </div>
                <h2 className="font-heading text-display-sm sm:text-display-md font-bold text-white tracking-tight">
                  Certifications
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-green-400/50 transition-colors shadow-md"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">{cert.title}</h3>
                    <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-700/50">
                      <span className="text-xs text-gray-400">{cert.provider}</span>
                      <span className="text-xs font-medium text-green-400">{cert.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default EducationAndAchievements;
