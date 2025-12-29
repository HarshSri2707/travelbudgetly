import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

export const TrustBadges = () => {
  const { ref, isVisible } = useScrollAnimation()
  
  const badges = [
    { icon: '🏆', label: 'Award Winning Service', desc: '2024 Excellence Award' },
    { icon: '✓', label: 'Certified Accommodations', desc: 'Best in Class Partners' },
    { icon: '🌟', label: '10,000+ Reviews', desc: '4.8/5 Rating' },
    { icon: '🔒', label: 'Secure Booking', desc: '100% Safe & Encrypted' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section ref={ref} className="py-16 bg-white border-y border-gray-100">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, i) => (
            <motion.div key={i} variants={itemVariants} className="text-center group">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-5xl mb-3"
              >
                {badge.icon}
              </motion.div>
              <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                {badge.label}
              </h4>
              <p className="text-xs text-gray-500">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}