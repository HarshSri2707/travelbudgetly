import { Skeleton, GridSkeleton } from '../../components/ui/Skeleton'

export const BlogListSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Category Filters Skeleton */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <Skeleton className="h-5 w-40 mb-4" />
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5].map(i => (
              <Skeleton key={i} className="h-10 w-32 rounded-full" />
            ))}
          </div>
        </div>

        {/* Results Count Skeleton */}
        <Skeleton className="h-5 w-48 mb-6" />

        {/* Grid Skeleton */}
        <GridSkeleton count={6} />
      </div>
    </div>
  )
}

export const BlogDetailSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <article className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb Skeleton */}
        <Skeleton className="h-4 w-64 mb-6" />

        {/* Header Skeleton */}
        <header className="mb-8">
          <Skeleton className="h-6 w-32 rounded-full mb-4" />
          <Skeleton className="h-12 w-full mb-2" />
          <Skeleton className="h-12 w-3/4 mb-6" />
          <div className="flex gap-4">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-20" />
          </div>

          {/* Summary Box Skeleton */}
          <div className="bg-gray-100 rounded-xl p-6 mt-6">
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i}>
                  <Skeleton className="h-4 w-20 mb-1" />
                  <Skeleton className="h-5 w-32" />
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Image Skeleton */}
        <Skeleton className="h-96 rounded-2xl mb-8" />

        {/* Content Skeleton */}
        <div className="bg-white rounded-xl shadow-md p-12 mb-12">
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-8 w-48 mt-8" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/6" />
          </div>
        </div>

        {/* Author Card Skeleton */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <div className="flex gap-4">
            <Skeleton className="w-16 h-16 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}