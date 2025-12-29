import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
  } = options

  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce, prefersReducedMotion])

  return { ref, isVisible }
}

// Staggered children animation hook
export const useStaggerAnimation = (childCount, baseDelay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const { ref, isVisible } = useScrollAnimation()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!isVisible || prefersReducedMotion) {
      // Show all immediately if reduced motion
      setVisibleItems(new Set(Array.from({ length: childCount }, (_, i) => i)))
      return
    }

    const timeouts = []
    for (let i = 0; i < childCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => new Set([...prev, i]))
      }, i * baseDelay)
      timeouts.push(timeout)
    }

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [isVisible, childCount, baseDelay, prefersReducedMotion])

  return { ref, visibleItems }
}