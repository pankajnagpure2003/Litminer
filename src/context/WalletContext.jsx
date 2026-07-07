import { createContext, useContext, useState, useCallback } from 'react';
import { walletBalance as apiWalletBalance, getTransactions as apiGetTransactions } from '../services/api';
import { walletData, assets as initialAssets } from '../data/wallet';
import { transactions as initialTransactions } from '../data/transactions';

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [balance, setBalance] = useState(walletData);
  const [assets, setAssets] = useState(initialAssets);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [loading, setLoading] = useState(false);

  const fetchBalance = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiWalletBalance();
      setBalance(res.data);
      setAssets(res.data.assets);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchTransactions = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const res = await apiGetTransactions(page);
      setTransactions(res.data);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <WalletContext.Provider value={{ balance, assets, transactions, loading, fetchBalance, fetchTransactions }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error('useWallet must be used within WalletProvider');
  return ctx;
}
