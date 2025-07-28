import { useState } from 'react'
import React from 'react'
import { Code, Database, Cloud, Shield, Brain, Smartphone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [ref, isVisible] = useScrollAnimation(0.1)

  const categories = {
    frontend: {
      icon: Code,
      title: 'Frontend',
      description: 'Modern, responsive user interfaces',
      technologies: [
        { name: 'React', logo: '⚛️', level: 95 },
        { name: 'Vue.js', logo: '💚', level: 90 },
        { name: 'Angular', logo: '🅰️', level: 85 },
        { name: 'Next.js', logo: '▲', level: 92 },
        { name: 'TypeScript', logo: '📘', level: 88 },
        { name: 'Tailwind CSS', logo: '🎨', level: 94 }
      ]
    },
    backend: {
      icon: Database,
      title: 'Backend',
      description: 'Scalable server-side solutions',
      technologies: [
        { name: 'Node.js', logo: '🟢', level: 93 },
        { name: 'Python', logo: '🐍', level: 91 },
        { name: 'Java', logo: '☕', level: 87 },
        { name: 'PostgreSQL', logo: '🐘', level: 89 },
        { name: 'MongoDB', logo: '🍃', level: 86 },
        { name: 'Redis', logo: '🔴', level: 84 }
      ]
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Robust infrastructure and deployment',
      technologies: [
        { name: 'AWS', logo: '☁️', level: 92 },
        { name: 'Docker', logo: '🐳', level: 90 },
        { name: 'Kubernetes', logo: '⚙️', level: 85 },
        { name: 'Azure', logo: '🔷', level: 88 },
        { name: 'GCP', logo: '🌐', level: 86 },
        { name: 'Terraform', logo: '🏗️', level: 83 }
      ]
    },
    security: {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade protection',
      technologies: [
        { name: 'OAuth 2.0', logo: '🔐', level: 94 },
        { name: 'JWT', logo: '🎫', level: 92 },
        { name: 'SSL/TLS', logo: '🔒', level: 95 },
        { name: 'OWASP', logo: '🛡️', level: 89 },
        { name: 'Penetration Testing', logo: '🔍', level: 87 },
        { name: 'GDPR Compliance', logo: '📋', level: 91 }
      ]
    },
    ai: {
      icon: Brain,
      title: 'AI & ML',
      description: 'Intelligent automation solutions',
      technologies: [
        { name: 'TensorFlow', logo: '🧠', level: 88 },
        { name: 'PyTorch', logo: '🔥', level: 86 },
        { name: 'OpenAI', logo: '🤖', level: 93 },
        { name: 'Hugging Face', logo: '🤗', level: 85 },
        { name: 'Scikit-learn', logo: '📊', level: 89 },
        { name: 'Apache Spark', logo: '⚡', level: 82 }
      ]
    },
    mobile: {
      icon: Smartphone,
      title: 'Mobile',
      description: 'Cross-platform mobile apps',
      technologies: [
        { name: 'React Native', logo: '📱', level: 90 },
        { name: 'Flutter', logo: '🐦', level: 87 },
        { name: 'iOS (Swift)', logo: '🍎', level: 85 },
        { name: 'Android (Kotlin)', logo: '🤖', level: 88 },
        { name: 'Expo', logo: '⚡', level: 92 },
        { name: 'PWA', logo: '📲', level: 89 }
      ]
    }
  }

  return (
    <section ref={ref} className="section-spacing bg-gradient-to-br from-secondary-50 to-primary-100">
      <div className="section-container">
        <div className={`text-center header-spacing transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to build scalable, secure, and innovative solutions
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 mb-4 xs:mb-6 sm:mb-8 px-1 xs:px-2">
            {Object.entries(categories).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-1 xs:space-x-2 sm:space-x-3 px-1.5 xs:px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 xs:py-2 sm:py-3 md:py-4 rounded-md xs:rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base whitespace-nowrap ${
                    activeCategory === key
                      ? 'bg-primary-600 text-white shadow-xl shadow-primary-600/25'
                      : 'bg-white text-secondary-700 hover:bg-primary-50 shadow-lg border border-primary-100'
                  }`}
                >
                  <IconComponent size={12} className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>

          {/* Active Category Content */}
          <div className="modern-card p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
            <div className="text-center mb-4 xs:mb-6 sm:mb-8 md:mb-10">
              <div className={`inline-flex items-center justify-center w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg xs:rounded-xl sm:rounded-2xl mb-2 xs:mb-3 sm:mb-4 ${
                isVisible ? 'animate-bounce-slow' : ''
              }`}>
                {React.createElement(categories[activeCategory].icon, { 
                  size: 16, 
                  className: "text-white w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
                })}
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 mb-2 xs:mb-3 sm:mb-4 leading-tight">
                {categories[activeCategory].title}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-secondary-600 max-w-2xl mx-auto px-1 xs:px-2 leading-relaxed">
                {categories[activeCategory].description}
              </p>
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
              {categories[activeCategory].technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group bg-white p-2 xs:p-3 sm:p-4 md:p-6 rounded-md xs:rounded-lg sm:rounded-xl border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 mb-2 xs:mb-3 sm:mb-4">
                    <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl">{tech.logo}</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-secondary-900 group-hover:text-primary-600 transition-colors text-xs xs:text-sm sm:text-base truncate">
                        {tech.name}
                      </h4>
                      <span className="text-xs text-secondary-500">
                        Expertise: {tech.level}%
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-secondary-200 rounded-full h-1 xs:h-1.5 sm:h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-primary-700 h-1 xs:h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${tech.level}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack