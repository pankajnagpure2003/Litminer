import { useState, useCallback, useEffect, useRef } from 'react';
import { getMiningStatus, startMining, stopMining } from '../services/api';
import { MINING_STATES } from '../utils/constants';

export function useMining() {
  const [miningState, setMiningState] = useState(MINING_STATES.STOPPED);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(882);
  const timerRef = useRef(null);

  const fetchStats = useCallback(async () => {
    try {
      const res = await getMiningStatus();
      setStats(res.data);
      setCountdown(res.data.nextRewardSeconds);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // Countdown timer
  useEffect(() => {
    if (miningState === MINING_STATES.ACTIVE) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 882));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [miningState]);

  const start = useCallback(async () => {
    setMiningState(MINING_STATES.STARTING);
    try {
      await startMining();
      setMiningState(MINING_STATES.ACTIVE);
    } catch {
      setMiningState(MINING_STATES.STOPPED);
    }
  }, []);

  const stop = useCallback(async () => {
    setMiningState(MINING_STATES.STOPPING);
    try {
      await stopMining();
      setMiningState(MINING_STATES.STOPPED);
    } catch {
      setMiningState(MINING_STATES.ACTIVE);
    }
  }, []);

  const isActive = miningState === MINING_STATES.ACTIVE;
  const isTransitioning =
    miningState === MINING_STATES.STARTING || miningState === MINING_STATES.STOPPING;

  return { miningState, stats, loading, error, countdown, isActive, isTransitioning, start, stop, refetch: fetchStats };
}
