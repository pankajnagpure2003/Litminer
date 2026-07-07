import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { networkHashrateData } from '../../data/charts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[rgba(24,24,27,0.95)] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-xl shadow-xl">
        <p className="text-[#c7c4d8] text-xs mb-1 font-[Inter]">{label}</p>
        <p className="text-[#c3c0ff] font-bold font-[JetBrains_Mono]">
          {payload[0].value} PH/s
        </p>
      </div>
    );
  }
  return null;
};

export default function HashrateChart({ data = networkHashrateData }) {
  return (
    <div className="h-40 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis
            dataKey="time"
            tick={{ fill: '#c7c4d8', fontSize: 10, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="hashrate"
            stroke="#c3c0ff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#fff', stroke: '#c3c0ff', strokeWidth: 2 }}
            style={{ filter: 'drop-shadow(0 0 6px rgba(195,192,255,0.6))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
