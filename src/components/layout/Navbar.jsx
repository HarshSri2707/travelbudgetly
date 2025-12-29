// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { NAV_ITEMS } from '../../constants/navigation'
// import { Button } from '../ui/Button'

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState(null)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     setIsMobileMenuOpen(false)
//     setActiveDropdown(null)
//   }, [location])

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">TB</span>
//             </div>
//             <span className="font-display font-bold text-xl text-gray-900">
//               Travel<span className="text-primary-600">Budgetly</span>
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {NAV_ITEMS.slice(0, 5).map((item) => (
//               <div
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <Link
//                   to={item.path}
//                   className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
//                     location.pathname === item.path
//                       ? 'text-primary-600 bg-primary-50'
//                       : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
//                   }`}
//                 >
//                   {item.label}
//                   {item.dropdown && <span className="ml-1">▾</span>}
//                 </Link>

//                 {item.dropdown && activeDropdown === item.label && (
//                   <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-2 animate-fade-in">
//                     {item.dropdown.map((subItem) => (
//                       <Link
//                         key={subItem.label}
//                         to={subItem.path}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
//                       >
//                         {subItem.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden lg:flex items-center gap-3">
//             <Link to="/packages">
//               <Button variant="primary" size="sm">
//                 Explore Packages
//               </Button>
//             </Link>
//             <Link to="/contact">
//               <Button variant="secondary" size="sm">
//                 Contact Us
//               </Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isMobileMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-white border-t animate-slide-up">
//           <div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
//             {NAV_ITEMS.map((item) => (
//               <div key={item.label}>
//                 <Link
//                   to={item.path}
//                   className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600"
//                 >
//                   {item.label}
//                 </Link>
//                 {item.dropdown && (
//                   <div className="pl-4 space-y-1">
//                     {item.dropdown.map((subItem) => (
//                       <Link
//                         key={subItem.label}
//                         to={subItem.path}
//                         className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600"
//                       >
//                         {subItem.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             <div className="pt-4 space-y-2">
//               <Link to="/packages" className="block">
//                 <Button variant="primary" size="md" className="w-full">
//                   Explore Packages
//                 </Button>
//               </Link>
//               <Link to="/contact" className="block">
//                 <Button variant="secondary" size="md" className="w-full">
//                   Contact Us
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }


import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { 
      label: 'Destinations', 
      path: '/destinations',
      dropdown: [
        { label: 'All Destinations', path: '/destinations' },
        { label: 'Popular Places', path: '/popular-places' },
        { label: 'Offbeat Travel', path: '/offbeat-travel' },
      ]
    },
    { 
      label: 'Travel Style', 
      path: '/travel-style',
      dropdown: [
        { label: 'All Styles', path: '/travel-style' },
        { label: 'Adventure', path: '/travel-style/adventure' },
        { label: 'Honeymoon', path: '/travel-style/honeymoon' },
        { label: 'Solo', path: '/travel-style/solo' },
        { label: 'Luxury', path: '/travel-style/luxury' },
      ]
    },
    { label: 'Packages', path: '/packages' },
    { label: 'Blogs', path: '/blogs' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-xl">TB</span>
            </div>
            <span className="font-display font-bold text-xl text-gray-900">
              Travel<span className="text-primary-600">Budgetly</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    location.pathname === item.path || location.pathname.startsWith(item.path.split('?')[0])
                      ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700 shadow-md'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <span className="ml-1">▾</span>}
                </Link>

                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-600 transition-all duration-200"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/packages">
              <Button variant="primary" size="sm" className="shadow-lg hover:shadow-xl">
                Explore Packages
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="sm" className="shadow-md hover:shadow-lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-slide-up">
          <div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2 border-t border-gray-100 mt-2">
              <Link to="/packages" className="block">
                <Button variant="primary" size="md" className="w-full">
                  Explore Packages
                </Button>
              </Link>
              <Link to="/contact" className="block">
                <Button variant="secondary" size="md" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}