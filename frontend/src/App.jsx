import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        {/* Scroll Progress */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />

        <main>
          <Hero />
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
          </div>
          <About />
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
          </div>
          <Projects />
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
          </div>
          <Contact />
        </main>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-faint)' }}>
              <span>Built with</span>
              <Heart size={14} className="text-red-400 fill-red-400" />
              <span>by <span className="font-bold" style={{ color: 'var(--text)' }}>Vignesh</span></span>
              <span style={{ color: 'var(--border)' }}>• © 2024</span>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: <Github size={18} />, href: 'https://github.com/viignesh14' },
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
                { icon: <Twitter size={18} />, href: 'https://twitter.com' },
                { icon: <Mail size={18} />, href: 'mailto:viignesh.14@gmail.com' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-2 transition-colors hover:text-primary"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
