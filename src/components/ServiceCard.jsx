import { ArrowRight } from 'lucide-react'
import PropTypes from 'prop-types'

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="group modern-card p-8 hover:scale-105 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-primary-100/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
          <Icon className="text-white transition-all duration-300 group-hover:scale-110" size={28} />
        </div>
        
        <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-secondary-600 mb-6 leading-relaxed text-lg group-hover:text-secondary-700 transition-colors duration-300">
          {description}
        </p>
      
        {features && (
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-secondary-600 group-hover:text-secondary-700 transition-all duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-3 group-hover:scale-125 transition-all duration-300"></div>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <button className="inline-flex items-center whitespace-nowrap text-primary-600 font-semibold hover:text-primary-700 transition-all duration-300 group/btn text-lg">
          <span>Learn More</span>
          <ArrowRight size={20} className="ml-2 flex-shrink-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string)
}

export default ServiceCard