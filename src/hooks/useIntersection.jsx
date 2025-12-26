import { useEffect, useState, useRef } from 'react'

export const useIntersection = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting
      setIsIntersecting(isVisible)
      
      if (isVisible && !hasIntersected) {
        setHasIntersected(true)
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    })

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [hasIntersected, options])

  return { ref, isIntersecting, hasIntersected }
}