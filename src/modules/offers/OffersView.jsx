import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { updateMetaTags } from '../../utils/seo'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { packagesMock } from '../../data/packages.mock'
import { offersMock } from '../../data/offers.mock'

export const OffersView = () => {
  const [deals, setDeals] = useState([])
  const [topPackages, setTopPackages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    updateMetaTags({
      title: 'Offers & Deals - Best Travel Discounts & Packages',
      description: 'Grab amazing travel deals, early bird discounts, group booking offers, and seasonal packages.',
      keywords: 'travel offers, travel deals, discounts, early bird, group booking',
    })

    // Simulate API call
    setTimeout(() => {
      setDeals(offersMock)
      // Get packages with high discounts
      const topDeals = packagesMock.filter(p => p.discount >= 20)
      setTopPackages(topDeals)
      setLoading(false)
    }, 300)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-gray-200 h-64 rounded-xl" />
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
          <Badge variant="accent" className="mb-4 text-base px-4 py-2">
            🎉 Limited Time Offers
          </Badge>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Exclusive Travel Deals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save big on your next adventure with our special offers and discounts
          </p>
        </div>

        {/* Offer Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`bg-gradient-to-br ${deal.gradient} rounded-xl p-8 text-center border-2 ${deal.borderColor} hover:shadow-xl transition-shadow`}
            >
              <div className="text-5xl mb-4">{deal.icon}</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{deal.title}</h3>
              <p className="text-gray-700 mb-4">{deal.description}</p>
              <Badge variant="accent" className="text-sm">
                {deal.discount}
              </Badge>
            </div>
          ))}
        </div>

        {/* Special Promotion Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl mb-4">
                Flash Sale! 🔥
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Book any package in the next 48 hours and get an additional 10% off on already discounted prices!
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-white/20 backdrop-blur-sm text-white text-base px-4 py-2">
                  Ends in: 47h 23m
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">UPTO 40%</div>
              <div className="text-2xl">DISCOUNT</div>
            </div>
          </div>
        </div>

        {/* Best Deal Packages */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-3xl text-gray-900">
              Top Deals This Month
            </h2>
            <Link to="/packages">
              <Button variant="secondary">View All Packages</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {topPackages.map((pkg) => (
              <Card key={pkg.id} data={pkg} type="package" />
            ))}
          </div>
        </section>

        {/* How to Save More */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 text-center">
            How to Save More on Your Trip
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📅',
                title: 'Book Early',
                desc: 'Reserve 60+ days in advance for maximum savings',
              },
              {
                icon: '👥',
                title: 'Travel in Groups',
                desc: 'Get special group rates for 10 or more travelers',
              },
              {
                icon: '🌤️',
                title: 'Off-Season Travel',
                desc: 'Choose shoulder seasons for better deals',
              },
            ].map((tip) => (
              <div key={tip.title} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border-l-4 border-primary-600">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💬</div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 italic mb-3">
                "I saved ₹12,000 on my Kerala trip by booking during their early bird offer. The service was excellent and the savings were real!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Amit Sharma</div>
                  <div className="text-sm text-gray-600">Verified Traveler</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">
            Don't Miss Out on These Amazing Deals!
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and be the first to know about exclusive offers
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}