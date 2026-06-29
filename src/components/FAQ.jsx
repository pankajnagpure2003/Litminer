import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      question: 'What is Aetheria Network?',
      answer: 'Aetheria is a decentralized Layer 2 blockchain designed to execute smart contracts with high transaction throughput, zero gas spikes, and finality in 0.3 seconds. We leverage zero-knowledge rollup validity proofs to consolidate state directly onto Ethereum.',
    },
    {
      question: 'How does the BFT Consensus achieve 0.3s block times?',
      answer: 'By dividing validators into parallel execution shards and sequencing transaction transactions through our optimized Byzantine Fault Tolerant protocol, block proposals can be created and checked asynchronously, bypassing full validator network locks.',
    },
    {
      question: 'Is Aetheria compatible with Ethereum Solidity contracts?',
      answer: 'Absolutely. Aetheria provides full EVM compatibility, meaning any standard solidity contract compiled for Ethereum can be drop-in deployed using Hardhat, Foundry, or Remix, alongside native WASM and Rust modules.',
    },
    {
      question: 'How can I participate as a validator node?',
      answer: 'Validator node operations require locking a minimum stake of 32,000 AETH tokens, running our secure node daemon client, and meeting bandwidth/uptime requirements. Delegated staking is also supported for community delegators.',
    },
    {
      question: 'What bridging protocols are natively supported?',
      answer: 'We utilize state relay architectures that compile cryptographic validity proofs. This allows native, secure, and instant asset swaps between Aetheria and major Layer 1 ecosystems like Ethereum, Solana, and Sui.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-[#05030a] aurora-bg">
      <div className="absolute w-[500px] h-[500px] bg-purple-950/5 rounded-full blur-[140px] top-1/3 left-1/4 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/30 px-3.5 py-1.5 rounded-full">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="font-bold text-white text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-purple-300"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 border-t border-purple-500/5 text-sm text-purple-200/60 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
