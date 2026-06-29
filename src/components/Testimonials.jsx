import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Aetheria has completely solved our Gas constraints. By migrating our orderbook smart contracts, our users now pay fractions of a cent per trade, at 0.3s validation speeds.',
      author: 'Elena Rostova',
      role: 'Core Architect, Nexus DEX',
      avatarColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/30',
    },
    {
      quote: 'The native cross-chain bridge integrated directly inside the validator kernel is a game changer. We no longer rely on risky multisig bridges to transfer assets from Ethereum.',
      author: 'Marcus Vance',
      role: 'Founder, Synthetix Labs',
      avatarColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    },
    {
      quote: 'Deploying our solidity contracts took less than 2 minutes using Aetheria EVM runtime. Excellent developer tools, Hardhat integration, and lightning fast RPC endpoints.',
      author: 'Devin K.',
      role: 'Lead Dev, CyberSphere Games',
      avatarColor: 'bg-pink-500/10 text-pink-400 border-pink-400/30',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto sliding carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 bg-[#03000a] grid-bg">
      <div className="absolute w-[400px] h-[400px] bg-pink-900/5 rounded-full blur-[120px] top-1/2 left-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 border border-pink-500/30 px-3.5 py-1.5 rounded-full">
            TRUST METRICS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Endorsed by <span className="text-gradient">Web3 Operators</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Testimonial Glass Card */}
              <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/5 relative text-left shadow-2xl flex flex-col md:flex-row gap-8 items-start md:items-center">
                {/* Quote Icon overlay */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-purple-500/10 pointer-events-none" />

                {/* Avatar representation */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 shrink-0 ${testimonials[activeIndex].avatarColor}`}>
                  <User className="w-8 h-8" />
                </div>

                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed font-sans italic">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-base font-bold text-white tracking-wide">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-xs font-mono text-purple-300/40">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/15 text-purple-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-8 bg-cyan-400 shadow-[0_0_8px_#00f0ff]' : 'w-2.5 bg-purple-500/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/15 text-purple-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
