import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-[#c3c0ff] text-[#1d00a5] hover:shadow-[0_0_25px_rgba(195,192,255,0.4)] active:scale-95',
  primaryContainer: 'bg-[#4f46e5] text-[#dad7ff] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95',
  secondary: 'bg-[#4cd7f6] text-[#003640] hover:shadow-[0_0_20px_rgba(76,215,246,0.4)] active:scale-95',
  glass: 'bg-white/5 border border-white/10 text-[#e5e1e4] backdrop-blur-md hover:bg-white/10 active:scale-95',
  ghost: 'text-[#e5e1e4] hover:text-[#c3c0ff] transition-colors',
  outline: 'border border-[#918fa1] text-[#e5e1e4] hover:bg-white/5 active:scale-95',
  danger: 'bg-[#93000a] text-[#ffdad6] hover:bg-red-900/80 active:scale-95',
};

const sizes = {
  xs: 'px-3 py-1 text-[10px] rounded-md',
  sm: 'px-4 py-2 text-xs rounded-lg',
  md: 'px-6 py-3 text-sm rounded-lg',
  lg: 'px-10 py-4 text-sm rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconRight,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  fullWidth = false,
}) {
  return (
    <motion.button
      type={type}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        font-bold tracking-wider uppercase font-[Inter] transition-all duration-300
        flex items-center justify-center gap-2 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : icon ? (
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      ) : null}
      {children}
      {iconRight && !loading && (
        <span className="material-symbols-outlined text-[18px]">{iconRight}</span>
      )}
    </motion.button>
  );
}
