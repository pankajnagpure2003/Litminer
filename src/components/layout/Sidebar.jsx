import { NavLink } from 'react-router-dom';
import { SIDEBAR_LINKS, DASHBOARD_NAME } from '../../utils/constants';
import { useUser } from '../../context/UserContext';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar() {
  const { userProfile } = useUser();
  const { logout } = useAuth();

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 z-[60] bg-[#1c1b1d]/80 backdrop-blur-xl border-r border-white/10 flex flex-col py-10 hidden md:flex">
      {/* Logo */}
      <div className="px-6 mb-16">
        <h1 className="text-[#c3c0ff] font-[Sora] text-[24px] font-bold tracking-tighter">
          {DASHBOARD_NAME}
        </h1>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-3 space-y-1">
        {SIDEBAR_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-6 px-6 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-[#4f46e5] text-[#dad7ff] shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                  : 'text-[#c7c4d8] hover:bg-white/5 hover:translate-x-1'
              }`
            }
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="font-[Inter] text-base">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Profile Footer */}
      <div className="mt-auto px-6 py-3 border-t border-white/5 pt-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#353437] border border-[#c3c0ff]/20">
            <img src={userProfile.avatar} alt={userProfile.username} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[#e5e1e4] font-bold text-sm font-[Inter]">{userProfile.username}</p>
            <p className="text-[#c7c4d8] text-xs font-[Inter]">LVL {userProfile.level} {userProfile.tier}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[#c7c4d8] hover:bg-white/5 hover:text-red-400 transition-all text-sm"
        >
          <span className="material-symbols-outlined text-sm">logout</span>
          <span className="font-[Inter]">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
