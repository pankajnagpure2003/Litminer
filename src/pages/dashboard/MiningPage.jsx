import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/ui/GlassCard';
import ProgressBar from '../../components/ui/ProgressBar';
import PerformanceChart from '../../components/charts/PerformanceChart';
import { useMining } from '../../hooks/useMining';
import { recentBlocks } from '../../data/mining';
import { formatCountdown } from '../../utils/formatters';
import { MINING_STATES } from '../../utils/constants';

// Circular progress ring SVG
function MiningRing({ progress, isActive }) {
  const r = 42;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Rotating dashed border */}
      <div className="absolute inset-0 border-[2px] border-dashed border-[#c3c0ff]/20 rounded-full"
        style={{ animation: 'rotate-slow 20s linear infinite' }} />
      {/* SVG Ring */}
      <svg className="w-full h-full drop-shadow-[0_0_25px_rgba(195,192,255,0.3)]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="transparent" stroke="#353437" strokeWidth="6" />
        <circle
          cx="50" cy="50" r={r} fill="transparent"
          stroke={isActive ? '#4cd7f6' : '#c3c0ff'}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.8s ease-in-out, stroke 0.3s' }}
        />
      </svg>
      {/* Center Text */}
      <div className="absolute flex flex-col items-center text-center">
        <span className="font-[Sora] text-[48px] font-bold text-[#c3c0ff] tracking-tighter leading-none">
          {progress}<span className="text-2xl">%</span>
        </span>
        <span className="font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase text-[#c7c4d8]">HASH RATE SYNC</span>
        <div className="mt-2 flex items-center gap-1">
          <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6]' : 'bg-[#c7c4d8]'} animate-pulse`} />
          <span className={`font-[JetBrains_Mono] text-xs font-bold ${isActive ? 'text-[#4cd7f6]' : 'text-[#c7c4d8]'}`}>
            {isActive ? 'MINING ACTIVE' : 'MINING STOPPED'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MiningPage() {
  const { miningState, stats, countdown, isActive, isTransitioning, start, stop } = useMining();
  const { h, m, s } = formatCountdown(countdown);
  const progress = stats?.hashRateSync ?? 82;

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Centerpiece: Mining Progress Ring */}
        <GlassCard className="lg:col-span-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <MiningRing progress={progress} isActive={isActive} />
            <div className="mt-16 text-center space-y-6">
              <button
                onClick={isActive ? stop : start}
                disabled={isTransitioning}
                className={`
                  px-16 py-6 rounded-lg font-[Sora] text-xl font-semibold flex items-center gap-4
                  hover:scale-105 active:scale-95 transition-all duration-300
                  disabled:opacity-60 disabled:cursor-not-allowed
                  ${isActive
                    ? 'bg-[#93000a] text-[#ffdad6] shadow-[0_0_30px_rgba(147,0,10,0.4)]'
                    : 'bg-[#4f46e5] text-[#dad7ff] shadow-[0_0_30px_rgba(79,70,229,0.5)]'
                  }
                `}
              >
                <span className={`material-symbols-outlined ${isTransitioning ? 'animate-spin' : isActive ? '' : 'group-hover:rotate-180 transition-transform duration-700'}`}>
                  {isTransitioning ? 'sync' : isActive ? 'power_settings_new' : 'settings_backup_restore'}
                </span>
                {isTransitioning
                  ? (miningState === MINING_STATES.STARTING ? 'STARTING...' : 'STOPPING...')
                  : isActive ? 'STOP MINER' : 'START MINING'
                }
              </button>
              <p className="font-[Inter] text-[#c7c4d8] max-w-sm text-sm leading-relaxed">
                Optimizing cryptographic clusters for peak profitability. System load remains within safety margins.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Right Column: Stats */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Energy Stability */}
          <GlassCard className="h-32 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase text-[#c7c4d8]">ENERGY STABILITY</span>
              <span className="material-symbols-outlined text-[#4cd7f6]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-end">
                <span className="font-[Sora] text-2xl font-semibold text-[#4cd7f6]">95%</span>
                <span className="font-[JetBrains_Mono] text-xs text-[#4cd7f6]/60">Sustained</span>
              </div>
              <div className="w-full h-1 bg-[#353437] rounded-full overflow-hidden">
                <div className="w-[95%] h-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]" />
              </div>
            </div>
          </GlassCard>

          {/* Current Speed */}
          <GlassCard className="h-32 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase text-[#c7c4d8]">CURRENT SPEED</span>
              <span className="material-symbols-outlined text-[#c3c0ff]">speed</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-[Sora] text-2xl font-semibold text-[#c3c0ff]">12.4</span>
              <span className="font-[Inter] font-bold text-[10px] tracking-widest uppercase text-[#c7c4d8]">GH/S</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#c3c0ff]/80 font-[JetBrains_Mono]">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              <span>+1.2% since last hour</span>
            </div>
          </GlassCard>

          {/* Next Reward Countdown */}
          <GlassCard className="h-32 flex flex-col justify-between border-[#c3c0ff]/20 bg-[#c3c0ff]/5">
            <div className="flex justify-between items-start">
              <span className="font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase text-[#c3c0ff]">NEXT REWARD</span>
              <span className="material-symbols-outlined text-[#c3c0ff]">schedule</span>
            </div>
            <div className="font-[JetBrains_Mono] text-2xl font-bold tracking-widest text-[#e5e1e4]">
              {h}:{m}:<span className="text-[#c3c0ff] animate-pulse">{s}</span>
            </div>
            <div className="font-[Inter] font-bold text-[10px] tracking-widest uppercase text-[#c7c4d8]">
              ESTIMATED: 0.0042 ETH
            </div>
          </GlassCard>
        </div>

        {/* Performance Chart */}
        <GlassCard className="lg:col-span-5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-[Sora] text-lg font-semibold text-[#e5e1e4]">Performance</h3>
            <span className="px-2 py-0.5 bg-[#c3c0ff]/10 text-[#c3c0ff] text-[10px] rounded font-[Inter] font-bold">LIVE</span>
          </div>
          <PerformanceChart />
          <div className="mt-2 flex justify-between font-[JetBrains_Mono] text-[10px] text-[#c7c4d8]">
            <span>12:00</span><span>12:30</span><span>13:00</span>
          </div>
        </GlassCard>

        {/* Recent Blocks */}
        <GlassCard className="lg:col-span-7">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-[Sora] text-lg font-semibold text-[#e5e1e4]">Recent Blocks</h3>
            <button className="text-xs text-[#c3c0ff] font-bold font-[Inter] hover:underline">VIEW ALL</button>
          </div>
          <div className="space-y-3">
            {recentBlocks.map((block) => (
              <div key={block.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#c3c0ff]/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded ${block.color === 'secondary' ? 'bg-[#4cd7f6]/10' : 'bg-[#c3c0ff]/10'} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-sm ${block.color === 'secondary' ? 'text-[#4cd7f6]' : 'text-[#c3c0ff]'}`}>database</span>
                  </div>
                  <div>
                    <p className="font-[Inter] font-bold text-sm text-[#e5e1e4]">Block {block.number}</p>
                    <p className="font-[JetBrains_Mono] text-xs text-[#c7c4d8]">{block.reward} • {block.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-[JetBrains_Mono] text-sm font-bold ${block.color === 'secondary' ? 'text-[#4cd7f6]' : 'text-[#c3c0ff]'}`}>{block.hashrate}</p>
                  <p className="text-[10px] text-[#c7c4d8]">{block.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

      </div>

      <style>{`
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
