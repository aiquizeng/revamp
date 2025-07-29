import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigationItems } from '../constants/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 sticky top-0 z-50 transition-all duration-300">
      <nav className="section-container">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 transition-transform duration-300 hover:scale-105 group">
            <div className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-12 shadow-lg">
              <span className="text-white font-black text-xs sm:text-sm md:text-lg">DC</span>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-black text-gradient">DigiCinta</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-semibold transition-all duration-300 relative group px-3 xl:px-4 py-2 rounded-xl text-sm xl:text-base ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50 shadow-md'
                    : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary-600 rounded-full transition-all duration-300 ${
                  isActive(item.href) ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                }`}></span>
              </Link>
            ))}
            <Link to="/contact" className="btn-primary ml-4 xl:ml-6 text-sm xl:text-base px-4 xl:px-6 py-2 xl:py-3">
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2 sm:p-3 transition-all duration-300 hover:bg-primary-50 rounded-lg sm:rounded-xl hover:scale-110 border border-primary-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6 text-primary-600" /> : <Menu size={20} className="sm:w-6 sm:h-6 text-secondary-700" />}
            </div>
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`} style={{overflowX: 'hidden'}}>
          <div className="py-4 sm:py-6 border-t border-primary-100 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 backdrop-blur-sm">
            <div className="flex flex-col space-y-2 sm:space-y-3">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-semibold transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl transform text-sm sm:text-base ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-white shadow-md scale-105 border border-primary-200'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-white/70 hover:scale-105 hover:shadow-md'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    transform: `translateY(${isMenuOpen ? '0' : '-10px'})`,
                    opacity: isMenuOpen ? '1' : '0',
                    transition: `all 300ms ease-out ${index * 50}ms`
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary mx-4 sm:mx-6 mt-3 sm:mt-4 text-center transition-all duration-300 text-sm sm:text-base py-3 sm:py-4"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animationDelay: `${navigationItems.length * 50}ms`,
                  transform: `translateY(${isMenuOpen ? '0' : '-10px'})`,
                  opacity: isMenuOpen ? '1' : '0',
                  transition: `all 300ms ease-out ${navigationItems.length * 50}ms`
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header