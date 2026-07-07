// ProgressBar component matching Stitch design
export default function ProgressBar({
  value = 0, // 0-100
  color = 'primary', // 'primary' | 'secondary' | 'tertiary' | 'gradient'
  height = 'h-1',
  showLabel = false,
  className = '',
  animated = false,
}) {
  const colorMap = {
    primary: 'bg-[#c3c0ff] shadow-[0_0_10px_rgba(195,192,255,0.5)]',
    secondary: 'bg-[#4cd7f6] shadow-[0_0_10px_rgba(76,215,246,0.5)]',
    tertiary: 'bg-[#d0bcff] shadow-[0_0_10px_rgba(208,188,255,0.5)]',
    gradient: 'bg-gradient-to-r from-[#c3c0ff] to-[#4cd7f6]',
  };

  return (
    <div className={`relative ${className}`}>
      {showLabel && (
        <span className="absolute right-0 -top-5 text-[10px] font-bold font-[JetBrains_Mono] text-[#e5e1e4]">
          {Math.round(value)}%
        </span>
      )}
      <div className={`w-full ${height} bg-[#201f22] rounded-full overflow-hidden`}>
        <div
          className={`h-full rounded-full transition-all duration-700 ${colorMap[color]} ${animated ? 'relative' : ''}`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        >
          {animated && (
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}
