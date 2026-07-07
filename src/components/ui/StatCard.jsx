// StatCard — dashboard metric card from Stitch dashboard design
import GlassCard from './GlassCard';

export default function StatCard({
  label,
  value,
  unit,
  subtext,
  subtextColor = 'secondary',
  icon,
  iconColor = 'secondary',
  borderHover = 'secondary',
  className = '',
  children,
}) {
  const iconColorMap = {
    primary: 'text-[#c3c0ff]',
    secondary: 'text-[#4cd7f6]',
    tertiary: 'text-[#d0bcff]',
  };
  const subtextColorMap = {
    primary: 'text-[#c3c0ff]',
    secondary: 'text-[#4cd7f6]',
    tertiary: 'text-[#d0bcff]',
    muted: 'text-[#c7c4d8]',
  };
  const hoverBorderMap = {
    primary: 'hover:border-[#c3c0ff]/40',
    secondary: 'hover:border-[#4cd7f6]/40',
    tertiary: 'hover:border-[#d0bcff]/40',
    white: 'hover:border-white/20',
  };

  return (
    <GlassCard
      className={`flex flex-col justify-between group transition-colors ${hoverBorderMap[borderHover]} ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#c7c4d8] font-bold text-[10px] tracking-[0.1em] uppercase font-[Inter]">
          {label}
        </span>
        {icon && (
          <span className={`material-symbols-outlined group-hover:scale-110 transition-transform ${iconColorMap[iconColor]}`}>
            {icon}
          </span>
        )}
      </div>
      <div>
        <p className="font-[Sora] text-[32px] font-bold text-white leading-none">
          {value}
          {unit && <span className="text-lg font-normal ml-1 text-[#c7c4d8]">{unit}</span>}
        </p>
        {subtext && (
          <p className={`text-xs mt-1 font-medium ${subtextColorMap[subtextColor]}`}>
            {subtext}
          </p>
        )}
      </div>
      {children}
    </GlassCard>
  );
}
