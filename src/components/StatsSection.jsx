import { useState, useEffect } from 'react'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const StatsSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.3)
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0
  })

  const stats = [
    {
      icon: TrendingUp,
      key: 'projects',
      target: 500,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered digital solutions',
      color: 'text-primary-600'
    },
    {
      icon: Users,
      key: 'clients',
      target: 200,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses transformed globally',
      color: 'text-primary-700'
    },
    {
      icon: Award,
      key: 'satisfaction',
      target: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Exceeding expectations consistently',
      color: 'text-primary-600'
    },
    {
      icon: Clock,
      key: 'experience',
      target: 5,
      suffix: '+',
      label: 'Years Experience',
      description: 'Leading digital transformation',
      color: 'text-primary-600'
    }
  ]

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const frameRate = 60
    const totalFrames = (duration / 1000) * frameRate
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)

      setCounters({
        projects: Math.floor(easeOutCubic * 500),
        clients: Math.floor(easeOutCubic * 200),
        satisfaction: Math.floor(easeOutCubic * 98),
        experience: Math.floor(easeOutCubic * 5)
      })

      if (frame >= totalFrames) {
        clearInterval(timer)
        // Set final values to ensure accuracy
        setCounters({
          projects: 500,
          clients: 200,
          satisfaction: 98,
          experience: 5
        })
      }
    }, 1000 / frameRate)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section ref={ref} className="section-spacing bg-gradient-to-r from-secondary-900 via-primary-900 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="section-container relative z-10">
        <div className={`text-center header-spacing transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Track Record of <span className="text-gradient-secondary">Excellence</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for our commitment to delivering exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={stat.key}
                className={`text-center transition-all duration-1000 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="glass-card p-4 xs:p-5 sm:p-6 md:p-8 group hover:scale-105 transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-white/10 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:bg-white/20 transition-all duration-300 ${
                    isVisible ? 'animate-bounce-slow' : ''
                  }`} style={{ animationDelay: `${index * 200 + 500}ms` }}>
                    <IconComponent className="text-white" size={20} />
                  </div>

                  {/* Counter */}
                  <div className="mb-3 sm:mb-4">
                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2">
                      {counters[stat.key]}{stat.suffix}
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white/90 mb-1 sm:mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="w-full bg-white/20 rounded-full h-1 mb-3 sm:mb-4">
                    <div 
                      className="bg-gradient-to-r from-primary-400 to-primary-600 h-1 rounded-full transition-all duration-2000 ease-out"
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 200 + 1000}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-white/80 text-lg mb-6">
            Ready to become our next success story?
          </p>
          <button className="btn-secondary group">
            <span>Start Your Project</span>
            <TrendingUp size={20} className="ml-2 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default StatsSection