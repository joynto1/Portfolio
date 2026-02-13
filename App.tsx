import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import EducationExperience from './components/EducationExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - wait for progress bar animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-dark-bg min-h-screen text-slate-900 dark:text-slate-200 font-sans selection:bg-neon-blue/30 selection:text-white transition-colors duration-300">
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <EducationExperience />
            <Skills />
            <Projects />
          </main>
          <Contact />
          <AIChat />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default App;