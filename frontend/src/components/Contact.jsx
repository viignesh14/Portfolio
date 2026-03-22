import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            // Pointing to Spring Boot Backend
            await axios.post('http://localhost:8080/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    const contactInfo = [
        { icon: <Mail />, title: 'Email', detail: 'vignesh@viignesh.in', link: 'mailto:vignesh@viignesh.in' },
        { icon: <Phone />, title: 'Phone', detail: '+91 98765 43210', link: 'tel:+919876543210' },
        { icon: <MapPin />, title: 'Location', detail: 'Bangalore, India', link: '#' },
    ];

    return (
        <section id="contact" className="section relative bg-background pt-40 overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-100/5 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-between"
                >
                    <div className="space-y-8">
                        <motion.span className="text-primary font-bold tracking-[0.3em] uppercase mb-4">
                            Contact
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-black leading-tight">
                            Let's build <br />
                            <span className="text-gradient">the future.</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-light max-w-md">
                            I'm currently available for freelance work and full-time opportunities. Have a project in mind? Reach out!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 pt-12 md:pt-40">
                        {contactInfo.map((info, i) => (
                            <a 
                                key={info.title} 
                                href={info.link} 
                                className="group flex items-center gap-4 md:gap-6 p-4 md:p-6 glass rounded-2xl md:rounded-3xl hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary transition-all group-hover:text-white duration-500">
                                    {/* Icon size should be responsive too */}
                                    {React.cloneElement(info.icon, { size: 20, className: "md:w-6 md:h-6" })}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">{info.title}</span>
                                    <span className="text-sm md:text-lg font-bold group-hover:translate-x-1 transition-transform truncate max-w-[150px] md:max-w-none">{info.detail}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card flex flex-col p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] pointer-events-none" />
                    
                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
                        <div className="space-y-2">
                            <label className="text-xs md:text-sm font-black uppercase text-slate-500 ml-2">Full Name</label>
                            <input 
                                required
                                type="text" 
                                placeholder="Your name"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 text-base md:text-lg focus:outline-none focus:border-primary/50 transition-colors"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs md:text-sm font-black uppercase text-slate-500 ml-2">Email Address</label>
                            <input 
                                required
                                type="email" 
                                placeholder="Your email"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 text-base md:text-lg focus:outline-none focus:border-primary/50 transition-colors"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs md:text-sm font-black uppercase text-slate-500 ml-2">Message</label>
                            <textarea 
                                required
                                placeholder="How can I help you?"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 text-base md:text-lg min-h-[120px] md:min-h-[150px] focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button 
                            disabled={status === 'loading'}
                            type="submit" 
                            className="w-full btn btn-primary flex items-center justify-center gap-4 text-lg md:text-xl py-4 md:py-6 rounded-2xl md:rounded-3xl group shadow-2xl shadow-primary/20"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                            <Send size={20} className="md:w-6 md:h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </button>

                        {status === 'success' && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-bold text-center">
                                Message sent successfully! I'll get back to you soon.
                            </motion.p>
                        )}
                        {status === 'error' && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-bold text-center">
                                Oops! Something went wrong. Please try again.
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
