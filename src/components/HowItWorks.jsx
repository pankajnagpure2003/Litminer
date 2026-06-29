import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Send Transaction',
      subtitle: 'User signs payload',
      icon: <Send className="w-5 h-5" />,
      description: 'The user creates and signs a transaction request using their private key. The payload is sent to the RPC gateway.',
      color: '#00f0ff',
      glow: 'rgba(0, 240, 255, 0.4)',
    },
    {
      number: '02',
      title: 'Simulation & Validation',
      subtitle: 'Validator checks validity',
      icon: <Cpu className="w-5 h-5" />,
      description: 'Active validators fetch the transaction from the mempool and execute an ephemeral dry-run to verify signatures and state validity.',
      color: '#a855f7',
      glow: 'rgba(168, 85, 247, 0.4)',
    },
    {
      number: '03',
      title: 'BFT Consensus',
      subtitle: 'Global sequencing logic',
      icon: <ShieldAlert className="w-5 h-5" />,
      description: 'Verified transactions are batch-ordered and synchronized across distributed validator nodes using Byzantine Fault Tolerance.',
      color: '#ec4899',
      glow: 'rgba(236, 72, 153, 0.4)',
    },
    {
      number: '04',
      title: 'Block Commitment',
      subtitle: 'ZK-proof generated',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Ordered batches are packed into a cryptographically sealed block. State updates are compressed with zk validity roots.',
      color: '#3b82f6',
      glow: 'rgba(59, 130, 246, 0.4)',
    },
    {
      number: '05',
      title: 'Settle & Finalize',
      subtitle: 'Ledger permanently updated',
      icon: <CheckCircle2 className="w-5 h-5" />,
      description: 'The sealed block is committed to the immutable blockchain ledger. The system settles account balances and alerts the client.',
      color: '#22c55e',
      glow: 'rgba(34, 197, 94, 0.4)',
    },
  ];

  return (
    <section className="relative py-24 bg-[#03000a] grid-bg">
      <div className="absolute w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[140px] -bottom-20 left-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full">
            WORKFLOW PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How the Blockchain <span className="text-gradient">Secures</span> State
          </h2>
          <p className="text-base text-purple-200/60 font-sans">
            Audit the step-by-step cycle that updates, sequences, and secures transaction blocks on our high-performance ledger.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-green-500 opacity-20 pointer-events-none z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Node circle */}
                <div 
                  className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 bg-[#03000a] mb-6 transition-all duration-300 relative group-hover:scale-105"
                  style={{ 
                    borderColor: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: `0 0 10px rgba(0, 0, 0, 0.4)`
                  }}
                  whileHover={{
                    borderColor: step.color,
                    boxShadow: `0 0 25px ${step.glow}`
                  }}
                >
                  {/* Floating Number */}
                  <span className="absolute -top-3.5 -right-3.5 text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-950 border border-purple-500/20 text-purple-400 shadow-md">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div style={{ color: step.color }}>
                    {step.icon}
                  </div>
                </div>

                {/* Subtitle */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400/50 uppercase mb-2">
                  {step.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-purple-200/50 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
