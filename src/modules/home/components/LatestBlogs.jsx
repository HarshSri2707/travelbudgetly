// // import { Link } from 'react-router-dom'
// // import { useState, useEffect } from 'react'
// // import { Card } from '../../../components/ui/Card'
// // import { Button } from '../../../components/ui/Button'
// // import { useIntersection } from '../../../hooks/useIntersection'
// // import { blogsMock } from '../../../data/blogs.mock'

// // export const LatestBlogs = () => {
// //   const { ref, hasIntersected } = useIntersection()
// //   const [blogs, setBlogs] = useState([])

// //   useEffect(() => {
// //     if (hasIntersected) {
// //       setTimeout(() => {
// //         setBlogs(blogsMock.slice(0, 3))
// //       }, 300)
// //     }
// //   }, [hasIntersected])

// //   return (
// //     <section ref={ref} className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="text-center mb-12">
// //           <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
// //             Latest from Our Blog
// //           </h2>
// //           <p className="text-lg text-gray-600">
// //             Travel tips, destination guides, and insider insights
// //           </p>
// //         </div>

// //         {!hasIntersected || blogs.length === 0 ? (
// //           <div className="grid md:grid-cols-3 gap-6">
// //             {[1, 2, 3].map((i) => (
// //               <div key={i} className="bg-gray-200 rounded-lg h-96 animate-pulse" />
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="grid md:grid-cols-3 gap-6 mb-8">
// //             {blogs.map((blog) => (
// //               <Card key={blog.id} data={blog} type="blog" />
// //             ))}
// //           </div>
// //         )}

// //         <div className="text-center mt-8">
// //           <Link to="/blogs">
// //             <Button variant="primary" size="lg">
// //               Read More Articles
// //             </Button>
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useIntersection } from '../../../hooks/useIntersection'
// import { Card } from '../../../components/ui/Card'
// import { blogsMock } from '../../../data/blogs.mock'

// const fadeUp = {
//   hidden:  { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
// }
// const stagger = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.12 } },
// }

// /* ── Skeleton placeholders ── */
// const BlogRowSkeleton = () => (
//   <div className="grid md:grid-cols-2 gap-6 mb-8 bg-white rounded-2xl overflow-hidden animate-pulse">
//     <div className="h-56 md:h-full bg-gray-200 min-h-[200px]" />
//     <div className="p-6 space-y-3">
//       <div className="h-6 bg-gray-200 rounded w-4/5" />
//       <div className="h-4 bg-gray-200 rounded w-full" />
//       <div className="h-4 bg-gray-200 rounded w-3/4" />
//       <div className="h-4 bg-gray-200 rounded w-5/6" />
//     </div>
//   </div>
// )

// const SmallBlogSkeleton = () => (
//   <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
//     <div className="h-44 bg-gray-200" />
//     <div className="p-4 space-y-2">
//       <div className="h-4 bg-gray-200 rounded w-3/4" />
//       <div className="h-3 bg-gray-200 rounded w-1/2" />
//     </div>
//   </div>
// )

// /* ── Featured (horizontal) blog card ── */
// const FeaturedBlogCard = ({ blog }) => (
//   <Link to={`/blogs/${blog.slug}`} className="block group">
//     <div className="grid md:grid-cols-2 gap-0 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//       <div className="h-56 md:h-full overflow-hidden">
//         <img
//           src={blog.image}
//           alt={blog.title}
//           loading="lazy"
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//       </div>
//       <div className="p-6 flex flex-col justify-center">
//         <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
//           {blog.title}
//         </h3>
//         <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
//           {blog.excerpt}
//         </p>
//         <div className="flex items-center justify-between mt-auto pt-2">
//           <span className="text-xs text-gray-400">{blog.date || blog.publishedAt}</span>
//           <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
//             →
//           </span>
//         </div>
//       </div>
//     </div>
//   </Link>
// )

// /* ── Small blog card ── */
// const SmallBlogCard = ({ blog }) => (
//   <Link to={`/blogs/${blog.slug}`} className="block group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//     <div className="h-44 overflow-hidden">
//       <img
//         src={blog.image}
//         alt={blog.title}
//         loading="lazy"
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//       />
//     </div>
//     <div className="p-4">
//       <h4 className="font-bold text-sm text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
//         {blog.title}
//       </h4>
//       <div className="flex items-center justify-between mt-3">
//         <span className="text-xs text-gray-400">{blog.date || blog.publishedAt}</span>
//         <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
//           →
//         </span>
//       </div>
//     </div>
//   </Link>
// )

// export const LatestBlogs = () => {
//   const { ref, hasIntersected } = useIntersection()
//   const [blogs, setBlogs] = useState([])

//   useEffect(() => {
//     if (!hasIntersected) return
//     const t = setTimeout(() => {
//       setBlogs(blogsMock.slice(0, 4))
//     }, 300)
//     return () => clearTimeout(t)
//   }, [hasIntersected])

//   const featuredBlog = blogs[0]
//   const restBlogs    = blogs.slice(1)

//   return (
//     <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* heading */}
//         <div className="relative text-center mb-10">
//           <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[56px] md:text-[84px] font-black tracking-widest select-none pointer-events-none text-gray-900/[0.04]">
//             TRENDS
//           </span>
//           <h2 className="relative font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
//             Explore Travel Tips &amp; Latest Trends
//           </h2>
//         </div>

//         {/* sub-header row */}
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="font-bold text-xl text-gray-900">Latest Blogs</h3>
//           <Link
//             to="/blogs"
//             className="text-blue-600 text-sm font-medium hover:underline underline-offset-2"
//           >
//             Explore Blogs
//           </Link>
//         </div>

//         {/* loading state */}
//         {blogs.length === 0 ? (
//           <>
//             <BlogRowSkeleton />
//             <div className="grid md:grid-cols-3 gap-5">
//               {[1, 2, 3].map((i) => <SmallBlogSkeleton key={i} />)}
//             </div>
//           </>
//         ) : (
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//           >
//             {/* featured horizontal card */}
//             {featuredBlog && (
//               <motion.div variants={fadeUp} className="mb-8">
//                 <FeaturedBlogCard blog={featuredBlog} />
//               </motion.div>
//             )}

//             {/* 3 small cards */}
//             <div className="grid md:grid-cols-3 gap-5">
//               {restBlogs.map((blog) => (
//                 <motion.div key={blog.id} variants={fadeUp}>
//                   <SmallBlogCard blog={blog} />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
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

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── Featured Horizontal Card (Image Style) ── */
const FeaturedBlogCard = ({ blog }) => (
  <Link to={`/blogs/${blog.slug}`} className="group block mb-12">
    <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl overflow-hidden group">
      {/* Image Container */}
      <div className="w-full md:w-[500px] aspect-[16/10] overflow-hidden rounded-[2.5rem]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      {/* Content */}
      <div className="flex-1 py-4 pr-4">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-[1.2] group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>
        <p className="text-slate-500 text-lg leading-relaxed mb-8 line-clamp-3">
          {blog.excerpt || "Rerum perferendis nam est. Optio nulla voluptas. Animi sit hic mollitia exercitationem."}
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

/* ── Small Grid Card (Image Style) ── */
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
    // Mocking API fetch delay
    const timer = setTimeout(() => {
      setBlogs(blogsMock.slice(0, 4))
    }, 200)
    return () => clearTimeout(timer)
  }, [hasIntersected])

  const featuredBlog = blogs[0]
  const restBlogs = blogs.slice(1)

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Dynamic Watermark Heading --- */}
        <div className="relative text-center mb-20">
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[60px] md:text-[110px] font-black tracking-[0.1em] select-none pointer-events-none text-blue-600/[0.04] uppercase">
            Travel Blogs
          </span>
          <h2 className="relative font-bold text-2xl md:text-3xl text-slate-900 tracking-tight">
            Explore Travel Tips & Latest Trends
          </h2>
        </div>

        {/* --- Sub-header Row --- */}
        <div className="flex items-center justify-between mb-12">
          <h3 className="font-black text-2xl text-slate-900">Latest Blogs</h3>
          <Link
            to="/blogs"
            className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-0.5"
          >
            Explore Blogs
          </Link>
        </div>

        {/* --- Blog Content --- */}
        {blogs.length > 0 ? (
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Featured Section */}
            <motion.div variants={fadeUp}>
              <FeaturedBlogCard blog={featuredBlog} />
            </motion.div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
              {restBlogs.map((blog) => (
                <motion.div key={blog.id} variants={fadeUp}>
                  <SmallBlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Simple Loading Placeholder */
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