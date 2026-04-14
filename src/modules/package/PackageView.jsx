


import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate, Link } from 'react-router-dom'
import { updateMetaTags } from '../../utils/seo'
import { packagesMock } from '../../data/packages.mock'
import { blogsMock } from '../../data/blogs.mock'

/* ── Icons ─────────────────────────────────────────────────── */
const ForkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4a2 2 0 002 2h4a2 2 0 002-2V3M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
  </svg>
)
const FlightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-4 4m4-4l4 4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l3-1.5L12 19l6-3.5 3 1.5" />
  </svg>
)
const HotelIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <rect x="3" y="7" width="18" height="14" rx="1" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18M8 7V5a4 4 0 018 0v2" />
  </svg>
)
const CameraIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)
const StarIcon = () => (
  <svg className="w-3 h-3" fill="#FACC15" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)
const ChevronDown = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)
const ArrowRight = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

/* ── Budget Tabs ───────────────────────────────────────────── */
const BUDGET_TABS = [
  { key: 'under-50k',  label: 'Under 50K',     min: 0,      max: 50000 },
  { key: '50k-2lkh',  label: '₹50K – ₹2LKH',  min: 50000,  max: 200000 },
  { key: '2lkh-3lkh', label: '₹2LKH – ₹3LKH', min: 200000, max: 300000 },
  { key: '3lkh-above',label: '₹3LKH Above',   min: 300000, max: Infinity },
]

/* ── Package Card ──────────────────────────────────────────── */
const PackageCard = ({ pkg }) => {
  const navigate = useNavigate()
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.destination}
          className="w-full h-44 object-cover"
        />
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
          <StarIcon />
          <span>{pkg.rating || '4.3'}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-[15px] font-bold text-gray-900 mb-1">{pkg.destination || pkg.title}</h3>
        <p className="text-[13px] text-gray-500 leading-snug mb-3 line-clamp-2">
          {pkg.description || pkg.excerpt}
        </p>

        {/* Duration + Tour Type */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[12px] font-semibold text-gray-800">{pkg.duration || '9N/8D'}</span>
          <span className="text-[12px] text-gray-400">|</span>
          <span className="text-[12px] text-gray-600">{pkg.tourType || 'Customised Tour'}</span>
        </div>

        {/* Includes label */}
        <p className="text-[11px] text-gray-400 font-medium mb-1.5 mt-2">Includes</p>

        {/* Amenity Icons */}
        <div className="flex items-center gap-3 text-gray-500 mb-4">
          <ForkIcon />
          <FlightIcon />
          <HotelIcon />
          <CameraIcon />
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="text-[17px] font-bold text-gray-900">
            {typeof pkg.price === 'number'
              ? pkg.price.toLocaleString('en-IN')
              : pkg.price}
          </span>
          <button
            onClick={() => navigate(`/packages/${pkg.slug || pkg.id}`)}
            className="text-[13px] font-semibold text-[#1D75DE] hover:underline"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Filter Dropdown ───────────────────────────────────────── */
const FilterDropdown = ({ label }) => (
  <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer hover:border-gray-300 transition">
    <span className="text-[13px] text-gray-500">{label}</span>
    <ChevronDown />
  </div>
)

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export const PackageView = () => {
  const { budget } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [packages, setPackages] = useState([])
  const [filteredPackages, setFilteredPackages] = useState([])
  const [visibleCount, setVisibleCount] = useState(6)
  const [selectedBudget, setSelectedBudget] = useState(
    budget || searchParams.get('budget') || 'under-50k'
  )
  const [email, setEmail] = useState('')

  // Price range slider state
  const [priceRange, setPriceRange] = useState(500000)

  // Recent blogs (3)
  const recentBlogs = (blogsMock || []).slice(0, 3)

  useEffect(() => {
    updateMetaTags({
      title: 'Explore Packages - TravelBudgetly',
      description: 'Discover your next adventure from our curated list of packages.',
    })
    setTimeout(() => {
      setPackages(packagesMock)
    }, 300)
  }, [])

  useEffect(() => {
    const tab = BUDGET_TABS.find(t => t.key === selectedBudget)
    if (!tab) { setFilteredPackages(packages); return }
    const filtered = packages.filter(p => {
      const price = typeof p.price === 'number' ? p.price : 0
      return price >= tab.min && price < tab.max && price <= priceRange
    })
    setFilteredPackages(filtered)
    setVisibleCount(6)
  }, [selectedBudget, packages, priceRange])

  const visiblePackages = filteredPackages.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPackages.length

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Main Layout: Sidebar + Content ─────────────────────── */}
        <div className="flex gap-6 mt-8">

          {/* ── LEFT SIDEBAR ─────────────────────────────────────── */}
          <aside className="hidden lg:flex flex-col gap-4 w-[200px] xl:w-[220px] shrink-0">

            {/* Filters box */}
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="text-[15px] font-bold text-gray-900">Filters</h3>
              <p className="text-[12px] text-gray-400 mb-4">Customise your journey</p>

              <div className="flex flex-col gap-3">
                <FilterDropdown label="Destination" />
                <FilterDropdown label="Tour Type" />
                <FilterDropdown label="Flights" />
                <FilterDropdown label="Duration" />
                <FilterDropdown label="Hotel" />
              </div>

              {/* Price Range */}
              <div className="mt-5">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Price Range</p>
                <div className="flex justify-between text-[12px] text-gray-500 mb-2">
                  <span>₹0</span>
                  <span>₹5,00,000+</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={500000}
                  step={1000}
                  value={priceRange}
                  onChange={e => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#1D75DE] h-1.5 cursor-pointer"
                />
              </div>

              <button className="mt-5 w-full bg-[#1D75DE] text-white text-[13px] font-semibold py-2.5 rounded-lg hover:bg-[#165bb0] transition">
                Apply Filters
              </button>
            </div>

            {/* Need help box */}
            <div className="border border-blue-100 bg-blue-50/50 rounded-xl p-4">
              <p className="text-[13px] font-bold text-[#1D75DE] mb-1">Need help?</p>
              <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
                Our travel experts are available 24/7 to help you plan your perfect trip.
              </p>
              <a href="#" className="text-[12px] font-semibold text-[#1D75DE] hover:underline flex items-center gap-1">
                Chat now
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </aside>

          {/* ── RIGHT CONTENT ─────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Header */}
            <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1D75DE] mb-1">Your Next Adventure</p>
            <h1 className="text-[28px] md:text-[34px] font-bold text-slate-900 leading-tight mb-1">
              Explore Packages
            </h1>
            <p className="text-[14px] text-gray-500 mb-6">
              Discover your next adventure from our curated list of packages
            </p>

            {/* Budget Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {BUDGET_TABS.map((tab, i) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedBudget(tab.key)}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
                    selectedBudget === tab.key
                      ? 'bg-[#1D75DE] text-white border-[#1D75DE]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#1D75DE] hover:text-[#1D75DE]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Package Grid */}
            {visiblePackages.length === 0 ? (
              <div className="text-center py-24 text-gray-400">
                <p className="text-[15px]">No packages found for this budget range.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visiblePackages.map(pkg => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            )}

            {/* Load More */}
            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount(v => v + 6)}
                  className="px-7 py-2.5 border border-gray-300 rounded-full text-[13px] font-medium text-gray-600 hover:border-[#1D75DE] hover:text-[#1D75DE] transition"
                >
                  Load More
                </button>
              </div>
            )}

          </div>
        </div>

        {/* ── Newsletter CTA ─────────────────────────────────────── */}
        <div className="mt-20 bg-[#1D75DE] rounded-[28px] px-10 py-12 md:px-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-28 -mt-28 pointer-events-none" />
          <div className="relative z-10 max-w-xs">
            <h2 className="text-white text-[28px] md:text-[32px] font-bold leading-tight mb-3">
              Ready to start<br />your next<br />journey?
            </h2>
            <p className="text-blue-100/80 text-[14px] leading-relaxed">
              Join 50,000+ travelers receiving our best deals and hidden gem recommendations weekly.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-5 py-3.5 rounded-xl bg-white text-slate-900 text-[14px] outline-none w-full sm:w-64 focus:ring-4 focus:ring-white/20 transition"
            />
            <button
              onClick={() => setEmail('')}
              className="px-7 py-3.5 rounded-xl bg-white text-[#1D75DE] font-bold text-[14px] hover:bg-blue-50 transition whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
        </div>

        {/* ── Travel Blogs ───────────────────────────────────────── */}
        <div className="mt-16">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Travel Blogs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {recentBlogs.map(blog => (
              <Link key={blog.id} to={`/blogs/${blog.slug}`} className="group block">
                <div className="aspect-[4/3] rounded-[18px] overflow-hidden mb-4 border border-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#1D75DE] transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-gray-400">
                    {new Date(blog.publishDate).toLocaleDateString('en-US', {
                      month: 'long', day: 'numeric', year: 'numeric',
                    })}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#1D75DE] flex items-center justify-center shadow-md group-hover:bg-[#165bb0] transition-colors">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}