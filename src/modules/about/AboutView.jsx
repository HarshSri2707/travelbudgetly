


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

//   // ✅ Fixed CountUp Hook Usage (as per the corrected version)
//   const destinations = useCountUp({ end: 500, suffix: '+' })
//   const travelers = useCountUp({ end: 10, suffix: 'K+' })
//   const partners = useCountUp({ end: 200, suffix: '+' })
//   const rating = useCountUp({ end: 4.8, decimals: 1, suffix: '★' })

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
//                 <Image src={img.src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
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
             
//               <p>
//                 By choosing us, you aren't just booking a ticket; you are gaining a travel companion committed to ensuring you enjoy the best of India, safely and affordably.
//               </p>
//             </div>
//           </MotionDiv>
//         </div>
//       </section>

//       {/* Stats Section with Fixed Count-Up */}
//       <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 opacity-10">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 'radial-gradient(circle at 20% 50%, rgba(14,165,233,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(249,115,22,0.3) 0%, transparent 50%)',
//             }}
//           />
//         </div>

//         <div className="relative max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {/* Destinations */}
//             <div ref={destinations.ref}>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ type: 'spring', stiffness: 100 }}
//               >
//                 <motion.div
//                   className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
//                   animate={{
//                     textShadow: [
//                       '0 0 20px rgba(14,165,233,0.5)',
//                       '0 0 40px rgba(14,165,233,0.8)',
//                       '0 0 20px rgba(14,165,233,0.5)',
//                     ],
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   {destinations.value}{destinations.suffix}
//                 </motion.div>
//                 <div className="text-gray-300 font-medium">
//                   Destinations Covered
//                 </div>
//               </motion.div>
//             </div>

//             {/* Travelers */}
//             <div ref={travelers.ref}>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
//               >
//                 <motion.div
//                   className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
//                   animate={{
//                     textShadow: [
//                       '0 0 20px rgba(14,165,233,0.5)',
//                       '0 0 40px rgba(14,165,233,0.8)',
//                       '0 0 20px rgba(14,165,233,0.5)',
//                     ],
//                   }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
//                 >
//                   {travelers.value}{travelers.suffix}
//                 </motion.div>
//                 <div className="text-gray-300 font-medium">
//                   Happy Travelers
//                 </div>
//               </motion.div>
//             </div>

//             {/* Partners */}
//             <div ref={partners.ref}>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
//               >
//                 <motion.div
//                   className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
//                   animate={{
//                     textShadow: [
//                       '0 0 20px rgba(14,165,233,0.5)',
//                       '0 0 40px rgba(14,165,233,0.8)',
//                       '0 0 20px rgba(14,165,233,0.5)',
//                     ],
//                   }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
//                 >
//                   {partners.value}{partners.suffix}
//                 </motion.div>
//                 <div className="text-gray-300 font-medium">
//                   Verified Partners
//                 </div>
//               </motion.div>
//             </div>

//             {/* Rating */}
//             <div ref={rating.ref}>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
//               >
//                 <motion.div
//                   className="text-5xl md:text-6xl font-bold text-primary-400 mb-2"
//                   animate={{
//                     textShadow: [
//                       '0 0 20px rgba(14,165,233,0.5)',
//                       '0 0 40px rgba(14,165,233,0.8)',
//                       '0 0 20px rgba(14,165,233,0.5)',
//                     ],
//                   }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
//                 >
//                   {rating.value}{rating.suffix}
//                 </motion.div>
//                 <div className="text-gray-300 font-medium">
//                   Average Rating
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { updateMetaTags } from '../../utils/seo'
import { Image } from '../../components/ui/Image'

export const AboutView = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'About Us - TravelBudgetly',
      description: 'Our Journey, Your Story. Crafting unforgettable travel experiences since 2012.',
    })
  }, [])

  const stats = [
    { label: 'YEARS', value: '12+' },
    { label: 'COUNTRIES', value: '85' },
    { label: 'TRAVELLERS', value: '50k+' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 1. Hero Section - Now with Top Gap and Floating Look */}
      <section className="relative px-6 pt-24 md:pt-28"> 
        {/* pt-24 ensures it clears the navbar with a nice gap */}
        <div className="relative h-[60vh] w-full overflow-hidden rounded-[32px] md:rounded-[48px] shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover"
            alt="Mountains"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
              >
                Our Journey, Your Story
              </motion.h1>
              <p className="text-lg md:text-xl font-bold opacity-90 leading-relaxed">
                Crafting unforgettable travel experiences since 2012. We believe the world is meant to be seen, felt, and shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Mission Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
            <div className="bg-blue-50 p-4 rounded-2xl shadow-sm">
                <svg className="w-8 h-8 text-[#2C74FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
                </svg>
            </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Our Mission</h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-bold italic">
          "To inspire and enable every traveler to explore the world's hidden gems with authentic, sustainable, and unforgettable experiences."
        </p>
      </section>

      {/* 3. Our Journey Content Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="rounded-[40px] overflow-hidden shadow-2xl group">
            <Image 
              src="/Overlay+Shadow.png" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Travelers" 
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Our Journey</h2>
            <div className="space-y-6 text-gray-600 font-bold leading-relaxed text-base md:text-lg">
              <p>
                Founded in a small apartment in Mumbai, TravelBudgetly Travels began with a single backpack and a passion for finding the path less traveled. 
              </p>
              <p>
                Over the last decade, we've helped over 50,000 travelers discover the magic of authenticity. We've stayed true to our roots: personalized service and a commitment to sustainable tourism.
              </p>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-[24px] text-center border border-gray-100 shadow-sm">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#2C74FF]">{stat.value}</div>
                  <div className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Let's Connect Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-[40px] overflow-hidden grid md:grid-cols-2 border border-gray-100 shadow-inner">
          <div className="p-10 md:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Let's Connect</h2>
            <p className="text-gray-500 font-bold mb-12 text-lg">Ready to start your next adventure? Our team is here to help.</p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="bg-[#2C74FF] p-4 rounded-2xl text-white shadow-xl shadow-blue-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-lg">Our Office</h4>
                  <p className="text-gray-500 font-bold text-sm">123 Wanderlust Way, Mumbai, IND</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-[#2C74FF] p-4 rounded-2xl text-white shadow-xl shadow-blue-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-lg">Email</h4>
                  <p className="text-gray-500 font-bold text-sm">hello@travelbudgetly.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="min-h-[450px]">
            <Image 
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80" 
              className="w-full h-full object-cover" 
              alt="Office View"
            />
          </div>
        </div>
      </section>

      {/* 5. Newsletter Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-[#2C74FF] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Ready to start?</h2>
            <p className="text-white/90 font-bold mb-12 max-w-lg mx-auto text-lg">Join 50,000+ travelers receiving our best deals weekly.</p>
            
            <div className="flex flex-col md:row gap-4 max-w-xl mx-auto">
              <div className="flex flex-col md:flex-row gap-3 w-full bg-white p-2 rounded-[24px] backdrop-blur-md border border-white/20">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-[18px] text-gray-900 font-bold focus:outline-none placeholder:text-gray-400"
                />
                <button className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-[18px] font-black transition-all active:scale-95 shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
            <p className="text-[11px] font-black mt-8 opacity-70 tracking-[0.3em] uppercase">NO SPAM • UNSUBSCRIBE ANYTIME</p>
          </div>
        </div>
      </section>

    </div>
  )
}