



// // import { motion } from 'framer-motion'
// // import { useIntersection } from '../../../hooks/useIntersection'
// // import { TRUST_FEATURES } from '../../../data/home.data'

// // const fadeUp = {
// //   hidden:  { opacity: 0, y: 24 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
// // }
// // const stagger = {
// //   hidden:  {},
// //   visible: { transition: { staggerChildren: 0.1 } },
// // }

// // /*
// //   Each side card (text or image) = h-36 (144px)
// //   Gap between cards               = gap-4 (16px)
// //   3 cards + 2 gaps                = 3×144 + 2×16 = 464px

// //   Center image height             = 464px  (matches exactly)
// //   No flex-1, no min-h — all fixed so nothing cuts or stretches.
// // */
// // const CARD_H   = 'h-36'        // 144px  — every side card
// // const TOTAL_H  = 'h-[464px]'   // 464px  — center image

// // const FeatureCard = ({ feature }) => (
// //   <div className={`${CARD_H} w-full bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-center shrink-0`}>
// //     <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-sm mb-2 shrink-0">
// //       {feature.icon}
// //     </div>
// //     <h4 className="font-bold text-gray-900 text-sm mb-1 leading-snug">
// //       {feature.title}
// //     </h4>
// //     <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
// //       {feature.desc}
// //     </p>
// //   </div>
// // )

// // const ImageCard = ({ src, alt }) => (
// //   <div className={`${CARD_H} w-full rounded-2xl overflow-hidden shrink-0`}>
// //     <img
// //       src={src}
// //       alt={alt}
// //       loading="lazy"
// //       className="w-full h-full object-cover"
// //     />
// //   </div>
// // )

// // export const WhyChooseUs = () => {
// //   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

// //   return (
// //     <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
// //       <div className="max-w-6xl mx-auto px-4">

// //         {/* heading */}
// //         <div className="relative text-center mb-10">
// //           <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[34px] md:text-[80px] font-black tracking-widest select-none pointer-events-none text-gray-900/[0.10] whitespace-nowrap">
// //             WHY CHOOSE US
// //           </span>
// //           <h2 className="relative font-display font-bold text-2xl md:text-3xl text-gray-900">
// //             Trusted Travel With Us
// //           </h2>
// //         </div>

// //         {/* bento grid */}
// //         <motion.div
// //           variants={stagger}
// //           initial="hidden"
// //           animate={hasIntersected ? 'visible' : 'hidden'}
// //           className="flex flex-col md:flex-row gap-4 items-start"
// //         >

// //           {/* ── LEFT col ── */}
// //           <motion.div
// //             variants={fadeUp}
// //             className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4"
// //           >
// //             <FeatureCard feature={TRUST_FEATURES[0]} />
// //             <FeatureCard feature={TRUST_FEATURES[1]} />
// //             <ImageCard
// //               src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80"
// //               alt="travel planning"
// //             />
// //           </motion.div>

// //           {/* ── CENTER col — exact same total height ── */}
// //           <motion.div
// //             variants={fadeUp}
// //             className={`w-full md:w-[calc((100%-2*1rem)/3)] ${TOTAL_H} rounded-2xl overflow-hidden shrink-0`}
// //           >
// //             <img
// //               src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&q=80"
// //               alt="adventure bridge"
// //               loading="lazy"
// //               className="w-full h-full object-cover"
// //             />
// //           </motion.div>

// //           {/* ── RIGHT col ── */}
// //           <motion.div
// //             variants={fadeUp}
// //             className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4"
// //           >
// //             <ImageCard
// //               src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80"
// //               alt="hassle free booking"
// //             />
// //             <FeatureCard feature={TRUST_FEATURES[2]} />
// //             <FeatureCard feature={TRUST_FEATURES[3]} />
// //           </motion.div>

// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }



// // import { motion } from 'framer-motion'
// // import { useIntersection } from '../../../hooks/useIntersection'
// // import { TRUST_FEATURES } from '../../../data/home.data'

// // const fadeUp = {
// //   hidden:  { opacity: 0, y: 24 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
// // }
// // const stagger = {
// //   hidden:  {},
// //   visible: { transition: { staggerChildren: 0.1 } },
// // }

// // const CARD_H  = 'h-36'
// // const TOTAL_H = 'h-[464px]'

// // const FeatureCard = ({ feature }) => (
// //   <div className={`${CARD_H} w-full bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-center shrink-0`}>
// //     <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-sm mb-2 shrink-0">
// //       {feature.icon}
// //     </div>
// //     <h4 className="font-bold text-gray-900 text-sm mb-1 leading-snug">
// //       {feature.title}
// //     </h4>
// //     <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
// //       {feature.desc}
// //     </p>
// //   </div>
// // )

// // const ImageCard = ({ src, alt }) => (
// //   <div className={`${CARD_H} w-full rounded-2xl overflow-hidden shrink-0`}>
// //     <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
// //   </div>
// // )

// // export const WhyChooseUs = () => {
// //   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

// //   return (
// //     <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
// //       <div className="max-w-6xl mx-auto px-4">

// //         {/* ── Heading ─────────────────────────────────────────────
// //             Watermark wraps ONLY the h2. No subtitle in this section.
// //         ──────────────────────────────────────────────────────── */}
// //         <div className="text-center mb-10">
// //           <div className="relative  px-6">
// //             <span className="
// //               absolute inset-x-0 top-1/2 -translate-y-1/2
// //               text-[32px]  md:text-[64px]
// //               font-black tracking-widest
// //               select-none pointer-events-none
// //               text-blue-900/[0.1] whitespace-nowrap
// //             ">
// //               WHY CHOOSE US
// //             </span>
// //             <h2 className="relative font-bold text-2xl md:text-3xl text-gray-900 py-2">
// //               Trusted Travel With Us
// //             </h2>
// //           </div>
// //         </div>

// //         {/* ── Bento grid ──────────────────────────────────────────── */}
// //         <motion.div
// //           variants={stagger}
// //           initial="hidden"
// //           animate={hasIntersected ? 'visible' : 'hidden'}
// //           className="flex flex-col md:flex-row gap-4 items-start"
// //         >
// //           {/* LEFT col */}
// //           <motion.div
// //             variants={fadeUp}
// //             className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4"
// //           >
// //             <FeatureCard feature={TRUST_FEATURES[0]} />
// //             <FeatureCard feature={TRUST_FEATURES[1]} />
// //             <ImageCard
// //               src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80"
// //               alt="travel planning"
// //             />
// //           </motion.div>

// //           {/* CENTER col */}
// //           <motion.div
// //             variants={fadeUp}
// //             className={`w-full md:w-[calc((100%-2*1rem)/3)] ${TOTAL_H} rounded-2xl overflow-hidden shrink-0`}
// //           >
// //             <img
// //               src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&q=80"
// //               alt="adventure bridge"
// //               loading="lazy"
// //               className="w-full h-full object-cover"
// //             />
// //           </motion.div>

// //           {/* RIGHT col */}
// //           <motion.div
// //             variants={fadeUp}
// //             className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4"
// //           >
// //             <ImageCard
// //               src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80"
// //               alt="hassle free booking"
// //             />
// //             <FeatureCard feature={TRUST_FEATURES[2]} />
// //             <FeatureCard feature={TRUST_FEATURES[3]} />
// //           </motion.div>
// //         </motion.div>

// //       </div>
// //     </section>
// //   )
// // }


// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'
// import { TRUST_FEATURES } from '../../../data/home.data'

// /* ── Refined Animations (Same design, better feel) ─────────── */
// const containerStagger = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15, // Cards ek-ek karke aayenge
//     },
//   },
// }

// const eliteFadeUp = {
//   hidden: { opacity: 0, y: 30, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     scale: 1,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
//   },
// }

// const CARD_H  = 'h-36'
// const TOTAL_H = 'h-[464px]'

// /* ── Sub-components (Design kept exactly same) ─────────────── */
// const FeatureCard = ({ feature }) => (
//   <motion.div 
//     variants={eliteFadeUp}
//     whileHover={{ y: -5 }} // Subtle float on hover
//     className={`${CARD_H} w-full bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center shrink-0`}
//   >
//     <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-sm mb-2 shrink-0">
//       {feature.icon}
//     </div>
//     <h4 className="font-bold text-gray-900 text-sm mb-1 leading-snug">
//       {feature.title}
//     </h4>
//     <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
//       {feature.desc}
//     </p>
//   </motion.div>
// )

// const ImageCard = ({ src, alt }) => (
//   <motion.div 
//     variants={eliteFadeUp}
//     className={`${CARD_H} w-full rounded-2xl overflow-hidden shrink-0 shadow-sm`}
//   >
//     <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
//   </motion.div>
// )

// export const WhyChooseUs = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

//   return (
//     <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* ── Heading (Design untouched) ────────────────────────── */}
//         <div className="text-center mb-10">
//           <div className="relative px-6">
//             <span className="
//               absolute inset-x-0 top-1/2 -translate-y-1/2
//               text-[32px] md:text-[64px]
//               font-black tracking-widest
//               select-none pointer-events-none
//               text-blue-900/[0.1] whitespace-nowrap
//             ">
//               WHY CHOOSE US
//             </span>
//             <h2 className="relative font-bold text-2xl md:text-3xl text-gray-900 py-2">
//               Trusted Travel With Us
//             </h2>
//           </div>
//         </div>

//         {/* ── Bento grid (Staggered Animation) ──────────────────── */}
//         <motion.div
//           variants={containerStagger}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="flex flex-col md:flex-row gap-4 items-start"
//         >
//           {/* LEFT col */}
//           <div className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4">
//             <FeatureCard feature={TRUST_FEATURES[0]} />
//             <FeatureCard feature={TRUST_FEATURES[1]} />
//             <ImageCard
//               src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80"
//               alt="travel planning"
//             />
//           </div>

//           {/* CENTER col */}
//           <motion.div
//             variants={eliteFadeUp}
//             className={`w-full md:w-[calc((100%-2*1rem)/3)] ${TOTAL_H} rounded-2xl overflow-hidden shrink-0 shadow-sm border-2 border-white`}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&q=80"
//               alt="adventure bridge"
//               loading="lazy"
//               className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
//             />
//           </motion.div>

//           {/* RIGHT col */}
//           <div className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4">
//             <ImageCard
//               src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80"
//               alt="hassle free booking"
//             />
//             <FeatureCard feature={TRUST_FEATURES[2]} />
//             <FeatureCard feature={TRUST_FEATURES[3]} />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'
import { TRUST_FEATURES } from '../../../data/home.data'

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const eliteFadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const CARD_H  = 'h-48'         // was h-36 → increased to h-48
const TOTAL_H = 'h-[608px]'   // was h-[464px] → increased proportionally (3 × h-48 + 2 × gap-4)

const FeatureCard = ({ feature }) => (
  <motion.div
    variants={eliteFadeUp}
    whileHover={{ y: -5 }}
    className={`${CARD_H} w-full bg-white rounded-2xl px-5 py-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center shrink-0`}
  >
    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-base mb-3 shrink-0">
      {feature.icon}
    </div>
    <h4 className="font-bold text-[16px] text-gray-900 text-sm mb-1.5 leading-snug">
      {feature.title}
    </h4>
    <p className="text-sm text-[#2d2d2d] leading-relaxed line-clamp-4">
      {feature.desc}
    </p>
  </motion.div>
)

const ImageCard = ({ src, alt }) => (
  <motion.div
    variants={eliteFadeUp}
    className={`${CARD_H} w-full rounded-2xl overflow-hidden shrink-0 shadow-sm`}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
    />
  </motion.div>
)

export const WhyChooseUs = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-10">
          <div className="relative px-6">
            <span className="
              absolute inset-x-0 top-1/2 -translate-y-1/2
              text-[32px] md:text-[64px]
              font-black tracking-widest
              select-none pointer-events-none
              text-blue-900/[0.1] whitespace-nowrap
            ">
              WHY CHOOSE US
            </span>
            <h2 className="relative font-bold text-2xl md:text-3xl text-gray-900 py-2">
              Trusted Travel With Us
            </h2>
          </div>
        </div>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate={hasIntersected ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row gap-4 items-start"
        >
          {/* LEFT col */}
          <div className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4">
            <FeatureCard feature={TRUST_FEATURES[0]} />
            <FeatureCard feature={TRUST_FEATURES[1]} />
            <ImageCard
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80"
              alt="travel planning"
            />
          </div>

          {/* CENTER col */}
          <motion.div
            variants={eliteFadeUp}
            className={`w-full md:w-[calc((100%-2*1rem)/3)] ${TOTAL_H} rounded-2xl overflow-hidden shrink-0 shadow-sm border-2 border-white`}
          >
            <img
              src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&q=80"
              alt="adventure bridge"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>

          {/* RIGHT col */}
          <div className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4">
            <ImageCard
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80"
              alt="hassle free booking"
            />
            <FeatureCard feature={TRUST_FEATURES[2]} />
            <FeatureCard feature={TRUST_FEATURES[3]} />
          </div>
        </motion.div>

      </div>
    </section>
  )
}