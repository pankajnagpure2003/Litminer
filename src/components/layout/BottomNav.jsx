import { NavLink } from 'react-router-dom';
import { MOBILE_NAV_LINKS } from '../../utils/constants';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full rounded-t-xl md:hidden bg-[#353437]/60 backdrop-blur-lg border-t border-white/10 flex justify-around items-center px-4 py-2 pb-safe z-[70] shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
      {MOBILE_NAV_LINKS.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === '/dashboard'}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center p-2 rounded-full transition-all ${
              isActive
                ? 'bg-[#4cd7f6]/20 text-[#4cd7f6] scale-110 shadow-[0_0_15px_rgba(76,215,246,0.3)]'
                : 'text-[#c7c4d8]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {link.icon}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5 font-[Inter]">
                {link.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
