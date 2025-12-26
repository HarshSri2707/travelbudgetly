import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { updateMetaTags } from '../../utils/seo'
import { Image } from '../../components/ui/Image'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { destinationsMock } from '../../data/destinations.mock'
import { packagesMock } from '../../data/packages.mock'

export const DestinationDetailView = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [destination, setDestination] = useState(null)
  const [relatedPackages, setRelatedPackages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Simulate API call
    setTimeout(() => {
      const found = destinationsMock.find(d => d.slug === slug)
      
      if (!found) {
        navigate('/destinations')
        return
      }

      setDestination(found)
      
      // Find related packages
      const related = packagesMock.filter(pkg => 
        pkg.destination.toLowerCase().includes(found.name.toLowerCase())
      )
      setRelatedPackages(related)
      
      updateMetaTags({
        title: `${found.name} - Travel Guide & Packages`,
        description: found.description,
        keywords: `${found.name}, travel ${found.name}, visit ${found.name}`,
      })
      
      setLoading(false)
    }, 500)
  }, [slug, navigate])

  if (loading || !destination) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-2xl mb-8" />
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link to="/" className="text-primary-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/destinations" className="text-primary-600 hover:underline">Destinations</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{destination.name}</span>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
          <Image
            src={destination.image}
            alt={destination.name}
            eager
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="primary" className="bg-white/20 backdrop-blur-sm text-white">
                {destination.zone}
              </Badge>
              <Badge variant="accent" className="bg-white/20 backdrop-blur-sm text-white">
                ★ {destination.rating}
              </Badge>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-2">
              {destination.name}
            </h1>
            <p className="text-xl text-white/90">{destination.region}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {destination.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Best Time to Visit</div>
                  <div className="font-semibold text-gray-900">{destination.bestTime}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Typical Duration</div>
                  <div className="font-semibold text-gray-900">{destination.duration}</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            {destination.highlights && destination.highlights.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
                  Top Attractions
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{highlight}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Packages */}
            {relatedPackages.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                  Available Packages
                </h2>
                <div className="space-y-4">
                  {relatedPackages.map((pkg) => (
                    <div key={pkg.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{pkg.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{pkg.duration}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-primary-600">₹{pkg.price.toLocaleString()}</span>
                          {pkg.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                          )}
                          {pkg.discount && (
                            <Badge variant="accent">{pkg.discount}% OFF</Badge>
                          )}
                        </div>
                      </div>
                      <Link to={`/packages/${pkg.slug}`}>
                        <Button variant="primary">View Details</Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Starting Price</span>
                  <span className="font-bold text-primary-600 text-xl">₹{destination.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-gray-900">{destination.duration}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-semibold text-gray-900">★ {destination.rating}/5</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Best Time</span>
                  <span className="font-semibold text-gray-900 text-sm text-right">{destination.bestTime}</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Link to="/contact">
                  <Button variant="primary" className="w-full">
                    Plan Your Trip
                  </Button>
                </Link>
                <Link to="/packages">
                  <Button variant="secondary" className="w-full">
                    View Packages
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Need Help Planning?</h3>
              <p className="text-sm text-gray-700 mb-4">Our travel experts are here to help you create the perfect itinerary.</p>
              <Link to="/contact">
                <Button variant="accent" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}