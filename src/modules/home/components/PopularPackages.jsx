// // import { Link } from 'react-router-dom'
// // import { useState, useEffect } from 'react'
// // import { Card } from '../../../components/ui/Card'
// // import { Button } from '../../../components/ui/Button'
// // import { useIntersection } from '../../../hooks/useIntersection'
// // import { packagesMock } from '../../../data/packages.mock'

// // export const PopularPackages = () => {
// //   const { ref, hasIntersected } = useIntersection()
// //   const [packages, setPackages] = useState([])

// //   useEffect(() => {
// //     if (hasIntersected) {
// //       setTimeout(() => {
// //         setPackages(packagesMock.slice(0, 3))
// //       }, 300)
// //     }
// //   }, [hasIntersected])

// //   return (
// //     <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="text-center mb-12">
// //           <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
// //             Popular Travel Packages
// //           </h2>
// //           <p className="text-lg text-gray-600">
// //             Handpicked deals for unforgettable experiences at great prices
// //           </p>
// //         </div>

// //         {!hasIntersected || packages.length === 0 ? (
// //           <div className="grid md:grid-cols-3 gap-6">
// //             {[1, 2, 3].map((i) => (
// //               <div key={i} className="bg-gray-200 rounded-lg h-96 animate-pulse" />
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="grid md:grid-cols-3 gap-6 mb-8">
// //             {packages.map((pkg) => (
// //               <Card key={pkg.id} data={pkg} type="package" />
// //             ))}
// //           </div>
// //         )}

// //         <div className="text-center mt-8">
// //           <Link to="/packages">
// //             <Button variant="primary" size="lg">
// //               View All Packages
// //             </Button>
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'
// import { PACKAGES, PACKAGE_FILTERS } from '../../../data/home.data'

// const fadeUp = {
//   hidden:  { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
// }
// const stagger = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.12 } },
// }

// const PackageCard = ({ pkg }) => (
//   <motion.div
//     variants={fadeUp}
//     layout
//     exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
//     className="bg-white rounded-2xl  hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col"
//   >
//     {/* image */}
//     <div className="relative h-48 overflow-hidden shrink-0">
//       <img
//         src={pkg.image}
//         alt={pkg.name}
//         loading="lazy"
//         className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
//       />
//       {pkg.discount && (
//         <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
//           {pkg.discount}% OFF
//         </span>
//       )}
//     </div>

//     {/* body */}
//     <div className="p-5 flex flex-col flex-1">
//       <h3 className="font-bold text-gray-900 text-lg mb-1">{pkg.name}</h3>
//       <p className="text-sm text-gray-600 mb-3 leading-relaxed">{pkg.description}</p>

//       {/* includes */}
//       <div className="mb-4 space-y-0.5">
//         <p className="text-xs font-semibold text-gray-700 mb-1">Includes</p>
//         {pkg.includes.map((item, idx) => (
//           <p key={idx} className="text-xs text-gray-500">{item}</p>
//         ))}
//       </div>

//       {/* price */}
//       <div className="flex items-baseline gap-2 mb-4 mt-auto">
//         <span className="text-xl font-bold text-gray-900">
//           ₹{pkg.price.toLocaleString()}
//         </span>
//         {pkg.originalPrice && (
//           <span className="text-xs text-gray-400 line-through">
//             ₹{pkg.originalPrice.toLocaleString()}
//           </span>
//         )}
//       </div>

//       {/* CTA */}
//       <Link to={`/packages/${pkg.slug}`}>
//         <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 rounded-full transition-colors duration-200 text-sm">
//           Book Now
//         </button>
//       </Link>
//     </div>
//   </motion.div>
// )

// export const PopularPackages = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
//   const [activeFilter, setActiveFilter] = useState('All')

//   const filtered =
//     activeFilter === 'All'
//       ? PACKAGES
//       : PACKAGES.filter((p) => p.category === activeFilter)

//   const displayList = filtered.length ? filtered : PACKAGES

//   return (
//     <section ref={ref} className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* heading */}
//         <div className="relative text-center mb-10">
//           <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[56px] md:text-[84px] font-black tracking-widest select-none pointer-events-none text-gray-900/[0.04]">
//             PACKAGES
//           </span>
//           <h2 className="relative font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
//             Find Your Perfect Destination
//           </h2>
//           <p className="relative text-base text-gray-500">
//             Tailored Packages for your great experience
//           </p>
//         </div>

//         {/* filter tabs + explore link */}
//         <div className="flex flex-wrap items-center gap-2 mb-6">
//           {PACKAGE_FILTERS.map((f) => (
//             <button
//               key={f}
//               onClick={() => setActiveFilter(f)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
//                 activeFilter === f
//                   ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                   : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
//               }`}
//             >
//               {f}
//             </button>
//           ))}
//           <Link
//             to="/packages"
//             className="ml-auto flex items-center gap-1.5 text-sm text-gray-700 font-medium hover:text-blue-600 transition-colors"
//           >
//             Explore
//             <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
//               →
//             </span>
//           </Link>
//         </div>

//         {/* cards */}
//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           <AnimatePresence mode="popLayout">
//             {displayList.map((pkg) => (
//               <PackageCard key={pkg.id} pkg={pkg} />
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* pagination dots */}
//         <div className="flex justify-center gap-2 mt-10">
//           {[0, 1, 2].map((i) => (
//             <div
//               key={i}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 i === 0 ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2'
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }


import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'
import { PACKAGES, PACKAGE_FILTERS } from '../../../data/home.data'

/* ── Variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/* ── Package Card ─────────────────────────────────────────────── */
const PackageCard = ({ pkg }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col w-full h-full">
    {/* image */}
    <div className="relative h-44 overflow-hidden shrink-0">
      <img
        src={pkg.image}
        alt={pkg.name}
        loading="lazy"
        className="w-full h-full rounded-t-2xl object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {pkg.discount && (
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          {pkg.discount}% OFF
        </span>
      )}
    </div>

    {/* body */}
    <div className="p-4 flex flex-col flex-1">
      <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">{pkg.name}</h3>
      <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{pkg.description}</p>

      {/* includes */}
      <div className="mb-3 space-y-0.5">
        <p className="text-[11px] font-semibold text-gray-700 mb-1">Includes</p>
        {pkg.includes.slice(0, 3).map((item, idx) => (
          <p key={idx} className="text-[11px] text-gray-400">{item}</p>
        ))}
      </div>

      {/* price */}
      <div className="flex items-baseline gap-2 mb-3 mt-auto">
        <span className="text-lg font-bold text-gray-900">
          ₹{pkg.price.toLocaleString()}
        </span>
        {pkg.originalPrice && (
          <span className="text-xs text-gray-400 line-through">
            ₹{pkg.originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* CTA */}
      <Link to={`/packages/${pkg.slug}`}>
        <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 rounded-full transition-colors duration-200 text-sm">
          Book Now
        </button>
      </Link>
    </div>
  </div>
)

/* ── Main Component ───────────────────────────────────────────── */
export const PopularPackages = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
  const [activeFilter, setActiveFilter]   = useState('All')
  const [activeIndex,  setActiveIndex]    = useState(0)
  const sliderRef = useRef(null)

  const filtered    = activeFilter === 'All' ? PACKAGES : PACKAGES.filter(p => p.category === activeFilter)
  const displayList = filtered.length ? filtered : PACKAGES

  /* ── reset slider to 0 when filter changes ───────────────────── */
  useEffect(() => {
    setActiveIndex(0)
    if (sliderRef.current) sliderRef.current.scrollLeft = 0
  }, [activeFilter])

  /* ── track active dot while scrolling ────────────────────────── */
  const handleScroll = () => {
    const el = sliderRef.current
    if (!el) return
    const cardW = el.offsetWidth          // each card = 100% viewport width of slider
    const idx   = Math.round(el.scrollLeft / cardW)
    setActiveIndex(idx)
  }

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Heading ─────────────────────────────────────────────── */}
        <div className="relative text-center mb-8 md:mb-10 overflow-hidden">
          <span className="
            absolute inset-x-0 top-1/2 -translate-y-1/2
            text-[44px] sm:text-[64px] md:text-[84px]
            font-black tracking-widest
            select-none pointer-events-none
            text-gray-900/[0.04] uppercase whitespace-nowrap
          ">
            PACKAGES
          </span>
          <h2 className="relative font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-2 md:mb-3">
            Find Your Perfect Destination
          </h2>
          <p className="relative text-sm md:text-base text-gray-500">
            Tailored Packages for your great experience
          </p>
        </div>

        {/* ── Filters row ──────────────────────────────────────────── */}
        {/* Mobile: scrollable chips | Desktop: wrap chips + Explore right */}
        <div className="mb-6">

          {/* MOBILE filters — scrollable, no explore here */}
          <div className="flex md:hidden gap-2 overflow-x-auto scrollbar-hide pb-2">
            {PACKAGE_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-medium
                  transition-all duration-200 border whitespace-nowrap flex-shrink-0
                  ${activeFilter === f
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-gray-600 border-gray-200'
                  }
                `}
              >
                {f}
              </button>
            ))}
          </div>

          {/* DESKTOP filters + explore link */}
          <div className="hidden md:flex flex-wrap items-center gap-2">
            {PACKAGE_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium
                  transition-all duration-200 border
                  ${activeFilter === f
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                  }
                `}
              >
                {f}
              </button>
            ))}
            <Link
              to="/packages"
              className="ml-auto flex items-center gap-1.5 text-sm text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Explore
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── MOBILE: 1-card-at-a-time snap slider ─────────────────── */}
        <div className="md:hidden">
          {/* slider — negative margin to break out of px-4 padding, full bleed */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide -mx-4"
            style={{
              scrollSnapType:   'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {displayList.map((pkg, idx) => (
              <div
                key={pkg.id}
                className="flex-shrink-0 px-4"
                style={{
                  width:           '100%',      /* exactly 1 card per screen */
                  scrollSnapAlign: 'start',
                  boxSizing:       'border-box',
                }}
              >
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-5">
            {displayList.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!sliderRef.current) return
                  sliderRef.current.scrollTo({ left: i * sliderRef.current.offsetWidth, behavior: 'smooth' })
                  setActiveIndex(i)
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-200 w-2'
                }`}
              />
            ))}
          </div>

          {/* Explore button — mobile, below cards */}
          <div className="flex justify-center mt-6">
            <Link
              to="/packages"
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-colors"
            >
              Explore All Packages
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>

        {/* ── DESKTOP: 3-column grid, narrower cards via max-w ─────── */}
        {/*
          We keep 3 cols but reduce gap and add a max-w on the grid
          so cards aren't too wide on large screens.
          lg:max-w-5xl centers the grid and naturally narrows cards.
        */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={hasIntersected ? 'visible' : 'hidden'}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-6xl lg:mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {displayList.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={fadeUp}
                layout
                exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              >
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* pagination dots — desktop */}
        <div className="hidden md:flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === 0 ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}