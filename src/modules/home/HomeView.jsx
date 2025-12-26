import { useEffect } from 'react'
import { updateMetaTags } from '../../utils/seo'
import { HeroSection } from './components/HeroSection'
import { BookingTicker } from './components/BookingTicker'
import { TrustBadges } from './components/TrustBadges'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ExploreByInterest } from './components/ExploreByInterest'
import { FeaturedDestinations } from './components/FeaturedDestinations'
import { PopularPackages } from './components/PopularPackages'
import { LatestBlogs } from './components/LatestBlogs'
import { Testimonials } from './components/Testimonials'

export const HomeView = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Discover the World with TravelBudgetly',
      description: 'Your trusted travel partner for exploring India and beyond. Curated experiences from Himalayas to Kerala backwaters.',
      keywords: 'travel india, budget travel, tour packages, destinations',
    })
  }, [])

  return (
    <div className="min-h-screen">
      <HeroSection />
      <BookingTicker />
      <TrustBadges />
      <WhyChooseUs />
      <ExploreByInterest />
      <FeaturedDestinations />
      <PopularPackages />
      <Testimonials />
      <LatestBlogs />
    </div>
  )
}