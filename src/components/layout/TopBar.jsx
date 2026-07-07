import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useNotifications } from '../../context/NotificationContext';
import { ROUTES } from '../../utils/constants';

export default function TopBar({ title, subtitle }) {
  const { userProfile } = useUser();
  const { unreadCount, notifications, markRead, markAllRead } = useNotifications();
  const [showNotifs, setShowNotifs] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#131315]/60 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 py-3 shadow-[0_0_20px_rgba(79,70,229,0.1)]">
      {/* Left: Title */}
      <div className="flex items-center gap-4">
        <h2 className="font-[Sora] text-2xl font-semibold text-[#e5e1e4] hidden md:block">{title}</h2>
        <h2 className="font-[Sora] text-xl font-bold tracking-tighter text-[#c3c0ff] md:hidden">MINER</h2>
        {subtitle && (
          <div className="hidden lg:flex items-center gap-4 bg-black/20 rounded-full px-4 py-1 border border-white/5">
            <span className="material-symbols-outlined text-[#4cd7f6] text-sm">network_check</span>
            <span className="font-[JetBrains_Mono] text-[#4cd7f6] text-sm">{subtitle}</span>
          </div>
        )}
      </div>

      {/* Right: Notifications + Avatar */}
      <div className="flex items-center gap-3 relative">
        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifs((o) => !o)}
            className="relative text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors p-1"
          >
            <span className="material-symbols-outlined">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4f46e5] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotifs && (
            <div className="absolute right-0 top-10 w-80 bg-[rgba(24,24,27,0.98)] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                <span className="font-[Sora] font-semibold text-[#e5e1e4] text-sm">Notifications</span>
                <button onClick={markAllRead} className="text-[#c3c0ff] text-xs font-[Inter] hover:underline">
                  Mark all read
                </button>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-white/5">
                {notifications.slice(0, 5).map((n) => (
                  <div
                    key={n.id}
                    onClick={() => markRead(n.id)}
                    className={`flex items-start gap-3 px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors ${!n.read ? 'bg-white/[0.02]' : ''}`}
                  >
                    <span className={`material-symbols-outlined text-sm mt-0.5 ${n.iconColor === 'secondary' ? 'text-[#4cd7f6]' : n.iconColor === 'tertiary' ? 'text-[#d0bcff]' : 'text-[#c3c0ff]'}`}>
                      {n.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold font-[Inter] truncate ${n.read ? 'text-[#c7c4d8]' : 'text-[#e5e1e4]'}`}>
                        {n.title}
                      </p>
                      <p className="text-[10px] text-[#c7c4d8]/60 leading-relaxed line-clamp-2">{n.message}</p>
                    </div>
                    {!n.read && <div className="w-1.5 h-1.5 rounded-full bg-[#c3c0ff] mt-1.5 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Avatar */}
        <Link to={ROUTES.PROFILE}>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c3c0ff]/40 hover:border-[#c3c0ff] transition-colors">
            <img src={userProfile.avatar} alt={userProfile.username} className="w-full h-full object-cover" />
          </div>
        </Link>
      </div>
    </header>
  );
}
