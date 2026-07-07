import { createContext, useContext, useState, useCallback } from 'react';
import { profile as apiProfile, updateProfile as apiUpdateProfile } from '../services/api';
import { mockUser } from '../data/user';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [userProfile, setUserProfile] = useState(mockUser);
  const [loading, setLoading] = useState(false);

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiProfile();
      setUserProfile(res.data);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = useCallback(async (updates) => {
    setLoading(true);
    try {
      const res = await apiUpdateProfile(updates);
      setUserProfile(res.data);
      return res;
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userProfile, loading, fetchProfile, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
