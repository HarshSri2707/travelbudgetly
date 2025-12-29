// import { useEffect } from 'react'
// import { updateMetaTags } from '../../utils/seo'
// import { Image } from '../../components/ui/Image'

// export const AboutView = () => {
//   useEffect(() => {
//     updateMetaTags({
//       title: 'About Us - Making Travel Easy and Hassle-free',
//       description: 'Learn about TravelBudgetly - your trusted travel partner with deep local expertise, vetted partners, and transparent pricing.',
//       keywords: 'about travelbudgetly, travel company india, reliable travel partner',
//     })
//   }, [])

//   return (
//     <div className="min-h-screen pt-24 pb-12">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary-50 to-white py-16">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
//             Making Travel Easy and Hassle-free for All
//           </h1>
//           <p className="text-xl text-gray-700 leading-relaxed">
//             Welcome to <strong>TravelBudgetly.com</strong>. We are a team of passionate travel enthusiasts, explorers, and logistical experts dedicated to showcasing the unparalleled beauty of the world to all. We believe that travel shouldn't be a luxury reserved for a few, nor should it be a stressful planning ordeal.
//           </p>
//         </div>
//       </section>

//       {/* Why TravelBudgetly Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="font-display font-bold text-3xl text-gray-900 mb-8 text-center">
//             Why TravelBudgetly?
//           </h2>
          
//           <div className="bg-gray-50 rounded-2xl p-8 mb-8">
//             <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//               India is a land of immense diversity, and navigating it requires local expertise. We founded TravelBudgetly to solve a specific problem: the lack of transparent, reliable, and budget-conscious travel aggregation.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Deep Local Expertise */}
//             <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//               <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
//                 <span className="text-2xl">🗺️</span>
//               </div>
//               <h3 className="font-bold text-xl text-gray-900 mb-3">Deep Local Expertise</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 We don't just list destinations; we know them. Our team regularly visits every location to ensure our information on "How to Travel" and "Where to Stay" is current and factually accurate.
//               </p>
//             </div>

//             {/* Vetted Partners */}
//             <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//                 <span className="text-2xl">✓</span>
//               </div>
//               <h3 className="font-bold text-xl text-gray-900 mb-3">Vetted Partners</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 We understand that your safety and comfort depend on the people on the ground. We partner only with verified hotels and local transport providers who share our commitment to excellence.
//               </p>
//             </div>

//             {/* Comprehensive Coverage */}
//             <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//               <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
//                 <span className="text-2xl">🌏</span>
//               </div>
//               <h3 className="font-bold text-xl text-gray-900 mb-3">Comprehensive Coverage</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 From the most popular landmarks to the quietest offbeat corners of the North-East and the Islands, we cover the length and breadth of India.
//               </p>
//             </div>

//             {/* Transparent Pricing */}
//             <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                 <span className="text-2xl">💰</span>
//               </div>
//               <h3 className="font-bold text-xl text-gray-900 mb-3">Transparent Pricing</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 With TravelBudgetly, what you see is what you get. No hidden surcharges, no last-minute "convenience fees."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Image Gallery Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-4">
//             <div className="rounded-xl overflow-hidden shadow-lg h-64">
//               <Image
//                 src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
//                 alt="Team exploring destinations"
//               />
//             </div>
//             <div className="rounded-xl overflow-hidden shadow-lg h-64">
//               <Image
//                 src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80"
//                 alt="Beautiful travel destinations"
//               />
//             </div>
//             <div className="rounded-xl overflow-hidden shadow-lg h-64">
//               <Image
//                 src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80"
//                 alt="Happy travelers"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Peace of Mind Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
//             <h2 className="font-display font-bold text-3xl text-gray-900 mb-6 text-center">
//               Your Peace of Mind is Our Priority
//             </h2>
//             <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
//               <p>
//                 In an era of endless online options, the importance of a reliable travel partner cannot be overstated. A great holiday requires meticulous planning and a safety net when things don't go as expected.
//               </p>
//               <p>
//                 <strong>TravelBudgetly provides that safety net.</strong> By choosing us, you aren't just booking a ticket; you are gaining a travel companion committed to ensuring you enjoy the best of India, safely and affordably.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">500+</div>
//               <div className="text-gray-300">Destinations Covered</div>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">10K+</div>
//               <div className="text-gray-300">Happy Travelers</div>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">200+</div>
//               <div className="text-gray-300">Verified Partners</div>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">4.8★</div>
//               <div className="text-gray-300">Average Rating</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


// import { useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { updateMetaTags } from '../../utils/seo'
// import { Image } from '../../components/ui/Image'
// import { useReducedMotion } from '../../hooks/useReducedMotion'
// import { useCountUp } from '../../hooks/useCountUp'
// import { useScrollAnimation } from '../../hooks/useScrollAnimation'

// export const AboutView = () => {
//   const prefersReducedMotion = useReducedMotion()
//   const MotionDiv = prefersReducedMotion ? 'div' : motion.div

//   useEffect(() => {
//     updateMetaTags({
//       title: 'About Us - Making Travel Easy and Hassle-free',
//       description: 'Learn about TravelBudgetly - your trusted travel partner with deep local expertise, vetted partners, and transparent pricing.',
//       keywords: 'about travelbudgetly, travel company india, reliable travel partner',
//     })
//   }, [])

//   // Animated stats
//   const destinations = useCountUp(500, 2000, '+')
//   const travelers = useCountUp(10, 2000, 'K+')
//   const partners = useCountUp(200, 2000, '+')
//   const rating = useCountUp(4.8, 2000, '★')

//   const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
//   const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()
//   const { ref: peaceRef, isVisible: peaceVisible } = useScrollAnimation()

//   const heroVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
//     }
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40, scale: 0.95 },
//     visible: (index) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         delay: index * 0.15,
//         duration: 0.6,
//         ease: [0.4, 0, 0.2, 1]
//       }
//     })
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section with Background Image */}
//       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
//             alt="Travel Background"
//             eager
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
//         </div>

//         {/* Hero Content */}
//         <MotionDiv
//           variants={heroVariants}
//           initial="hidden"
//           animate="visible"
//           className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white"
//         >
//           <MotionDiv variants={itemVariants}>
//             <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
//               Making Travel Easy and
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
//                 Hassle-free for All
//               </span>
//             </h1>
//           </MotionDiv>
          
//           <MotionDiv variants={itemVariants}>
//             <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
//               Welcome to <strong>TravelBudgetly</strong>. We are a team of passionate travel enthusiasts, explorers, and logistical experts dedicated to showcasing the unparalleled beauty of the world.
//             </p>
//           </MotionDiv>
//         </MotionDiv>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1.5 h-2.5 bg-white rounded-full mt-2" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Why TravelBudgetly Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <MotionDiv
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="text-center mb-12"
//           >
//             <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
//               Why TravelBudgetly?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We founded TravelBudgetly to solve a specific problem: the lack of transparent, reliable, and budget-conscious travel aggregation.
//             </p>
//           </MotionDiv>

//           <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
//             {/* Deep Local Expertise */}
//             <MotionDiv
//               custom={0}
//               variants={cardVariants}
//               initial="hidden"
//               animate={cardsVisible ? "visible" : "hidden"}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-primary-100 transition-shadow duration-300"
//             >
//               <motion.div 
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//                 className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
//               >
//                 <span className="text-3xl">🗺️</span>
//               </motion.div>
//               <h3 className="font-bold text-2xl text-gray-900 mb-3">Deep Local Expertise</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 We don't just list destinations; we know them. Our team regularly visits every location to ensure our information is current and factually accurate.
//               </p>
//             </MotionDiv>

//             {/* Vetted Partners */}
//             <MotionDiv
//               custom={1}
//               variants={cardVariants}
//               initial="hidden"
//               animate={cardsVisible ? "visible" : "hidden"}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-green-100 transition-shadow duration-300"
//             >
//               <motion.div 
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//                 className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
//               >
//                 <span className="text-3xl">✓</span>
//               </motion.div>
//               <h3 className="font-bold text-2xl text-gray-900 mb-3">Vetted Partners</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 We understand that your safety and comfort depend on the people on the ground. We partner only with verified hotels and transport providers.
//               </p>
//             </MotionDiv>

//             {/* Comprehensive Coverage */}
//             <MotionDiv
//               custom={2}
//               variants={cardVariants}
//               initial="hidden"
//               animate={cardsVisible ? "visible" : "hidden"}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="bg-gradient-to-br from-white to-accent-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-accent-100 transition-shadow duration-300"
//             >
//               <motion.div 
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//                 className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
//               >
//                 <span className="text-3xl">🌏</span>
//               </motion.div>
//               <h3 className="font-bold text-2xl text-gray-900 mb-3">Comprehensive Coverage</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 From the most popular landmarks to the quietest offbeat corners, we cover the length and breadth of India.
//               </p>
//             </MotionDiv>

//             {/* Transparent Pricing */}
//             <MotionDiv
//               custom={3}
//               variants={cardVariants}
//               initial="hidden"
//               animate={cardsVisible ? "visible" : "hidden"}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-blue-100 transition-shadow duration-300"
//             >
//               <motion.div 
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//                 className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
//               >
//                 <span className="text-3xl">💰</span>
//               </motion.div>
//               <h3 className="font-bold text-2xl text-gray-900 mb-3">Transparent Pricing</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 With TravelBudgetly, what you see is what you get. No hidden surcharges, no last-minute "convenience fees."
//               </p>
//             </MotionDiv>
//           </div>
//         </div>
//       </section>

//       {/* Image Gallery Section */}
//       <section ref={imageRef} className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <MotionDiv
//             initial={{ opacity: 0, y: 30 }}
//             animate={imageVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7 }}
//             className="grid md:grid-cols-3 gap-6"
//           >
//             {[
//               { src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80', delay: 0 },
//               { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80', delay: 0.2 },
//               { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80', delay: 0.4 },
//             ].map((img, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={imageVisible ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: img.delay, duration: 0.7 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="rounded-2xl overflow-hidden shadow-xl h-72"
//               >
//                 <Image src={img.src} alt={`Gallery ${i + 1}`} className="w-full h-full" />
//               </motion.div>
//             ))}
//           </MotionDiv>
//         </div>
//       </section>

//       {/* Peace of Mind Section */}
//       <section ref={peaceRef} className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4">
//           <MotionDiv
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={peaceVisible ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.7 }}
//             className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-primary-100"
//           >
//             <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6 text-center">
//               Your Peace of Mind is Our Priority
//             </h2>
//             <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
//               <p>
//                 In an era of endless online options, the importance of a reliable travel partner cannot be overstated. A great holiday requires meticulous planning and a safety net when things don't go as expected.
//               </p>
//               <p className="font-semibold text-primary-600">
//                 TravelBudgetly provides that safety net.
//               </p>
//               <p>
//                 By choosing us, you aren't just booking a ticket; you are gaining a travel companion committed to ensuring you enjoy the best of India, safely and affordably.
//               </p>
//             </div>
//           </MotionDiv>
//         </div>
//       </section>

//       {/* Stats Section with Count-Up */}
//      <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
//   {/* Animated Background */}
//   <div className="absolute inset-0 opacity-10">
//     <div
//       className="absolute inset-0"
//       style={{
//         backgroundImage:
//           'radial-gradient(circle at 20% 50%, rgba(14,165,233,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(249,115,22,0.3) 0%, transparent 50%)',
//       }}
//     />
//   </div>

//   <div className="relative max-w-6xl mx-auto px-4">
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

//       {/* Destinations */}
//       <div ref={destinations.ref}>
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ type: 'spring', stiffness: 100 }}
//         >
//           <motion.div
//             className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
//             animate={{
//               textShadow: [
//                 '0 0 20px rgba(14,165,233,0.5)',
//                 '0 0 40px rgba(14,165,233,0.8)',
//                 '0 0 20px rgba(14,165,233,0.5)',
//               ],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             {destinations.count}
//           </motion.div>
//           <div className="text-gray-300 font-medium">
//             Destinations Covered
//           </div>
//         </motion.div>
//       </div>

//       {/* Travelers */}
//       <div ref={travelers.ref}>
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
//         >
//           <motion.div
//             className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
//             animate={{
//               textShadow: [
//                 '0 0 20px rgba(14,165,233,0.5)',
//                 '0 0 40px rgba(14,165,233,0.8)',
//                 '0 0 20px rgba(14,165,233,0.5)',
//               ],
//             }}
//             transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
//           >
//             {travelers.count}
//           </motion.div>
//           <div className="text-gray-300 font-medium">
//             Happy Travelers
//           </div>
//         </motion.div>
//       </div>

//       {/* Partners */}
//       <div ref={partners.ref}>
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
//         >
//           <motion.div
//             className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
//             animate={{
//               textShadow: [
//                 '0 0 20px rgba(14,165,233,0.5)',
//                 '0 0 40px rgba(14,165,233,0.8)',
//                 '0 0 20px rgba(14,165,233,0.5)',
//               ],
//             }}
//             transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
//           >
//             {partners.count}
//           </motion.div>
//           <div className="text-gray-300 font-medium">
//             Verified Partners
//           </div>
//         </motion.div>
//       </div>

//       {/* Rating */}
//       <div ref={rating.ref}>
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
//         >
//           <motion.div
//             className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
//             animate={{
//               textShadow: [
//                 '0 0 20px rgba(14,165,233,0.5)',
//                 '0 0 40px rgba(14,165,233,0.8)',
//                 '0 0 20px rgba(14,165,233,0.5)',
//               ],
//             }}
//             transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
//           >
//             {rating.count}
//           </motion.div>
//           <div className="text-gray-300 font-medium">
//             Average Rating
//           </div>
//         </motion.div>
//       </div>

//     </div>
//   </div>
// </section>

//     </div>
//   )
// }


import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { updateMetaTags } from '../../utils/seo'
import { Image } from '../../components/ui/Image'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useCountUp } from '../../hooks/useCountUp'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export const AboutView = () => {
  const prefersReducedMotion = useReducedMotion()
  const MotionDiv = prefersReducedMotion ? 'div' : motion.div

  useEffect(() => {
    updateMetaTags({
      title: 'About Us - Making Travel Easy and Hassle-free',
      description: 'Learn about TravelBudgetly - your trusted travel partner with deep local expertise, vetted partners, and transparent pricing.',
      keywords: 'about travelbudgetly, travel company india, reliable travel partner',
    })
  }, [])

  // ✅ Fixed CountUp Hook Usage (as per the corrected version)
  const destinations = useCountUp({ end: 500, suffix: '+' })
  const travelers = useCountUp({ end: 10, suffix: 'K+' })
  const partners = useCountUp({ end: 200, suffix: '+' })
  const rating = useCountUp({ end: 4.8, decimals: 1, suffix: '★' })

  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()
  const { ref: peaceRef, isVisible: peaceVisible } = useScrollAnimation()

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="Travel Background"
            eager
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <MotionDiv
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white"
        >
          <MotionDiv variants={itemVariants}>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Making Travel Easy and
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                Hassle-free for All
              </span>
            </h1>
          </MotionDiv>
          
          <MotionDiv variants={itemVariants}>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Welcome to <strong>TravelBudgetly</strong>. We are a team of passionate travel enthusiasts, explorers, and logistical experts dedicated to showcasing the unparalleled beauty of the world.
            </p>
          </MotionDiv>
        </MotionDiv>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-2.5 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Why TravelBudgetly Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Why TravelBudgetly?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We founded TravelBudgetly to solve a specific problem: the lack of transparent, reliable, and budget-conscious travel aggregation.
            </p>
          </MotionDiv>

          <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
            {/* Deep Local Expertise */}
            <MotionDiv
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate={cardsVisible ? "visible" : "hidden"}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-primary-100 transition-shadow duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <span className="text-3xl">🗺️</span>
              </motion.div>
              <h3 className="font-bold text-2xl text-gray-900 mb-3">Deep Local Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                We don't just list destinations; we know them. Our team regularly visits every location to ensure our information is current and factually accurate.
              </p>
            </MotionDiv>

            {/* Vetted Partners */}
            <MotionDiv
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={cardsVisible ? "visible" : "hidden"}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-green-100 transition-shadow duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <span className="text-3xl">✓</span>
              </motion.div>
              <h3 className="font-bold text-2xl text-gray-900 mb-3">Vetted Partners</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand that your safety and comfort depend on the people on the ground. We partner only with verified hotels and transport providers.
              </p>
            </MotionDiv>

            {/* Comprehensive Coverage */}
            <MotionDiv
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate={cardsVisible ? "visible" : "hidden"}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-white to-accent-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-accent-100 transition-shadow duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <span className="text-3xl">🌏</span>
              </motion.div>
              <h3 className="font-bold text-2xl text-gray-900 mb-3">Comprehensive Coverage</h3>
              <p className="text-gray-700 leading-relaxed">
                From the most popular landmarks to the quietest offbeat corners, we cover the length and breadth of India.
              </p>
            </MotionDiv>

            {/* Transparent Pricing */}
            <MotionDiv
              custom={3}
              variants={cardVariants}
              initial="hidden"
              animate={cardsVisible ? "visible" : "hidden"}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-blue-100 transition-shadow duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <span className="text-3xl">💰</span>
              </motion.div>
              <h3 className="font-bold text-2xl text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                With TravelBudgetly, what you see is what you get. No hidden surcharges, no last-minute "convenience fees."
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section ref={imageRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={imageVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80', delay: 0 },
              { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80', delay: 0.2 },
              { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80', delay: 0.4 },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={imageVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: img.delay, duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-xl h-72"
              >
                <Image src={img.src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section ref={peaceRef} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={peaceVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-primary-100"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6 text-center">
              Your Peace of Mind is Our Priority
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                In an era of endless online options, the importance of a reliable travel partner cannot be overstated. A great holiday requires meticulous planning and a safety net when things don't go as expected.
              </p>
              <p className="font-semibold text-primary-600">
                TravelBudgetly provides that safety net.
              </p>
              <p>
                By choosing us, you aren't just booking a ticket; you are gaining a travel companion committed to ensuring you enjoy the best of India, safely and affordably.
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Stats Section with Fixed Count-Up */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(14,165,233,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(249,115,22,0.3) 0%, transparent 50%)',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Destinations */}
            <div ref={destinations.ref}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(14,165,233,0.5)',
                      '0 0 40px rgba(14,165,233,0.8)',
                      '0 0 20px rgba(14,165,233,0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {destinations.value}{destinations.suffix}
                </motion.div>
                <div className="text-gray-300 font-medium">
                  Destinations Covered
                </div>
              </motion.div>
            </div>

            {/* Travelers */}
            <div ref={travelers.ref}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(14,165,233,0.5)',
                      '0 0 40px rgba(14,165,233,0.8)',
                      '0 0 20px rgba(14,165,233,0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                >
                  {travelers.value}{travelers.suffix}
                </motion.div>
                <div className="text-gray-300 font-medium">
                  Happy Travelers
                </div>
              </motion.div>
            </div>

            {/* Partners */}
            <div ref={partners.ref}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(14,165,233,0.5)',
                      '0 0 40px rgba(14,165,233,0.8)',
                      '0 0 20px rgba(14,165,233,0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                >
                  {partners.value}{partners.suffix}
                </motion.div>
                <div className="text-gray-300 font-medium">
                  Verified Partners
                </div>
              </motion.div>
            </div>

            {/* Rating */}
            <div ref={rating.ref}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(14,165,233,0.5)',
                      '0 0 40px rgba(14,165,233,0.8)',
                      '0 0 20px rgba(14,165,233,0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  {rating.value}{rating.suffix}
                </motion.div>
                <div className="text-gray-300 font-medium">
                  Average Rating
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}