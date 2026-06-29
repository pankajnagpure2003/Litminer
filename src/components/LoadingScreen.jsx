import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds loading
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onFinished, 600); // Wait for fade-out animation
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03000a] overflow-hidden"
        >
          {/* Neon blob background */}
          <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2" />

          {/* Futuristic Blockchain Animated Logo */}
          <div className="relative mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              className="w-24 h-24 rounded-2xl border-2 border-dashed border-cyan-400/40 flex items-center justify-center p-3"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                className="w-16 h-16 rounded-xl border-2 border-double border-purple-500/60 flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.6)]" />
              </motion.div>
            </motion.div>

            {/* Pulsing rings */}
            <div className="absolute inset-0 w-24 h-24 rounded-2xl border border-cyan-400/20 animate-ping opacity-70" style={{ animationDuration: '2s' }} />
          </div>

          {/* Loading Typography */}
          <div className="text-center z-10">
            <h2 className="text-2xl font-bold tracking-widest text-white font-sans uppercase mb-2">
              AETHERIA <span className="text-cyan-400">NETWORK</span>
            </h2>
            <p className="text-xs tracking-wider text-purple-300/60 font-mono">
              INITIALIZING DECENTRALIZED PROTOCOLS...
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-1.5 bg-purple-950/40 rounded-full mt-8 overflow-hidden border border-white/5 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.7)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage */}
          <div className="mt-3 text-cyan-400 font-mono font-medium text-sm tracking-wider">
            {Math.floor(progress)}%
          </div>

          {/* Footer loading details */}
          <div className="absolute bottom-10 left-0 right-0 text-center text-[10px] text-purple-400/30 font-mono tracking-widest">
            SECURE LAYER 2 | BLOCKS: SYNCHRONIZING
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
