import axios from 'axios';
import { mockUser } from '../data/user';
import { miningStats, recentBlocks } from '../data/mining';
import { walletData, assets } from '../data/wallet';
import { transactions } from '../data/transactions';
import { referralData, referralHistory } from '../data/referrals';
import { tasks } from '../data/tasks';
import { rewardsData, rewardHistory } from '../data/rewards';
import { notifications } from '../data/notifications';
import { earningsChartData, hashrateChartData } from '../data/charts';

// Simulate network delay
const delay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

// In a real app, this would point to your backend
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const login = async (email, password) => {
  await delay();
  if (email && password) {
    return {
      success: true,
      token: 'mock_jwt_token_xyz',
      user: mockUser,
    };
  }
  throw new Error('Invalid credentials');
};

export const register = async (email, password, username) => {
  await delay(800);
  if (email && password && username) {
    return {
      success: true,
      token: 'mock_jwt_token_new',
      user: { ...mockUser, username, email },
    };
  }
  throw new Error('Registration failed');
};

export const logout = async () => {
  await delay(200);
  return { success: true };
};

export const forgotPassword = async (email) => {
  await delay(600);
  return { success: true, message: 'Password reset link sent to ' + email };
};

// ─── Dashboard ────────────────────────────────────────────────────────────────

export const getDashboard = async () => {
  await delay();
  return {
    success: true,
    data: {
      walletBalance: walletData.totalBalanceUSD,
      hashrate: miningStats.hashrate,
      blockProgress: miningStats.blockProgress,
      totalEarnings: '3.82 ETH',
      recentTransactions: transactions.slice(0, 5),
      earningsChart: earningsChartData,
      systemInfo: {
        networkStatus: 'Optimal',
        blockNumber: '18,429,501',
        temperature: '64°C',
      },
    },
  };
};

// ─── Mining ───────────────────────────────────────────────────────────────────

export const getMiningStatus = async () => {
  await delay();
  return {
    success: true,
    data: {
      ...miningStats,
      recentBlocks,
      hashrateChart: hashrateChartData,
    },
  };
};

export const startMining = async () => {
  await delay(1200);
  return { success: true, status: 'active', message: 'Mining started successfully' };
};

export const stopMining = async () => {
  await delay(800);
  return { success: true, status: 'stopped', message: 'Mining stopped' };
};

// ─── Wallet ───────────────────────────────────────────────────────────────────

export const walletBalance = async () => {
  await delay();
  return {
    success: true,
    data: {
      ...walletData,
      assets,
    },
  };
};

export const getTransactions = async (page = 1, limit = 10) => {
  await delay();
  const start = (page - 1) * limit;
  return {
    success: true,
    data: transactions.slice(start, start + limit),
    total: transactions.length,
    page,
    limit,
  };
};

export const deposit = async (amount, asset) => {
  await delay(1000);
  return { success: true, message: `Deposit of ${amount} ${asset} initiated` };
};

export const withdraw = async (amount, asset, address) => {
  await delay(1000);
  return { success: true, message: `Withdrawal of ${amount} ${asset} initiated` };
};

// ─── Referrals ────────────────────────────────────────────────────────────────

export const getReferrals = async () => {
  await delay();
  return {
    success: true,
    data: { ...referralData, history: referralHistory },
  };
};

// ─── Rewards ──────────────────────────────────────────────────────────────────

export const rewards = async () => {
  await delay();
  return {
    success: true,
    data: { ...rewardsData, history: rewardHistory },
  };
};

export const claimRewards = async () => {
  await delay(1000);
  return { success: true, message: 'Rewards claimed successfully!' };
};

// ─── Tasks ────────────────────────────────────────────────────────────────────

export const getTasks = async () => {
  await delay();
  return { success: true, data: tasks };
};

// ─── Profile ──────────────────────────────────────────────────────────────────

export const profile = async () => {
  await delay();
  return { success: true, data: mockUser };
};

export const updateProfile = async (updates) => {
  await delay(800);
  return { success: true, data: { ...mockUser, ...updates } };
};

// ─── Notifications ────────────────────────────────────────────────────────────

export const getNotifications = async () => {
  await delay(300);
  return { success: true, data: notifications };
};

export const markNotificationRead = async (id) => {
  await delay(200);
  return { success: true, id };
};

export default api;
