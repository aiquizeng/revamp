import { memo } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TrustedCompanies = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const clientLogos = [
    { name: 'AirAsia', logo: '✈️', industry: 'Aviation' },
    { name: 'Shopee', logo: '🛒', industry: 'E-commerce' },
    { name: 'Jio', logo: '📱', industry: 'Telecom' },
    { name: 'Tokopedia', logo: '🛍️', industry: 'E-commerce' },
    { name: 'Samsung', logo: '📱', industry: 'Electronics' },
    { name: 'Dominos', logo: '🍕', industry: 'Food' },
    { name: 'Lazada', logo: '🛒', industry: 'E-commerce' },
    { name: 'H&M', logo: '👕', industry: 'Fashion' },
    { name: 'IOH', logo: '📡', industry: 'Telecom' },
    { name: 'Telkomsel', logo: '📶', industry: 'Telecom' },
    { name: 'XL Smart', logo: '📳', industry: 'Telecom' },
    { name: 'Vodafone', logo: '📞', industry: 'Telecom' },
    { name: 'MTN', logo: '📱', industry: 'Telecom' },
    { name: 'Ooredoo', logo: '📡', industry: 'Telecom' },
    { name: 'Airtel', logo: '📶', industry: 'Telecom' },
    { name: 'Safaricom', logo: '🌍', industry: 'Telecom' },
    { name: 'Bank Mega', logo: '🏦', industry: 'Finance' },
    { name: 'AXA Mandiri', logo: '🏛️', industry: 'Finance' }
  ]

  return (
    <section ref={ref} className="section-spacing bg-gradient-to-br from-secondary-50 to-primary-50 overflow-hidden">
      <div className="section-container relative">
        {/* Section Header */}
        <div className={`text-center header-spacing transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with leading companies across various industries worldwide.
          </p>
        </div>

        {/* Client Logos */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 xs:gap-3 sm:gap-4 md:gap-6 items-center p-2">
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className="group flex flex-col items-center justify-center p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 bg-white rounded-md xs:rounded-lg sm:rounded-xl hover:bg-primary-50 transition-all duration-300 hover:scale-105 cursor-pointer border border-transparent hover:border-primary-200 min-h-[60px] xs:min-h-[70px] sm:min-h-[80px] md:min-h-[90px] lg:min-h-[100px] shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl mb-1 xs:mb-2 group-hover:scale-105 transition-transform duration-300">
                  {client.logo}
                </div>
                <div className="text-xs sm:text-sm font-bold text-secondary-800 group-hover:text-primary-600 transition-colors text-center leading-tight mb-1">
                  {client.name}
                </div>
                <div className="text-xs text-secondary-500 text-center">
                  {client.industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(TrustedCompanies)