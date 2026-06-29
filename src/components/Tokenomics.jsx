import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Tokenomics() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const allocations = [
    {
      name: 'Validator Staking',
      percentage: 35,
      amount: '350,000,000 AETH',
      description: 'Reserved for validators executing node transactions. Staking yields annual compound rewards and guarantees BFT network voting metrics.',
      color: '#a855f7', // purple
      offset: 0,
    },
    {
      name: 'Ecosystem Treasury',
      percentage: 25,
      amount: '250,000,000 AETH',
      description: 'Managed by DAO consensus delegates to sponsor developer grants, build client APIs, fund hackathons, and run foundation campaigns.',
      color: '#00f0ff', // cyan
      offset: 35,
    },
    {
      name: 'Community Rewards',
      percentage: 20,
      amount: '200,000,000 AETH',
      description: 'Distributed to early testers, dApp users, smart contract creators, and bridging users who drive utility to the Aetheria ecosystem.',
      color: '#ec4899', // pink
      offset: 60,
    },
    {
      name: 'Public Distribution',
      percentage: 10,
      amount: '100,000,000 AETH',
      description: 'Public community launch rounds, distributed to global nodes to guarantee token dispersion and avoid validation centralization.',
      color: '#3b82f6', // blue
      offset: 80,
    },
    {
      name: 'Market Liquidity',
      percentage: 10,
      amount: '100,000,000 AETH',
      description: 'Permanently locked liquidity pairings across major decentralized swaps and indices to support transaction depths.',
      color: '#22c55e', // green
      offset: 90,
    },
  ];

  const activeAlloc = allocations[selectedIdx];

  // SVG calculations for a radius of 65 (circumference = 2 * PI * 65 = 408.4)
  const radius = 65;
  const circ = 2 * Math.PI * radius;

  return (
    <section id="tokenomics" className="relative py-24 bg-[#03000a] grid-bg">
      <div className="absolute w-[500px] h-[500px] bg-purple-950/10 rounded-full blur-[120px] top-1/4 left-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full">
            DISTRIBUTION MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Aetheria <span className="text-gradient">Tokenomics</span> Structure
          </h2>
          <p className="text-base text-purple-200/60 font-sans">
            Understand the native token distribution designed to incentivize staking operations, secure validators, and fund open developer utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Donut Panel */}
          <div className="flex flex-col items-center justify-center glass-card rounded-2xl p-8 border border-white/5 relative min-h-[380px]">
            <div className="relative w-72 h-72">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* Background base circle */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="transparent"
                  stroke="rgba(255, 255, 255, 0.02)"
                  strokeWidth="20"
                />

                {/* Allocation arcs */}
                {allocations.map((alloc, idx) => {
                  const strokeDash = (alloc.percentage / 100) * circ;
                  const strokeOffset = circ - (alloc.offset / 100) * circ;
                  const isSelected = selectedIdx === idx;
                  const isHovered = hoveredIdx === idx;

                  return (
                    <motion.circle
                      key={idx}
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="transparent"
                      stroke={alloc.color}
                      strokeWidth={isSelected || isHovered ? '24' : '20'}
                      strokeDasharray={`${strokeDash} ${circ - strokeDash}`}
                      strokeDashoffset={strokeOffset}
                      strokeLinecap="round"
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onClick={() => setSelectedIdx(idx)}
                      style={{
                        filter: isSelected || isHovered ? `drop-shadow(0 0 8px ${alloc.color})` : 'none',
                        opacity: hoveredIdx !== null && !isHovered && !isSelected ? 0.4 : 1,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Middle readout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest text-purple-300/40 uppercase">
                  TOTAL SUPPLY
                </span>
                <span className="text-3xl font-black font-mono text-white tracking-tight">
                  1B
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  AETH TOKENS
                </span>
              </div>
            </div>

            {/* Hint label */}
            <div className="text-[10px] font-mono tracking-wider text-purple-400/30 mt-4">
              TAP OR HOVER SEGMENTS TO DRILL DOWN DETAILS
            </div>
          </div>

          {/* Right Metrics Panel */}
          <div className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between text-left h-full">
            <div className="space-y-6">
              {/* Active description */}
              <div>
                <span 
                  className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded"
                  style={{ 
                    color: activeAlloc.color,
                    backgroundColor: `${activeAlloc.color}15`
                  }}
                >
                  {activeAlloc.percentage}% ALLOCATION
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-1">
                  {activeAlloc.name}
                </h3>
                <span className="text-xs font-mono text-purple-300/40">
                  TOKEN POOL: {activeAlloc.amount}
                </span>
                <p className="text-sm text-purple-200/60 leading-relaxed mt-4 font-sans border-t border-purple-500/10 pt-4">
                  {activeAlloc.description}
                </p>
              </div>

              {/* Progress bars set */}
              <div className="space-y-4 pt-4 border-t border-purple-500/10">
                {allocations.map((alloc, idx) => {
                  const isSelected = selectedIdx === idx;
                  return (
                    <div 
                      key={idx} 
                      className="cursor-pointer"
                      onClick={() => setSelectedIdx(idx)}
                    >
                      <div className="flex justify-between items-center mb-1 text-xs">
                        <span className={`font-medium ${isSelected ? 'text-white' : 'text-purple-300/50'}`}>
                          {alloc.name}
                        </span>
                        <span className="font-mono text-purple-300/60">
                          {alloc.percentage}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-purple-950/30 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${alloc.percentage}%` }}
                          transition={{ duration: 0.5 }}
                          className="h-full rounded-full"
                          style={{ 
                            backgroundColor: alloc.color,
                            boxShadow: isSelected ? `0 0 8px ${alloc.color}` : 'none'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
