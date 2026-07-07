import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { hashrateChartData } from '../../data/charts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[rgba(24,24,27,0.95)] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-xl shadow-xl">
        <p className="text-[#c7c4d8] text-xs mb-1 font-[Inter]">{label}</p>
        <p className="text-[#c3c0ff] font-bold font-[JetBrains_Mono]">
          {payload[0].value} GH/s
        </p>
      </div>
    );
  }
  return null;
};

export default function PerformanceChart({ data = hashrateChartData }) {
  const maxValue = Math.max(...data.map((d) => d.hashrate));
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="time"
            tick={{ fill: '#c7c4d8', fontSize: 10, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey="hashrate" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.hashrate === maxValue ? 'rgba(195,192,255,0.5)' : 'rgba(195,192,255,0.2)'}
                stroke={entry.hashrate === maxValue ? '#c3c0ff' : 'none'}
                strokeWidth={entry.hashrate === maxValue ? 1.5 : 0}
                style={entry.hashrate === maxValue ? { filter: 'drop-shadow(0 0 8px rgba(195,192,255,0.5))' } : {}}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
