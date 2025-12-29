import { useState, useEffect, useRef } from 'react'
import { useIntersection } from './useIntersection'

/**
 * useCountUp
 * @param {Object} options
 * @param {number} options.end - Final value
 * @param {number} options.duration - Animation duration (ms)
 * @param {string} options.suffix - Optional suffix (+, %, etc.)
 * @param {number} options.decimals - Decimal places (0 by default)
 */
export const useCountUp = ({
  end,
  duration = 2000,
  suffix = '',
  decimals = 0,
}) => {
  const [value, setValue] = useState(0)
  const startTimeRef = useRef(null)

  const { ref, hasIntersected } = useIntersection({ threshold: 0.5 })

  useEffect(() => {
    if (!hasIntersected) return

    const animate = (currentTime) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime

      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4)
      const currentValue = easedProgress * end

      setValue(
        decimals > 0
          ? Number(currentValue.toFixed(decimals))
          : Math.floor(currentValue)
      )

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasIntersected, end, duration, decimals])

  return {
    ref,
    value,
    suffix,
  }
}
