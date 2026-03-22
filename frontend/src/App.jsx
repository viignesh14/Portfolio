import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-background text-white selection:bg-primary/30 min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[60] origin-[0%]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="flex flex-col gap-0 overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

      <footer className="section border-t border-white/5 pb-12 mt-40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-2xl font-black tracking-tight">
              Vignesh<span className="text-primary">.</span>
            </div>
            <p className="text-slate-500 font-medium italic">© 2024 Vignesh. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="https://github.com" target="_blank" className="text-slate-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">GitHub</a>
            <a href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" className="text-slate-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">Twitter</a>
            <a href="mailto:vignesh@viignesh.in" className="text-slate-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
