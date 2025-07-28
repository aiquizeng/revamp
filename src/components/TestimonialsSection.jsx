import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TestimonialsSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      company: 'TechCorp Solutions',
      content: 'DigiCinta transformed our entire digital infrastructure. Their AI solutions increased our operational efficiency by 60% and significantly improved our customer satisfaction scores.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      company: 'InnovateLab Inc.',
      content: 'The cybersecurity audit and implementation by DigiCinta was exceptional. They identified critical vulnerabilities and provided comprehensive solutions that secured our entire network.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations, HealthTech',
      company: 'HealthTech Solutions',
      content: 'Their custom healthcare platform exceeded our expectations. The HIPAA-compliant system streamlined our operations and improved patient data management significantly.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Kim',
      role: 'VP of Technology, RetailPro',
      company: 'RetailPro Enterprise',
      content: 'DigiCinta\'s e-commerce AI assistant revolutionized our customer service. The 40% increase in satisfaction and 60% reduction in support tickets speaks volumes.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face'
    }
  ]

  const clientLogos = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateLab', logo: '🔬' },
    { name: 'HealthTech', logo: '🏥' },
    { name: 'RetailPro', logo: '🛍️' },
    { name: 'FinanceFirst', logo: '💰' },
    { name: 'EduTech', logo: '🎓' },
    { name: 'ManufacturePlus', logo: '🏭' },
    { name: 'StartupHub', logo: '🚀' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="section-spacing bg-gradient-to-br from-secondary-50 to-primary-50 overflow-hidden">
      <div className="section-container relative">
        {/* Section Header */}
        <div className={`text-center header-spacing transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about our work.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="modern-card p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-2 xs:top-3 sm:top-4 md:top-6 right-2 xs:right-3 sm:right-4 md:right-6 opacity-10">
                <Quote size={24} className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-primary-600" />
              </div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex justify-center mb-3 xs:mb-4 sm:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-yellow-500 fill-current mr-1" 
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-700 text-center mb-4 xs:mb-6 sm:mb-8 leading-relaxed font-light italic px-1 xs:px-2">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col xs:flex-row items-center justify-center space-y-2 xs:space-y-0 xs:space-x-3 sm:space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 rounded-full border-2 xs:border-3 sm:border-4 border-primary-100"
                  />
                  <div className="text-center xs:text-left">
                    <div className="font-bold text-secondary-900 text-sm xs:text-base sm:text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-secondary-600 text-xs xs:text-sm sm:text-base">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-primary-600 font-medium text-xs sm:text-sm">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 xs:left-1 sm:left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-1.5 xs:p-2 sm:p-3 md:p-4 hover:bg-primary-50 transition-all duration-300 hover:scale-110 border border-primary-100 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center z-30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 xs:right-1 sm:right-2 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-1.5 xs:p-2 sm:p-3 md:p-4 hover:bg-primary-50 transition-all duration-300 hover:scale-110 border border-primary-100 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center z-30"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 xs:mt-5 sm:mt-6 space-x-2 xs:space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary-600 scale-125'
                      : 'bg-secondary-300 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-center text-secondary-900 mb-6 xs:mb-8 sm:mb-10">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className="group flex flex-col items-center justify-center p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 bg-secondary-50 rounded-md xs:rounded-lg sm:rounded-xl hover:bg-primary-50 transition-all duration-300 hover:scale-105 cursor-pointer border border-transparent hover:border-primary-200 min-h-[60px] xs:min-h-[70px] sm:min-h-[80px] md:min-h-[90px] lg:min-h-[100px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 xs:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <div className="text-xs font-medium text-secondary-600 group-hover:text-primary-600 transition-colors text-center leading-tight">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection