import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import ServiceCard from '../components/ServiceCard'
import TechStack from '../components/TechStack'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CaseStudiesPreview from '../components/CaseStudiesPreview'
import { Search, Code, Bot, Shield, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Product & Market Research',
      description: 'Data-driven insights to validate your ideas and identify market opportunities with comprehensive competitive analysis.',
      features: ['Market Analysis', 'User Research', 'Competitive Intelligence', 'Product Validation']
    },
    {
      icon: Code,
      title: 'Custom Software & Automation',
      description: 'Tailored software solutions and automation systems designed to streamline operations and boost productivity.',
      features: ['Web Applications', 'Mobile Apps', 'Process Automation', 'System Integration']
    },
    {
      icon: Bot,
      title: 'Enterprise AI Agents',
      description: 'Intelligent AI-powered agents that automate complex workflows and provide 24/7 business support.',
      features: ['Workflow Automation', 'Customer Support Bots', 'Data Processing', 'Predictive Analytics']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security frameworks to protect your digital assets and ensure regulatory compliance.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy Consulting',
      description: 'Strategic roadmaps for digital transformation that align technology investments with business goals.',
      features: ['Digital Transformation', 'Technology Roadmaps', 'Change Management', 'ROI Optimization']
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
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <TechStack />

      <CaseStudiesPreview />

      <TestimonialsSection />

      <WhyChooseUs />

      <section className="section-spacing bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how DigiCinta can help transform your business with 
            innovative digital solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center whitespace-nowrap bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 hover:scale-105">
              <span>Schedule Consultation</span>
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center whitespace-nowrap border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105">
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home