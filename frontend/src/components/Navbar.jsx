import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-black tracking-tight"
                >
                    <a href="#home" className="flex items-center gap-2 group">
                        <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">V</span>
                        <span>Vignesh<span className="text-primary">.</span></span>
                    </a>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center space-x-4 border-l border-white/10 pl-8 ml-4"
                    >
                        <a href="https://github.com" target="_blank" className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-all">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-all">
                            <Linkedin size={20} />
                        </a>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-300 hover:text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-2xl z-40 overflow-hidden"
                    >
                        <div className="flex flex-col space-y-6 p-10 h-full justify-center">
                            {navLinks.map((link, i) => (
                                <motion.a 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-black text-slate-300 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
