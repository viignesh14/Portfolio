import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Code, Layout, Globe, Star } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'SaaS Analytics Engine',
            description: 'A massive data visualization suite with real-time insight generation.',
            tech: ['Next.js', 'PostgreSQL', 'D3.js', 'Redis'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
            link: '#',
            github: '#',
            size: 'lg', // Large for Bento
            color: 'from-blue-500/20'
        },
        {
            title: 'E-commerce Next.js',
            description: 'Redefining the shopping experience with headless architecture.',
            tech: ['React', 'Stripe', 'Tailwind'],
            image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=2070',
            link: '#',
            github: '#',
            size: 'sm',
            color: 'from-purple-500/20'
        },
        {
            title: 'AI Photo Editor',
            description: 'Manipulate images with custom GPT-4 and Diffusion models.',
            tech: ['Python', 'React', 'OpenAI'],
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070',
            link: '#',
            github: '#',
            size: 'sm',
            color: 'from-pink-500/20'
        },
        {
            title: 'Crypto Portfolio',
            description: 'Stay ahead of the market with real-time blockchain tracking.',
            tech: ['Web3', 'Ethers.js', 'React'],
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=2070',
            link: '#',
            github: '#',
            size: 'md',
            color: 'from-green-500/20'
        },
    ];

    return (
        <section id="projects" className="section relative bg-background/50 py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-black tracking-widest uppercase text-xs"
                        >
                            Selected Works
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mt-4"
                        >
                            Impactful <br /><span className="text-gradient">Case Studies.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 p-8 glass rounded-3xl border border-white/5 bg-white/2"
                    >
                        <div className="flex flex-col">
                            <span className="text-4xl font-black">24+</span>
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Active Clients</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 mx-4" />
                        <div className="flex flex-col">
                            <span className="text-4xl font-black">99%</span>
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Success Rate</span>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px] md:auto-rows-[400px]">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative glass rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-700 ${
                                project.size === 'lg' ? 'md:col-span-2 md:row-span-2' : 
                                project.size === 'md' ? 'md:col-span-2' : ''
                            }`}
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover grayscale-[80%] brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-[0.7] group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} to-background/50 opacity-60`} />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
                                <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-none">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <a href={project.github} className="p-3 bg-white/5 rounded-full hover:bg-white/10 border border-white/10 transition-colors text-white">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} className="flex-grow flex items-center justify-between px-6 py-3 bg-primary rounded-full font-black text-white hover:bg-primary-dark transition-colors text-sm uppercase tracking-widest">
                                            View Project <ArrowUpRight size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Star */}
                            <Star className="absolute top-8 right-8 text-primary opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-1000" size={32} />
                        </motion.div>
                    ))}
                    
                    {/* Bento Fillers */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="hidden lg:flex flex-col items-center justify-center glass rounded-[2.5rem] border border-white/5 bg-primary/5 p-12 text-center space-y-4"
                    >
                        <Globe className="text-primary animate-spin-slow" size={64} />
                        <h4 className="text-2xl font-black tracking-tighter">Global Delivery.</h4>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Shipping code to users in 120+ countries.</p>
                    </motion.div>
                </div>

                <div className="text-center mt-20">
                    <a href="https://github.com" className="btn-outline px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] hover:bg-primary hover:text-white hover:border-primary transition-all duration-500">
                        View Entire Archive
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
