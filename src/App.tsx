import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SkillTree from './components/SkillTree';
import GitHubActivity from './components/GitHubActivity';
import EducationAndAchievements from './components/EducationAndAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-sans cursor-default">
      <CustomCursor />
      {/* Matte Graphic Overlay */}
      <div className="noise-bg"></div>

      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <SkillTree />
      <GitHubActivity />
      <EducationAndAchievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;