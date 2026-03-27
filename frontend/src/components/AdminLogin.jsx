import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const defaultEmail = "viignesh.14@gmail.com";
        const defaultPassword = "Vicky@2914";

        if (email === defaultEmail && password === defaultPassword) {
            localStorage.setItem('adminAuth', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-3xl p-10 w-full max-w-sm"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
                <div className="text-center mb-8">
                    <User size={32} className="mx-auto mb-4 text-primary" />
                    <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>Admin Login</h2>
                    <p className="text-sm mt-2" style={{ color: 'var(--text-faint)' }}>Sign in to manage your portfolio.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>Email Address</label>
                        <div className="relative group">
                            <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)] group-focus-within:text-primary transition-colors" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>Password</label>
                        <div className="relative group">
                            <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)] group-focus-within:text-primary transition-colors" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                            <XCircle size={14} />
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                        Sign In
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
