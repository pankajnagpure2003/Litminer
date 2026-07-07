// Pagination component
export default function Pagination({ page, total, limit, onChange }) {
  const totalPages = Math.ceil(total / limit);
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center disabled:opacity-30 hover:bg-white/10 transition-colors"
      >
        <span className="material-symbols-outlined text-[#c7c4d8] text-sm">chevron_left</span>
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-8 h-8 rounded-lg text-xs font-bold font-[Inter] transition-colors ${
            p === page
              ? 'bg-[#4f46e5] text-[#dad7ff]'
              : 'bg-white/5 border border-white/10 text-[#c7c4d8] hover:bg-white/10'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center disabled:opacity-30 hover:bg-white/10 transition-colors"
      >
        <span className="material-symbols-outlined text-[#c7c4d8] text-sm">chevron_right</span>
      </button>
    </div>
  );
}
