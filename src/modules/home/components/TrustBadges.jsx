export const TrustBadges = () => {
  const badges = [
    { icon: '🏆', label: 'Award Winning Service', desc: '2024 Excellence Award' },
    { icon: '✓', label: 'Certified Accommodations', desc: 'Best in Class Partners' },
    { icon: '🌟', label: '10,000+ Reviews', desc: '4.8/5 Rating' },
    { icon: '🔒', label: 'Secure Booking', desc: '100% Safe & Encrypted' },
  ]

  return (
    <section className="py-12 bg-white border-y">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <h4 className="font-semibold text-gray-900 text-sm">{badge.label}</h4>
              <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}