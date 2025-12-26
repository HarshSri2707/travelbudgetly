import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { updateMetaTags } from '../../utils/seo'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { destinationsMock } from '../../data/destinations.mock'

export const DestinationView = () => {
  const [searchParams] = useSearchParams()
  const [destinations, setDestinations] = useState([])
  const [filteredDestinations, setFilteredDestinations] = useState([])
  const [selectedRegion, setSelectedRegion] = useState(searchParams.get('region') || 'all')
  const [selectedZone, setSelectedZone] = useState(searchParams.get('zone') || 'all')

  useEffect(() => {
    updateMetaTags({
      title: 'Explore Destinations - India and Beyond',
      description: 'Discover amazing travel destinations across India. From Rajasthan forts to Kerala backwaters.',
      keywords: 'travel destinations india, places to visit, tourist spots',
    })

    // Simulate API call
    setTimeout(() => {
      setDestinations(destinationsMock)
      setFilteredDestinations(destinationsMock)
    }, 300)
  }, [])

  useEffect(() => {
    let filtered = destinations

    if (selectedRegion !== 'all') {
      filtered = filtered.filter(d => d.region.toLowerCase() === selectedRegion.toLowerCase())
    }

    if (selectedZone !== 'all') {
      filtered = filtered.filter(d => d.zone?.toLowerCase().includes(selectedZone.toLowerCase()))
    }

    setFilteredDestinations(filtered)
  }, [selectedRegion, selectedZone, destinations])

  const regions = ['all', 'India', 'Asia', 'Europe']
  const zones = ['all', 'North India', 'South India', 'East India', 'West India']

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Explore Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover incredible places across India and around the world
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Region Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by Region
              </label>
              <div className="flex flex-wrap gap-2">
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

            {/* Zone Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by Zone
              </label>
              <div className="flex flex-wrap gap-2">
                {zones.map((zone) => (
                  <button
                    key={zone}
                    onClick={() => setSelectedZone(zone)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedZone === zone
                        ? 'bg-accent-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {zone === 'all' ? 'All Zones' : zone}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredDestinations.length}</span> destinations
          </p>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} data={destination} type="destination" />
            ))}
          </div>
        )}

        {/* Popular Regions Section */}
        <section className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
            Popular Regions
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'North India', count: '120+ places', emoji: '🏔️' },
              { name: 'South India', count: '95+ places', emoji: '🌴' },
              { name: 'East India', count: '65+ places', emoji: '🌄' },
              { name: 'West India', count: '85+ places', emoji: '🏖️' },
            ].map((region) => (
              <div
                key={region.name}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-3">{region.emoji}</div>
                <h3 className="font-bold text-lg text-gray-900">{region.name}</h3>
                <p className="text-sm text-gray-600">{region.count}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}