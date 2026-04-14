


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
                  <option>Local ↓</option>
                  <option>India</option>
                  <option>World</option>
                </select>
              </div>

              {/* Budget Dropdown */}
              <div className="flex items-center gap-1 md:gap-2 px-3 md:px-8 py-2 md:py-4 border-r border-gray-200 shrink-0">
                <span className="text-blue-600 font-black text-xs md:text-lg">₹</span>
                <select className="text-[10px] md:text-[15px] text-gray-800 bg-transparent outline-none cursor-pointer font-bold w-14 md:w-auto">
                  <option>Budget ↓</option>
                  <option>Budget</option>
                </select>
              </div>

              {/* Destination Input */}
              <input
                type="text"
                placeholder="Enter Your Destination..."
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