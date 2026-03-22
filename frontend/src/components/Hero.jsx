import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronRight, Zap, Target, Layers, Play } from 'lucide-react';

const Hero = () => {
    const roles = ['Frontend Architect', 'Backend Engineer', 'UI/UX Specialist', 'Full Stack Dev'];
    const [roleIndex, setRoleIndex] = useState(0);
    const containerRef = useRef(null);
    
    // Mouse movement values for Spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const interval = setInterval(() => setRoleIndex((prev) => (prev + 1) % roles.length), 3000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const springConfig = { damping: 25, stiffness: 700 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    return (
        <section 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            id="home" 
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Spotlight Gradient */}
            <motion.div 
                className="pointer-events-none absolute -inset-px z-30 transition duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [dx, dy],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
                    ),
                }}
            />

            {/* Background Texture/Grid */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Main Content */}
                    <div className="lg:col-span-12 text-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 py-2 px-6 rounded-full glass border border-primary/20 bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase mb-4"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            vignesh.in
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-[900] tracking-tighter leading-[0.9] text-white">
                                <span className="block opacity-30 hover:opacity-100 transition-opacity">Full-Stack</span>
                                <span className="text-gradient drop-shadow-2xl">Architect</span>
                            </h1>
                            
                            <div className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-2xl font-medium text-slate-500">
                                <span>Developing for</span>
                                <div className="h-10 overflow-hidden relative min-w-[200px] text-left">
                                    {roles.map((role, i) => (
                                        <motion.span
                                            key={role}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: roleIndex === i ? 1 : 0, x: roleIndex === i ? 0 : 10 }}
                                            className={`absolute left-0 font-black text-white ${roleIndex === i ? 'block' : 'hidden'}`}
                                        >
                                            {role}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
                        >
                            <a href="#projects" className="group relative px-10 py-5 bg-primary text-white font-black text-lg rounded-2xl overflow-hidden active:scale-95 transition-transform shadow-2xl shadow-primary/20">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative flex items-center gap-2">Explore Work <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" /></span>
                            </a>
                            <a href="#contact" className="px-10 py-5 glass border border-white/10 text-white font-black text-lg rounded-2xl hover:bg-white/5 active:scale-95 transition-all">
                                Let's Talk
                            </a>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
                        {[
                            { icon: <Zap />, label: 'Performance', color: 'text-yellow-400' },
                            { icon: <Target />, label: 'Precision', color: 'text-blue-400' },
                            { icon: <Layers />, label: 'Scalability', color: 'text-green-400' },
                            { icon: <Play />, label: 'Innovation', color: 'text-purple-400' }
                        ].map((item, i) => (
                            <motion.div 
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.1 }}
                                className="glass-card hover:border-primary/50 transition-all flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl group"
                            >
                                <div className={`p-3 bg-white/5 rounded-lg ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</div>
                                <span className="font-bold text-sm tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 blur-[150px] -z-10 animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[150px] -z-10 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
        </section>
    );
};

export default Hero;
