


// // import { useState, useEffect } from 'react'
// // import { useSearchParams, Link } from 'react-router-dom'
// // import { AnimatePresence, motion } from 'framer-motion'
// // import { updateMetaTags } from '../../utils/seo'
// // import { destinationsMock } from '../../data/destinations.mock'
// // import { blogsMock } from '../../data/blogs.mock'

// // /* ── animation variants ─────────────────────────────────────── */
// // const containerVariants = {
// //   hidden:  { opacity: 0 },
// //   visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
// //   exit:    { opacity: 0 },
// // }
// // const cardVariants = {
// //   hidden:  { opacity: 0, y: 16, scale: 0.98 },
// //   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
// //   exit:    { opacity: 0, y: 16 },
// // }

// // /* ── Tab filters ────────────────────────────────────────────── */
// // const TABS = ['Europe', 'Asia', 'North America', 'Last Minute', 'Luxury', 'Budget']

// // /* ── Sidebar dropdown ───────────────────────────────────────── */
// // const FilterSelect = ({ label, options }) => (
// //   <div className="relative border border-gray-200 rounded-xl overflow-hidden bg-white">
// //     <select className="w-full px-4 py-3 text-sm text-gray-700 bg-transparent outline-none cursor-pointer appearance-none font-medium pr-8">
// //       <option value="">{label}</option>
// //       {options.map(o => <option key={o}>{o}</option>)}
// //     </select>
// //     {/* chevron */}
// //     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
// //       <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //       </svg>
// //     </div>
// //   </div>
// // )

// // /* ── Amenity icons ──────────────────────────────────────────── */
// // const HotelIcon = () => (
// //   <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
// //     <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 11h2v4H8zm6 0h2v4h-2z" />
// //   </svg>
// // )
// // const FlightIcon = () => (
// //   <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
// //     <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0L7 9m5-4l5 4M3 19h18" />
// //   </svg>
// // )
// // const FoodIcon = () => (
// //   <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
// //     <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v8m0 0a4 4 0 100 8 4 4 0 000-8zm-6-2v4m12-4v4" />
// //   </svg>
// // )
// // const CameraIcon = () => (
// //   <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
// //     <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
// //     <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round" />
// //   </svg>
// // )

// // /* ── Destination card ───────────────────────────────────────── */
// // const DestCard = ({ dest }) => (
// //   <Link to={`/destinations/${dest.slug}`} className="block group">
// //     {/* image */}
// //     <div className="relative h-[155px] rounded-xl overflow-hidden mb-3">
// //       <img
// //         src={dest.image}
// //         alt={dest.name}
// //         loading="lazy"
// //         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //       />
// //       {/* duration badge bottom-left */}
// //       {dest.duration && (
// //         <span className="absolute bottom-2 left-2 bg-black/55 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm">
// //           {dest.duration}
// //         </span>
// //       )}
// //     </div>

// //     {/* name */}
// //     <h3 className="font-bold text-gray-900 text-sm mb-0.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
// //       {dest.name}{dest.country ? `, ${dest.country}` : ''}
// //     </h3>

// //     {/* excerpt */}
// //     <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mb-2">
// //       {dest.description || 'Experience the charm of whitewashed village, crystal-clear waters, and breathtaking sunsets.'}
// //     </p>

// //     {/* nights/days + tour type */}
// //     <div className="flex items-center gap-1.5 mb-1.5">
// //       <span className="text-[10px] font-bold text-gray-700">
// //         {dest.nights || '9N'}/{dest.days || '10D'}
// //       </span>
// //       <span className="text-[10px] text-blue-600 font-semibold">Customised Tour</span>
// //     </div>

// //     {/* Includes label */}
// //     <p className="text-[10px] font-semibold text-gray-500 mb-1.5">Includes</p>

// //     {/* amenity icons */}
// //     <div className="flex items-center gap-2 mb-3">
// //       <HotelIcon />
// //       <FlightIcon />
// //       <FoodIcon />
// //       <CameraIcon />
// //     </div>

// //     {/* price + view details */}
// //     <div className="flex items-center justify-between">
// //       <span className="font-bold text-gray-900 text-sm">
// //         {dest.price ? `₹${Number(dest.price).toLocaleString()}` : '1,59,000'}
// //       </span>
// //       <span className="text-[11px] text-blue-600 font-semibold hover:underline underline-offset-2">
// //         View Details
// //       </span>
// //     </div>
// //   </Link>
// // )

// // /* ── Blog card ──────────────────────────────────────────────── */
// // const BlogCard = ({ blog }) => (
// //   <Link to={`/blogs/${blog.slug}`} className="group block">
// //     <div className="h-[140px] rounded-xl overflow-hidden mb-3">
// //       <img
// //         src={blog.image}
// //         alt={blog.title}
// //         loading="lazy"
// //         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //       />
// //     </div>
// //     <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
// //       {blog.title}
// //     </h3>
// //     <div className="flex items-center justify-between mt-2">
// //       <p className="text-[11px] text-gray-400">
// //         {blog.publishDate
// //           ? new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
// //           : 'March 11, 2026'}
// //       </p>
// //       <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-700 transition-colors">
// //         <svg viewBox="0 0 10 10" className="w-3 h-3" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //           <path d="M2 5h6M5 2l3 3-3 3" />
// //         </svg>
// //       </span>
// //     </div>
// //   </Link>
// // )

// // /* ── Skeleton cards ─────────────────────────────────────────── */
// // const DestCardSkeleton = () => (
// //   <div className="animate-pulse">
// //     <div className="h-[155px] rounded-xl bg-gray-200 mb-3" />
// //     <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
// //     <div className="h-3 bg-gray-200 rounded w-full mb-1" />
// //     <div className="h-3 bg-gray-200 rounded w-5/6 mb-3" />
// //     <div className="h-3 bg-gray-200 rounded w-1/2 mb-1" />
// //     <div className="flex gap-2 mb-3">
// //       {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 rounded bg-gray-200" />)}
// //     </div>
// //     <div className="flex justify-between">
// //       <div className="h-4 bg-gray-200 rounded w-16" />
// //       <div className="h-4 bg-gray-200 rounded w-16" />
// //     </div>
// //   </div>
// // )

// // /* ══════════════════════════════════════════════════════════════
// //    MAIN COMPONENT
// // ══════════════════════════════════════════════════════════════ */
// // export const DestinationView = () => {
// //   const [searchParams] = useSearchParams()
// //   const [destinations, setDestinations]               = useState([])
// //   const [filteredDestinations, setFilteredDestinations] = useState([])
// //   const [selectedZone, setSelectedZone]               = useState(searchParams.get('zone') || 'all')
// //   const [activeTab, setActiveTab]                     = useState('Europe')
// //   const [visibleCount, setVisibleCount]               = useState(6)
// //   const [loading, setLoading]                         = useState(true)
// //   const [email, setEmail]                             = useState('')
// //   const [subscribed, setSubscribed]                   = useState(false)
// //   const [priceMax, setPriceMax]                       = useState(500000)

// //   useEffect(() => {
// //     updateMetaTags({
// //       title: 'Explore Destinations - TravelBudgetly',
// //       description: 'Discover amazing destinations across India and the world.',
// //       keywords: 'travel destinations, india, places to visit',
// //     })
// //     const t = setTimeout(() => {
// //       setDestinations(destinationsMock)
// //       setFilteredDestinations(destinationsMock)
// //       setLoading(false)
// //     }, 300)
// //     return () => clearTimeout(t)
// //   }, [])

// //   useEffect(() => {
// //     if (selectedZone === 'all') {
// //       setFilteredDestinations(destinations)
// //     } else {
// //       setFilteredDestinations(
// //         destinations.filter(d => d.zone?.toLowerCase().includes(selectedZone.toLowerCase()))
// //       )
// //     }
// //     setVisibleCount(6)
// //   }, [selectedZone, destinations])

// //   const displayed = filteredDestinations.slice(0, visibleCount)
// //   const hasMore   = visibleCount < filteredDestinations.length
// //   const blogs     = (blogsMock || []).slice(0, 3)

// //   return (
// //     <div className="min-h-screen pt-24 pb-16 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 md:px-6">
// //         <div className="flex gap-6 lg:gap-8 mt-8">

// //           {/* ════════════════════════════════════════════════════
// //               LEFT SIDEBAR
// //           ════════════════════════════════════════════════════ */}
// //           <aside className="hidden lg:flex flex-col gap-3 w-[210px] flex-shrink-0">

// //             <div className="mb-1">
// //               <h2 className="font-bold text-base text-gray-900">Filters</h2>
// //               <p className="text-xs text-gray-400 mt-0.5">Customize your journey</p>
// //             </div>

// //             <FilterSelect label="Destination" options={['India', 'International', 'Europe', 'Asia']} />
// //             <FilterSelect label="Tour Type"   options={['Adventure', 'Honeymoon', 'Family', 'Solo']} />
// //             <FilterSelect label="Flights"     options={['Included', 'Not Included']} />
// //             <FilterSelect label="Duration"    options={['3-5 Days', '6-8 Days', '9-12 Days', '13+ Days']} />
// //             <FilterSelect label="Hotel"       options={['3 Star', '4 Star', '5 Star', 'Resort']} />

// //             {/* Price range */}
// //             <div className="mt-1">
// //               <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Price Range</p>
// //               <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
// //                 <span>₹0</span>
// //                 <span>₹{priceMax.toLocaleString()}+</span>
// //               </div>
// //               <input
// //                 type="range"
// //                 min={0}
// //                 max={500000}
// //                 step={5000}
// //                 value={priceMax}
// //                 onChange={e => setPriceMax(Number(e.target.value))}
// //                 className="w-full accent-blue-600 cursor-pointer h-1"
// //               />
// //             </div>

// //             <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-full text-sm transition-colors mt-1">
// //               Apply Filters
// //             </button>

// //             {/* Need Help card */}
// //             <div className="bg-gray-50 rounded-2xl p-4 mt-1">
// //               <p className="font-bold text-sm text-gray-900 mb-1">Need Help?</p>
// //               <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
// //                 Our travel experts are available 24/7 to help you plan your perfect trip.
// //               </p>
// //               <button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
// //                 Chat now
// //                 <svg viewBox="0 0 10 10" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //                   <path d="M2 5h6M5 2l3 3-3 3" />
// //                 </svg>
// //               </button>
// //             </div>
// //           </aside>

// //           {/* ════════════════════════════════════════════════════
// //               RIGHT CONTENT
// //           ════════════════════════════════════════════════════ */}
// //           <div className="flex-1 min-w-0">

// //             {/* label */}
// //             <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">
// //               Your Next Adventure
// //             </p>

// //             {/* title */}
// //             <h1 className="font-bold text-2xl md:text-3xl text-gray-900 mb-1">
// //               Explore Top Destinations
// //             </h1>
// //             <p className="text-sm text-gray-500 mb-5 max-w-xl leading-relaxed">
// //               Discover your next adventure from our curated list of global hotspots, from the peaks of Switzerland to the shores of Bali.
// //             </p>

// //             {/* tab filters */}
// //             <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
// //               {TABS.map(tab => (
// //                 <button
// //                   key={tab}
// //                   onClick={() => setActiveTab(tab)}
// //                   className={`
// //                     px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0
// //                     transition-all duration-200 border
// //                     ${activeTab === tab
// //                       ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
// //                       : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
// //                     }
// //                   `}
// //                 >
// //                   {tab}
// //                 </button>
// //               ))}
// //             </div>

// //             {/* mobile zone filter */}
// //             <div className="flex lg:hidden gap-2 overflow-x-auto scrollbar-hide mb-5 pb-1">
// //               {['all', 'North India', 'South India', 'East India', 'West India'].map(zone => (
// //                 <button
// //                   key={zone}
// //                   onClick={() => setSelectedZone(zone)}
// //                   className={`
// //                     px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0
// //                     border transition-all
// //                     ${selectedZone === zone
// //                       ? 'bg-blue-600 text-white border-blue-600'
// //                       : 'bg-white text-gray-600 border-gray-200'
// //                     }
// //                   `}
// //                 >
// //                   {zone === 'all' ? 'All Zones' : zone}
// //                 </button>
// //               ))}
// //             </div>

// //             {/* ── Cards grid ── */}
// //             {loading ? (
// //               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
// //                 {Array.from({ length: 6 }).map((_, i) => <DestCardSkeleton key={i} />)}
// //               </div>
// //             ) : filteredDestinations.length === 0 ? (
// //               <div className="text-center py-20">
// //                 <div className="text-5xl mb-4">🔍</div>
// //                 <h3 className="text-xl font-bold text-gray-900 mb-2">No destinations found</h3>
// //                 <p className="text-gray-500 text-sm">Try changing the filter</p>
// //               </div>
// //             ) : (
// //               <AnimatePresence mode="wait">
// //                 <motion.div
// //                   key={selectedZone}
// //                   variants={containerVariants}
// //                   initial="hidden"
// //                   animate="visible"
// //                   exit="exit"
// //                   className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
// //                 >
// //                   {displayed.map(dest => (
// //                     <motion.div key={dest.id} variants={cardVariants}>
// //                       <DestCard dest={dest} />
// //                     </motion.div>
// //                   ))}
// //                 </motion.div>
// //               </AnimatePresence>
// //             )}

// //             {/* Load More */}
// //             {!loading && hasMore && (
// //               <div className="flex justify-center mt-8">
// //                 <button
// //                   onClick={() => setVisibleCount(v => v + 6)}
// //                   className="px-8 py-2.5 border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
// //                 >
// //                   Load More
// //                 </button>
// //               </div>
// //             )}

// //             {/* ── Newsletter CTA ── */}
// //             <div className="mt-12 bg-[#1a3a5c] rounded-2xl px-7 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden relative">
// //               {/* decorative circle */}
// //               <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-blue-700/30 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
// //               <div className="text-white flex-1 relative z-10">
// //                 <h3 className="font-bold text-2xl md:text-3xl leading-snug mb-2">
// //                   Ready to start<br />your next journey?
// //                 </h3>
// //                 <p className="text-white/60 text-xs md:text-sm leading-relaxed">
// //                   Join 50,000+ travelers receiving our best deals and hidden gem recommendations weekly.
// //                 </p>
// //               </div>
// //               <div className="flex gap-2 w-full md:w-auto relative z-10">
// //                 {subscribed ? (
// //                   <p className="text-white font-semibold text-sm">🎉 Subscribed!</p>
// //                 ) : (
// //                   <>
// //                     <input
// //                       type="email"
// //                       value={email}
// //                       onChange={e => setEmail(e.target.value)}
// //                       onKeyDown={e => e.key === 'Enter' && email.trim() && setSubscribed(true)}
// //                       placeholder="Enter your email"
// //                       className="flex-1 md:w-52 px-4 py-2.5 rounded-lg text-sm text-gray-900 bg-white outline-none"
// //                     />
// //                     <button
// //                       onClick={() => email.trim() && setSubscribed(true)}
// //                       className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
// //                     >
// //                       Subscribe Now
// //                     </button>
// //                   </>
// //                 )}
// //               </div>
// //             </div>

// //             {/* ── Travel Blogs ── */}
// //             {blogs.length > 0 && (
// //               <section className="mt-12">
// //                 <h2 className="font-bold text-xl text-gray-900 mb-5">Travel Blogs</h2>
// //                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
// //                   {blogs.map(blog => (
// //                     <BlogCard key={blog.id} blog={blog} />
// //                   ))}
// //                 </div>
// //               </section>
// //             )}

// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }



// import { useState, useEffect } from 'react'
// import { useSearchParams, Link } from 'react-router-dom'
// import { AnimatePresence, motion } from 'framer-motion'
// import { updateMetaTags } from '../../utils/seo'
// import { destinationsMock } from '../../data/destinations.mock'
// import { blogsMock } from '../../data/blogs.mock'

// /* ── animation variants ─────────────────────────────────────── */
// const containerVariants = {
//   hidden:  { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
//   exit:    { opacity: 0 },
// }
// const cardVariants = {
//   hidden:  { opacity: 0, y: 16, scale: 0.98 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
//   exit:    { opacity: 0, y: 16 },
// }

// /* ── Region Tabs (matching PackageView budget tab style) ─────── */
// const REGION_TABS = [
//   { key: 'all',           label: 'All' },
//   { key: 'europe',        label: 'Europe' },
//   { key: 'asia',          label: 'Asia' },
//   { key: 'north-america', label: 'North America' },
//   { key: 'last-minute',   label: 'Last Minute' },
//   { key: 'luxury',        label: 'Luxury' },
//   { key: 'budget',        label: 'Budget' },
// ]

// /* ── Filter Dropdown (matching PackageView style) ───────────── */
// const FilterDropdown = ({ label }) => (
//   <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer hover:border-gray-300 transition">
//     <span className="text-[13px] text-gray-500">{label}</span>
//     <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   </div>
// )

// /* ── Amenity icons ──────────────────────────────────────────── */
// const HotelIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
//     <rect x="3" y="7" width="18" height="14" rx="1" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18M8 7V5a4 4 0 018 0v2" />
//   </svg>
// )
// const FlightIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-4 4m4-4l4 4" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l3-1.5L12 19l6-3.5 3 1.5" />
//   </svg>
// )
// const FoodIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4a2 2 0 002 2h4a2 2 0 002-2V3M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
//   </svg>
// )
// const CameraIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
//     <circle cx="12" cy="13" r="4" />
//   </svg>
// )
// const StarIcon = () => (
//   <svg className="w-3 h-3" fill="#FACC15" viewBox="0 0 24 24">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//   </svg>
// )
// const ArrowRight = () => (
//   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//   </svg>
// )

// /* ── Destination card ───────────────────────────────────────── */
// const DestCard = ({ dest }) => (
//   <Link to={`/destinations/${dest.slug}`} className="block group">
//     <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//       {/* image */}
//       <div className="relative h-44">
//         <img
//           src={dest.image}
//           alt={dest.name}
//           loading="lazy"
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         {/* rating badge */}
//         <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
//           <StarIcon />
//           <span>{dest.rating || '4.3'}</span>
//         </div>
//         {/* duration badge top-right */}
//         {dest.duration && (
//           <span className="absolute top-2 right-2 bg-[#1D75DE]/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm">
//             {dest.duration}
//           </span>
//         )}
//       </div>

//       {/* body */}
//       <div className="p-4">
//         {/* name */}
//         <h3 className="font-bold text-gray-900 text-[15px] mb-1 line-clamp-1 group-hover:text-[#1D75DE] transition-colors">
//           {dest.name}{dest.country ? `, ${dest.country}` : ''}
//         </h3>

//         {/* excerpt */}
//         <p className="text-[13px] text-gray-500 line-clamp-2 leading-snug mb-3">
//           {dest.description || 'Experience the charm of whitewashed villages, crystal-clear waters, and breathtaking sunsets.'}
//         </p>

//         {/* nights/days + tour type */}
//         <div className="flex items-center gap-2 mb-1">
//           <span className="text-[12px] font-semibold text-gray-800">
//             {dest.nights || '9N'}/{dest.days || '10D'}
//           </span>
//           <span className="text-[12px] text-gray-400">|</span>
//           <span className="text-[12px] text-gray-600">Customised Tour</span>
//         </div>

//         {/* Includes */}
//         <p className="text-[11px] text-gray-400 font-medium mb-1.5 mt-2">Includes</p>

//         {/* amenity icons */}
//         <div className="flex items-center gap-3 text-gray-500 mb-4">
//           <HotelIcon />
//           <FlightIcon />
//           <FoodIcon />
//           <CameraIcon />
//         </div>

//         {/* price + view details */}
//         <div className="flex items-center justify-between">
//           <span className="font-bold text-gray-900 text-[17px]">
//             ₹{dest.price ? Number(dest.price).toLocaleString('en-IN') : '1,59,000'}
//           </span>
//           <span className="text-[13px] font-semibold text-[#1D75DE] hover:underline underline-offset-2">
//             View Details
//           </span>
//         </div>
//       </div>
//     </div>
//   </Link>
// )

// /* ── Blog card ──────────────────────────────────────────────── */
// const BlogCard = ({ blog }) => (
//   <Link to={`/blogs/${blog.slug}`} className="group block">
//     <div className="aspect-[4/3] rounded-[18px] overflow-hidden mb-4 border border-gray-100">
//       <img
//         src={blog.image}
//         alt={blog.title}
//         loading="lazy"
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//       />
//     </div>
//     <h3 className="text-[16px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#1D75DE] transition-colors line-clamp-2">
//       {blog.title}
//     </h3>
//     <div className="flex items-center justify-between">
//       <p className="text-[13px] text-gray-400">
//         {blog.publishDate
//           ? new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
//           : 'March 11, 2026'}
//       </p>
//       <div className="w-9 h-9 rounded-full bg-[#1D75DE] flex items-center justify-center shadow-md group-hover:bg-[#165bb0] transition-colors shrink-0">
//         <ArrowRight />
//       </div>
//     </div>
//   </Link>
// )

// /* ── Skeleton cards ─────────────────────────────────────────── */
// const DestCardSkeleton = () => (
//   <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm animate-pulse">
//     <div className="h-44 bg-gray-200" />
//     <div className="p-4">
//       <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
//       <div className="h-3 bg-gray-200 rounded w-full mb-1" />
//       <div className="h-3 bg-gray-200 rounded w-5/6 mb-3" />
//       <div className="h-3 bg-gray-200 rounded w-1/2 mb-3" />
//       <div className="flex gap-2 mb-4">
//         {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 rounded bg-gray-200" />)}
//       </div>
//       <div className="flex justify-between">
//         <div className="h-4 bg-gray-200 rounded w-20" />
//         <div className="h-4 bg-gray-200 rounded w-20" />
//       </div>
//     </div>
//   </div>
// )

// /* ══════════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ══════════════════════════════════════════════════════════════ */
// export const DestinationView = () => {
//   const [searchParams] = useSearchParams()
//   const [destinations, setDestinations]                 = useState([])
//   const [filteredDestinations, setFilteredDestinations] = useState([])
//   const [activeRegion, setActiveRegion]                 = useState('all')
//   const [visibleCount, setVisibleCount]                 = useState(6)
//   const [loading, setLoading]                           = useState(true)
//   const [email, setEmail]                               = useState('')
//   const [subscribed, setSubscribed]                     = useState(false)
//   const [priceRange, setPriceRange]                     = useState(500000)

//   useEffect(() => {
//     updateMetaTags({
//       title: 'Explore Destinations - TravelBudgetly',
//       description: 'Discover amazing destinations across India and the world.',
//       keywords: 'travel destinations, india, places to visit',
//     })
//     const t = setTimeout(() => {
//       setDestinations(destinationsMock)
//       setFilteredDestinations(destinationsMock)
//       setLoading(false)
//     }, 300)
//     return () => clearTimeout(t)
//   }, [])

//   useEffect(() => {
//     if (activeRegion === 'all') {
//       setFilteredDestinations(destinations)
//     } else {
//       setFilteredDestinations(
//         destinations.filter(d =>
//           d.region?.toLowerCase().includes(activeRegion.toLowerCase()) ||
//           d.zone?.toLowerCase().includes(activeRegion.toLowerCase()) ||
//           d.tags?.some(tag => tag.toLowerCase().includes(activeRegion.toLowerCase()))
//         )
//       )
//     }
//     setVisibleCount(6)
//   }, [activeRegion, destinations])

//   const displayed = filteredDestinations.slice(0, visibleCount)
//   const hasMore   = visibleCount < filteredDestinations.length
//   const blogs     = (blogsMock || []).slice(0, 3)

//   return (
//     <div className="min-h-screen pt-24 pb-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex gap-6 mt-8">

//           {/* ════════════════════════════════════════════════════
//               LEFT SIDEBAR — matching PackageView exactly
//           ════════════════════════════════════════════════════ */}
//           <aside className="hidden lg:flex flex-col gap-4 w-[200px] xl:w-[220px] shrink-0">

//             {/* Filters box */}
//             <div className="border border-gray-200 rounded-xl p-4">
//               <h3 className="text-[15px] font-bold text-gray-900">Filters</h3>
//               <p className="text-[12px] text-gray-400 mb-4">Customise your journey</p>

//               <div className="flex flex-col gap-3">
//                 <FilterDropdown label="Destination" />
//                 <FilterDropdown label="Tour Type" />
//                 <FilterDropdown label="Flights" />
//                 <FilterDropdown label="Duration" />
//                 <FilterDropdown label="Hotel" />
//               </div>

//               {/* Price Range */}
//               <div className="mt-5">
//                 <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Price Range</p>
//                 <div className="flex justify-between text-[12px] text-gray-500 mb-2">
//                   <span>₹0</span>
//                   <span>₹5,00,000+</span>
//                 </div>
//                 <input
//                   type="range"
//                   min={0}
//                   max={500000}
//                   step={1000}
//                   value={priceRange}
//                   onChange={e => setPriceRange(Number(e.target.value))}
//                   className="w-full accent-[#1D75DE] h-1.5 cursor-pointer"
//                 />
//               </div>

//               <button className="mt-5 w-full bg-[#1D75DE] text-white text-[13px] font-semibold py-2.5 rounded-lg hover:bg-[#165bb0] transition">
//                 Apply Filters
//               </button>
//             </div>

//             {/* Need help box */}
//             <div className="border border-blue-100 bg-blue-50/50 rounded-xl p-4">
//               <p className="text-[13px] font-bold text-[#1D75DE] mb-1">Need help?</p>
//               <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
//                 Our travel experts are available 24/7 to help you plan your perfect trip.
//               </p>
//               <a href="#" className="text-[12px] font-semibold text-[#1D75DE] hover:underline flex items-center gap-1">
//                 Chat now
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                 </svg>
//               </a>
//             </div>

//           </aside>

//           {/* ════════════════════════════════════════════════════
//               RIGHT CONTENT
//           ════════════════════════════════════════════════════ */}
//           <div className="flex-1 min-w-0">

//             {/* Header */}
//             <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1D75DE] mb-1">
//               Your Next Adventure
//             </p>
//             <h1 className="text-[28px] md:text-[34px] font-bold text-slate-900 leading-tight mb-1">
//               Explore Top Destinations
//             </h1>
//             <p className="text-[14px] text-gray-500 mb-6 max-w-xl leading-relaxed">
//               Discover your next adventure from our curated list of global hotspots, from the peaks of Switzerland to the shores of Bali.
//             </p>

//             {/* Region Tabs — exact same style as PackageView budget tabs */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {REGION_TABS.map(tab => (
//                 <button
//                   key={tab.key}
//                   onClick={() => setActiveRegion(tab.key)}
//                   className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
//                     activeRegion === tab.key
//                       ? 'bg-[#1D75DE] text-white border-[#1D75DE]'
//                       : 'bg-white text-gray-600 border-gray-200 hover:border-[#1D75DE] hover:text-[#1D75DE]'
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>

//             {/* ── Cards grid ── */}
//             {loading ? (
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {Array.from({ length: 6 }).map((_, i) => <DestCardSkeleton key={i} />)}
//               </div>
//             ) : filteredDestinations.length === 0 ? (
//               <div className="text-center py-24 text-gray-400">
//                 <div className="text-5xl mb-4">🔍</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">No destinations found</h3>
//                 <p className="text-gray-500 text-sm">Try changing the filter</p>
//               </div>
//             ) : (
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeRegion}
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
//                 >
//                   {displayed.map(dest => (
//                     <motion.div key={dest.id} variants={cardVariants}>
//                       <DestCard dest={dest} />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </AnimatePresence>
//             )}

//             {/* Load More */}
//             {!loading && hasMore && (
//               <div className="flex justify-center mt-10">
//                 <button
//                   onClick={() => setVisibleCount(v => v + 6)}
//                   className="px-7 py-2.5 border border-gray-300 rounded-full text-[13px] font-medium text-gray-600 hover:border-[#1D75DE] hover:text-[#1D75DE] transition"
//                 >
//                   Load More
//                 </button>
//               </div>
//             )}

         
          

//           </div>
//         </div>
//           {/* ── Newsletter CTA ── */}
//           <div className="mt-20 bg-[#1D75DE] rounded-[28px] px-10 py-12 md:px-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
//               <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-28 -mt-28 pointer-events-none" />
//               <div className="relative z-10 max-w-xs">
//                 <h3 className="text-white text-[28px] md:text-[32px] font-bold leading-tight mb-3">
//                   Ready to start<br />your next<br />journey?
//                 </h3>
//                 <p className="text-blue-100/80 text-[14px] leading-relaxed">
//                   Join 50,000+ travelers receiving our best deals and hidden gem recommendations weekly.
//                 </p>
//               </div>
//               <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//                 {subscribed ? (
//                   <p className="text-white font-semibold text-sm">🎉 Subscribed!</p>
//                 ) : (
//                   <>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={e => setEmail(e.target.value)}
//                       onKeyDown={e => e.key === 'Enter' && email.trim() && setSubscribed(true)}
//                       placeholder="Enter your email"
//                       className="px-5 py-3.5 rounded-xl bg-white text-slate-900 text-[14px] outline-none w-full sm:w-64 focus:ring-4 focus:ring-white/20 transition"
//                     />
//                     <button
//                       onClick={() => email.trim() && setSubscribed(true)}
//                       className="px-7 py-3.5 rounded-xl bg-white text-[#1D75DE] font-bold text-[14px] hover:bg-blue-50 transition whitespace-nowrap"
//                     >
//                       Subscribe Now
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* ── Travel Blogs ── */}
//             {blogs.length > 0 && (
//               <section className="mt-16">
//                 <h2 className="text-[22px] font-bold text-slate-900 mb-8">Travel Blogs</h2>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
//                   {blogs.map(blog => (
//                     <BlogCard key={blog.id} blog={blog} />
//                   ))}
//                 </div>
//               </section>
//             )}
//       </div>
//     </div>
//   )
// }


import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { updateMetaTags } from '../../utils/seo'
import { destinationsMock } from '../../data/destinations.mock'
import { blogsMock } from '../../data/blogs.mock'

/* ── animation variants ─────────────────────────────────────── */
const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15 } },
}

/* ── Region Tabs ─────────────────────────────────────────────── */
const REGION_TABS = [
  { key: 'all',           label: 'All' },
  { key: 'europe',        label: 'Europe' },
  { key: 'asia',          label: 'Asia' },
  { key: 'north-america', label: 'North America' },
  { key: 'last-minute',   label: 'Last Minute' },
  { key: 'luxury',        label: 'Luxury' },
  { key: 'budget',        label: 'Budget' },
]

const TOUR_TYPES = ['All', 'Customised Tour', 'Group Tour', 'Honeymoon', 'Adventure']
const DURATIONS  = ['All', '1-3 Days', '4-6 Days', '7-10 Days', '11+ Days']
const HOTEL_STARS = ['All', '3 Star', '4 Star', '5 Star']

/* ── Icons ──────────────────────────────────────────────────── */
const HotelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <rect x="3" y="7" width="18" height="14" rx="1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18M8 7V5a4 4 0 018 0v2" />
  </svg>
)
const FlightIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-4 4m4-4l4 4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l3-1.5L12 19l6-3.5 3 1.5" />
  </svg>
)
const FoodIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4a2 2 0 002 2h4a2 2 0 002-2V3M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
  </svg>
)
const CameraIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)
const StarIcon = () => (
  <svg className="w-3 h-3" fill="#FACC15" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)
const ArrowRight = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)
const ChevronDown = ({ open }) => (
  <svg
    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)
const FilterIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 8h10M11 12h2M9 16h6" />
  </svg>
)
const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

/* ── Filter Dropdown (working) ──────────────────────────────── */
const FilterDropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false)
  const selected = value || options[0]

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer hover:border-gray-300 transition bg-white"
      >
        <span className={`text-[13px] ${selected !== options[0] ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
          {selected}
        </span>
        <ChevronDown open={open} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
            {options.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false) }}
                className={`w-full text-left px-3 py-2 text-[13px] hover:bg-blue-50 hover:text-[#1D75DE] transition ${
                  selected === opt ? 'bg-blue-50 text-[#1D75DE] font-medium' : 'text-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/* ── Filter Panel (reusable for sidebar + mobile drawer) ────── */
const FilterPanel = ({ filters, setFilters, onApply, onReset }) => {
  const [local, setLocal] = useState(filters)

  useEffect(() => { setLocal(filters) }, [filters])

  const update = (key, val) => setLocal(prev => ({ ...prev, [key]: val }))

  return (
    <div className="flex flex-col gap-3">
      <FilterDropdown
        label="Tour Type"
        options={TOUR_TYPES}
        value={local.tourType}
        onChange={v => update('tourType', v)}
      />
      <FilterDropdown
        label="Duration"
        options={DURATIONS}
        value={local.duration}
        onChange={v => update('duration', v)}
      />
      <FilterDropdown
        label="Hotel Rating"
        options={HOTEL_STARS}
        value={local.hotelStar}
        onChange={v => update('hotelStar', v)}
      />

      {/* Price Range */}
      <div className="mt-2">
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Price Range</p>
        <div className="flex justify-between text-[12px] text-gray-500 mb-2">
          <span>₹0</span>
          <span>₹{Number(local.maxPrice).toLocaleString('en-IN')}+</span>
        </div>
        <input
          type="range"
          min={0}
          max={500000}
          step={5000}
          value={local.maxPrice}
          onChange={e => update('maxPrice', Number(e.target.value))}
          className="w-full accent-[#1D75DE] h-1.5 cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-gray-400 mt-1">
          <span>₹0</span>
          <span>₹5,00,000</span>
        </div>
      </div>

      <div className="flex gap-2 mt-3">
        <button
          type="button"
          onClick={() => {
            const reset = { tourType: 'All', duration: 'All', hotelStar: 'All', maxPrice: 500000 }
            setLocal(reset)
            onReset(reset)
          }}
          className="flex-1 border border-gray-200 text-gray-600 text-[13px] font-semibold py-2.5 rounded-lg hover:border-gray-300 transition"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => onApply(local)}
          className="flex-1 bg-[#1D75DE] text-white text-[13px] font-semibold py-2.5 rounded-lg hover:bg-[#165bb0] transition"
        >
          Apply
        </button>
      </div>
    </div>
  )
}

/* ── Destination Card ───────────────────────────────────────── */
const DestCard = ({ dest }) => (
  <Link to={`/destinations/${dest.slug}`} className="block group">
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-44">
        <img
          src={dest.image}
          alt={dest.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
          <StarIcon />
          <span>{dest.rating || '4.3'}</span>
        </div>
        {dest.duration && (
          <span className="absolute top-2 right-2 bg-[#1D75DE]/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm">
            {dest.duration}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-[15px] mb-1 line-clamp-1 group-hover:text-[#1D75DE] transition-colors">
          {dest.name}{dest.country ? `, ${dest.country}` : ''}
        </h3>
        <p className="text-[13px] text-gray-500 line-clamp-2 leading-snug mb-3">
          {dest.description || 'Experience the charm of whitewashed villages, crystal-clear waters, and breathtaking sunsets.'}
        </p>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[12px] font-semibold text-gray-800">
            {dest.nights || '9N'}/{dest.days || '10D'}
          </span>
          <span className="text-[12px] text-gray-400">|</span>
          <span className="text-[12px] text-gray-600">Customised Tour</span>
        </div>
        <p className="text-[11px] text-gray-400 font-medium mb-1.5 mt-2">Includes</p>
        <div className="flex items-center gap-3 text-gray-500 mb-4">
          <HotelIcon />
          <FlightIcon />
          <FoodIcon />
          <CameraIcon />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900 text-[17px]">
            ₹{dest.price ? Number(dest.price).toLocaleString('en-IN') : '1,59,000'}
          </span>
          <span className="text-[13px] font-semibold text-[#1D75DE] hover:underline underline-offset-2">
            View Details
          </span>
        </div>
      </div>
    </div>
  </Link>
)

/* ── Blog Card ──────────────────────────────────────────────── */
const BlogCard = ({ blog }) => (
  <Link to={`/blogs/${blog.slug}`} className="group block">
    <div className="aspect-[4/3] rounded-[18px] overflow-hidden mb-4 border border-gray-100">
      <img
        src={blog.image}
        alt={blog.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <h3 className="text-[16px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#1D75DE] transition-colors line-clamp-2">
      {blog.title}
    </h3>
    <div className="flex items-center justify-between">
      <p className="text-[13px] text-gray-400">
        {blog.publishDate
          ? new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
          : 'March 11, 2026'}
      </p>
      <div className="w-9 h-9 rounded-full bg-[#1D75DE] flex items-center justify-center shadow-md group-hover:bg-[#165bb0] transition-colors shrink-0">
        <ArrowRight />
      </div>
    </div>
  </Link>
)

/* ── Skeleton ───────────────────────────────────────────────── */
const DestCardSkeleton = () => (
  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm animate-pulse">
    <div className="h-44 bg-gray-200" />
    <div className="p-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-full mb-1" />
      <div className="h-3 bg-gray-200 rounded w-5/6 mb-3" />
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-3" />
      <div className="flex gap-2 mb-4">
        {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 rounded bg-gray-200" />)}
      </div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-200 rounded w-20" />
        <div className="h-4 bg-gray-200 rounded w-20" />
      </div>
    </div>
  </div>
)

/* ── Default filters ────────────────────────────────────────── */
const DEFAULT_FILTERS = { tourType: 'All', duration: 'All', hotelStar: 'All', maxPrice: 500000 }

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export const DestinationView = () => {
  const [searchParams] = useSearchParams()
  const [destinations, setDestinations]                 = useState([])
  const [filteredDestinations, setFilteredDestinations] = useState([])
  const [activeRegion, setActiveRegion]                 = useState('all')
  const [visibleCount, setVisibleCount]                 = useState(6)
  const [loading, setLoading]                           = useState(true)
  const [email, setEmail]                               = useState('')
  const [subscribed, setSubscribed]                     = useState(false)
  const [filters, setFilters]                           = useState(DEFAULT_FILTERS)
  const [appliedFilters, setAppliedFilters]             = useState(DEFAULT_FILTERS)
  const [mobileFilterOpen, setMobileFilterOpen]         = useState(false)

  /* count active non-default filters for badge */
  const activeFilterCount = Object.entries(appliedFilters).filter(([k, v]) =>
    v !== DEFAULT_FILTERS[k]
  ).length

  useEffect(() => {
    updateMetaTags({
      title: 'Explore Destinations - TravelBudgetly',
      description: 'Discover amazing destinations across India and the world.',
      keywords: 'travel destinations, india, places to visit',
    })
    const t = setTimeout(() => {
      setDestinations(destinationsMock)
      setLoading(false)
    }, 300)
    return () => clearTimeout(t)
  }, [])

  /* ── Core filtering logic ─────────────────────────────────── */
  const applyAllFilters = useCallback((dests, region, af) => {
    let result = [...dests]

    /* region / tag filter */
    if (region !== 'all') {
      result = result.filter(d =>
        d.region?.toLowerCase().includes(region) ||
        d.zone?.toLowerCase().includes(region) ||
        d.tags?.some(t => t.toLowerCase().includes(region))
      )
    }

    /* tour type */
    if (af.tourType && af.tourType !== 'All') {
      result = result.filter(d =>
        d.tourType?.toLowerCase().includes(af.tourType.toLowerCase())
      )
    }

    /* duration */
    if (af.duration && af.duration !== 'All') {
      result = result.filter(d => {
        const days = parseInt(d.days) || 0
        if (af.duration === '1-3 Days')  return days >= 1  && days <= 3
        if (af.duration === '4-6 Days')  return days >= 4  && days <= 6
        if (af.duration === '7-10 Days') return days >= 7  && days <= 10
        if (af.duration === '11+ Days')  return days >= 11
        return true
      })
    }

    /* hotel star */
    if (af.hotelStar && af.hotelStar !== 'All') {
      const star = parseInt(af.hotelStar)
      result = result.filter(d => parseInt(d.hotelStar) === star)
    }

    /* price */
    result = result.filter(d => {
      const price = Number(d.price) || 0
      return price <= af.maxPrice
    })

    return result
  }, [])

  useEffect(() => {
    const result = applyAllFilters(destinations, activeRegion, appliedFilters)
    setFilteredDestinations(result)
    setVisibleCount(6)
  }, [activeRegion, destinations, appliedFilters, applyAllFilters])

  /* lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileFilterOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileFilterOpen])

  const handleApply = (f) => {
    setAppliedFilters(f)
    setFilters(f)
    setMobileFilterOpen(false)
  }

  const handleReset = (f) => {
    setAppliedFilters(f)
    setFilters(f)
  }

  const handleRegionChange = (region) => {
    setActiveRegion(region)
    setVisibleCount(6)
  }

  const displayed = filteredDestinations.slice(0, visibleCount)
  const hasMore   = visibleCount < filteredDestinations.length
  const blogs     = (blogsMock || []).slice(0, 3)

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">

      {/* ── Mobile Filter Drawer ──────────────────────────────── */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileFilterOpen(false)}
            />
            {/* drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden flex flex-col"
            >
              {/* drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h2 className="text-[16px] font-bold text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* drawer body */}
              <div className="flex-1 overflow-y-auto px-5 py-5">
                <p className="text-[12px] text-gray-400 mb-4">Customise your journey</p>
                <FilterPanel
                  filters={filters}
                  setFilters={setFilters}
                  onApply={handleApply}
                  onReset={handleReset}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex gap-6 mt-8">

          {/* ════════════════════════════════════════════════════
              LEFT SIDEBAR (desktop only)
          ════════════════════════════════════════════════════ */}
          <aside className="hidden lg:flex flex-col gap-4 w-[200px] xl:w-[220px] shrink-0">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="text-[15px] font-bold text-gray-900">Filters</h3>
              <p className="text-[12px] text-gray-400 mb-4">Customise your journey</p>
              <FilterPanel
                filters={filters}
                setFilters={setFilters}
                onApply={handleApply}
                onReset={handleReset}
              />
            </div>

            <div className="border border-blue-100 bg-blue-50/50 rounded-xl p-4">
              <p className="text-[13px] font-bold text-[#1D75DE] mb-1">Need help?</p>
              <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
                Our travel experts are available 24/7 to help you plan your perfect trip.
              </p>
              <a href="#" className="text-[12px] font-semibold text-[#1D75DE] hover:underline flex items-center gap-1">
                Chat now
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </aside>

          {/* ════════════════════════════════════════════════════
              RIGHT CONTENT
          ════════════════════════════════════════════════════ */}
          <div className="flex-1 min-w-0">

            {/* Header */}
            <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1D75DE] mb-1">
              Your Next Adventure
            </p>
            <h1 className="text-[28px] md:text-[34px] font-bold text-slate-900 leading-tight mb-1">
              Explore Top Destinations
            </h1>
            <p className="text-[14px] text-gray-500 mb-5 max-w-xl leading-relaxed">
              Discover your next adventure from our curated list of global hotspots, from the peaks of Switzerland to the shores of Bali.
            </p>

            {/* Mobile filter bar */}
            <div className="flex items-center gap-3 mb-4 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-[13px] font-semibold text-gray-600 hover:border-[#1D75DE] hover:text-[#1D75DE] transition relative"
              >
                <FilterIcon />
                Filters
                {activeFilterCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#1D75DE] text-white text-[10px] font-bold flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* region tabs scrollable on mobile */}
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5 flex-1">
                {REGION_TABS.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => handleRegionChange(tab.key)}
                    className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
                      activeRegion === tab.key
                        ? 'bg-[#1D75DE] text-white border-[#1D75DE]'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#1D75DE] hover:text-[#1D75DE]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Region Tabs */}
            <div className="hidden lg:flex flex-wrap gap-2 mb-6">
              {REGION_TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => handleRegionChange(tab.key)}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
                    activeRegion === tab.key
                      ? 'bg-[#1D75DE] text-white border-[#1D75DE]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#1D75DE] hover:text-[#1D75DE]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active filter chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {appliedFilters.tourType !== 'All' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#1D75DE] text-[12px] font-semibold rounded-full border border-blue-100">
                    {appliedFilters.tourType}
                    <button
                      type="button"
                      onClick={() => handleApply({ ...appliedFilters, tourType: 'All' })}
                      className="hover:text-blue-800"
                    >×</button>
                  </span>
                )}
                {appliedFilters.duration !== 'All' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#1D75DE] text-[12px] font-semibold rounded-full border border-blue-100">
                    {appliedFilters.duration}
                    <button
                      type="button"
                      onClick={() => handleApply({ ...appliedFilters, duration: 'All' })}
                      className="hover:text-blue-800"
                    >×</button>
                  </span>
                )}
                {appliedFilters.hotelStar !== 'All' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#1D75DE] text-[12px] font-semibold rounded-full border border-blue-100">
                    {appliedFilters.hotelStar}
                    <button
                      type="button"
                      onClick={() => handleApply({ ...appliedFilters, hotelStar: 'All' })}
                      className="hover:text-blue-800"
                    >×</button>
                  </span>
                )}
                {appliedFilters.maxPrice < 500000 && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#1D75DE] text-[12px] font-semibold rounded-full border border-blue-100">
                    Under ₹{Number(appliedFilters.maxPrice).toLocaleString('en-IN')}
                    <button
                      type="button"
                      onClick={() => handleApply({ ...appliedFilters, maxPrice: 500000 })}
                      className="hover:text-blue-800"
                    >×</button>
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => handleReset(DEFAULT_FILTERS)}
                  className="px-3 py-1 text-[12px] font-semibold text-gray-500 hover:text-gray-700 underline underline-offset-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Results count */}
            {!loading && (
              <p className="text-[12px] text-gray-400 mb-4">
                Showing <span className="font-semibold text-gray-700">{filteredDestinations.length}</span> destinations
              </p>
            )}

            {/* ── Cards grid ── */}
            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => <DestCardSkeleton key={i} />)}
              </div>
            ) : filteredDestinations.length === 0 ? (
              <div className="text-center py-24 text-gray-400">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No destinations found</h3>
                <p className="text-gray-500 text-sm mb-4">Try changing the filter</p>
                <button
                  type="button"
                  onClick={() => { handleReset(DEFAULT_FILTERS); setActiveRegion('all') }}
                  className="px-5 py-2 bg-[#1D75DE] text-white text-[13px] font-semibold rounded-full hover:bg-[#165bb0] transition"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeRegion}-${JSON.stringify(appliedFilters)}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {displayed.map(dest => (
                    <motion.div key={dest.id} variants={cardVariants}>
                      <DestCard dest={dest} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}

            {/* Load More */}
            {!loading && hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  type="button"
                  onClick={() => setVisibleCount(v => v + 6)}
                  className="px-7 py-2.5 border border-gray-300 rounded-full text-[13px] font-medium text-gray-600 hover:border-[#1D75DE] hover:text-[#1D75DE] transition"
                >
                  Load More
                </button>
              </div>
            )}

          </div>
        </div>

        {/* ── Newsletter CTA ── */}
        <div className="mt-20 bg-[#1D75DE] rounded-[28px] px-10 py-12 md:px-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-28 -mt-28 pointer-events-none" />
          <div className="relative z-10 max-w-xs">
            <h3 className="text-white text-[28px] md:text-[32px] font-bold leading-tight mb-3">
              Ready to start<br />your next<br />journey?
            </h3>
            <p className="text-blue-100/80 text-[14px] leading-relaxed">
              Join 50,000+ travelers receiving our best deals and hidden gem recommendations weekly.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {subscribed ? (
              <p className="text-white font-semibold text-sm">🎉 Subscribed!</p>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && email.trim() && setSubscribed(true)}
                  placeholder="Enter your email"
                  className="px-5 py-3.5 rounded-xl bg-white text-slate-900 text-[14px] outline-none w-full sm:w-64 focus:ring-4 focus:ring-white/20 transition"
                />
                <button
                  type="button"
                  onClick={() => email.trim() && setSubscribed(true)}
                  className="px-7 py-3.5 rounded-xl bg-white text-[#1D75DE] font-bold text-[14px] hover:bg-blue-50 transition whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </>
            )}
          </div>
        </div>

        {/* ── Travel Blogs ── */}
        {blogs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-[22px] font-bold text-slate-900 mb-8">Travel Blogs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}