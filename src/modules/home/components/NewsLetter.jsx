

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'

export const NewsLetter = () => {
  const { ref, hasIntersected } = useIntersection({ threshold: 0.2 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
    }
  }

  return (
    <section ref={ref} className="py-12 px-4 md:py-20 bg-white">
      {/* Main Blue Container based on image_346540.png */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-6xl mx-auto bg-[#0066FF] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden"
      >
        {/* Header Text */}
        <h2 className="font-bold text-3xl md:text-5xl mb-4 tracking-tight">
          Don't miss out on next week's deals
        </h2>
        
        {/* Subtext */}
        <p className="text-blue-50 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Join 500,000+ travelers and get exclusive access to unlisted coupons and
          secret flash sales.
        </p>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto"
          >
            <p className="text-white font-bold text-xl">🎉 Check your inbox to confirm!</p>
          </motion.div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
          >
            {/* Input Field based on image_346540.png UI */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full md:w-[380px] px-8 py-5 rounded-2xl bg-white text-gray-800 text-lg outline-none focus:ring-4 focus:ring-blue-400/50 transition-all placeholder:text-gray-400"
            />
            
            {/* Dark Subscribe Button from image_346540.png */} 
            <button
              type="submit"
              className="w-full md:w-auto bg-[#0A1629] hover:bg-[#122341] text-white font-bold px-10 py-5 rounded-full md:rounded-3xl text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        )}

        {/* Unsubscribe Footer Text as seen in image_346540.png */}
        <p className="text-blue-200/80 text-xs mt-8 uppercase tracking-[0.2em] font-medium">
          UNSUBSCRIBE ANYTIME • NO SPAM EVER
        </p>
        
        {/* Subtle Decorative Gradient (Optional for depth) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-3xl" />
      </motion.div>
    </section>
  )
}