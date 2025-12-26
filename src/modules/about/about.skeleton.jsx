import { Skeleton } from '../../components/ui/Skeleton'

export const AboutSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Skeleton */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-5/6 mx-auto" />
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Skeleton className="h-10 w-64 mx-auto mb-8" />
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-5/6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                <Skeleton className="h-6 w-48 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}