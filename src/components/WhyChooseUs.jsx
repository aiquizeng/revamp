import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Zap, Users, Award } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WhyChooseUs = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)
  const reasons = [
    {
      icon: Users,
      title: 'Tailored to You',
      description: 'Every solution is designed around your needs, not a template.'
    },
    {
      icon: Zap,
      title: 'Tech + Business Mindset',
      description: 'We bring strategic thinking alongside deep technical build capacity.'
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Every product includes best-in-class security protocols.'
    },
    {
      icon: Award,
      title: 'Results That Scale',
      description: 'Our services are built to grow with your business.'
    }
  ]

  return (
    <section ref={ref} className="section-spacing bg-white">
      <div className="section-container">
        <div className={`text-center header-spacing transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Why Choose DigiCinta?
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with strategic thinking to deliver 
            solutions that drive real business growth and transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-6 group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <reason.icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed group-hover:text-secondary-700 transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of companies that trust DigiCinta to deliver innovative 
            digital solutions and drive sustainable growth.
          </p>
          <Link to="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200">
            Start Your Project Today
          </Link>
        </div>
      </div>
    </section>
  )
}

export default memo(WhyChooseUs)