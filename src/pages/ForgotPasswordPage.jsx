import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { forgotPassword } from '../services/api';
import { ROUTES } from '../utils/constants';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotPassword(email);
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="fixed inset-0 bg-[#4f46e5]/5 blur-[200px] pointer-events-none" />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md z-10">
        <div className="text-center mb-10">
          <Link to={ROUTES.HOME} className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4cd7f6] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <span className="font-[Sora] text-2xl font-bold tracking-tighter text-[#c3c0ff]">Litminer</span>
          </Link>
          <h1 className="font-[Sora] text-3xl font-bold text-[#e5e1e4] mb-2">Reset Password</h1>
          <p className="text-[#c7c4d8] font-[Inter]">Enter your email to receive a reset link</p>
        </div>
        <div className="bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border border-white/10 rounded-2xl p-8">
          {sent ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#4cd7f6]/10 rounded-full flex items-center justify-center mx-auto border border-[#4cd7f6]/20">
                <span className="material-symbols-outlined text-[#4cd7f6] text-3xl">mark_email_read</span>
              </div>
              <h3 className="font-[Sora] text-xl font-semibold text-[#e5e1e4]">Check your inbox</h3>
              <p className="text-[#c7c4d8] font-[Inter] text-sm">Reset link sent to <span className="text-[#c3c0ff]">{email}</span></p>
              <Link to={ROUTES.LOGIN} className="block text-[#c3c0ff] font-bold font-[Inter] text-sm hover:underline">
                Back to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[#c7c4d8] font-[Inter] text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="crypto@aethericflux.io"
                  className="w-full bg-[#0e0e10] border border-white/10 rounded-lg px-4 py-3 text-[#e5e1e4] font-[JetBrains_Mono] text-sm focus:outline-none focus:border-[#4cd7f6] transition-all placeholder:text-[#c7c4d8]/30"
                />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-[#4f46e5] text-[#dad7ff] py-3 rounded-lg font-[Inter] font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</> : 'SEND RESET LINK'}
              </button>
              <div className="text-center">
                <Link to={ROUTES.LOGIN} className="text-[#c7c4d8] font-[Inter] text-sm hover:text-[#c3c0ff]">← Back to Sign In</Link>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
