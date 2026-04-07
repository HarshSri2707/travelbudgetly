


// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'

// export const WhyChooseUs = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.2 })

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   }

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
//     },
//   }

//   const scaleFade = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
//     },
//   }

//   return (
//     <section
//       ref={ref}
//       className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
//     >
//       <motion.div
//         className="max-w-7xl mx-auto px-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate={hasIntersected ? 'visible' : 'hidden'}
//       >
//         {/* Header */}
//         <motion.div
//           variants={fadeUp}
//           className="text-center mb-12"
//         >
//           <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
//             Why Choosing the Right Travel Partner Matters?
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Choosing a holiday destination is only half the battle; choosing the
//             right travel partner defines your entire experience.
//           </p>
//         </motion.div>

//         {/* Comparison Cards */}
//         <motion.div
//           variants={containerVariants}
//           className="grid md:grid-cols-2 gap-8 mb-12"
//         >
//           <motion.div
//             variants={fadeUp}
//             whileHover={{ y: -6 }}
//             className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
//           >
//             <h3 className="font-bold text-xl text-red-900 mb-3">
//               ❌ Wrong Choice Leads To:
//             </h3>
//             <ul className="space-y-2 text-red-800">
//               <li>• Hidden costs and surprise fees</li>
//               <li>• Poor accommodation quality</li>
//               <li>• Logistical nightmares</li>
//               <li>• Safety concerns</li>
//             </ul>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             whileHover={{ y: -6 }}
//             className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
//           >
//             <h3 className="font-bold text-xl text-green-900 mb-3">
//               ✓ TravelBudgetly Ensures:
//             </h3>
//             <ul className="space-y-2 text-green-800">
//               <li>• 100% Transparent pricing</li>
//               <li>• Verified, quality accommodations</li>
//               <li>• Smooth, hassle-free logistics</li>
//               <li>• Your safety is our top priority</li>
//             </ul>
//           </motion.div>
//         </motion.div>

//         {/* Trust Statement */}
//         <motion.div
//           variants={scaleFade}
//           className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto"
//         >
//           <p className="text-lg text-gray-700 leading-relaxed mb-4">
//             At TravelBudgetly, we understand that a holiday is an investment of
//             your time, money, and emotions. We act as your boots on the ground,
//             ensuring every itinerary is vetted for safety, comfort, and
//             authenticity.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed font-medium">
//             Whether you seek a popular tourist circuit or a quiet offbeat escape,
//             we bridge the gap between “just a trip” and a
//             <span className="text-primary-600 font-semibold">
//               {' '}lifetime memory
//             </span>.
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }



import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'
import { TRUST_FEATURES } from '../../../data/home.data'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/*
  Each side card (text or image) = h-36 (144px)
  Gap between cards               = gap-4 (16px)
  3 cards + 2 gaps                = 3×144 + 2×16 = 464px

  Center image height             = 464px  (matches exactly)
  No flex-1, no min-h — all fixed so nothing cuts or stretches.
*/
const CARD_H   = 'h-36'        // 144px  — every side card
const TOTAL_H  = 'h-[464px]'   // 464px  — center image

const FeatureCard = ({ feature }) => (
  <div className={`${CARD_H} w-full bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-center shrink-0`}>
    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-sm mb-2 shrink-0">
      {feature.icon}
    </div>
    <h4 className="font-bold text-gray-900 text-sm mb-1 leading-snug">
      {feature.title}
    </h4>
    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
      {feature.desc}
    </p>
  </div>
)

const ImageCard = ({ src, alt }) => (
  <div className={`${CARD_H} w-full rounded-2xl overflow-hidden shrink-0`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover"
    />
  </div>
)

export const WhyChooseUs = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* heading */}
        <div className="relative text-center mb-10">
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[52px] md:text-[80px] font-black tracking-widest select-none pointer-events-none text-gray-900/[0.05] whitespace-nowrap">
            WHY CHOOSE US
          </span>
          <h2 className="relative font-display font-bold text-2xl md:text-3xl text-gray-900">
            Trusted Travel With Us
          </h2>
        </div>

        {/* bento grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={hasIntersected ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row gap-4 items-start"
        >

          {/* ── LEFT col ── */}
          <motion.div
            variants={fadeUp}
            className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4"
          >
            <FeatureCard feature={TRUST_FEATURES[0]} />
            <FeatureCard feature={TRUST_FEATURES[1]} />
            <ImageCard
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80"
              alt="travel planning"
            />
          </motion.div>

          {/* ── CENTER col — exact same total height ── */}
          <motion.div
            variants={fadeUp}
            className={`w-full md:w-[calc((100%-2*1rem)/3)] ${TOTAL_H} rounded-2xl overflow-hidden shrink-0`}
          >
            <img
              src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&q=80"
              alt="adventure bridge"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ── RIGHT col ── */}
          <motion.div
            variants={fadeUp}
            className="w-full md:w-[calc((100%-2*1rem)/3)] flex flex-col gap-4"
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80"
              alt="hassle free booking"
            />
            <FeatureCard feature={TRUST_FEATURES[2]} />
            <FeatureCard feature={TRUST_FEATURES[3]} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}