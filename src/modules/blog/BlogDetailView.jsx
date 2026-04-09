// // import { useState, useEffect } from 'react'
// // import { useParams, useNavigate, Link } from 'react-router-dom'
// // import { updateMetaTags } from '../../utils/seo'
// // import { Image } from '../../components/ui/Image'
// // import { Badge } from '../../components/ui/Badge'
// // import { Card } from '../../components/ui/Card'
// // import { blogsMock } from '../../data/blogs.mock'

// // export const BlogDetailView = () => {
// //   const { slug } = useParams()
// //   const navigate = useNavigate()
// //   const [blog, setBlog] = useState(null)
// //   const [relatedBlogs, setRelatedBlogs] = useState([])
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     window.scrollTo(0, 0)
    
// //     // Simulate API call
// //     setTimeout(() => {
// //       const found = blogsMock.find(b => b.slug === slug)
      
// //       if (!found) {
// //         navigate('/blogs')
// //         return
// //       }

// //       setBlog(found)
      
// //       // Find related blogs
// //       const related = blogsMock
// //         .filter(b => b.category === found.category && b.id !== found.id)
// //         .slice(0, 3)
// //       setRelatedBlogs(related)
      
// //       updateMetaTags({
// //         title: found.title,
// //         description: found.excerpt,
// //         keywords: `${found.category}, travel blog, ${found.title}`,
// //       })
      
// //       setLoading(false)
// //     }, 500)
// //   }, [slug, navigate])

// //   if (loading || !blog) {
// //     return (
// //       <div className="min-h-screen pt-24 pb-12">
// //         <div className="max-w-4xl mx-auto px-4">
// //           <div className="animate-pulse">
// //             <div className="h-96 bg-gray-200 rounded-2xl mb-8" />
// //             <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
// //             <div className="h-4 bg-gray-200 rounded w-full mb-2" />
// //             <div className="h-4 bg-gray-200 rounded w-5/6" />
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen pt-24 pb-12 bg-gray-50">
// //       <article className="max-w-4xl mx-auto px-4">
// //         {/* Breadcrumb */}
// //         <div className="mb-6 text-sm">
// //           <Link to="/" className="text-primary-600 hover:underline">Home</Link>
// //           <span className="mx-2 text-gray-400">/</span>
// //           <Link to="/blogs" className="text-primary-600 hover:underline">Blogs</Link>
// //           <span className="mx-2 text-gray-400">/</span>
// //           <span className="text-gray-600">{blog.title}</span>
// //         </div>

// //         {/* Blog Header */}
// //         <header className="mb-8">
// //           <Badge variant="primary" className="mb-4">
// //             {blog.category}
// //           </Badge>
          
// //           <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
// //             {blog.title}
// //           </h1>
          
// //           <div className="flex items-center gap-4 text-gray-600 mb-6">
// //             <span className="flex items-center gap-2">
// //               <span className="font-semibold text-gray-900">{blog.author}</span>
// //             </span>
// //             <span>•</span>
// //             <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
// //             <span>•</span>
// //             <span>{blog.readTime}</span>
// //           </div>

// //           {/* Summary Box - As per document */}
// //           {blog.summary && (
// //             <div className="bg-gradient-to-br from-primary-50 to-accent-50 border-l-4 border-primary-600 rounded-r-xl p-6 mb-8">
// //               <h3 className="font-bold text-lg text-gray-900 mb-3">📋 Quick Summary</h3>
// //               <div className="grid grid-cols-2 gap-4">
// //                 {Object.entries(blog.summary).map(([key, value]) => (
// //                   <div key={key}>
// //                     <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
// //                     <div className="font-semibold text-gray-900">{value}</div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </header>

// //         {/* Featured Image */}
// //         <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
// //           <Image
// //             src={blog.image}
// //             alt={blog.title}
// //             eager
// //             className="w-full h-full"
// //           />
// //         </div>

// //         {/* Blog Content */}
// //         <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-12">
// //           <div className="prose prose-lg max-w-none">
// //             <p className="text-xl text-gray-700 leading-relaxed mb-6">
// //               {blog.excerpt}
// //             </p>
            
// //             {/* Sample content structure */}
// //             <div className="space-y-6 text-gray-700 leading-relaxed">
// //               <p>
// //                 Whether you're a seasoned traveler or planning your first adventure, understanding the nuances of budget travel, destination selection, and planning can make all the difference in your experience.
// //               </p>
              
// //               <h2 className="font-display font-bold text-2xl text-gray-900 mt-8 mb-4">
// //                 Getting Started
// //               </h2>
// //               <p>
// //                 Planning a memorable trip requires careful consideration of multiple factors including budget, season, accommodation, and local experiences. Here's what you need to know before you embark on your journey.
// //               </p>

// //               <h2 className="font-display font-bold text-2xl text-gray-900 mt-8 mb-4">
// //                 Key Considerations
// //               </h2>
// //               <ul className="list-disc list-inside space-y-2 ml-4">
// //                 <li>Research your destination thoroughly before booking</li>
// //                 <li>Compare prices across multiple platforms</li>
// //                 <li>Read recent reviews from verified travelers</li>
// //                 <li>Check for hidden costs in package deals</li>
// //                 <li>Book accommodation with flexible cancellation policies</li>
// //               </ul>

// //               <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
// //                 <p className="font-semibold text-blue-900 mb-2">💡 Pro Tip</p>
// //                 <p className="text-blue-800">
// //                   Always book major components like flights and hotels separately if you find better deals. Package deals aren't always the cheapest option!
// //                 </p>
// //               </div>

// //               <h2 className="font-display font-bold text-2xl text-gray-900 mt-8 mb-4">
// //                 Final Thoughts
// //               </h2>
// //               <p>
// //                 Remember, the best travel experiences come from thorough planning, realistic budgeting, and maintaining flexibility. Don't hesitate to reach out to travel experts when planning complex itineraries.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Tags */}
// //           <div className="mt-12 pt-8 border-t border-gray-200">
// //             <div className="flex flex-wrap gap-2">
// //               <span className="text-sm font-semibold text-gray-700 mr-2">Tags:</span>
// //               {[blog.category, 'Travel Tips', 'India Travel', 'Budget Travel'].map((tag) => (
// //                 <Badge key={tag} variant="default" className="text-xs">
// //                   {tag}
// //                 </Badge>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Author Card */}
// //         <div className="bg-white rounded-xl shadow-md p-6 mb-12">
// //           <div className="flex items-start gap-4">
// //             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
// //               {blog.author.charAt(0)}
// //             </div>
// //             <div className="flex-1">
// //               <h3 className="font-bold text-lg text-gray-900 mb-1">About {blog.author}</h3>
// //               <p className="text-gray-600 text-sm leading-relaxed">
// //                 {blog.author} is a passionate travel writer and explorer with years of experience discovering hidden gems and sharing travel insights. Their articles focus on making travel accessible and enjoyable for everyone.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Related Blogs */}
// //         {relatedBlogs.length > 0 && (
// //           <section className="mb-12">
// //             <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
// //               Related Articles
// //             </h2>
// //             <div className="grid md:grid-cols-3 gap-6">
// //               {relatedBlogs.map((relatedBlog) => (
// //                 <Card key={relatedBlog.id} data={relatedBlog} type="blog" />
// //               ))}
// //             </div>
// //           </section>
// //         )}

// //         {/* CTA Section */}
// //         <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-center text-white">
// //           <h3 className="font-display font-bold text-2xl mb-4">
// //             Ready to Plan Your Trip?
// //           </h3>
// //           <p className="text-lg mb-6 text-white/90">
// //             Let our travel experts help you create the perfect itinerary
// //           </p>
// //           <Link to="/contact">
// //             <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
// //               Get Started
// //             </button>
// //           </Link>
// //         </div>
// //       </article>
// //     </div>
// //   )
// // }

// import { useState, useEffect } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { updateMetaTags } from '../../utils/seo'
// import { blogsMock } from '../../data/blogs.mock'

// export const BlogDetailView = () => {
//   const { slug } = useParams()
//   const navigate = useNavigate()
//   const [blog, setBlog] = useState(null)
//   const [relatedBlogs, setRelatedBlogs] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [email, setEmail] = useState('')

//   useEffect(() => {
//     window.scrollTo(0, 0)
//     // Simulated API call duration
//     const timer = setTimeout(() => {
//       const found = blogsMock.find(b => b.slug === slug)
//       if (!found) { navigate('/blogs'); return }

//       setBlog(found)
//       // Filter 3 related blogs
//       setRelatedBlogs(
//         blogsMock.filter(b => b.id !== found.id).slice(0, 3)
//       )
      
//       updateMetaTags({
//         title: `${found.title} - Blog Journeys`,
//         description: found.excerpt,
//       })
//       setLoading(false)
//     }, 400)
//     return () => clearTimeout(timer)
//   }, [slug, navigate])

//   if (loading || !blog) return <BlogSkeleton />

//   return (
//     <div className="min-h-screen bg-white pt-24 pb-20">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* --- Brand Heading --- */}
//         <h1 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Blog Journeys</h1>

//         <article>
//           {/* Hero Image - Image 3 style proportions */}
//           <div className="w-full aspect-[16/9] rounded-[24px] overflow-hidden mb-10 shadow-sm border border-slate-50">
//             <img 
//               src={blog.image} 
//               className="w-full h-full object-cover" 
//               alt={blog.title} 
//             />
//           </div>

//           {/* Meta Row: Date & Read Time */}
//           <div className="flex items-center gap-3 text-slate-400 text-[13px] font-medium mb-4">
//             <span className="flex items-center gap-1.5">
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               {new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//             </span>
//             <span>•</span>
//             <span>{blog.readTime}</span>
//           </div>

//           {/* Category Badge */}
//           <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1D75DE] mb-4 block">
//             {blog.category || 'HIDDEN GEMS'}
//           </span>

//           {/* Title */}
//           <h2 className="text-[34px] md:text-[48px] font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
//             {blog.title}
//           </h2>

//           {/* Main Content Body */}
//           <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:text-[17px] prose-p:leading-[1.85] space-y-8">
//             <p className="text-[19px] font-medium text-slate-700 leading-relaxed">
//               {blog.excerpt}
//             </p>
            
//             <p>
//               Discover the quiet corners of Italy's most famous coastline where time seems to stand still. 
//               We take you away from the crowds to the secret coves and family-run trattorias of Positano.
//               Fugit voluptatem est quis quaesi qui non sunt esse. Officiis ad quisquam voluptatem aspernatur 
//               qui minus exercitationem facilis alias. Voluptas suscipit et rerum aut consequatur.
//             </p>

//             <p>
//               Ab sunt alias dolorem eligendi animi. Dicta non et laudantium inventore mollia voluptatem. 
//               Quos voluptate dignissimos repellat quibusdam rerum mollitia ast in porro. Magni ut laudantium 
//               quae qui. Nobis delectus hic ipsam sed ea in accusantium. Repellat fuga possimus veritatis 
//               veniam tempore iste at voluptatem voluptatem.
//             </p>

//             <p>
//               Suscipit non voluptatum molestiae expedita eaque velit fuga sunt. Quidem omnis quaerat repellat, 
//               ipsum architecto tempora non ut. Qui ullam repellendus vero cumque distinctio. Fugit voluptatem 
//               est quis quaesi qui non sunt esse. Officiis ad quisquam voluptatem aspernatur qui minus 
//               exercitationem facilis alias.
//             </p>
//           </div>

//           {/* --- Newsletter CTA (Image 2 style) --- */}
//           <div className="mt-16 mb-20 bg-[#0051A1] rounded-[28px] p-10 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
//             {/* Background Decoration */}
//             <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
//             <div className="relative z-10 max-w-sm">
//               <h3 className="text-white text-[30px] md:text-[34px] font-bold leading-tight mb-4">
//                 Ready to start your next journey?
//               </h3>
//               <p className="text-blue-100/80 text-[15px]">
//                 Join 50,000+ travelers receiving our best deals and hidden gem recommendations weekly.
//               </p>
//             </div>

//             <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 className="px-6 py-4 rounded-xl bg-white text-slate-900 text-sm outline-none w-full sm:w-64 focus:ring-4 focus:ring-white/20 transition-all"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button className="px-8 py-4 rounded-xl bg-white text-[#0051A1] font-bold text-sm hover:bg-blue-50 transition-all whitespace-nowrap shadow-xl active:scale-95">
//                 Subscribe Now
//               </button>
//             </div>
//           </div>

//           {/* --- Related Blogs Grid (Image 3 style) --- */}
//           <section className="pt-12 border-t border-slate-100">
//             <h4 className="text-[24px] font-black text-slate-900 mb-10">Travel Blogs</h4>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//               {relatedBlogs.map(rb => (
//                 <Link key={rb.id} to={`/blog/${rb.slug}`} className="group block">
//                   <div className="aspect-[4/3] rounded-[22px] overflow-hidden mb-5 shadow-sm border border-slate-50">
//                     <img 
//                       src={rb.image} 
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                       alt={rb.title} 
//                     />
//                   </div>
//                   <h5 className="font-bold text-slate-900 text-[16px] leading-snug mb-4 group-hover:text-[#1D75DE] transition-colors line-clamp-2">
//                     {rb.title}
//                   </h5>
//                   <div className="flex items-center justify-between">
//                     <span className="text-[12px] font-semibold text-slate-400">March 11, 2026</span>
//                     <div className="w-9 h-9 rounded-full bg-[#1D75DE] flex items-center justify-center shadow-md group-hover:bg-[#165bb0] transition-colors">
//                       <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         </article>
//       </div>
//     </div>
//   )
// }

// const BlogSkeleton = () => (
//   <div className="min-h-screen bg-white pt-24 animate-pulse">
//     <div className="max-w-[900px] mx-auto px-6">
//       <div className="h-10 w-48 bg-slate-100 rounded mb-10" />
//       <div className="w-full aspect-[16/9] bg-slate-100 rounded-[24px] mb-8" />
//       <div className="h-6 w-32 bg-slate-100 rounded mb-4" />
//       <div className="h-12 w-3/4 bg-slate-100 rounded mb-10" />
//       <div className="space-y-4">
//         <div className="h-4 w-full bg-slate-50 rounded" />
//         <div className="h-4 w-full bg-slate-50 rounded" />
//         <div className="h-4 w-2/3 bg-slate-50 rounded" />
//       </div>
//     </div>
//   </div>
// )


// import { useState, useEffect } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import { updateMetaTags } from '../../utils/seo'
// import { blogsMock } from '../../data/blogs.mock'

// export const BlogDetailView = () => {
//   const { slug } = useParams()
//   const navigate = useNavigate()
//   const [blog, setBlog] = useState(null)
//   const [relatedBlogs, setRelatedBlogs] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [email, setEmail] = useState('')

//   useEffect(() => {
//     window.scrollTo(0, 0)
    
//     const timer = setTimeout(() => {
//       const found = blogsMock.find(b => b.slug === slug)
//       if (!found) {
//         navigate('/blogs')
//         return
//       }

//       setBlog(found)
      
//       // Related blogs fetch based on category
//       const related = blogsMock
//         .filter(b => b.category === found.category && b.id !== found.id)
//         .slice(0, 3)
      
//       // Agar same category ke related nahi mile toh koi bhi 3 dikha do
//       setRelatedBlogs(related.length > 0 ? related : blogsMock.filter(b => b.id !== found.id).slice(0, 3))

//       updateMetaTags({
//         title: `${found.title} - Blog Journeys`,
//         description: found.excerpt,
//       })
//       setLoading(false)
//     }, 400)

//     return () => clearTimeout(timer)
//   }, [slug, navigate])

//   if (loading || !blog) return <BlogSkeleton />

//   return (
//     <div className="min-h-screen bg-white pt-24 pb-20">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* --- Brand Heading --- */}
//         <h1 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Blog Journeys</h1>

//         <article>
//           {/* Hero Image */}
//           <div className="w-full aspect-[16/9] rounded-[24px] overflow-hidden mb-10 shadow-sm border border-slate-50">
//             <img 
//               src={blog.image} 
//               className="w-full h-full object-cover" 
//               alt={blog.title} 
//             />
//           </div>

//           {/* Meta Row: Dynamic Date & Read Time */}
//           <div className="flex items-center gap-3 text-slate-400 text-[13px] font-medium mb-4">
//             <span className="flex items-center gap-1.5">
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               {new Date(blog.publishDate).toLocaleDateString('en-US', { 
//                 month: 'long', 
//                 day: 'numeric', 
//                 year: 'numeric' 
//               })}
//             </span>
//             <span>•</span>
//             <span>{blog.readTime}</span>
//           </div>

//           {/* Dynamic Category Badge */}
//           <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1D75DE] mb-4 block">
//             {blog.category}
//           </span>

//           {/* Dynamic Title */}
//           <h2 className="text-[34px] md:text-[48px] font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
//             {blog.title}
//           </h2>

//           {/* Main Content Body - All coming from mock data */}
//           <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:text-[17px] prose-p:leading-[1.85] space-y-8">
//             <p className="text-[19px] font-medium text-slate-700 leading-relaxed">
//               {blog.excerpt}
//             </p>
            
//             {/* Agar aapka mock data content arrays me h ya long string me 
//                toh yaha dangerouslySetInnerHTML use kr skte ho ya 
//                sirf blog.content render krdo.
//             */}
//             <div className="whitespace-pre-line">
//               {blog.content || blog.description || blog.excerpt}
//             </div>
//           </div>

//           {/* --- Newsletter CTA --- */}
//           <div className="mt-16 mb-20 bg-[#0051A1] rounded-[28px] p-10 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
//             <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
//             <div className="relative z-10 max-w-sm">
//               <h3 className="text-white text-[30px] md:text-[34px] font-bold leading-tight mb-4">
//                 Ready to start your next journey?
//               </h3>
//               <p className="text-blue-100/80 text-[15px]">
//                 Join 50,000+ travelers receiving our best deals and hidden gem recommendations weekly.
//               </p>
//             </div>

//             <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 className="px-6 py-4 rounded-xl bg-white text-slate-900 text-sm outline-none w-full sm:w-64 focus:ring-4 focus:ring-white/20 transition-all"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button 
//                 onClick={() => setEmail('')}
//                 className="px-8 py-4 rounded-xl bg-white text-[#0051A1] font-bold text-sm hover:bg-blue-50 transition-all whitespace-nowrap shadow-xl active:scale-95"
//               >
//                 Subscribe Now
//               </button>
//             </div>
//           </div>

//           {/* --- Related Blogs Grid (Fully Dynamic) --- */}
//           <section className="pt-12 border-t border-slate-100">
//             <h4 className="text-[24px] font-black text-slate-900 mb-10">Travel Blogs</h4>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//               {relatedBlogs.map(rb => (
//                 <Link key={rb.id} to={`/blogs/${rb.slug}`} className="group block">
//                   <div className="aspect-[4/3] rounded-[22px] overflow-hidden mb-5 shadow-sm border border-slate-50">
//                     <img 
//                       src={rb.image} 
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                       alt={rb.title} 
//                     />
//                   </div>
//                   <h5 className="font-bold text-slate-900 text-[16px] leading-snug mb-4 group-hover:text-[#1D75DE] transition-colors line-clamp-2">
//                     {rb.title}
//                   </h5>
//                   <div className="flex items-center justify-between">
//                     <span className="text-[12px] font-semibold text-slate-400">
//                       {new Date(rb.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//                     </span>
//                     <div className="w-9 h-9 rounded-full bg-[#1D75DE] flex items-center justify-center shadow-md group-hover:bg-[#165bb0] transition-colors">
//                       <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         </article>
//       </div>
//     </div>
//   )
// }

// const BlogSkeleton = () => (
//   <div className="min-h-screen bg-white pt-24 animate-pulse">
//     <div className="max-w-[900px] mx-auto px-6">
//       <div className="h-10 w-48 bg-slate-100 rounded mb-10" />
//       <div className="w-full aspect-[16/9] bg-slate-100 rounded-[24px] mb-8" />
//       <div className="h-6 w-32 bg-slate-100 rounded mb-4" />
//       <div className="h-12 w-3/4 bg-slate-100 rounded mb-10" />
//       <div className="space-y-4">
//         <div className="h-4 w-full bg-slate-50 rounded" />
//         <div className="h-4 w-full bg-slate-50 rounded" />
//       </div>
//     </div>
//   </div>
// )


import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { updateMetaTags } from '../../utils/seo'
import { blogsMock } from '../../data/blogs.mock'

/* ── helpers ──────────────────────────────────────────────────── */
const truncateTitle = (title = '', maxWords = 7) => {
  const words = title.trim().split(/\s+/)
  if (words.length <= maxWords) return title
  return words.slice(0, maxWords).join(' ') + '...'
}

const getAllCategories = () =>
  [...new Set(blogsMock.map(b => b.category).filter(Boolean))]

const getAllTags = (currentBlog) => {
  const freq = {}
  blogsMock.forEach(b => {
    ;(b.tags || []).forEach(tag => {
      if (!tag) return
      freq[tag] = (freq[tag] || 0) + 1
    })
  })
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).map(([t]) => t)
  if (sorted.length > 0) return sorted.slice(0, 8)
  return currentBlog?.tags?.length > 0
    ? currentBlog.tags
    : ['Adventure', 'Budget Travel', 'Culture', 'Beach', 'Heritage', 'Wildlife']
}

/* ── Skeleton ─────────────────────────────────────────────────── */
const BlogSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin h-12 w-12 border-4 border-blue-700 border-t-transparent rounded-full mx-auto" />
      <p className="mt-6 text-lg text-gray-600">Loading article...</p>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export const BlogDetailView = () => {
  const { slug }   = useParams()
  const navigate   = useNavigate()
  const [blog,         setBlog]         = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [loading,      setLoading]      = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const timer = setTimeout(() => {
      const found = blogsMock.find(b => b.slug === slug)
      if (!found) { navigate('/blogs'); return }

      setBlog(found)
      const related = blogsMock.filter(b => b.category === found.category && b.id !== found.id).slice(0, 4)
      setRelatedBlogs(related.length > 0 ? related : blogsMock.filter(b => b.id !== found.id).slice(0, 4))

      updateMetaTags({
        title: `${found.title} - Blog Journeys`,
        description: found.excerpt,
      })
      setLoading(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [slug, navigate])

  if (loading || !blog) return <BlogSkeleton />

  const allCategories = getAllCategories()
  const allTags       = getAllTags(blog)
  const shareUrl      = typeof window !== 'undefined' ? window.location.href : ''

  /* ── Sidebar ─────────────────────────────────────────────────── */
  const Sidebar = () => (
    <aside className="w-full lg:w-[260px] xl:w-[280px] shrink-0">
      <div className="space-y-7">

        {/* Related Blogs */}
        <div>
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">Related Blogs</h3>
          <div className="space-y-2.5">
            {relatedBlogs.length === 0 ? (
              <p className="text-sm text-gray-400">No related posts found.</p>
            ) : relatedBlogs.map(item => (
              <button
                key={item.id}
                onClick={() => navigate(`/blogs/${item.slug}`)}
                className="flex items-start gap-1.5 text-left w-full group"
              >
                <svg className="w-2.5 h-2.5 mt-[3px] shrink-0 text-[#1D75DE]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <p className="text-[13px] text-[#1D75DE] group-hover:underline leading-snug">
                  {truncateTitle(item.title, 7)}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Categories */}
        <div>
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">Categories</h3>
          <div>
            {allCategories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => navigate(`/blogs?category=${encodeURIComponent(cat)}`)}
                className={`flex items-center gap-1.5 text-left w-full group py-2.5 ${
                  i < allCategories.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <svg className="w-2.5 h-2.5 shrink-0 text-[#1D75DE]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[13px] text-[#1D75DE] group-hover:underline font-medium">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Popular Tags */}
        <div>
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => navigate(`/blogs?tag=${encodeURIComponent(tag)}`)}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-md hover:bg-blue-50 hover:text-[#1D75DE] transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

      </div>
    </aside>
  )

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Back button ─────────────────────────────────────────── */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 transition mb-5 text-sm"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          <span>Back</span>
        </button>

        {/* ── Banner — 16/9 aspect ratio, no border-radius ─────────── */}
        <div className="w-full aspect-[16/9] overflow-hidden mb-5">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover rounded-2xl"
            loading="eager"
          />
        </div>

        {/* ── Title ────────────────────────────────────────────────── */}
        <h1 className="text-[34px] md:text-[48px] font-bold text-slate-900 leading-[1.15] tracking-tight mb-4">
          {blog.title.includes(':') ? (
            <>
              <strong>{blog.title.split(':')[0]}:</strong>
              {blog.title.slice(blog.title.indexOf(':') + 1)}
            </>
          ) : blog.title}
        </h1>

        {/* ── Divider ──────────────────────────────────────────────── */}
        <div className="border-t border-gray-200 mb-6" />

        {/* ── 2-col: article + sidebar ─────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Article ─────────────────────────────────────────────── */}
          <main className="flex-1 min-w-0">

            {/* Author row */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-gray-200">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(blog.author || 'Author')}&background=0051A1&color=fff&size=80`}
                  alt={blog.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 text-[13px] text-gray-600">
                <span>By <strong className="text-gray-900">{blog.author || 'Travel Expert'}</strong></span>
                <span className="text-gray-300">|</span>
                <span>
                  {new Date(blog.publishDate).toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric',
                  })}
                </span>
              </div>
            </div>

            {/* Blog body */}
            <div className="prose prose-slate max-w-none
              [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-slate-900
              [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-slate-900
              [&_p]:text-slate-600 [&_p]:leading-[1.85] [&_p]:mb-4 [&_p]:text-[17px]
              [&_ul]:pl-5 [&_li]:mb-1.5 [&_li]:text-[15px] [&_li]:text-slate-600
              [&_ol]:pl-5
              [&_blockquote]:border-l-4 [&_blockquote]:border-[#1D75DE] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-slate-500
              [&_img]:max-w-full [&_img]:rounded-lg [&_img]:my-6
              [&_strong]:text-[#1D75DE]
              [&_a]:text-[#1D75DE] [&_a]:font-semibold [&_a]:no-underline [&_a:hover]:underline
            ">
              {/* Excerpt — always shown on top */}
              <p className="text-[19px] font-medium text-slate-700 leading-relaxed mb-6">
                {blog.excerpt}
              </p>

              {blog.content ? (
                // If content has HTML tags render as HTML, else split by double newline into paragraphs
                /<[a-z][\s\S]*>/i.test(blog.content) ? (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                ) : (
                  blog.content
                    .split(/\n\s*\n/)
                    .map(para => para.trim())
                    .filter(Boolean)
                    .map((para, i) => (
                      <p key={i} className="text-[17px] text-slate-600 leading-[1.85] mb-4">
                        {para}
                      </p>
                    ))
                )
              ) : (
                <>
                  <p>
                    Whether you're a seasoned traveler or planning your first adventure,
                    understanding the nuances of budget travel, destination selection,
                    and planning can make all the difference in your experience.
                  </p>
                  <h2>Getting Started</h2>
                  <p>
                    Planning a memorable trip requires careful consideration of multiple factors
                    including budget, season, accommodation, and local experiences. Here's what
                    you need to know before you embark on your journey.
                  </p>
                  <h2>Key Considerations</h2>
                  <ul>
                    <li>Research your destination thoroughly before booking</li>
                    <li>Compare prices across multiple platforms</li>
                    <li>Read recent reviews from verified travelers</li>
                    <li>Check for hidden costs in package deals</li>
                    <li>Book accommodation with flexible cancellation policies</li>
                  </ul>
                  <blockquote>
                    Always book major components like flights and hotels separately if you
                    find better deals. Package deals aren't always the cheapest option!
                  </blockquote>
                  <h2>The Long-Term Power of Branding</h2>
                  <p>
                    Travel experiences compound over time. Each trip teaches you something
                    new about navigating the world efficiently and joyfully.
                  </p>
                  <h2>Finding the Perfect Strategy</h2>
                  <p>
                    Remember, the best travel experiences come from thorough planning,
                    realistic budgeting, and maintaining flexibility. Don't hesitate to
                    reach out to travel experts when planning complex itineraries.
                  </p>
                </>
              )}
            </div>

            {/* Social share — colored rounded-lg squares */}
            <div className="flex items-center gap-2 mt-8 pt-5 border-t border-gray-100">
              {[
                {
                  label: 'Facebook', bg: '#1877F2',
                  href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                  icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="white" />,
                },
                {
                  label: 'Twitter', bg: '#1DA1F2',
                  href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
                  icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="white" />,
                },
                {
                  label: 'LinkedIn', bg: '#0A66C2',
                  href: `https://linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}`,
                  icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" fill="white" /><rect x="2" y="9" width="4" height="12" fill="white" /><circle cx="4" cy="4" r="2" fill="white" /></>,
                },
                {
                  label: 'WhatsApp', bg: '#25D366',
                  href: `https://wa.me/?text=${encodeURIComponent(shareUrl)}`,
                  icon: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="white" />,
                },
                {
                  label: 'Email', bg: '#6B7280',
                  href: `mailto:?subject=${encodeURIComponent(blog.title)}&body=${encodeURIComponent(shareUrl)}`,
                  icon: <><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="white" strokeWidth="1.5" /><path d="M2 7l10 6 10-6" stroke="white" strokeWidth="1.5" fill="none" /></>,
                },
              ].map(({ label, bg, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:opacity-85 hover:shadow-md transition"
                  style={{ backgroundColor: bg }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>

          </main>

          {/* ── Sidebar ─────────────────────────────────────────────── */}
          <Sidebar />

        </div>
      </div>
    </div>
  )
}