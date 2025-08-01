import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80')

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handleImageError = () => {
    setBackgroundImage('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden bg-secondary-900" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Hidden image for error handling */}
      <img 
        src={backgroundImage} 
        alt="" 
        className="hidden" 
        onError={handleImageError}
      />
      {/* Modern gradient overlay - stronger for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-secondary-900/95"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 px-3 xs:px-4 sm:px-6 lg:px-8 w-full py-6 xs:py-8 sm:py-0">
        <div className="text-center text-white max-w-7xl mx-auto">
          <div className={`mb-3 xs:mb-4 sm:mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold border border-white/40 mb-4 xs:mb-6 sm:mb-8 text-white shadow-lg">
              🚀 Transforming Businesses Digitally
            </span>
          </div>
          
          <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-4 xs:mb-6 sm:mb-8 px-1 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="block text-white drop-shadow-2xl transition-all duration-1000 delay-200 hero-text-shadow">Digital Solutions</span>
            <span className={`block transition-all duration-1000 delay-400 text-primary-200 font-black hero-text-shadow-secondary ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              That Transform
            </span>
          </h1>
          
          <p className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 xs:mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light px-3 xs:px-4 sm:px-2 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
            We craft <span className="font-semibold text-primary-200">innovative digital experiences</span> that drive growth, engage audiences, and deliver measurable results for forward-thinking businesses.
          </p>
            
          <div className={`flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center px-3 xs:px-4 sm:px-2 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link 
              to="/contact" 
              className="btn-primary group w-full xs:w-auto"
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} className="ml-2 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
          
          {/* Stats or trust indicators */}
          <div className={`mt-6 xs:mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 xs:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-8 max-w-xs xs:max-w-4xl mx-auto px-3 xs:px-4 sm:px-2 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl p-2.5 xs:p-3 sm:p-4 md:p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">51+</div>
              <div className="text-white/90 text-xs sm:text-sm font-medium">Projects Delivered</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl p-2.5 xs:p-3 sm:p-4 md:p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">35%</div>
              <div className="text-white/90 text-xs sm:text-sm font-medium">Avg ROI Increase</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl p-2.5 xs:p-3 sm:p-4 md:p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">SEA+</div>
              <div className="text-white/90 text-xs sm:text-sm font-medium">Serving Clients in SEA & MENA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero