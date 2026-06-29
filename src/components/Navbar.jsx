import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wallet, ShieldAlert, Cpu, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  // Handle scroll detection for hide/show and glass background triggers
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle scrolled class
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide or show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Connect Wallet Simulation
  const connectWallet = () => {
    if (walletConnected) {
      setWalletConnected(false);
      setWalletAddress('');
      return;
    }
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setWalletConnected(true);
      setWalletAddress('0xa8f2...7b39');
    }, 1200);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#technology' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Validators', href: '#validators' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled 
            ? 'bg-[#03000a]/80 backdrop-blur-md border-b border-purple-500/10 shadow-[0_4px_30px_rgba(3,0,10,0.5)]' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300">
                <Cpu className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl font-bold tracking-widest text-white uppercase font-sans">
                AETHERIA<span className="text-cyan-400">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-purple-200/70 hover:text-cyan-400 transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Actions (Launch App & Connect Wallet) */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={connectWallet}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider font-semibold border transition-all duration-300 cursor-pointer ${
                  walletConnected
                    ? 'border-green-500/30 bg-green-500/10 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.15)]'
                    : connecting
                    ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                    : 'border-purple-500/30 bg-purple-500/10 text-purple-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                }`}
              >
                <Wallet className="w-3.5 h-3.5" />
                {connecting ? 'CONNECTING...' : walletConnected ? walletAddress : 'CONNECT WALLET'}
              </button>

              <a
                href="#features"
                className="relative px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-widest text-white overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400" />
                <span className="relative flex items-center gap-1">
                  LAUNCH APP <ChevronRight className="w-3 h-3" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={connectWallet}
                className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300"
              >
                <Wallet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-purple-500/10 bg-[#03000a]/95 backdrop-blur-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-base font-medium text-purple-200/70 hover:text-white hover:bg-purple-900/20 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="#features"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-mono text-sm font-bold tracking-widest text-center shadow-lg"
                  >
                    LAUNCH APP <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
