export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  DESTINATIONS: '/destinations',
  DESTINATION_DETAIL: '/destinations/:slug',
  TRAVEL_STYLE: '/travel-style',
  TRAVEL_STYLE_DETAIL: '/travel-style/:type',
  OFFBEAT: '/offbeat-travel',
  POPULAR_PLACES: '/popular-places',
  TRAVEL_GUIDE: '/travel-guide',
  PACKAGES: '/packages',
  PACKAGES_BY_BUDGET: '/packages/:budget',
  OFFERS: '/offers-and-deals',
  BLOGS: '/blogs',
  BLOG_DETAIL: '/blogs/:slug',
  BLOG_CATEGORY: '/blogs/category/:category',
  CONTACT: '/contact',
}

export const buildRoute = (route, params = {}) => {
  let path = route
  Object.entries(params).forEach(([key, value]) => {
    path = path.replace(`:${key}`, value)
  })
  return path
}