import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Layout, 
    User, 
    Briefcase, 
    Settings, 
    Plus, 
    Trash2, 
    Save, 
    X, 
    ChevronRight, 
    PenLine, 
    Eye, 
    LogOut,
    Menu,
    Smartphone,
    Monitor,
    Shield
} from 'lucide-react';

const AdminDashboard = () => {
    const { portfolioData, updateSection, toggleSection } = usePortfolio();
    const [activeTab, setActiveTab] = useState('hero');
    const [localData, setLocalData] = useState({ ...portfolioData });
    const [saved, setSaved] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('adminAuth') !== 'true') {
            navigate('/admin');
        }
    }, [navigate]);

    useEffect(() => {
        setLocalData({ ...portfolioData });
    }, [portfolioData]);

    const handleSave = () => {
        Object.keys(localData).forEach(key => {
            updateSection(key, localData[key]);
        });
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const logout = () => {
        localStorage.removeItem('adminAuth');
        navigate('/admin');
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'hero':
                return (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">Hero Section</h3>
                            <button onClick={() => toggleSection('hero')} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${portfolioData.sections.find(s => s.id === 'hero').enabled ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                {portfolioData.sections.find(s => s.id === 'hero').enabled ? 'Enabled' : 'Disabled'}
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Title (e.g., Hi, I'm)" value={localData.hero.title} onChange={(val) => setLocalData({...localData, hero: {...localData.hero, title: val}})} />
                            <InputField label="Name" value={localData.hero.name} onChange={(val) => setLocalData({...localData, hero: {...localData.hero, name: val}})} />
                            <InputField label="Tagline" value={localData.hero.tagline} onChange={(val) => setLocalData({...localData, hero: {...localData.hero, tagline: val}})} />
                            <InputField label="Availability Status" value={localData.hero.availability} onChange={(val) => setLocalData({...localData, hero: {...localData.hero, availability: val}})} />
                        </div>
                        <TextAreaField label="Subtitle" value={localData.hero.subtitle} onChange={(val) => setLocalData({...localData, hero: {...localData.hero, subtitle: val}})} />
                        
                        <div className="pt-6 border-t border-[var(--border)]">
                            <h4 className="font-bold mb-4">Terminal Content (Laptop View)</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="Terminal Role" value={localData.hero.terminalRole} onChange={(val) => setLocalData({...localData, hero: {...localData.hero, terminalRole: val}})} />
                                <InputField label="Terminal Passion" value={localData.hero.terminalPassion} onChange={(val) => setLocalData({...localData, hero: {...localData.hero, terminalPassion: val}})} />
                                <InputField 
                                    label="Terminal Stack (comma separated)" 
                                    value={localData.hero.terminalStack.join(', ')} 
                                    onChange={(val) => setLocalData({...localData, hero: {...localData.hero, terminalStack: val.split(',').map(s => s.trim())}})} 
                                />
                            </div>
                        </div>
                    </div>
                );
            case 'about':
                return (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">About & Skills</h3>
                            <button onClick={() => toggleSection('about')} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${portfolioData.sections.find(s => s.id === 'about').enabled ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                {portfolioData.sections.find(s => s.id === 'about').enabled ? 'Enabled' : 'Disabled'}
                            </button>
                        </div>
                        <InputField label="Title" value={localData.about.title} onChange={(val) => setLocalData({ ...localData, about: { ...localData.about, title: val } })} />
                        <TextAreaField label="Description" value={localData.about.description} onChange={(val) => setLocalData({...localData, about: {...localData.about, description: val}})} />
                        
                        <div className="pt-6 border-t border-[var(--border)]">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold">Skill Categories</h4>
                                <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all border border-primary/20" onClick={() => {
                                    const newSkills = [...localData.about.skills, { name: 'New Section', items: [], color: 'text-blue-400' }];
                                    setLocalData({...localData, about: {...localData.about, skills: newSkills}});
                                }}><Plus size={18} /></button>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {localData.about.skills.map((cat, i) => (
                                    <div key={i} className="p-5 glass rounded-2xl space-y-4 border border-[var(--border)]" style={{ background: 'var(--card-hover)' }}>
                                        <div className="flex items-center justify-between">
                                            <InputField value={cat.name} onChange={(val) => {
                                                const newSkills = [...localData.about.skills];
                                                newSkills[i].name = val;
                                                setLocalData({...localData, about: {...localData.about, skills: newSkills}});
                                            }} placeholder="Category Name" className="w-auto" />
                                            <button className="text-red-400 hover:text-red-500 transition-colors" onClick={() => {
                                                const newSkills = localData.about.skills.filter((_, idx) => idx !== i);
                                                setLocalData({...localData, about: {...localData.about, skills: newSkills}});
                                            }}><Trash2 size={18} /></button>
                                        </div>
                                        <InputField 
                                            label="Items (comma separated)" 
                                            value={cat.items.join(', ')} 
                                            onChange={(val) => {
                                                const newSkills = [...localData.about.skills];
                                                newSkills[i].items = val.split(',').map(s => s.trim());
                                                setLocalData({...localData, about: {...localData.about, skills: newSkills}});
                                            }} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'projects':
                return (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">Featured Projects</h3>
                            <div className="flex gap-3">
                                <button onClick={() => toggleSection('projects')} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${portfolioData.sections.find(s => s.id === 'projects').enabled ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                    {portfolioData.sections.find(s => s.id === 'projects').enabled ? 'Enabled' : 'Disabled'}
                                </button>
                                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all border border-transparent" onClick={() => {
                                    const newProjects = [...localData.projects, { title: 'New Project', desc: '', tech: [], live: '#', github: '#', gradient: 'from-blue-500/20 to-cyan-500/10' }];
                                    setLocalData({...localData, projects: newProjects});
                                }}><Plus size={16} /> Add Project</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {localData.projects.map((proj, i) => (
                                <div key={i} className="p-6 glass rounded-3xl space-y-6 border border-[var(--border)] shadow-sm" style={{ background: 'var(--card-hover)' }}>
                                    <div className="flex items-start justify-between border-b border-[var(--border)] pb-4">
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-lg">{proj.title || "Project Name"}</h4>
                                            <p className="text-xs text-[var(--text-faint)]">ID: PROJECT_{i}</p>
                                        </div>
                                        <button className="p-2 text-red-400 hover:bg-red-500/10 rounded-xl transition-all border border-transparent hover:border-red-500/20" onClick={() => {
                                            const newProjects = localData.projects.filter((_, idx) => idx !== i);
                                            setLocalData({...localData, projects: newProjects});
                                        }}><Trash2 size={20} /></button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField label="Project Title" value={proj.title} onChange={(val) => {
                                            const newProjects = [...localData.projects];
                                            newProjects[i].title = val;
                                            setLocalData({...localData, projects: newProjects});
                                        }} />
                                        <InputField label="Tech Stack (comma separated)" value={proj.tech.join(', ')} onChange={(val) => {
                                            const newProjects = [...localData.projects];
                                            newProjects[i].tech = val.split(',').map(s => s.trim());
                                            setLocalData({...localData, projects: newProjects});
                                        }} />
                                        <InputField label="Live URL" value={proj.live} onChange={(val) => {
                                            const newProjects = [...localData.projects];
                                            newProjects[i].live = val;
                                            setLocalData({...localData, projects: newProjects});
                                        }} />
                                        <InputField label="GitHub URL" value={proj.github} onChange={(val) => {
                                            const newProjects = [...localData.projects];
                                            newProjects[i].github = val;
                                            setLocalData({...localData, projects: newProjects});
                                        }} />
                                    </div>
                                    <TextAreaField label="Description" value={proj.desc} onChange={(val) => {
                                        const newProjects = [...localData.projects];
                                        newProjects[i].desc = val;
                                        setLocalData({...localData, projects: newProjects});
                                    }} />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'settings':
                return (
                    <div className="space-y-8">
                         <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">Global Settings</h3>
                        </div>
                        
                        <div className="glass rounded-3xl p-8 border border-[var(--border)] space-y-6" style={{ background: 'var(--card-hover)' }}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                                    <Layout size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Site Layout</h4>
                                    <p className="text-xs text-[var(--text-faint)]">Toggle site-wide sections visibility.</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {localData.sections.map((section) => (
                                    <div key={section.id} className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-primary/20 transition-all cursor-pointer group" onClick={() => toggleSection(section.id)}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${section.enabled ? 'bg-green-500' : 'bg-red-400'} shadow-lg ${section.enabled ? 'shadow-green-500/30' : 'shadow-red-400/30'}`} />
                                            <span className="text-sm font-semibold capitalize group-hover:text-primary transition-colors">{section.id} Section</span>
                                        </div>
                                        <div className={`w-10 h-5 rounded-full relative transition-colors ${section.enabled ? 'bg-primary' : 'bg-[var(--border)]'}`}>
                                            <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${section.enabled ? 'left-6' : 'left-1'}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass rounded-3xl p-8 border border-[var(--border)] space-y-4" style={{ background: 'var(--card-hover)' }}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Security Info</h4>
                                    <p className="text-xs text-[var(--text-faint)]">Admin session management</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-sm font-medium">Logged in as</span>
                                <span className="text-sm font-bold text-primary">viignesh.14@gmail.com</span>
                            </div>
                            <button 
                                onClick={logout}
                                className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/5 transition-all text-sm font-bold"
                            >
                                <LogOut size={16} /> Logout Session
                            </button>
                        </div>
                    </div>
                )
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex">
            {/* Sidebar */}
            <aside className="w-20 md:w-72 border-r border-[var(--border)] flex flex-col items-center md:items-stretch transition-all duration-300">
                <div className="p-6 md:p-8 flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30 shrink-0">
                        <Settings size={22} className="group-hover:rotate-45 transition-transform" />
                    </div>
                    <div className="hidden md:block">
                        <h1 className="font-extrabold text-xl tracking-tight">Admin</h1>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-primary opacity-80">Dashboard v1.0</p>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-2 pt-4">
                    {[
                        { id: 'hero', icon: <PenLine size={20} />, label: 'Hero Content' },
                        { id: 'about', icon: <User size={20} />, label: 'Skills & Info' },
                        { id: 'projects', icon: <Briefcase size={20} />, label: 'Portfolio' },
                        { id: 'settings', icon: <Settings size={20} />, label: 'Settings' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group ${activeTab === item.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-primary/10 text-[var(--text-faint)] hover:text-primary hover:translate-x-1'}`}
                        >
                            <span className={activeTab === item.id ? 'text-white' : 'group-hover:text-primary transition-colors'}>{item.icon}</span>
                            <span className="hidden md:block text-sm font-bold">{item.label}</span>
                            {activeTab === item.id && <ChevronRight size={14} className="hidden md:block ml-auto" />}
                        </button>
                    ))}
                </nav>

                <div className="p-6 hidden md:block">
                    <div className="glass p-5 rounded-3xl border border-[var(--border)] bg-primary/5">
                        <p className="text-xs font-bold text-primary mb-1 uppercase tracking-tighter">Support</p>
                        <p className="text-[10px] text-[var(--text-faint)] leading-relaxed">Need help configuring sections? Check out the dynamic section builder guide.</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-h-screen overflow-y-auto stylish-scrollbar">
                <header className="sticky top-0 z-10 glass border-b border-[var(--border)] px-8 py-6 flex items-center justify-between backdrop-blur-md bg-[var(--bg)]/80">
                    <div>
                        <h2 className="text-lg font-bold capitalize">{activeTab.replace('-', ' ')}</h2>
                        <p className="text-xs text-[var(--text-faint)] hidden sm:block">Real-time portfolio management dashboard.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => window.open('/', '_blank')}
                            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[var(--border)] hover:border-primary/40 hover:text-primary transition-all text-sm font-bold"
                        >
                            <Eye size={16} /> Preview Site
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-2.5 rounded-xl transition-all font-bold text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Save size={16} /> {saved ? 'Saved!' : 'Save Changes'}
                        </button>
                    </div>
                </header>

                <div className="p-8 max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {renderTabContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

const InputField = ({ label, value, onChange, placeholder, className = "" }) => (
    <div className={`space-y-2 ${className}`}>
        {label && <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block ml-1">{label}</label>}
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] rounded-2xl py-3.5 px-5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
        />
    </div>
);

const TextAreaField = ({ label, value, onChange }) => (
    <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block ml-1">{label}</label>
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium min-h-[140px] resize-y"
        />
    </div>
);

export default AdminDashboard;
