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
            <div className="relative w-[260px] sm:w-[300px] aspect-square group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-500 -z-10" />
              
              {/* Main Photo Card */}
              <div 
                className="relative w-full h-full rounded-full overflow-hidden glass p-2" 
                style={{ boxShadow: '0 20px 40px var(--shadow)' }}
              >
                <img 
                  src={profileImg} 
                  alt={portfolioData.hero.name} 
                  className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Decorative Frame */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-[1.04] group-hover:scale-[1.08] transition-transform duration-500 -z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
