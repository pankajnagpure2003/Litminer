import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Cpu, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const socials = [
    { 
      name: 'Twitter', 
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      ), 
      href: 'https://twitter.com' 
    },
    { 
      name: 'Discord', 
      icon: <MessageSquare className="w-4 h-4" />, 
      href: 'https://discord.com' 
    },
    { 
      name: 'GitHub', 
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      ), 
      href: 'https://github.com' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ), 
      href: 'https://linkedin.com' 
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#technology' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  const developerLinks = [
    { name: 'Documentation', href: '#' },
    { name: 'System Status', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Grants Program', href: '#' },
  ];

  return (
    <footer className="relative bg-[#03000a] border-t border-purple-500/10 pt-20 pb-10 overflow-hidden">
      <div className="absolute w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] -top-20 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start text-left">
          
          {/* Logo & Intro column */}
          <div className="space-y-5">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-widest text-white uppercase font-sans">
                AETHERIA<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-xs text-purple-200/50 leading-relaxed font-sans max-w-sm">
              The hyper-scalable consensus platform powering decentralized networks, atomic cross-chain settlements, and dual-virtual-machine runtimes.
            </p>
            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/5 bg-purple-950/15 text-purple-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold tracking-widest text-white uppercase">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-200/50 font-sans">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers column */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold tracking-widest text-white uppercase">
              DEVELOPERS
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-200/50 font-sans">
              {developerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold tracking-widest text-white uppercase">
              NEWSLETTER
            </h4>
            <p className="text-xs text-purple-200/50 leading-relaxed font-sans">
              Subscribe to active network upgrades, validation schedules, and developer tooling announcements.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-purple-950/20 border border-white/5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-all font-mono"
              />
              <button
                type="submit"
                className="p-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-400 text-white shadow-lg hover:shadow-cyan-400/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs text-green-400 font-mono"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Subscribed successfully!</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Lower footer copyright */}
        <div className="border-t border-purple-500/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-purple-400/40">
          <div>
            © {new Date().getFullYear()} AETHERIA PROTOCOL LABS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
