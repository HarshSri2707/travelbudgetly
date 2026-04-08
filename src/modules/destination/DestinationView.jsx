


// import { useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { AnimatePresence, motion } from 'framer-motion'
// import { updateMetaTags } from '../../utils/seo'
// import { Card } from '../../components/ui/Card'
// import { destinationsMock } from '../../data/destinations.mock'

// export const DestinationView = () => {
//   const [searchParams] = useSearchParams()
//   const [destinations, setDestinations] = useState([])
//   const [filteredDestinations, setFilteredDestinations] = useState([])
//   const [selectedZone, setSelectedZone] = useState(
//     searchParams.get('zone') || 'all'
//   )

//   useEffect(() => {
//     updateMetaTags({
//       title: 'Explore Destinations - TravelBudgetly',
//       description:
//         'Discover amazing destinations across North, South, East and West India.',
//       keywords: 'travel destinations, north india, south india, places to visit',
//     })

//     setTimeout(() => {
//       setDestinations(destinationsMock)
//       setFilteredDestinations(destinationsMock)
//     }, 300)
//   }, [])

//   useEffect(() => {
//     if (selectedZone === 'all') {
//       setFilteredDestinations(destinations)
//     } else {
//       setFilteredDestinations(
//         destinations.filter(d =>
//           d.zone?.toLowerCase().includes(selectedZone.toLowerCase())
//         )
//       )
//     }
//   }, [selectedZone, destinations])

//   const zones = [
//     'all',
//     'North India',
//     'South India',
//     'East India',
//     'West India',
//   ]

//   /* ---------------- animations ---------------- */

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08 },
//     },
//     exit: { opacity: 0 },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.98 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.4, ease: 'easeOut' },
//     },
//     exit: { opacity: 0, y: 20 },
//   }

//   /* ---------------- UI ---------------- */

//   return (
//     <div className="min-h-screen pt-24 pb-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
//             Explore Destinations
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover incredible places across India
//           </p>
//         </div>

//         {/* Zone Filters */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <label className="block text-sm font-semibold text-gray-700 mb-3">
//             Filter by Zone
//           </label>
//           <div className="flex flex-wrap gap-2">
//             {zones.map(zone => (
//               <button
//                 key={zone}
//                 onClick={() => setSelectedZone(zone)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   selectedZone === zone
//                     ? 'bg-primary-600 text-white shadow-md'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {zone === 'all' ? 'All Zones' : zone}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results Count */}
//         <p className="mb-6 text-gray-600">
//           Showing{' '}
//           <span className="font-semibold text-gray-900">
//             {filteredDestinations.length}
//           </span>{' '}
//           destinations
//         </p>

//         {/* Destinations Grid */}
//         {filteredDestinations.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="text-6xl mb-4">🔍</div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">
//               No destinations found
//             </h3>
//             <p className="text-gray-600">Try changing the filter</p>
//           </div>
//         ) : (
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedZone} // 🔥 IMPORTANT FIX
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {filteredDestinations.map(destination => (
//                 <motion.div
//                   key={destination.id}
//                   variants={cardVariants}
//                 >
//                   <Card data={destination} type="destination" />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         )}

//         {/* Popular Regions */}
//         <section className="mt-20 bg-white rounded-2xl shadow-lg p-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="font-display font-bold text-2xl text-gray-900 mb-6"
//           >
//             Popular Regions
//           </motion.h2>

//           <div className="grid md:grid-cols-4 gap-4">
//             {[
//               { name: 'North India', count: '120+ places', emoji: '🏔️' },
//               { name: 'South India', count: '95+ places', emoji: '🌴' },
//               { name: 'East India', count: '65+ places', emoji: '🌄' },
//               { name: 'West India', count: '85+ places', emoji: '🏖️' },
//             ].map((region, i) => (
//               <motion.div
//                 key={region.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
//               >
//                 <div className="text-4xl mb-3">{region.emoji}</div>
//                 <h3 className="font-bold text-lg text-gray-900">
//                   {region.name}
//                 </h3>
//                 <p className="text-sm text-gray-600">{region.count}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }



import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { updateMetaTags } from '../../utils/seo'
import { destinationsMock } from '../../data/destinations.mock'
import { blogsMock } from '../../data/blogs.mock'

/* ── animation variants ─────────────────────────────────────── */
const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  exit:    { opacity: 0 },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, y: 16 },
}

/* ── Tab filters ────────────────────────────────────────────── */
const TABS = ['Europe', 'Asia', 'North America', 'Last Minute', 'Luxury', 'Budget']

/* ── Sidebar dropdown ───────────────────────────────────────── */
const FilterSelect = ({ label, options }) => (
  <div className="relative border border-gray-200 rounded-xl overflow-hidden bg-white">
    <select className="w-full px-4 py-3 text-sm text-gray-700 bg-transparent outline-none cursor-pointer appearance-none font-medium pr-8">
      <option value="">{label}</option>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
    {/* chevron */}
    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
)

/* ── Amenity icons ──────────────────────────────────────────── */
const HotelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 11h2v4H8zm6 0h2v4h-2z" />
  </svg>
)
const FlightIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0L7 9m5-4l5 4M3 19h18" />
  </svg>
)
const FoodIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v8m0 0a4 4 0 100 8 4 4 0 000-8zm-6-2v4m12-4v4" />
  </svg>
)
const CameraIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Destination card ───────────────────────────────────────── */
const DestCard = ({ dest }) => (
  <Link to={`/destinations/${dest.slug}`} className="block group">
    {/* image */}
    <div className="relative h-[155px] rounded-xl overflow-hidden mb-3">
      <img
        src={dest.image}
        alt={dest.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* duration badge bottom-left */}
      {dest.duration && (
        <span className="absolute bottom-2 left-2 bg-black/55 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm">
          {dest.duration}
        </span>
      )}
    </div>

    {/* name */}
    <h3 className="font-bold text-gray-900 text-sm mb-0.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
      {dest.name}{dest.country ? `, ${dest.country}` : ''}
    </h3>

    {/* excerpt */}
    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mb-2">
      {dest.description || 'Experience the charm of whitewashed village, crystal-clear waters, and breathtaking sunsets.'}
    </p>

    {/* nights/days + tour type */}
    <div className="flex items-center gap-1.5 mb-1.5">
      <span className="text-[10px] font-bold text-gray-700">
        {dest.nights || '9N'}/{dest.days || '10D'}
      </span>
      <span className="text-[10px] text-blue-600 font-semibold">Customised Tour</span>
    </div>

    {/* Includes label */}
    <p className="text-[10px] font-semibold text-gray-500 mb-1.5">Includes</p>

    {/* amenity icons */}
    <div className="flex items-center gap-2 mb-3">
      <HotelIcon />
      <FlightIcon />
      <FoodIcon />
      <CameraIcon />
    </div>

    {/* price + view details */}
    <div className="flex items-center justify-between">
      <span className="font-bold text-gray-900 text-sm">
        {dest.price ? `₹${Number(dest.price).toLocaleString()}` : '1,59,000'}
      </span>
      <span className="text-[11px] text-blue-600 font-semibold hover:underline underline-offset-2">
        View Details
      </span>
    </div>
  </Link>
)

/* ── Blog card ──────────────────────────────────────────────── */
const BlogCard = ({ blog }) => (
  <Link to={`/blogs/${blog.slug}`} className="group block">
    <div className="h-[140px] rounded-xl overflow-hidden mb-3">
      <img
        src={blog.image}
        alt={blog.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
      {blog.title}
    </h3>
    <div className="flex items-center justify-between mt-2">
      <p className="text-[11px] text-gray-400">
        {blog.publishDate
          ? new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
          : 'March 11, 2026'}
      </p>
      <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-700 transition-colors">
        <svg viewBox="0 0 10 10" className="w-3 h-3" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 5h6M5 2l3 3-3 3" />
        </svg>
      </span>
    </div>
  </Link>
)

/* ── Skeleton cards ─────────────────────────────────────────── */
const DestCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-[155px] rounded-xl bg-gray-200 mb-3" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-200 rounded w-full mb-1" />
    <div className="h-3 bg-gray-200 rounded w-5/6 mb-3" />
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-1" />
    <div className="flex gap-2 mb-3">
      {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 rounded bg-gray-200" />)}
    </div>
    <div className="flex justify-between">
      <div className="h-4 bg-gray-200 rounded w-16" />
      <div className="h-4 bg-gray-200 rounded w-16" />
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export const DestinationView = () => {
  const [searchParams] = useSearchParams()
  const [destinations, setDestinations]               = useState([])
  const [filteredDestinations, setFilteredDestinations] = useState([])
  const [selectedZone, setSelectedZone]               = useState(searchParams.get('zone') || 'all')
  const [activeTab, setActiveTab]                     = useState('Europe')
  const [visibleCount, setVisibleCount]               = useState(6)
  const [loading, setLoading]                         = useState(true)
  const [email, setEmail]                             = useState('')
  const [subscribed, setSubscribed]                   = useState(false)
  const [priceMax, setPriceMax]                       = useState(500000)

  useEffect(() => {
    updateMetaTags({
      title: 'Explore Destinations - TravelBudgetly',
      description: 'Discover amazing destinations across India and the world.',
      keywords: 'travel destinations, india, places to visit',
    })
    const t = setTimeout(() => {
      setDestinations(destinationsMock)
      setFilteredDestinations(destinationsMock)
      setLoading(false)
    }, 300)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (selectedZone === 'all') {
      setFilteredDestinations(destinations)
    } else {
      setFilteredDestinations(
        destinations.filter(d => d.zone?.toLowerCase().includes(selectedZone.toLowerCase()))
      )
    }
    setVisibleCount(6)
  }, [selectedZone, destinations])

  const displayed = filteredDestinations.slice(0, visibleCount)
  const hasMore   = visibleCount < filteredDestinations.length
  const blogs     = (blogsMock || []).slice(0, 3)

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex gap-6 lg:gap-8">

          {/* ════════════════════════════════════════════════════
              LEFT SIDEBAR
          ════════════════════════════════════════════════════ */}
          <aside className="hidden lg:flex flex-col gap-3 w-[210px] flex-shrink-0">

            <div className="mb-1">
              <h2 className="font-bold text-base text-gray-900">Filters</h2>
              <p className="text-xs text-gray-400 mt-0.5">Customize your journey</p>
            </div>

            <FilterSelect label="Destination" options={['India', 'International', 'Europe', 'Asia']} />
            <FilterSelect label="Tour Type"   options={['Adventure', 'Honeymoon', 'Family', 'Solo']} />
            <FilterSelect label="Flights"     options={['Included', 'Not Included']} />
            <FilterSelect label="Duration"    options={['3-5 Days', '6-8 Days', '9-12 Days', '13+ Days']} />
            <FilterSelect label="Hotel"       options={['3 Star', '4 Star', '5 Star', 'Resort']} />

            {/* Price range */}
            <div className="mt-1">
              <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Price Range</p>
              <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
                <span>₹0</span>
                <span>₹{priceMax.toLocaleString()}+</span>
              </div>
              <input
                type="range"
                min={0}
                max={500000}
                step={5000}
                value={priceMax}
                onChange={e => setPriceMax(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-1"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-full text-sm transition-colors mt-1">
              Apply Filters
            </button>

            {/* Need Help card */}
            <div className="bg-gray-50 rounded-2xl p-4 mt-1">
              <p className="font-bold text-sm text-gray-900 mb-1">Need Help?</p>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
                Our travel experts are available 24/7 to help you plan your perfect trip.
              </p>
              <button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                Chat now
                <svg viewBox="0 0 10 10" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </button>
            </div>
          </aside>

          {/* ════════════════════════════════════════════════════
              RIGHT CONTENT
          ════════════════════════════════════════════════════ */}
          <div className="flex-1 min-w-0">

            {/* label */}
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">
              Your Next Adventure
            </p>

            {/* title */}
            <h1 className="font-bold text-2xl md:text-3xl text-gray-900 mb-1">
              Explore Top Destinations
            </h1>
            <p className="text-sm text-gray-500 mb-5 max-w-xl leading-relaxed">
              Discover your next adventure from our curated list of global hotspots, from the peaks of Switzerland to the shores of Bali.
            </p>

            {/* tab filters */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0
                    transition-all duration-200 border
                    ${activeTab === tab
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* mobile zone filter */}
            <div className="flex lg:hidden gap-2 overflow-x-auto scrollbar-hide mb-5 pb-1">
              {['all', 'North India', 'South India', 'East India', 'West India'].map(zone => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`
                    px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0
                    border transition-all
                    ${selectedZone === zone
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-600 border-gray-200'
                    }
                  `}
                >
                  {zone === 'all' ? 'All Zones' : zone}
                </button>
              ))}
            </div>

            {/* ── Cards grid ── */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {Array.from({ length: 6 }).map((_, i) => <DestCardSkeleton key={i} />)}
              </div>
            ) : filteredDestinations.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No destinations found</h3>
                <p className="text-gray-500 text-sm">Try changing the filter</p>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedZone}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
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
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setVisibleCount(v => v + 6)}
                  className="px-8 py-2.5 border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  Load More
                </button>
              </div>
            )}

            {/* ── Newsletter CTA ── */}
            <div className="mt-12 bg-[#1a3a5c] rounded-2xl px-7 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden relative">
              {/* decorative circle */}
              <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-blue-700/30 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
              <div className="text-white flex-1 relative z-10">
                <h3 className="font-bold text-2xl md:text-3xl leading-snug mb-2">
                  Ready to start<br />your next journey?
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  Join 50,000+ travelers receiving our best deals and hidden gem recommendations weekly.
                </p>
              </div>
              <div className="flex gap-2 w-full md:w-auto relative z-10">
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
                      className="flex-1 md:w-52 px-4 py-2.5 rounded-lg text-sm text-gray-900 bg-white outline-none"
                    />
                    <button
                      onClick={() => email.trim() && setSubscribed(true)}
                      className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                    >
                      Subscribe Now
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* ── Travel Blogs ── */}
            {blogs.length > 0 && (
              <section className="mt-12">
                <h2 className="font-bold text-xl text-gray-900 mb-5">Travel Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {blogs.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}