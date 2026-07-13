import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { supabase } from '../supabase';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: form.name,
          email: form.email,
          message: form.message,
        }
      ]);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Supabase contact submission error:', err);
      setStatus('error');
    }
  };


  const info = [
    { icon: <Mail size={20} />, label: 'Email', value: 'viignesh.14@gmail.com', href: 'mailto:viignesh.14@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 63800 20826', href: 'tel:+916380020826' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Coimbatore, India', href: '#' },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2" style={{ color: 'var(--text)' }}>
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg mt-6 leading-relaxed" style={{ color: 'var(--text-faint)' }}>
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
              className="flex items-center gap-4 glass rounded-xl p-5 transition-all group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>{item.label}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{item.value}</p>
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
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-faint)' }}>Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  style={{ background: 'var(--input-bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-faint)' }}>Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  style={{ background: 'var(--input-bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-faint)' }}>Message</label>
              <textarea
                required
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                style={{ background: 'var(--input-bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
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
