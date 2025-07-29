import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import ServiceCard from '../components/ServiceCard'
import TechStack from '../components/TechStack'
import StatsSection from '../components/StatsSection'
import CaseStudiesPreview from '../components/CaseStudiesPreview'
import TrustedCompanies from '../components/TrustedCompanies'
import { Search, Code, Bot, Shield, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Market Research & Validation',
      description: '💰 Reduce product launch risks through data-driven validation. Get competitor intelligence and market insights to make informed decisions.',
      features: ['Risk Evaluation & Validation', 'Market Analysis & Insights', 'Competitor Intelligence', 'Strategic Planning'],
      roi: 'Risk Reduction'
    },
    {
      icon: Code,
      title: 'Custom Software & Automation',
      description: '⚡ Streamline operations with custom automation solutions. Reduce manual work and improve efficiency.',
      features: ['Process Automation', 'Workflow Optimization', 'Error Reduction', '24/7 Operations'],
      roi: 'Efficiency Gains'
    },
    {
      icon: Bot,
      title: 'AI Agents & Chatbots',
      description: '🤖 Automate customer support with intelligent chatbots. Provide 24/7 assistance and improve response times.',
      features: ['Automated Support', 'Improved Response Times', '24/7 Availability', 'Lead Generation'],
      roi: 'Cost Savings'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: '🛡️ Protect your business with enterprise-grade security solutions. Ensure compliance and prevent potential breaches.',
      features: ['Security Review', 'Compliance Management', 'Breach Prevention', 'Risk Mitigation'],
      roi: 'Risk Protection'
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: '📈 Transform your business with comprehensive digital solutions. Modernize operations and stay competitive.',
      features: ['Digital Modernization', 'Competitive Advantage', 'Future-Ready Solutions', 'Innovation Focus'],
      roi: 'Growth Potential'
    }
  ]


  return (
    <div>
      <Hero />
      
      <StatsSection />
      
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="text-center header-spacing">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our <span className="text-gradient">Core Services</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to accelerate your business growth 
              and competitive advantage in today's digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                roi={service.roi}
              />
            ))}
          </div>

        </div>
      </section>

      <TechStack />

      <CaseStudiesPreview />

      <TrustedCompanies />

      <WhyChooseUs />

      <section className="section-spacing bg-gradient-to-r from-green-600 to-green-800 text-white relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="section-container text-center relative z-10 pt-8">
          <div className="bg-yellow-400 text-black px-3 xs:px-4 py-2 rounded-full inline-block text-xs xs:text-sm font-bold mb-6 animate-bounce-slow text-center max-w-xs xs:max-w-sm mx-auto">
            🚀 SPECIAL OFFER: Free Consultation
          </div>
          <h2 className="final-cta-title text-3xl md:text-5xl font-bold mb-6">
            Don't Let Competitors Beat You
          </h2>
          <p className="final-cta-text text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            While you're thinking, your competitors are growing. <strong>Join 51+ companies</strong> who 
            transformed their operations with our solutions.
          </p>
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/contact" className="final-cta-button inline-flex items-center justify-center bg-yellow-400 text-black px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-110 shadow-2xl text-sm xs:text-base sm:text-lg text-center">
              <span className="block xs:inline">🚀 GET STARTED</span>
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Home