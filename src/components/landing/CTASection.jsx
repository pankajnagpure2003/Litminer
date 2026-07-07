import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border border-[#c3c0ff]/20 p-16 rounded-2xl text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#c3c0ff]/5 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="font-[Sora] text-[32px] md:text-[48px] font-bold text-[#e5e1e4]">Ready to Flux?</h2>
          <p className="text-[#c7c4d8] font-[Inter] text-lg">
            Join 40,000+ early adopters securing the future of the decentralized web. No hardware required.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-[#4cd7f6]">
              <span className="material-symbols-outlined">check_circle</span>
              <span className="font-[Inter] font-bold">You're on the list! Welcome to Litminer.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your ENS or Email"
                className="flex-grow bg-[#0e0e10] border border-white/10 rounded-md px-6 py-3 text-[#e5e1e4] font-[JetBrains_Mono] text-sm focus:outline-none focus:border-[#c3c0ff] transition-all placeholder:text-[#c7c4d8]/40"
              />
              <button
                type="submit"
                className="bg-[#c3c0ff] text-[#1d00a5] px-10 py-3 rounded-md font-bold font-[Inter] shadow-lg hover:shadow-[#c3c0ff]/40 transition-all active:scale-95 whitespace-nowrap uppercase tracking-wider text-xs"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <p className="text-[10px] text-[#c7c4d8]/50 font-[Inter] font-bold tracking-[0.2em] uppercase">
            Secured by AES-256 Encryption
          </p>
        </div>
      </motion.div>
    </section>
  );
}
