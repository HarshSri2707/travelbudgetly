// import { useIntersection } from '../../../hooks/useIntersection'
// import { motion } from 'framer-motion'

// export const WhyChooseUs = () => {
//   const { ref, hasIntersected } = useIntersection()

//   return (
//     <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
//             Why Choosing the Right Travel Partner Matters
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Choosing a holiday destination is only half the battle; choosing the right travel partner is what defines your experience.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
//             <h3 className="font-bold text-xl text-red-900 mb-3">❌ Wrong Choice Leads To:</h3>
//             <ul className="space-y-2 text-red-800">
//               <li>• Hidden costs and surprise fees</li>
//               <li>• Poor accommodation quality</li>
//               <li>• Logistical nightmares</li>
//               <li>• Safety concerns</li>
//             </ul>
//           </div>

//           <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
//             <h3 className="font-bold text-xl text-green-900 mb-3">✓ TravelBudgetly Ensures:</h3>
//             <ul className="space-y-2 text-green-800">
//               <li>• 100% Transparent pricing</li>
//               <li>• Verified, quality accommodations</li>
//               <li>• Smooth, hassle-free logistics</li>
//               <li>• Your safety as top priority</li>
//             </ul>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-lg p-8">
//           <p className="text-lg text-gray-700 leading-relaxed mb-4">
//             At TravelBudgetly, we understand that a holiday is an investment of your time and emotions. We act as your boots on the ground, ensuring every itinerary is vetted for safety, comfort, and authenticity.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Whether you are seeking a popular tourist circuit or a quiet offbeat escape, we bridge the gap between "just a trip" and a "lifetime memory."
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'

export const WhyChooseUs = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.2 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={hasIntersected ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Why Choosing the Right Travel Partner Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choosing a holiday destination is only half the battle; choosing the
            right travel partner defines your entire experience.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-xl text-red-900 mb-3">
              ❌ Wrong Choice Leads To:
            </h3>
            <ul className="space-y-2 text-red-800">
              <li>• Hidden costs and surprise fees</li>
              <li>• Poor accommodation quality</li>
              <li>• Logistical nightmares</li>
              <li>• Safety concerns</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-xl text-green-900 mb-3">
              ✓ TravelBudgetly Ensures:
            </h3>
            <ul className="space-y-2 text-green-800">
              <li>• 100% Transparent pricing</li>
              <li>• Verified, quality accommodations</li>
              <li>• Smooth, hassle-free logistics</li>
              <li>• Your safety as top priority</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          variants={scaleFade}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At TravelBudgetly, we understand that a holiday is an investment of
            your time, money, and emotions. We act as your boots on the ground,
            ensuring every itinerary is vetted for safety, comfort, and
            authenticity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Whether you seek a popular tourist circuit or a quiet offbeat escape,
            we bridge the gap between “just a trip” and a
            <span className="text-primary-600 font-semibold">
              {' '}lifetime memory
            </span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
