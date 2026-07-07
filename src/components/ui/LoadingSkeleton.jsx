// Loading skeleton shimmer animation
export function SkeletonBlock({ className = '' }) {
  return (
    <div className={`animate-pulse bg-white/5 rounded-lg ${className}`} />
  );
}

export function StatCardSkeleton() {
  return (
    <div className="bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border border-white/10 rounded-xl p-6">
      <div className="flex justify-between mb-3">
        <SkeletonBlock className="h-3 w-24" />
        <SkeletonBlock className="h-6 w-6 rounded" />
      </div>
      <SkeletonBlock className="h-8 w-32 mb-2" />
      <SkeletonBlock className="h-3 w-20" />
    </div>
  );
}

export function TableRowSkeleton({ cols = 5 }) {
  return (
    <tr>
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="px-6 py-4">
          <SkeletonBlock className="h-4 w-full" />
        </td>
      ))}
    </tr>
  );
}

export function CardSkeleton({ className = '' }) {
  return (
    <div className={`bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border border-white/10 rounded-xl p-6 ${className}`}>
      <SkeletonBlock className="h-4 w-3/4 mb-4" />
      <SkeletonBlock className="h-3 w-full mb-2" />
      <SkeletonBlock className="h-3 w-5/6" />
    </div>
  );
}
