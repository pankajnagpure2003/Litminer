// GlassCard — the core glassmorphism container from the Stitch design
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hoverLift = false,
  neonColor = null, // 'primary' | 'secondary'
  onClick,
  padding = 'p-6',
}) {
  const neonShadow =
    neonColor === 'primary'
      ? 'hover:shadow-[0_0_20px_rgba(195,192,255,0.2)]'
      : neonColor === 'secondary'
      ? 'hover:shadow-[0_0_20px_rgba(76,215,246,0.2)]'
      : '';

  return (
    <motion.div
      whileHover={hoverLift ? { y: -8 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`
        bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px]
        border border-white/10
        rounded-xl
        ${padding}
        ${neonShadow}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
