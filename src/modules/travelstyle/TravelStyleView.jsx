import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { updateMetaTags } from '../../utils/seo'
import { Image } from '../../components/ui/Image'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { travelStylesMock } from '../../data/travelStyles.mock'

export const TravelStyleView = () => {
  const { type } = useParams()
  const [styles, setStyles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    updateMetaTags({
      title: 'Travel Styles - Find Your Perfect Travel Type',
      description: 'Choose your travel style - adventure, honeymoon, solo, luxury or budget travel.',
      keywords: 'travel styles, adventure travel, honeymoon packages, solo travel, luxury travel',
    })

    // Simulate API call
    setTimeout(() => {
      setStyles(travelStylesMock)
      setLoading(false)
    }, 300)
  }, [])

  // If specific style is selected (detail page)
  const selectedStyle = type ? styles.find(s => s.slug === type) : null

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

  // Detail page for specific travel style
  if (selectedStyle) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <Link to="/" className="text-primary-600 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/travel-style" className="text-primary-600 hover:underline">Travel Styles</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{selectedStyle.name}</span>
          </div>

          {/* Hero Section */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={selectedStyle.image}
              alt={selectedStyle.name}
              eager
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="text-5xl mb-4">{selectedStyle.icon}</div>
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">
                {selectedStyle.name}
              </h1>
              <p className="text-xl text-white/90">{selectedStyle.description}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Activities */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                  Popular Activities
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedStyle.activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-gray-900">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Destinations */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                  Top Destinations
                </h2>
                <div className="flex flex-wrap gap-3">
                  {selectedStyle.destinations.map((destination) => (
                    <Badge key={destination} variant="accent" className="text-base px-4 py-2">
                      {destination}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
                  Perfect For
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {selectedStyle.bestFor}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Quick Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Price Range</span>
                    <span className="font-bold text-primary-600">{selectedStyle.priceRange}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Travel Type</span>
                    <Badge variant="primary">{selectedStyle.type}</Badge>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600">Destinations</span>
                    <span className="font-semibold text-gray-900">{selectedStyle.destinations.length}+</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Link to="/packages">
                    <Button variant="primary" className="w-full">
                      View Packages
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="secondary" className="w-full">
                      Plan Custom Trip
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

  // Listing page - All travel styles
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Choose Your Travel Style
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect travel experience that matches your preferences and personality
          </p>
        </div>

        {/* Travel Styles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style) => (
            <Link key={style.id} to={`/travel-style/${style.slug}`}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 text-4xl">{style.icon}</div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{style.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{style.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold text-sm">{style.priceRange}</span>
                    <span className="text-gray-500 text-sm">
                      {style.destinations.length}+ destinations
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="font-display font-bold text-3xl mb-4">
            Can't Decide?
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Let our travel experts help you choose the perfect travel style for your next adventure
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}