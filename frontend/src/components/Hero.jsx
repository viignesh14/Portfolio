import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Braces } from 'lucide-react';

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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-sm font-semibold text-primary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              Available for internships & projects
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight" style={{ color: 'var(--text)' }}>
                Hey, I'm{' '}
                <span className="text-gradient">Vignesh</span>
              </h1>
              <div className="mt-4 h-10 overflow-hidden relative">
                {titles.map((title, i) => (
                  <motion.p
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: index === i ? 1 : 0, y: index === i ? 0 : -20 }}
                    transition={{ duration: 0.4 }}
                    className={`text-xl sm:text-2xl font-semibold absolute ${index !== i ? 'pointer-events-none' : ''}`}
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {title}
                  </motion.p>
                ))}
              </div>
            </div>

            <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'var(--text-faint)' }}>
              I craft performant, accessible, and beautifully designed web applications. 
              Passionate about clean code, great UX, and turning ideas into reality.
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

          {/* Right - Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="glass rounded-2xl overflow-hidden" style={{ boxShadow: '0 25px 50px var(--shadow)' }}>
                {/* Title Bar */}
                <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs font-mono" style={{ color: 'var(--text-faint)' }}>vignesh@portfolio ~</span>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                  <p>// about me</p>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                  <p className="pl-4"><span className="text-green-400">name</span>: <span className="text-orange-300">"Vignesh"</span>,</p>
                  <p className="pl-4"><span className="text-green-400">role</span>: <span className="text-orange-300">"Full Stack Dev"</span>,</p>
                  <p className="pl-4"><span className="text-green-400">stack</span>: [<span className="text-orange-300">"React"</span>, <span className="text-orange-300">"Spring Boot"</span>],</p>
                  <p className="pl-4"><span className="text-green-400">passion</span>: <span className="text-orange-300">"Building cool stuff"</span>,</p>
                  <p className="pl-4"><span className="text-green-400">available</span>: <span className="text-blue-400">true</span>,</p>
                  <p>{'}'}</p>
                  <p className="mt-3" style={{ color: 'var(--text-muted)' }}>▌</p>
                </div>
              </div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl" style={{ boxShadow: '0 8px 30px var(--shadow)' }}>
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-primary" />
                  <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>Clean Code</span>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} className="absolute -bottom-4 -left-4 glass px-5 py-3 rounded-2xl" style={{ boxShadow: '0 8px 30px var(--shadow)' }}>
                <div className="flex items-center gap-3">
                  <Braces size={18} className="text-accent" />
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Stack</p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>React + Spring Boot</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl border-2 border-primary/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
