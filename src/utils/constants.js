// App-wide constants

export const APP_NAME = 'AETHERIC_FLUX';
export const DASHBOARD_NAME = 'NEON_MINER';
export const APP_TAGLINE = 'Mine the Future of Finance';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  MINING: '/dashboard/mining',
  WALLET: '/dashboard/wallet',
  REFERRALS: '/dashboard/referrals',
  REWARDS: '/dashboard/rewards',
  TASKS: '/dashboard/tasks',
  TRANSACTIONS: '/dashboard/transactions',
  PROFILE: '/dashboard/profile',
  SETTINGS: '/dashboard/settings',
  ADMIN: '/admin',
};

export const NAV_LINKS = [
  { label: 'Networks', href: '#stats' },
  { label: 'Ecosystem', href: '#features' },
  { label: 'Plans', href: '#plans' },
  { label: 'Security', href: '#why-us' },
];

export const SIDEBAR_LINKS = [
  { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
  { label: 'Mining', icon: 'memory', path: '/dashboard/mining' },
  { label: 'Wallet', icon: 'account_balance_wallet', path: '/dashboard/wallet' },
  { label: 'Referral', icon: 'group', path: '/dashboard/referrals' },
  { label: 'Rewards', icon: 'redeem', path: '/dashboard/rewards' },
  { label: 'Tasks', icon: 'task_alt', path: '/dashboard/tasks' },
  { label: 'History', icon: 'receipt_long', path: '/dashboard/transactions' },
  { label: 'Profile', icon: 'person', path: '/dashboard/profile' },
  { label: 'Settings', icon: 'settings', path: '/dashboard/settings' },
];

export const MOBILE_NAV_LINKS = [
  { label: 'Home', icon: 'dashboard', path: '/dashboard' },
  { label: 'Mining', icon: 'memory', path: '/dashboard/mining' },
  { label: 'Wallet', icon: 'account_balance_wallet', path: '/dashboard/wallet' },
  { label: 'Rewards', icon: 'redeem', path: '/dashboard/rewards' },
  { label: 'Profile', icon: 'person', path: '/dashboard/profile' },
];

export const TX_STATUS = {
  CONFIRMED: 'Confirmed',
  PENDING: 'Pending',
  PROCESSING: 'Processing',
  FAILED: 'Failed',
};

export const MINING_STATES = {
  ACTIVE: 'active',
  STOPPED: 'stopped',
  STARTING: 'starting',
  STOPPING: 'stopping',
};
