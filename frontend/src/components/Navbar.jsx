import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-8'}`}>
            <div className="max-w-5xl mx-auto px-6">
                <div className={`glass relative flex items-center justify-between p-2 pl-6 rounded-full border border-white/10 transition-all duration-500 ${scrolled ? 'bg-black/40 shadow-2xl backdrop-blur-2xl' : 'bg-white/5'}`}>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-black tracking-tighter flex items-center gap-1"
                    >
                        <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center text-sm">V</div>
                        <span className="hidden sm:inline">Vignesh<span className="text-primary">.</span></span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                className="px-5 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="ml-2 btn-primary !py-2 !px-5 !text-sm flex items-center gap-2 rounded-full overflow-hidden group">
                            <span>Hire Me</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3 text-slate-300 hover:text-white transition-colors">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 bg-black/80 z-[90] flex items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl font-black tracking-tighter text-slate-400 hover:text-primary transition-colors hover:scale-110 transform"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="flex gap-6 mt-8">
                                <Github className="text-slate-500 hover:text-white cursor-pointer" />
                                <Linkedin className="text-slate-500 hover:text-white cursor-pointer" />
                                <Twitter className="text-slate-500 hover:text-white cursor-pointer" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
