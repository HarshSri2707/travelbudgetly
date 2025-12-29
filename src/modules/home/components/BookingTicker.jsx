import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const BookingTicker = () => {
  const [count, setCount] = useState(247)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={count}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="text-sm md:text-base font-medium"
          >
            🎉 <strong className="font-bold">{count} travelers</strong> booked their dream vacation this week!
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
