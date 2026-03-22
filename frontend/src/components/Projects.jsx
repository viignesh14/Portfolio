import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A modern shopping platform with Stripe payments, real-time inventory, and admin dashboard.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    github: '#',
    live: '#',
  },
  {
    title: 'SaaS Analytics Dashboard',
    desc: 'Real-time data visualization with interactive charts, user tracking, and report generation.',
    tech: ['Next.js', 'PostgreSQL', 'Chart.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    github: '#',
    live: '#',
  },
  {
    title: 'AI Chat Application',
    desc: 'Real-time chat app with integrated AI assistant, powered by OpenAI API and WebSockets.',
    tech: ['React', 'Node.js', 'Socket.io', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?auto=format&fit=crop&q=80&w=800',
    github: '#',
    live: '#',
  },
  {
    title: 'Travel Booking System',
    desc: 'Full-featured travel booking with flight search, hotel management, and payment processing.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            Here are some of the projects I've built. Each one was crafted with attention to detail and performance.
          </p>
        </motion.div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  <a href={project.github} className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                    <Github size={16} />
                  </a>
                  <a href={project.live} className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-semibold bg-white/5 text-slate-400 rounded-lg border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a href="https://github.com/viignesh14" target="_blank" className="btn-outline group">
          View All on GitHub
          <Github size={18} className="group-hover:rotate-[360deg] transition-all duration-700" />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
