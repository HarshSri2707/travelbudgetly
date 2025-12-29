// import { useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { updateMetaTags } from '../../utils/seo'
// import { Card } from '../../components/ui/Card'
// import { Badge } from '../../components/ui/Badge'
// import { blogsMock } from '../../data/blogs.mock'

// export const BlogView = () => {
//   const [searchParams] = useSearchParams()
//   const [blogs, setBlogs] = useState([])
//   const [filteredBlogs, setFilteredBlogs] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
//   const [loading, setLoading] = useState(true)

//   const categories = [
//     'all',
//     'Budget Travellers',
//     'Offbeat Explorers',
//     'Decision Makers',
//     'Group and Family Travellers',
//     'Seasonal Trends',
//   ]

//   useEffect(() => {
//     updateMetaTags({
//       title: 'Travel Blogs - Tips, Guides & Inspiration',
//       description: 'Read our travel blogs for expert tips, destination guides, budget travel advice, and offbeat travel inspiration.',
//       keywords: 'travel blogs, travel tips, travel guides, budget travel, offbeat travel',
//     })

//     // Simulate API call
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
//       const filtered = blogs.filter(b => b.category === selectedCategory)
//       setFilteredBlogs(filtered)
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
//             Your travel encyclopedia - tips, guides, and inspiration for every journey
//           </p>
//         </div>

//         {/* Category Filters */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <h3 className="font-semibold text-gray-700 mb-4">Filter by Category</h3>
//           <div className="flex flex-wrap gap-3">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                   selectedCategory === category
//                     ? 'bg-primary-600 text-white shadow-md'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {category === 'all' ? 'All Articles' : category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-gray-600">
//             Showing <span className="font-semibold text-gray-900">{filteredBlogs.length}</span> articles
//             {selectedCategory !== 'all' && (
//               <span> in <span className="font-semibold">{selectedCategory}</span></span>
//             )}
//           </p>
//         </div>

//         {/* Blog Grid */}
//         {loading ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="bg-white rounded-lg shadow-md h-96 animate-pulse" />
//             ))}
//           </div>
//         ) : filteredBlogs.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="text-6xl mb-4">📝</div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
//             <p className="text-gray-600">Try selecting a different category</p>
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredBlogs.map((blog) => (
//               <Card key={blog.id} data={blog} type="blog" />
//             ))}
//           </div>
//         )}

//         {/* Blog Categories Info */}
//         <section className="mt-20 bg-white rounded-2xl shadow-lg p-8">
//           <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 text-center">
//             Our Blog Categories
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 name: 'Budget Travellers',
//                 desc: 'Money-saving tips and affordable travel guides',
//                 icon: '💰',
//                 color: 'from-green-50 to-emerald-50',
//               },
//               {
//                 name: 'Offbeat Explorers',
//                 desc: 'Hidden gems and unexplored destinations',
//                 icon: '🗺️',
//                 color: 'from-purple-50 to-pink-50',
//               },
//               {
//                 name: 'Decision Makers',
//                 desc: 'Expert advice for planning your perfect trip',
//                 icon: '🎯',
//                 color: 'from-blue-50 to-cyan-50',
//               },
//               {
//                 name: 'Family Travellers',
//                 desc: 'Family-friendly destinations and tips',
//                 icon: '👨‍👩‍👧‍👦',
//                 color: 'from-orange-50 to-amber-50',
//               },
//               {
//                 name: 'Seasonal Trends',
//                 desc: 'Best places to visit each season',
//                 icon: '🌸',
//                 color: 'from-red-50 to-rose-50',
//               },
//               {
//                 name: 'Travel Guides',
//                 desc: 'Comprehensive destination guides',
//                 icon: '📖',
//                 color: 'from-indigo-50 to-blue-50',
//               },
//             ].map((cat) => (
//               <div
//                 key={cat.name}
//                 className={`bg-gradient-to-br ${cat.color} rounded-xl p-6 hover:shadow-lg transition-shadow`}
//               >
//                 <div className="text-4xl mb-3">{cat.icon}</div>
//                 <h3 className="font-bold text-lg text-gray-900 mb-2">{cat.name}</h3>
//                 <p className="text-sm text-gray-600">{cat.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Newsletter Section */}
//         <section className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
//           <h2 className="font-display font-bold text-3xl mb-4">
//             Subscribe to Our Newsletter
//           </h2>
//           <p className="text-lg mb-6 text-white/90">
//             Get the latest travel tips, destination guides, and exclusive deals delivered to your inbox
//           </p>
//           <div className="max-w-md mx-auto flex gap-3">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
//             />
//             <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
//               Subscribe
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { updateMetaTags } from '../../utils/seo'
import { Card } from '../../components/ui/Card'
import { blogsMock } from '../../data/blogs.mock'

export const BlogView = () => {
  const [searchParams] = useSearchParams()
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  )
  const [loading, setLoading] = useState(true)

  const categories = [
    'all',
    'Budget Travellers',
    'Offbeat Explorers',
    'Decision Makers',
    'Group and Family Travellers',
    'Seasonal Trends',
  ]

  /* 🔥 SINGLE animation source */
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.25 },
    },
  }

  useEffect(() => {
    updateMetaTags({
      title: 'Travel Blogs - Tips, Guides & Inspiration',
      description:
        'Read our travel blogs for expert tips, destination guides, budget travel advice, and offbeat travel inspiration.',
      keywords:
        'travel blogs, travel tips, travel guides, budget travel, offbeat travel',
    })

    setTimeout(() => {
      setBlogs(blogsMock)
      setFilteredBlogs(blogsMock)
      setLoading(false)
    }, 300)
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredBlogs(blogs)
    } else {
      setFilteredBlogs(blogs.filter(b => b.category === selectedCategory))
    }
  }, [selectedCategory, blogs])

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Travel Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your travel encyclopedia – tips, guides, and inspiration
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="font-semibold text-gray-700 mb-4">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white h-96 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map(blog => (
                <motion.div
                  key={blog.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <Card data={blog} type="blog" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </div>
  )
}
