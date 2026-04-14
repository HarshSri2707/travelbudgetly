/* ═══════════════════════════════════════════════════════
   home.data.js  —  All static data for the HomePage
   ═══════════════════════════════════════════════════════ */

export const HERO_IMAGE = {
  mobile:  '/Mobile.png',
  tablet:  '/tablet.png',
  desktop: '/Desktop.png',
  laptop:  '/Laptop.png',
}


// export const DESTINATIONS = [
//   {
//     id: 1,
//     slug: 'paris',
//     name: 'Paris, France',
//     image: '/eiffel-tower-paris-france_700955-2195.avif',
//     thumbnail: '/eiffel-tower-paris-france_700955-2195.avif',
//     rating: 4.9,
//     price: 89000,
//     duration: '6N/7D',
//     description: 'Romance, art, and the Eiffel Tower await you.',
//   },
//   {
//     id: 2,
//     slug: 'lapland',
//     name: 'Lapland, Finland',
//     image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
//     thumbnail: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=40&q=10',
//     rating: 4.8,
//     price: 120000,
//     duration: '5N/6D',
//     description: 'Northern Lights & snowy wilderness.',
//   },
//   {
//     id: 3,
//     slug: 'brooklyn',
//     name: 'USA, Brooklyn',
//     image: '/manhattan-bridge-new-york-sunrise.avif',
//     thumbnail: '/manhattan-bridge-new-york-sunrise.avif',
//     rating: 4.7,
//     price: 150000,
//     duration: '7N/8D',
//     description: 'Urban culture and iconic skylines.',
//   },
//   {
//     id: 4,
//     slug: 'tokyo',
//     name: 'Tokyo, Japan',
//     image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
//     thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=40&q=10',
//     rating: 4.9,
//     price: 95000,
//     duration: '6N/7D',
//     description: 'Futuristic city meets ancient tradition.',
//   },
//   {
//     id: 5,
//     slug: 'bali',
//     name: 'Bali, Indonesia',
//     image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
//     thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=40&q=10',
//     rating: 4.8,
//     price: 55000,
//     duration: '5N/6D',
//     description: 'Tropical paradise with lush rice terraces.',
//   },
//   {
//     id: 6,
//     slug: 'swiss',
//     name: 'Alps, Switzerland',
//     image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
//     thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=40&q=10',
//     rating: 4.9,
//     price: 180000,
//     duration: '8N/9D',
//     description: 'Pristine peaks and glacier lakes.',
//   },
// ]

export const DESTINATIONS = [
  {
    id: 1,
    slug: 'paris',
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    imageHover: 'https://images.unsplash.com/photo-1431274177760-cbac417b3190?w=800&q=80',
    description: 'Romance, art, and the Eiffel Tower await you.',
  },
  {
    id: 2,
    slug: 'lapland',
    name: 'Lapland, Finland',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    imageHover: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80',
    description: 'Northern Lights & snowy wilderness.',
  },
  {
    id: 3,
    slug: 'brooklyn',
    name: 'Brooklyn, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    imageHover: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800&q=80',
    description: 'Urban culture and iconic skylines.',
  },
  {
    id: 4,
    slug: 'tokyo',
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    imageHover: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80',
    description: 'Futuristic city meets ancient tradition.',
  },
  {
    id: 5,
    slug: 'bali',
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    imageHover: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
    description: 'Tropical paradise with lush rice terraces.',
  },
  {
    id: 6,
    slug: 'swiss',
    name: 'Alps, Switzerland',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    imageHover: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    description: 'Pristine peaks and glacier lakes.',
  },
]


export const PACKAGE_FILTERS = ['All', 'Hotels', 'Flights', 'Trains', 'Adventures', 'Luxury']

export const PACKAGES = [
  {
    id: 1,
    slug: 'santorini-classic',
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=40&q=10',
    destination: 'Santorini, Greece',
    price: 159000,
    originalPrice: 210000,
    discount: 24,
    duration: '7N/8D',
    rating: 4.9,
    reviews: 320,
    category: 'Luxury',
    description:
      'Experience the charm of whitewashed village, crystal-clear waters, and breathtaking sunsets.',
    includes: [
      '7 Days and 6 Nights',
      'International flights and hotel stay',
      'Travel dates : May – October 2025',
      'Booking details 30th Apr 2025',
    ],
  },
  {
    id: 2,
    slug: 'sahara-camp',
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=40&q=10',
    destination: 'Sahara Desert, Morocco',
    price: 159000,
    originalPrice: 195000,
    discount: 18,
    duration: '5N/6D',
    rating: 4.8,
    reviews: 210,
    category: 'Adventures',
    description:
      'Experience the charm of whitewashed village, crystal-clear waters, and breathtaking sunsets.',
    includes: [
      '7 Days and 5 Nights',
      'International flights and hotel stay',
      'Travel dates : May – October 2025',
      'Booking details 30th Apr 2025',
    ],
  },
  {
    id: 3,
    slug: 'maldives-overwater',
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=40&q=10',
    destination: 'Maldives',
    price: 159000,
    originalPrice: 220000,
    discount: 28,
    duration: '6N/7D',
    rating: 5.0,
    reviews: 450,
    category: 'Luxury',
    description:
      'Experience the charm of whitewashed village, crystal-clear waters, and breathtaking sunsets.',
    includes: [
      '7 Days and 5 Nights',
      'International flights and hotel stay',
      'Travel dates : May – October 2025',
      'Booking details 30th Apr 2025',
    ],
  },
]

export const TRUST_FEATURES = [
  {
    icon: '🎒',
    title: 'Expertly Curated Packages',
    desc: 'Packages Curated by our experts for Tailored Experience',
  },
  {
    icon: '🕐',
    title: '24/7 Dedicated Support',
    desc: 'We are here to assist you on your travel',
  },
  {
    icon: '📋',
    title: 'Hassle Free Booking',
    desc: 'Easy and Secure Booking',
  },
  {
    icon: '🛡️',
    title: 'Travel Insurance',
    desc: 'Packages Curated by our experts for Tailored Experience',
  },
]

// ── SEASONS — working Unsplash images ─────────────────────────
// Replace / merge this into your existing home.data.js file

export const SEASONS = [
  {
    id: 'summer',
    label: 'Summer',
    // Palm trees looking up at sky (matches reference image)
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
    big: true,
  },
  {
    id: 'autumn',
    label: 'Autum',
    // Orange/red autumn leaf closeup (matches reference image)
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&q=80',
    big: false,
  },
  {
    id: 'winter',
    label: 'Winter',
    // Snowy mountain landscape (matches reference image)
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=700&q=80',
    big: false,
  },
  {
    id: 'spring',
    label: 'Spring',
    // Cherry blossoms / pink spring flowers (matches reference image)
    image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc57?w=700&q=80',
    big: false,
  },
]