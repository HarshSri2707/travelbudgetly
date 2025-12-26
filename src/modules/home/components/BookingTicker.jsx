import { useState, useEffect } from 'react'

export const BookingTicker = () => {
  const [count, setCount] = useState(247)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary-600 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          🎉 <strong>{count} travelers</strong> booked their dream vacation this week!
        </p>
      </div>
    </div>
  )
}