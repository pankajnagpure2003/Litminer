// ErrorState component
import { motion } from 'framer-motion';

export default function ErrorState({
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  onRetry,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-red-400 text-4xl">error</span>
      </div>
      <h3 className="font-[Sora] text-xl font-semibold text-[#e5e1e4] mb-2">{title}</h3>
      <p className="text-[#c7c4d8] text-sm max-w-xs mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 border border-[#918fa1] text-[#e5e1e4] rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-white/5 transition-all active:scale-95"
        >
          Try Again
        </button>
      )}
    </motion.div>
  );
}
