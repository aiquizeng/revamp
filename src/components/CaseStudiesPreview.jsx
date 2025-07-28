import { ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CaseStudiesPreview = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  const caseStudies = [
    {
      title: 'E-commerce AI Revolution',
      client: 'RetailPro Enterprise',
      category: 'Enterprise AI',
      challenge: 'High customer support costs and low satisfaction scores',
      solution: 'Custom AI chatbot with natural language processing',
      results: [
        { icon: TrendingUp, metric: '40%', label: 'Increase in Customer Satisfaction' },
        { icon: Users, metric: '60%', label: 'Reduction in Support Tickets' },
        { icon: Clock, metric: '<2s', label: 'Average Response Time' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['AI/ML', 'React', 'Node.js', 'OpenAI'],
      color: 'from-primary-500 to-primary-700'
    },
    {
      title: 'Healthcare Data Transformation',
      client: 'HealthTech Solutions',
      category: 'Custom Software',
      challenge: 'Inefficient patient data management and compliance issues',
      solution: 'HIPAA-compliant platform with real-time analytics',
      results: [
        { icon: TrendingUp, metric: '10x', label: 'Faster Data Processing' },
        { icon: Users, metric: '95%', label: 'User Adoption Rate' },
        { icon: Award, metric: '85%', label: 'Error Reduction' }
      ],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      tags: ['Python', 'Django', 'PostgreSQL', 'React'],
      color: 'from-primary-600 to-primary-800'
    },
    {
      title: 'Fintech Security Overhaul',
      client: 'SecureFinance Inc.',
      category: 'Cybersecurity',
      challenge: 'Multiple security vulnerabilities and compliance gaps',
      solution: 'Comprehensive security audit and infrastructure hardening',
      results: [
        { icon: Award, metric: '47', label: 'Vulnerabilities Fixed' },
        { icon: TrendingUp, metric: '100%', label: 'Compliance Score' },
        { icon: Users, metric: 'A+', label: 'Security Rating' }
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      tags: ['Security Testing', 'Compliance', 'Infrastructure'],
      color: 'from-primary-700 to-primary-900'
    }
  ]

  return (
    <section ref={ref} className="section-spacing bg-gradient-to-br from-secondary-50 to-primary-100">
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center header-spacing transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable digital transformations
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="content-spacing">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`modern-card overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}>
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-90 transition-all duration-500 z-10`}></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 xs:h-56 sm:h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <button className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                      <span className="hidden xs:inline">View Full Case Study</span>
                      <span className="xs:hidden">View Case</span>
                      <ArrowRight size={16} className="sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 xs:top-4 left-2 xs:left-4 bg-white/90 backdrop-blur-sm px-2 xs:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-secondary-700">
                    {study.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="mb-3 xs:mb-4 sm:mb-6">
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 mb-1 xs:mb-2 leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-primary-600 font-semibold text-sm xs:text-base sm:text-lg">
                      {study.client}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-2 xs:space-y-3 sm:space-y-4 mb-4 xs:mb-6 sm:mb-8">
                    <div>
                      <h4 className="font-bold text-secondary-800 mb-1 text-xs xs:text-sm sm:text-base">Challenge:</h4>
                      <p className="text-secondary-600 leading-relaxed text-xs xs:text-sm sm:text-base">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-800 mb-1 text-xs xs:text-sm sm:text-base">Solution:</h4>
                      <p className="text-secondary-600 leading-relaxed text-xs xs:text-sm sm:text-base">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-4 xs:mb-6 sm:mb-8">
                    <h4 className="font-bold text-secondary-800 mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">Key Results:</h4>
                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 xs:gap-3 sm:gap-4">
                      {study.results.map((result, resultIndex) => {
                        const IconComponent = result.icon
                        return (
                          <div 
                            key={resultIndex}
                            className="text-center p-2 xs:p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-md"
                          >
                            <div className={`inline-flex items-center justify-center w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-gradient-to-r ${study.color} rounded-lg sm:rounded-xl mb-1 xs:mb-2`}>
                              <IconComponent className="text-white" size={14} />
                            </div>
                            <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-secondary-900">
                              {result.metric}
                            </div>
                            <div className="text-xs leading-tight text-secondary-600">
                              {result.label}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-3 xs:mb-4 sm:mb-6">
                    <h4 className="font-bold text-secondary-800 mb-1 xs:mb-2 sm:mb-3 text-xs xs:text-sm sm:text-base">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="btn-ghost group text-xs xs:text-sm sm:text-base">
                    <span className="hidden xs:inline">Read Full Case Study</span>
                    <span className="xs:hidden">Read More</span>
                    <ArrowRight size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 ml-1 xs:ml-2 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-4 xs:mt-6 sm:mt-8 md:mt-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12 text-white">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-2 xs:mb-3 sm:mb-4 leading-tight">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 mb-4 xs:mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of businesses that have transformed their operations with our digital solutions.
            </p>
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center">
              <button className="btn-secondary text-xs xs:text-sm sm:text-base px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4">
                <span className="hidden xs:inline">View All Case Studies</span>
                <span className="xs:hidden">View All Cases</span>
                <ArrowRight size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 ml-1 xs:ml-2 flex-shrink-0" />
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap bg-white/10 backdrop-blur-sm text-white border border-white/20 px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 text-xs xs:text-sm sm:text-base">
                <span>Start Your Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview