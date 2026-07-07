import { useState } from 'react';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';
import SearchInput from '../../components/ui/SearchInput';
import Pagination from '../../components/ui/Pagination';
import { transactions as allTx } from '../../data/transactions';
import { formatDateTime } from '../../utils/formatters';

const LIMIT = 5;

export default function TransactionsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);

  const types = ['All', 'Mining Reward', 'Withdrawal', 'Deposit', 'Transfer'];

  const filtered = allTx.filter((tx) => {
    const matchSearch = tx.type.toLowerCase().includes(search.toLowerCase()) ||
      tx.asset.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || tx.type === filter;
    return matchSearch && matchFilter;
  });

  const paginated = filtered.slice((page - 1) * LIMIT, page * LIMIT);

  const iconColorClass = {
    secondary: 'text-[#4cd7f6] bg-[#4cd7f6]/10',
    primary: 'text-[#c3c0ff] bg-[#c3c0ff]/10',
    tertiary: 'text-[#d0bcff] bg-[#d0bcff]/10',
    'on-surface': 'text-[#e5e1e4] bg-white/10',
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchInput value={search} onChange={setSearch} placeholder="Search transactions..." className="flex-grow" />
        <div className="flex gap-2 flex-wrap">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => { setFilter(t); setPage(1); }}
              className={`px-4 py-2 rounded-full text-xs font-bold font-[Inter] transition-colors ${
                filter === t ? 'bg-[#4f46e5] text-[#dad7ff]' : 'bg-white/5 border border-white/10 text-[#c7c4d8] hover:bg-white/10'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <GlassCard padding="p-0" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-black/20">
                {['Type', 'Asset', 'Amount', 'Status', 'Date'].map((h) => (
                  <th key={h} className="px-6 py-4 font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase text-[#c7c4d8]/60">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-[#c7c4d8] font-[Inter] text-sm">No transactions found</td>
                </tr>
              ) : paginated.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined p-1 rounded-lg text-sm ${iconColorClass[tx.iconColor]}`}>{tx.icon}</span>
                      <span className="text-[#e5e1e4] font-[Inter]">{tx.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-[JetBrains_Mono] text-[#c7c4d8]">{tx.asset}</td>
                  <td className={`px-6 py-4 font-[JetBrains_Mono] font-bold ${tx.positive ? 'text-[#4cd7f6]' : 'text-[#e5e1e4]'}`}>{tx.amount}</td>
                  <td className="px-6 py-4"><Badge status={tx.status} pulse={tx.status === 'Processing'} /></td>
                  <td className="px-6 py-4 text-right text-[#c7c4d8] text-sm font-[Inter]">{formatDateTime(tx.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination page={page} total={filtered.length} limit={LIMIT} onChange={setPage} />
      </GlassCard>
    </div>
  );
}
