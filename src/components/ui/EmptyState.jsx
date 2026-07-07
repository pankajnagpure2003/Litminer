// EmptyState component
import { motion } from 'framer-motion';

export default function EmptyState({
  icon = 'inbox',
  title = 'Nothing here yet',
  message = 'Data will appear here once available.',
  action,
  actionLabel,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-[#c3c0ff]/10 border border-[#c3c0ff]/20 flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-[#c3c0ff] text-4xl">{icon}</span>
      </div>
      <h3 className="font-[Sora] text-xl font-semibold text-[#e5e1e4] mb-2">{title}</h3>
      <p className="text-[#c7c4d8] text-sm max-w-xs mb-6">{message}</p>
      {action && (
        <button
          onClick={action}
          className="px-6 py-3 bg-[#4f46e5] text-[#dad7ff] rounded-lg font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all active:scale-95"
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  );
}
