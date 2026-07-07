// Mock referral data

export const referralData = {
  code: 'CRYPTO_KING_X42',
  link: 'https://aethericflux.io/ref/CRYPTO_KING_X42',
  totalReferrals: 18,
  activeReferrals: 12,
  totalEarnings: '248.50 USDT',
  pendingEarnings: '32.00 USDT',
  commissionRate: '10%',
  levels: [
    { level: 1, rate: '10%', count: 12, earnings: '180.00 USDT' },
    { level: 2, rate: '5%', count: 5, earnings: '52.50 USDT' },
    { level: 3, rate: '2%', count: 1, earnings: '16.00 USDT' },
  ],
};

export const referralHistory = [
  {
    id: 'ref_001',
    username: 'Miner_X7',
    joinedAt: '2023-10-20',
    status: 'Active',
    plan: 'Pro',
    earned: '+24.50 USDT',
  },
  {
    id: 'ref_002',
    username: 'HashQueen',
    joinedAt: '2023-10-18',
    status: 'Active',
    plan: 'Elite',
    earned: '+99.00 USDT',
  },
  {
    id: 'ref_003',
    username: 'BlockNode22',
    joinedAt: '2023-10-15',
    status: 'Active',
    plan: 'Starter',
    earned: '+4.90 USDT',
  },
  {
    id: 'ref_004',
    username: 'CypherWolf',
    joinedAt: '2023-10-10',
    status: 'Inactive',
    plan: 'Starter',
    earned: '+2.45 USDT',
  },
  {
    id: 'ref_005',
    username: 'NeonTrader',
    joinedAt: '2023-10-05',
    status: 'Active',
    plan: 'Pro',
    earned: '+19.90 USDT',
  },
];
