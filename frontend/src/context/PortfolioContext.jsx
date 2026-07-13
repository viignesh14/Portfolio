import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabase';

const PortfolioContext = createContext();

const defaultData = {
  hero: {
    title: "Hi, I am",
    name: "Vignesh",
    subtitle: "Computer Science Engineering student with hands-on experience in Java Full Stack Development, AWS Cloud, Generative AI, MySQL, and MongoDB. Seeking a Software Engineering role to apply strong problem-solving and development skills in building scalable, cloud-based, and intelligent software solutions.",
    tagline: "",
    availability: "Available for internships & projects",
    terminalRole: "Full Stack Dev",
    terminalStack: ["React", "Spring Boot"],
    terminalPassion: "Building cool stuff",
  },
  about: {
    title: "Skills",
    description: "Computer Science Engineering student with hands-on experience in Java Full Stack Development, AWS Cloud, Generative AI, MySQL, and MongoDB. Seeking a Software Engineering role to apply strong problem-solving and development skills in building scalable, cloud-based, and intelligent software solutions.",
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
  const [portfolioData, setPortfolioData] = useState(defaultData);
  const [loading, setLoading] = useState(true);

  // Load from Supabase on mount
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const { data, error } = await supabase
          .from('portfolio')
          .select('data')
          .eq('id', 1)
          .single();

        if (data && !error) {
          // Robust merge to ensure any new source code fields exist
          const mergedData = {
            ...defaultData,
            ...data.data,
            hero: { ...defaultData.hero, ...(data.data.hero || {}) },
            about: { ...defaultData.about, ...(data.data.about || {}) }
          };

          let needsUpdate = false;
          if (mergedData.hero.subtitle === "A software engineer who builds things that live on the internet. I'm passionate about building scalable, production-ready applications.") {
            mergedData.hero.subtitle = defaultData.hero.subtitle;
            needsUpdate = true;
          }
          if (mergedData.about.description === "I build production-ready, scalable applications with a focus on performance, reliability, and clean architecture.") {
            mergedData.about.description = defaultData.about.description;
            needsUpdate = true;
          }
          if (mergedData.hero.tagline === "FULL STACK DEVELOPER") {
            mergedData.hero.tagline = defaultData.hero.tagline;
            needsUpdate = true;
          }

          setPortfolioData(mergedData);
          if (needsUpdate) {
            supabase.from('portfolio').upsert({ id: 1, data: mergedData }).then(({ error }) => {
              if (error) console.error("Auto-migration Sync Error:", error);
            });
          }
        } else if (error && (error.code === 'PGRST116' || error.message.includes('not found'))) {
          // Initialize table if entry missing
          await supabase.from('portfolio').insert({ id: 1, data: defaultData });
        }
      } catch (err) {
        console.error("Supabase Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // Sync to Supabase when data changes
  const syncToSupabase = async (newData) => {
    try {
      await supabase
        .from('portfolio')
        .upsert({ id: 1, data: newData });
    } catch (err) {
      console.error("Sync Error:", err);
    }
  };

  const updateSection = (section, data) => {
    setPortfolioData(prev => {
      const updated = { ...prev, [section]: data };
      syncToSupabase(updated);
      return updated;
    });
  };

  const toggleSection = (id) => {
    setPortfolioData(prev => {
      const updated = {
        ...prev,
        sections: prev.sections.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s)
      };
      syncToSupabase(updated);
      return updated;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const saveAll = async (newData) => {
    setPortfolioData(newData);
    await syncToSupabase(newData);
  };

  return (
    <PortfolioContext.Provider value={{ portfolioData, updateSection, toggleSection, saveAll }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
