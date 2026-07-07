import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import bitcoinImg from "../../assets/bitcoin.png";




export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-12 text-center py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl space-y-6"
      >
        {/* Live badge */}
        <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#c3c0ff]/10 border border-[#c3c0ff]/20 rounded-full mb-2">
          <span className="w-2 h-2 rounded-full bg-[#c3c0ff] animate-pulse" />
          <span className="text-[#c3c0ff] font-[Inter] font-bold text-[10px] tracking-widest uppercase">
            Mainnet v4.2 Live
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-[Sora] text-[48px] md:text-[84px] md:leading-tight font-bold text-[#e5e1e4] tracking-tighter">
          Mine the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c3c0ff] via-[#4cd7f6] to-[#d0bcff]">
            Future of Finance
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-[Inter] text-lg text-[#c7c4d8] max-w-2xl mx-auto leading-relaxed">
          Architected for the next generation of decentralized infrastructure. Join the highest-performing
          liquid mining collective in the Web3 ecosystem.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <Link
            to={ROUTES.REGISTER}
            className="w-full sm:w-auto bg-[#c3c0ff] text-[#1d00a5] font-bold px-10 py-6 rounded-md shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] transition-all flex items-center justify-center gap-3 active:scale-95 font-[Inter] uppercase tracking-wider text-sm"
          >
            <span className="material-symbols-outlined">rocket_launch</span>
            START MINING NOW
          </Link>
          <Link
            to={ROUTES.DASHBOARD}
            className="w-full sm:w-auto bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border border-white/10 text-[#e5e1e4] px-10 py-6 rounded-md hover:bg-white/5 transition-all flex items-center justify-center gap-3 font-[Inter] uppercase tracking-wider text-sm font-bold"
          >
            <span className="material-symbols-outlined">explore</span>
            VIEW DASHBOARD
          </Link>
        </div>
      </motion.div>

      {/* Floating Dashboard Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-16 relative w-full max-w-5xl"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      >
        <div className="bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border border-white/10 aspect-video rounded-xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c3c0ff]/5 via-transparent to-[#4cd7f6]/5" />
          <img
            src={bitcoinImg}
            alt="Bitcoin"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
