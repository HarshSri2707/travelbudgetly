// // export const Testimonials = () => {
// //   const testimonials = [
// //     {
// //       name: 'Priya Sharma',
// //       location: 'Mumbai',
// //       rating: 5,
// //       text: 'TravelBudgetly made our Rajasthan trip unforgettable! Every detail was perfect.',
// //       image: 'https://i.pravatar.cc/150?img=1',
// //     },
// //     {
// //       name: 'Rahul Verma',
// //       location: 'Delhi',
// //       rating: 5,
// //       text: 'Best travel partner ever! No hidden costs, excellent service throughout.',
// //       image: 'https://i.pravatar.cc/150?img=3',
// //     },
// //     {
// //       name: 'Anjali Reddy',
// //       location: 'Bangalore',
// //       rating: 5,
// //       text: 'Kerala package was amazing. Highly recommend for couples!',
// //       image: 'https://i.pravatar.cc/150?img=5',
// //     },
// //   ]

// //   return (
// //     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="text-center mb-12">
// //           <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
// //             What Our Travelers Say
// //           </h2>
// //         </div>

// //         <div className="grid md:grid-cols-3 gap-8">
// //           {testimonials.map((t, i) => (
// //             <div key={i} className="bg-white rounded-xl shadow-lg p-6">
// //               <div className="flex items-center gap-4 mb-4">
// //                 <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" />
// //                 <div>
// //                   <h4 className="font-semibold text-gray-900">{t.name}</h4>
// //                   <p className="text-sm text-gray-500">{t.location}</p>
// //                 </div>
// //               </div>
// //               <div className="flex gap-1 mb-3">
// //                 {[...Array(t.rating)].map((_, i) => (
// //                   <span key={i} className="text-yellow-500">★</span>
// //                 ))}
// //               </div>
// //               <p className="text-gray-700 italic">"{t.text}"</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// import { motion } from 'framer-motion'

// export const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Priya Sharma',
//       location: 'Mumbai',
//       rating: 5,
//       text: 'TravelBudgetly made our Rajasthan trip unforgettable! Every detail was perfect.',
//       image: 'https://i.pravatar.cc/150?img=1',
//     },
//     {
//       name: 'Rahul Verma',
//       location: 'Delhi',
//       rating: 5,
//       text: 'Best travel partner ever! No hidden costs, excellent service throughout.',
//       image: 'https://i.pravatar.cc/150?img=3',
//     },
//     {
//       name: 'Anjali Reddy',
//       location: 'Bangalore',
//       rating: 5,
//       text: 'Kerala package was amazing. Highly recommend for couples!',
//       image: 'https://i.pravatar.cc/150?img=5',
//     },
//     {
//       name: 'Saurabh Jain',
//       location: 'Jaipur',
//       rating: 5,
//       text: 'Smooth bookings and great hotels. Will travel again!',
//       image: 'https://i.pravatar.cc/150?img=8',
//     },
//     {
//       name: 'Neha Kapoor',
//       location: 'Pune',
//       rating: 5,
//       text: 'Very professional team. Our honeymoon was stress-free.',
//       image: 'https://i.pravatar.cc/150?img=11',
//     },
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
//             What Our Travelers Say
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Real experiences from real travelers across India
//           </p>
//         </div>

//         {/* Sliding Testimonials */}
//         <div className="relative">
//           <motion.div
//             className="flex gap-6"
//             animate={{ x: ['0%', '-50%'] }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: 'linear',
//             }}
//           >
//             {[...testimonials, ...testimonials].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -8 }}
//                 className="min-w-[320px] max-w-sm bg-white rounded-xl shadow-lg p-6 transition-shadow hover:shadow-xl"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">{t.name}</h4>
//                     <p className="text-sm text-gray-500">{t.location}</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-1 mb-3">
//                   {[...Array(t.rating)].map((_, i) => (
//                     <span key={i} className="text-yellow-500">★</span>
//                   ))}
//                 </div>

//                 <p className="text-gray-700 italic leading-relaxed">
//                   “{t.text}”
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Gradient fade edges */}
//           <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
//           <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
//         </div>
//       </div>
//     </section>
//   )
// }



// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'

// export const NewsLetter = () => {
//   const { ref, hasIntersected } = useIntersection({ threshold: 0.2 })
//   const [email, setEmail]       = useState('')
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = () => {
//     if (email.trim()) setSubmitted(true)
//   }

//   return (
//     <section ref={ref} className="py-16 bg-blue-600 overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
//         className="max-w-2xl mx-auto px-4 text-center text-white"
//       >
//         <h2 className="font-bold text-2xl md:text-3xl mb-2">
//           Don't miss out on next week's deals
//         </h2>
//         <p className="text-blue-100 text-sm mb-8 leading-relaxed">
//           Join 500,000+ travelers and get exclusive access to unlimited coupons and
//           secret flash sales.
//         </p>

//         {submitted ? (
//           <p className="text-white font-semibold text-lg">🎉 Thank you for subscribing!</p>
//         ) : (
//           <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto bg-white rounded-full overflow-hidden shadow-xl">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
//               placeholder="Enter your email"
//               className="flex-1 px-5 py-3.5 text-gray-700 text-sm outline-none rounded-l-full"
//             />
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-3.5 transition-colors duration-200 rounded-r-full whitespace-nowrap"
//             >
//               Subscribe Now
//             </button>
//           </div>
//         )}

//         <p className="text-blue-200 text-xs mt-4 uppercase tracking-wide">
//           Unsubscribe Anytime. Off Spam Ever.
//         </p>
//       </motion.div>
//     </section>
//   )
// }


import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'

export const NewsLetter = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.2 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
    }
  }

  return (
    <section ref={ref} className="py-12 px-4 md:py-20 bg-white">
      {/* Main Blue Container based on image_346540.png */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-6xl mx-auto bg-[#0066FF] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden"
      >
        {/* Header Text */}
        <h2 className="font-bold text-3xl md:text-5xl mb-4 tracking-tight">
          Don't miss out on next week's deals
        </h2>
        
        {/* Subtext */}
        <p className="text-blue-50 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Join 500,000+ travelers and get exclusive access to unlisted coupons and
          secret flash sales.
        </p>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto"
          >
            <p className="text-white font-bold text-xl">🎉 Check your inbox to confirm!</p>
          </motion.div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
          >
            {/* Input Field based on image_346540.png UI */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full md:w-[380px] px-8 py-5 rounded-2xl bg-white text-gray-800 text-lg outline-none focus:ring-4 focus:ring-blue-400/50 transition-all placeholder:text-gray-400"
            />
            
            {/* Dark Subscribe Button from image_346540.png */} 
            <button
              type="submit"
              className="w-full md:w-auto bg-[#0A1629] hover:bg-[#122341] text-white font-bold px-10 py-5 rounded-2xl md:rounded-3xl text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        )}

        {/* Unsubscribe Footer Text as seen in image_346540.png */}
        <p className="text-blue-200/80 text-xs mt-8 uppercase tracking-[0.2em] font-medium">
          UNSUBSCRIBE ANYTIME • NO SPAM EVER
        </p>
        
        {/* Subtle Decorative Gradient (Optional for depth) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-3xl" />
      </motion.div>
    </section>
  )
}