export function LoadingSpinner({ size = 'md', color = 'primary' }) {
  const sizeMap = { sm: 'w-4 h-4 border-2', md: 'w-8 h-8 border-2', lg: 'w-12 h-12 border-[3px]', xl: 'w-16 h-16 border-4' };
  const colorMap = { primary: 'border-[#c3c0ff]', secondary: 'border-[#4cd7f6]', white: 'border-white' };
  return (
    <div className={`${sizeMap[size]} ${colorMap[color]} border-t-transparent rounded-full animate-spin`} />
  );
}

export function GlobalLoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-[#09090B] flex flex-col items-center justify-center z-[9999] gap-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#c3c0ff]/20 rounded-full" />
        <div className="absolute inset-0 w-16 h-16 border-4 border-[#c3c0ff] border-t-transparent rounded-full animate-spin" />
        <div className="absolute inset-2 w-12 h-12 border-4 border-[#4cd7f6]/20 rounded-full" />
        <div className="absolute inset-2 w-12 h-12 border-4 border-[#4cd7f6] border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
      </div>
      <p className="text-[#c7c4d8] font-[Inter] text-xs tracking-[0.2em] uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
}
