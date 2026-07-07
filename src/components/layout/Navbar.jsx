import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { NAV_LINKS, ROUTES } from '../../utils/constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#131315]/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(79,70,229,0.1)] px-12 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to={ROUTES.HOME} className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4cd7f6] flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
        </div>
        <span className="font-[Sora] text-2xl font-bold tracking-tighter text-[#c3c0ff] drop-shadow-[0_0_10px_rgba(195,192,255,0.4)]">
          Litminer
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors duration-300 font-[Inter] text-[11px] font-bold uppercase tracking-widest"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        {isAuthenticated ? (
          <Link
            to={ROUTES.DASHBOARD}
            className="bg-[#4f46e5] text-[#dad7ff] px-6 py-2 rounded-md font-[Inter] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(79,70,229,0.3)] active:scale-95 transition-transform"
          >
            DASHBOARD
          </Link>
        ) : (
          <>
            <Link
              to={ROUTES.LOGIN}
              className="hidden md:block text-[#e5e1e4] font-[Inter] text-xs font-bold uppercase tracking-wider hover:text-[#c3c0ff] transition-colors"
            >
              SIGN IN
            </Link>
            <Link
              to={ROUTES.REGISTER}
              className="bg-[#4f46e5] text-[#dad7ff] px-6 py-2 rounded-md font-[Inter] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(79,70,229,0.3)] active:scale-95 transition-transform"
            >
              GET STARTED
            </Link>
          </>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#e5e1e4]"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[#131315]/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center gap-4 py-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#c7c4d8] hover:text-[#c3c0ff] font-[Inter] text-xs font-bold uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <Link
              to={ROUTES.LOGIN}
              className="text-[#e5e1e4] font-[Inter] text-xs font-bold uppercase tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              SIGN IN
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
