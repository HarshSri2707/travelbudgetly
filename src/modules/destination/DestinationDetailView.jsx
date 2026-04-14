


// import { useState, useEffect } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { updateMetaTags } from '../../utils/seo'
// import { destinationsMock } from '../../data/destinations.mock'
// import { packagesMock } from '../../data/packages.mock'

// /* ── Arrow icon ─────────────────────────────────────────────── */
// const ArrowIcon = ({ cls = 'w-3 h-3' }) => (
//   <svg viewBox="0 0 10 10" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M2 5h6M5 2l3 3-3 3" />
//   </svg>
// )

// /* ── Highlight icon ─────────────────────────────────────────── */
// const HighlightIcon = ({ index }) => {
//   const icons = ['☀️', '🥾', '🍷', '🚢', '🏛️', '📸', '🌊', '🎭']
//   return <span className="text-xl">{icons[index % icons.length]}</span>
// }

// /* ── Skeleton ───────────────────────────────────────────────── */
// export const DestinationDetailSkeleton = () => (
//   <div className="min-h-screen pt-20 pb-16 bg-white">
//     <div className="max-w-5xl mx-auto px-4 animate-pulse">
//       {/* hero */}
//       <div className="h-72 md:h-96 rounded-2xl bg-gray-200 mb-4" />
//       {/* thumbnail strip */}
//       <div className="flex gap-2 mb-8">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="w-16 h-12 rounded-lg bg-gray-200 shrink-0" />
//         ))}
//       </div>
//       {/* 2-col */}
//       <div className="grid lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 space-y-6">
//           <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-3">
//             <div className="h-3 bg-gray-200 rounded w-24" />
//             <div className="h-8 bg-gray-200 rounded w-48" />
//             <div className="h-4 bg-gray-200 rounded w-full" />
//             <div className="h-4 bg-gray-200 rounded w-5/6" />
//           </div>
//           <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
//             <div className="h-6 bg-gray-200 rounded w-40" />
//             <div className="grid grid-cols-2 gap-4">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <div key={i} className="h-20 bg-gray-200 rounded-xl" />
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="space-y-4">
//           <div className="h-72 bg-gray-200 rounded-2xl" />
//           <div className="h-32 bg-gray-200 rounded-2xl" />
//         </div>
//       </div>
//     </div>
//   </div>
// )

// /* ══════════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ══════════════════════════════════════════════════════════════ */
// export const DestinationDetailView = () => {
//   const { slug }   = useParams()
//   const navigate   = useNavigate()

//   const [destination, setDestination]     = useState(null)
//   const [relatedPackages, setRelatedPackages] = useState([])
//   const [loading, setLoading]             = useState(true)
//   const [activeThumb, setActiveThumb]     = useState(0)
//   const [email, setEmail]                 = useState('')
//   const [subscribed, setSubscribed]       = useState(false)

//   /* thumbnail images — use destination image + placeholder extras */
//   const [thumbs, setThumbs] = useState([])

//   useEffect(() => {
//     window.scrollTo(0, 0)
//     const t = setTimeout(() => {
//       const found = destinationsMock.find(d => d.slug === slug)
//       if (!found) { navigate('/destinations'); return }

//       setDestination(found)

//       /* build thumbnail list */
//       const extras = [
//         'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=200&q=70',
//         'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=200&q=70',
//         'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=200&q=70',
//         'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70',
//         'https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=200&q=70',
//       ]
//       setThumbs([found.image, ...extras].slice(0, 6))

//       const related = packagesMock.filter(pkg =>
//         pkg.destination?.toLowerCase().includes(found.name.toLowerCase())
//       )
//       setRelatedPackages(related)

//       updateMetaTags({
//         title: `${found.name} - Travel Guide & Packages`,
//         description: found.description,
//         keywords: `${found.name}, travel, visit`,
//       })
//       setLoading(false)
//     }, 500)
//     return () => clearTimeout(t)
//   }, [slug, navigate])

//   if (loading || !destination) return <DestinationDetailSkeleton />

//   return (
//     <div className="min-h-screen pt-26 pb-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 md:px-6">

//         {/* ── Breadcrumb ── */}
//         <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
//           <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
//           <span>/</span>
//           <Link to="/destinations" className="hover:text-blue-600 transition-colors">Destinations</Link>
//           <span>/</span>
//           <span className="text-gray-600 font-medium">{destination.name}</span>
//         </div>

//         {/* ── Hero image ── */}
//         <div className="relative h-64 md:h-[380px] rounded-2xl overflow-hidden mb-3 shadow-lg">
//           <img
//             src={thumbs[activeThumb] || destination.image}
//             alt={destination.name}
//             className="w-full h-full object-cover transition-all duration-500"
//           />
//         </div>

//         {/* ── Thumbnail strip ── */}
//         <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
//           {thumbs.map((src, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveThumb(i)}
//               className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
//                 activeThumb === i ? 'border-blue-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
//               }`}
//             >
//               <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
//             </button>
//           ))}
//         </div>

//         {/* ── 2-column layout ── */}
//         <div className="grid lg:grid-cols-3 gap-6">

//           {/* ════════════════════════════════════════════════
//               LEFT — main content
//           ════════════════════════════════════════════════ */}
//           <div className="lg:col-span-2 space-y-6">

//             {/* Overview card */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//               {/* zone label */}
//               <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1">
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 {destination.zone || destination.region || 'CYCLADES, GREECE'}
//               </p>

//               {/* destination name */}
//               <h1 className="font-black text-3xl md:text-4xl text-gray-900 mb-1 leading-tight">
//                 {destination.name}
//               </h1>

//               {/* tagline */}
//               <p className="text-sm text-gray-500 mb-5">
//                 {destination.tagline || 'The most iconic island in the Aegean, where dreams meet the deep blue sea.'}
//               </p>

//               {/* sub-heading */}
//               <h2 className="font-bold text-lg text-gray-900 mb-3">
//                 {destination.subtitle || 'The Gem of the Aegean'}
//               </h2>

//               {/* full description */}
//               <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                 {destination.longDescription || destination.description}
//               </p>
//               {destination.extraDescription && (
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {destination.extraDescription}
//                 </p>
//               )}
//             </div>

//             {/* Key Highlights */}
//             {destination.highlights && destination.highlights.length > 0 && (
//               <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//                 <h2 className="font-bold text-lg text-gray-900 mb-5">
//                   Key Highlights &amp; Activities
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
//                   {destination.highlights.map((highlight, i) => (
//                     <div key={i} className="flex items-start gap-3">
//                       <div className="shrink-0 mt-0.5">
//                         <HighlightIcon index={i} />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-sm text-gray-900 mb-0.5">
//                           {typeof highlight === 'object' ? highlight.title : highlight}
//                         </h3>
//                         {typeof highlight === 'object' && highlight.desc && (
//                           <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
//                             {highlight.desc}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Related packages */}
//             {relatedPackages.length > 0 && (
//               <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//                 <h2 className="font-bold text-lg text-gray-900 mb-4">Available Packages</h2>
//                 <div className="space-y-3">
//                   {relatedPackages.map(pkg => (
//                     <div
//                       key={pkg.id}
//                       className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all duration-200"
//                     >
//                       <div>
//                         <h3 className="font-bold text-sm text-gray-900 mb-0.5">{pkg.name}</h3>
//                         <p className="text-xs text-gray-500 mb-2">{pkg.duration}</p>
//                         <div className="flex items-center gap-2">
//                           <span className="text-lg font-bold text-blue-600">₹{pkg.price.toLocaleString()}</span>
//                           {pkg.originalPrice && (
//                             <span className="text-xs text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
//                           )}
//                           {pkg.discount && (
//                             <span className="text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
//                               {pkg.discount}% OFF
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                       <Link
//                         to={`/packages/${pkg.slug}`}
//                         className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-colors"
//                       >
//                         View Details
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//           </div>

//           {/* ════════════════════════════════════════════════
//               RIGHT — booking sidebar
//           ════════════════════════════════════════════════ */}
//           <div className="space-y-4">

//             {/* Booking card */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 sticky top-24">

//               {/* price */}
//               <div className="mb-4">
//                 <p className="text-xs text-gray-400 mb-0.5">From</p>
//                 <div className="flex items-baseline gap-1">
//                   <span className="font-black text-2xl text-gray-900">
//                     ₹{destination.price?.toLocaleString() || '22,000'}
//                   </span>
//                   <span className="text-xs text-gray-400">/night</span>
//                 </div>
//               </div>

//               {/* check in/out */}
//               <div className="mb-4 pb-4 border-b border-gray-100">
//                 <p className="text-xs text-gray-400 mb-1">Check in / out</p>
//                 <p className="text-sm font-semibold text-gray-900">
//                   Jul 14 – Jul 21, 2026
//                 </p>
//               </div>

//               {/* guests */}
//               <div className="mb-5 pb-5 border-b border-gray-100">
//                 <p className="text-xs text-gray-400 mb-1">Guests</p>
//                 <p className="text-sm font-semibold text-gray-900">2 Adults, 1 Child</p>
//               </div>

//               {/* CTA */}
//               <Link to="/contact">
//                 <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition-colors duration-200 text-sm mb-4">
//                   Reserve Your Escape
//                 </button>
//               </Link>

//               {/* trust badges */}
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 text-xs text-gray-500">
//                   <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                   Best Price Guarantee
//                 </div>
//                 <div className="flex items-center gap-2 text-xs text-gray-500">
//                   <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                   </svg>
//                   Free Cancellation (48h)
//                 </div>
//               </div>
//             </div>

//             {/* Map placeholder */}
//             <div className="bg-gray-100 rounded-2xl overflow-hidden h-36 relative">
//               <img
//                 src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(destination.name)}&zoom=7&size=400x200&maptype=roadmap&key=YOUR_KEY`}
//                 alt="map"
//                 className="w-full h-full object-cover"
//                 onError={e => { e.target.style.display = 'none' }}
//               />
//               {/* fallback overlay */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
//                 <svg className="w-8 h-8 text-gray-300 mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
//                 </svg>
//                 <p className="text-xs text-gray-400 font-medium">
//                   📍 {destination.mapLabel || `${destination.name}`}
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ── Newsletter CTA ── */}
//         <div className="mt-12 bg-[#1a3a5c] rounded-2xl px-7 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden relative">
//           <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-blue-700/30 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
//           <div className="text-white flex-1 relative z-10">
//             <h3 className="font-bold text-2xl md:text-3xl leading-snug mb-2">
//               Ready to start<br />your next journey?
//             </h3>
//             <p className="text-white/60 text-xs md:text-sm leading-relaxed">
//               Join 50,000+ travelers receiving our best deals and hidden gem recommendations weekly.
//             </p>
//           </div>
//           <div className="flex gap-2 w-full md:w-auto relative z-10">
//             {subscribed ? (
//               <p className="text-white font-semibold text-sm">🎉 Subscribed!</p>
//             ) : (
//               <>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   onKeyDown={e => e.key === 'Enter' && email.trim() && setSubscribed(true)}
//                   placeholder="Enter your email"
//                   className="flex-1 md:w-52 px-4 py-2.5 rounded-lg text-sm text-gray-900 bg-white outline-none"
//                 />
//                 <button
//                   onClick={() => email.trim() && setSubscribed(true)}
//                   className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
//                 >
//                   Subscribe Now
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { updateMetaTags } from '../../utils/seo'
import { destinationsMock } from '../../data/destinations.mock'
import { packagesMock } from '../../data/packages.mock'

/* ── Icons & Helpers ────────────────────────────────────────── */
const ArrowIcon = ({ cls = 'w-3 h-3' }) => (
  <svg viewBox="0 0 10 10" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 5h6M5 2l3 3-3 3" />
  </svg>
)

const HighlightIcon = ({ index }) => {
  const icons = ['☀️', '🥾', '🍷', '🚢', '🏛️', '📸', '🌊', '🎭']
  return <span className="text-xl">{icons[index % icons.length]}</span>
}

/* ── Skeleton Loader ────────────────────────────────────────── */
export const DestinationDetailSkeleton = () => (
  <div className="min-h-screen pt-20 pb-16 bg-white">
    <div className="max-w-5xl mx-auto px-4 animate-pulse">
      <div className="h-72 md:h-96 rounded-2xl bg-gray-200 mb-4" />
      <div className="flex gap-2 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-16 h-12 rounded-lg bg-gray-200 shrink-0" />
        ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-3">
            <div className="h-3 bg-gray-200 rounded w-24" />
            <div className="h-8 bg-gray-200 rounded w-48" />
            <div className="h-4 bg-gray-200 rounded w-full" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-72 bg-gray-200 rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
)

/* ── Main Component ─────────────────────────────────────────── */
export const DestinationDetailView = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [destination, setDestination] = useState(null)
  const [relatedPackages, setRelatedPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeThumb, setActiveThumb] = useState(0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [thumbs, setThumbs] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => {
      const found = destinationsMock.find(d => d.slug === slug)
      if (!found) { navigate('/destinations'); return }

      setDestination(found)
      const extras = [
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=200&q=70',
        'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=200&q=70',
        'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=200&q=70',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70',
        'https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=200&q=70',
      ]
      setThumbs([found.image, ...extras].slice(0, 6))

      const related = packagesMock.filter(pkg =>
        pkg.destination?.toLowerCase().includes(found.name.toLowerCase())
      )
      setRelatedPackages(related)

      updateMetaTags({
        title: `${found.name} - Travel Guide & Packages`,
        description: found.description,
        keywords: `${found.name}, travel, visit`,
      })
      setLoading(false)
    }, 500)
    return () => clearTimeout(t)
  }, [slug, navigate])

  if (loading || !destination) return <DestinationDetailSkeleton />

  return (
    <div className="min-h-screen pt-26 pb-16 bg-white selection:bg-blue-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/destinations" className="hover:text-blue-600 transition-colors">Destinations</Link>
          <span>/</span>
          <span className="text-gray-600 font-medium">{destination.name}</span>
        </nav>

        {/* Hero & Thumbs */}
        <section className="mb-8">
          <div className="relative h-64 md:h-[420px] rounded-2xl overflow-hidden mb-3 shadow-sm border border-gray-100">
            <img
              src={thumbs[activeThumb] || destination.image}
              alt={destination.name}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {thumbs.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveThumb(i)}
                className={`shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeThumb === i ? 'border-blue-600 scale-95 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </section>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                {destination.zone || destination.region || 'EXPLORE GREECE'}
              </p>
              <h1 className="font-black text-3xl md:text-5xl text-gray-900 mb-4 tracking-tight">
                {destination.name}
              </h1>
              <p className="text-lg text-gray-500 italic mb-6 leading-relaxed">
                "{destination.tagline || 'Experience the beauty of the world.'}"
              </p>
              <div className="prose prose-sm text-gray-600 max-w-none space-y-4">
                <p className="leading-relaxed">{destination.longDescription || destination.description}</p>
                {destination.extraDescription && <p className="leading-relaxed">{destination.extraDescription}</p>}
              </div>
            </div>

            {/* Highlights */}
            {destination.highlights?.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h2 className="font-bold text-xl text-gray-900 mb-6">Experience Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {destination.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 hover:bg-blue-50/50 transition-colors">
                      <HighlightIcon index={i} />
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">{typeof h === 'object' ? h.title : h}</h3>
                        {h.desc && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{h.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Packages */}
            {relatedPackages.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h2 className="font-bold text-xl text-gray-900 mb-6">Curated Packages</h2>
                <div className="space-y-4">
                  {relatedPackages.map(pkg => (
                    <div key={pkg.id} className="group flex flex-col sm:flex-row items-center justify-between p-5 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all">
                      <div className="mb-4 sm:mb-0 text-center sm:text-left">
                        <h3 className="font-bold text-base text-gray-900 group-hover:text-blue-600 transition-colors">{pkg.name}</h3>
                        <p className="text-xs text-gray-400 font-medium">{pkg.duration} • All Inclusive</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-xl font-black text-gray-900">₹{pkg.price.toLocaleString()}</p>
                          {pkg.discount && <span className="text-[10px] text-orange-500 font-bold">-{pkg.discount}% OFF</span>}
                        </div>
                        <Link to={`/packages/${pkg.slug}`} className="bg-gray-900 text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-blue-600 transition-all shadow-lg shadow-gray-200">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR - Fixed Overlap logic */}
          <aside className="lg:sticky lg:top-28 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 p-6">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Starting from</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-gray-900">₹{destination.price?.toLocaleString() || '22,000'}</span>
                    <span className="text-xs text-gray-500">/night</span>
                  </div>
                </div>
                <div className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded-md">Available</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Travel Dates</p>
                  <p className="text-sm font-bold text-gray-800">Jul 14 – Jul 21, 2026</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Guests</p>
                  <p className="text-sm font-bold text-gray-800">2 Adults, 1 Child</p>
                </div>
              </div>

              <Link to="/contact">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-100 active:scale-[0.98] mb-6">
                  Reserve Your Escape
                </button>
              </Link>

              <div className="space-y-3 pt-4 border-t border-gray-50">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">✓</div>
                  Best Price Guarantee
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">✓</div>
                  Free Cancellation (48h)
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden h-44 relative border border-gray-100 group">
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(destination.name)}&zoom=7&size=400x200&maptype=roadmap&key=YOUR_KEY`}
                alt="Location Map"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={e => { e.target.style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-black/5 flex flex-col items-center justify-center backdrop-blur-[1px]">
                <div className="bg-white/90 px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  <span className="text-xs font-bold text-gray-800">{destination.mapLabel || destination.name}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Newsletter - Positioned carefully to avoid overlap */}
        <section className="mt-20">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">Start your next<br/>adventure today.</h3>
                <p className="text-gray-400 text-sm md:text-base">Join 50k+ travelers for exclusive deals and hidden gems.</p>
              </div>
              
              <div className="w-full md:w-auto">
                {subscribed ? (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold">
                    ✨ You're on the list!
                  </motion.div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="px-6 py-4 bg-white/10 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500 min-w-[280px] transition-all"
                    />
                    <button
                      onClick={() => email.trim() && setSubscribed(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:shadow-blue-500/20"
                    >
                      Subscribe
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}