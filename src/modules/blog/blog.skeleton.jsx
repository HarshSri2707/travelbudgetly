// import { Skeleton, GridSkeleton } from '../../components/ui/Skeleton'

// export const BlogListSkeleton = () => {
//   return (
//     <div className="min-h-screen pt-24 pb-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header Skeleton */}
//         <div className="text-center mb-12">
//           <Skeleton className="h-12 w-64 mx-auto mb-4" />
//           <Skeleton className="h-6 w-96 mx-auto" />
//         </div>

//         {/* Category Filters Skeleton */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <Skeleton className="h-5 w-40 mb-4" />
//           <div className="flex flex-wrap gap-3">
//             {[1, 2, 3, 4, 5].map(i => (
//               <Skeleton key={i} className="h-10 w-32 rounded-full" />
//             ))}
//           </div>
//         </div>

//         {/* Results Count Skeleton */}
//         <Skeleton className="h-5 w-48 mb-6" />

//         {/* Grid Skeleton */}
//         <GridSkeleton count={6} />
//       </div>
//     </div>
//   )
// }

// export const BlogDetailSkeleton = () => {
//   return (
//     <div className="min-h-screen pt-24 pb-12 bg-gray-50">
//       <article className="max-w-4xl mx-auto px-4">
//         {/* Breadcrumb Skeleton */}
//         <Skeleton className="h-4 w-64 mb-6" />

//         {/* Header Skeleton */}
//         <header className="mb-8">
//           <Skeleton className="h-6 w-32 rounded-full mb-4" />
//           <Skeleton className="h-12 w-full mb-2" />
//           <Skeleton className="h-12 w-3/4 mb-6" />
//           <div className="flex gap-4">
//             <Skeleton className="h-5 w-24" />
//             <Skeleton className="h-5 w-32" />
//             <Skeleton className="h-5 w-20" />
//           </div>

//           {/* Summary Box Skeleton */}
//           <div className="bg-gray-100 rounded-xl p-6 mt-6">
//             <Skeleton className="h-6 w-32 mb-4" />
//             <div className="grid grid-cols-2 gap-4">
//               {[1, 2, 3, 4].map(i => (
//                 <div key={i}>
//                   <Skeleton className="h-4 w-20 mb-1" />
//                   <Skeleton className="h-5 w-32" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </header>

//         {/* Featured Image Skeleton */}
//         <Skeleton className="h-96 rounded-2xl mb-8" />

//         {/* Content Skeleton */}
//         <div className="bg-white rounded-xl shadow-md p-12 mb-12">
//           <div className="space-y-4">
//             <Skeleton className="h-5 w-full" />
//             <Skeleton className="h-5 w-full" />
//             <Skeleton className="h-5 w-5/6" />
//             <Skeleton className="h-8 w-48 mt-8" />
//             <Skeleton className="h-5 w-full" />
//             <Skeleton className="h-5 w-full" />
//             <Skeleton className="h-5 w-4/6" />
//           </div>
//         </div>

//         {/* Author Card Skeleton */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-12">
//           <div className="flex gap-4">
//             <Skeleton className="w-16 h-16 rounded-full" />
//             <div className="flex-1">
//               <Skeleton className="h-6 w-32 mb-2" />
//               <Skeleton className="h-4 w-full mb-1" />
//               <Skeleton className="h-4 w-5/6" />
//             </div>
//           </div>
//         </div>
//       </article>
//     </div>
//   )
// }


import { Skeleton } from '../../components/ui/Skeleton'

/* ─── Blog List Page Skeleton ─────────────────────────────────── */
export const BlogListSkeleton = () => (
  <div className="min-h-screen pt-24 pb-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">

      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-10 w-52 mb-3" />
        <Skeleton className="h-5 w-80" />
      </div>

      {/* Hero block */}
      <div className="mb-10">
        <Skeleton className="h-4 w-20 mb-4" />
        <div className="flex gap-4 h-[320px]">
          <Skeleton className="flex-[3] rounded-2xl" />
          <div className="flex-[1.1] flex flex-col gap-3">
            {[1, 2, 3, 4].map(i => <Skeleton key={i} className="flex-1 rounded-xl" />)}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-100 pb-3 mb-8">
        {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} className="h-4 w-20" />)}
      </div>

      {/* List + sidebar */}
      <div className="flex gap-12">
        <div className="flex-[2] space-y-6">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex gap-5 animate-pulse">
              <Skeleton className="w-[200px] h-[130px] rounded-xl flex-shrink-0" />
              <div className="flex-1 space-y-3 py-1">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-6 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-[1] hidden lg:block space-y-5">
          <Skeleton className="h-5 w-32 mb-5" />
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex gap-3">
              <Skeleton className="w-8 h-7 flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
          <Skeleton className="w-full h-[180px] rounded-2xl mt-6" />
        </div>
      </div>

    </div>
  </div>
)

/* ─── Blog Detail Page Skeleton ───────────────────────────────── */
export const BlogDetailSkeleton = () => (
  <div className="min-h-screen pt-24 pb-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <Skeleton className="h-7 w-36 mb-6" />

      <div className="flex gap-12">
        {/* Article */}
        <div className="flex-[2] min-w-0 space-y-4">
          <Skeleton className="w-full h-[380px] rounded-2xl" />
          <Skeleton className="h-3 w-48" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-10 w-1/2" />
          <div className="space-y-3 pt-2">
            {[...Array(10)].map((_, i) => (
              <Skeleton key={i} className={`h-4 ${i % 4 === 3 ? 'w-4/5' : 'w-full'}`} />
            ))}
          </div>
          <Skeleton className="w-full h-[140px] rounded-2xl mt-6" />
          <div className="pt-4">
            <Skeleton className="h-6 w-32 mb-5" />
            <div className="grid grid-cols-3 gap-5">
              {[1, 2, 3].map(i => (
                <div key={i}>
                  <Skeleton className="w-full h-[150px] rounded-xl mb-3" />
                  <Skeleton className="h-4 w-4/5 mb-1" />
                  <Skeleton className="h-3 w-3/5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex-[1] hidden lg:block space-y-6">
          <Skeleton className="w-full h-[130px] rounded-2xl" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            {[1, 2, 3].map(i => (
              <div key={i} className="flex gap-3">
                <Skeleton className="w-16 h-16 rounded-xl flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/3" />
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-7 w-24 rounded-full" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)