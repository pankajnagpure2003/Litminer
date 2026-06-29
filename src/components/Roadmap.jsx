import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Play, Circle } from 'lucide-react';

export default function Roadmap() {
  const milestones = [
    {
      quarter: 'Q1 2026',
      title: 'Research & Protocol Dev',
      description: 'Feasibility studies on multi-sharding, simulation of Byzantine fault tolerance protocols, and deployment of cryptographic zero-knowledge compiler pipelines.',
      status: 'completed',
      icon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
      color: 'border-green-500/20 shadow-green-500/5',
      badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
      badgeText: 'COMPLETED',
    },
    {
      quarter: 'Q2 2026',
      title: 'Public Testnet Sandbox',
      description: 'Launching public RPC endpoints, developer faucet release, validator onboarding campaign, smart contract execution trials, and inter-network bridges.',
      status: 'active',
      icon: <Play className="w-5 h-5 text-cyan-400 animate-pulse" />,
      color: 'border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 animate-pulse',
      badgeText: 'IN PROGRESS',
    },
    {
      quarter: 'Q3 2026',
      title: 'Genesis Mainnet Launch',
      description: 'Genesis block production, deployment of native cross-chain bridges, initialization of liquidity incentives, validator reward staking, and exchange integration.',
      status: 'planned',
      icon: <Circle className="w-5 h-5 text-purple-400" />,
      color: 'border-purple-500/20 shadow-purple-500/5',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      badgeText: 'PLANNED',
    },
    {
      quarter: 'Q4 2026',
      title: 'DAO Governance Kernel',
      description: 'Governance token delegation releases, voting proposals setup, community-driven grants allocations, and decentralized validation expansion.',
      status: 'planned',
      icon: <Circle className="w-5 h-5 text-purple-400" />,
      color: 'border-purple-500/20 shadow-purple-500/5',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      badgeText: 'PLANNED',
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 bg-[#05030a] aurora-bg">
      <div className="absolute w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-[140px] top-1/3 right-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/30 px-3.5 py-1.5 rounded-full">
            ROADMAP & PHASES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Path to <span className="text-gradient">Decentralization</span>
          </h2>
          <p className="text-base text-purple-200/60 font-sans">
            Follow the phases of design, release, and community ownership structuring our network expansion.
          </p>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500 via-cyan-400 to-purple-800 opacity-20 transform -translate-x-1/2 pointer-events-none z-0" />

          {/* Milestones list */}
          <div className="space-y-12 relative z-10">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col md:flex-row items-stretch relative">
                  {/* Outer circle dot placement on the timeline */}
                  <div 
                    className="absolute left-8 md:left-1/2 w-10 h-10 rounded-xl bg-[#03000a] border-2 flex items-center justify-center transform -translate-x-1/2 z-20 shadow-md"
                    style={{ 
                      borderColor: milestone.status === 'active' ? '#00f0ff' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: milestone.status === 'active' ? '0 0 15px rgba(0, 240, 255, 0.3)' : undefined
                    }}
                  >
                    {milestone.icon}
                  </div>

                  {/* Spacer for alignment on large screens */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'pr-12 text-right' : 'order-last pl-12 text-left'}`} />

                  {/* Timeline Glass Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
                  >
                    <div className={`glass-card border rounded-2xl p-6 ${milestone.color}`}>
                      {/* Quarter & Status Badge */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="font-mono text-cyan-400 font-bold text-lg tracking-wider">
                          {milestone.quarter}
                        </span>
                        <span className={`text-[9px] font-mono font-black tracking-widest px-2.5 py-1 rounded border ${milestone.badgeColor}`}>
                          {milestone.badgeText}
                        </span>
                      </div>

                      {/* Header */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-purple-200/50 leading-relaxed font-sans">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
