// import { Link } from 'react-router-dom'
// import { Button } from '../../../components/ui/Button'

// export const ExploreByInterest = () => {
//   const interests = [
//     {
//       title: 'The Classics',
//       description: 'Explore the Golden Triangle, Goa\'s beaches, and Rajasthan\'s forts.',
//       image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600',
//       link: '/destinations?category=classics',
//     },
//     {
//       title: 'The Hidden Gems',
//       description: 'Trek through the valleys of Ziro or witness the starlit skies of Hanle.',
//       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
//       link: '/offbeat-travel',
//     },
//     {
//       title: 'Spirituality & Wellness',
//       description: 'Find peace in Rishikesh or the ancient temples of Madurai.',
//       image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600',
//       link: '/destinations?category=spiritual',
//     },
//   ]

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
//             Explore India by Interest
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-8">
//           {interests.map((interest, i) => (
//             <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <div className="aspect-[4/3] overflow-hidden">
//                 <img
//                   src={interest.image}
//                   alt={interest.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <h3 className="font-bold text-2xl mb-2">{interest.title}</h3>
//                 <p className="text-sm mb-4 text-gray-200">{interest.description}</p>
//                 <Link to={interest.link}>
//                   <Button variant="secondary" size="sm">Explore →</Button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Link to="/packages">
//             <Button variant="primary" size="lg">Find Your Perfect Package</Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }


// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'
// import { SEASONS } from '../../../data/home.data'

// const fadeUp = {
//   hidden:  { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
// }
// const stagger = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.12 } },
// }

// export const SeasonalTravel = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

//   return (
//     <section ref={ref} className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* heading */}
//         <div className="relative text-center mb-12">
//           <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[56px] md:text-[84px] font-black tracking-widest select-none pointer-events-none text-gray-900/[0.04]">
//             SEASONAL
//           </span>
//           <h2 className="relative font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
//             Travel For Best Seasons
//           </h2>
//           <p className="relative text-base text-gray-500">
//             Experience the best travel Season
//           </p>
//         </div>

//         {/*
//           Grid layout:
//           - Summer spans 2 rows on the left (big tall card)
//           - Autumn, Winter, Spring stack on the right
//         */}
//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="grid grid-cols-2 grid-rows-2 gap-4"
//           style={{ gridTemplateRows: '1fr 1fr' }}
//         >
//           {/* Summer — row-span-2 */}
//           <motion.div
//             variants={fadeUp}
//             className="row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer min-h-[340px]"
//           >
//             <img
//               src={SEASONS[0].image}
//               alt="Summer"
//               loading="lazy"
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//             <Link
//               to="/destinations?season=summer"
//               className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shadow-lg"
//             >
//               →
//             </Link>
//             <span className="absolute bottom-6 left-6 text-white font-bold text-2xl drop-shadow-md">
//               {SEASONS[0].label}
//             </span>
//           </motion.div>

//           {/* Autumn, Winter, Spring */}
//           {SEASONS.slice(1).map((s) => (
//             <motion.div
//               key={s.id}
//               variants={fadeUp}
//               className="relative rounded-2xl overflow-hidden group cursor-pointer"
//             >
//               <img
//                 src={s.image}
//                 alt={s.label}
//                 loading="lazy"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
//               <Link
//                 to={`/destinations?season=${s.id}`}
//                 className="absolute top-3 right-3 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shadow"
//               >
//                 →
//               </Link>
//               <span className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
//                 {s.label}
//               </span>
//             </motion.div>
//           ))}
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
    <section ref={ref} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ── Header ──────────────────────────────────────────────
            Fix: background watermark text clipped on mobile.
            Use overflow-hidden on wrapper, scale text smaller on mobile
        ────────────────────────────────────────────────────────── */}
        <div className="relative text-center mb-10 md:mb-14 overflow-hidden">
          {/* watermark — smaller on mobile so it never overflows */}
          <span className="
            absolute inset-x-0 top-1/2 -translate-y-1/2
            text-[48px] sm:text-[72px] md:text-[110px]
            font-black tracking-[0.12em] md:tracking-[0.15em]
            select-none pointer-events-none
            text-blue-600/[0.04] uppercase whitespace-nowrap
          ">
            Seasonal
          </span>
          <h2 className="relative font-bold text-xl sm:text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
            Travel For Best Seasons
          </h2>
          <p className="relative text-sm md:text-base text-slate-500 font-medium italic">
            Experience the best travel Season
          </p>
        </div>

        {/* ── Layout ──────────────────────────────────────────────
            Mobile:  all 4 cards stacked vertically
            Desktop: Summer left full-height | Autum+[Winter|Spring] right
        ────────────────────────────────────────────────────────── */}

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

        {/* DESKTOP layout — exact image proportions */}
        {/*
          ┌──────────────┬──────────────────────────┐
          │              │         Autum  (340px)   │
          │    Summer    ├─────────────┬────────────┤
          │   (580px)    │   Winter    │   Spring   │  (224px)
          └──────────────┴─────────────┴────────────┘
        */}
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
            <img
              src={SEASONS[0].image}
              alt={SEASONS[0].label}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
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
              <img
                src={SEASONS[1].image}
                alt={SEASONS[1].label}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
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

              {/* Winter */}
              <motion.div
                variants={fadeUp}
                className="relative flex-1 rounded-[1.5rem] overflow-hidden group"
              >
                <img
                  src={SEASONS[2].image}
                  alt={SEASONS[2].label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
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

              {/* Spring */}
              <motion.div
                variants={fadeUp}
                className="relative flex-1 rounded-[1.5rem] overflow-hidden group"
              >
                <img
                  src={SEASONS[3].image}
                  alt={SEASONS[3].label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
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