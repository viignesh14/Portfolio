import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
            scrolled ? 'glass shadow-lg' : ''
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-black text-sm group-hover:rotate-12 transition-transform">
              V
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Vignesh<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Social + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/viignesh14" target="_blank" className="p-2 text-slate-500 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-2 text-slate-500 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="ml-2 btn-primary !py-2.5 !px-5 !text-sm !rounded-xl">
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-extrabold text-white/80 hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex gap-6 mt-6">
              <a href="https://github.com/viignesh14" target="_blank"><Github className="text-slate-500 hover:text-white transition-colors" /></a>
              <a href="https://linkedin.com" target="_blank"><Linkedin className="text-slate-500 hover:text-white transition-colors" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
