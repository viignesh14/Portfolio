import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('http://localhost:8080/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const info = [
    { icon: <Mail size={20} />, label: 'Email', value: 'vignesh@viignesh.in', href: 'mailto:vignesh@viignesh.in' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Bangalore, India', href: '#' },
  ];

  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            Have a project in mind? Let's discuss and make it happen.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          {info.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 glass rounded-xl p-5 hover:bg-white/[0.06] transition-all group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-semibold text-white">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
              <textarea
                required
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn-primary justify-center text-base py-4 rounded-xl group"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            {status === 'success' && (
              <p className="text-center text-green-400 font-semibold text-sm">✓ Message sent! I'll reply soon.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400 font-semibold text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
