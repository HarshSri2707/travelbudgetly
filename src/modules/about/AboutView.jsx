

// import { useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { updateMetaTags } from '../../utils/seo'
// import { Image } from '../../components/ui/Image'

// export const AboutView = () => {
//   useEffect(() => {
//     updateMetaTags({
//       title: 'About Us - TravelBudgetly',
//       description: 'Our Journey, Your Story. Crafting unforgettable travel experiences since 2012.',
//     })
//   }, [])

//   const stats = [
//     { label: 'YEARS', value: '12+' },
//     { label: 'COUNTRIES', value: '85' },
//     { label: 'TRAVELLERS', value: '50k+' },
//   ];

//   return (
//     <div className="min-h-screen bg-white font-sans">
      
//       {/* 1. Hero Section - Now with Top Gap and Floating Look */}
//       <section className="relative px-6 pt-24 md:pt-28"> 
//         {/* pt-24 ensures it clears the navbar with a nice gap */}
//         <div className="relative h-[60vh] w-full overflow-hidden rounded-[32px] md:rounded-[48px] shadow-2xl">
//           <Image
//             src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
//             className="w-full h-full object-cover"
//             alt="Mountains"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
//             <div className="max-w-3xl text-white">
//               <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
//               >
//                 Our Journey, Your Story
//               </motion.h1>
//               <p className="text-lg md:text-xl font-bold opacity-90 leading-relaxed">
//                 Crafting unforgettable travel experiences since 2012. We believe the world is meant to be seen, felt, and shared.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. Our Mission Section */}
//       <section className="py-24 px-6 text-center max-w-4xl mx-auto">
//         <div className="flex justify-center mb-6">
//             <div className="bg-blue-50 p-4 rounded-2xl shadow-sm">
//                 <svg className="w-8 h-8 text-[#2C74FF]" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
//                 </svg>
//             </div>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Our Mission</h2>
//         <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-bold italic">
//           "To inspire and enable every traveler to explore the world's hidden gems with authentic, sustainable, and unforgettable experiences."
//         </p>
//       </section>

//       {/* 3. Our Journey Content Section */}
//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
//           <div className="rounded-[40px] overflow-hidden shadow-2xl group">
//             <Image 
//               src="/Overlay+Shadow.png" 
//               className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
//               alt="Travelers" 
//             />
//           </div>
          
//           <div>
//             <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Our Journey</h2>
//             <div className="space-y-6 text-gray-600 font-bold leading-relaxed text-base md:text-lg">
//               <p>
//                 Founded in a small apartment in Mumbai, TravelBudgetly Travels began with a single backpack and a passion for finding the path less traveled. 
//               </p>
//               <p>
//                 Over the last decade, we've helped over 50,000 travelers discover the magic of authenticity. We've stayed true to our roots: personalized service and a commitment to sustainable tourism.
//               </p>
//             </div>

//             {/* Stats Boxes */}
//             <div className="grid grid-cols-3 gap-4 mt-12">
//               {stats.map((stat, i) => (
//                 <div key={i} className="bg-gray-50 p-6 rounded-[24px] text-center border border-gray-100 shadow-sm">
//                   <div className="text-2xl md:text-3xl font-extrabold text-[#2C74FF]">{stat.value}</div>
//                   <div className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase mt-1">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. Let's Connect Section */}
//       <section className="py-20 px-6 max-w-7xl mx-auto">
//         <div className="bg-gray-50 rounded-[40px] overflow-hidden grid md:grid-cols-2 border border-gray-100 shadow-inner">
//           <div className="p-10 md:p-20 flex flex-col justify-center">
//             <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Let's Connect</h2>
//             <p className="text-gray-500 font-bold mb-12 text-lg">Ready to start your next adventure? Our team is here to help.</p>
            
//             <div className="space-y-10">
//               <div className="flex items-center gap-6">
//                 <div className="bg-[#2C74FF] p-4 rounded-2xl text-white shadow-xl shadow-blue-200">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-extrabold text-gray-900 text-lg">Our Office</h4>
//                   <p className="text-gray-500 font-bold text-sm">123 Wanderlust Way, Mumbai, IND</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-6">
//                 <div className="bg-[#2C74FF] p-4 rounded-2xl text-white shadow-xl shadow-blue-200">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-extrabold text-gray-900 text-lg">Email</h4>
//                   <p className="text-gray-500 font-bold text-sm">hello@travelbudgetly.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="min-h-[450px]">
//             <Image 
//               src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80" 
//               className="w-full h-full object-cover" 
//               alt="Office View"
//             />
//           </div>
//         </div>
//       </section>

//       {/* 5. Newsletter Section */}
//       <section className="py-24 px-6">
//         <div className="max-w-6xl mx-auto bg-[#2C74FF] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
//           <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
          
//           <div className="relative z-10">
//             <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Ready to start?</h2>
//             <p className="text-white/90 font-bold mb-12 max-w-lg mx-auto text-lg">Join 50,000+ travelers receiving our best deals weekly.</p>
            
//             <div className="flex flex-col md:row gap-4 max-w-xl mx-auto">
//               <div className="flex flex-col md:flex-row gap-3 w-full bg-white p-2 rounded-[24px] backdrop-blur-md border border-white/20">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email" 
//                   className="flex-1 px-6 py-4 rounded-[18px] text-gray-900 font-bold focus:outline-none placeholder:text-gray-400"
//                 />
//                 <button className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-[18px] font-black transition-all active:scale-95 shadow-lg">
//                   Subscribe Now
//                 </button>
//               </div>
//             </div>
//             <p className="text-[11px] font-black mt-8 opacity-70 tracking-[0.3em] uppercase">NO SPAM • UNSUBSCRIBE ANYTIME</p>
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
    { label: 'YEARS',      value: '12+' },
    { label: 'COUNTRIES',  value: '85'  },
    { label: 'TRAVELLERS', value: '50k+'},
  ]

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative px-4 md:px-6 pt-24 md:pt-28">
        <div className="relative h-[60vh] w-full overflow-hidden rounded-[32px] md:rounded-[48px] shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover"
            alt="Mountains"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4 md:px-6">
            <div className="max-w-3xl text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight"
              >
                Our Journey, Your Story
              </motion.h1>
              <p className="text-sm sm:text-base md:text-xl font-bold opacity-90 leading-relaxed">
                Crafting unforgettable travel experiences since 2012. We believe the world is meant to be seen, felt, and shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Mission ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 md:px-6 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 p-4 rounded-2xl shadow-sm">
            <svg className="w-8 h-8 text-[#2C74FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
            </svg>
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-8 tracking-tight">
          Our Mission
        </h2>
        <p className="text-gray-600 text-base md:text-xl leading-relaxed font-bold italic">
          "To inspire and enable every traveler to explore the world's hidden gems with authentic, sustainable, and unforgettable experiences."
        </p>
      </section>

      {/* ── 3. Our Journey ──────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* 
            Image: full bleed, no white padding/gap.
            overflow-hidden on parent clips the image to rounded corners.
            object-cover fills the entire box.
          */}
          <div className="rounded-[32px] md:rounded-[40px]  ">
            <img
              src="/Overlay+Shadow.png"
              alt="Travelers"
              className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover "
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-8 tracking-tight">
              Our Journey
            </h2>
            <div className="space-y-5 text-gray-600 font-bold leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                Founded in a small apartment in Mumbai, TravelBudgetly Travels began with a single backpack and a passion for finding the path less traveled.
              </p>
              <p>
                Over the last decade, we've helped over 50,000 travelers discover the magic of authenticity. We've stayed true to our roots: personalized service and a commitment to sustainable tourism.
              </p>
            </div>

            {/* Stats — responsive grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-10 md:mt-12">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-4 md:p-6 rounded-[18px] md:rounded-[24px] text-center border border-gray-100 shadow-sm"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2C74FF]">
                    {stat.value}
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-black text-gray-400 tracking-[0.15em] uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Let's Connect ────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="bg-gray-50 rounded-[32px] md:rounded-[40px] overflow-hidden grid md:grid-cols-2 border border-gray-100 shadow-inner">
          <div className="p-8 md:p-10 lg:p-20 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
              Let's Connect
            </h2>
            <p className="text-gray-500 font-bold mb-8 md:mb-12 text-sm md:text-lg">
              Ready to start your next adventure? Our team is here to help.
            </p>

            <div className="space-y-7 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="bg-[#2C74FF] p-3 md:p-4 rounded-xl md:rounded-2xl text-white shadow-xl shadow-blue-200 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base md:text-lg">Our Office</h4>
                  <p className="text-gray-500 font-bold text-xs md:text-sm">123 Wanderlust Way, Mumbai, IND</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="bg-[#2C74FF] p-3 md:p-4 rounded-xl md:rounded-2xl text-white shadow-xl shadow-blue-200 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base md:text-lg">Email</h4>
                  <p className="text-gray-500 font-bold text-xs md:text-sm">hello@travelbudgetly.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect image — hidden on mobile to avoid squishing */}
          <div className="hidden md:block min-h-[400px] lg:min-h-[450px]">
            <Image
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80"
              className="w-full h-full object-cover"
              alt="Office View"
            />
          </div>
        </div>
      </section>

      {/* ── 5. Newsletter ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-[#2C74FF] rounded-[36px] md:rounded-[48px] p-8 sm:p-12 md:p-16 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-white/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight">
              Ready to start?
            </h2>
            <p className="text-white/90 font-bold mb-8 md:mb-12 max-w-lg mx-auto text-sm md:text-lg">
              Join 50,000+ travelers receiving our best deals weekly.
            </p>

            {/* 
              Mobile: input full width, button full width below
              Desktop: side-by-side in a pill
            */}
            <div className="max-w-xl mx-auto">
              {/* Mobile layout */}
              <div className="flex flex-col gap-3 md:hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl text-gray-900 font-bold focus:outline-none placeholder:text-gray-400 bg-white text-sm"
                />
                <button className="w-full bg-gray-900 hover:bg-black text-white px-6 py-4 rounded-2xl font-black transition-all active:scale-95 shadow-lg text-sm">
                  Subscribe Now
                </button>
              </div>

              {/* Desktop layout — pill */}
              <div className="hidden md:flex gap-3 w-full bg-white p-2 rounded-[24px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-[18px] text-gray-900 font-bold focus:outline-none placeholder:text-gray-400 text-sm"
                />
                <button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-[18px] font-black transition-all active:scale-95 shadow-lg text-sm whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>

            <p className="text-[10px] sm:text-[11px] font-black mt-6 md:mt-8 opacity-70 tracking-[0.25em] uppercase">
              NO SPAM • UNSUBSCRIBE ANYTIME
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}