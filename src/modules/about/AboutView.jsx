import { useEffect } from 'react'
import { updateMetaTags } from '../../utils/seo'
import { Image } from '../../components/ui/Image'

export const AboutView = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'About Us - Making Travel Easy and Hassle-free',
      description: 'Learn about TravelBudgetly - your trusted travel partner with deep local expertise, vetted partners, and transparent pricing.',
      keywords: 'about travelbudgetly, travel company india, reliable travel partner',
    })
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Making Travel Easy and Hassle-free for All
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Welcome to <strong>TravelBudgetly.com</strong>. We are a team of passionate travel enthusiasts, explorers, and logistical experts dedicated to showcasing the unparalleled beauty of the world to all. We believe that travel shouldn't be a luxury reserved for a few, nor should it be a stressful planning ordeal.
          </p>
        </div>
      </section>

      {/* Why TravelBudgetly Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-8 text-center">
            Why TravelBudgetly?
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              India is a land of immense diversity, and navigating it requires local expertise. We founded TravelBudgetly to solve a specific problem: the lack of transparent, reliable, and budget-conscious travel aggregation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Deep Local Expertise */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Deep Local Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                We don't just list destinations; we know them. Our team regularly visits every location to ensure our information on "How to Travel" and "Where to Stay" is current and factually accurate.
              </p>
            </div>

            {/* Vetted Partners */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Vetted Partners</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand that your safety and comfort depend on the people on the ground. We partner only with verified hotels and local transport providers who share our commitment to excellence.
              </p>
            </div>

            {/* Comprehensive Coverage */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌏</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Comprehensive Coverage</h3>
              <p className="text-gray-700 leading-relaxed">
                From the most popular landmarks to the quietest offbeat corners of the North-East and the Islands, we cover the length and breadth of India.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                With TravelBudgetly, what you see is what you get. No hidden surcharges, no last-minute "convenience fees."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <Image
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
                alt="Team exploring destinations"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80"
                alt="Beautiful travel destinations"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80"
                alt="Happy travelers"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-6 text-center">
              Your Peace of Mind is Our Priority
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                In an era of endless online options, the importance of a reliable travel partner cannot be overstated. A great holiday requires meticulous planning and a safety net when things don't go as expected.
              </p>
              <p>
                <strong>TravelBudgetly provides that safety net.</strong> By choosing us, you aren't just booking a ticket; you are gaining a travel companion committed to ensuring you enjoy the best of India, safely and affordably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">500+</div>
              <div className="text-gray-300">Destinations Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">10K+</div>
              <div className="text-gray-300">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">200+</div>
              <div className="text-gray-300">Verified Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">4.8★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}