import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

const defaultData = {
  hero: {
    title: "Hi, I'm",
    name: "Vignesh",
    subtitle: "A software engineer who builds things that live on the internet. I'm passionate about building scalable, production-ready applications.",
    tagline: "FULL STACK DEVELOPER",
    availability: "Available for internships & projects",
    terminalRole: "Full Stack Dev",
    terminalStack: ["React", "Spring Boot"],
    terminalPassion: "Building cool stuff",
  },
  about: {
    title: "Skills",
    description: "I build production-ready, scalable applications with a focus on performance, reliability, and clean architecture.",
    skills: [
      { name: 'Frontend', color: 'text-blue-400', items: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS'] },
      { name: 'Backend', color: 'text-green-400', items: ['Java', 'Spring Boot', 'REST APIs', 'Python'] },
      { name: 'Database', color: 'text-purple-400', items: ['MySQL', 'MongoDB'] },
      { name: 'Tools', color: 'text-yellow-400', items: ['Git', 'GitHub', 'Figma', 'Postman'] },
    ]
  },
  projects: [
    {
      title: 'Meeyazh Naturals',
      desc: 'A full-featured e-commerce platform for natural and organic products with secure payments, product filtering, and order management.',
      tech: ['React', 'Spring Boot', 'MySQL', 'Razorpay'],
      live: 'https://www.meeyazhnaturals.in/',
      preview: true,
      github: '#',
      gradient: 'from-green-500/20 to-emerald-500/10'
    }
  ],
  sections: [
    { id: 'hero', enabled: true },
    { id: 'about', enabled: true },
    { id: 'projects', enabled: true },
    { id: 'contact', enabled: true },
  ]
};

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem('portfolioData');
    if (!saved) return defaultData;
    
    try {
      const parsed = JSON.parse(saved);
      // Robust merge: keep saved values but ensure all default keys exist
      return {
        ...defaultData,
        ...parsed,
        hero: { ...defaultData.hero, ...(parsed.hero || {}) },
        about: { ...defaultData.about, ...(parsed.about || {}) },
        sections: parsed.sections || defaultData.sections,
        projects: parsed.projects || defaultData.projects
      };
    } catch (e) {
      console.error("Error parsing portfolioData", e);
      return defaultData;
    }
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
  }, [portfolioData]);

  const updateSection = (section, data) => {
    setPortfolioData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const toggleSection = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      sections: prev.sections.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s)
    }));
  };

  return (
    <PortfolioContext.Provider value={{ portfolioData, updateSection, toggleSection }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
