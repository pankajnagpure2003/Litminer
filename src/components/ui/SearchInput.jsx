// SearchInput component matching Stitch design
export default function SearchInput({ value, onChange, placeholder = 'Search...', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c7c4d8] text-sm">
        search
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#0e0e10] border border-white/10 rounded-lg pl-10 pr-4 py-2.5
          text-[#e5e1e4] text-sm font-[JetBrains_Mono]
          placeholder:text-[#c7c4d8]/40
          focus:outline-none focus:border-[#4cd7f6] focus:shadow-[0_0_10px_rgba(76,215,246,0.1)]
          transition-all"
      />
    </div>
  );
}
