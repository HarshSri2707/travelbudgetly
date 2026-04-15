


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
//       if (w >= 2560) src = HERO_IMAGE.laptop
//       else if (w >= 1024) src = HERO_IMAGE.desktop
//       else if (w >= 751) src = HERO_IMAGE.tablet
//       else src = HERO_IMAGE.mobile

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
//       <div
//         ref={bgRef}
//         className="relative z-0 w-full
//           aspect-[750/1334]
//           md:aspect-[1536/1800]
//           lg:aspect-[3840/2160]
//           bg-[length:100%_100%] bg-center bg-no-repeat transition-all duration-300"
//       >

//         {/* ── Search Bar Overlay ── */}
//         {/* pb pushes bar down from center: more pb = lower position */}
//         <div className="absolute inset-0 z-10 flex items-center justify-center md:px-4 pb-0 pt-32 md:pt-48 lg:pt-56">

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//             className="w-full max-w-5xl"
//           >
//             {/* Unified Search Bar */}
//             <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-1 md:p-2 border border-white/20">

//               {/* Location Dropdown */}
//               <div className="flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-4 border-r border-gray-200 shrink-0">
//                 <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 </svg>
//                 <select className="text-[10px] md:text-[15px] text-gray-800 bg-transparent outline-none cursor-pointer font-bold w-12 md:w-auto">
//                   <option>Location ↓</option>
//                   <option>India</option>
//                   <option>World</option>
//                 </select>
//               </div>

//               {/* Budget Dropdown */}
//               <div className="flex items-center gap-1 md:gap-2 px-3 md:px-8 py-2 md:py-4 border-r border-gray-200 shrink-0">
//                 <span className="text-blue-600 font-black text-xs md:text-lg">₹</span>
//                 <select className="text-[10px] md:text-[15px] text-gray-800 bg-transparent outline-none cursor-pointer font-bold w-14 md:w-auto">
//                   <option>Budget ↓</option>
//                   <option>Budget</option>
//                 </select>
//               </div>

//               {/* Destination Input */}
//               <input
//                 type="text"
//                 placeholder="Enter Your Destination..."
//                 className="flex-1 min-w-0 px-3 md:px-8 py-2 md:py-4 rounded-[24px] text-[10px] md:text-[15px] text-gray-800 placeholder-gray-400 font-medium bg-transparent"
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


import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

/* ── Mobile Expanded Search Modal ───────────────────────────── */
const MobileSearchModal = ({ onClose }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100)
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      key="mobile-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-b-3xl px-4 pt-12 pb-6 mx-0 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <p className="text-[11px] font-black uppercase tracking-[0.15em] text-blue-600 mb-1 px-1">
          Search
        </p>
        <h2 className="text-[20px] font-bold text-gray-900 mb-5 px-1">
          Where do you want to go?
        </h2>

        {/* Location */}
        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 mb-3">
          <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <select className="flex-1 text-[14px] text-gray-800 bg-transparent outline-none font-medium">
            <option value="">Location</option>
            <option>India</option>
            <option>World</option>
          </select>
        </div>

        {/* Budget */}
        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 mb-3">
          <span className="text-blue-600 font-black text-base shrink-0">₹</span>
          <select className="flex-1 text-[14px] text-gray-800 bg-transparent outline-none font-medium">
            <option value="">Budget</option>
            <option>Under ₹50,000</option>
            <option>₹50K – ₹2L</option>
            <option>₹2L – ₹3L</option>
            <option>₹3L+</option>
          </select>
        </div>

        {/* Destination */}
        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 mb-5">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your destination..."
            className="flex-1 text-[14px] text-gray-800 placeholder-gray-400 bg-transparent outline-none font-medium"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-4 rounded-full text-[14px] uppercase tracking-wide shadow-lg transition-all"
        >
          Search
        </button>

        {/* Close hint */}
        <p
          className="text-center text-[12px] text-gray-400 mt-4 cursor-pointer"
          onClick={onClose}
        >
          Tap outside to close
        </p>
      </motion.div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export const HeroSection = () => {
  const bgRef = useResponsiveImage()
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">

      {/* Mobile Search Modal */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <MobileSearchModal onClose={() => setMobileSearchOpen(false)} />
        )}
      </AnimatePresence>

      {/* Background Image Container */}
      <div
        ref={bgRef}
        className="relative z-0 w-full
          aspect-[750/1334]
          md:aspect-[1536/1800]
          lg:aspect-[3840/2160]
          bg-[length:100%_100%] bg-center bg-no-repeat transition-all duration-300"
      >

        {/* Search Bar Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center md:px-4 pb-0 pt-32 md:pt-48 lg:pt-56">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="w-full max-w-5xl px-4 md:px-0"
          >

            {/* ── DESKTOP search bar (md and above) ─────────────── */}
            <div className="hidden md:flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-2 border border-white/20">

              {/* Location */}
              <div className="flex items-center gap-2 px-6 py-4 border-r border-gray-200 shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <select className="text-[15px] text-gray-800 bg-transparent outline-none cursor-pointer font-bold">
                  <option>Location ↓</option>
                  <option>India</option>
                  <option>World</option>
                </select>
              </div>

              {/* Budget */}
              <div className="flex items-center gap-2 px-8 py-4 border-r border-gray-200 shrink-0">
                <span className="text-blue-600 font-black text-lg">₹</span>
                <select className="text-[15px] text-gray-800 bg-transparent outline-none cursor-pointer font-bold">
                  <option>Budget ↓</option>
                  <option>Under ₹50,000</option>
                  <option>₹50K – ₹2L</option>
                  <option>₹2L – ₹3L</option>
                  <option>₹3L+</option>
                </select>
              </div>

              {/* Destination Input */}
              <input
                type="text"
                placeholder="Enter Your Destination..."
                className="flex-1 min-w-0 px-8 py-4 rounded-[24px] text-[15px] text-gray-800 placeholder-gray-400 font-medium bg-transparent outline-none"
              />

              {/* Search Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-5 transition-all shrink-0 rounded-full text-[15px] uppercase tracking-wide shadow-lg active:scale-95">
                Search
              </button>
            </div>

            {/* ── MOBILE search icon button ──────────────────────── */}
            <div className="flex md:hidden justify-center">
              <motion.button
                onClick={() => setMobileSearchOpen(true)}
                whileTap={{ scale: 0.92 }}
                className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.35)] px-6 py-3.5 border border-white/20"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-gray-600">
                  Where do you want to go?
                </span>
              </motion.button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}