import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Calendar, ExternalLink, Search, ArrowLeft, Maximize2, X, Clock, User, CheckCircle } from 'lucide-react';
import Navbar from './Navbar';

// Import certificate images
import reactNativeImg from '../assets/certificates/react_native.jpg';
import javaFullstackImg from '../assets/certificates/java_fullstack.jpg';
import aiProductivityImg from '../assets/certificates/ai_productivity.jpg';
import aiResponsiblyImg from '../assets/certificates/ai_responsibly.jpg';
import deepLearningImg from '../assets/certificates/deep_learning.jpg';
import aiFoundationImg from '../assets/certificates/ai_foundation.jpg';
import googleAiEssentialsImg from '../assets/certificates/google_ai_essentials.jpg';
import fullstackAgenticAiImg from '../assets/certificates/fullstack_agentic_ai.jpg';
import artOfPromptingImg from '../assets/certificates/art_of_prompting.jpg';
import cryptographyImg from '../assets/certificates/cryptography.jpg';

const certificatesData = [
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Development',
    issuer: 'LOGIN360',
    date: 'March 24, 2026',
    duration: 'April 07, 2025 - August 18, 2025',
    category: 'Development',
    description: 'Demonstrated proficiency with essential Java Full Stack tools and successfully cleared all stages of mock interviews.',
    image: javaFullstackImg,
    skills: ['Java', 'Spring Boot', 'SQL', 'React', 'Full Stack'],
    verifyUrl: null
  },
  {
    id: 'google-ai-essentials',
    title: 'Google AI Essentials Specialization',
    issuer: 'Google (via Coursera)',
    date: 'May 16, 2026',
    category: 'Cloud & AI',
    description: 'A 5-course specialization covering AI fundamentals, prompt engineering, productivity hacking, and ethical practices.',
    image: googleAiEssentialsImg,
    skills: ['AI Essentials', 'Prompt Engineering', 'Generative AI', 'AI Safety'],
    verifyUrl: 'https://coursera.org/verify/specialization/LF01719KK6F2'
  },
  {
    id: 'fullstack-agentic-ai',
    title: 'Full Stack Generative and Agentic AI with Python',
    issuer: 'Udemy',
    instructor: 'Hitesh Choudhary, Piyush Garg',
    date: 'May 9, 2026',
    duration: '32.5 total hours',
    category: 'Cloud & AI',
    description: 'Deep dive into building real-world Full Stack applications powered by Generative AI and autonomous AI agents using Python.',
    image: fullstackAgenticAiImg,
    skills: ['Agentic AI', 'Python', 'Generative AI', 'LangChain', 'LlamaIndex'],
    verifyUrl: 'https://www.udemy.com/certificate/UC-a0c36179-4742-4020-beec-ff3a7e76a8f9/'
  },
  {
    id: 'react-native',
    title: 'The Best React Native Course 2026',
    issuer: 'Udemy',
    instructor: 'Ahmed Sawy',
    date: 'April 22, 2026',
    duration: '24.5 total hours',
    category: 'Development',
    description: 'Comprehensive course covering React Native from beginner to expert levels, focusing on cross-platform mobile apps.',
    image: reactNativeImg,
    skills: ['React Native', 'Mobile Development', 'JavaScript', 'CSS'],
    verifyUrl: 'https://www.udemy.com/certificate/UC-ac23c392-0355-48e3-8459-d4c3219597c0/'
  },
  {
    id: 'ai-productivity',
    title: 'Maximize Productivity With AI Tools',
    issuer: 'Google (via Coursera)',
    date: 'May 16, 2026',
    category: 'Cloud & AI',
    description: 'Authorized course by Google focusing on utilizing advanced generative AI tools to increase day-to-day work productivity.',
    image: aiProductivityImg,
    skills: ['Generative AI', 'AI Tools', 'Productivity'],
    verifyUrl: 'https://coursera.org/verify/KEALPTFPR8E5'
  },
  {
    id: 'ai-responsibly',
    title: 'Use AI Responsibly',
    issuer: 'Google (via Coursera)',
    date: 'May 16, 2026',
    category: 'Cloud & AI',
    description: 'Google career credential focusing on the ethical implications, safety, and responsible practices of AI implementation.',
    image: aiResponsiblyImg,
    skills: ['Responsible AI', 'AI Ethics', 'AI Safety'],
    verifyUrl: 'https://coursera.org/verify/5D2LNHO7JXH7'
  },
  {
    id: 'art-of-prompting',
    title: 'Discover the Art of Prompting',
    issuer: 'Google (via Coursera)',
    date: 'May 16, 2026',
    category: 'Cloud & AI',
    description: 'Authorized course by Google focusing on drafting highly effective prompts for Large Language Models.',
    image: artOfPromptingImg,
    skills: ['Prompt Engineering', 'Generative AI', 'Large Language Models'],
    verifyUrl: 'https://coursera.org/verify/RJPP766899XA'
  },
  {
    id: 'ai-foundation',
    title: 'Artificial Intelligence Foundation Certification',
    issuer: 'Infosys Springboard',
    date: 'September 10, 2025',
    category: 'Cloud & AI',
    description: 'Comprehensive certification verifying fundamental knowledge of Artificial Intelligence, concepts, history, and applications.',
    image: aiFoundationImg,
    skills: ['Artificial Intelligence', 'AI Foundations', 'Machine Learning'],
    verifyUrl: 'https://verify.onwingspan.com'
  },
  {
    id: 'deep-learning',
    title: 'Introduction to Deep Learning',
    issuer: 'Infosys Springboard',
    date: 'August 23, 2025',
    category: 'Cloud & AI',
    description: 'Fundamental course covering deep learning neural networks, architectures, and practical application scenarios.',
    image: deepLearningImg,
    skills: ['Deep Learning', 'Neural Networks', 'Artificial Intelligence'],
    verifyUrl: 'https://verify.onwingspan.com'
  },
  {
    id: 'cryptography',
    title: 'Cryptography in IT Security & Hacking',
    issuer: 'Infosys Springboard',
    date: 'February 17, 2026',
    category: 'Development',
    description: 'Detailed study of cryptographic protocols, encryption standards, public key infrastructures, and their roles in security audits.',
    image: cryptographyImg,
    skills: ['Cryptography', 'IT Security', 'Cybersecurity', 'Encryption'],
    verifyUrl: 'https://verify.onwingspan.com'
  }
];


const Certificates = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const categories = ['All', 'Development', 'Cloud & AI'];

  const filteredCertificates = certificatesData.filter(cert => {
    const matchesFilter = selectedFilter === 'All' || cert.category === selectedFilter;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-20 transition-colors duration-300" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* Dynamic Background Glow Spotlights */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 mt-8 relative z-10">
        {/* Back Button & Title */}
        <div className="flex flex-col gap-6 mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors w-fit group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div>
            <span className="section-label">Credentials</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2" style={{ color: 'var(--text)' }}>
              Certifications & <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-lg mt-4 max-w-2xl leading-relaxed" style={{ color: 'var(--text-faint)' }}>
              A curated collection of verified courses and professional certifications highlighting my expertise in full stack development, cloud, and artificial intelligence.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-10 pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'glass border hover:bg-primary/10'
                }`}
                style={{
                  border: selectedFilter === cat ? 'none' : '1px solid var(--border)',
                  color: selectedFilter === cat ? '#ffffff' : 'var(--text-muted)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[280px]">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-faint)' }} />
            <input
              type="text"
              placeholder="Search title, issuer, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              style={{ background: 'var(--input-bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
            />
          </div>
        </div>

        {/* Grid List */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col glass rounded-2xl overflow-hidden group hover:translate-y-[-4px] transition-all duration-300"
                style={{ border: '1px solid var(--border)', boxShadow: '0 8px 30px var(--shadow)' }}
              >
                {/* Certificate Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950/20 border-b" style={{ borderColor: 'var(--border)' }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 pointer-events-none">
                    <button
                      onClick={() => setActiveLightbox(cert)}
                      className="p-3.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 active:scale-95 pointer-events-auto cursor-pointer"
                      aria-label="Expand image"
                    >
                      <Maximize2 size={20} />
                    </button>
                  </div>
                  <span className="absolute top-3 right-3 px-3 py-1.5 text-xs font-extrabold rounded-lg glass text-primary border" style={{ borderColor: 'var(--border)' }}>
                    {cert.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">{cert.issuer}</p>
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-faint)' }}>
                        <Calendar size={12} />
                        {cert.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors" style={{ color: 'var(--text)' }}>
                      {cert.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                      {cert.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-[11px] font-bold rounded-lg"
                          style={{ background: 'var(--input-bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 w-full">
                      <button
                        onClick={() => setActiveLightbox(cert)}
                        className="flex-grow btn-outline !py-2.5 !px-4 !text-xs !rounded-xl justify-center cursor-pointer"
                      >
                        View Full Size
                      </button>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 active:scale-95 transition-all"
                          title="Verify Credential"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center glass rounded-2xl p-8" style={{ border: '1px solid var(--border)' }}>
            <Award size={48} className="text-primary mb-4 animate-bounce" />
            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>No Certificates Found</h3>
            <p style={{ color: 'var(--text-faint)' }}>We couldn't find any certificates matching your query. Try another term!</p>
          </div>
        )}
      </div>

      {/* Lightbox / Fullscreen Modal Backdrop */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl glass rounded-2xl overflow-hidden p-3 md:p-6"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 text-white/80 hover:text-white border border-white/10 hover:bg-black/60 transition-all cursor-pointer z-10 active:scale-95"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                {/* Image Section */}
                <div className="lg:col-span-2 relative aspect-[4/3] rounded-xl overflow-hidden border shadow-inner bg-slate-900" style={{ borderColor: 'var(--border)' }}>
                  <img
                    src={activeLightbox.image}
                    alt={activeLightbox.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Metadata Details */}
                <div className="flex flex-col justify-between h-full py-2 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="px-2.5 py-1 text-xs font-bold rounded-lg text-primary bg-primary/10 border border-primary/20">
                        {activeLightbox.category}
                      </span>
                      <h2 className="text-2xl font-black mt-3 leading-tight" style={{ color: 'var(--text)' }}>
                        {activeLightbox.title}
                      </h2>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle size={16} className="text-primary" />
                        <span style={{ color: 'var(--text-muted)' }}>Issuer: <strong className="font-bold" style={{ color: 'var(--text)' }}>{activeLightbox.issuer}</strong></span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Calendar size={16} className="text-primary" />
                        <span style={{ color: 'var(--text-muted)' }}>Date: <strong style={{ color: 'var(--text)' }}>{activeLightbox.date}</strong></span>
                      </div>
                      {activeLightbox.duration && (
                        <div className="flex items-center gap-2.5">
                          <Clock size={16} className="text-primary" />
                          <span style={{ color: 'var(--text-muted)' }}>{activeLightbox.duration.includes('hours') ? 'Length' : 'Period'}: <strong style={{ color: 'var(--text)' }}>{activeLightbox.duration}</strong></span>
                        </div>
                      )}
                      {activeLightbox.instructor && (
                        <div className="flex items-center gap-2.5">
                          <User size={16} className="text-primary" />
                          <span style={{ color: 'var(--text-muted)' }}>Instructor: <strong style={{ color: 'var(--text)' }}>{activeLightbox.instructor}</strong></span>
                        </div>
                      )}
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {activeLightbox.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <div className="flex flex-wrap gap-1.5">
                      {activeLightbox.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-bold rounded-lg"
                          style={{ background: 'var(--input-bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {activeLightbox.verifyUrl ? (
                      <a
                        href={activeLightbox.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-primary justify-center text-sm py-3 rounded-xl flex items-center gap-2 group"
                      >
                        Verify Credential
                        <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveLightbox(null)}
                        className="w-full btn-primary justify-center text-sm py-3 rounded-xl"
                      >
                        Close Preview
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
