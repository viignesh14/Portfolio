import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
    <div className="relative min-h-screen bg-bg text-slate-200">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <About />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Projects />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Built with</span>
            <Heart size={14} className="text-red-400 fill-red-400" />
            <span>by <span className="font-bold text-white">Vignesh</span></span>
            <span className="text-slate-700">• © 2024</span>
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={18} />, href: 'https://github.com/viignesh14' },
              { icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
              { icon: <Twitter size={18} />, href: 'https://twitter.com' },
              { icon: <Mail size={18} />, href: 'mailto:vignesh@viignesh.in' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="p-2 text-slate-600 hover:text-primary transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
