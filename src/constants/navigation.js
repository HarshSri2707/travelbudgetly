import { ROUTES } from './routes'

export const NAV_ITEMS = [
  {
    label: 'Home',
    path: ROUTES.HOME,
  },
  {
    label: 'About Us',
    path: ROUTES.ABOUT,
  },
  {
    label: 'Destinations',
    path: ROUTES.DESTINATIONS,
    dropdown: [
      { label: 'Asia', path: '/destinations?region=asia' },
      { label: 'Europe', path: '/destinations?region=europe' },
      { label: 'India', path: '/destinations?country=india' },
      { label: 'Dubai', path: '/destinations?country=dubai' },
    ]
  },
  {
    label: 'Travel Style',
    path: ROUTES.TRAVEL_STYLE,
    dropdown: [
      { label: 'Adventure', path: '/travel-style/adventure' },
      { label: 'Honeymoon', path: '/travel-style/honeymoon' },
      { label: 'Solo Travel', path: '/travel-style/solo' },
      { label: 'Backpacking', path: '/travel-style/backpacking' },
      { label: 'Luxury', path: '/travel-style/luxury' },
    ]
  },
  {
    label: 'Offbeat Travel',
    path: ROUTES.OFFBEAT,
  },
  {
    label: 'Popular Places',
    path: ROUTES.POPULAR_PLACES,
  },
  {
    label: 'Travel Guide',
    path: ROUTES.TRAVEL_GUIDE,
    dropdown: [
      { label: 'Best Time to Visit', path: '/travel-guide?topic=best-time' },
      { label: 'Food & Cuisine', path: '/travel-guide?topic=food' },
      { label: 'Stay Recommendations', path: '/travel-guide?topic=stay' },
      { label: 'How to Reach', path: '/travel-guide?topic=transport' },
    ]
  },
  {
    label: 'Packages',
    path: ROUTES.PACKAGES,
    dropdown: [
      { label: 'Under ₹10,000', path: '/packages/under-10k' },
      { label: '₹10,000 - ₹20,000', path: '/packages/10k-20k' },
      { label: '₹20,000 - ₹40,000', path: '/packages/20k-40k' },
      { label: 'Above ₹40,000', path: '/packages/above-40k' },
    ]
  },
  {
    label: 'Offers & Deals',
    path: ROUTES.OFFERS,
  },
  {
    label: 'Blogs',
    path: ROUTES.BLOGS,
  },
  {
    label: 'Contact',
    path: ROUTES.CONTACT,
  },
]