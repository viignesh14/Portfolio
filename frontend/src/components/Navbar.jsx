import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 sm:px-6 py-3 transition-all duration-500 backdrop-blur-xl border ${
            scrolled ? 'shadow-lg' : ''
          }`}
          style={{
            backgroundColor: `rgba(var(--bg-rgb), 0.9)`,
            borderColor: 'var(--border)',
            boxShadow: scrolled ? `0 10px 40px var(--shadow)` : 'none',
          }}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-black text-sm group-hover:rotate-12 transition-transform">
              V
            </div>
            <span className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
              Vignesh<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold rounded-lg transition-all"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => { e.target.style.color = 'var(--text)'; e.target.style.background = 'var(--card-hover)'; }}
                onMouseLeave={(e) => { e.target.style.color = 'var(--text-muted)'; e.target.style.background = 'transparent'; }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Social + Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com/viignesh14" target="_blank" className="p-2 transition-colors" style={{ color: 'var(--text-faint)' }}>
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-2 transition-colors" style={{ color: 'var(--text-faint)' }}>
              <Linkedin size={18} />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              className="p-2.5 rounded-xl transition-all duration-300 cursor-pointer"
              style={{ background: 'var(--card-hover)', color: 'var(--text-muted)' }}
              aria-label="Toggle theme"
            >
              <motion.div
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </button>

            <a href="#contact" className="ml-1 btn-primary !py-2.5 !px-5 !text-sm !rounded-xl">
              Hire Me
            </a>
          </div>

          {/* Mobile: Theme Toggle + Menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-lg transition-all"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              style={{ color: 'var(--text-muted)' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: `rgba(var(--bg-rgb), 0.95)` }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-extrabold transition-colors hover:text-primary"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex gap-6 mt-6">
              <a href="https://github.com/viignesh14" target="_blank" style={{ color: 'var(--text-faint)' }}><Github /></a>
              <a href="https://linkedin.com" target="_blank" style={{ color: 'var(--text-faint)' }}><Linkedin /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
