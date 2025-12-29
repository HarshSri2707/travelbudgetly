// import { Link } from 'react-router-dom'
// import { Image } from './Image'
// import { Button } from './Button'

// export const Card = ({ data, type = 'destination', className = '' }) => {
//   const renderContent = () => {
//     switch (type) {
//       case 'destination':
//         return (
//           <Link to={`/destinations/${data.slug}`} className="block h-full">
//             <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full ${className}`}>
//               <div className="relative h-48">
//                 <Image
//                   src={data.image}
//                   lowQualitySrc={data.thumbnail}
//                   alt={data.name}
//                   className="w-full h-full"
//                 />
//                 {data.rating && (
//                   <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
//                     <span className="text-yellow-500">★</span>
//                     <span>{data.rating}</span>
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-xl text-gray-900 mb-2">{data.name}</h3>
//                 <p className="text-gray-600 text-sm mb-3 line-clamp-2">{data.description}</p>
//                 <div className="flex items-center justify-between">
//                   <div className="text-sm text-gray-500">
//                     <span className="font-semibold text-primary-600">₹{data.price?.toLocaleString()}</span>
//                     {data.duration && <span className="ml-2">• {data.duration}</span>}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         )

//       case 'package':
//         return (
//           <Link to={`/packages/${data.slug}`} className="block h-full">
//             <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full ${className}`}>
//               <div className="relative h-48">
//                 <Image
//                   src={data.image}
//                   lowQualitySrc={data.thumbnail}
//                   alt={data.name}
//                   className="w-full h-full"
//                 />
//                 {data.discount && (
//                   <div className="absolute top-3 left-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                     {data.discount}% OFF
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-xl text-gray-900 mb-2">{data.name}</h3>
//                 <p className="text-sm text-gray-600 mb-3">{data.destination}</p>
//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <span className="text-2xl font-bold text-primary-600">₹{data.price.toLocaleString()}</span>
//                     {data.originalPrice && (
//                       <span className="text-sm text-gray-400 line-through ml-2">₹{data.originalPrice.toLocaleString()}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-500">{data.duration}</span>
//                   <div className="flex items-center gap-1">
//                     <span className="text-yellow-500">★</span>
//                     <span className="font-semibold">{data.rating}</span>
//                     <span className="text-gray-400">({data.reviews})</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         )

//       case 'blog':
//         return (
//           <Link to={`/blogs/${data.slug}`} className="block h-full">
//             <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full ${className}`}>
//               <div className="relative h-48">
//                 <Image
//                   src={data.image}
//                   lowQualitySrc={data.thumbnail}
//                   alt={data.title}
//                   className="w-full h-full"
//                 />
//                 <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                   {data.category}
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{data.title}</h3>
//                 <p className="text-gray-600 text-sm mb-3 line-clamp-2">{data.excerpt}</p>
//                 <div className="flex items-center justify-between text-xs text-gray-500">
//                   <span>{data.author}</span>
//                   <span>{data.readTime}</span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         )

//       default:
//         return null
//     }
//   }

//   return renderContent()
// }


// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { Image } from './Image'
// import { Button } from './Button'
// import { useReducedMotion } from '../../hooks/useReducedMotion'

// export const Card = ({ data, type = 'destination', index = 0 }) => {
//   const prefersReducedMotion = useReducedMotion()
  
//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 30,
//       scale: 0.95
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         delay: prefersReducedMotion ? 0 : index * 0.1,
//         ease: [0.4, 0, 0.2, 1]
//       }
//     }
//   }

//   const MotionDiv = prefersReducedMotion ? 'div' : motion.div

//   const renderContent = () => {
//     switch (type) {
//       case 'destination':
//         return (
//           <Link to={`/destinations/${data.slug}`} className="block h-full group">
//             <MotionDiv 
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full transform hover:-translate-y-2"
//             >
//               <div className="relative h-56 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <Image
//                   src={data.image}
//                   lowQualitySrc={data.thumbnail}
//                   alt={data.name}
//                   className="w-full h-full transform group-hover:scale-110 transition-transform duration-700"
//                 />
//                 {data.rating && (
//                   <motion.div 
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.3, type: "spring" }}
//                     className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg z-20"
//                   >
//                     <span className="text-yellow-500 text-base">★</span>
//                     <span className="text-gray-900">{data.rating}</span>
//                   </motion.div>
//                 )}
//               </div>
//               <div className="p-5">
//                 <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
//                   {data.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
//                   {data.description}
//                 </p>
//                 <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//                   <div className="flex flex-col">
//                     <span className="text-xs text-gray-500 mb-1">Starting from</span>
//                     <span className="font-bold text-xl text-primary-600">₹{data.price?.toLocaleString()}</span>
//                   </div>
//                   {data.duration && (
//                     <div className="text-right">
//                       <span className="text-xs text-gray-500 block mb-1">Duration</span>
//                       <span className="text-sm font-semibold text-gray-700">{data.duration}</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </MotionDiv>
//           </Link>
//         )

//       case 'package':
//         return (
//           <Link to={`/packages/${data.slug}`} className="block h-full group">
//             <MotionDiv 
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full transform hover:-translate-y-2"
//             >
//               <div className="relative h-56 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
//                 <Image
//                   src={data.image}
//                   lowQualitySrc={data.thumbnail}
//                   alt={data.name}
//                   className="w-full h-full transform group-hover:scale-110 transition-transform duration-700"
//                 />
//                 {data.discount && (
//                   <motion.div 
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
//                     className="absolute top-4 left-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl z-20"
//                   >
//                     {data.discount}% OFF
//                   </motion.div>
//                 )}
//               </div>
//               <div className="p-5">
//                 <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
//                   {data.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-4 font-medium">{data.destination}</p>
//                 <div className="flex items-baseline gap-3 mb-4">
//                   <span className="text-3xl font-bold text-primary-600">₹{data.price.toLocaleString()}</span>
//                   {data.originalPrice && (
//                     <span className="text-base text-gray-400 line-through">₹{data.originalPrice.toLocaleString()}</span>
//                   )}
//                 </div>
//                 <div className="flex items-center justify-between text-sm pt-3 border-t border-gray-100">
//                   <span className="text-gray-600 font-medium">{data.duration}</span>
//                   <div className="flex items-center gap-1.5">
//                     <span className="text-yellow-500 text-base">★</span>
//                     <span className="font-bold text-gray-900">{data.rating}</span>
//                     <span className="text-gray-400">({data.reviews})</span>
//                   </div>
//                 </div>
//               </div>
//             </MotionDiv>
//           </Link>
//         )

//       case 'blog':
//         return (
//           <Link to={`/blogs/${data.slug}`} className="block h-full group">
//             <MotionDiv 
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full transform hover:-translate-y-2"
//             >
//               <div className="relative h-52 overflow-hidden">
//                 <Image
//                   src={data.image}
//                   lowQualitySrc={data.thumbnail}
//                   alt={data.title}
//                   className="w-full h-full transform group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                 <motion.div 
//                   initial={{ y: -20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg"
//                 >
//                   {data.category}
//                 </motion.div>
//               </div>
//               <div className="p-5">
//                 <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-primary-600 transition-colors duration-300">
//                   {data.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
//                   {data.excerpt}
//                 </p>
//                 <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
//                   <span className="font-medium text-gray-700">{data.author}</span>
//                   <div className="flex items-center gap-2">
//                     <span>📖</span>
//                     <span className="font-medium">{data.readTime}</span>
//                   </div>
//                 </div>
//               </div>
//             </MotionDiv>
//           </Link>
//         )

//       default:
//         return null
//     }
//   }

//   return renderContent()
// }



//new code
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Image } from './Image'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export const Card = ({ data, type = 'destination' }) => {
  const prefersReducedMotion = useReducedMotion()
  const MotionDiv = prefersReducedMotion ? 'div' : motion.div

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.25 },
    },
  }

  const Wrapper = ({ children }) => (
    <MotionDiv
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full"
    >
      {children}
    </MotionDiv>
  )

  /* ================= DESTINATION ================= */

  if (type === 'destination') {
    return (
      <Link to={`/destinations/${data.slug}`} className="block h-full">
        <Wrapper>
          <div className="relative h-56 overflow-hidden">
            {/* Image */}
            <Image
              src={data.image}
              lowQualitySrc={data.thumbnail}
              alt={data.name}
              className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Rating */}
            {data.rating && (
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold shadow">
                ⭐ {data.rating}
              </div>
            )}
          </div>

          <div className="p-5">
            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {data.name}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {data.description}
            </p>

            <div className="flex justify-between items-center pt-3 border-t">
              <span className="font-bold text-primary-600">
                ₹{data.price?.toLocaleString()}
              </span>

              {data.duration && (
                <span className="text-sm text-gray-500">
                  {data.duration}
                </span>
              )}
            </div>
          </div>
        </Wrapper>
      </Link>
    )
  }

  /* ================= PACKAGE ================= */

  if (type === 'package') {
    return (
      <Link to={`/packages/${data.slug}`} className="block h-full">
        <Wrapper>
          <div className="relative h-56 overflow-hidden">
            <Image
              src={data.image}
              lowQualitySrc={data.thumbnail}
              alt={data.name}
              className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {data.discount && (
              <div className="absolute top-4 left-4 bg-accent-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow">
                {data.discount}% OFF
              </div>
            )}
          </div>

          <div className="p-5">
            <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
              {data.name}
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              {data.destination}
            </p>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl font-bold text-primary-600">
                ₹{data.price.toLocaleString()}
              </span>

              {data.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{data.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <div className="flex justify-between items-center pt-3 border-t text-sm">
              <span className="text-gray-500">{data.duration}</span>

              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold">{data.rating}</span>
                <span className="text-gray-400">({data.reviews})</span>
              </div>
            </div>
          </div>
        </Wrapper>
      </Link>
    )
  }

  /* ================= BLOG ================= */

  if (type === 'blog') {
    return (
      <Link to={`/blogs/${data.slug}`} className="block h-full">
        <Wrapper>
          <div className="relative h-52 overflow-hidden">
            <Image
              src={data.image}
              lowQualitySrc={data.thumbnail}
              alt={data.title}
              className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {data.category}
            </div>
          </div>

          <div className="p-5">
            <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
              {data.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {data.excerpt}
            </p>

            <div className="flex justify-between text-xs text-gray-500 pt-3 border-t">
              <span>{data.author}</span>
              <span>{data.readTime}</span>
            </div>
          </div>
        </Wrapper>
      </Link>
    )
  }

  return null
}
