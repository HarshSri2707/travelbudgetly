// // import { useEffect } from 'react'
// // import { updateMetaTags } from '../../utils/seo'
// // import { HeroSection } from './components/HeroSection'
// // import { BookingTicker } from './components/BookingTicker'
// // import { TrustBadges } from './components/TrustBadges'
// // import { WhyChooseUs } from './components/WhyChooseUs'
// // import { ExploreByInterest } from './components/ExploreByInterest'
// // import { FeaturedDestinations } from './components/FeaturedDestinations'
// // import { PopularPackages } from './components/PopularPackages'
// // import { LatestBlogs } from './components/LatestBlogs'
// // import { Testimonials } from './components/Testimonials'

// // export const HomeView = () => {
// //   useEffect(() => {
// //     updateMetaTags({
// //       title: 'Discover the World with TravelBudgetly',
// //       description: 'Your trusted travel partner for exploring India and beyond. Curated experiences from Himalayas to Kerala backwaters.',
// //       keywords: 'travel india, budget travel, tour packages, destinations',
// //     })
// //   }, [])

// //   return (
// //     <div className="min-h-screen">
// //       <HeroSection />
// //       <BookingTicker />
// //       <TrustBadges />
// //       <WhyChooseUs />
// //       <ExploreByInterest />
// //       <FeaturedDestinations />
// //       <PopularPackages />
// //       <Testimonials />
// //       <LatestBlogs />
// //     </div>
// //   )
// // }

// /**
//  * HomePage.jsx — TravelBudgetly
//  * Sections: Hero → FeaturedDestinations → WhyChooseUs → FeaturedPackages
//  *           → PlanTrip → SeasonalTravel → LatestBlogs → Newsletter
//  *
//  * All hooks reused: useIntersection, useCountUp, useReducedMotion, useScrollAnimation
//  * All UI reused:    Card, Button, Badge, Image, Skeleton / CardSkeleton
//  * Animation:        framer-motion (motion, AnimatePresence)
//  */

// import { useState, useEffect, useRef, useCallback } from 'react'
// import { Link } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'

// /* ─── hooks ─── */
// import { useIntersection } from '../../hooks/useIntersection'
// import { useCountUp } from '../../hooks/useCountUp'
// import { useReducedMotion } from '../../hooks/useReducedMotion'
// import { useScrollAnimation } from '../../hooks/useScrollAnimation'

// /* ─── ui ─── */
// import { Button } from '../../components/ui/Button'
// import { Badge } from '../../components/ui/Badge'
// import { Card } from '../../components/ui/Card'
// import { CardSkeleton } from '../../components/ui/Skeleton'

// /* ════════════════════════════════════════════════════════
//    MOCK DATA  (replace with real API / imports)
// ════════════════════════════════════════════════════════ */
// const HERO_IMAGES = [
//   'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80',
//   'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80',
//   'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1600&q=80',
// ]

// const DESTINATIONS = [
//   { id: 1, slug: 'paris', name: 'Paris, France',       image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', thumbnail: '', rating: 4.9, price: 89000,  duration: '6N/7D', description: 'Romance, art, and the Eiffel Tower await you.' },
//   { id: 2, slug: 'lapland', name: 'Lapland, Finland',  image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80', thumbnail: '', rating: 4.8, price: 1200000, duration: '5N/6D', description: 'Northern Lights & snowy wilderness.' },
//   { id: 3, slug: 'brooklyn', name: 'USA, Brooklyn',    image: 'https://images.unsplash.com/photo-1485871851624-7ae6d1c2c2f2?w=600&q=80', thumbnail: '', rating: 4.7, price: 1500000, duration: '7N/8D', description: 'Urban culture and iconic skylines.' },
//   { id: 4, slug: 'tokyo', name: 'Tokyo, Japan',        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80', thumbnail: '', rating: 4.9, price: 95000,  duration: '6N/7D', description: 'Futuristic city meets ancient tradition.' },
//   { id: 5, slug: 'bali', name: 'Bali, Indonesia',      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', thumbnail: '', rating: 4.8, price: 55000,  duration: '5N/6D', description: 'Tropical paradise with lush rice terraces.' },
//   { id: 6, slug: 'swiss', name: 'Alps, Switzerland',   image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', thumbnail: '', rating: 4.9, price: 1800000, duration: '8N/9D', description: 'Pristine peaks and glacier lakes.' },
// ]

// const PACKAGE_FILTERS = ['All', 'Hotels', 'Flights', 'Trains', 'Adventures', 'Luxury']

// const PACKAGES = [
//   { id: 1, slug: 'santorini-classic', name: 'Santorini, Greece',   image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80', thumbnail: '', destination: 'Santorini, Greece', price: 159000, originalPrice: 210000, discount: 24, duration: '7N/8D', rating: 4.9, reviews: 320, category: 'Luxury',    description: 'Experience the charm of whitewashed village, crystal-clear waters, and breathtaking sunsets.', includes: ['7 Days and 6 Nights', 'International flights and hotel stay', 'Travel dates : May – October 2025', 'Booking details 30th Apr 2025'] },
//   { id: 2, slug: 'sahara-camp',       name: 'Sahara Desert, Morocco', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80', thumbnail: '', destination: 'Sahara Desert, Morocco', price: 159000, originalPrice: 195000, discount: 18, duration: '5N/6D', rating: 4.8, reviews: 210, category: 'Adventures', description: 'Experience the charm of whitewashed village, crystal-clear waters, and breathtaking sunsets.', includes: ['7 Days and 6 Nights', 'International flights and hotel stay', 'Travel dates : May – October 2025', 'Booking details 30th Apr 2025'] },
//   { id: 3, slug: 'maldives-overwater',name: 'Maldives Overwater',  image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80', thumbnail: '', destination: 'Maldives',             price: 159000, originalPrice: 220000, discount: 28, duration: '6N/7D', rating: 5.0, reviews: 450, category: 'Luxury',    description: 'Experience the charm of whitewashed village, crystal-clear waters, and breathtaking sunsets.', includes: ['7 Days and 6 Nights', 'International flights and hotel stay', 'Travel dates : May – October 2025', 'Booking details 30th Apr 2025'] },
// ]

// const SEASONS = [
//   { id: 'summer', label: 'Summer', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', big: true },
//   { id: 'autumn', label: 'Autum',  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', big: false },
//   { id: 'winter', label: 'Winter', image: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=600&q=80', big: false },
//   { id: 'spring', label: 'Spring', image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc57?w=600&q=80', big: false },
// ]

// const BLOGS = [
//   { id: 1, slug: 'wonders-santorini-1', title: 'Unveiling the wonders of Santorini', excerpt: 'Rerum perferendis nam est. Optio nulla voluptas. Animi sit hic molittia exercitationem. Numquam error laboriosam. Quaserat non qui neque non molittia est.numquam.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', date: 'March 11, 2026', featured: true  },
//   { id: 2, slug: 'wonders-santorini-2', title: 'Unveiling the wonders of Santorini', excerpt: '', image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=400&q=80', date: 'March 11, 2026', featured: false },
//   { id: 3, slug: 'wonders-santorini-3', title: 'Unveiling the wonders of Santorini', excerpt: '', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', date: 'March 11, 2026', featured: false },
//   { id: 4, slug: 'wonders-santorini-4', title: 'Unveiling the wonders of Santorini', excerpt: '', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', date: 'March 11, 2026', featured: false },
// ]

// /* ════════════════════════════════════════════════════════
//    ANIMATION VARIANTS (shared)
// ════════════════════════════════════════════════════════ */
// const fadeUp = {
//   hidden:  { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
// }
// const staggerContainer = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.12 } },
// }

// /* ════════════════════════════════════════════════════════
//    SECTION WRAPPER — shared section header helper
// ════════════════════════════════════════════════════════ */
// const SectionHeading = ({ watermark, title, subtitle, light = false }) => (
//   <div className="relative text-center mb-12">
//     {watermark && (
//       <span
//         className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[72px] md:text-[96px] font-black tracking-widest select-none pointer-events-none"
//         style={{ color: light ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)' }}
//       >
//         {watermark}
//       </span>
//     )}
//     <h2 className={`relative font-display font-bold text-3xl md:text-4xl mb-3 ${light ? 'text-white' : 'text-gray-900'}`}>
//       {title}
//     </h2>
//     {subtitle && (
//       <p className={`text-base md:text-lg ${light ? 'text-gray-300' : 'text-gray-500'}`}>
//         {subtitle}
//       </p>
//     )}
//   </div>
// )

// /* ════════════════════════════════════════════════════════
//    1. HERO SECTION
// ════════════════════════════════════════════════════════ */
// const HeroSection = () => {
//   const prefersReducedMotion = useReducedMotion()

//   const destinations = useCountUp({ end: 120,  suffix: '+' })
//   const travelers    = useCountUp({ end: 4500, suffix: '+' })
//   const rating       = useCountUp({ end: 4.9,  decimals: 1 })

//   const [current, setCurrent] = useState(0)
//   const [next,    setNext]    = useState(1)

//   useEffect(() => {
//     HERO_IMAGES.forEach(src => { const img = new Image(); img.src = src })
//   }, [])

//   useEffect(() => {
//     if (prefersReducedMotion) return
//     const iv = setInterval(() => {
//       setNext(p  => (p + 1) % HERO_IMAGES.length)
//       setCurrent(p => (p + 1) % HERO_IMAGES.length)
//     }, 7000)
//     return () => clearInterval(iv)
//   }, [prefersReducedMotion])

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* ── background ── */}
//       <div className="absolute inset-0 z-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${HERO_IMAGES[current]})` }}
//         />
//         <motion.div
//           key={next}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${HERO_IMAGES[next]})` }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.4, ease: 'easeInOut' }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
//       </div>

//       {/* ── watermark ── */}
//       <div className="absolute inset-x-0 top-20 text-center pointer-events-none select-none z-0">
//         <span className="font-black text-[80px] md:text-[130px] tracking-[0.15em] text-white/5 leading-none">
//           ADVENTURE
//         </span>
//       </div>

//       {/* ── content ── */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-36 pb-24">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//           className="max-w-3xl text-white"
//         >
//           <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.95] mb-8 tracking-tight">
//             ADVENTURE<br />
//             <span className="text-blue-500">TRAVEL</span>
//           </h1>

//           {/* ── search bar ── */}
//           <div className="flex flex-wrap md:flex-nowrap items-center gap-0 bg-white rounded-full shadow-2xl overflow-hidden mb-10 max-w-2xl">
//             <div className="flex items-center gap-2 px-5 py-4 border-r border-gray-200 min-w-[140px]">
//               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               <select className="text-sm text-gray-600 bg-transparent outline-none cursor-pointer font-medium">
//                 <option>Location ↓</option>
//                 <option>India</option>
//                 <option>International</option>
//               </select>
//             </div>
//             <div className="flex items-center gap-2 px-5 py-4 border-r border-gray-200 min-w-[130px]">
//               <span className="text-gray-400 font-bold">₹</span>
//               <select className="text-sm text-gray-600 bg-transparent outline-none cursor-pointer font-medium">
//                 <option>Budget ↓</option>
//                 <option>Under ₹50,000</option>
//                 <option>₹50K–₹1L</option>
//                 <option>₹1L+</option>
//               </select>
//             </div>
//             <input
//               type="text"
//               placeholder="Enter your Travel Destination"
//               className="flex-1 px-5 py-4 text-sm text-gray-700 outline-none placeholder-gray-400"
//             />
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors duration-200 shrink-0">
//               Search
//             </button>
//           </div>

//           {/* ── stats ── */}
//           <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-8 max-w-lg">
//             <div ref={destinations.ref}>
//               <p className="text-3xl font-bold text-blue-400">{destinations.value}{destinations.suffix}</p>
//               <p className="text-sm text-gray-300 mt-0.5">Destinations</p>
//             </div>
//             <div ref={travelers.ref}>
//               <p className="text-3xl font-bold text-blue-400">{travelers.value}{travelers.suffix}</p>
//               <p className="text-sm text-gray-300 mt-0.5">Happy Travelers</p>
//             </div>
//             <div ref={rating.ref}>
//               <p className="text-3xl font-bold text-blue-400">{rating.value}</p>
//               <p className="text-sm text-gray-300 mt-0.5">Average Rating</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// /* ════════════════════════════════════════════════════════
//    2. FEATURED DESTINATIONS
// ════════════════════════════════════════════════════════ */
// const FeaturedDestinations = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
//   const [loaded, setLoaded] = useState(false)

//   useEffect(() => {
//     if (hasIntersected) {
//       const t = setTimeout(() => setLoaded(true), 350)
//       return () => clearTimeout(t)
//     }
//   }, [hasIntersected])

//   return (
//     <section ref={ref} className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeading
//           watermark="DESTINATION"
//           title="Featured Destinations"
//           subtitle="Choose Your Travel and Start Making Memories"
//         />

//         {!loaded ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
//           </div>
//         ) : (
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
//           >
//             {DESTINATIONS.map((dest, i) => (
//               <motion.div key={dest.id} variants={fadeUp} custom={i} className="relative group">
//                 {/* arrow badge on hover – first card shows by default per design */}
//                 {i === 0 && (
//                   <Link
//                     to={`/destinations/${dest.slug}`}
//                     className="absolute top-4 right-4 z-20 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
//                   >
//                     →
//                   </Link>
//                 )}
//                 <Link to={`/destinations/${dest.slug}`} className="block">
//                   <div className="relative rounded-2xl overflow-hidden h-56 shadow-md hover:shadow-xl transition-shadow duration-300">
//                     <img
//                       src={dest.image}
//                       alt={dest.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     {/* hover arrow */}
//                     {i !== 0 && (
//                       <div className="absolute top-4 right-4 z-20 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                         →
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                     <p className="absolute bottom-4 left-4 text-white font-bold text-lg">{dest.name}</p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   )
// }

// /* ════════════════════════════════════════════════════════
//    3. WHY CHOOSE US
// ════════════════════════════════════════════════════════ */
// const TRUST_FEATURES = [
//   { icon: '🎒', title: 'Expertly Curated Packages',   desc: 'Packages Curated by our experts for Tailored Experience' },
//   { icon: '🕐', title: '24/7 Dedicated Support',       desc: 'We are here to assist you on your travel' },
//   { icon: '📋', title: 'Hassle Free Booking',          desc: 'Easy and Secure Booking' },
//   { icon: '🛡', title: 'Travel Insurance',             desc: 'Packages Curated by our experts for Tailored Experience' },
// ]

// const WhyChooseUs = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.15 })

//   return (
//     <section
//       ref={ref}
//       className="py-20 bg-gray-50 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeading
//           watermark="WHY CHOOSE US"
//           title="Trusted Travel With Us"
//           subtitle=""
//         />

//         {/* Bento grid */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="grid grid-cols-12 gap-4 items-stretch"
//         >
//           {/* Left feature cards */}
//           <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
//             {TRUST_FEATURES.slice(0, 2).map((f, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="text-2xl mb-2">{f.icon}</div>
//                 <h4 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h4>
//                 <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
//               </motion.div>
//             ))}
//             <motion.div
//               variants={fadeUp}
//               className="rounded-2xl overflow-hidden h-36"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80"
//                 alt="travel planning"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>

//           {/* Center hero image */}
//           <motion.div
//             variants={fadeUp}
//             className="col-span-12 md:col-span-6 rounded-2xl overflow-hidden min-h-[380px]"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80"
//               alt="adventure"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* Right feature cards */}
//           <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
//             <motion.div
//               variants={fadeUp}
//               className="rounded-2xl overflow-hidden h-36"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80"
//                 alt="booking"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//             {TRUST_FEATURES.slice(2).map((f, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="text-2xl mb-2">{f.icon}</div>
//                 <h4 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h4>
//                 <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// /* ════════════════════════════════════════════════════════
//    4. FEATURED PACKAGES
// ════════════════════════════════════════════════════════ */
// const FeaturedPackages = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
//   const [activeFilter, setActiveFilter] = useState('All')

//   const filtered = activeFilter === 'All'
//     ? PACKAGES
//     : PACKAGES.filter(p => p.category === activeFilter)

//   return (
//     <section ref={ref} className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeading
//           watermark="PACKAGES"
//           title="Find Your Perfect Destination"
//           subtitle="Tailored Packages for your great experience"
//         />

//         {/* Filter tabs */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {PACKAGE_FILTERS.map(f => (
//             <button
//               key={f}
//               onClick={() => setActiveFilter(f)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
//                 activeFilter === f
//                   ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                   : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
//               }`}
//             >
//               {f}
//             </button>
//           ))}
//           <Link to="/packages" className="ml-auto flex items-center gap-1.5 text-sm text-blue-600 font-medium hover:underline">
//             Explore
//             <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">→</span>
//           </Link>
//         </div>

//         {/* Package cards */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           <AnimatePresence mode="popLayout">
//             {(filtered.length ? filtered : PACKAGES).map((pkg, i) => (
//               <motion.div
//                 key={pkg.id}
//                 variants={fadeUp}
//                 layout
//                 exit={{ opacity: 0, y: 20 }}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={pkg.image}
//                     alt={pkg.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   {pkg.discount && (
//                     <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                       {pkg.discount}% OFF
//                     </span>
//                   )}
//                 </div>
//                 <div className="p-5">
//                   <h3 className="font-bold text-gray-900 text-lg mb-1">{pkg.name}</h3>
//                   <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
//                   <div className="text-sm text-gray-500 space-y-0.5 mb-4">
//                     <p className="font-semibold text-gray-700">Includes</p>
//                     {pkg.includes.map((item, idx) => (
//                       <p key={idx} className="text-xs text-gray-500">{item}</p>
//                     ))}
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <span className="text-xl font-bold text-gray-900">₹{pkg.price.toLocaleString()}</span>
//                       {pkg.originalPrice && (
//                         <span className="text-xs text-gray-400 line-through ml-2">₹{pkg.originalPrice.toLocaleString()}</span>
//                       )}
//                     </div>
//                   </div>
//                   <Link to={`/packages/${pkg.slug}`} className="block mt-4">
//                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200">
//                       Book Now
//                     </button>
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-8">
//           {[0, 1, 2].map(i => (
//             <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-600 w-6' : 'bg-gray-300'} transition-all`} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// /* ════════════════════════════════════════════════════════
//    5. PLAN YOUR TRIP
// ════════════════════════════════════════════════════════ */
// const PlanTrip = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
//   const [form, setForm] = useState({ destination: '', style: '', duration: '', season: '', budget: '' })

//   const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

//   return (
//     <section ref={ref} className="py-20 bg-blue-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-center font-display font-bold text-2xl md:text-3xl text-gray-900 mb-10">
//           Plan your Trip With US
//         </h2>

//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="grid md:grid-cols-2 gap-8 items-center"
//         >
//           {/* Image */}
//           <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden h-80 md:h-[420px] shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
//               alt="airplane window"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* Form */}
//           <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-md p-8 space-y-5">
//             {[
//               { label: 'Destination',     name: 'destination', placeholder: 'Enter Destination' },
//               { label: 'Travel Style',    name: 'style',       placeholder: 'Adventure, Relax' },
//               { label: 'Travel Duration', name: 'duration',    placeholder: '3–5 days' },
//               { label: 'Season',          name: 'season',      placeholder: 'Summer, winter, spring' },
//               { label: 'Budget',          name: 'budget',      placeholder: 'Enter Budget' },
//             ].map(field => (
//               <div key={field.name}>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1.5">{field.label}</label>
//                 <input
//                   type="text"
//                   name={field.name}
//                   value={form[field.name]}
//                   onChange={handleChange}
//                   placeholder={field.placeholder}
//                   className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:bg-white transition-colors"
//                 />
//               </div>
//             ))}
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors duration-200 mt-2">
//               Find My Perfect Trip
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// /* ════════════════════════════════════════════════════════
//    6. SEASONAL TRAVEL
// ════════════════════════════════════════════════════════ */
// const SeasonalTravel = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

//   return (
//     <section ref={ref} className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeading
//           watermark="SEASONAL"
//           title="Travel For Best Seasons"
//           subtitle="Experience the best travel Season"
//         />

//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="grid grid-cols-2 gap-4"
//           style={{ gridTemplateRows: 'auto auto' }}
//         >
//           {/* Summer – big left */}
//           <motion.div variants={fadeUp} className="row-span-2 relative rounded-2xl overflow-hidden min-h-[340px] group cursor-pointer">
//             <img src={SEASONS[0].image} alt="Summer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//             <Link to="/destinations?season=summer" className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shadow-lg">→</Link>
//             <span className="absolute bottom-6 left-6 text-white font-bold text-2xl">{SEASONS[0].label}</span>
//           </motion.div>

//           {/* Autumn, Winter, Spring – right column */}
//           {SEASONS.slice(1).map(s => (
//             <motion.div key={s.id} variants={fadeUp} className="relative rounded-2xl overflow-hidden h-40 group cursor-pointer">
//               <img src={s.image} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
//               <Link to={`/destinations?season=${s.id}`} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shadow">→</Link>
//               <span className="absolute bottom-4 left-4 text-white font-bold text-lg">{s.label}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// /* ════════════════════════════════════════════════════════
//    7. LATEST BLOGS
// ════════════════════════════════════════════════════════ */
// const LatestBlogs = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

//   const featured = BLOGS.find(b => b.featured)
//   const rest     = BLOGS.filter(b => !b.featured)

//   return (
//     <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeading
//           watermark="TRENDS"
//           title="Explore Travel Tips & Latest Trends"
//           subtitle=""
//         />

//         {/* Header row */}
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="font-bold text-xl text-gray-900">Latest Blogs</h3>
//           <Link to="/blogs" className="text-blue-600 text-sm font-medium hover:underline">Explore Blogs</Link>
//         </div>

//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//         >
//           {/* Featured blog */}
//           {featured && (
//             <motion.div variants={fadeUp}>
//               <Link to={`/blogs/${featured.slug}`} className="block mb-8 group">
//                 <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//                   <div className="h-56 md:h-full overflow-hidden">
//                     <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                   </div>
//                   <div className="p-6 flex flex-col justify-center">
//                     <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
//                       {featured.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
//                     <div className="flex items-center justify-between mt-auto">
//                       <span className="text-xs text-gray-400">{featured.date}</span>
//                       <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">→</span>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           )}

//           {/* 3 small blogs */}
//           <div className="grid md:grid-cols-3 gap-5">
//             {rest.map(blog => (
//               <motion.div key={blog.id} variants={fadeUp}>
//                 <Link to={`/blogs/${blog.slug}`} className="block group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//                   <div className="h-44 overflow-hidden">
//                     <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                   </div>
//                   <div className="p-4">
//                     <h4 className="font-bold text-sm text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
//                       {blog.title}
//                     </h4>
//                     <div className="flex items-center justify-between mt-3">
//                       <span className="text-xs text-gray-400">{blog.date}</span>
//                       <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">→</span>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// /* ════════════════════════════════════════════════════════
//    8. NEWSLETTER
// ════════════════════════════════════════════════════════ */
// const Newsletter = () => {
//   const [email, setEmail] = useState('')
//   const [submitted, setSubmitted] = useState(false)
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.2 })

//   const handleSubmit = () => {
//     if (email.trim()) setSubmitted(true)
//   }

//   return (
//     <section ref={ref} className="py-16 bg-blue-600 overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.7 }}
//         className="max-w-2xl mx-auto px-4 text-center text-white"
//       >
//         <h2 className="font-bold text-2xl md:text-3xl mb-2">
//           Don't miss out on next week's deals
//         </h2>
//         <p className="text-blue-100 text-sm mb-8">
//           Join 500,000+ travelers and get exclusive access to unlimited coupons and secret flash sales.
//         </p>

//         {submitted ? (
//           <p className="text-white font-semibold text-lg">🎉 Thank you for subscribing!</p>
//         ) : (
//           <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto bg-white rounded-full overflow-hidden shadow-xl">
//             <input
//               type="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="flex-1 px-5 py-3.5 text-gray-700 text-sm outline-none"
//             />
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 transition-colors duration-200"
//             >
//               Subscribe Now
//             </button>
//           </div>
//         )}
//         <p className="text-blue-200 text-xs mt-4">UNSUBSCRIBE ANYTIME. OFF SPAM EVER.</p>
//       </motion.div>
//     </section>
//   )
// }

// /* ════════════════════════════════════════════════════════
//    PAGE ASSEMBLY
// ════════════════════════════════════════════════════════ */
// export const HomeView = () => (
//   <main className="font-sans antialiased">
//     <HeroSection />
//     <FeaturedDestinations />
//     <WhyChooseUs />
//     <FeaturedPackages />
//     <PlanTrip />
//     <SeasonalTravel />
//     <LatestBlogs />
//     <Newsletter />
//   </main>
// )

// export default HomeView



/**
 * HomePage.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Entry view for the home route.
 * Each section lives in its own file under ./sections/
 * Static data lives in ./data/home.data.js
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { HeroSection }          from '../home/components/HeroSection'
import { FeaturedDestinations } from '../home/components/FeaturedDestinations'
import { WhyChooseUs }          from '../home/components/WhyChooseUs'
import { PlanTrip }             from '../home/components/PlanTrip'
import { SeasonalTravel }       from '../home/components/SeasonalTravel'
import { LatestBlogs }          from '../home/components/LatestBlogs'
import { NewsLetter }           from '../home/components/NewsLetter'
import { PopularPackages }      from '../home/components/PopularPackages'

export const HomeView = () => (
  <main className="font-sans antialiased">
    <HeroSection />
    <FeaturedDestinations />
    <WhyChooseUs />
    <PopularPackages />
    <PlanTrip />
    <SeasonalTravel />
    <LatestBlogs />
    <NewsLetter />
  </main>
)

export default HomeView