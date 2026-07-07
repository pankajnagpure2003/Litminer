// Badge — pill-shaped status indicator matching Stitch design
const statusMap = {
  Confirmed: { bg: 'bg-[#4cd7f6]/10', text: 'text-[#4cd7f6]', border: 'border-[#4cd7f6]/20', dot: 'bg-[#4cd7f6]' },
  Success: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', dot: 'bg-emerald-500' },
  Processing: { bg: 'bg-[#c3c0ff]/10', text: 'text-[#c3c0ff]', border: 'border-[#c3c0ff]/20', dot: 'bg-[#c3c0ff]' },
  Pending: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', dot: 'bg-amber-500' },
  Failed: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30', dot: 'bg-red-500' },
  Active: { bg: 'bg-[#4cd7f6]/10', text: 'text-[#4cd7f6]', border: 'border-[#4cd7f6]/20', dot: 'bg-[#4cd7f6]' },
  Inactive: { bg: 'bg-white/5', text: 'text-[#c7c4d8]', border: 'border-white/10', dot: 'bg-[#c7c4d8]' },
  Completed: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', dot: 'bg-emerald-500' },
  'In Progress': { bg: 'bg-[#c3c0ff]/10', text: 'text-[#c3c0ff]', border: 'border-[#c3c0ff]/20', dot: 'bg-[#c3c0ff]' },
  Claimed: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', dot: 'bg-emerald-500' },
};

export default function Badge({ status, className = '', pulse = false }) {
  const style = statusMap[status] || statusMap['Inactive'];
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1
        rounded-full border text-[10px] font-bold uppercase tracking-wider
        font-[Inter]
        ${style.bg} ${style.text} ${style.border}
        ${pulse ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}
