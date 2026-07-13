import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Braces } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import profileImg from '../assets/profile.jpg';


const Hero = () => {
  const { portfolioData } = usePortfolio();
  const { title, subtitle, tagline } = portfolioData.hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-6xl mx-auto px-6 w-full py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight" style={{ color: 'var(--text)' }}>
                Hi, I am <span className="text-gradient">{portfolioData.hero.name}</span>
              </h1>
            </div>

            <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'var(--text-faint)' }}>
              {portfolioData.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#projects" className="btn-primary group">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Main Photo Card */}
              <div 
                className="relative w-full h-full rounded-2xl overflow-hidden glass p-2.5" 
                style={{ boxShadow: '0 25px 50px var(--shadow)' }}
              >
                <img 
                  src={profileImg} 
                  alt={portfolioData.hero.name} 
                  className="w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Dynamic border/overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -z-20 top-6 left-6 w-full h-full rounded-2xl border-2 border-primary/20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />

              {/* Floating Badge 1 - Top Right */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3 }} 
                className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl" 
                style={{ boxShadow: '0 8px 30px var(--shadow)' }}
              >
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-primary" />
                  <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>Clean Code</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 4, delay: 1 }} 
                className="absolute -bottom-4 -left-4 glass px-5 py-3 rounded-2xl" 
                style={{ boxShadow: '0 8px 30px var(--shadow)' }}
              >
                <div className="flex items-center gap-3">
                  <Braces size={18} className="text-accent" />
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Stack</p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{portfolioData.hero.terminalStack.join(' + ')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
