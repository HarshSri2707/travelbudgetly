


// import { useState, useEffect } from 'react'
// import { useParams, useSearchParams, useNavigate, Link } from 'react-router-dom'
// import { updateMetaTags } from '../../utils/seo'
// import { packagesMock } from '../../data/packages.mock'
// import { blogsMock } from '../../data/blogs.mock'

// /* ── Icons ─────────────────────────────────────────────────── */
// const ForkIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4a2 2 0 002 2h4a2 2 0 002-2V3M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
//   </svg>
// )
// const FlightIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-4 4m4-4l4 4" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l3-1.5L12 19l6-3.5 3 1.5" />
//   </svg>
// )
// const HotelIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
//     <rect x="3" y="7" width="18" height="14" rx="1" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18M8 7V5a4 4 0 018 0v2" />
//   </svg>
// )
// const CameraIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
//     <circle cx="12" cy="13" r="4" />
//   </svg>
// )
// const StarIcon = () => (
//   <svg className="w-3 h-3" fill="#FACC15" viewBox="0 0 24 24">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//   </svg>
// )
// const ChevronDown = () => (
//   <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//   </svg>
// )
// const ArrowRight = () => (
//   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//   </svg>
// )

// /* ── Budget Tabs ───────────────────────────────────────────── */
// const BUDGET_TABS = [
//   { key: 'under-50k',  label: 'Under 50K',     min: 0,      max: 50000 },
//   { key: '50k-2lkh',  label: '₹50K – ₹2LKH',  min: 50000,  max: 200000 },
//   { key: '2lkh-3lkh', label: '₹2LKH – ₹3LKH', min: 200000, max: 300000 },
//   { key: '3lkh-above',label: '₹3LKH Above',   min: 300000, max: Infinity },
// ]

// /* ── Package Card ──────────────────────────────────────────── */
// const PackageCard = ({ pkg }) => {
//   const navigate = useNavigate()
//   return (
//     <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//       {/* Image */}
//       <div className="relative">
//         <img
//           src={pkg.image}
//           alt={pkg.destination}
//           className="w-full h-44 object-cover"
//         />
//         <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
//           <StarIcon />
//           <span>{pkg.rating || '4.3'}</span>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="p-4">
//         <h3 className="text-[15px] font-bold text-gray-900 mb-1">{pkg.destination || pkg.title}</h3>
//         <p className="text-[13px] text-gray-500 leading-snug mb-3 line-clamp-2">
//           {pkg.description || pkg.excerpt}
//         </p>

//         {/* Duration + Tour Type */}
//         <div className="flex items-center gap-2 mb-1">
//           <span className="text-[12px] font-semibold text-gray-800">{pkg.duration || '9N/8D'}</span>
//           <span className="text-[12px] text-gray-400">|</span>
//           <span className="text-[12px] text-gray-600">{pkg.tourType || 'Customised Tour'}</span>
//         </div>

//         {/* Includes label */}
//         <p className="text-[11px] text-gray-400 font-medium mb-1.5 mt-2">Includes</p>

//         {/* Amenity Icons */}
//         <div className="flex items-center gap-3 text-gray-500 mb-4">
//           <ForkIcon />
//           <FlightIcon />
//           <HotelIcon />
//           <CameraIcon />
//         </div>

//         {/* Price + CTA */}
//         <div className="flex items-center justify-between">
//           <span className="text-[17px] font-bold text-gray-900">
//             {typeof pkg.price === 'number'
//               ? pkg.price.toLocaleString('en-IN')
//               : pkg.price}
//           </span>
//           <button
//             onClick={() => navigate(`/packages/${pkg.slug || pkg.id}`)}
//             className="text-[13px] font-semibold text-[#1D75DE] hover:underline"
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ── Filter Dropdown ───────────────────────────────────────── */
// const FilterDropdown = ({ label }) => (
//   <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer hover:border-gray-300 transition">
//     <span className="text-[13px] text-gray-500">{label}</span>
//     <ChevronDown />
//   </div>
// )

// /* ══════════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ══════════════════════════════════════════════════════════════ */
// export const PackageView = () => {
//   const { budget } = useParams()
//   const [searchParams] = useSearchParams()
//   const navigate = useNavigate()

//   const [packages, setPackages] = useState([])
//   const [filteredPackages, setFilteredPackages] = useState([])
//   const [visibleCount, setVisibleCount] = useState(6)
//   const [selectedBudget, setSelectedBudget] = useState(
//     budget || searchParams.get('budget') || 'under-50k'
//   )
//   const [email, setEmail] = useState('')

//   // Price range slider state
//   const [priceRange, setPriceRange] = useState(500000)

//   // Recent blogs (3)
//   const recentBlogs = (blogsMock || []).slice(0, 3)

//   useEffect(() => {
//     updateMetaTags({
//       title: 'Explore Packages - TravelBudgetly',
//       description: 'Discover your next adventure from our curated list of packages.',
//     })
//     setTimeout(() => {
//       setPackages(packagesMock)
//     }, 300)
//   }, [])

//   useEffect(() => {
//     const tab = BUDGET_TABS.find(t => t.key === selectedBudget)
//     if (!tab) { setFilteredPackages(packages); return }
//     const filtered = packages.filter(p => {
//       const price = typeof p.price === 'number' ? p.price : 0
//       return price >= tab.min && price < tab.max && price <= priceRange
//     })
//     setFilteredPackages(filtered)
//     setVisibleCount(6)
//   }, [selectedBudget, packages, priceRange])

//   const visiblePackages = filteredPackages.slice(0, visibleCount)
//   const hasMore = visibleCount < filteredPackages.length

//   return (
//     <div className="min-h-screen bg-white pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* ── Main Layout: Sidebar + Content ─────────────────────── */}
//         <div className="flex gap-6 mt-8">

//           {/* ── LEFT SIDEBAR ─────────────────────────────────────── */}
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

//           {/* ── RIGHT CONTENT ─────────────────────────────────────── */}
//           <div className="flex-1 min-w-0">

//             {/* Header */}
//             <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1D75DE] mb-1">Your Next Adventure</p>
//             <h1 className="text-[28px] md:text-[34px] font-bold text-slate-900 leading-tight mb-1">
//               Explore Packages
//             </h1>
//             <p className="text-[14px] text-gray-500 mb-6">
//               Discover your next adventure from our curated list of packages
//             </p>

//             {/* Budget Tabs */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {BUDGET_TABS.map((tab, i) => (
//                 <button
//                   key={tab.key}
//                   onClick={() => setSelectedBudget(tab.key)}
//                   className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
//                     selectedBudget === tab.key
//                       ? 'bg-[#1D75DE] text-white border-[#1D75DE]'
//                       : 'bg-white text-gray-600 border-gray-200 hover:border-[#1D75DE] hover:text-[#1D75DE]'
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>

//             {/* Package Grid */}
//             {visiblePackages.length === 0 ? (
//               <div className="text-center py-24 text-gray-400">
//                 <p className="text-[15px]">No packages found for this budget range.</p>
//               </div>
//             ) : (
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {visiblePackages.map(pkg => (
//                   <PackageCard key={pkg.id} pkg={pkg} />
//                 ))}
//               </div>
//             )}

//             {/* Load More */}
//             {hasMore && (
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

//         {/* ── Newsletter CTA ─────────────────────────────────────── */}
//         <div className="mt-20 bg-[#1D75DE] rounded-[28px] px-10 py-12 md:px-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
//           <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-28 -mt-28 pointer-events-none" />
//           <div className="relative z-10 max-w-xs">
//             <h2 className="text-white text-[28px] md:text-[32px] font-bold leading-tight mb-3">
//               Ready to start<br />your next<br />journey?
//             </h2>
//             <p className="text-blue-100/80 text-[14px] leading-relaxed">
//               Join 50,000+ travelers receiving our best deals and hidden gem recommendations weekly.
//             </p>
//           </div>
//           <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               className="px-5 py-3.5 rounded-xl bg-white text-slate-900 text-[14px] outline-none w-full sm:w-64 focus:ring-4 focus:ring-white/20 transition"
//             />
//             <button
//               onClick={() => setEmail('')}
//               className="px-7 py-3.5 rounded-xl bg-white text-[#1D75DE] font-bold text-[14px] hover:bg-blue-50 transition whitespace-nowrap"
//             >
//               Subscribe Now
//             </button>
//           </div>
//         </div>

//         {/* ── Travel Blogs ───────────────────────────────────────── */}
//         <div className="mt-16">
//           <h2 className="text-[22px] font-bold text-slate-900 mb-8">Travel Blogs</h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
//             {recentBlogs.map(blog => (
//               <Link key={blog.id} to={`/blogs/${blog.slug}`} className="group block">
//                 <div className="aspect-[4/3] rounded-[18px] overflow-hidden mb-4 border border-gray-100">
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                 </div>
//                 <h3 className="text-[16px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#1D75DE] transition-colors line-clamp-2">
//                   {blog.title}
//                 </h3>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[13px] text-gray-400">
//                     {new Date(blog.publishDate).toLocaleDateString('en-US', {
//                       month: 'long', day: 'numeric', year: 'numeric',
//                     })}
//                   </span>
//                   <div className="w-9 h-9 rounded-full bg-[#1D75DE] flex items-center justify-center shadow-md group-hover:bg-[#165bb0] transition-colors">
//                     <ArrowRight />
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }


import { useState, useEffect, useCallback } from 'react'
import { useParams, useSearchParams, useNavigate, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { updateMetaTags } from '../../utils/seo'
import { packagesMock } from '../../data/packages.mock'
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

/* ── Icons ─────────────────────────────────────────────────── */
const ForkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4a2 2 0 002 2h4a2 2 0 002-2V3M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
  </svg>
)
const FlightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-4 4m4-4l4 4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l3-1.5L12 19l6-3.5 3 1.5" />
  </svg>
)
const HotelIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <rect x="3" y="7" width="18" height="14" rx="1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18M8 7V5a4 4 0 018 0v2" />
  </svg>
)
const CameraIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
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

/* ── Budget Tabs ───────────────────────────────────────────── */
const BUDGET_TABS = [
  { key: 'all',        label: 'All',             min: 0,      max: Infinity },
  { key: 'under-50k',  label: 'Under ₹50K',      min: 0,      max: 50000 },
  { key: '50k-2lkh',  label: '₹50K – ₹2LKH',   min: 50000,  max: 200000 },
  { key: '2lkh-3lkh', label: '₹2LKH – ₹3LKH',  min: 200000, max: 300000 },
  { key: '3lkh-above',label: '₹3LKH Above',     min: 300000, max: Infinity },
]

const TOUR_TYPES  = ['All', 'Customised Tour', 'Group Tour', 'Honeymoon', 'Adventure']
const DURATIONS   = ['All', '1-3 Days', '4-6 Days', '7-10 Days', '11+ Days']
const HOTEL_STARS = ['All', '3 Star', '4 Star', '5 Star']
const FLIGHT_OPTS = ['All', 'With Flights', 'Without Flights']

const DEFAULT_FILTERS = { tourType: 'All', duration: 'All', hotelStar: 'All', flights: 'All', maxPrice: 500000 }

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

/* ── Filter Panel ────────────────────────────────────────────── */
const FilterPanel = ({ filters, setFilters, onApply, onReset }) => {
  const [local, setLocal] = useState(filters)
  useEffect(() => { setLocal(filters) }, [filters])
  const update = (key, val) => setLocal(prev => ({ ...prev, [key]: val }))

  return (
    <div className="flex flex-col gap-3">
      <FilterDropdown label="Tour Type" options={TOUR_TYPES} value={local.tourType} onChange={v => update('tourType', v)} />
      <FilterDropdown label="Flights"   options={FLIGHT_OPTS} value={local.flights}  onChange={v => update('flights', v)} />
      <FilterDropdown label="Duration"  options={DURATIONS}   value={local.duration} onChange={v => update('duration', v)} />
      <FilterDropdown label="Hotel"     options={HOTEL_STARS} value={local.hotelStar} onChange={v => update('hotelStar', v)} />

      <div className="mt-2">
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Price Range</p>
        <div className="flex justify-between text-[12px] text-gray-500 mb-2">
          <span>₹0</span>
          <span>₹{Number(local.maxPrice).toLocaleString('en-IN')}</span>
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
          onClick={() => { setLocal(DEFAULT_FILTERS); onReset(DEFAULT_FILTERS) }}
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

/* ── Package Card ──────────────────────────────────────────── */
const PackageCard = ({ pkg }) => {
  const navigate = useNavigate()
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={pkg.image} alt={pkg.destination} className="w-full h-44 object-cover" />
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
          <StarIcon />
          <span>{pkg.rating || '4.3'}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[15px] font-bold text-gray-900 mb-1">{pkg.destination || pkg.title}</h3>
        <p className="text-[13px] text-gray-500 leading-snug mb-3 line-clamp-2">{pkg.description || pkg.excerpt}</p>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[12px] font-semibold text-gray-800">{pkg.duration || '9N/8D'}</span>
          <span className="text-[12px] text-gray-400">|</span>
          <span className="text-[12px] text-gray-600">{pkg.tourType || 'Customised Tour'}</span>
        </div>
        <p className="text-[11px] text-gray-400 font-medium mb-1.5 mt-2">Includes</p>
        <div className="flex items-center gap-3 text-gray-500 mb-4">
          <ForkIcon />
          <FlightIcon />
          <HotelIcon />
          <CameraIcon />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[17px] font-bold text-gray-900">
            ₹{typeof pkg.price === 'number' ? pkg.price.toLocaleString('en-IN') : pkg.price}
          </span>
          <button
            type="button"
            onClick={() => navigate(`/packages/${pkg.slug || pkg.id}`)}
            className="text-[13px] font-semibold text-[#1D75DE] hover:underline"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Skeleton ───────────────────────────────────────────────── */
const PackageCardSkeleton = () => (
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

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export const PackageView = () => {
  const { budget } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [packages, setPackages]               = useState([])
  const [filteredPackages, setFilteredPackages] = useState([])
  const [visibleCount, setVisibleCount]        = useState(6)
  const [loading, setLoading]                  = useState(true)
  const [selectedBudget, setSelectedBudget]    = useState(
    budget || searchParams.get('budget') || 'all'
  )
  const [filters, setFilters]                  = useState(DEFAULT_FILTERS)
  const [appliedFilters, setAppliedFilters]    = useState(DEFAULT_FILTERS)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [email, setEmail]                       = useState('')
  const [subscribed, setSubscribed]             = useState(false)

  const recentBlogs = (blogsMock || []).slice(0, 3)

  const activeFilterCount = Object.entries(appliedFilters).filter(([k, v]) =>
    v !== DEFAULT_FILTERS[k]
  ).length

  useEffect(() => {
    updateMetaTags({
      title: 'Explore Packages - TravelBudgetly',
      description: 'Discover your next adventure from our curated list of packages.',
    })
    const t = setTimeout(() => {
      setPackages(packagesMock)
      setLoading(false)
    }, 300)
    return () => clearTimeout(t)
  }, [])

  /* ── Core filtering logic ─────────────────────────────────── */
  const applyAllFilters = useCallback((pkgs, budgetKey, af) => {
    let result = [...pkgs]

    /* budget tab */
    const tab = BUDGET_TABS.find(t => t.key === budgetKey)
    if (tab && budgetKey !== 'all') {
      result = result.filter(p => {
        const price = typeof p.price === 'number' ? p.price : 0
        return price >= tab.min && price < tab.max
      })
    }

    /* tour type */
    if (af.tourType && af.tourType !== 'All') {
      result = result.filter(p =>
        p.tourType?.toLowerCase().includes(af.tourType.toLowerCase())
      )
    }

    /* flights */
    if (af.flights && af.flights !== 'All') {
      result = result.filter(p =>
        af.flights === 'With Flights' ? p.includesFlights : !p.includesFlights
      )
    }

    /* duration */
    if (af.duration && af.duration !== 'All') {
      result = result.filter(p => {
        const days = parseInt(p.days) || parseInt(p.duration) || 0
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
      result = result.filter(p => parseInt(p.hotelStar) === star)
    }

    /* max price from slider */
    result = result.filter(p => {
      const price = typeof p.price === 'number' ? p.price : 0
      return price <= af.maxPrice
    })

    return result
  }, [])

  useEffect(() => {
    const result = applyAllFilters(packages, selectedBudget, appliedFilters)
    setFilteredPackages(result)
    setVisibleCount(6)
  }, [selectedBudget, packages, appliedFilters, applyAllFilters])

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

  const handleBudgetChange = (key) => {
    setSelectedBudget(key)
    setVisibleCount(6)
  }

  const visiblePackages = filteredPackages.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPackages.length

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">

      {/* ── Mobile Filter Drawer ─────────────────────────────── */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileFilterOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden flex flex-col"
            >
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

          {/* ── LEFT SIDEBAR (desktop) ───────────────────────── */}
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

          {/* ── RIGHT CONTENT ─────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1D75DE] mb-1">Your Next Adventure</p>
            <h1 className="text-[28px] md:text-[34px] font-bold text-slate-900 leading-tight mb-1">
              Explore Packages
            </h1>
            <p className="text-[14px] text-gray-500 mb-5">
              Discover your next adventure from our curated list of packages
            </p>

            {/* Mobile filter bar */}
            <div className="flex items-center gap-3 mb-4 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-[13px] font-semibold text-gray-600 hover:border-[#1D75DE] hover:text-[#1D75DE] transition relative shrink-0"
              >
                <FilterIcon />
                Filters
                {activeFilterCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#1D75DE] text-white text-[10px] font-bold flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5 flex-1">
                {BUDGET_TABS.map(tab => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => handleBudgetChange(tab.key)}
                    className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
                      selectedBudget === tab.key
                        ? 'bg-[#1D75DE] text-white border-[#1D75DE]'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#1D75DE] hover:text-[#1D75DE]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Budget Tabs */}
            <div className="hidden lg:flex flex-wrap gap-2 mb-6">
              {BUDGET_TABS.map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleBudgetChange(tab.key)}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
                    selectedBudget === tab.key
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
                    <button type="button" onClick={() => handleApply({ ...appliedFilters, tourType: 'All' })} className="hover:text-blue-800">×</button>
                  </span>
                )}
                {appliedFilters.flights !== 'All' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#1D75DE] text-[12px] font-semibold rounded-full border border-blue-100">
                    {appliedFilters.flights}
                    <button type="button" onClick={() => handleApply({ ...appliedFilters, flights: 'All' })} className="hover:text-blue-800">×</button>
                  </span>
                )}
                {appliedFilters.duration !== 'All' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#1D75DE] text-[12px] font-semibold rounded-full border border-blue-100">
                    {appliedFilters.duration}
                    <button type="button" onClick={() => handleApply({ ...appliedFilters, duration: 'All' })} className="hover:text-blue-800">×</button>
                  </span>
                )}
                {appliedFilters.hotelStar !== 'All' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#1D75DE] text-[12px] font-semibold rounded-full border border-blue-100">
                    {appliedFilters.hotelStar}
                    <button type="button" onClick={() => handleApply({ ...appliedFilters, hotelStar: 'All' })} className="hover:text-blue-800">×</button>
                  </span>
                )}
                {appliedFilters.maxPrice < 500000 && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#1D75DE] text-[12px] font-semibold rounded-full border border-blue-100">
                    Under ₹{Number(appliedFilters.maxPrice).toLocaleString('en-IN')}
                    <button type="button" onClick={() => handleApply({ ...appliedFilters, maxPrice: 500000 })} className="hover:text-blue-800">×</button>
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
                Showing <span className="font-semibold text-gray-700">{filteredPackages.length}</span> packages
              </p>
            )}

            {/* Package Grid */}
            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => <PackageCardSkeleton key={i} />)}
              </div>
            ) : visiblePackages.length === 0 ? (
              <div className="text-center py-24 text-gray-400">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-[15px] font-semibold text-gray-700 mb-2">No packages found</p>
                <p className="text-sm mb-4">Try changing the filters or budget range</p>
                <button
                  type="button"
                  onClick={() => { handleReset(DEFAULT_FILTERS); setSelectedBudget('all') }}
                  className="px-5 py-2 bg-[#1D75DE] text-white text-[13px] font-semibold rounded-full hover:bg-[#165bb0] transition"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedBudget}-${JSON.stringify(appliedFilters)}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {visiblePackages.map(pkg => (
                    <motion.div key={pkg.id} variants={cardVariants}>
                      <PackageCard pkg={pkg} />
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

        {/* ── Newsletter CTA ─────────────────────────────────────── */}
        <div className="mt-20 bg-[#1D75DE] rounded-[28px] px-10 py-12 md:px-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-28 -mt-28 pointer-events-none" />
          <div className="relative z-10 max-w-xs">
            <h2 className="text-white text-[28px] md:text-[32px] font-bold leading-tight mb-3">
              Ready to start<br />your next<br />journey?
            </h2>
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
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && email.trim() && setSubscribed(true)}
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

        {/* ── Travel Blogs ───────────────────────────────────────── */}
        <div className="mt-16">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Travel Blogs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {recentBlogs.map(blog => (
              <Link key={blog.id} to={`/blogs/${blog.slug}`} className="group block">
                <div className="aspect-[4/3] rounded-[18px] overflow-hidden mb-4 border border-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#1D75DE] transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-gray-400">
                    {new Date(blog.publishDate).toLocaleDateString('en-US', {
                      month: 'long', day: 'numeric', year: 'numeric',
                    })}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#1D75DE] flex items-center justify-center shadow-md group-hover:bg-[#165bb0] transition-colors">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}