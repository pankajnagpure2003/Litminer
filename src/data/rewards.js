// Mock rewards data

export const rewardsData = {
  totalEarned: '3.82 ETH',
  totalEarnedUSD: 8940.00,
  claimable: '0.42 ETH',
  claimableUSD: 984.00,
  nextPayout: '2023-10-25T00:00:00Z',
  payoutFrequency: 'Daily',
  loyaltyPoints: 4200,
  loyaltyLevel: 'Diamond',
};

export const rewardHistory = [
  {
    id: 'rwd_001',
    type: 'Mining Reward',
    amount: '0.0042 ETH',
    amountUSD: '$9.83',
    date: '2023-10-24T00:00:00Z',
    status: 'Claimed',
    source: 'Daily Mining',
  },
  {
    id: 'rwd_002',
    type: 'Referral Bonus',
    amount: '24.50 USDT',
    amountUSD: '$24.50',
    date: '2023-10-23T00:00:00Z',
    status: 'Claimed',
    source: 'Miner_X7 Plan Upgrade',
  },
  {
    id: 'rwd_003',
    type: 'Mining Reward',
    amount: '0.0039 ETH',
    amountUSD: '$9.13',
    date: '2023-10-23T00:00:00Z',
    status: 'Claimed',
    source: 'Daily Mining',
  },
  {
    id: 'rwd_004',
    type: 'Task Reward',
    amount: '25.00 USDT',
    amountUSD: '$25.00',
    date: '2023-10-20T00:00:00Z',
    status: 'Claimed',
    source: 'Mine 1 PH/s Task',
  },
  {
    id: 'rwd_005',
    type: 'Streak Bonus',
    amount: '10.00 USDT',
    amountUSD: '$10.00',
    date: '2023-10-15T00:00:00Z',
    status: 'Claimed',
    source: '7-Day Streak',
  },
  {
    id: 'rwd_006',
    type: 'Mining Reward',
    amount: '0.42 ETH',
    amountUSD: '$984.00',
    date: '2023-10-25T00:00:00Z',
    status: 'Pending',
    source: 'Monthly Payout',
  },
];

export const rewardTiers = [
  { name: 'Bronze', minPoints: 0, maxPoints: 999, benefits: ['Weekly payouts', 'Basic dashboard'] },
  { name: 'Silver', minPoints: 1000, maxPoints: 2499, benefits: ['Daily payouts', 'Priority support'] },
  { name: 'Gold', minPoints: 2500, maxPoints: 4999, benefits: ['Instant payouts', 'Analytics'] },
  { name: 'Diamond', minPoints: 5000, maxPoints: null, benefits: ['Custom hardware', '24/7 architect', 'All features'] },
];
