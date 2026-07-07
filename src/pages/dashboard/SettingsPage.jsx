import { useState } from 'react';
import GlassCard from '../../components/ui/GlassCard';
import { useUser } from '../../context/UserContext';

export default function SettingsPage() {
  const { userProfile, updateProfile } = useUser();
  const [settings, setSettings] = useState({
    emailNotifications: userProfile.notifications?.email ?? true,
    pushNotifications: userProfile.notifications?.push ?? true,
    smsNotifications: userProfile.notifications?.sms ?? false,
    twoFA: userProfile.twoFA ?? true,
    autoMining: false,
    darkMode: true,
    language: 'English',
    currency: 'USD',
    payoutThreshold: '0.01',
  });
  const [saved, setSaved] = useState(false);

  const toggle = (key) => setSettings((s) => ({ ...s, [key]: !s[key] }));
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const Toggle = ({ on, onClick }) => (
    <button onClick={onClick} className={`relative w-12 h-6 rounded-full transition-colors ${on ? 'bg-[#4f46e5]' : 'bg-[#353437]'}`}>
      <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${on ? 'translate-x-6' : 'translate-x-0'}`} />
    </button>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Notifications */}
      <GlassCard>
        <h3 className="font-[Sora] text-xl font-semibold text-[#e5e1e4] mb-6">Notifications</h3>
        <div className="space-y-5">
          {[
            { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive mining rewards and system alerts via email' },
            { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser push notifications for real-time updates' },
            { key: 'smsNotifications', label: 'SMS Alerts', desc: 'Critical alerts via SMS (Pro plan+)' },
          ].map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-[Inter] font-bold text-[#e5e1e4] text-sm">{label}</p>
                <p className="text-[#c7c4d8] text-xs font-[Inter]">{desc}</p>
              </div>
              <Toggle on={settings[key]} onClick={() => toggle(key)} />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Security */}
      <GlassCard>
        <h3 className="font-[Sora] text-xl font-semibold text-[#e5e1e4] mb-6">Security</h3>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-[Inter] font-bold text-[#e5e1e4] text-sm">Two-Factor Authentication</p>
              <p className="text-[#c7c4d8] text-xs font-[Inter]">Secure your account with Google Authenticator or SMS</p>
            </div>
            <Toggle on={settings.twoFA} onClick={() => toggle('twoFA')} />
          </div>
          <div className="pt-3 border-t border-white/5">
            <button className="text-red-400 font-[Inter] font-bold text-xs uppercase tracking-wider hover:text-red-300 transition-colors">
              Change Password
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Mining Preferences */}
      <GlassCard>
        <h3 className="font-[Sora] text-xl font-semibold text-[#e5e1e4] mb-6">Mining Preferences</h3>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-[Inter] font-bold text-[#e5e1e4] text-sm">Auto-Mining on Login</p>
              <p className="text-[#c7c4d8] text-xs font-[Inter]">Automatically start mining when you sign in</p>
            </div>
            <Toggle on={settings.autoMining} onClick={() => toggle('autoMining')} />
          </div>
          <div>
            <label className="block text-[#c7c4d8] font-[Inter] font-bold text-xs uppercase tracking-wider mb-2">Payout Threshold (BTC)</label>
            <input
              type="number"
              value={settings.payoutThreshold}
              onChange={(e) => setSettings((s) => ({ ...s, payoutThreshold: e.target.value }))}
              step="0.001"
              className="w-full bg-[#0e0e10] border border-white/10 rounded-lg px-4 py-3 text-[#e5e1e4] font-[JetBrains_Mono] text-sm focus:outline-none focus:border-[#4cd7f6] transition-all"
            />
          </div>
        </div>
      </GlassCard>

      <button onClick={handleSave} className="px-8 py-3 bg-[#4f46e5] text-[#dad7ff] rounded-lg font-[Inter] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all active:scale-95">
        {saved ? '✓ Settings Saved!' : 'Save Settings'}
      </button>
    </div>
  );
}
