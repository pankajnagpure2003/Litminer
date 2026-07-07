import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';
import { rewardsData, rewardHistory } from '../../data/rewards';
import { formatDate } from '../../utils/formatters';

export default function RewardsPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Earned', value: rewardsData.totalEarned, sub: `$${rewardsData.totalEarnedUSD.toLocaleString()}`, color: 'text-[#c3c0ff]' },
          { label: 'Claimable Now', value: rewardsData.claimable, sub: `$${rewardsData.claimableUSD.toLocaleString()}`, color: 'text-[#4cd7f6]' },
          { label: 'Loyalty Points', value: rewardsData.loyaltyPoints.toLocaleString(), sub: rewardsData.loyaltyLevel, color: 'text-[#d0bcff]' },
          { label: 'Payout Frequency', value: rewardsData.payoutFrequency, sub: 'Automatic', color: 'text-[#4cd7f6]' },
        ].map((s) => (
          <GlassCard key={s.label}>
            <p className="text-[#c7c4d8] font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase mb-2">{s.label}</p>
            <p className={`font-[Sora] text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[#c7c4d8] text-xs font-[Inter] mt-1">{s.sub}</p>
          </GlassCard>
        ))}
      </div>

      {/* Claim */}
      <GlassCard className="bg-[#c3c0ff]/5 border-[#c3c0ff]/20 text-center py-10">
        <p className="text-[#c7c4d8] font-[Inter] mb-2">Available to claim</p>
        <p className="font-[Sora] text-[48px] font-bold text-[#c3c0ff]">{rewardsData.claimable}</p>
        <p className="text-[#c7c4d8] font-[Inter] text-sm mb-6">${rewardsData.claimableUSD.toLocaleString()} USD</p>
        <button className="px-16 py-4 bg-[#c3c0ff] text-[#1d00a5] font-[Inter] font-bold text-sm uppercase tracking-wider rounded-lg shadow-[0_0_25px_rgba(195,192,255,0.3)] hover:shadow-[0_0_40px_rgba(195,192,255,0.5)] transition-all active:scale-95">
          CLAIM REWARDS
        </button>
      </GlassCard>

      {/* History */}
      <GlassCard padding="p-0" className="overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02]">
          <h3 className="font-[Sora] text-xl font-semibold text-white">Reward History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-black/20">
                {['Type', 'Amount', 'USD', 'Date', 'Status'].map((h) => (
                  <th key={h} className="px-6 py-4 font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase text-[#c7c4d8]/60">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rewardHistory.map((r) => (
                <tr key={r.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="px-6 py-4 font-[Inter] text-[#e5e1e4]">{r.type}</td>
                  <td className="px-6 py-4 font-[JetBrains_Mono] text-[#4cd7f6] font-bold">{r.amount}</td>
                  <td className="px-6 py-4 font-[JetBrains_Mono] text-[#c7c4d8]">{r.amountUSD}</td>
                  <td className="px-6 py-4 text-[#c7c4d8] font-[Inter] text-sm">{formatDate(r.date)}</td>
                  <td className="px-6 py-4"><Badge status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
