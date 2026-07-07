// Mock chart data for Recharts

// 7-day earnings data for AreaChart
export const earningsChartData = [
  { day: 'Mon', earnings: 0.18, usd: 420 },
  { day: 'Tue', earnings: 0.32, usd: 740 },
  { day: 'Wed', earnings: 0.28, usd: 650 },
  { day: 'Thu', earnings: 0.45, usd: 1040 },
  { day: 'Fri', earnings: 0.38, usd: 880 },
  { day: 'Sat', earnings: 0.52, usd: 1200 },
  { day: 'Sun', earnings: 0.48, usd: 1110 },
];

// 30-day earnings data
export const earningsChartData30D = [
  { day: '1', earnings: 0.12 },
  { day: '3', earnings: 0.18 },
  { day: '5', earnings: 0.22 },
  { day: '7', earnings: 0.28 },
  { day: '10', earnings: 0.25 },
  { day: '12', earnings: 0.32 },
  { day: '15', earnings: 0.38 },
  { day: '18', earnings: 0.29 },
  { day: '20', earnings: 0.41 },
  { day: '22', earnings: 0.45 },
  { day: '25', earnings: 0.38 },
  { day: '27', earnings: 0.52 },
  { day: '30', earnings: 0.48 },
];

// Hourly hashrate data for BarChart (performance page)
export const hashrateChartData = [
  { time: '12:00', hashrate: 40, unit: 'GH/s' },
  { time: '12:10', hashrate: 60, unit: 'GH/s' },
  { time: '12:20', hashrate: 55, unit: 'GH/s' },
  { time: '12:30', hashrate: 80, unit: 'GH/s' },
  { time: '12:40', hashrate: 70, unit: 'GH/s' },
  { time: '12:50', hashrate: 90, unit: 'GH/s' },
  { time: '13:00', hashrate: 85, unit: 'GH/s' },
];

// Network hashrate for line chart
export const networkHashrateData = [
  { time: '00:00', hashrate: 820 },
  { time: '04:00', hashrate: 835 },
  { time: '08:00', hashrate: 828 },
  { time: '12:00', hashrate: 842 },
  { time: '16:00', hashrate: 850 },
  { time: '20:00', hashrate: 838 },
  { time: '24:00', hashrate: 845 },
];
