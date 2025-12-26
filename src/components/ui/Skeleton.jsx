export const Skeleton = ({ className = '', variant = 'default', ...props }) => {
  const variants = {
    default: 'bg-gray-200',
    circular: 'bg-gray-200 rounded-full',
    text: 'bg-gray-200 rounded h-4',
    card: 'bg-gray-200 rounded-lg',
  }

  return (
    <div
      className={`animate-pulse relative overflow-hidden ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
  )
}

export const CardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Skeleton className="w-full h-48" variant="default" />
    <div className="p-4 space-y-3">
      <Skeleton className="h-6 w-3/4" variant="text" />
      <Skeleton className="h-4 w-full" variant="text" />
      <Skeleton className="h-4 w-5/6" variant="text" />
      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-6 w-20" variant="text" />
        <Skeleton className="h-8 w-24 rounded-full" variant="default" />
      </div>
    </div>
  </div>
)

export const GridSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
)