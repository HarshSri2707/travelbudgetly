

// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'

// /* ── SEASONS data ─────────────────────────────────────────────── */
// const SEASONS = [
//   {
//     id: 'summer',
//     label: 'Summer',
//     image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
//   },
//   {
//     id: 'autumn',
//     label: 'Autum',
//     image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&q=80',
//   },
//   {
//     id: 'winter',
//     label: 'Winter',
//     image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=700&q=80',
//   },
//   {
//     id: 'spring',
//     label: 'Spring',
//     image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc57?w=700&q=80',
//   },
// ]

// /* ── Variants ─────────────────────────────────────────────────── */
// const fadeUp = {
//   hidden:  { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
// }
// const stagger = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.12 } },
// }

// /* ── Arrow button ─────────────────────────────────────────────── */
// const ArrowBtn = ({ to, size = 'md' }) => (
//   <Link
//     to={to}
//     className={`
//       ${size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'}
//       rounded-full bg-blue-600 hover:bg-blue-700
//       flex items-center justify-center
//       shadow-md transition-colors z-10 flex-shrink-0
//     `}
//   >
//     <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//     </svg>
//   </Link>
// )

// /* ── Component ────────────────────────────────────────────────── */
// export const SeasonalTravel = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

//   return (
//     <section ref={ref} className="py-16 md:py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 md:px-6">

//         {/* ── Header ──────────────────────────────────────────────
//             Fix: background watermark text clipped on mobile.
//             Use overflow-hidden on wrapper, scale text smaller on mobile
//         ────────────────────────────────────────────────────────── */}
//         <div className="relative text-center mb-10 md:mb-14 overflow-hidden">
//           {/* watermark — smaller on mobile so it never overflows */}
//           <span className="
//             absolute inset-x-0 top-1/2 -translate-y-1/2
//             text-[48px] sm:text-[72px] md:text-[110px]
//             font-black tracking-[0.12em] md:tracking-[0.15em]
//             select-none pointer-events-none
//             text-blue-600/[0.04] uppercase whitespace-nowrap
//           ">
//             Seasonal
//           </span>
//           <h2 className="relative font-bold text-xl sm:text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
//             Travel For Best Seasons
//           </h2>
//           <p className="relative text-sm md:text-base text-slate-500 font-medium italic">
//             Experience the best travel Season
//           </p>
//         </div>

//         {/* ── Layout ──────────────────────────────────────────────
//             Mobile:  all 4 cards stacked vertically
//             Desktop: Summer left full-height | Autum+[Winter|Spring] right
//         ────────────────────────────────────────────────────────── */}

//         {/* MOBILE layout — simple vertical stack */}
//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="flex flex-col gap-4 md:hidden"
//         >
//           {SEASONS.map((season, idx) => (
//             <motion.div
//               key={season.id}
//               variants={fadeUp}
//               className="relative w-full rounded-[1.25rem] overflow-hidden group"
//               style={{ height: idx === 0 ? '260px' : '180px' }}
//             >
//               <img
//                 src={season.image}
//                 alt={season.label}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
//               <div className="absolute top-4 right-4">
//                 <ArrowBtn to={`/destinations?season=${season.id}`} size="sm" />
//               </div>
//               <div className="absolute bottom-5 left-5">
//                 <h3 className="text-white font-black text-3xl tracking-tight drop-shadow-xl leading-none">
//                   {season.label}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* DESKTOP layout — exact image proportions */}
//         {/*
//           ┌──────────────┬──────────────────────────┐
//           │              │         Autum  (340px)   │
//           │    Summer    ├─────────────┬────────────┤
//           │   (580px)    │   Winter    │   Spring   │  (224px)
//           └──────────────┴─────────────┴────────────┘
//         */}
//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="hidden md:flex flex-row gap-4"
//           style={{ height: '580px' }}
//         >

//           {/* LEFT: Summer — full height */}
//           <motion.div
//             variants={fadeUp}
//             className="relative rounded-[1.5rem] overflow-hidden group flex-shrink-0"
//             style={{ width: '44%', height: '580px' }}
//           >
//             <img
//               src={SEASONS[0].image}
//               alt={SEASONS[0].label}
//               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
//             <div className="absolute top-5 right-5">
//               <ArrowBtn to={`/destinations?season=${SEASONS[0].id}`} size="md" />
//             </div>
//             <div className="absolute bottom-10 left-8">
//               <h3 className="text-white font-black text-6xl tracking-tight drop-shadow-2xl leading-none">
//                 {SEASONS[0].label}
//               </h3>
//             </div>
//           </motion.div>

//           {/* RIGHT column */}
//           <div className="flex-1 flex flex-col gap-4" style={{ height: '580px' }}>

//             {/* Autum — 340px */}
//             <motion.div
//               variants={fadeUp}
//               className="relative w-full flex-shrink-0 rounded-[1.5rem] overflow-hidden group"
//               style={{ height: '340px' }}
//             >
//               <img
//                 src={SEASONS[1].image}
//                 alt={SEASONS[1].label}
//                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
//               <div className="absolute top-5 right-5">
//                 <ArrowBtn to={`/destinations?season=${SEASONS[1].id}`} size="md" />
//               </div>
//               <div className="absolute bottom-7 left-7">
//                 <h3 className="text-white font-black text-5xl tracking-tight drop-shadow-2xl leading-none">
//                   {SEASONS[1].label}
//                 </h3>
//               </div>
//             </motion.div>

//             {/* Winter + Spring — 224px row */}
//             <div className="flex gap-4 flex-shrink-0" style={{ height: '224px' }}>

//               {/* Winter */}
//               <motion.div
//                 variants={fadeUp}
//                 className="relative flex-1 rounded-[1.5rem] overflow-hidden group"
//               >
//                 <img
//                   src={SEASONS[2].image}
//                   alt={SEASONS[2].label}
//                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
//                 <div className="absolute top-4 right-4">
//                   <ArrowBtn to={`/destinations?season=${SEASONS[2].id}`} size="sm" />
//                 </div>
//                 <div className="absolute bottom-5 left-5">
//                   <h3 className="text-white font-black text-3xl tracking-tight drop-shadow-xl leading-none">
//                     {SEASONS[2].label}
//                   </h3>
//                 </div>
//               </motion.div>

//               {/* Spring */}
//               <motion.div
//                 variants={fadeUp}
//                 className="relative flex-1 rounded-[1.5rem] overflow-hidden group"
//               >
//                 <img
//                   src={SEASONS[3].image}
//                   alt={SEASONS[3].label}
//                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
//                 <div className="absolute top-4 right-4">
//                   <ArrowBtn to={`/destinations?season=${SEASONS[3].id}`} size="sm" />
//                 </div>
//                 <div className="absolute bottom-5 left-5">
//                   <h3 className="text-white font-black text-3xl tracking-tight drop-shadow-xl leading-none">
//                     {SEASONS[3].label}
//                   </h3>
//                 </div>
//               </motion.div>

//             </div>
//           </div>

//         </motion.div>
//       </div>
//     </section>
//   )
// }



import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'

/* ── SEASONS data ─────────────────────────────────────────────── */
const SEASONS = [
  {
    id: 'summer',
    label: 'Summer',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
  },
  {
    id: 'autumn',
    label: 'Autum',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&q=80',
  },
  {
    id: 'winter',
    label: 'Winter',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=700&q=80',
  },
  {
    id: 'spring',
    label: 'Spring',
    image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc57?w=700&q=80',
  },
]

/* ── Variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/* ── Arrow button ─────────────────────────────────────────────── */
const ArrowBtn = ({ to, size = 'md' }) => (
  <Link
    to={to}
    className={`
      ${size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'}
      rounded-full bg-blue-600 hover:bg-blue-700
      flex items-center justify-center
      shadow-md transition-colors z-10 flex-shrink-0
    `}
  >
    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </Link>
)

/* ── Component ────────────────────────────────────────────────── */
export const SeasonalTravel = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ── Heading ─────────────────────────────────────────────
            Watermark wraps ONLY the h2. Subtitle sits outside.
        ──────────────────────────────────────────────────────── */}
        <div className="text-center mb-10 md:mb-14">
          <div className="relative  px-4">
            <span className="
              absolute inset-x-0 top-1/2 -translate-y-1/2
             text-[38px] xs:text-[48px] sm:text-[56px] md:text-[64px]
              font-black tracking-[0.12em] md:tracking-[0.15em]
              select-none pointer-events-none
              text-blue-900/[0.1] uppercase whitespace-nowrap
            ">
              Seasonal
            </span>
            <h2 className="relative font-bold text-xl sm:text-2xl md:text-3xl text-slate-900 tracking-tight py-2">
              Travel For Best Seasons
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-500 font-medium italic mt-3">
            Experience the best travel Season
          </p>
        </div>

        {/* MOBILE layout — simple vertical stack */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={hasIntersected ? 'visible' : 'hidden'}
          className="flex flex-col gap-4 md:hidden"
        >
          {SEASONS.map((season, idx) => (
            <motion.div
              key={season.id}
              variants={fadeUp}
              className="relative w-full rounded-[1.25rem] overflow-hidden group"
              style={{ height: idx === 0 ? '260px' : '180px' }}
            >
              <img
                src={season.image}
                alt={season.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <div className="absolute top-4 right-4">
                <ArrowBtn to={`/destinations?season=${season.id}`} size="sm" />
              </div>
              <div className="absolute bottom-5 left-5">
                <h3 className="text-white font-black text-3xl tracking-tight drop-shadow-xl leading-none">
                  {season.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DESKTOP layout */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={hasIntersected ? 'visible' : 'hidden'}
          className="hidden md:flex flex-row gap-4"
          style={{ height: '580px' }}
        >
          {/* LEFT: Summer — full height */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-[1.5rem] overflow-hidden group flex-shrink-0"
            style={{ width: '44%', height: '580px' }}
          >
            <img src={SEASONS[0].image} alt={SEASONS[0].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            <div className="absolute top-5 right-5">
              <ArrowBtn to={`/destinations?season=${SEASONS[0].id}`} size="md" />
            </div>
            <div className="absolute bottom-10 left-8">
              <h3 className="text-white font-black text-6xl tracking-tight drop-shadow-2xl leading-none">
                {SEASONS[0].label}
              </h3>
            </div>
          </motion.div>

          {/* RIGHT column */}
          <div className="flex-1 flex flex-col gap-4" style={{ height: '580px' }}>
            {/* Autum — 340px */}
            <motion.div
              variants={fadeUp}
              className="relative w-full flex-shrink-0 rounded-[1.5rem] overflow-hidden group"
              style={{ height: '340px' }}
            >
              <img src={SEASONS[1].image} alt={SEASONS[1].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute top-5 right-5">
                <ArrowBtn to={`/destinations?season=${SEASONS[1].id}`} size="md" />
              </div>
              <div className="absolute bottom-7 left-7">
                <h3 className="text-white font-black text-5xl tracking-tight drop-shadow-2xl leading-none">
                  {SEASONS[1].label}
                </h3>
              </div>
            </motion.div>

            {/* Winter + Spring — 224px row */}
            <div className="flex gap-4 flex-shrink-0" style={{ height: '224px' }}>
              <motion.div variants={fadeUp} className="relative flex-1 rounded-[1.5rem] overflow-hidden group">
                <img src={SEASONS[2].image} alt={SEASONS[2].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                <div className="absolute top-4 right-4">
                  <ArrowBtn to={`/destinations?season=${SEASONS[2].id}`} size="sm" />
                </div>
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white font-black text-3xl tracking-tight drop-shadow-xl leading-none">
                    {SEASONS[2].label}
                  </h3>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative flex-1 rounded-[1.5rem] overflow-hidden group">
                <img src={SEASONS[3].image} alt={SEASONS[3].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                <div className="absolute top-4 right-4">
                  <ArrowBtn to={`/destinations?season=${SEASONS[3].id}`} size="sm" />
                </div>
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white font-black text-3xl tracking-tight drop-shadow-xl leading-none">
                    {SEASONS[3].label}
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}