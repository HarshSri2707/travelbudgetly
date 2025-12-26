export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'TravelBudgetly made our Rajasthan trip unforgettable! Every detail was perfect.',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Rahul Verma',
      location: 'Delhi',
      rating: 5,
      text: 'Best travel partner ever! No hidden costs, excellent service throughout.',
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Anjali Reddy',
      location: 'Bangalore',
      rating: 5,
      text: 'Kerala package was amazing. Highly recommend for couples!',
      image: 'https://i.pravatar.cc/150?img=5',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}