import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { ROUTES } from '../utils/constants';

export default function LoginPage() {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate(ROUTES.DASHBOARD);
    } catch { }
  };

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="fixed top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#4f46e5]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#4cd7f6]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-10"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to={ROUTES.HOME} className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4cd7f6] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <span className="font-[Sora] text-2xl font-bold tracking-tighter text-[#c3c0ff]">Litminer</span>
          </Link>
          <h1 className="font-[Sora] text-3xl font-bold text-[#e5e1e4] mb-2">Welcome back</h1>
          <p className="text-[#c7c4d8] font-[Inter]">Sign in to your mining dashboard</p>
        </div>

        {/* Form Card */}
        <div className="bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-red-400 text-sm font-[Inter]">
                {error}
              </div>
            )}

            <div>
              <label className="block text-[#c7c4d8] font-[Inter] text-xs font-bold uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="crypto@aethericflux.io"
                required
                className="w-full bg-[#0e0e10] border border-white/10 rounded-lg px-4 py-3 text-[#e5e1e4] font-[JetBrains_Mono] text-sm focus:outline-none focus:border-[#4cd7f6] focus:shadow-[0_0_10px_rgba(76,215,246,0.1)] transition-all placeholder:text-[#c7c4d8]/30"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-[#c7c4d8] font-[Inter] text-xs font-bold uppercase tracking-wider">
                  Password
                </label>
                <Link to={ROUTES.FORGOT_PASSWORD} className="text-[#c3c0ff] text-xs font-[Inter] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                required
                className="w-full bg-[#0e0e10] border border-white/10 rounded-lg px-4 py-3 text-[#e5e1e4] font-[JetBrains_Mono] text-sm focus:outline-none focus:border-[#4cd7f6] focus:shadow-[0_0_10px_rgba(76,215,246,0.1)] transition-all placeholder:text-[#c7c4d8]/30"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#4f46e5] text-[#dad7ff] py-3 rounded-lg font-[Inter] font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Signing In...</>
              ) : 'SIGN IN'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#c7c4d8] font-[Inter] text-sm">
              Don't have an account?{' '}
              <Link to={ROUTES.REGISTER} className="text-[#c3c0ff] font-bold hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
