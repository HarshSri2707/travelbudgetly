// import { motion } from 'framer-motion'
// import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

// export const TrustBadges = () => {
//   const { ref, isVisible } = useScrollAnimation()
  
//   const badges = [
//     { icon: '🏆', label: 'Award Winning Service', desc: '2024 Excellence Award' },
//     { icon: '✓', label: 'Certified Accommodations', desc: 'Best in Class Partners' },
//     { icon: '🌟', label: '10,000+ Reviews', desc: '4.8/5 Rating' },
//     { icon: '🔒', label: 'Secure Booking', desc: '100% Safe & Encrypted' },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.4, 0, 0.2, 1]
//       }
//     }
//   }

//   return (
//     <section ref={ref} className="py-16 bg-white border-y border-gray-100">
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         animate={isVisible ? "visible" : "hidden"}
//         className="max-w-7xl mx-auto px-4"
//       >
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {badges.map((badge, i) => (
//             <motion.div key={i} variants={itemVariants} className="text-center group">
//               <motion.div 
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 className="text-5xl mb-3"
//               >
//                 {badge.icon}
//               </motion.div>
//               <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
//                 {badge.label}
//               </h4>
//               <p className="text-xs text-gray-500">{badge.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }


// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'

// const fadeUp = {
//   hidden:  { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
// }
// const stagger = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.13 } },
// }

// const FIELDS = [
//   { label: 'Destination',     name: 'destination', placeholder: 'Enter Destination' },
//   { label: 'Travel Style',    name: 'style',       placeholder: 'Adventure, Relax' },
//   { label: 'Travel Duration', name: 'duration',    placeholder: '3–5 days' },
//   { label: 'Season',          name: 'season',      placeholder: 'Summer, winter, spring' },
//   { label: 'Budget',          name: 'budget',      placeholder: 'Enter Budget' },
// ]

// export const PlanTrip = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
//   const [form, setForm] = useState({ destination: '', style: '', duration: '', season: '', budget: '' })

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

//   return (
//     <section ref={ref} className="py-20 bg-blue-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">

//         <h2 className="text-center font-display font-bold text-2xl md:text-3xl text-gray-900 mb-10">
//           Plan your Trip With US
//         </h2>

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           animate={hasIntersected ? 'visible' : 'hidden'}
//           className="grid md:grid-cols-2 gap-8 items-center"
//         >
//           {/* airplane image */}
//           <motion.div
//             variants={fadeUp}
//             className="rounded-2xl overflow-hidden h-80 md:h-[460px] shadow-lg"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80"
//               alt="airplane window"
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />
//           </motion.div>

//           {/* form card */}
//           <motion.div
//             variants={fadeUp}
//             className="bg-white rounded-2xl shadow-md p-8 space-y-5"
//           >
//             {FIELDS.map((field) => (
//               <div key={field.name}>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1.5">
//                   {field.label}
//                 </label>
//                 <input
//                   type="text"
//                   name={field.name}
//                   value={form[field.name]}
//                   onChange={handleChange}
//                   placeholder={field.placeholder}
//                   className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:bg-white transition-colors duration-200"
//                 />
//               </div>
//             ))}

//             <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-full transition-colors duration-200 mt-2">
//               Find My Perfect Trip
//             </button>
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   )
// }


import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const FIELDS = [
  { label: 'Destination',     name: 'destination', placeholder: 'Enter Destination' },
  { label: 'Travel Style',    name: 'style',       placeholder: 'Adventure, Relax' },
  { label: 'Travel Duration', name: 'duration',    placeholder: '3–5 days' },
  { label: 'Season',          name: 'season',      placeholder: 'Summer, winter, spring' },
  { label: 'Budget',          name: 'budget',      placeholder: 'Enter Budget' },
]

export const PlanTrip = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.1 })
  const [form, setForm] = useState({ destination: '', style: '', duration: '', season: '', budget: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  return (
    <section ref={ref} className="py-24 bg-blue-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading with better spacing */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Plan your Trip With US
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={hasIntersected ? 'visible' : 'hidden'}
          /* items-stretch ensures both columns have equal height */
          /* md:grid-cols-[0.8fr_1.2fr] makes the image side slightly narrower than form */
          className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 items-stretch"
        >
          {/* Airplane Image - Height matches Form automatically */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[350px] md:min-h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
              alt="airplane window"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Soft overlay for premium look */}
            <div className="absolute inset-0 bg-blue-900/10" />
          </motion.div>

          {/* Form Card */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 space-y-6 border border-white"
          >
            <div className="grid grid-cols-1 gap-5">
              {FIELDS.map((field) => (
                <div key={field.name}>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2 ml-1">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500/30 focus:bg-white focus:shadow-inner transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-5 rounded-2xl transition-all duration-300 mt-4 shadow-lg shadow-blue-200 text-sm uppercase tracking-wider">
              Find My Perfect Trip
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}