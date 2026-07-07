import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import ProgressBar from '../ui/ProgressBar';
import { miningStats } from '../../data/mining';

const stats = [
  { label: 'Network Hashrate', value: miningStats.networkHashrate.value, unit: miningStats.networkHashrate.unit, progress: miningStats.networkHashrate.progress, color: 'primary' },
  { label: 'Active Miners', value: miningStats.activeMiners.value, unit: miningStats.activeMiners.unit, progress: miningStats.activeMiners.progress, color: 'secondary' },
  { label: 'Total Paid Out', value: miningStats.totalPaidOut.value, unit: miningStats.totalPaidOut.unit, progress: miningStats.totalPaidOut.progress, color: 'tertiary' },
];

const colorMap = {
  primary: 'text-[#c3c0ff]',
  secondary: 'text-[#4cd7f6]',
  tertiary: 'text-[#d0bcff]',
};

export default function StatsSection() {
  return (
    <section className="py-16 px-12" id="stats">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <GlassCard className="flex flex-col gap-3">
              <span className="text-[#c7c4d8] font-[Inter] font-bold text-[12px] uppercase tracking-[0.1em]">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-1">
                <span className={`font-[Sora] text-[48px] font-bold leading-tight ${colorMap[stat.color]}`}>
                  {stat.value}
                </span>
                <span className="font-[JetBrains_Mono] text-[#c7c4d8]">{stat.unit}</span>
              </div>
              <ProgressBar value={stat.progress} color={stat.color} />
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
