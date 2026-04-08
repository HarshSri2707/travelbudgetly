// import { useState, useEffect } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import { updateMetaTags } from '../../utils/seo'
// import { Image } from '../../components/ui/Image'
// import { Button } from '../../components/ui/Button'
// import { Badge } from '../../components/ui/Badge'
// import { destinationsMock } from '../../data/destinations.mock'
// import { packagesMock } from '../../data/packages.mock'

// export const DestinationDetailView = () => {
//   const { slug } = useParams()
//   const navigate = useNavigate()
//   const [destination, setDestination] = useState(null)
//   const [relatedPackages, setRelatedPackages] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     window.scrollTo(0, 0)
    
//     // Simulate API call
//     setTimeout(() => {
//       const found = destinationsMock.find(d => d.slug === slug)
      
//       if (!found) {
//         navigate('/destinations')
//         return
//       }

//       setDestination(found)
      
//       // Find related packages
//       const related = packagesMock.filter(pkg => 
//         pkg.destination.toLowerCase().includes(found.name.toLowerCase())
//       )
//       setRelatedPackages(related)
      
//       updateMetaTags({
//         title: `${found.name} - Travel Guide & Packages`,
//         description: found.description,
//         keywords: `${found.name}, travel ${found.name}, visit ${found.name}`,
//       })
      
//       setLoading(false)
//     }, 500)
//   }, [slug, navigate])

//   if (loading || !destination) {
//     return (
//       <div className="min-h-screen pt-24 pb-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="animate-pulse">
//             <div className="h-96 bg-gray-200 rounded-2xl mb-8" />
//             <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
//             <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
//             <div className="h-4 bg-gray-200 rounded w-1/2" />
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen pt-24 pb-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Breadcrumb */}
//         <div className="mb-6 text-sm">
//           <Link to="/" className="text-primary-600 hover:underline">Home</Link>
//           <span className="mx-2 text-gray-400">/</span>
//           <Link to="/destinations" className="text-primary-600 hover:underline">Destinations</Link>
//           <span className="mx-2 text-gray-400">/</span>
//           <span className="text-gray-600">{destination.name}</span>
//         </div>

//         {/* Hero Image */}
//         <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
//           <Image
//             src={destination.image}
//             alt={destination.name}
//             eager
//             className="w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//           <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//             <div className="flex items-center gap-3 mb-3">
//               <Badge variant="primary" className="bg-white/20 backdrop-blur-sm text-white">
//                 {destination.zone}
//               </Badge>
//               <Badge variant="accent" className="bg-white/20 backdrop-blur-sm text-white">
//                 ★ {destination.rating}
//               </Badge>
//             </div>
//             <h1 className="font-display font-bold text-4xl md:text-5xl mb-2">
//               {destination.name}
//             </h1>
//             <p className="text-xl text-white/90">{destination.region}</p>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Overview */}
//             <div className="bg-white rounded-xl shadow-md p-8">
//               <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
//                 Overview
//               </h2>
//               <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                 {destination.description}
//               </p>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gray-50 rounded-lg p-4">
//                   <div className="text-sm text-gray-600 mb-1">Best Time to Visit</div>
//                   <div className="font-semibold text-gray-900">{destination.bestTime}</div>
//                 </div>
//                 <div className="bg-gray-50 rounded-lg p-4">
//                   <div className="text-sm text-gray-600 mb-1">Typical Duration</div>
//                   <div className="font-semibold text-gray-900">{destination.duration}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Highlights */}
//             {destination.highlights && destination.highlights.length > 0 && (
//               <div className="bg-white rounded-xl shadow-md p-8">
//                 <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
//                   Top Attractions
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {destination.highlights.map((highlight, index) => (
//                     <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
//                       <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
//                         <span className="text-primary-600 font-bold">{index + 1}</span>
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-gray-900">{highlight}</h3>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Related Packages */}
//             {relatedPackages.length > 0 && (
//               <div className="bg-white rounded-xl shadow-md p-8">
//                 <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
//                   Available Packages
//                 </h2>
//                 <div className="space-y-4">
//                   {relatedPackages.map((pkg) => (
//                     <div key={pkg.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
//                       <div>
//                         <h3 className="font-bold text-lg text-gray-900 mb-1">{pkg.name}</h3>
//                         <p className="text-sm text-gray-600 mb-2">{pkg.duration}</p>
//                         <div className="flex items-center gap-2">
//                           <span className="text-2xl font-bold text-primary-600">₹{pkg.price.toLocaleString()}</span>
//                           {pkg.originalPrice && (
//                             <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
//                           )}
//                           {pkg.discount && (
//                             <Badge variant="accent">{pkg.discount}% OFF</Badge>
//                           )}
//                         </div>
//                       </div>
//                       <Link to={`/packages/${pkg.slug}`}>
//                         <Button variant="primary">View Details</Button>
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Quick Info Card */}
//             <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
//               <h3 className="font-bold text-xl text-gray-900 mb-4">Quick Info</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between py-3 border-b border-gray-100">
//                   <span className="text-gray-600">Starting Price</span>
//                   <span className="font-bold text-primary-600 text-xl">₹{destination.price.toLocaleString()}</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3 border-b border-gray-100">
//                   <span className="text-gray-600">Duration</span>
//                   <span className="font-semibold text-gray-900">{destination.duration}</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3 border-b border-gray-100">
//                   <span className="text-gray-600">Rating</span>
//                   <span className="font-semibold text-gray-900">★ {destination.rating}/5</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3">
//                   <span className="text-gray-600">Best Time</span>
//                   <span className="font-semibold text-gray-900 text-sm text-right">{destination.bestTime}</span>
//                 </div>
//               </div>
              
//               <div className="mt-6 space-y-3">
//                 <Link to="/contact">
//                   <Button variant="primary" className="w-full">
//                     Plan Your Trip
//                   </Button>
//                 </Link>
//                 <Link to="/packages">
//                   <Button variant="secondary" className="w-full">
//                     View Packages
//                   </Button>
//                 </Link>
//               </div>
//             </div>

//             {/* Contact Card */}
//             <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6">
//               <h3 className="font-bold text-lg text-gray-900 mb-2">Need Help Planning?</h3>
//               <p className="text-sm text-gray-700 mb-4">Our travel experts are here to help you create the perfect itinerary.</p>
//               <Link to="/contact">
//                 <Button variant="accent" className="w-full">
//                   Contact Us
//                 </Button>
//               </Link>
//             </div>
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

/* ── Arrow icon ─────────────────────────────────────────────── */
const ArrowIcon = ({ cls = 'w-3 h-3' }) => (
  <svg viewBox="0 0 10 10" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 5h6M5 2l3 3-3 3" />
  </svg>
)

/* ── Highlight icon ─────────────────────────────────────────── */
const HighlightIcon = ({ index }) => {
  const icons = ['☀️', '🥾', '🍷', '🚢', '🏛️', '📸', '🌊', '🎭']
  return <span className="text-xl">{icons[index % icons.length]}</span>
}

/* ── Skeleton ───────────────────────────────────────────────── */
export const DestinationDetailSkeleton = () => (
  <div className="min-h-screen pt-20 pb-16 bg-white">
    <div className="max-w-5xl mx-auto px-4 animate-pulse">
      {/* hero */}
      <div className="h-72 md:h-96 rounded-2xl bg-gray-200 mb-4" />
      {/* thumbnail strip */}
      <div className="flex gap-2 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-16 h-12 rounded-lg bg-gray-200 shrink-0" />
        ))}
      </div>
      {/* 2-col */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-3">
            <div className="h-3 bg-gray-200 rounded w-24" />
            <div className="h-8 bg-gray-200 rounded w-48" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-40" />
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-20 bg-gray-200 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-72 bg-gray-200 rounded-2xl" />
          <div className="h-32 bg-gray-200 rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export const DestinationDetailView = () => {
  const { slug }   = useParams()
  const navigate   = useNavigate()

  const [destination, setDestination]     = useState(null)
  const [relatedPackages, setRelatedPackages] = useState([])
  const [loading, setLoading]             = useState(true)
  const [activeThumb, setActiveThumb]     = useState(0)
  const [email, setEmail]                 = useState('')
  const [subscribed, setSubscribed]       = useState(false)

  /* thumbnail images — use destination image + placeholder extras */
  const [thumbs, setThumbs] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => {
      const found = destinationsMock.find(d => d.slug === slug)
      if (!found) { navigate('/destinations'); return }

      setDestination(found)

      /* build thumbnail list */
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
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/destinations" className="hover:text-blue-600 transition-colors">Destinations</Link>
          <span>/</span>
          <span className="text-gray-600 font-medium">{destination.name}</span>
        </div>

        {/* ── Hero image ── */}
        <div className="relative h-64 md:h-[380px] rounded-2xl overflow-hidden mb-3 shadow-lg">
          <img
            src={thumbs[activeThumb] || destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
          {thumbs.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveThumb(i)}
              className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                activeThumb === i ? 'border-blue-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* ── 2-column layout ── */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* ════════════════════════════════════════════════
              LEFT — main content
          ════════════════════════════════════════════════ */}
          <div className="lg:col-span-2 space-y-6">

            {/* Overview card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              {/* zone label */}
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {destination.zone || destination.region || 'CYCLADES, GREECE'}
              </p>

              {/* destination name */}
              <h1 className="font-black text-3xl md:text-4xl text-gray-900 mb-1 leading-tight">
                {destination.name}
              </h1>

              {/* tagline */}
              <p className="text-sm text-gray-500 mb-5">
                {destination.tagline || 'The most iconic island in the Aegean, where dreams meet the deep blue sea.'}
              </p>

              {/* sub-heading */}
              <h2 className="font-bold text-lg text-gray-900 mb-3">
                {destination.subtitle || 'The Gem of the Aegean'}
              </h2>

              {/* full description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {destination.longDescription || destination.description}
              </p>
              {destination.extraDescription && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {destination.extraDescription}
                </p>
              )}
            </div>

            {/* Key Highlights */}
            {destination.highlights && destination.highlights.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-lg text-gray-900 mb-5">
                  Key Highlights &amp; Activities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  {destination.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5">
                        <HighlightIcon index={i} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900 mb-0.5">
                          {typeof highlight === 'object' ? highlight.title : highlight}
                        </h3>
                        {typeof highlight === 'object' && highlight.desc && (
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                            {highlight.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related packages */}
            {relatedPackages.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-lg text-gray-900 mb-4">Available Packages</h2>
                <div className="space-y-3">
                  {relatedPackages.map(pkg => (
                    <div
                      key={pkg.id}
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                    >
                      <div>
                        <h3 className="font-bold text-sm text-gray-900 mb-0.5">{pkg.name}</h3>
                        <p className="text-xs text-gray-500 mb-2">{pkg.duration}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-blue-600">₹{pkg.price.toLocaleString()}</span>
                          {pkg.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                          )}
                          {pkg.discount && (
                            <span className="text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                              {pkg.discount}% OFF
                            </span>
                          )}
                        </div>
                      </div>
                      <Link
                        to={`/packages/${pkg.slug}`}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ════════════════════════════════════════════════
              RIGHT — booking sidebar
          ════════════════════════════════════════════════ */}
          <div className="space-y-4">

            {/* Booking card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 sticky top-24">

              {/* price */}
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-0.5">From</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-black text-2xl text-gray-900">
                    ₹{destination.price?.toLocaleString() || '22,000'}
                  </span>
                  <span className="text-xs text-gray-400">/night</span>
                </div>
              </div>

              {/* check in/out */}
              <div className="mb-4 pb-4 border-b border-gray-100">
                <p className="text-xs text-gray-400 mb-1">Check in / out</p>
                <p className="text-sm font-semibold text-gray-900">
                  Jul 14 – Jul 21, 2026
                </p>
              </div>

              {/* guests */}
              <div className="mb-5 pb-5 border-b border-gray-100">
                <p className="text-xs text-gray-400 mb-1">Guests</p>
                <p className="text-sm font-semibold text-gray-900">2 Adults, 1 Child</p>
              </div>

              {/* CTA */}
              <Link to="/contact">
                <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition-colors duration-200 text-sm mb-4">
                  Reserve Your Escape
                </button>
              </Link>

              {/* trust badges */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Best Price Guarantee
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Free Cancellation (48h)
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-36 relative">
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(destination.name)}&zoom=7&size=400x200&maptype=roadmap&key=YOUR_KEY`}
                alt="map"
                className="w-full h-full object-cover"
                onError={e => { e.target.style.display = 'none' }}
              />
              {/* fallback overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
                <svg className="w-8 h-8 text-gray-300 mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-xs text-gray-400 font-medium">
                  📍 {destination.mapLabel || `${destination.name}`}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Newsletter CTA ── */}
        <div className="mt-12 bg-[#1a3a5c] rounded-2xl px-7 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden relative">
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

      </div>
    </div>
  )
}