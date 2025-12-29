import { Skeleton, GridSkeleton } from '../../components/ui/Skeleton'

export const OffersSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-8 w-40 mx-auto mb-4 rounded-full" />
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-[500px] mx-auto" />
        </div>

        {/* Offer Cards Skeleton */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-xl p-8">
              <Skeleton className="h-16 w-16 mx-auto mb-4 rounded-full" />
              <Skeleton className="h-6 w-48 mx-auto mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6 mx-auto mb-4" />
              <Skeleton className="h-8 w-24 mx-auto rounded-full" />
            </div>
          ))}
        </div>

        {/* Banner Skeleton */}
        <Skeleton className="h-64 rounded-2xl mb-12" />

        {/* Packages Section Skeleton */}
        <div className="mb-6">
          <Skeleton className="h-8 w-64 mb-6" />
        </div>
        <GridSkeleton count={3} />
      </div>
    </div>
  )
}