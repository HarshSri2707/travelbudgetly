import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { updateMetaTags } from '../../utils/seo'
import { Card } from '../../components/ui/Card'
import { packagesMock } from '../../data/packages.mock'

export const PackageView = () => {
  const { budget } = useParams()
  const [searchParams] = useSearchParams()
  const [packages, setPackages] = useState([])
  const [filteredPackages, setFilteredPackages] = useState([])
  const [selectedBudget, setSelectedBudget] = useState(budget || searchParams.get('budget') || 'all')

  const budgetRanges = [
    { key: 'all', label: 'All Packages' },
    { key: 'under-10k', label: 'Under ₹10,000', min: 0, max: 10000 },
    { key: '10k-20k', label: '₹10,000 - ₹20,000', min: 10000, max: 20000 },
    { key: '20k-40k', label: '₹20,000 - ₹40,000', min: 20000, max: 40000 },
    { key: 'above-40k', label: 'Above ₹40,000', min: 40000, max: Infinity },
  ]

  useEffect(() => {
    updateMetaTags({
      title: 'Travel Packages - Best Deals & Offers',
      description: 'Explore our curated travel packages with great discounts. From budget to luxury options.',
      keywords: 'travel packages, tour packages, holiday packages, travel deals',
    })

    setTimeout(() => {
      setPackages(packagesMock)
      setFilteredPackages(packagesMock)
    }, 300)
  }, [])

  useEffect(() => {
    if (selectedBudget === 'all') {
      setFilteredPackages(packages)
    } else {
      const range = budgetRanges.find(r => r.key === selectedBudget)
      if (range) {
        const filtered = packages.filter(p => p.price >= range.min && p.price < range.max)
        setFilteredPackages(filtered)
      }
    }
  }, [selectedBudget, packages])

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Travel Packages
          </h1>
          <p className="text-xl text-gray-600">Handpicked deals for unforgettable experiences</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="font-semibold text-gray-700 mb-4">Filter by Budget</h3>
          <div className="flex flex-wrap gap-3">
            {budgetRanges.map((range) => (
              <button
                key={range.key}
                onClick={() => setSelectedBudget(range.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedBudget === range.key
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredPackages.length}</span> packages
          </p>
        </div>

        {filteredPackages.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎒</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No packages found</h3>
            <p className="text-gray-600">Try selecting a different budget range</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} data={pkg} type="package" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}