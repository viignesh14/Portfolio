import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const titles = ['Full Stack Developer', 'Java & Spring Boot', 'React & Vite', 'Cloud Enthusiast'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % titles.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-6xl mx-auto px-6 w-full py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-sm font-semibold text-primary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              Available for opportunities
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                Hey, I'm{' '}
                <span className="text-gradient">Vignesh</span>
              </h1>

              {/* Rotating Title */}
              <div className="mt-4 h-10 overflow-hidden">
                {titles.map((title, i) => (
                  <motion.p
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index === i ? 1 : 0,
                      y: index === i ? 0 : -20,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`text-xl sm:text-2xl font-semibold text-slate-400 absolute ${index !== i ? 'pointer-events-none' : ''}`}
                  >
                    {title}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              I craft performant, accessible, and beautifully designed web applications. 
              Passionate about clean code, great UX, and turning ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#projects" className="btn-primary group">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex gap-10 pt-8 border-t border-white/5">
              {[
                { value: '5+', label: 'Years Exp.' },
                { value: '50+', label: 'Projects' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Profile Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="w-80 h-80 rounded-3xl glass p-2 shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                  alt="Vignesh"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-white">Open to Work</span>
                </div>
              </motion.div>

              {/* Tech Stack Badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass px-5 py-3 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Preferred Stack</p>
                    <p className="text-sm font-semibold text-white">React + Spring Boot</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-3xl border-2 border-primary/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
