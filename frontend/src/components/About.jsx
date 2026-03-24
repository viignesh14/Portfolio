import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Palette } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: <Palette size={24} />, color: 'text-blue-400', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { name: 'Backend', icon: <Server size={24} />, color: 'text-green-400', items: ['Java', 'Spring Boot', 'REST APIs'] },
  { name: 'Database', icon: <Database size={24} />, color: 'text-purple-400', items: ['MySQL', 'MongoDB'] },

  { name: 'Tools', icon: <Code2 size={24} />, color: 'text-yellow-400', items: ['Git', 'VS Code', 'Figma', 'Postman'] },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">What I Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2" style={{ color: 'var(--text)' }}>
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg mt-6 leading-relaxed" style={{ color: 'var(--text-faint)' }}>
            I build robust, scalable apps using modern technologies. 
            Here's what I bring to the table.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group glass rounded-2xl p-6 transition-all duration-300 cursor-default"
            style={{ background: 'var(--card-bg)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--card-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--card-bg)'}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className={`p-3 rounded-xl ${skill.color} group-hover:scale-110 transition-transform`} style={{ background: 'var(--input-bg)' }}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>{skill.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all"
                  style={{ color: 'var(--text-muted)', background: 'var(--input-bg)', border: '1px solid var(--border)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
