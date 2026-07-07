import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../../components/ui/GlassCard';
import StatCard from '../../components/ui/StatCard';
import Badge from '../../components/ui/Badge';
import ProgressBar from '../../components/ui/ProgressBar';
import EarningsChart from '../../components/charts/EarningsChart';
import { transactions } from '../../data/transactions';
import { formatDateTime } from '../../utils/formatters';
import { ROUTES } from '../../utils/constants';

const iconColorClass = {
  secondary: 'text-[#4cd7f6] bg-[#4cd7f6]/10',
  primary: 'text-[#c3c0ff] bg-[#c3c0ff]/10',
  tertiary: 'text-[#d0bcff] bg-[#d0bcff]/10',
  'on-surface': 'text-[#e5e1e4] bg-white/10',
};

export default function DashboardHome() {
  return (
    <div className="p-6 lg:p-16 space-y-10">
      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Wallet Balance"
          value="$12,450.00"
          subtext="+2.4% vs yesterday"
          subtextColor="secondary"
          icon="account_balance_wallet"
          iconColor="secondary"
          borderHover="secondary"
        />
        <StatCard
          label="Active Hashrate"
          value="45.8"
          unit="TH/s"
          subtext="99.8% Uptime"
          subtextColor="primary"
          icon="memory"
          iconColor="primary"
          borderHover="primary"
        />
        <GlassCard className="flex flex-col justify-between transition-colors hover:border-white/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#c7c4d8] font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase">Block Progress</span>
            <span className="font-[JetBrains_Mono] text-white font-bold">78%</span>
          </div>
          <div className="space-y-3">
            <ProgressBar value={78} color="gradient" height="h-2" animated />
            <p className="text-[#c7c4d8] text-xs font-[Inter]">Est. Reward: 0.042 BTC</p>
          </div>
        </GlassCard>
        <StatCard
          label="Total Earnings"
          value="3.82"
          unit="ETH"
          subtext="Lifetime Cumulative"
          subtextColor="muted"
          icon="payments"
          iconColor="secondary"
          borderHover="secondary"
        />
      </div>

      {/* Chart + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Chart */}
        <GlassCard className="lg:col-span-2 relative overflow-hidden">
          <EarningsChart />
        </GlassCard>

        {/* Quick Actions + Status */}
        <div className="space-y-6">
          <GlassCard className="bg-[#c3c0ff]/5 border-[#c3c0ff]/20">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-[#c3c0ff] font-[Inter] mb-6">Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <Link to={ROUTES.MINING}>
                <button className="w-full py-6 bg-[#c3c0ff] text-[#0f0069] font-bold rounded-lg flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(195,192,255,0.4)] transition-all active:scale-95 font-[Inter] text-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined">play_arrow</span>
                  START MINING
                </button>
              </Link>
              <Link to={ROUTES.WALLET}>
                <button className="w-full py-6 border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95 font-[Inter] text-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined">download</span>
                  DEPOSIT
                </button>
              </Link>
              <Link to={ROUTES.WALLET}>
                <button className="w-full py-6 border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95 font-[Inter] text-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined">upload</span>
                  WITHDRAW
                </button>
              </Link>
            </div>
          </GlassCard>

          {/* System Status */}
          <GlassCard className="border-[#4cd7f6]/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_rgba(76,215,246,1)]" />
              <span className="text-sm font-medium text-[#4cd7f6] font-[Inter]">System Online</span>
            </div>
            <p className="text-[#c7c4d8] text-xs font-[Inter] leading-relaxed">
              Local node synced at block #18,429,501. Cooling systems operating at 64°C.
            </p>
          </GlassCard>
        </div>
      </div>

      {/* Recent Transactions */}
      <GlassCard padding="p-0" className="overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <h3 className="font-[Sora] text-2xl font-semibold text-white">Recent Transactions</h3>
          <Link to={ROUTES.TRANSACTIONS} className="text-[#4cd7f6] text-sm hover:underline font-[Inter]">
            View All History
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#c7c4d8]/60 border-b border-white/5 bg-black/20 font-[Inter]">
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Asset</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.slice(0, 5).map((tx) => (
                <tr key={tx.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined p-1 rounded-lg text-sm ${iconColorClass[tx.iconColor]}`}>
                        {tx.icon}
                      </span>
                      <span className="text-[#e5e1e4] font-[Inter]">{tx.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-[JetBrains_Mono] text-[#c7c4d8]">{tx.asset}</td>
                  <td className={`px-6 py-4 font-[JetBrains_Mono] font-bold ${tx.positive ? 'text-[#4cd7f6]' : 'text-[#e5e1e4]'}`}>
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4">
                    <Badge status={tx.status} pulse={tx.status === 'Processing'} />
                  </td>
                  <td className="px-6 py-4 text-right text-[#c7c4d8] text-sm font-[Inter]">
                    {formatDateTime(tx.date)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
