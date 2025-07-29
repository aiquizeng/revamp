import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Link } from 'react-router-dom'

const BusinessTestimonials = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: '',
      role: 'CEO',
      company: 'TechCore Systems',
      content: 'DigiCinta transformed our operations with effective automation solutions. Their professional approach and technical expertise exceeded our expectations.',
      result: 'Improved Efficiency',
      savings: 'Process Optimization',
      timeframe: 'Project Timeline',
      rating: 5,
      industry: 'Technology'
    },
    {
      name: '',
      role: 'Founder',
      company: 'ShopFlow',
      content: 'The custom software solution streamlined our operations significantly. The team delivered quality work and provided excellent ongoing support.',
      result: 'Better Performance',
      savings: 'Cost Effective',
      timeframe: 'Timely Delivery',
      rating: 5,
      industry: 'E-commerce'
    },
    {
      name: '',
      role: 'Director',
      company: 'SecureFinance',
      content: 'Their cybersecurity solution provided comprehensive protection for our systems. Professional implementation and thorough documentation.',
      result: 'Enhanced Security',
      savings: 'Risk Mitigation',
      timeframe: 'Quick Implementation',
      rating: 5,
      industry: 'Finance'
    },
    {
      name: '',
      role: 'COO',
      company: 'GlobalConnect',
      content: 'The AI chatbot implementation improved our customer service capabilities. Well-designed solution with intuitive user interface.',
      result: 'Better Service',
      savings: 'Operational Efficiency',
      timeframe: 'Smooth Rollout',
      rating: 5,
      industry: 'Telecom'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="section-spacing bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="section-container relative">
        {/* Section Header */}
        <div className={`text-center header-spacing transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results, Real <span className="text-yellow-400">ROI</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            See how our clients achieved measurable business growth and ROI within months.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden border border-white/20">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={24} 
                      className="text-yellow-400 fill-current mr-1" 
                    />
                  ))}
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 xs:gap-4 mb-6 xs:mb-8">
                  <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-3 xs:p-4 text-center border border-green-400/30">
                    <TrendingUp className="mx-auto mb-2 text-green-400" size={20} />
                    <div className="testimonial-metric font-bold text-sm xs:text-base lg:text-lg text-green-400">{testimonials[currentTestimonial].result}</div>
                    <div className="testimonial-metric text-xs xs:text-sm text-green-200">Business Impact</div>
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 xs:p-4 text-center border border-blue-400/30">
                    <div className="text-xl xs:text-2xl mb-2">💰</div>
                    <div className="testimonial-metric font-bold text-sm xs:text-base lg:text-lg text-blue-400">{testimonials[currentTestimonial].savings}</div>
                    <div className="testimonial-metric text-xs xs:text-sm text-blue-200">Cost Savings</div>
                  </div>
                  <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-3 xs:p-4 text-center border border-purple-400/30">
                    <div className="text-xl xs:text-2xl mb-2">⚡</div>
                    <div className="testimonial-metric font-bold text-sm xs:text-base lg:text-lg text-purple-400">{testimonials[currentTestimonial].timeframe}</div>
                    <div className="testimonial-metric text-xs xs:text-sm text-purple-200">Time to Results</div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="testimonial-text text-base xs:text-lg md:text-xl lg:text-2xl text-white text-center mb-6 xs:mb-8 leading-relaxed font-light italic px-2 xs:px-0 break-words">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="text-center md:text-left">
                    <div className="text-blue-200 text-lg font-semibold">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </div>
                    <div className="text-yellow-400 font-medium text-sm">
                      {testimonials[currentTestimonial].industry}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/40"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/40"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-110 transition-all duration-300 shadow-xl">
            🎯 Get Started Today
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BusinessTestimonials