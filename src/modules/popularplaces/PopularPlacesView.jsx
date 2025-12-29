import { useState, useEffect } from 'react'
import { updateMetaTags } from '../../utils/seo'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { destinationsMock } from '../../data/destinations.mock'

export const PopularPlacesView = () => {
  const [places, setPlaces] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [loading, setLoading] = useState(true)

  const regions = ['all', 'North India', 'South India', 'East India', 'West India']

  useEffect(() => {
    updateMetaTags({
      title: 'Popular Places in India - Top Tourist Destinations',
      description: 'Explore the most popular tourist destinations across India. From Taj Mahal to Goa beaches.',
      keywords: 'popular places india, tourist destinations, famous places, top attractions',
    })

    // Simulate API call - using destinations mock as popular places
    setTimeout(() => {
      setPlaces(destinationsMock)
      setFilteredPlaces(destinationsMock)
      setLoading(false)
    }, 300)
  }, [])

  useEffect(() => {
    if (selectedRegion === 'all') {
      setFilteredPlaces(places)
    } else {
      const filtered = places.filter(p => p.zone === selectedRegion)
      setFilteredPlaces(filtered)
    }
  }, [selectedRegion, places])

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

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Popular Places in India
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most visited and loved destinations across the country
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'North India', count: '120+', icon: '🏔️', region: 'North India' },
            { label: 'South India', count: '95+', icon: '🌴', region: 'South India' },
            { label: 'East India', count: '65+', icon: '🌄', region: 'East India' },
            { label: 'West India', count: '85+', icon: '🏖️', region: 'West India' },
          ].map((stat) => (
            <button
              key={stat.region}
              onClick={() => setSelectedRegion(stat.region)}
              className={`bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow ${
                selectedRegion === stat.region ? 'ring-2 ring-primary-600' : ''
              }`}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="font-bold text-2xl text-primary-600 mb-1">{stat.count}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </button>
          ))}
        </div>

        {/* Region Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="font-semibold text-gray-700 mb-4">Filter by Region</h3>
          <div className="flex flex-wrap gap-3">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedRegion === region
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region === 'all' ? 'All Regions' : region}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredPlaces.length}</span> popular places
            {selectedRegion !== 'all' && <span> in <span className="font-semibold">{selectedRegion}</span></span>}
          </p>
        </div>

        {/* Places Grid */}
        {filteredPlaces.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No places found</h3>
            <p className="text-gray-600">Try selecting a different region</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((place) => (
              <Card key={place.id} data={place} type="destination" />
            ))}
          </div>
        )}

        {/* Why These Places Section */}
        <section className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 text-center">
            Why These Places are Popular
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏛️',
                title: 'Rich Heritage',
                desc: 'UNESCO World Heritage sites and historical monuments',
              },
              {
                icon: '🌿',
                title: 'Natural Beauty',
                desc: 'Stunning landscapes from mountains to beaches',
              },
              {
                icon: '🎭',
                title: 'Cultural Experience',
                desc: 'Authentic local traditions and festivals',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}