import { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { earningsChartData, earningsChartData30D } from '../../data/charts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[rgba(24,24,27,0.95)] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-xl shadow-xl">
        <p className="text-[#c7c4d8] text-xs mb-1 font-[Inter]">{label}</p>
        <p className="text-[#4cd7f6] font-bold font-[JetBrains_Mono]">
          {payload[0].value.toFixed(4)} ETH
        </p>
      </div>
    );
  }
  return null;
};

export default function EarningsChart() {
  const [period, setPeriod] = useState('7D');
  const data = period === '7D' ? earningsChartData : earningsChartData30D;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-[Sora] text-2xl font-semibold text-white">Daily Earnings</h3>
          <p className="text-[#c7c4d8] text-sm">Last {period === '7D' ? '7 days' : '30 days'} performance window</p>
        </div>
        <div className="flex gap-2">
          {['7D', '1M'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-1 rounded-full text-xs font-bold font-[Inter] transition-colors ${
                period === p
                  ? 'bg-[#353437] text-white'
                  : 'text-[#c7c4d8] hover:bg-white/5'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4cd7f6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#4cd7f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="day"
              tick={{ fill: '#c7c4d8', fontSize: 10, fontFamily: 'JetBrains Mono' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#c7c4d8', fontSize: 10, fontFamily: 'JetBrains Mono' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v.toFixed(2)}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#4cd7f6"
              strokeWidth={2.5}
              fill="url(#earningsGradient)"
              dot={false}
              activeDot={{
                r: 5,
                fill: '#fff',
                stroke: '#4cd7f6',
                strokeWidth: 2,
                filter: 'drop-shadow(0 0 8px rgba(76,215,246,0.8))',
              }}
              style={{ filter: 'drop-shadow(0 0 8px rgba(76,215,246,0.6))' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
