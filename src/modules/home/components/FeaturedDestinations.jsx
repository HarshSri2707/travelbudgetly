// import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import { Card } from '../../../components/ui/Card'
// import { Button } from '../../../components/ui/Button'
// import { useIntersection } from '../../../hooks/useIntersection'
// import { destinationsMock } from '../../../data/destinations.mock'

// export const FeaturedDestinations = () => {
//   const { ref, hasIntersected } = useIntersection()
//   const [destinations, setDestinations] = useState([])

//   useEffect(() => {
//     if (hasIntersected) {
//       // Simulate API call
//       setTimeout(() => {
//         setDestinations(destinationsMock.slice(0, 6))
//       }, 300)
//     }
//   }, [hasIntersected])

//   return (
//     <section ref={ref} className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
//             Featured Destinations
//           </h2>
//           <p className="text-lg text-gray-600">
//             Explore India's most beautiful and culturally rich destinations
//           </p>
//         </div>

//         {!hasIntersected || destinations.length === 0 ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="bg-gray-200 rounded-lg h-80 animate-pulse" />
//             ))}
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {destinations.map((destination) => (
//               <Card key={destination.id} data={destination} type="destination" />
//             ))}
//           </div>
//         )}

//         <div className="text-center mt-8">
//           <Link to="/destinations">
//             <Button variant="primary" size="lg">
//               View All Destinations
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }



// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'
// import { CardSkeleton } from '../../../components/ui/Skeleton'
// import { DESTINATIONS } from '../../../data/home.data'

// /* shared animation variants */
// const fadeUp = {
//   hidden:  { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
// }
// const stagger = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.1 } },
// }

// const ArrowBadge = () => (
//   <div className="absolute top-3 right-3 z-20 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg">
//     →
//   </div>
// )

// const DestinationCard = ({ dest, index, alwaysShowArrow = false }) => (
//   <motion.div variants={fadeUp} className="relative group">
//     <Link to={`/destinations/${dest.slug}`} className="block">
//       {/* 
//         Portrait aspect — matches design: narrower width, taller height.
//         Using aspect-[3/4] gives a tall portrait card.
//       */}
//       <div className="relative rounded-2xl overflow-hidden aspect-[3.8/4] shadow-md hover:shadow-xl transition-shadow duration-300">
//         <img
//           src={dest.image}
//           alt={dest.name}
//           loading={index < 3 ? 'eager' : 'lazy'}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         {/* gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

//         {/* arrow — always visible on first card, hover on rest */}
//         <div
//           className={`absolute top-3 right-3 z-20 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg transition-opacity duration-200 ${
//             alwaysShowArrow ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
//           }`}
//         >
//           →
//         </div>

//         {/* label */}
//         <p className="absolute bottom-4 left-4 text-white font-bold text-base drop-shadow-md">
//           {dest.name}
//         </p>
//       </div>
//     </Link>
//   </motion.div>
// )

// export const FeaturedDestinations = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
//   const [loaded, setLoaded] = useState(false)

//   useEffect(() => {
//     if (!hasIntersected) return
//     const t = setTimeout(() => setLoaded(true), 300)
//     return () => clearTimeout(t)
//   }, [hasIntersected])

//   return (
//     <section ref={ref} className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* section heading with watermark */}
//         <div className="relative text-center mb-12">
//           <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[72px] md:text-[96px] font-black tracking-widest select-none pointer-events-none text-blue-900/10">
//             DESTINATION
//           </span>
//           <h2 className="relative font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
//             Featured Destinations
//           </h2>
        
//         </div>
// <div>

//    <p className="relative text-base text-gray-500">
//             Choose Your Travel and Start Making Memories
//           </p>
// </div>
         

//         {/* grid */}
//         {!loaded ? (
//           /* skeleton — matching portrait aspect */
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
//             ))}
//           </div>
//         ) : (
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
//           >
//             {DESTINATIONS.map((dest, i) => (
//               <DestinationCard
//                 key={dest.id}
//                 dest={dest}
//                 index={i}
//                 alwaysShowArrow={i === 0}
//               />
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   )
// }


import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'
import { DESTINATIONS } from '../../../data/home.data'

/* ── Variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── Single card ──────────────────────────────────────────────── */
const DestinationCard = ({ dest, index, alwaysShowArrow = false, animate = true }) => {
  const inner = (
    <div className="relative rounded-2xl overflow-hidden aspect-[3.8/4] shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-full">
      <img
        src={dest.image}
        alt={dest.name}
        loading={index < 3 ? 'eager' : 'lazy'}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

      {/* arrow badge */}
      <div
        className={`
          absolute top-3 right-3 z-20
          bg-blue-600 text-white w-8 h-8 rounded-full
          flex items-center justify-center text-sm shadow-lg
          transition-opacity duration-200
          ${alwaysShowArrow ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
        `}
      >
        →
      </div>

      {/* label */}
      <p className="absolute bottom-4 left-4 text-white font-bold text-base drop-shadow-md">
        {dest.name}
      </p>
    </div>
  )

  if (animate) {
    return (
      <motion.div variants={fadeUp} className="relative group">
        <Link to={`/destinations/${dest.slug}`} className="block">
          {inner}
        </Link>
      </motion.div>
    )
  }

  return (
    <div className="relative group">
      <Link to={`/destinations/${dest.slug}`} className="block">
        {inner}
      </Link>
    </div>
  )
}

/* ── Main component ───────────────────────────────────────────── */
export const FeaturedDestinations = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
  const [loaded, setLoaded]         = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    if (!hasIntersected) return
    const t = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(t)
  }, [hasIntersected])

  /* track active dot on scroll */
  const handleScroll = () => {
    const el = sliderRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.offsetWidth)
    setActiveIndex(idx)
  }

  /* dot click → scroll to card */
  const scrollTo = (i) => {
    if (!sliderRef.current) return
    sliderRef.current.scrollTo({ left: i * sliderRef.current.offsetWidth, behavior: 'smooth' })
    setActiveIndex(i)
  }

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Heading ─────────────────────────────────────────────────
            Watermark: scale text down on mobile so it never overflows.
            Subtitle: placed INSIDE the relative wrapper so it stays
            below the h2, not orphaned outside.
        ──────────────────────────────────────────────────────────── */}
        <div className="relative text-center mb-10 md:mb-12 overflow-hidden">
          {/* watermark — tight tracking on mobile, wide on desktop */}
          <span className="
            absolute inset-x-0 top-1/2 -translate-y-1/2
            text-[38px] xs:text-[48px] sm:text-[64px] md:text-[96px]
            font-black tracking-tight md:tracking-widest
            select-none pointer-events-none
            text-blue-900/[0.07] uppercase whitespace-nowrap
          ">
            DESTINATION
          </span>

          <h2 className="relative font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-2 md:mb-3">
            Featured Destinations
          </h2>

          {/* subtitle — fixed: was outside the relative div in original */}
          <p className="relative text-sm md:text-base text-gray-500">
            Choose Your Travel and Start Making Memories
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════
            MOBILE — 1-card-at-a-time horizontal snap slider
        ════════════════════════════════════════════════════════════ */}
        <div className="md:hidden">
          {!loaded ? (
            /* skeleton */
            <div
              className="flex overflow-hidden -mx-4"
            >
              <div
                className="flex-shrink-0 px-4"
                style={{ width: '100%' }}
              >
                <div className="aspect-[3.8/4] bg-gray-200 rounded-2xl animate-pulse w-full" />
              </div>
            </div>
          ) : (
            <>
              {/* slider */}
              <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto scrollbar-hide -mx-4"
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {DESTINATIONS.map((dest, i) => (
                  <div
                    key={dest.id}
                    className="flex-shrink-0 px-4"
                    style={{
                      width:           '100%',
                      scrollSnapAlign: 'start',
                      boxSizing:       'border-box',
                    }}
                  >
                    <DestinationCard
                      dest={dest}
                      index={i}
                      alwaysShowArrow
                      animate={false}
                    />
                  </div>
                ))}
              </div>

              {/* dots */}
              <div className="flex justify-center gap-2 mt-5">
                {DESTINATIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-200 w-2'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ════════════════════════════════════════════════════════════
            DESKTOP — 3-column grid (unchanged from original)
        ════════════════════════════════════════════════════════════ */}
        {!loaded ? (
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
          >
            {DESTINATIONS.map((dest, i) => (
              <DestinationCard
                key={dest.id}
                dest={dest}
                index={i}
                alwaysShowArrow={i === 0}
                animate
              />
            ))}
          </motion.div>
        )}

      </div>
    </section>
  )
}