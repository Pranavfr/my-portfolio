import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SkillTree from './components/SkillTree';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <SkillTree />
      <GitHubActivity />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;