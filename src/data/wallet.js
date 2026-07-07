// Mock wallet data

export const walletData = {
  totalBalanceUSD: 12450.00,
  totalBalanceBTC: 0.142,
  address: '0x71C...8e219',
  addressFull: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F8e219',
  todayChange: {
    percent: '+4.2%',
    amount: '+$512.40',
    positive: true,
  },
  qrCode: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAILV4Ye2a6JCXYzz5kQQpvvngJjPMTHcO4cH17vmFDpAO_NhAtR0kNXMQsxszN-bVkn43OcroOhDNtzafbdMJ_s4gB7wnJ8bYsEUimFhlaUZopLosqyj3uFXAWfo44hzFhXRkwAYqrxdJnhDLn6Zj9I_b__l2oXgewdq6X4HdUpXmSgZ3IcFtJGlmMaoT-yI3eG_0WGtCIc7EbMJWmBHWNL-9dEbpnYhJ4zYfOzXAXNXWrmB8IOW7oR7x1uqT5IYDy4AJIEHmrzus',
};

export const assets = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 0.142,
    valueUSD: 8450.20,
    color: '#F7931A',
    icon: 'currency_bitcoin',
    change: '+2.4%',
    changePositive: true,
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: 1.25,
    valueUSD: 2875.00,
    color: '#c3c0ff',
    icon: 'atm',
    change: '+1.8%',
    changePositive: true,
  },
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    amount: 12.50,
    valueUSD: 1124.80,
    color: '#4cd7f6',
    icon: 'token',
    change: '-0.5%',
    changePositive: false,
  },
  {
    id: 'usdt',
    name: 'Tether',
    symbol: 'USDT',
    amount: 1000.00,
    valueUSD: 1000.00,
    color: '#26a17b',
    icon: 'monetization_on',
    change: '0.0%',
    changePositive: true,
  },
];
