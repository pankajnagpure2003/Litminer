import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../utils/constants';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#09090B] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="fixed inset-0 bg-[#4f46e5]/5 blur-[200px] pointer-events-none" />
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10">
        <div className="font-[Sora] text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c3c0ff] via-[#4cd7f6] to-[#d0bcff] leading-none mb-4">
          404
        </div>
        <h1 className="font-[Sora] text-3xl font-bold text-[#e5e1e4] mb-4">Page Not Found</h1>
        <p className="text-[#c7c4d8] font-[Inter] max-w-sm mb-8">
          The block you're looking for doesn't exist or has been orphaned.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to={ROUTES.HOME} className="bg-[#4f46e5] text-[#dad7ff] px-8 py-3 rounded-lg font-[Inter] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all active:scale-95">
            Go Home
          </Link>
          <Link to={ROUTES.DASHBOARD} className="bg-white/5 border border-white/10 text-[#e5e1e4] px-8 py-3 rounded-lg font-[Inter] font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all">
            Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
