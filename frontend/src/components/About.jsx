import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Layout, Layers, Shield, Database, Smartphone } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Frontend', icon: <Layout className="text-blue-400" />, tech: ['React', 'Next.js', 'Tailwind', 'Framer'] },
        { name: 'Backend', icon: <Code2 className="text-green-400" />, tech: ['Java', 'Spring Boot', 'Node.js', 'Python'] },
        { name: 'Database', icon: <Database className="text-purple-400" />, tech: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
        { name: 'Mobile', icon: <Smartphone className="text-pink-400" />, tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
        { name: 'Cloud', icon: <Globe className="text-indigo-400" />, tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
        { name: 'System', icon: <Cpu className="text-yellow-400" />, tech: ['Architecture', 'Design Patterns', 'Microservices'] },
    ];

    return (
        <section id="about" className="section relative">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold tracking-[0.3em] uppercase mb-4"
                >
                    Expertise
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black mb-6"
                >
                    Turning concepts into <br className="hidden md:block" />
                    <span className="text-gradient">digital reality.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg text-slate-400 leading-relaxed"
                >
                    I specialize in building robust and scalable applications. My approach combines technical excellence with creative problem-solving to deliver products that stand out.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card flex flex-col items-center text-center group"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                            {skill.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                        <div className="flex flex-wrap justify-center gap-2 mt-auto">
                            {skill.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Tech stack logos marquee effect or static grid */}
            <div className="mt-32 pt-20 border-t border-white/5">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Placeholder Icons for popular tech stack */}
                    <div className="text-center font-black tracking-wider text-xl">REACT</div>
                    <div className="text-center font-black tracking-wider text-xl">VITE</div>
                    <div className="text-center font-black tracking-wider text-xl">JAVA</div>
                    <div className="text-center font-black tracking-wider text-xl">TAILWIND</div>
                    <div className="text-center font-black tracking-wider text-xl">SPRING</div>
                    <div className="text-center font-black tracking-wider text-xl">AWS</div>
                </div>
            </div>
        </section>
    );
};

export default About;
