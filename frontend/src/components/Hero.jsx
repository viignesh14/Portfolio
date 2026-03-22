import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDownRight, Award, MessageSquare } from 'lucide-react';

const Hero = () => {
    const [roles, setRoles] = useState(['Full Stack Developer', 'UI/UX Designer', 'Cloud Engineer', 'Problem Solver']);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
            {/* Background blobs */}
            <div className="bg-blob left-[-10%] top-[-10%] opacity-20 animate-float" />
            <div className="bg-blob right-[-10%] bottom-[-10%] opacity-20 animate-float" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6 md:space-y-8"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 py-1 px-4 rounded-full glass text-xs md:text-sm font-medium text-primary">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for hire
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1]">
                                I code <br />
                                <span className="text-gradient">experiences</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-lg md:text-2xl font-light text-slate-400">
                                <span>I am a</span>
                                <div className="h-8 md:h-10 overflow-hidden relative min-w-[200px] md:min-w-[400px]">
                                    {roles.map((role, i) => (
                                        <motion.span
                                            key={role}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ 
                                                opacity: roleIndex === i ? 1 : 0, 
                                                y: roleIndex === i ? 0 : -20 
                                            }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className={`absolute left-0 top-0 font-bold text-white whitespace-nowrap ${roleIndex === i ? 'block' : 'hidden'}`}
                                        >
                                            {role}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-lg leading-relaxed">
                            Passionate about building highly interactive, accessible, and performant web applications using modern technologies. Let's make something amazing together.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 pt-6">
                            <a href="#projects" className="btn btn-primary flex items-center justify-center gap-2 group">
                                View Projects
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="btn btn-outline flex items-center justify-center gap-2 group">
                                Contact Me
                                <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-4 md:gap-8 pt-10 md:pt-12 border-t border-white/10"
                        >
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-bold">5+</span>
                                <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-semibold">Experience</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-bold">50+</span>
                                <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-semibold">Projects</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-bold">100%</span>
                                <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-semibold">Satisfaction</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Illustration / Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 glass rounded-3xl p-4 overflow-hidden shadow-2xl animate-float">
                            <img 
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" 
                                alt="Portfolio Preview" 
                                className="rounded-2xl w-full object-cover"
                            />
                            {/* Overlay Card */}
                            <div className="absolute top-10 right-[-40px] glass p-4 rounded-2xl shadow-xl w-60 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-secondary rounded-lg text-white">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Top Portfolio 2024</p>
                                        <p className="text-[10px] text-slate-400 font-medium">Awarded for Best Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* decorative elements */}
                        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-primary/20 rounded-full filter blur-[80px] -z-10" />
                        <div className="absolute bottom-[-50px] left-[-100px] w-80 h-80 bg-secondary/10 rounded-full filter blur-[100px] -z-10" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-500"
            >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] [writing-mode:vertical-lr]">Scroll Down</span>
                <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
                    <motion.div
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                        className="absolute left-0 w-full h-1/2 bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
