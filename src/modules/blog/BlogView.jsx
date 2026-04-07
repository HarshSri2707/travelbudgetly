// // import { useState, useEffect } from 'react'
// // import { useSearchParams } from 'react-router-dom'
// // import { updateMetaTags } from '../../utils/seo'
// // import { Card } from '../../components/ui/Card'
// // import { Badge } from '../../components/ui/Badge'
// // import { blogsMock } from '../../data/blogs.mock'

// // export const BlogView = () => {
// //   const [searchParams] = useSearchParams()
// //   const [blogs, setBlogs] = useState([])
// //   const [filteredBlogs, setFilteredBlogs] = useState([])
// //   const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
// //   const [loading, setLoading] = useState(true)

// //   const categories = [
// //     'all',
// //     'Budget Travellers',
// //     'Offbeat Explorers',
// //     'Decision Makers',
// //     'Group and Family Travellers',
// //     'Seasonal Trends',
// //   ]

// //   useEffect(() => {
// //     updateMetaTags({
// //       title: 'Travel Blogs - Tips, Guides & Inspiration',
// //       description: 'Read our travel blogs for expert tips, destination guides, budget travel advice, and offbeat travel inspiration.',
// //       keywords: 'travel blogs, travel tips, travel guides, budget travel, offbeat travel',
// //     })

// //     // Simulate API call
// //     setTimeout(() => {
// //       setBlogs(blogsMock)
// //       setFilteredBlogs(blogsMock)
// //       setLoading(false)
// //     }, 300)
// //   }, [])

// //   useEffect(() => {
// //     if (selectedCategory === 'all') {
// //       setFilteredBlogs(blogs)
// //     } else {
// //       const filtered = blogs.filter(b => b.category === selectedCategory)
// //       setFilteredBlogs(filtered)
// //     }
// //   }, [selectedCategory, blogs])

// //   return (
// //     <div className="min-h-screen pt-24 pb-12 bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4">
// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
// //             Travel Blog
// //           </h1>
// //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //             Your travel encyclopedia - tips, guides, and inspiration for every journey
// //           </p>
// //         </div>

// //         {/* Category Filters */}
// //         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
// //           <h3 className="font-semibold text-gray-700 mb-4">Filter by Category</h3>
// //           <div className="flex flex-wrap gap-3">
// //             {categories.map((category) => (
// //               <button
// //                 key={category}
// //                 onClick={() => setSelectedCategory(category)}
// //                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
// //                   selectedCategory === category
// //                     ? 'bg-primary-600 text-white shadow-md'
// //                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                 }`}
// //               >
// //                 {category === 'all' ? 'All Articles' : category}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Results Count */}
// //         <div className="mb-6">
// //           <p className="text-gray-600">
// //             Showing <span className="font-semibold text-gray-900">{filteredBlogs.length}</span> articles
// //             {selectedCategory !== 'all' && (
// //               <span> in <span className="font-semibold">{selectedCategory}</span></span>
// //             )}
// //           </p>
// //         </div>

// //         {/* Blog Grid */}
// //         {loading ? (
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {[1, 2, 3, 4, 5, 6].map((i) => (
// //               <div key={i} className="bg-white rounded-lg shadow-md h-96 animate-pulse" />
// //             ))}
// //           </div>
// //         ) : filteredBlogs.length === 0 ? (
// //           <div className="text-center py-20">
// //             <div className="text-6xl mb-4">📝</div>
// //             <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
// //             <p className="text-gray-600">Try selecting a different category</p>
// //           </div>
// //         ) : (
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {filteredBlogs.map((blog) => (
// //               <Card key={blog.id} data={blog} type="blog" />
// //             ))}
// //           </div>
// //         )}

// //         {/* Blog Categories Info */}
// //         <section className="mt-20 bg-white rounded-2xl shadow-lg p-8">
// //           <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 text-center">
// //             Our Blog Categories
// //           </h2>
// //           <div className="grid md:grid-cols-3 gap-6">
// //             {[
// //               {
// //                 name: 'Budget Travellers',
// //                 desc: 'Money-saving tips and affordable travel guides',
// //                 icon: '💰',
// //                 color: 'from-green-50 to-emerald-50',
// //               },
// //               {
// //                 name: 'Offbeat Explorers',
// //                 desc: 'Hidden gems and unexplored destinations',
// //                 icon: '🗺️',
// //                 color: 'from-purple-50 to-pink-50',
// //               },
// //               {
// //                 name: 'Decision Makers',
// //                 desc: 'Expert advice for planning your perfect trip',
// //                 icon: '🎯',
// //                 color: 'from-blue-50 to-cyan-50',
// //               },
// //               {
// //                 name: 'Family Travellers',
// //                 desc: 'Family-friendly destinations and tips',
// //                 icon: '👨‍👩‍👧‍👦',
// //                 color: 'from-orange-50 to-amber-50',
// //               },
// //               {
// //                 name: 'Seasonal Trends',
// //                 desc: 'Best places to visit each season',
// //                 icon: '🌸',
// //                 color: 'from-red-50 to-rose-50',
// //               },
// //               {
// //                 name: 'Travel Guides',
// //                 desc: 'Comprehensive destination guides',
// //                 icon: '📖',
// //                 color: 'from-indigo-50 to-blue-50',
// //               },
// //             ].map((cat) => (
// //               <div
// //                 key={cat.name}
// //                 className={`bg-gradient-to-br ${cat.color} rounded-xl p-6 hover:shadow-lg transition-shadow`}
// //               >
// //                 <div className="text-4xl mb-3">{cat.icon}</div>
// //                 <h3 className="font-bold text-lg text-gray-900 mb-2">{cat.name}</h3>
// //                 <p className="text-sm text-gray-600">{cat.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Newsletter Section */}
// //         <section className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
// //           <h2 className="font-display font-bold text-3xl mb-4">
// //             Subscribe to Our Newsletter
// //           </h2>
// //           <p className="text-lg mb-6 text-white/90">
// //             Get the latest travel tips, destination guides, and exclusive deals delivered to your inbox
// //           </p>
// //           <div className="max-w-md mx-auto flex gap-3">
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
// //             />
// //             <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
// //               Subscribe
// //             </button>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   )
// // }


// import { useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { updateMetaTags } from '../../utils/seo'
// import { Card } from '../../components/ui/Card'
// import { blogsMock } from '../../data/blogs.mock'

// export const BlogView = () => {
//   const [searchParams] = useSearchParams()
//   const [blogs, setBlogs] = useState([])
//   const [filteredBlogs, setFilteredBlogs] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState(
//     searchParams.get('category') || 'all'
//   )
//   const [loading, setLoading] = useState(true)

//   const categories = [
//     'all',
//     'Budget Travellers',
//     'Offbeat Explorers',
//     'Decision Makers',
//     'Group and Family Travellers',
//     'Seasonal Trends',
//   ]

//   /* 🔥 SINGLE animation source */
//   const itemVariants = {
//     hidden: { opacity: 0, y: 28 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
//     },
//     exit: {
//       opacity: 0,
//       y: 20,
//       transition: { duration: 0.25 },
//     },
//   }

//   useEffect(() => {
//     updateMetaTags({
//       title: 'Travel Blogs - Tips, Guides & Inspiration',
//       description:
//         'Read our travel blogs for expert tips, destination guides, budget travel advice, and offbeat travel inspiration.',
//       keywords:
//         'travel blogs, travel tips, travel guides, budget travel, offbeat travel',
//     })

//     setTimeout(() => {
//       setBlogs(blogsMock)
//       setFilteredBlogs(blogsMock)
//       setLoading(false)
//     }, 300)
//   }, [])

//   useEffect(() => {
//     if (selectedCategory === 'all') {
//       setFilteredBlogs(blogs)
//     } else {
//       setFilteredBlogs(blogs.filter(b => b.category === selectedCategory))
//     }
//   }, [selectedCategory, blogs])

//   return (
//     <div className="min-h-screen pt-24 pb-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
//             Travel Blog
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Your travel encyclopedia – tips, guides, and inspiration
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <h3 className="font-semibold text-gray-700 mb-4">
//             Filter by Category
//           </h3>
//           <div className="flex flex-wrap gap-3">
//             {categories.map(category => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                   selectedCategory === category
//                     ? 'bg-primary-600 text-white shadow'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {category === 'all' ? 'All Articles' : category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Blog Grid */}
//         {loading ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1,2,3,4,5,6].map(i => (
//               <div key={i} className="bg-white h-96 rounded-xl animate-pulse" />
//             ))}
//           </div>
//         ) : (
//           <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <AnimatePresence mode="popLayout">
//               {filteredBlogs.map(blog => (
//                 <motion.div
//                   key={blog.id}
//                   variants={itemVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   layout
//                 >
//                   <Card data={blog} type="blog" />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         )}

//       </div>
//     </div>
//   )
// }



import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { blogsMock } from '../../data/blogs.mock'

const TABS = ['All Stories', 'Europe', 'Asia', 'Americas', 'Africa']

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } 
  },
  exit: { opacity: 0, transition: { duration: 0.2 } }
}

export const BlogView = () => {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [activeTab, setActiveTab] = useState('All Stories')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating API fetch
    const timer = setTimeout(() => {
      setBlogs(blogsMock)
      setFilteredBlogs(blogsMock)
      setLoading(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (activeTab === 'All Stories') {
      setFilteredBlogs(blogs)
    } else {
      setFilteredBlogs(blogs.filter(b => b.region === activeTab))
    }
  }, [activeTab, blogs])

  const featured = blogs[0]
  const sideBlogs = blogs.slice(1, 5)

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* --- Header --- */}
        <header className="mb-10">
          <h1 className="text-[34px] font-black text-slate-900 mb-3 tracking-tight">Blog Journeys</h1>
          <p className="text-[14px] text-slate-500 max-w-lg leading-relaxed font-medium">
            Exploring the world, one story at a time. Join us as we traverse hidden 
            gems and iconic landmarks across the globe.
          </p>
        </header>

        {/* --- Recent Section --- */}
        <section className="mb-12">
          <h3 className="text-[18px] font-bold text-slate-900 mb-4">Recent</h3>
          <div className="flex flex-col md:flex-row border border-slate-100 rounded-[20px] overflow-hidden shadow-sm h-auto md:h-[380px]">
            
            {/* Main Featured (Left) */}
            <Link to={`/blogs/${featured?.slug}`} className="relative w-full md:w-[65%] group overflow-hidden">
              <img 
                src={featured?.image} 
                alt="featured" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-white text-[22px] font-bold leading-tight line-clamp-2">
                  {featured?.title}
                </h2>
              </div>
            </Link>

            {/* Side List (Right) */}
            <div className="w-full md:w-[35%] flex flex-col bg-white border-l border-slate-100">
              {sideBlogs.map((blog, i) => (
                <Link 
                  key={blog.id} 
                  to={`/blog/${blog.slug}`}
                  className={`flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors flex-1 ${i !== 3 ? 'border-b border-slate-100' : ''}`}
                >
                  <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={blog.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <p className="text-[12px] font-bold text-slate-700 leading-snug line-clamp-2 flex-1">
                    {blog.title}
                  </p>
                  <div className="w-6 h-6 rounded-full bg-[#1D75DE] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- Tabs --- */}
        <nav className="flex gap-8 border-b border-slate-100 mb-10 overflow-x-auto no-scrollbar">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[14px] font-bold whitespace-nowrap transition-all relative ${
                activeTab === tab ? 'text-[#0F172A]' : 'text-slate-400'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1D75DE]" />
              )}
            </button>
          ))}
        </nav>

        {/* --- Blog Feed --- */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <Link to={`/blogs/${blog.slug}`} className="group flex flex-col md:flex-row gap-8 items-start">
                  {/* Blog Image */}
                  <div className="w-full md:w-[400px] aspect-[16/9] rounded-[20px] overflow-hidden flex-shrink-0">
                    <img 
                      src={blog.image} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt="" 
                    />
                  </div>
                  
                  {/* Blog Content */}
                  <div className="flex-1 pt-1 h-full flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-[#1D75DE] mb-2 block">
                      {blog.category || 'HIDDEN GEMS'}
                    </span>
                    <h2 className="text-[26px] font-bold text-slate-900 mb-3 group-hover:text-[#1D75DE] transition-colors leading-tight">
                      {blog.title}
                    </h2>
                    <p className="text-slate-500 text-[15px] leading-relaxed line-clamp-3 mb-6">
                      {blog.excerpt || 'Discover the quiet corners of Italy\'s most famous coastline where time seems to stand still. We take you away from the crowds to the secret coves and family-run trattorias of Positano.'}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400 text-[13px] font-medium">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>May 12, 2024</span>
                        <span className="mx-1">•</span>
                        <span>8 min read</span>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full bg-[#1D75DE] flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-blue-200">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}