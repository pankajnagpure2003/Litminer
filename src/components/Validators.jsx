import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Radio, Terminal } from 'lucide-react';

export default function Validators() {
  const [logs, setLogs] = useState([
    { id: 1, time: '07:23:41', validator: 'VAL_094 (NEW YORK)', message: 'PROPOSED block #49302, hash: 0x8aef...b930', status: 'OK' },
    { id: 2, time: '07:23:42', validator: 'VAL_109 (TOKYO)', message: 'ATTESTATION verified for block #49302', status: 'OK' },
    { id: 3, time: '07:23:42', validator: 'VAL_052 (FRANKFURT)', message: 'SYNCHRONIZED state transition validity root', status: 'OK' },
  ]);

  const activeValidators = [
    { name: 'VAL_094 (New York)', x: 28, y: 35, latency: '24ms' },
    { name: 'VAL_052 (Frankfurt)', x: 50, y: 30, latency: '12ms' },
    { name: 'VAL_109 (Tokyo)', x: 82, y: 38, latency: '40ms' },
    { name: 'VAL_075 (Singapore)', x: 74, y: 56, latency: '28ms' },
    { name: 'VAL_088 (Sydney)', x: 88, y: 78, latency: '52ms' },
    { name: 'VAL_035 (Sao Paulo)', x: 35, y: 70, latency: '65ms' },
  ];

  // Simulating live validator log updates
  useEffect(() => {
    const locations = ['NEW YORK', 'TOKYO', 'FRANKFURT', 'SINGAPORE', 'SYDNEY', 'SAO PAULO'];
    const messages = [
      'VERIFIED validator signature set',
      'PROPOSED block block_seq_#',
      'COMMITTED transaction logs batch',
      'COMPRESSED ledger state checkpoint',
      'BROADCAST state relay telemetry',
    ];

    const interval = setInterval(() => {
      const time = new Date().toTimeString().split(' ')[0];
      const randomLoc = locations[Math.floor(Math.random() * locations.length)];
      const valNum = Math.floor(Math.random() * 100 + 10);
      const isProp = Math.random() > 0.5;
      
      let msg = messages[Math.floor(Math.random() * messages.length)];
      if (msg.includes('block_seq_#')) {
        const randBlock = Math.floor(Math.random() * 1000 + 49000);
        msg = `PROPOSED block #${randBlock}, hash: 0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`;
      }

      const newLog = {
        id: Date.now(),
        time,
        validator: `VAL_${valNum} (${randomLoc})`,
        message: msg,
        status: 'OK',
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="validators" className="relative py-24 bg-[#05030a] aurora-bg">
      <div className="absolute w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[120px] bottom-0 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full">
            GLOBAL CONSENSUS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Decentralized <span className="text-gradient">Validator</span> Nodes
          </h2>
          <p className="text-base text-purple-200/60 font-sans">
            Aetheria is anchored by active cryptographic nodes geographically distributed across global networks to guarantee data redundancy and fast validations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* SVG Map Card (2/3 width) */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            
            {/* World grid mapping backdrop */}
            <div className="absolute inset-0 z-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Glowing Map SVG container */}
            <div className="relative z-10 w-full h-[280px] sm:h-[320px]">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* SVG Connections between cities */}
                {activeValidators.map((city, idx) => {
                  const nextCity = activeValidators[(idx + 1) % activeValidators.length];
                  return (
                    <line
                      key={idx}
                      x1={`${city.x}%`}
                      y1={`${city.y}%`}
                      x2={`${nextCity.x}%`}
                      y2={`${nextCity.y}%`}
                      stroke="rgba(0, 240, 255, 0.08)"
                      strokeWidth="0.5"
                    />
                  );
                })}
              </svg>

              {/* Validator City pins */}
              {activeValidators.map((city, idx) => (
                <div
                  key={idx}
                  className="absolute group cursor-pointer"
                  style={{ left: `${city.x}%`, top: `${city.y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="relative">
                    {/* Ring ping */}
                    <span className="absolute -inset-1 w-6 h-6 rounded-full bg-green-500/30 animate-ping" />
                    
                    {/* Core dot */}
                    <div className="w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#03000a] shadow-[0_0_10px_#22c55e] z-10" />

                    {/* City details hovercard */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#03000a]/90 backdrop-blur-md border border-white/10 px-2.5 py-1.5 rounded-lg text-[9px] font-mono tracking-wider text-white opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30 shadow-lg">
                      <div className="font-bold text-cyan-400">{city.name}</div>
                      <div>PING: {city.latency}</div>
                      <div className="text-green-400">STATUS: ACTIVE</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map footer notes */}
            <div className="flex items-center justify-between text-[10px] font-mono text-purple-400/40 border-t border-purple-500/10 pt-3 relative z-10">
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-green-400 animate-pulse" />
                <span>GENESIS PROTOCOL ACTIVE | ACTIVE SHARDS: 6</span>
              </div>
              <div>MAP SOURCE: DECENTRALIZED COORDINATOR</div>
            </div>
          </div>

          {/* Real-time validator Operations logs (1/3 width) */}
          <div className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between text-left h-full">
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-4 border-b border-purple-500/10">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <div>
                  <h3 className="font-bold text-white tracking-wide">Telemetry Log</h3>
                  <p className="text-[10px] font-mono text-purple-300/40 uppercase">Global validator updates</p>
                </div>
              </div>

              {/* Log Stream container */}
              <div className="space-y-2 h-[260px] overflow-hidden">
                <AnimatePresence initial={false}>
                  {logs.map((log) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 bg-purple-950/20 rounded border border-purple-500/5 font-mono text-[10px] leading-relaxed flex flex-col gap-1"
                    >
                      <div className="flex justify-between text-purple-400/60 font-bold">
                        <span>{log.time}</span>
                        <span className="text-cyan-400">{log.validator}</span>
                      </div>
                      <div className="text-purple-200/80">{log.message}</div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-green-500/70 font-semibold uppercase tracking-wider text-[8px]">
                          NODE_HEARTBEAT_{log.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="pt-4 border-t border-purple-500/10">
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                APPLY FOR DELEGATION SDK →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
