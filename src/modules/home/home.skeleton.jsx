import { Skeleton, GridSkeleton } from '../../components/ui/Skeleton'

export const HomeSkeleton = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Skeleton */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Skeleton className="h-16 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-48 rounded-lg" />
                <Skeleton className="h-12 w-48 rounded-lg" />
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <Skeleton className="h-10 w-20 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div>
                  <Skeleton className="h-10 w-20 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div>
                  <Skeleton className="h-10 w-20 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Skeleton className="h-64 rounded-2xl" />
                <Skeleton className="h-48 rounded-2xl" />
              </div>
              <div className="space-y-4 pt-8">
                <Skeleton className="h-48 rounded-2xl" />
                <Skeleton className="h-64 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Skeleton */}
      <div className="bg-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
      </div>

      {/* Trust Badges Skeleton */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-12 w-12 mx-auto mb-2 rounded-full" />
                <Skeleton className="h-4 w-24 mx-auto mb-1" />
                <Skeleton className="h-3 w-20 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Skeleton */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-64 mx-auto" />
          </div>
          <GridSkeleton count={6} />
        </div>
      </section>

      {/* Packages Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-64 mx-auto" />
          </div>
          <GridSkeleton count={3} />
        </div>
      </section>
    </div>
  )
}