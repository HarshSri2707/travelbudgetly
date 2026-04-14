

// // import { useState, useEffect, useRef } from 'react'
// // import { Link } from 'react-router-dom'
// // import { motion } from 'framer-motion'
// // import { useIntersection } from '../../../hooks/useIntersection'
// // import { DESTINATIONS } from '../../../data/home.data'

// // /* ── Variants ─────────────────────────────────────────────────── */
// // const fadeUp = {
// //   hidden:  { opacity: 0, y: 28 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
// // }
// // const stagger = {
// //   hidden:  {},
// //   visible: { transition: { staggerChildren: 0.1 } },
// // }

// // /* ── Single card ──────────────────────────────────────────────── */
// // const DestinationCard = ({ dest, index, alwaysShowArrow = false, animate = true }) => {
// //   const inner = (
// //     <div className="relative rounded-2xl overflow-hidden aspect-[3.8/4] shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-full">
// //       <img
// //         src={dest.image}
// //         alt={dest.name}
// //         loading={index < 3 ? 'eager' : 'lazy'}
// //         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //       />
// //       {/* gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

// //       {/* arrow badge */}
// //       <div
// //         className={`
// //           absolute top-3 right-3 z-20
// //           bg-blue-600 text-white w-8 h-8 rounded-full
// //           flex items-center justify-center text-sm shadow-lg
// //           transition-opacity duration-200
// //           ${alwaysShowArrow ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
// //         `}
// //       >
// //         →
// //       </div>

// //       {/* label */}
// //       <p className="absolute bottom-4 left-4 text-white font-bold text-base drop-shadow-md">
// //         {dest.name}
// //       </p>
// //     </div>
// //   )

// //   if (animate) {
// //     return (
// //       <motion.div variants={fadeUp} className="relative group">
// //         <Link to={`/destinations/${dest.slug}`} className="block">
// //           {inner}
// //         </Link>
// //       </motion.div>
// //     )
// //   }

// //   return (
// //     <div className="relative group">
// //       <Link to={`/destinations/${dest.slug}`} className="block">
// //         {inner}
// //       </Link>
// //     </div>
// //   )
// // }

// // /* ── Main component ───────────────────────────────────────────── */
// // export const FeaturedDestinations = () => {
// //   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
// //   const [loaded, setLoaded]         = useState(false)
// //   const [activeIndex, setActiveIndex] = useState(0)
// //   const sliderRef = useRef(null)

// //   useEffect(() => {
// //     if (!hasIntersected) return
// //     const t = setTimeout(() => setLoaded(true), 300)
// //     return () => clearTimeout(t)
// //   }, [hasIntersected])

// //   /* track active dot on scroll */
// //   const handleScroll = () => {
// //     const el = sliderRef.current
// //     if (!el) return
// //     const idx = Math.round(el.scrollLeft / el.offsetWidth)
// //     setActiveIndex(idx)
// //   }

// //   /* dot click → scroll to card */
// //   const scrollTo = (i) => {
// //     if (!sliderRef.current) return
// //     sliderRef.current.scrollTo({ left: i * sliderRef.current.offsetWidth, behavior: 'smooth' })
// //     setActiveIndex(i)
// //   }

// //   return (
// //     <section ref={ref} className="py-16 md:py-20 bg-white overflow-hidden">
// //       <div className="max-w-6xl mx-auto px-4">

// //         {/* ── Heading ─────────────────────────────────────────────────
// //             Watermark: scale text down on mobile so it never overflows.
// //             Subtitle: placed INSIDE the relative wrapper so it stays
// //             below the h2, not orphaned outside.
// //         ──────────────────────────────────────────────────────────── */}
// //         <div className="relative text-center mb-10 md:mb-12 overflow-hidden">
// //           {/* watermark — tight tracking on mobile, wide on desktop */}
// //           <span className="
// //             absolute inset-x-0 top-1/2 -translate-y-1/2
// //             text-[38px] xs:text-[48px] sm:text-[64px] md:text-[96px]
// //             font-black tracking-tight md:tracking-widest
// //             select-none pointer-events-none
// //             text-blue-900/[0.07] uppercase whitespace-nowrap
// //           ">
// //             DESTINATION
// //           </span>

// //           <h2 className="relative font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-2 md:mb-3">
// //             Featured Destinations
// //           </h2>

// //           {/* subtitle — fixed: was outside the relative div in original */}
// //           <p className="relative text-sm md:text-base text-gray-500">
// //             Choose Your Travel and Start Making Memories
// //           </p>
// //         </div>

// //         {/* ════════════════════════════════════════════════════════════
// //             MOBILE — 1-card-at-a-time horizontal snap slider
// //         ════════════════════════════════════════════════════════════ */}
// //         <div className="md:hidden">
// //           {!loaded ? (
// //             /* skeleton */
// //             <div
// //               className="flex overflow-hidden -mx-4"
// //             >
// //               <div
// //                 className="flex-shrink-0 px-4"
// //                 style={{ width: '100%' }}
// //               >
// //                 <div className="aspect-[3.8/4] bg-gray-200 rounded-2xl animate-pulse w-full" />
// //               </div>
// //             </div>
// //           ) : (
// //             <>
// //               {/* slider */}
// //               <div
// //                 ref={sliderRef}
// //                 onScroll={handleScroll}
// //                 className="flex overflow-x-auto scrollbar-hide -mx-4"
// //                 style={{
// //                   scrollSnapType: 'x mandatory',
// //                   WebkitOverflowScrolling: 'touch',
// //                 }}
// //               >
// //                 {DESTINATIONS.map((dest, i) => (
// //                   <div
// //                     key={dest.id}
// //                     className="flex-shrink-0 px-4"
// //                     style={{
// //                       width:           '100%',
// //                       scrollSnapAlign: 'start',
// //                       boxSizing:       'border-box',
// //                     }}
// //                   >
// //                     <DestinationCard
// //                       dest={dest}
// //                       index={i}
// //                       alwaysShowArrow
// //                       animate={false}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* dots */}
// //               <div className="flex justify-center gap-2 mt-5">
// //                 {DESTINATIONS.map((_, i) => (
// //                   <button
// //                     key={i}
// //                     onClick={() => scrollTo(i)}
// //                     className={`h-1.5 rounded-full transition-all duration-300 ${
// //                       i === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-200 w-2'
// //                     }`}
// //                   />
// //                 ))}
// //               </div>
// //             </>
// //           )}
// //         </div>

// //         {/* ════════════════════════════════════════════════════════════
// //             DESKTOP — 3-column grid (unchanged from original)
// //         ════════════════════════════════════════════════════════════ */}
// //         {!loaded ? (
// //           <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
// //             {Array.from({ length: 6 }).map((_, i) => (
// //               <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
// //             ))}
// //           </div>
// //         ) : (
// //           <motion.div
// //             variants={stagger}
// //             initial="hidden"
// //             animate="visible"
// //             className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
// //           >
// //             {DESTINATIONS.map((dest, i) => (
// //               <DestinationCard
// //                 key={dest.id}
// //                 dest={dest}
// //                 index={i}
// //                 alwaysShowArrow={i === 0}
// //                 animate
// //               />
// //             ))}
// //           </motion.div>
// //         )}

// //       </div>
// //     </section>
// //   )
// // }



// import { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'
// import { DESTINATIONS } from '../../../data/home.data'

// /* ── Variants ─────────────────────────────────────────────────── */
// const fadeUp = {
//   hidden:  { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
// }
// const stagger = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.1 } },
// }

// /* ── Single card ──────────────────────────────────────────────── */
// const DestinationCard = ({ dest, index, alwaysShowArrow = false, animate = true }) => {
//   const inner = (
//     <div className="relative rounded-2xl overflow-hidden aspect-[3.8/4] shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-full">
//       <img
//         src={dest.image}
//         alt={dest.name}
//         loading={index < 3 ? 'eager' : 'lazy'}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//       <div
//         className={`
//           absolute top-3 right-3 z-20
//           bg-blue-600 text-white w-8 h-8 rounded-full
//           flex items-center justify-center text-sm shadow-lg
//           transition-opacity duration-200
//           ${alwaysShowArrow ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
//         `}
//       >
//         →
//       </div>
//       <p className="absolute bottom-4 left-4 text-white font-bold text-base drop-shadow-md">
//         {dest.name}
//       </p>
//     </div>
//   )

//   if (animate) {
//     return (
//       <motion.div variants={fadeUp} className="relative group">
//         <Link to={`/destinations/${dest.slug}`} className="block">
//           {inner}
//         </Link>
//       </motion.div>
//     )
//   }

//   return (
//     <div className="relative group">
//       <Link to={`/destinations/${dest.slug}`} className="block">
//         {inner}
//       </Link>
//     </div>
//   )
// }

// /* ── Main component ───────────────────────────────────────────── */
// export const FeaturedDestinations = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
//   const [loaded, setLoaded]           = useState(false)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const sliderRef = useRef(null)

//   useEffect(() => {
//     if (!hasIntersected) return
//     const t = setTimeout(() => setLoaded(true), 300)
//     return () => clearTimeout(t)
//   }, [hasIntersected])

//   const handleScroll = () => {
//     const el = sliderRef.current
//     if (!el) return
//     setActiveIndex(Math.round(el.scrollLeft / el.offsetWidth))
//   }

//   const scrollTo = (i) => {
//     if (!sliderRef.current) return
//     sliderRef.current.scrollTo({ left: i * sliderRef.current.offsetWidth, behavior: 'smooth' })
//     setActiveIndex(i)
//   }

//   return (
//     <section ref={ref} className="py-20 bg-white overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* ── Heading ─────────────────────────────────────────────
//             Watermark wraps ONLY the h2 via a nested relative div.
//             Subtitle sits outside that wrapper — no watermark behind it.
//         ──────────────────────────────────────────────────────── */}
//         <div className="text-center mb-10 md:mb-12">
//           {/* Watermark + h2 in their own relative wrapper */}
//           <div className="relative   px-4">
//             <span className="
//               absolute inset-x-0 top-1/2 -translate-y-1/2
//               text-[38px] xs:text-[48px] sm:text-[56px] md:text-[64px]
//               font-black tracking-tight md:tracking-widest
//               select-none pointer-events-none
//               text-blue-900/[0.1] uppercase whitespace-nowrap
//             ">
//               DESTINATION
//             </span>
//             <h2 className="relative font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-0 py-2">
//               Featured Destinations
//             </h2>
//           </div>
//           {/* Subtitle — clean, no watermark behind it */}
//           <p className="text-sm md:text-base text-gray-500 mt-3">
//             Choose Your Travel and Start Making Memories
//           </p>
//         </div>

//         {/* ── MOBILE: 1-card snap slider ────────────────────────── */}
//         <div className="md:hidden">
//           {!loaded ? (
//             <div className="flex overflow-hidden -mx-4">
//               <div className="flex-shrink-0 px-4" style={{ width: '100%' }}>
//                 <div className="aspect-[3.8/4] bg-gray-200 rounded-2xl animate-pulse w-full" />
//               </div>
//             </div>
//           ) : (
//             <>
//               <div
//                 ref={sliderRef}
//                 onScroll={handleScroll}
//                 className="flex overflow-x-auto scrollbar-hide -mx-4"
//                 style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
//               >
//                 {DESTINATIONS.map((dest, i) => (
//                   <div
//                     key={dest.id}
//                     className="flex-shrink-0 px-4"
//                     style={{ width: '100%', scrollSnapAlign: 'start', boxSizing: 'border-box' }}
//                   >
//                     <DestinationCard dest={dest} index={i} alwaysShowArrow animate={false} />
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-center gap-2 mt-5">
//                 {DESTINATIONS.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => scrollTo(i)}
//                     className={`h-1.5 rounded-full transition-all duration-300 ${
//                       i === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-200 w-2'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>

//         {/* ── DESKTOP: 3-column grid ────────────────────────────── */}
//         {!loaded ? (
//           <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
//             ))}
//           </div>
//         ) : (
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//             className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
//           >
//             {DESTINATIONS.map((dest, i) => (
//               <DestinationCard
//                 key={dest.id}
//                 dest={dest}
//                 index={i}
//                 alwaysShowArrow={i === 0}
//                 animate
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
import Tilt from 'react-parallax-tilt' 
import { useIntersection } from '../../../hooks/useIntersection'
import { DESTINATIONS } from '../../../data/home.data'

/* ── Elite Variants ───────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── Single card Component ────────────────────────────────────── */
const DestinationCard = ({ dest, index, alwaysShowArrow = false, animate = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  const inner = (
    <Tilt
      perspective={1200}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.03}
      transitionSpeed={1500}
      glareEnable={true}
      glareMaxOpacity={0.1}
      className="h-full w-full"
    >
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-2xl overflow-hidden aspect-[3.8/4] bg-zinc-900 shadow-md hover:shadow-xl transition-all duration-500 w-full h-full"
      >
        {/* 1. IMAGE CROSS-FADE LAYER */}
        <div className="absolute inset-0 z-0">
          <img
            src={dest.image}
            alt={dest.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
            }`}
          />
          <img
            src={dest.imageHover}
            alt={`${dest.name} hover`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

        {/* 2. FLOATING ARROW */}
        <div
          className={`
            absolute top-3 right-3 z-20
            bg-blue-600 text-white w-8 h-8 rounded-full
            flex items-center justify-center text-sm shadow-lg
            transition-all duration-300 transform
            ${alwaysShowArrow || isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          `}
        >
          →
        </div>

        {/* 3. TEXT CONTENT */}
        <div className="absolute bottom-4 left-4 z-20 right-4 pointer-events-none">
          <p className="text-white font-bold text-base drop-shadow-md">
            {dest.name}
          </p>
          {/* Subtle description reveal */}
          <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-12 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-200 text-[10px] leading-tight line-clamp-2">
              {dest.description}
            </p>
          </div>
        </div>
      </div>
    </Tilt>
  )

  return (
    <motion.div variants={animate ? fadeUp : {}} className="relative group">
      <Link to={`/destinations/${dest.slug}`} className="block">
        {inner}
      </Link>
    </motion.div>
  )
}

/* ── Main Section Component ───────────────────────────────────── */
export const FeaturedDestinations = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
  const [loaded, setLoaded]           = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    if (!hasIntersected) return
    const t = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(t)
  }, [hasIntersected])

  const handleScroll = () => {
    const el = sliderRef.current
    if (!el) return
    setActiveIndex(Math.round(el.scrollLeft / el.offsetWidth))
  }

  const scrollTo = (i) => {
    if (!sliderRef.current) return
    sliderRef.current.scrollTo({ left: i * sliderRef.current.offsetWidth, behavior: 'smooth' })
    setActiveIndex(i)
  }

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Heading (From Your Reference Code) ────────────────── */}
        <div className="text-center mb-10 md:mb-12">
          <div className="relative px-4">
            <span className="
              absolute inset-x-0 top-1/2 -translate-y-1/2
              text-[38px] xs:text-[48px] sm:text-[56px] md:text-[64px]
              font-black tracking-tight md:tracking-widest
              select-none pointer-events-none
              text-blue-900/[0.08] uppercase whitespace-nowrap
            ">
              DESTINATION
            </span>
            <h2 className="relative font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-0 py-2">
              Featured Destinations
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-500 mt-3">
            Choose Your Travel and Start Making Memories
          </p>
        </div>

        {/* ── MOBILE: 1-card snap slider ────────────────────────── */}
        <div className="md:hidden">
          {!loaded ? (
            <div className="flex overflow-hidden -mx-4">
              <div className="flex-shrink-0 px-4" style={{ width: '100%' }}>
                <div className="aspect-[3.8/4] bg-gray-200 rounded-2xl animate-pulse w-full" />
              </div>
            </div>
          ) : (
            <>
              <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto scrollbar-hide -mx-4"
                style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
              >
                {DESTINATIONS.map((dest, i) => (
                  <div
                    key={dest.id}
                    className="flex-shrink-0 px-4"
                    style={{ width: '100%', scrollSnapAlign: 'start', boxSizing: 'border-box' }}
                  >
                    <DestinationCard dest={dest} index={i} alwaysShowArrow animate={false} />
                  </div>
                ))}
              </div>
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

        {/* ── DESKTOP: 3-column grid (With Stagger & Tilt) ─────── */}
        {!loaded ? (
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[3.8/4] bg-gray-200 rounded-2xl animate-pulse" />
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
                alwaysShowArrow={false}
                animate
              />
            ))}
          </motion.div>
        )}

      </div>
    </section>
  )
}