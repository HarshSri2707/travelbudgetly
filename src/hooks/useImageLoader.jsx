import { useState, useEffect } from 'react'

export const useImageLoader = (src, lowQualitySrc) => {
  const [imageSrc, setImageSrc] = useState(lowQualitySrc || null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!src) return

    setIsLoading(true)
    setHasError(false)

    const img = new Image()
    
    img.onload = () => {
      setImageSrc(src)
      setIsLoading(false)
    }

    img.onerror = () => {
      setHasError(true)
      setIsLoading(false)
    }

    img.src = src

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { imageSrc, isLoading, hasError }
}