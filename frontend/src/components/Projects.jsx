import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-commerce Redesign',
            description: 'A modern, performant e-commerce platform with a focus on user experience and accessibility.',
            tech: ['React', 'Next.js', 'Tailwind', 'Stripe'],
            image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=2070',
            link: '#',
            github: '#',
            featured: true
        },
        {
            title: 'SaaS Dashboard',
            description: 'Complex dashboard with real-time analytics and multiple data visualization components.',
            tech: ['Vite', 'React', 'Framer Motion', 'ChartJS'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
            link: '#',
            github: '#',
            featured: false
        },
        {
            title: 'AI Chat Application',
            description: 'Integrated OpenAI GPT-4 with a sleek, interactive chat interface.',
            tech: ['React', 'Node.js', 'Socket.io', 'AI SDK'],
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070',
            link: '#',
            github: '#',
            featured: false
        },
    ];

    return (
        <section id="projects" className="section bg-slate-100/5 backdrop-blur-3xl py-32 mt-20 relative rounded-t-[100px] border-t border-white/5">
            <div className="text-center mb-20 max-w-2xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black mb-6"
                >
                    Case <span className="text-gradient">Studies.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg text-slate-400"
                >
                    A collection of projects that demonstrate my technical skills and design thinking.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#1e293b]/50 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden hover:border-primary/20 transition-all duration-700"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            {project.featured && (
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 py-1 px-3 md:py-2 md:px-4 glass rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
                                    Featured
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        </div>
                        
                        <div className="p-6 md:p-10 space-y-4 md:space-y-6">
                            <div className="flex items-center justify-between gap-4">
                                <h3 className="text-xl md:text-3xl font-bold truncate">{project.title}</h3>
                                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                                    <a href={project.github} className="p-2 md:p-3 bg-white/5 rounded-xl md:rounded-2xl hover:bg-white/10 transition-colors text-slate-300 hover:text-white">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.link} className="p-2 md:p-3 bg-primary/10 rounded-xl md:rounded-2xl hover:bg-primary/20 transition-colors text-primary border border-primary/10">
                                        <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-sm md:text-lg text-slate-400 leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 md:px-5 md:py-2 glass rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold text-slate-300 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-20">
                <a href="https://github.com" target="_blank" className="btn btn-outline inline-flex items-center gap-2 group">
                    Explore all projects
                    <Github size={18} className="group-hover:rotate-[360deg] transition-all duration-700" />
                </a>
            </div>
        </section>
    );
};

export default Projects;
