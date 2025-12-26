import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { GridSkeleton } from '../components/ui/Skeleton'
import { ROUTES } from '../constants/routes'

// Lazy load all route components
const HomeRoute = lazy(() => import('./HomeRoute'))
const AboutRoute = lazy(() => import('./AboutRoute'))
const DestinationsRoute = lazy(() => import('./DestinationsRoute'))
const DestinationDetailRoute = lazy(() => import('./DestinationDetailRoute'))
// const TravelStyleRoute = lazy(() => import('./TravelStyleRoute'))
// const OffbeatRoute = lazy(() => import('./OffbeatRoute'))
// const PopularPlacesRoute = lazy(() => import('./PopularPlacesRoute'))
// const TravelGuideRoute = lazy(() => import('./TravelGuideRoute'))
// const PackagesRoute = lazy(() => import('./PackagesRoute'))
// const OffersRoute = lazy(() => import('./OffersRoute'))
// const BlogsRoute = lazy(() => import('./BlogsRoute'))
// const BlogDetailRoute = lazy(() => import('./BlogDetailRoute'))
// const ContactRoute = lazy(() => import('./ContactRoute'))

// Page-level skeleton
const PageSkeleton = () => (
  <div className="min-h-screen pt-20 pb-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <GridSkeleton count={6} />
      </div>
    </div>
  </div>
)

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomeRoute />} />
        <Route path={ROUTES.ABOUT} element={<AboutRoute />} />
       <Route path={ROUTES.DESTINATIONS} element={<DestinationsRoute />} />
        <Route path={ROUTES.DESTINATION_DETAIL} element={<DestinationDetailRoute />} />
          {/*<Route path={ROUTES.TRAVEL_STYLE} element={<TravelStyleRoute />} />
        <Route path={ROUTES.TRAVEL_STYLE_DETAIL} element={<TravelStyleRoute />} />
        <Route path={ROUTES.OFFBEAT} element={<OffbeatRoute />} />
        <Route path={ROUTES.POPULAR_PLACES} element={<PopularPlacesRoute />} />
        <Route path={ROUTES.TRAVEL_GUIDE} element={<TravelGuideRoute />} />
        <Route path={ROUTES.PACKAGES} element={<PackagesRoute />} />
        <Route path={ROUTES.PACKAGES_BY_BUDGET} element={<PackagesRoute />} />
        <Route path={ROUTES.OFFERS} element={<OffersRoute />} />
        <Route path={ROUTES.BLOGS} element={<BlogsRoute />} />
        <Route path={ROUTES.BLOG_DETAIL} element={<BlogDetailRoute />} />
        <Route path={ROUTES.BLOG_CATEGORY} element={<BlogsRoute />} />
        <Route path={ROUTES.CONTACT} element={<ContactRoute />} /> */}
      </Routes>
    </Suspense>
  )
}