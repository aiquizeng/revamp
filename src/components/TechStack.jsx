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
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-2">
            {Object.entries(categories).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-1 xs:space-x-2 sm:space-x-3 px-2 xs:px-3 sm:px-4 md:px-6 py-2 xs:py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-xs xs:text-sm sm:text-base whitespace-nowrap ${
                    activeCategory === key
                      ? 'bg-primary-600 text-white shadow-xl shadow-primary-600/25'
                      : 'bg-white text-secondary-700 hover:bg-primary-50 shadow-lg border border-primary-100'
                  }`}
                >
                  <IconComponent size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">{category.title}</span>
                  <span className="xs:hidden">{category.title.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>

          {/* Active Category Content */}
          <div className="modern-card p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className={`inline-flex items-center justify-center w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${
                isVisible ? 'animate-bounce-slow' : ''
              }`}>
                {React.createElement(categories[activeCategory].icon, { 
                  size: 20, 
                  className: "text-white xs:w-6 xs:h-6 sm:w-7 sm:h-7" 
                })}
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-secondary-900 mb-3 sm:mb-4">
                {categories[activeCategory].title}
              </h3>
              <p className="text-sm xs:text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto px-2">
                {categories[activeCategory].description}
              </p>
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {categories[activeCategory].technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group bg-white p-3 xs:p-4 sm:p-6 rounded-lg sm:rounded-xl border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <span className="text-xl xs:text-2xl sm:text-3xl">{tech.logo}</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-secondary-900 group-hover:text-primary-600 transition-colors text-sm sm:text-base truncate">
                        {tech.name}
                      </h4>
                      <span className="text-xs sm:text-sm text-secondary-500">
                        Expertise: {tech.level}%
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-secondary-200 rounded-full h-1.5 sm:h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-primary-700 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
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