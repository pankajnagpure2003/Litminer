// Mock mining statistics data

export const miningStats = {
  hashrate: {
    current: 45.8,
    unit: 'TH/s',
    trend: '+1.2%',
    trendLabel: 'since last hour',
  },
  uptime: 99.8,
  blockProgress: 78,
  estimatedReward: '0.042 BTC',
  nextRewardSeconds: 882, // 14 min 42 sec
  energyStability: 95,
  currentSpeed: { value: 12.4, unit: 'GH/s' },
  hashRateSync: 82,
  activeNodes: 12,
  systemStatus: 'STABLE',
  networkHashrate: { value: '842.5', unit: 'PH/s', progress: 75 },
  activeMiners: { value: '42,912', unit: 'Nodes', progress: 60 },
  totalPaidOut: { value: '14.2K', unit: 'ETH', progress: 88 },
};

export const recentBlocks = [
  {
    id: 'block_001',
    number: '#8,429,102',
    reward: '0.00041 BTC',
    status: 'Success',
    hashrate: '+12.4 GH/s',
    color: 'secondary',
    timeAgo: '2 mins ago',
  },
  {
    id: 'block_002',
    number: '#8,429,101',
    reward: '0.00039 BTC',
    status: 'Success',
    hashrate: '+11.9 GH/s',
    color: 'primary',
    timeAgo: '14 mins ago',
  },
  {
    id: 'block_003',
    number: '#8,429,100',
    reward: '0.00040 BTC',
    status: 'Success',
    hashrate: '+12.1 GH/s',
    color: 'primary',
    timeAgo: '28 mins ago',
  },
  {
    id: 'block_004',
    number: '#8,429,099',
    reward: '0.00038 BTC',
    status: 'Success',
    hashrate: '+11.7 GH/s',
    color: 'secondary',
    timeAgo: '41 mins ago',
  },
  {
    id: 'block_005',
    number: '#8,429,098',
    reward: '0.00042 BTC',
    status: 'Success',
    hashrate: '+12.9 GH/s',
    color: 'primary',
    timeAgo: '55 mins ago',
  },
];

export const performanceBars = [40, 60, 55, 80, 70, 90, 85];
export const performanceLabels = ['12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'];

export const systemInfo = {
  blockNumber: '18,429,501',
  temperature: '64°C',
  coolingStatus: 'Normal',
  syncStatus: 'SYNC_OK',
};
