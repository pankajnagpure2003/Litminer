import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, Server, Shield, Layers, HardDrive, Share2, Search, Cpu, RefreshCw } from 'lucide-react';

export default function Technology() {
  const [selectedNode, setSelectedNode] = useState('Consensus');

  const nodes = [
    {
      id: 'Wallet',
      name: 'User Wallet',
      icon: <Wallet className="w-5 h-5" />,
      description: 'The secure entry point for initiating transactions. Aetheria supports native gasless wallet connections and key-sharded secure login interfaces.',
      role: 'Transaction Initiation',
      connections: ['RPC'],
      x: 10, y: 15,
      color: '#00f0ff',
    },
    {
      id: 'RPC',
      name: 'RPC Gateway',
      icon: <Server className="w-5 h-5" />,
      description: 'Receives signed transaction payloads from the client and routes them to the active validator pool via high-throughput web socket queues.',
      role: 'Payload Ingress',
      connections: ['Validator'],
      x: 35, y: 15,
      color: '#a855f7',
    },
    {
      id: 'Validator',
      name: 'Validator Pool',
      icon: <Shield className="w-5 h-5" />,
      description: 'Stateless execution environment. Re-calculates and simulates transactions to guarantee valid execution prior to state proposal.',
      role: 'Transaction Verification',
      connections: ['Consensus', 'API'],
      x: 60, y: 15,
      color: '#ec4899',
    },
    {
      id: 'Consensus',
      name: 'BFT Consensus',
      icon: <Layers className="w-5 h-5" />,
      description: 'Hyper-fast Byzantine Fault Tolerant protocol that sequences block proposals, guarantees finality, and writes blocks to the ledger in 0.3s.',
      role: 'State Commitment',
      connections: ['Nodes', 'Bridge'],
      x: 85, y: 40,
      color: '#3b82f6',
    },
    {
      id: 'Nodes',
      name: 'Archival Nodes',
      icon: <HardDrive className="w-5 h-5" />,
      description: 'Distributed database storing complete historical ledger state, compressed using zk-rollups to maintain minimal local storage footprints.',
      role: 'State Preservation',
      connections: ['Explorer'],
      x: 60, y: 65,
      color: '#22c55e',
    },
    {
      id: 'Bridge',
      name: 'Interop Bridge',
      icon: <Share2 className="w-5 h-5" />,
      description: 'State relay system that transmits events across Ethereum, Solana, and Cosmos via encrypted validation vectors.',
      role: 'Cross-Chain Transfer',
      connections: [],
      x: 85, y: 80,
      color: '#f97316',
    },
    {
      id: 'Explorer',
      name: 'State Explorer',
      icon: <Search className="w-5 h-5" />,
      description: 'Public-facing data explorer interface that tracks validator performance, transaction histories, block states, and contract sources.',
      role: 'Ledger Auditability',
      connections: [],
      x: 35, y: 65,
      color: '#eab308',
    },
    {
      id: 'API',
      name: 'GraphQL API',
      icon: <Cpu className="w-5 h-5" />,
      description: 'Real-time indexing querying engine. Allows developers to execute custom data pipelines and fetch smart contract events.',
      role: 'Developer Querying',
      connections: ['Explorer'],
      x: 60, y: 40,
      color: '#14b8a6',
    },
  ];

  const activeNode = nodes.find(n => n.id === selectedNode) || nodes[3];

  return (
    <section id="technology" className="relative py-24 bg-[#05030a] aurora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/30 px-3.5 py-1.5 rounded-full">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Integrated Web3 <span className="text-gradient">Core</span> Infrastructure
          </h2>
          <p className="text-base text-purple-200/60 font-sans">
            Aetheria couples state-of-the-art RPC handlers, validator sets, and interoperable bridges into a unified blockchain engine. Click nodes below to audit the data pipeline.
          </p>
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Node Map Panel (2/3 width) */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6 flex flex-col justify-between min-h-[400px] border border-white/5 relative overflow-hidden">
            {/* Background vector connection lines */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {nodes.map(node =>
                  node.connections.map(targetId => {
                    const target = nodes.find(n => n.id === targetId);
                    if (!target) return null;
                    const isSelected = selectedNode === node.id || selectedNode === target.id;
                    return (
                      <g key={`${node.id}-${targetId}`}>
                        {/* Static underlying connection */}
                        <line
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${target.x}%`}
                          y2={`${target.y}%`}
                          stroke={isSelected ? 'rgba(0, 240, 255, 0.25)' : 'rgba(255, 255, 255, 0.03)'}
                          strokeWidth={isSelected ? '0.6' : '0.3'}
                        />
                        {/* Glowing flowing dash overlay */}
                        {isSelected && (
                          <line
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${target.x}%`}
                            y2={`${target.y}%`}
                            stroke={`url(#grad-${node.id}-${targetId})`}
                            strokeWidth="1.2"
                            strokeDasharray="4 8"
                            className="animate-[grid-move_8s_linear_infinite]"
                          />
                        )}
                        {/* Define connection gradient */}
                        <defs>
                          <linearGradient id={`grad-${node.id}-${targetId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={node.color} stopOpacity="0.8" />
                            <stop offset="100%" stopColor={target.color} stopOpacity="0.8" />
                          </linearGradient>
                        </defs>
                      </g>
                    );
                  })
                )}
              </svg>
            </div>

            {/* Subsystem nodes buttons */}
            <div className="relative z-10 w-full h-full min-h-[350px]">
              {nodes.map((node) => {
                const isActive = selectedNode === node.id;
                return (
                  <motion.button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`absolute flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'z-20 text-white' 
                        : 'z-10 text-purple-300/40 hover:text-purple-100'
                    }`}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Ring wrapper */}
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-300 shadow-lg ${
                        isActive
                          ? 'border-white bg-[#03000a] scale-110 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                          : 'border-white/5 bg-[#03000a]/80 hover:border-purple-500/20'
                      }`}
                      style={{ 
                        borderColor: isActive ? node.color : undefined,
                        boxShadow: isActive ? `0 0 20px ${node.color}40` : undefined
                      }}
                    >
                      <div style={{ color: node.color }}>
                        {node.icon}
                      </div>
                    </div>
                    {/* Subsystem Name */}
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider bg-[#03000a]/80 px-2 py-0.5 rounded border border-white/5">
                      {node.id}
                    </span>
                  </motion.button>
                );
              })}
            </div>
            
            <div className="text-[10px] text-purple-400/30 font-mono tracking-widest text-left mt-4 border-t border-purple-500/10 pt-3 flex items-center gap-2">
              <RefreshCw className="w-3 h-3 text-cyan-400/60 animate-spin" style={{ animationDuration: '4s' }} />
              SYSTEM PIPELINE AUDITED AND OPERATIONAL
            </div>
          </div>

          {/* Details Panel (1/3 width) */}
          <div className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="p-3 rounded-xl border border-white/10"
                    style={{ 
                      color: activeNode.color,
                      backgroundColor: `${activeNode.color}15`
                    }}
                  >
                    {activeNode.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {activeNode.name}
                    </h3>
                    <span 
                      className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                      style={{ 
                        color: activeNode.color,
                        backgroundColor: `${activeNode.color}15`
                      }}
                    >
                      {activeNode.role}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 border-y border-purple-500/10 py-6">
                  <p className="text-sm text-purple-200/60 leading-relaxed font-sans">
                    {activeNode.description}
                  </p>
                  
                  <div className="bg-purple-950/20 rounded-lg p-4 border border-purple-500/5 font-mono text-xs text-purple-300/80">
                    <div className="text-cyan-400 font-bold mb-1">DATA FLOW PATH:</div>
                    <div>
                      {activeNode.id} → {activeNode.connections.length > 0 ? activeNode.connections.join(' → ') : 'Final Commitment'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6">
              <a 
                href="#features"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                DISCOVER INTEGRATION SDKs →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
