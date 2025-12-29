import { Skeleton, GridSkeleton } from '../../components/ui/Skeleton'

export const PackageSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-64 mx-auto" />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <Skeleton className="h-5 w-40 mb-4" />
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map(i => (
              <Skeleton key={i} className="h-10 w-32 rounded-full" />
            ))}
          </div>
        </div>

        <Skeleton className="h-5 w-48 mb-6" />
        <GridSkeleton count={6} />
      </div>
    </div>
  )
}