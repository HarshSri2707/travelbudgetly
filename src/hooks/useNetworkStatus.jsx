import { useState, useEffect } from 'react'

export const useNetworkStatus = () => {
  const [networkSpeed, setNetworkSpeed] = useState('fast')

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    
    if (!connection) {
      setNetworkSpeed('fast')
      return
    }

    const updateNetworkSpeed = () => {
      const effectiveType = connection.effectiveType
      
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        setNetworkSpeed('slow')
      } else if (effectiveType === '3g') {
        setNetworkSpeed('medium')
      } else {
        setNetworkSpeed('fast')
      }
    }

    updateNetworkSpeed()
    connection.addEventListener('change', updateNetworkSpeed)

    return () => connection.removeEventListener('change', updateNetworkSpeed)
  }, [])

  return networkSpeed
}