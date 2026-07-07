import { useState } from 'react';
import GlassCard from '../../components/ui/GlassCard';
import { useUser } from '../../context/UserContext';
import { useAuth } from '../../context/AuthContext';

export default function ProfilePage() {
  const { userProfile, updateProfile } = useUser();
  const { logout } = useAuth();
  const [form, setForm] = useState({
    username: userProfile.username,
    email: userProfile.email,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    await updateProfile(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Profile Card */}
      <GlassCard className="flex items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#c3c0ff]/40">
            <img src={userProfile.avatar} alt={userProfile.username} className="w-full h-full object-cover" />
          </div>
          <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#4f46e5] flex items-center justify-center border-2 border-[#131315]">
            <span className="material-symbols-outlined text-white text-xs">edit</span>
          </button>
        </div>
        <div className="flex-1">
          <h2 className="font-[Sora] text-2xl font-bold text-[#e5e1e4]">{userProfile.username}</h2>
          <p className="text-[#c7c4d8] font-[Inter] text-sm">{userProfile.email}</p>
          <div className="flex gap-2 mt-2">
            <span className="px-3 py-1 bg-[#c3c0ff]/10 text-[#c3c0ff] border border-[#c3c0ff]/20 rounded-full text-[10px] font-bold uppercase font-[Inter]">
              LVL {userProfile.level} {userProfile.tier}
            </span>
            <span className="px-3 py-1 bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/20 rounded-full text-[10px] font-bold uppercase font-[Inter]">
              {userProfile.plan} Plan
            </span>
            {userProfile.kyc === 'verified' && (
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase font-[Inter]">
                ✓ KYC Verified
              </span>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Edit Form */}
      <GlassCard>
        <h3 className="font-[Sora] text-xl font-semibold text-[#e5e1e4] mb-6">Edit Profile</h3>
        <form onSubmit={handleSave} className="space-y-5">
          {[
            { key: 'username', label: 'Username', type: 'text' },
            { key: 'email', label: 'Email Address', type: 'email' },
          ].map(({ key, label, type }) => (
            <div key={key}>
              <label className="block text-[#c7c4d8] font-[Inter] font-bold text-xs uppercase tracking-wider mb-2">{label}</label>
              <input
                type={type}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full bg-[#0e0e10] border border-white/10 rounded-lg px-4 py-3 text-[#e5e1e4] font-[JetBrains_Mono] text-sm focus:outline-none focus:border-[#4cd7f6] transition-all"
              />
            </div>
          ))}
          <button type="submit" className="px-8 py-3 bg-[#4f46e5] text-[#dad7ff] rounded-lg font-[Inter] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all active:scale-95">
            {saved ? '✓ Saved!' : 'Save Changes'}
          </button>
        </form>
      </GlassCard>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Earnings', value: userProfile.stats.totalEarnings, color: 'text-[#c3c0ff]' },
          { label: 'Uptime', value: `${userProfile.stats.uptime}%`, color: 'text-[#4cd7f6]' },
          { label: 'Blocks Found', value: userProfile.stats.blocksFound, color: 'text-[#d0bcff]' },
        ].map((s) => (
          <GlassCard key={s.label}>
            <p className="text-[#c7c4d8] font-[Inter] font-bold text-[10px] tracking-widest uppercase mb-2">{s.label}</p>
            <p className={`font-[Sora] text-2xl font-bold ${s.color}`}>{s.value}</p>
          </GlassCard>
        ))}
      </div>

      <button onClick={logout} className="flex items-center gap-2 text-red-400 font-[Inter] text-sm hover:text-red-300 transition-colors">
        <span className="material-symbols-outlined">logout</span>
        Sign Out
      </button>
    </div>
  );
}
