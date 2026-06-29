import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Coins, GitCompare, BrainCircuit, Code } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Ultra Fast Speed',
      description: 'Sharded transactional consensus enabling sub-second latency and an execution block time of just 0.3 seconds.',
      color: 'rgba(0, 240, 255, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(0,240,255,0.15)]',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: 'Military-Grade Security',
      description: 'Fully integrated zero-knowledge cryptographic validity proofs combined with robust proof-of-stake validation.',
      color: 'rgba(168, 85, 247, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]',
    },
    {
      icon: <Coins className="w-6 h-6 text-pink-400" />,
      title: 'Zero-Near Gas Fees',
      description: 'Next-generation rollup compression techniques that decrease standard transaction fees to fractions of a cent.',
      color: 'rgba(236, 72, 153, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(236,72,153,0.15)]',
    },
    {
      icon: <GitCompare className="w-6 h-6 text-blue-400" />,
      title: 'Cross-Chain Bridging',
      description: 'Native inter-blockchain messaging kernel built directly inside validators to support instant asset swaps.',
      color: 'rgba(59, 130, 246, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-orange-400" />,
      title: 'AI Analytics Engine',
      description: 'On-chain predictive intelligence monitors mempool loads, predicts gas trends, and secures smart contracts.',
      color: 'rgba(249, 115, 22, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(249,115,22,0.15)]',
    },
    {
      icon: <Code className="w-6 h-6 text-green-400" />,
      title: 'Developer Sandbox',
      description: 'Native dual-runtime engine offering compilation and execution in EVM, WASM, and Rust out of the box.',
      color: 'rgba(34, 197, 94, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(34,197,94,0.15)]',
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-[#03000a] grid-bg">
      {/* Glow blobs */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] top-1/4 right-0 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] bottom-1/4 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full">
            CORE PROTOCOLS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-gradient">Next-Gen</span> Scale
          </h2>
          <p className="text-base text-purple-200/60 font-sans">
            Explore the high-end infrastructure built to secure, execute, and connect decentralized modules across the global ledger.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: '2deg',
              }}
              className="group cursor-pointer relative"
            >
              {/* Outer boundary gradient layout */}
              <div className="border-gradient-wrapper h-full">
                {/* Core Glass Card */}
                <div className="glass-card rounded-xl p-8 flex flex-col items-start text-left h-full group-hover:bg-[#0d081c]/70 transition-all duration-300">
                  {/* Glowing Icon holder */}
                  <div 
                    className="p-3.5 rounded-xl border mb-6 transition-all duration-300 group-hover:scale-115"
                    style={{ 
                      backgroundColor: feature.color, 
                      borderColor: 'rgba(255,255,255,0.08)' 
                    }}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-purple-200/50 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
