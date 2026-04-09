


// // import { Link } from 'react-router-dom'
// // import { motion } from 'framer-motion'
// // import { Button } from '../../../components/ui/Button'
// // import { useReducedMotion } from '../../../hooks/useReducedMotion'
// // import { useCountUp } from '../../../hooks/useCountUp'
// // import { useEffect, useState } from 'react'

// // const HERO_IMAGES = [
// //   'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80',
// //   'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80',
// //   'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1600&q=80',
// // ]

// // export const HeroSection = () => {
// //   const prefersReducedMotion = useReducedMotion()

// //   /* 🔢 CountUp */
// //   const destinations = useCountUp({ end: 120, suffix: '+' })
// //   const travelers = useCountUp({ end: 4500, suffix: '+' })
// //   const rating = useCountUp({ end: 4.9, decimals: 1 })

// //   /* 🎞 Image state */
// //   const [current, setCurrent] = useState(0)
// //   const [next, setNext] = useState(1)

// //   /* 🚀 Preload images ONCE */
// //   useEffect(() => {
// //     HERO_IMAGES.forEach((src) => {
// //       const img = new Image()
// //       img.src = src
// //     })
// //   }, [])

// //   /* 🔁 Rotate images */
// //   useEffect(() => {
// //     if (prefersReducedMotion) return

// //     const interval = setInterval(() => {
// //       setNext((prev) => (prev + 1) % HERO_IMAGES.length)
// //       setCurrent((prev) => (prev + 1) % HERO_IMAGES.length)
// //     }, 7000)

// //     return () => clearInterval(interval)
// //   }, [prefersReducedMotion])

// //   return (
// //     <section className="relative min-h-screen flex items-center overflow-hidden">

// //       {/* 🌄 Background Images (NO unmount, NO blur) */}
// //       <div className="absolute inset-0 z-0">
// //         {/* Current image */}
// //         <div
// //           className="absolute inset-0 bg-cover bg-center will-animate gpu-accelerated"
// //           style={{ backgroundImage: `url(${HERO_IMAGES[current]})` }}
// //         />

// //         {/* Next image fades in */}
// //         <motion.div
// //           key={next}
// //           className="absolute inset-0 bg-cover bg-center will-animate gpu-accelerated"
// //           style={{ backgroundImage: `url(${HERO_IMAGES[next]})` }}
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 1.2, ease: 'easeInOut' }}
// //         />

// //         {/* Static overlay */}
// //         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
// //       </div>

// //       {/* 🧠 Content */}
// //       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
// //         <motion.div
// //           initial={{ opacity: 0, y: 24 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
// //           className="max-w-3xl text-white"
// //         >
// //           <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
// //             Discover the World with{' '}
// //             <span className="text-primary-400">TravelBudgetly</span>
// //           </h1>

// //           <p className="text-xl text-gray-200 mb-4 font-medium">
// //             Your Trusted Partner in Every Journey
// //           </p>

// //           <p className="text-lg text-gray-300 mb-8 leading-relaxed">
// //             From the Himalayas to Kerala, India to the Vatican — we create curated
// //             travel experiences that fit your budget and deliver unforgettable memories.
// //           </p>

// //           {/* CTA */}
// //           <div className="flex flex-col sm:flex-row gap-4 mb-12">
// //             <Link to="/packages">
// //               <Button size="lg" className="shadow-xl">
// //                 Find Your Perfect Package
// //               </Button>
// //             </Link>
// //             <Link to="/destinations">
// //               <Button variant="secondary" size="lg" className="shadow-lg">
// //                 Explore Destinations
// //               </Button>
// //             </Link>
// //           </div>

// //           {/* 📊 Stats */}
// //           <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
// //             <div ref={destinations.ref}>
// //               <p className="text-3xl font-bold text-primary-400">
// //                 {destinations.value}{destinations.suffix}
// //               </p>
// //               <p className="text-sm text-gray-300">Destinations</p>
// //             </div>

// //             <div ref={travelers.ref}>
// //               <p className="text-3xl font-bold text-primary-400">
// //                 {travelers.value}{travelers.suffix}
// //               </p>
// //               <p className="text-sm text-gray-300">Happy Travelers</p>
// //             </div>

// //             <div ref={rating.ref}>
// //               <p className="text-3xl font-bold text-primary-400">
// //                 {rating.value}
// //               </p>
// //               <p className="text-sm text-gray-300">Average Rating</p>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }


// // import { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'
// // import { motion } from 'framer-motion'
// // import { useCountUp } from '../../../hooks/useCountUp'
// // import { useReducedMotion } from '../../../hooks/useReducedMotion'
// // import { HERO_IMAGES } from '../../../data/home.data'

// // export const HeroSection = () => {
// //   const prefersReducedMotion = useReducedMotion()

// //   const destinations = useCountUp({ end: 120, suffix: '+' })
// //   const travelers    = useCountUp({ end: 4500, suffix: '+' })
// //   const rating       = useCountUp({ end: 4.9, decimals: 1 })

// //   const [current, setCurrent] = useState(0)
// //   const [next,    setNext]    = useState(1)

// //   /* preload */
// //   useEffect(() => {
// //     HERO_IMAGES.forEach((src) => {
// //       const img = new Image()
// //       img.src = src
// //     })
// //   }, [])

// //   /* rotate */
// //   useEffect(() => {
// //     if (prefersReducedMotion) return
// //     const iv = setInterval(() => {
// //       setNext((p) => (p + 1) % HERO_IMAGES.length)
// //       setCurrent((p) => (p + 1) % HERO_IMAGES.length)
// //     }, 7000)
// //     return () => clearInterval(iv)
// //   }, [prefersReducedMotion])

// //   return (
// //     <section className="relative min-h-screen flex items-center overflow-hidden">

// //       {/* ── background images ── */}
// //       <div className="absolute inset-0 z-0">
// //         <div
// //           className="absolute inset-0 bg-cover bg-center"
// //           style={{ backgroundImage: `url(${HERO_IMAGES[current]})` }}
// //         />
// //         <motion.div
// //           key={next}
// //           className="absolute inset-0 bg-cover bg-center"
// //           style={{ backgroundImage: `url(${HERO_IMAGES[next]})` }}
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 1.4, ease: 'easeInOut' }}
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
// //       </div>

// //       {/* ── watermark ── */}
// //       <div className="absolute inset-x-0 top-16 text-center pointer-events-none select-none z-0 overflow-hidden">
// //         <span className="font-black text-[80px] md:text-[140px] tracking-[0.12em] text-white/5 leading-none whitespace-nowrap">
// //           ADVENTURE
// //         </span>
// //       </div>

// //       {/* ── content ── */}
// //       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-36 pb-24">
// //         <motion.div
// //           initial={{ opacity: 0, y: 28 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
// //           className="max-w-3xl text-white"
// //         >
// //           {/* heading */}
// //           <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.92] mb-8 tracking-tight">
// //             ADVENTURE
// //             <br />
// //             <span className="text-blue-500">TRAVEL</span>
// //           </h1>

// //           {/* search bar */}
// //           <div className="flex flex-wrap md:flex-nowrap items-center bg-white rounded-full shadow-2xl overflow-hidden mb-10 max-w-2xl">
// //             {/* Location */}
// //             <div className="flex items-center gap-2 px-5 py-4 border-r border-gray-200 shrink-0">
// //               <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //               </svg>
// //               <select className="text-sm text-gray-600 bg-transparent outline-none cursor-pointer font-medium">
// //                 <option>Location ↓</option>
// //                 <option>India</option>
// //                 <option>International</option>
// //               </select>
// //             </div>
// //             {/* Budget */}
// //             <div className="flex items-center gap-2 px-5 py-4 border-r border-gray-200 shrink-0">
// //               <span className="text-gray-400 font-bold text-sm">₹</span>
// //               <select className="text-sm text-gray-600 bg-transparent outline-none cursor-pointer font-medium">
// //                 <option>Budget ↓</option>
// //                 <option>Under ₹50,000</option>
// //                 <option>₹50K – ₹1L</option>
// //                 <option>₹1L+</option>
// //               </select>
// //             </div>
// //             {/* Text input */}
// //             <input
// //               type="text"
// //               placeholder="Enter your Travel Destination"
// //               className="flex-1 min-w-0 px-5 py-4 text-sm text-gray-700 outline-none placeholder-gray-400"
// //             />
// //             {/* CTA */}
// //             <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-8 py-4 transition-colors duration-200 shrink-0 rounded-r-full">
// //               Search
// //             </button>
// //           </div>

// //           {/* stats */}
// //           <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-8 max-w-lg">
// //             <div ref={destinations.ref}>
// //               <p className="text-3xl font-bold text-blue-400">
// //                 {destinations.value}{destinations.suffix}
// //               </p>
// //               <p className="text-sm text-gray-300 mt-0.5">Destinations</p>
// //             </div>
// //             <div ref={travelers.ref}>
// //               <p className="text-3xl font-bold text-blue-400">
// //                 {travelers.value}{travelers.suffix}
// //               </p>
// //               <p className="text-sm text-gray-300 mt-0.5">Happy Travelers</p>
// //             </div>
// //             <div ref={rating.ref}>
// //               <p className="text-3xl font-bold text-blue-400">{rating.value}</p>
// //               <p className="text-sm text-gray-300 mt-0.5">Average Rating</p>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }


// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useCountUp } from '../../../hooks/useCountUp'
// import { useReducedMotion } from '../../../hooks/useReducedMotion'
// import { HERO_IMAGES } from '../../../data/home.data'

// /* ── Letter animation variants ───────────────────────────────── */
// const letterContainer = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.045 },   // fast stagger per letter
//   },
// }

// const letterVariant = {
//   hidden:  { opacity: 0, y: 14, scale: 0.85 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] },
//   },
// }

// /* After all letters appear, the whole heading scales up once */
// const headingReveal = {
//   hidden:  { scale: 1 },
//   visible: {
//     scale: [1, 1.045, 1],
//     transition: {
//       delay: 0.55,       // after all letters are done
//       duration: 0.55,
//       ease: [0.4, 0, 0.2, 1],
//     },
//   },
// }

// /* ── Animated word ────────────────────────────────────────────── */
// const AnimatedWord = ({ word, className }) => (
//   <motion.span
//     variants={letterContainer}
//     initial="hidden"
//     animate="visible"
//     className={`inline-flex ${className}`}
//   >
//     {word.split('').map((char, i) => (
//       <motion.span key={i} variants={letterVariant} className="inline-block">
//         {char}
//       </motion.span>
//     ))}
//   </motion.span>
// )

// /* ── Component ────────────────────────────────────────────────── */
// export const HeroSection = () => {
//   const prefersReducedMotion = useReducedMotion()

//   const destinations = useCountUp({ end: 120,  suffix: '+' })
//   const travelers    = useCountUp({ end: 4500, suffix: '+' })
//   const rating       = useCountUp({ end: 4.9,  decimals: 1 })

//   const [current, setCurrent] = useState(0)
//   const [next,    setNext]    = useState(1)

//   /* preload images */
//   useEffect(() => {
//     HERO_IMAGES.forEach((src) => {
//       const img = new Image()
//       img.src = src
//     })
//   }, [])

//   /* rotate background */
//   useEffect(() => {
//     if (prefersReducedMotion) return
//     const iv = setInterval(() => {
//       setNext((p)     => (p + 1) % HERO_IMAGES.length)
//       setCurrent((p)  => (p + 1) % HERO_IMAGES.length)
//     }, 7000)
//     return () => clearInterval(iv)
//   }, [prefersReducedMotion])

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">

//       {/* ── Background images ─────────────────────────────────────── */}
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

//       {/* ── Watermark ─────────────────────────────────────────────── */}
//       <div className="absolute inset-x-0 top-16 text-center pointer-events-none select-none z-0 overflow-hidden">
//         <span className="font-black text-[80px] md:text-[140px] tracking-[0.12em] text-white/5 leading-none whitespace-nowrap">
//           ADVENTURE
//         </span>
//       </div>

//       {/* ── Content ───────────────────────────────────────────────── */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-32 md:pt-36 pb-20 md:pb-24">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//           className="text-white"
//         >

//           {/* ── Heading: letter-by-letter then scale pop ──────────── */}
//           <motion.h1
//             variants={headingReveal}
//             initial="hidden"
//             animate="visible"
//             className="
//               font-display font-black
//               text-5xl sm:text-6xl md:text-7xl
//               leading-[0.92] mb-8 tracking-tight
//               inline-block
//             "
//           >
//             {/* Line 1: ADVENTURE */}
//             <span className="block overflow-hidden">
//               <AnimatedWord word="ADVENTURE" className="text-white" />
//             </span>
//             {/* Line 2: TRAVEL */}
//             <span className="block overflow-hidden">
//               <AnimatedWord
//                 word="TRAVEL"
//                 className="text-blue-500"
//               />
//             </span>
//           </motion.h1>

//           {/* ── Search bar ────────────────────────────────────────── */}
//           {/*
//             Desktop: single row pill — Location | Budget | Input | Search btn
//             Mobile:  stacked card layout — each field full width, button full width
            
//             We use a white card always, flex-col on mobile, flex-row on md+
//           */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.55, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
//             className="mb-10 w-full max-w-3xl"
//           >

//             {/* MOBILE: stacked card */}
//             <div className="md:hidden bg-white rounded-2xl shadow-2xl overflow-hidden">
//               {/* Location */}
//               <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
//                 <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <select className="flex-1 text-sm text-gray-700 bg-transparent outline-none font-medium">
//                   <option>Location</option>
//                   <option>India</option>
//                   <option>International</option>
//                 </select>
//               </div>

//               {/* Budget */}
//               <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
//                 <span className="text-gray-400 font-bold text-sm shrink-0">₹</span>
//                 <select className="flex-1 text-sm text-gray-700 bg-transparent outline-none font-medium">
//                   <option>Budget</option>
//                   <option>Under ₹50,000</option>
//                   <option>₹50K – ₹1L</option>
//                   <option>₹1L+</option>
//                 </select>
//               </div>

//               {/* Destination input */}
//               <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
//                 <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//                 <input
//                   type="text"
//                   placeholder="Enter your Travel Destination"
//                   className="flex-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
//                 />
//               </div>

//               {/* Search button */}
//               <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-4 transition-colors duration-200 text-sm">
//                 Search
//               </button>
//             </div>

//             {/* DESKTOP: single-row pill */}
//             <div className="hidden md:flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
//               {/* Location */}
//               <div className="flex items-center gap-2 px-6 py-4 border-r border-gray-200 shrink-0">
//                 <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <select className="text-sm text-gray-700 bg-transparent outline-none cursor-pointer font-medium min-w-[110px]">
//                   <option>Location ↓</option>
//                   <option>India</option>
//                   <option>International</option>
//                 </select>
//               </div>

//               {/* Budget */}
//               <div className="flex items-center gap-2 px-6 py-4 border-r border-gray-200 shrink-0">
//                 <span className="text-gray-400 font-bold text-sm">₹</span>
//                 <select className="text-sm text-gray-700 bg-transparent outline-none cursor-pointer font-medium min-w-[130px]">
//                   <option>Budget ↓</option>
//                   <option>Under ₹50,000</option>
//                   <option>₹50K – ₹1L</option>
//                   <option>₹1L+</option>
//                 </select>
//               </div>

//               {/* Text input */}
//               <input
//                 type="text"
//                 placeholder="Enter your Travel Destination"
//                 className="flex-1 min-w-0 px-6 py-4 text-sm text-gray-700 outline-none placeholder-gray-400"
//               />

//               {/* CTA */}
//               <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-10 py-4 transition-colors duration-200 shrink-0 rounded-r-full text-sm">
//                 Search
//               </button>
//             </div>
//           </motion.div>

//           {/* ── Stats ─────────────────────────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.75, duration: 0.6 }}
//             className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/20 pt-6 md:pt-8 max-w-lg"
//           >
//             <div ref={destinations.ref}>
//               <p className="text-2xl md:text-3xl font-bold text-blue-400">
//                 {destinations.value}{destinations.suffix}
//               </p>
//               <p className="text-xs md:text-sm text-gray-300 mt-0.5">Destinations</p>
//             </div>
//             <div ref={travelers.ref}>
//               <p className="text-2xl md:text-3xl font-bold text-blue-400">
//                 {travelers.value}{travelers.suffix}
//               </p>
//               <p className="text-xs md:text-sm text-gray-300 mt-0.5">Happy Travelers</p>
//             </div>
//             <div ref={rating.ref}>
//               <p className="text-2xl md:text-3xl font-bold text-blue-400">
//                 {rating.value}
//               </p>
//               <p className="text-xs md:text-sm text-gray-300 mt-0.5">Average Rating</p>
//             </div>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   )
// }


// import { useEffect, useRef } from 'react'
// import { motion } from 'framer-motion'
// import { HERO_IMAGE } from '../../../data/home.data'

// const useResponsiveImage = () => {
//   const bgRef = useRef(null)

//   useEffect(() => {
//     const apply = () => {
//       if (!bgRef.current) return
//       const w = window.innerWidth
      
//       let src = HERO_IMAGE.mobile
//       if (w >= 2560) src = HERO_IMAGE.laptop // Laptop/4K
//       else if (w >= 1024) src = HERO_IMAGE.desktop // Macbook/Desktop
//       else if (w >= 751) src = HERO_IMAGE.tablet // Tablet
//       else src = HERO_IMAGE.mobile // Mobile

//       bgRef.current.style.backgroundImage = `url(${src})`
//     }

//     Object.values(HERO_IMAGE).forEach((src) => {
//       const img = new Image()
//       img.src = src
//     })

//     apply()
//     window.addEventListener('resize', apply)
//     return () => window.removeEventListener('resize', apply)
//   }, [])

//   return bgRef
// }

// export const HeroSection = () => {
//   const bgRef = useResponsiveImage()

//   return (
//     <section className="relative w-full overflow-hidden bg-gray-900">
      
//       {/* ── Background Image Container ── */}
//       {/* 'bg-[length:100%_100%]' prevents cutting by forcing image to fit the container perfectly */}
//       <div
//         ref={bgRef}
//         className="relative z-0 w-full 
//           aspect-[750/1334]     /* Mobile Aspect */
//           md:aspect-[1536/1800] /* Tablet Aspect */
//           lg:aspect-[3840/2160] /* Desktop/Macbook Aspect */
//           bg-[length:100%_100%] bg-center bg-no-repeat transition-all duration-300"
//       >
        
//         {/* ── Search Bar Overlay ── */}
//         <div className="absolute inset-0 z-10 flex items-center justify-center md:px-4 pt-8 ">

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//             className="w-full max-w-5xl"
//           >
//             {/* Unified Search Bar - Same design for Mobile, Tablet, and Desktop */}
//             <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-1  md:p-2 border border-white/20">
              
//               {/* Location Dropdown */}
//               <div className="flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-4 border-r border-gray-200 shrink-0">
//                 <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 </svg>
//                 <select className="text-[10px] md:text-[15px] text-gray-800 bg-transparent outline-none cursor-pointer font-bold w-12 md:w-auto">
//                   <option>Loc ↓</option>
//                   <option>India</option>
//                   <option>World</option>
//                 </select>
//               </div>

//               {/* Budget Dropdown */}
//               <div className="flex items-center gap-1 md:gap-2 px-3 md:px-8 py-2 md:py-4 border-r border-gray-200 shrink-0">
//                 <span className="text-blue-600 font-black text-xs md:text-lg">₹</span>
//                 <select className="text-[10px] md:text-[15px] text-gray-800 bg-transparent outline-none cursor-pointer font-bold w-14 md:w-auto">
//                   <option>Bud ↓</option>
//                   <option>Budget</option>
//                 </select>
//               </div>

//               {/* Destination Input */}
//               <input
//                 type="text"
//                 placeholder="Destination..."
//                 className="flex-1 min-w-0 px-3 md:px-8 py-2 md:py-4 rounded-[24px] text-[10px] md:text-[15px] text-gray-800  placeholder-gray-400 font-medium bg-transparent"
//               />

//               {/* Search Button */}
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 md:px-12 py-2.5 md:py-5 transition-all shrink-0 rounded-full text-[10px] md:text-[15px] uppercase tracking-wide shadow-lg active:scale-95">
//                 Search
//               </button>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }


import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HERO_IMAGE } from '../../../data/home.data'

const useResponsiveImage = () => {
  const bgRef = useRef(null)

  useEffect(() => {
    const apply = () => {
      if (!bgRef.current) return
      const w = window.innerWidth

      let src = HERO_IMAGE.mobile
      if (w >= 2560) src = HERO_IMAGE.laptop
      else if (w >= 1024) src = HERO_IMAGE.desktop
      else if (w >= 751) src = HERO_IMAGE.tablet
      else src = HERO_IMAGE.mobile

      bgRef.current.style.backgroundImage = `url(${src})`
    }

    Object.values(HERO_IMAGE).forEach((src) => {
      const img = new Image()
      img.src = src
    })

    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [])

  return bgRef
}

export const HeroSection = () => {
  const bgRef = useResponsiveImage()

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">

      {/* ── Background Image Container ── */}
      <div
        ref={bgRef}
        className="relative z-0 w-full
          aspect-[750/1334]
          md:aspect-[1536/1800]
          lg:aspect-[3840/2160]
          bg-[length:100%_100%] bg-center bg-no-repeat transition-all duration-300"
      >

        {/* ── Search Bar Overlay ── */}
        {/* pb pushes bar down from center: more pb = lower position */}
        <div className="absolute inset-0 z-10 flex items-center justify-center md:px-4 pb-0 pt-32 md:pt-48 lg:pt-56">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="w-full max-w-5xl"
          >
            {/* Unified Search Bar */}
            <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-1 md:p-2 border border-white/20">

              {/* Location Dropdown */}
              <div className="flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-4 border-r border-gray-200 shrink-0">
                <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <select className="text-[10px] md:text-[15px] text-gray-800 bg-transparent outline-none cursor-pointer font-bold w-12 md:w-auto">
                  <option>Loc ↓</option>
                  <option>India</option>
                  <option>World</option>
                </select>
              </div>

              {/* Budget Dropdown */}
              <div className="flex items-center gap-1 md:gap-2 px-3 md:px-8 py-2 md:py-4 border-r border-gray-200 shrink-0">
                <span className="text-blue-600 font-black text-xs md:text-lg">₹</span>
                <select className="text-[10px] md:text-[15px] text-gray-800 bg-transparent outline-none cursor-pointer font-bold w-14 md:w-auto">
                  <option>Bud ↓</option>
                  <option>Budget</option>
                </select>
              </div>

              {/* Destination Input */}
              <input
                type="text"
                placeholder="Destination..."
                className="flex-1 min-w-0 px-3 md:px-8 py-2 md:py-4 rounded-[24px] text-[10px] md:text-[15px] text-gray-800 placeholder-gray-400 font-medium bg-transparent"
              />

              {/* Search Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 md:px-12 py-2.5 md:py-5 transition-all shrink-0 rounded-full text-[10px] md:text-[15px] uppercase tracking-wide shadow-lg active:scale-95">
                Search
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}