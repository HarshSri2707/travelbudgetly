import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/Button'
import { Image } from '../../../components/ui/Image'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const MotionDiv = prefersReducedMotion ? 'div' : motion.div

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230ea5e9" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}/>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <MotionDiv
            initial={!prefersReducedMotion && { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
              Discover the World with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                TravelBudgetly
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Your Trusted Partner in Every Journey
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From the snowy Himalayas in the north to the serene backwaters in Kerala, and from India to the Vatican, we bring you curated travel experiences to suit your budget and needs, so that you have the most memorable travel experience ever!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/packages">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Find Your Perfect Package
                </Button>
              </Link>
              <Link to="/destinations">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore Destinations
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-gray-600">Destinations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">10K+</p>
                <p className="text-sm text-gray-600">Happy Travelers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">4.8★</p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
            </div>
          </MotionDiv>

          {/* Right Image Grid */}
        {/* Right Image Grid */}
<MotionDiv
  initial={!prefersReducedMotion && { opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="relative pb-16 lg:pb-0"
>
  <div className="grid grid-cols-2 gap-4">
    {/* Column 1 */}
    <div className="space-y-4">
      <Image
        src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80"
        alt="Rajasthan"
        eager
        className="h-56 sm:h-64 rounded-2xl shadow-xl"
      />

      <Image
        src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80"
        alt="Kerala"
        className="h-40 sm:h-48 rounded-2xl shadow-xl"
      />
    </div>

    {/* Column 2 */}
    <div className="space-y-4 pt-6 sm:pt-10">
      <Image
        src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80"
        alt="Himachal"
        className="h-40 sm:h-48 rounded-2xl shadow-xl"
      />

      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        alt="Ladakh"
        className="h-56 sm:h-64 rounded-2xl shadow-xl"
      />
    </div>
  </div>

  {/* Floating Card */}
  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 w-[90%] max-w-xs z-10">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl">
        ✓
      </div>
      <div>
        <p className="font-semibold text-gray-900">Verified Partners</p>
        <p className="text-sm text-gray-600">100% Safe & Secure</p>
      </div>
    </div>
  </div>
</MotionDiv>

        </div>
      </div>
    </section>
  )
}