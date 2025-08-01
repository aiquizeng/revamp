import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ServiceCard = ({ icon: Icon, title, description, features, roi }) => {
  return (
    <div className="group modern-card p-8 hover:scale-[1.02] relative overflow-hidden h-full flex flex-col">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-primary-100/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
          <Icon className="text-white transition-all duration-300 group-hover:scale-110" size={28} />
        </div>
        
        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start mb-4 gap-2">
          <h3 className="service-card-title text-xl xs:text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300 flex-1">
            {title}
          </h3>
          {roi && (
            <div className="service-roi-badge bg-green-100 text-green-800 px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-bold self-start text-center leading-tight max-w-20 xs:max-w-32 sm:max-w-none overflow-hidden break-words">
              {roi}
            </div>
          )}
        </div>
        
        <p className="service-card-description text-secondary-600 mb-6 leading-relaxed text-lg group-hover:text-secondary-700 transition-colors duration-300">
          {description}
        </p>
      
        {features && (
          <ul className="space-y-3 mb-6 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-secondary-600 group-hover:text-secondary-700 transition-all duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-3 group-hover:scale-125 transition-all duration-300"></div>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto">
          <Link to="/contact" className="w-full inline-block text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 xs:px-6 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg text-sm xs:text-base">
            💰 Get Quote
          </Link>
        </div>
        
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  roi: PropTypes.string
}

export default ServiceCard