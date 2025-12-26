import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card } from '../../../components/ui/Card'
import { Button } from '../../../components/ui/Button'
import { useIntersection } from '../../../hooks/useIntersection'
import { blogsMock } from '../../../data/blogs.mock'

export const LatestBlogs = () => {
  const { ref, hasIntersected } = useIntersection()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    if (hasIntersected) {
      setTimeout(() => {
        setBlogs(blogsMock.slice(0, 3))
      }, 300)
    }
  }, [hasIntersected])

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600">
            Travel tips, destination guides, and insider insights
          </p>
        </div>

        {!hasIntersected || blogs.length === 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {blogs.map((blog) => (
              <Card key={blog.id} data={blog} type="blog" />
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Link to="/blogs">
            <Button variant="primary" size="lg">
              Read More Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}