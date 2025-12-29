import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { updateMetaTags } from '../../utils/seo'
import { Image } from '../../components/ui/Image'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { offbeatMock } from '../../data/offbeat.mock'

export const OffbeatView = () => {
  const { slug } = useParams()
  const [destinations, setDestinations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    updateMetaTags({
      title: 'Offbeat Travel Destinations - Hidden Gems of India',
      description: 'Discover offbeat and unexplored destinations like Spiti, Kalpa, Dhanushkodi, and more hidden gems.',
      keywords: 'offbeat travel, hidden gems india, unexplored places, spiti valley, kalpa',
    })

    // Simulate API call
    setTimeout(() => {
      setDestinations(offbeatMock)
      setLoading(false)
    }, 300)
  }, [])

  const selectedDestination = slug ? destinations.find(d => d.slug === slug) : null

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-gray-200 h-96 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Detail page for specific offbeat destination
  if (selectedDestination) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <Link to="/" className="text-primary-600 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/offbeat-travel" className="text-primary-600 hover:underline">Offbeat Travel</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{selectedDestination.name}</span>
          </div>

          {/* Hero Section */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={selectedDestination.image}
              alt={selectedDestination.name}
              eager
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Badge variant="accent" className="mb-3 bg-white/20 backdrop-blur-sm text-white">
                {selectedDestination.difficulty}
              </Badge>
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-2">
                {selectedDestination.name}
              </h1>
              <p className="text-xl text-white/90">{selectedDestination.tagline}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
                  About {selectedDestination.name}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {selectedDestination.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Best Time</div>
                    <div className="font-semibold text-gray-900">{selectedDestination.bestTime}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Altitude</div>
                    <div className="font-semibold text-gray-900">{selectedDestination.altitude}</div>
                  </div>
                </div>
              </div>

              {/* Attractions */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                  Must-Visit Attractions
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedDestination.attractions.map((attraction, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-gray-900">{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                  Things to Do
                </h2>
                <div className="flex flex-wrap gap-3">
                  {selectedDestination.activities.map((activity) => (
                    <Badge key={activity} variant="accent" className="text-base px-4 py-2">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Quick Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Starting Price</span>
                    <span className="font-bold text-primary-600 text-xl">₹{selectedDestination.price.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{selectedDestination.duration}</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Difficulty</span>
                    <Badge variant="accent">{selectedDestination.difficulty}</Badge>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600">Best Season</span>
                    <span className="font-semibold text-gray-900 text-sm text-right">{selectedDestination.bestTime}</span>
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
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Listing page - All offbeat destinations
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Offbeat Travel Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore India's hidden gems and unexplored places away from tourist crowds
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-accent-50 to-primary-50 border-l-4 border-accent-600 rounded-r-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🗺️</div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Why Choose Offbeat?</h3>
              <p className="text-gray-700">
                Experience authentic local culture, pristine natural beauty, and peaceful environments before they become mainstream tourist destinations.
              </p>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link key={dest.id} to={`/offbeat-travel/${dest.slug}`}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {dest.difficulty}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-bold text-xl text-white mb-1">{dest.name}</h3>
                    <p className="text-sm text-white/90">{dest.tagline}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dest.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">Starting from</div>
                      <div className="font-bold text-primary-600 text-lg">₹{dest.price.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{dest.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="font-display font-bold text-3xl mb-4">
            Ready for an Offbeat Adventure?
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Let us help you discover places that most travelers never see
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Plan Custom Trip
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}