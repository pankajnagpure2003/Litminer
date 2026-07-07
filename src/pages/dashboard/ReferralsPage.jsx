import { useState } from 'react';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';
import { referralData, referralHistory } from '../../data/referrals';

export default function ReferralsPage() {
  const [copied, setCopied] = useState(false);
  const copyCode = () => {
    navigator.clipboard.writeText(referralData.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Referrals', value: referralData.totalReferrals, icon: 'group', color: 'text-[#c3c0ff]' },
          { label: 'Active Referrals', value: referralData.activeReferrals, icon: 'person_check', color: 'text-[#4cd7f6]' },
          { label: 'Total Earned', value: referralData.totalEarnings, icon: 'payments', color: 'text-[#d0bcff]' },
          { label: 'Commission Rate', value: referralData.commissionRate, icon: 'percent', color: 'text-[#4cd7f6]' },
        ].map((s) => (
          <GlassCard key={s.label}>
            <p className="text-[#c7c4d8] font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase mb-2">{s.label}</p>
            <p className={`font-[Sora] text-3xl font-bold ${s.color}`}>{s.value}</p>
          </GlassCard>
        ))}
      </div>

      {/* Referral Link */}
      <GlassCard>
        <h3 className="font-[Sora] text-xl font-semibold text-[#e5e1e4] mb-6">Your Referral Link</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <code className="flex-grow bg-[#0e0e10] border border-white/10 rounded-lg px-4 py-3 font-[JetBrains_Mono] text-sm text-[#c3c0ff] break-all">
            {referralData.link}
          </code>
          <button
            onClick={copyCode}
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-[#4f46e5] text-[#dad7ff] rounded-lg font-[Inter] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-sm">{copied ? 'check_circle' : 'content_copy'}</span>
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
        <p className="mt-3 text-[#c7c4d8] font-[Inter] text-xs">
          Code: <span className="text-[#c3c0ff] font-[JetBrains_Mono]">{referralData.code}</span> · Commission: {referralData.commissionRate} Level 1, 5% Level 2, 2% Level 3
        </p>
      </GlassCard>

      {/* Referral History */}
      <GlassCard padding="p-0" className="overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02]">
          <h3 className="font-[Sora] text-xl font-semibold text-white">Referral History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-black/20">
                {['Username', 'Joined', 'Plan', 'Status', 'Earned'].map((h) => (
                  <th key={h} className="px-6 py-4 font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase text-[#c7c4d8]/60">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {referralHistory.map((r) => (
                <tr key={r.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="px-6 py-4 font-[Inter] text-[#e5e1e4] font-bold">{r.username}</td>
                  <td className="px-6 py-4 text-[#c7c4d8] font-[Inter] text-sm">{r.joinedAt}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-[#c3c0ff]/10 text-[#c3c0ff] border border-[#c3c0ff]/20 rounded-full text-[10px] font-bold uppercase tracking-wider font-[Inter]">
                      {r.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4"><Badge status={r.status} /></td>
                  <td className="px-6 py-4 font-[JetBrains_Mono] text-[#4cd7f6] font-bold">{r.earned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
