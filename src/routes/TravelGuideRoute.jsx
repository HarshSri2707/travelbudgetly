import { useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { updateMetaTags } from '../utils/seo'
import { Button } from '../components/ui/Button'

const TravelGuideRoute = () => {
  const [searchParams] = useSearchParams()
  const topic = searchParams.get('topic')

  useEffect(() => {
    updateMetaTags({
      title: 'Travel Guide - Tips & Information',
      description: 'Comprehensive travel guides covering best time to visit, food, accommodation, and transport.',
    })
  }, [])

  const guides = [
    { id: 'best-time', title: 'Best Time to Visit', icon: '🗓️', desc: 'Seasonal guides for every destination' },
    { id: 'food', title: 'Food & Cuisine', icon: '🍽️', desc: 'Local delicacies and dining recommendations' },
    { id: 'stay', title: 'Where to Stay', icon: '🏨', desc: 'Accommodation options for every budget' },
    { id: 'transport', title: 'How to Reach', icon: '🚗', desc: 'Transportation and commute guides' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">Travel Guide</h1>
          <p className="text-xl text-gray-600">Everything you need to plan your perfect trip</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guides.map(guide => (
            <Link key={guide.id} to={`/travel-guide?topic=${guide.id}`} 
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 text-center">
              <div className="text-5xl mb-4">{guide.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-sm text-gray-600">{guide.desc}</p>
            </Link>
          ))}
        </div>

        {topic && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
              {guides.find(g => g.id === topic)?.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Comprehensive guide coming soon! This section will include detailed information about {guides.find(g => g.id === topic)?.title.toLowerCase()} for various destinations across India.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">💡 Quick Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Research your destination thoroughly before traveling</li>
                <li>• Book accommodations with flexible cancellation</li>
                <li>• Keep emergency contacts handy</li>
                <li>• Respect local customs and traditions</li>
              </ul>
            </div>
            <div className="mt-8 text-center">
              <Link to="/contact">
                <Button variant="primary" size="lg">Need Personalized Guidance?</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default TravelGuideRoute
