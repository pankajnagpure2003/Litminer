import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ target, duration = 2, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(target);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const intervalTime = 30;
    const totalSteps = totalMiliseconds / intervalTime;
    const increment = (end - start) / totalSteps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      start += increment;
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      target: '10',
      decimals: 0,
      suffix: 'M+',
      label: 'Transactions Completed',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      target: '250',
      decimals: 0,
      suffix: '+',
      label: 'Active Validators',
      color: 'from-purple-400 to-pink-500',
    },
    {
      target: '99.99',
      decimals: 2,
      suffix: '%',
      label: 'Network Uptime',
      color: 'from-green-400 to-cyan-400',
    },
    {
      target: '0.3',
      decimals: 1,
      suffix: 's',
      label: 'Average Block Time',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <div className="relative py-12 border-y border-purple-500/10 bg-[#060310]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight mb-2">
                <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:brightness-125 transition-all duration-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.2)]`}>
                  <Counter target={stat.target} decimals={stat.decimals} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-purple-300/50 uppercase tracking-widest font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
