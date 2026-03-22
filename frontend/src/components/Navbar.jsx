import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home', icon: '🏠' },
  { name: 'About', href: '#about', icon: '👤' },
  { name: 'Projects', href: '#projects', icon: '🚀' },
  { name: 'Contact', href: '#contact', icon: '✉️' },
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
          <div className="flex md:hidden items-center gap-3">
            {/* Pill Toggle Switch */}
            <button
              onClick={toggle}
              className="relative w-16 h-8 rounded-full p-1 transition-all duration-300 cursor-pointer"
              style={{ background: isDark ? 'var(--card-hover)' : 'rgba(99, 102, 241, 0.15)', border: '1px solid var(--border)' }}
              aria-label="Toggle theme"
            >
              <motion.div
                className="w-6 h-6 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: isDark ? 0 : 32 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ background: isDark ? '#334155' : 'var(--color-primary)' }}
              >
                {isDark ? <Moon size={12} className="text-blue-300" /> : <Sun size={12} className="text-yellow-200" />}
              </motion.div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl transition-all"
              style={{ color: 'var(--text-muted)', background: isOpen ? 'var(--card-hover)' : 'transparent' }}
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
            className="fixed inset-0 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden"
            style={{ backgroundColor: `rgba(var(--bg-rgb), 0.97)` }}
          >
            {/* Close button at top */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-xl transition-all"
              style={{ color: 'var(--text-muted)', background: 'var(--card-hover)' }}
            >
              <X size={24} />
            </button>

            {/* Nav Links as styled cards */}
            <div className="flex flex-col items-stretch gap-4 w-full px-8 max-w-sm">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 group active:scale-95"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--card-hover)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--card-bg)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <div className="flex-grow">
                    <p className="text-lg font-bold tracking-tight" style={{ color: 'var(--text)' }}>{link.name}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Bottom section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 flex flex-col items-center gap-6"
            >
              {/* Theme toggle in menu too */}
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <Sun size={16} style={{ color: isDark ? 'var(--text-faint)' : 'var(--color-primary)' }} />
                <button
                  onClick={toggle}
                  className="relative w-12 h-6 rounded-full p-0.5 transition-all duration-300 cursor-pointer"
                  style={{ background: isDark ? '#334155' : 'var(--color-primary)' }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white shadow-sm"
                    animate={{ x: isDark ? 0 : 24 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
                <Moon size={16} style={{ color: isDark ? 'var(--color-primary)' : 'var(--text-faint)' }} />
              </div>

              {/* Social Icons */}
              <div className="flex gap-5">
                <a href="https://github.com/viignesh14" target="_blank" className="p-3 rounded-xl transition-all hover:text-primary" style={{ color: 'var(--text-faint)', background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" className="p-3 rounded-xl transition-all hover:text-primary" style={{ color: 'var(--text-faint)', background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
