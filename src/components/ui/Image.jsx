import { useState, useEffect } from 'react'
import { useImageLoader } from '../../hooks/useImageLoader.jsx'
import { useIntersection } from '../../hooks/useIntersection'

export const Image = ({ 
  src, 
  alt, 
  className = '', 
  lowQualitySrc,
  eager = false,
  ...props 
}) => {
  const { ref, hasIntersected } = useIntersection()
  const [shouldLoad, setShouldLoad] = useState(eager)
  const { imageSrc, isLoading } = useImageLoader(
    shouldLoad ? src : null,
    lowQualitySrc
  )

  useEffect(() => {
    if (eager || hasIntersected) {
      setShouldLoad(true)
    }
  }, [eager, hasIntersected])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img
        src={imageSrc || lowQualitySrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3C/svg%3E'}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'
        }`}
        loading={eager ? 'eager' : 'lazy'}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  )
}