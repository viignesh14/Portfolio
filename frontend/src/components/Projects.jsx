import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Code2, Database, Globe, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Meeyazh Naturals',
    desc: 'A full-featured e-commerce platform for natural and organic products with secure payments, product filtering, and order management.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Razorpay'],
    icon: <Globe size={28} />,
    gradient: 'from-green-500/20 to-emerald-500/10',
    github: '#',
    live: 'https://www.meeyazhnaturals.in/',
    preview: true, // show live website preview
  },
  {
    title: 'SaaS Analytics Dashboard',
    desc: 'Real-time data visualization with interactive charts, user tracking, and report generation.',
    tech: ['Next.js', 'PostgreSQL', 'Chart.js', 'Tailwind'],
    icon: <Cpu size={28} />,
    gradient: 'from-purple-500/20 to-pink-500/10',
    github: '#',
    live: '#',
  },
  {
    title: 'AI Chat Application',
    desc: 'Real-time chat app with integrated AI assistant, powered by OpenAI API and WebSockets.',
    tech: ['React', 'Node.js', 'Socket.io', 'OpenAI'],
    icon: <Code2 size={28} />,
    gradient: 'from-blue-500/20 to-cyan-500/10',
    github: '#',
    live: '#',
  },
  {
    title: 'Travel Booking System',
    desc: 'Full-featured travel booking with flight search, hotel management, and payment processing.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'AWS'],
    icon: <Database size={28} />,
    gradient: 'from-orange-500/20 to-yellow-500/10',
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
          >
            {/* Card Header - Website Preview or Gradient */}
            {project.preview ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="block h-56 sm:h-64 relative overflow-hidden cursor-pointer bg-surface">
                <iframe
                  src={project.live}
                  title={project.title}
                  className="w-[200%] h-[200%] origin-top-left pointer-events-none border-0"
                  style={{ transform: 'scale(0.5)' }}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2">
                    Visit Live Site <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            ) : (
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px), radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-white group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>
            )}

            {/* Card Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  <a href={project.github} className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                    <Github size={16} />
                  </a>
                  <a href={project.live} target="_blank" className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all">
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
