import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: <Palette size={24} />, color: 'text-blue-400', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { name: 'Backend', icon: <Server size={24} />, color: 'text-green-400', items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs'] },
  { name: 'Database', icon: <Database size={24} />, color: 'text-purple-400', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { name: 'DevOps', icon: <Globe size={24} />, color: 'text-orange-400', items: ['AWS', 'Docker', 'CI/CD', 'Nginx'] },
  { name: 'Mobile', icon: <Smartphone size={24} />, color: 'text-pink-400', items: ['React Native', 'Flutter', 'PWA'] },
  { name: 'Tools', icon: <Code2 size={24} />, color: 'text-yellow-400', items: ['Git', 'VS Code', 'Figma', 'Postman'] },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">What I Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            I build robust, scalable apps using modern technologies. 
            Here's what I bring to the table.
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className={`p-3 rounded-xl bg-white/5 ${skill.color} group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{skill.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-400 bg-white/5 rounded-lg border border-white/5 group-hover:text-white group-hover:border-primary/20 transition-all"
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
