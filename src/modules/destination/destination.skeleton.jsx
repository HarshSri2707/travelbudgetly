// import { Skeleton, GridSkeleton } from '../../components/ui/Skeleton'

// export const DestinationListSkeleton = () => {
//   return (
//     <div className="min-h-screen pt-24 pb-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header Skeleton */}
//         <div className="text-center mb-12">
//           <Skeleton className="h-12 w-96 mx-auto mb-4" />
//           <Skeleton className="h-6 w-64 mx-auto" />
//         </div>

//         {/* Filters Skeleton */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <Skeleton className="h-5 w-32 mb-3" />
//               <div className="flex gap-2">
//                 {[1, 2, 3, 4].map(i => (
//                   <Skeleton key={i} className="h-10 w-24 rounded-full" />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Skeleton className="h-5 w-32 mb-3" />
//               <div className="flex gap-2">
//                 {[1, 2, 3, 4].map(i => (
//                   <Skeleton key={i} className="h-10 w-32 rounded-full" />
//                 ))}
//               </div>
//             </div>
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

// export const DestinationDetailSkeleton = () => {
//   return (
//     <div className="min-h-screen pt-24 pb-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Breadcrumb Skeleton */}
//         <Skeleton className="h-4 w-64 mb-6" />

//         {/* Hero Image Skeleton */}
//         <Skeleton className="h-96 rounded-2xl mb-8" />

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Content Skeleton */}
//           <div className="lg:col-span-2 space-y-8">
//             <div className="bg-white rounded-xl shadow-md p-8">
//               <Skeleton className="h-8 w-48 mb-4" />
//               <Skeleton className="h-5 w-full mb-2" />
//               <Skeleton className="h-5 w-5/6 mb-2" />
//               <Skeleton className="h-5 w-4/6 mb-6" />
              
//               <div className="grid grid-cols-2 gap-4">
//                 <Skeleton className="h-24 rounded-lg" />
//                 <Skeleton className="h-24 rounded-lg" />
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-8">
//               <Skeleton className="h-8 w-48 mb-4" />
//               <div className="grid md:grid-cols-2 gap-4">
//                 {[1, 2, 3, 4].map(i => (
//                   <Skeleton key={i} className="h-20 rounded-lg" />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar Skeleton */}
//           <div>
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <Skeleton className="h-6 w-32 mb-4" />
//               <div className="space-y-4">
//                 {[1, 2, 3, 4].map(i => (
//                   <div key={i} className="flex justify-between py-3 border-b">
//                     <Skeleton className="h-5 w-24" />
//                     <Skeleton className="h-5 w-20" />
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 space-y-3">
//                 <Skeleton className="h-12 w-full rounded-lg" />
//                 <Skeleton className="h-12 w-full rounded-lg" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { Skeleton } from '../../components/ui/Skeleton'

/* ── Single destination card skeleton ── */
const DestCardSkeleton = () => (
  <div className="animate-pulse">
    {/* image area */}
    <div className="h-[155px] rounded-xl bg-gray-200 mb-3" />
    {/* name */}
    <div className="h-3.5 bg-gray-200 rounded w-3/4 mb-2" />
    {/* excerpt lines */}
    <div className="h-2.5 bg-gray-200 rounded w-full mb-1.5" />
    <div className="h-2.5 bg-gray-200 rounded w-5/6 mb-3" />
    {/* nights + tour type */}
    <div className="h-2.5 bg-gray-200 rounded w-1/2 mb-1.5" />
    {/* includes label */}
    <div className="h-2.5 bg-gray-200 rounded w-16 mb-1.5" />
    {/* icons row */}
    <div className="flex gap-2 mb-3">
      {[1, 2, 3, 4].map(i => <div key={i} className="w-4 h-4 rounded bg-gray-200" />)}
    </div>
    {/* price + view details */}
    <div className="flex justify-between items-center">
      <div className="h-3.5 bg-gray-200 rounded w-16" />
      <div className="h-3.5 bg-gray-200 rounded w-16" />
    </div>
  </div>
)

/* ── Single blog card skeleton ── */
const BlogCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-[140px] rounded-xl bg-gray-200 mb-3" />
    <div className="h-3.5 bg-gray-200 rounded w-full mb-1.5" />
    <div className="h-3.5 bg-gray-200 rounded w-4/5 mb-3" />
    <div className="flex justify-between items-center">
      <div className="h-3 bg-gray-200 rounded w-24" />
      <div className="w-7 h-7 rounded-full bg-gray-200" />
    </div>
  </div>
)

/* ════════════════════════════════════════════════════════════
   DESTINATION LIST SKELETON
   Matches: sidebar + 3-col card grid + newsletter + blogs
════════════════════════════════════════════════════════════ */
export const DestinationListSkeleton = () => (
  <div className="min-h-screen pt-24 pb-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex gap-6 lg:gap-8">

        {/* sidebar skeleton */}
        <aside className="hidden lg:flex flex-col gap-3 w-[210px] flex-shrink-0 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-16 mb-2" />
          {/* dropdowns */}
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-11 bg-gray-200 rounded-xl" />
          ))}
          {/* price range */}
          <div className="h-3 bg-gray-200 rounded w-24 mt-2" />
          <div className="h-2 bg-gray-200 rounded-full w-full" />
          {/* apply btn */}
          <div className="h-11 bg-gray-200 rounded-full" />
          {/* need help */}
          <div className="h-24 bg-gray-100 rounded-2xl mt-1" />
        </aside>

        {/* right content skeleton */}
        <div className="flex-1 min-w-0 animate-pulse">
          {/* label */}
          <div className="h-2.5 bg-gray-200 rounded w-28 mb-2" />
          {/* title */}
          <div className="h-8 bg-gray-200 rounded w-64 mb-2" />
          {/* subtitle */}
          <div className="h-3.5 bg-gray-200 rounded w-96 mb-1.5" />
          <div className="h-3.5 bg-gray-200 rounded w-80 mb-6" />

          {/* tab pills */}
          <div className="flex gap-2 mb-6">
            {[80, 56, 110, 90, 72, 64].map((w, i) => (
              <div key={i} className={`h-7 rounded-full bg-gray-200`} style={{ width: w }} />
            ))}
          </div>

          {/* cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <DestCardSkeleton key={i} />
            ))}
          </div>

          {/* newsletter block */}
          <div className="mt-12 h-36 bg-gray-200 rounded-2xl" />

          {/* blogs */}
          <div className="mt-12">
            <div className="h-6 bg-gray-200 rounded w-32 mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[1, 2, 3].map(i => <BlogCardSkeleton key={i} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

/* ════════════════════════════════════════════════════════════
   DESTINATION DETAIL SKELETON
   Matches: hero + thumbnail strip + 2-col + newsletter
════════════════════════════════════════════════════════════ */
export const DestinationDetailSkeleton = () => (
  <div className="min-h-screen pt-20 pb-16 bg-white">
    <div className="max-w-5xl mx-auto px-4 md:px-6 animate-pulse">

      {/* breadcrumb */}
      <div className="h-3 bg-gray-200 rounded w-48 mb-4" />

      {/* hero image */}
      <div className="h-64 md:h-[380px] rounded-2xl bg-gray-200 mb-3" />

      {/* thumbnail strip */}
      <div className="flex gap-2 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-16 h-12 rounded-lg bg-gray-200 shrink-0" />
        ))}
      </div>

      {/* 2-col */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* left */}
        <div className="lg:col-span-2 space-y-5">
          {/* overview card */}
          <div className="border border-gray-100 rounded-2xl p-6 space-y-3">
            <div className="h-2.5 bg-gray-200 rounded w-24" />
            <div className="h-9 bg-gray-200 rounded w-48" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
            <div className="h-5 bg-gray-200 rounded w-36 mt-2" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-4/5" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-3/4" />
          </div>

          {/* highlights card */}
          <div className="border border-gray-100 rounded-2xl p-6">
            <div className="h-5 bg-gray-200 rounded w-48 mb-5" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-gray-200 shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3.5 bg-gray-200 rounded w-3/4" />
                    <div className="h-2.5 bg-gray-200 rounded w-full" />
                    <div className="h-2.5 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right — booking card */}
        <div className="space-y-4">
          <div className="border border-gray-100 rounded-2xl p-5 space-y-4">
            {/* price */}
            <div className="space-y-1.5">
              <div className="h-2.5 bg-gray-200 rounded w-10" />
              <div className="h-8 bg-gray-200 rounded w-28" />
            </div>
            {/* check in */}
            <div className="pb-4 border-b border-gray-100 space-y-1.5">
              <div className="h-2.5 bg-gray-200 rounded w-20" />
              <div className="h-3.5 bg-gray-200 rounded w-36" />
            </div>
            {/* guests */}
            <div className="pb-4 border-b border-gray-100 space-y-1.5">
              <div className="h-2.5 bg-gray-200 rounded w-14" />
              <div className="h-3.5 bg-gray-200 rounded w-28" />
            </div>
            {/* btn */}
            <div className="h-12 bg-gray-200 rounded-xl" />
            {/* trust */}
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-gray-200" />
                <div className="h-2.5 bg-gray-200 rounded w-28" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-gray-200" />
                <div className="h-2.5 bg-gray-200 rounded w-32" />
              </div>
            </div>
          </div>
          {/* map */}
          <div className="h-36 bg-gray-200 rounded-2xl" />
        </div>

      </div>

      {/* newsletter */}
      <div className="mt-12 h-36 bg-gray-200 rounded-2xl" />
    </div>
  </div>
)