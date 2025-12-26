import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card } from '../../../components/ui/Card'
import { Button } from '../../../components/ui/Button'
import { useIntersection } from '../../../hooks/useIntersection'
import { destinationsMock } from '../../../data/destinations.mock'

export const FeaturedDestinations = () => {
  const { ref, hasIntersected } = useIntersection()
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    if (hasIntersected) {
      // Simulate API call
      setTimeout(() => {
        setDestinations(destinationsMock.slice(0, 6))
      }, 300)
    }
  }, [hasIntersected])

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Explore India's most beautiful and culturally rich destinations
          </p>
        </div>

        {!hasIntersected || destinations.length === 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-80 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {destinations.map((destination) => (
              <Card key={destination.id} data={destination} type="destination" />
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Link to="/destinations">
            <Button variant="primary" size="lg">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}