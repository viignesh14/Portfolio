import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const HomePage = () => {
  const { portfolioData } = usePortfolio();
  
  const isEnabled = (id) => {
    const section = portfolioData.sections.find(s => s.id === id);
    return section ? section.enabled : true;
  };

  return (
    <div className="relative min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />

      <main>
        {isEnabled('hero') && <Hero />}
        {isEnabled('hero') && isEnabled('about') && (
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
          </div>
        )}
        
        {isEnabled('about') && <About />}
        {isEnabled('about') && isEnabled('projects') && (
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
          </div>
        )}

        {isEnabled('projects') && <Projects />}
        {isEnabled('projects') && isEnabled('contact') && (
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
          </div>
        )}

        {isEnabled('contact') && <Contact />}
      </main>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-faint)' }}>
            <span>Built with</span>
            <Heart size={14} className="text-red-400 fill-red-400" />
            <span>by <span className="font-bold" style={{ color: 'var(--text)' }}>{portfolioData.hero.name}</span></span>
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
  );
};

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Router>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
