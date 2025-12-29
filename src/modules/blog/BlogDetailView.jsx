import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { updateMetaTags } from '../../utils/seo'
import { Image } from '../../components/ui/Image'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { blogsMock } from '../../data/blogs.mock'

export const BlogDetailView = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Simulate API call
    setTimeout(() => {
      const found = blogsMock.find(b => b.slug === slug)
      
      if (!found) {
        navigate('/blogs')
        return
      }

      setBlog(found)
      
      // Find related blogs
      const related = blogsMock
        .filter(b => b.category === found.category && b.id !== found.id)
        .slice(0, 3)
      setRelatedBlogs(related)
      
      updateMetaTags({
        title: found.title,
        description: found.excerpt,
        keywords: `${found.category}, travel blog, ${found.title}`,
      })
      
      setLoading(false)
    }, 500)
  }, [slug, navigate])

  if (loading || !blog) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-2xl mb-8" />
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <article className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link to="/" className="text-primary-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/blogs" className="text-primary-600 hover:underline">Blogs</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{blog.title}</span>
        </div>

        {/* Blog Header */}
        <header className="mb-8">
          <Badge variant="primary" className="mb-4">
            {blog.category}
          </Badge>
          
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <span className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{blog.author}</span>
            </span>
            <span>•</span>
            <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          {/* Summary Box - As per document */}
          {blog.summary && (
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 border-l-4 border-primary-600 rounded-r-xl p-6 mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-3">📋 Quick Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(blog.summary).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="font-semibold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            eager
            className="w-full h-full"
          />
        </div>

        {/* Blog Content */}
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {blog.excerpt}
            </p>
            
            {/* Sample content structure */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Whether you're a seasoned traveler or planning your first adventure, understanding the nuances of budget travel, destination selection, and planning can make all the difference in your experience.
              </p>
              
              <h2 className="font-display font-bold text-2xl text-gray-900 mt-8 mb-4">
                Getting Started
              </h2>
              <p>
                Planning a memorable trip requires careful consideration of multiple factors including budget, season, accommodation, and local experiences. Here's what you need to know before you embark on your journey.
              </p>

              <h2 className="font-display font-bold text-2xl text-gray-900 mt-8 mb-4">
                Key Considerations
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Research your destination thoroughly before booking</li>
                <li>Compare prices across multiple platforms</li>
                <li>Read recent reviews from verified travelers</li>
                <li>Check for hidden costs in package deals</li>
                <li>Book accommodation with flexible cancellation policies</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-blue-900 mb-2">💡 Pro Tip</p>
                <p className="text-blue-800">
                  Always book major components like flights and hotels separately if you find better deals. Package deals aren't always the cheapest option!
                </p>
              </div>

              <h2 className="font-display font-bold text-2xl text-gray-900 mt-8 mb-4">
                Final Thoughts
              </h2>
              <p>
                Remember, the best travel experiences come from thorough planning, realistic budgeting, and maintaining flexibility. Don't hesitate to reach out to travel experts when planning complex itineraries.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-700 mr-2">Tags:</span>
              {[blog.category, 'Travel Tips', 'India Travel', 'Budget Travel'].map((tag) => (
                <Badge key={tag} variant="default" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Author Card */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {blog.author.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900 mb-1">About {blog.author}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {blog.author} is a passionate travel writer and explorer with years of experience discovering hidden gems and sharing travel insights. Their articles focus on making travel accessible and enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Card key={relatedBlog.id} data={relatedBlog} type="blog" />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-center text-white">
          <h3 className="font-display font-bold text-2xl mb-4">
            Ready to Plan Your Trip?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Let our travel experts help you create the perfect itinerary
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </article>
    </div>
  )
}