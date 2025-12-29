import { Skeleton, GridSkeleton } from '../../components/ui/Skeleton'

export const TravelStyleListSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-[500px] mx-auto" />
        </div>

        {/* Grid Skeleton */}
        <GridSkeleton count={6} />
      </div>
    </div>
  )
}

export const TravelStyleDetailSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb Skeleton */}
        <Skeleton className="h-4 w-64 mb-6" />

        {/* Hero Image Skeleton */}
        <Skeleton className="h-96 rounded-2xl mb-8" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <Skeleton key={i} className="h-16 rounded-lg" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <Skeleton key={i} className="h-8 w-24 rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex justify-between py-3 border-b">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}