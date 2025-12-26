import { Link } from 'react-router-dom'
import { Image } from './Image'
import { Button } from './Button'

export const Card = ({ data, type = 'destination', className = '' }) => {
  const renderContent = () => {
    switch (type) {
      case 'destination':
        return (
          <Link to={`/destinations/${data.slug}`} className="block h-full">
            <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full ${className}`}>
              <div className="relative h-48">
                <Image
                  src={data.image}
                  lowQualitySrc={data.thumbnail}
                  alt={data.name}
                  className="w-full h-full"
                />
                {data.rating && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span>{data.rating}</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{data.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{data.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-primary-600">₹{data.price?.toLocaleString()}</span>
                    {data.duration && <span className="ml-2">• {data.duration}</span>}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )

      case 'package':
        return (
          <Link to={`/packages/${data.slug}`} className="block h-full">
            <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full ${className}`}>
              <div className="relative h-48">
                <Image
                  src={data.image}
                  lowQualitySrc={data.thumbnail}
                  alt={data.name}
                  className="w-full h-full"
                />
                {data.discount && (
                  <div className="absolute top-3 left-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {data.discount}% OFF
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{data.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{data.destination}</p>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">₹{data.price.toLocaleString()}</span>
                    {data.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">₹{data.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{data.duration}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">{data.rating}</span>
                    <span className="text-gray-400">({data.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )

      case 'blog':
        return (
          <Link to={`/blogs/${data.slug}`} className="block h-full">
            <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full ${className}`}>
              <div className="relative h-48">
                <Image
                  src={data.image}
                  lowQualitySrc={data.thumbnail}
                  alt={data.title}
                  className="w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {data.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{data.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{data.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{data.author}</span>
                  <span>{data.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        )

      default:
        return null
    }
  }

  return renderContent()
}