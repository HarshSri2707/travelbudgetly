import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/Button'

export const ExploreByInterest = () => {
  const interests = [
    {
      title: 'The Classics',
      description: 'Explore the Golden Triangle, Goa\'s beaches, and Rajasthan\'s forts.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600',
      link: '/destinations?category=classics',
    },
    {
      title: 'The Hidden Gems',
      description: 'Trek through the valleys of Ziro or witness the starlit skies of Hanle.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      link: '/offbeat-travel',
    },
    {
      title: 'Spirituality & Wellness',
      description: 'Find peace in Rishikesh or the ancient temples of Madurai.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600',
      link: '/destinations?category=spiritual',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Explore India by Interest
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {interests.map((interest, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={interest.image}
                  alt={interest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-2xl mb-2">{interest.title}</h3>
                <p className="text-sm mb-4 text-gray-200">{interest.description}</p>
                <Link to={interest.link}>
                  <Button variant="secondary" size="sm">Explore →</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/packages">
            <Button variant="primary" size="lg">Find Your Perfect Package</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}