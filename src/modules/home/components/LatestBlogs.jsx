

// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'
// import { blogsMock } from '../../../data/blogs.mock'

// // Animations
// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// }

// const stagger = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } },
// }

// /* ── Featured Horizontal Card (Image Style) ── */
// const FeaturedBlogCard = ({ blog }) => (
//   <Link to={`/blogs/${blog.slug}`} className="group block mb-12">
//     <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl overflow-hidden group">
//       {/* Image Container */}
//       <div className="w-full md:w-[500px] aspect-[16/10] overflow-hidden rounded-[2.5rem]">
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//       </div>
//       {/* Content */}
//       <div className="flex-1 py-4 pr-4">
//         <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-[1.2] group-hover:text-blue-600 transition-colors">
//           {blog.title}
//         </h3>
//         <p className="text-slate-500 text-lg leading-relaxed mb-8 line-clamp-3">
//           {blog.excerpt || "Rerum perferendis nam est. Optio nulla voluptas. Animi sit hic mollitia exercitationem."}
//         </p>
//         <div className="flex items-center justify-between">
//           <span className="text-slate-400 font-medium">
//              {new Date(blog.publishDate || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//           </span>
//           <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 transition-transform group-hover:translate-x-1">
//             <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   </Link>
// )

// /* ── Small Grid Card (Image Style) ── */
// const SmallBlogCard = ({ blog }) => (
//   <Link to={`/blogs/${blog.slug}`} className="group block">
//     <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
//       <img
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//       />
//     </div>
//     <h4 className="font-bold text-xl text-slate-900 mb-4 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors min-h-[3.5rem]">
//       {blog.title}
//     </h4>
//     <div className="flex items-center justify-between">
//       <span className="text-slate-400 font-medium">
//         {new Date(blog.publishDate || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//       </span>
//       <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow-md shadow-blue-100 transition-transform group-hover:translate-x-1">
//         <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//         </svg>
//       </div>
//     </div>
//   </Link>
// )

// export const LatestBlogs = () => {
//   const { ref, hasIntersected } = useIntersection()
//   const [blogs, setBlogs] = useState([])

//   useEffect(() => {
//     if (!hasIntersected) return
//     // Mocking API fetch delay
//     const timer = setTimeout(() => {
//       setBlogs(blogsMock.slice(0, 4))
//     }, 200)
//     return () => clearTimeout(timer)
//   }, [hasIntersected])

//   const featuredBlog = blogs[0]
//   const restBlogs = blogs.slice(1)

//   return (
//     <section ref={ref} className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* --- Dynamic Watermark Heading --- */}
//         <div className="relative text-center mb-20">
//           <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[60px] md:text-[110px] font-black tracking-[0.1em] select-none pointer-events-none text-blue-600/[0.04] uppercase">
//             Travel Blogs
//           </span>
//           <h2 className="relative font-bold text-2xl md:text-3xl text-slate-900 tracking-tight">
//             Explore Travel Tips & Latest Trends
//           </h2>
//         </div>

//         {/* --- Sub-header Row --- */}
//         <div className="flex items-center justify-between mb-12">
//           <h3 className="font-black text-2xl text-slate-900">Latest Blogs</h3>
//           <Link
//             to="/blogs"
//             className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-0.5"
//           >
//             Explore Blogs
//           </Link>
//         </div>

//         {/* --- Blog Content --- */}
//         {blogs.length > 0 ? (
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//           >
//             {/* Featured Section */}
//             <motion.div variants={fadeUp}>
//               <FeaturedBlogCard blog={featuredBlog} />
//             </motion.div>

//             {/* Grid Section */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
//               {restBlogs.map((blog) => (
//                 <motion.div key={blog.id} variants={fadeUp}>
//                   <SmallBlogCard blog={blog} />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ) : (
//           /* Simple Loading Placeholder */
//           <div className="space-y-10 animate-pulse">
//             <div className="h-[400px] bg-slate-50 rounded-[2.5rem]" />
//             <div className="grid grid-cols-3 gap-10">
//               <div className="h-64 bg-slate-50 rounded-[2rem]" />
//               <div className="h-64 bg-slate-50 rounded-[2rem]" />
//               <div className="h-64 bg-slate-50 rounded-[2rem]" />
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }


import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'
import { blogsMock } from '../../../data/blogs.mock'

/* ── Animations ───────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── Featured Horizontal Card ─────────────────────────────────── */
const FeaturedBlogCard = ({ blog }) => (
  <Link to={`/blogs/${blog.slug}`} className="group block mb-12">
    <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl overflow-hidden group">
      <div className="w-full md:w-[500px] aspect-[16/10] overflow-hidden rounded-[2.5rem]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 py-4 pr-4">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-[1.2] group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>
        <p className="text-slate-500 text-lg leading-relaxed mb-8 line-clamp-3">
          {blog.excerpt || 'Rerum perferendis nam est. Optio nulla voluptas. Animi sit hic mollitia exercitationem.'}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 font-medium">
            {new Date(blog.publishDate || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 transition-transform group-hover:translate-x-1">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Link>
)

/* ── Small Grid Card ──────────────────────────────────────────── */
const SmallBlogCard = ({ blog }) => (
  <Link to={`/blogs/${blog.slug}`} className="group block">
    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <h4 className="font-bold text-xl text-slate-900 mb-4 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors min-h-[3.5rem]">
      {blog.title}
    </h4>
    <div className="flex items-center justify-between">
      <span className="text-slate-400 font-medium">
        {new Date(blog.publishDate || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </span>
      <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow-md shadow-blue-100 transition-transform group-hover:translate-x-1">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  </Link>
)

export const LatestBlogs = () => {
  const { ref, hasIntersected } = useIntersection()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    if (!hasIntersected) return
    const timer = setTimeout(() => {
      setBlogs(blogsMock.slice(0, 4))
    }, 200)
    return () => clearTimeout(timer)
  }, [hasIntersected])

  const featuredBlog = blogs[0]
  const restBlogs    = blogs.slice(1)

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Heading ─────────────────────────────────────────────
            Watermark wraps ONLY the h2. Subtitle sits outside.
        ──────────────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <div className="relative  px-4">
            <span className="
              absolute inset-x-0 top-1/2 -translate-y-1/2
               text-[38px] xs:text-[48px] sm:text-[56px] md:text-[64px]
              font-black tracking-[0.1em]
              select-none pointer-events-none
              text-blue-900/[0.1] uppercase whitespace-nowrap
            ">
              Travel Blogs
            </span>
            <h2 className="relative font-bold text-2xl md:text-3xl text-slate-900 tracking-tight py-2">
              Explore Travel Tips &amp; Latest Trends
            </h2>
          </div>
        </div>

        {/* ── Sub-header Row ──────────────────────────────────────── */}
        <div className="flex items-center justify-between mb-12">
          <h3 className="font-black text-2xl text-slate-900">Latest Blogs</h3>
          <Link
            to="/blogs"
            className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-0.5"
          >
            Explore Blogs
          </Link>
        </div>

        {/* ── Blog Content ─────────────────────────────────────────── */}
        {blogs.length > 0 ? (
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <FeaturedBlogCard blog={featuredBlog} />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
              {restBlogs.map((blog) => (
                <motion.div key={blog.id} variants={fadeUp}>
                  <SmallBlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="space-y-10 animate-pulse">
            <div className="h-[400px] bg-slate-50 rounded-[2.5rem]" />
            <div className="grid grid-cols-3 gap-10">
              <div className="h-64 bg-slate-50 rounded-[2rem]" />
              <div className="h-64 bg-slate-50 rounded-[2rem]" />
              <div className="h-64 bg-slate-50 rounded-[2rem]" />
            </div>
          </div>
        )}

      </div>
    </section>
  )
}