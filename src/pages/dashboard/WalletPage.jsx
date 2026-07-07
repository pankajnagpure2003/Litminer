import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';
import { walletData, assets } from '../../data/wallet';
import { transactions } from '../../data/transactions';
import { formatDate } from '../../utils/formatters';

const assetIconColors = {
  btc: { ring: 'bg-[#F7931A]/20 border-[#F7931A]/40', icon: 'text-[#F7931A]' },
  eth: { ring: 'bg-[#c3c0ff]/20 border-[#c3c0ff]/40', icon: 'text-[#c3c0ff]' },
  sol: { ring: 'bg-[#4cd7f6]/20 border-[#4cd7f6]/40', icon: 'text-[#4cd7f6]' },
  usdt: { ring: 'bg-emerald-500/20 border-emerald-500/40', icon: 'text-emerald-500' },
};

export default function WalletPage() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(walletData.addressFull);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">

      {/* Bento Grid Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Balance Card */}
        <GlassCard className="lg:col-span-8 flex flex-col justify-between group relative overflow-hidden">
          {/* Top shine line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c3c0ff]/40 to-transparent" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[#c7c4d8] font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase mb-1">Total Portfolio Balance</p>
              <h3 className="font-[Sora] text-[48px] font-bold text-[#e5e1e4] tracking-tight">${walletData.totalBalanceUSD.toLocaleString()}</h3>
              <div className="flex items-center gap-1 mt-3 text-[#4cd7f6]">
                <span className="material-symbols-outlined text-lg">trending_up</span>
                <span className="font-[JetBrains_Mono] text-sm">{walletData.todayChange.percent} ({walletData.todayChange.amount}) today</span>
              </div>
            </div>
            <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[#e5e1e4]">visibility</span>
            </button>
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            <button className="bg-[#4cd7f6] text-[#003640] px-10 py-3 rounded-xl font-[Sora] text-base font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(76,215,246,0.2)] hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined">add_circle</span>
              Deposit
            </button>
            <button className="bg-[#6f3dd9] text-[#e3d5ff] px-10 py-3 rounded-xl font-[Sora] text-base font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined">payments</span>
              Withdraw
            </button>
            <button className="bg-white/5 border border-white/10 text-[#e5e1e4] px-10 py-3 rounded-xl font-[Sora] text-base font-semibold flex items-center gap-2 backdrop-blur hover:bg-white/10 active:scale-95 transition-all">
              <span className="material-symbols-outlined">swap_horiz</span>
              Transfer
            </button>
          </div>
        </GlassCard>

        {/* QR Code + Address */}
        <GlassCard className="lg:col-span-4 flex flex-col items-center justify-center text-center">
          <p className="text-[#c7c4d8] font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase mb-4">Wallet Address</p>
          <div className="p-2 bg-white rounded-xl mb-4">
            
          </div>
          <code className="font-[JetBrains_Mono] text-sm bg-[#0e0e10] px-3 py-2 rounded-lg border border-white/5 text-[#c3c0ff] mb-3 break-all max-w-full">
            {walletData.address}
          </code>
          <button onClick={copyAddress} className="flex items-center gap-1 text-[#4cd7f6] hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg">
              {copied ? 'check_circle' : 'content_copy'}
            </span>
            <span className="font-[Inter] font-bold text-[10px] tracking-widest uppercase">
              {copied ? 'Copied!' : 'Copy Address'}
            </span>
          </button>
        </GlassCard>
      </div>

      {/* Asset Grid */}
      <div>
        <h4 className="font-[Sora] text-2xl font-semibold text-[#e5e1e4] mb-4">Your Assets</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {assets.map((asset) => {
            const colors = assetIconColors[asset.id];
            return (
              <motion.div key={asset.id} whileHover={{ y: -4 }}>
                <GlassCard className="hover:border-[#c3c0ff]/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full ${colors.ring} flex items-center justify-center border`}>
                      <span className={`material-symbols-outlined ${colors.icon}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        {asset.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-[Inter] font-bold text-[#e5e1e4]">{asset.name}</p>
                      <p className="font-[Inter] font-bold text-[10px] tracking-widest uppercase text-[#c7c4d8]">{asset.symbol}</p>
                    </div>
                  </div>
                  <p className="font-[JetBrains_Mono] text-sm text-[#e5e1e4]">
                    {asset.amount} {asset.symbol}
                  </p>
                  <p className="font-[Inter] font-bold text-[10px] tracking-widest uppercase text-[#c7c4d8]">
                    ${asset.valueUSD.toLocaleString()}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-[Sora] text-2xl font-semibold text-[#e5e1e4]">Recent Activity</h4>
          <button className="text-[#c3c0ff] font-[Inter] font-bold text-[10px] tracking-widest uppercase hover:underline">View All</button>
        </div>
        <GlassCard padding="p-0" className="overflow-hidden border border-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  {['Transaction', 'Amount', 'Date', 'Status'].map((h) => (
                    <th key={h} className="px-6 py-4 font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase text-[#c7c4d8]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {transactions.slice(0, 5).map((tx) => (
                  <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.positive ? 'bg-[#4cd7f6]/10' : 'bg-[#d0bcff]/10'}`}>
                          <span className={`material-symbols-outlined text-lg ${tx.positive ? 'text-[#4cd7f6]' : 'text-[#d0bcff]'}`}>{tx.icon}</span>
                        </div>
                        <span className="font-[Inter] text-[#e5e1e4]">{tx.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-[JetBrains_Mono] text-sm font-bold ${tx.positive ? 'text-[#4cd7f6]' : 'text-[#c7c4d8]'}`}>
                        {tx.amount} {tx.asset}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#c7c4d8] font-[Inter] text-sm">{formatDate(tx.date)}</td>
                    <td className="px-6 py-4"><Badge status={tx.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
