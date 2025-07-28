import { useState } from 'react'
import { Search, Code, Bot, Shield, TrendingUp, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'

const Services = () => {
  const [expandedService, setExpandedService] = useState(0)

  const services = [
    {
      icon: Search,
      title: 'Product & Market Research',
      subtitle: 'Data-driven insights to power your next big move',
      description: 'We conduct comprehensive market research to validate your ideas, understand your target audience, and identify the most profitable opportunities for your business growth.',
      features: [
        'Target customer persona analysis',
        'Market sizing & trend reports',
        'Competitor benchmarking',
        'MVP validation strategy',
        'Consumer behavior tracking'
      ],
      benefits: [
        'Reduce product development risks by 60%',
        'Identify untapped market segments',
        'Optimize pricing strategies for maximum ROI',
        'Accelerate time-to-market with validated insights'
      ],
      deliverables: [
        'Target customer persona analysis',
        'Market sizing & trend reports',
        'Competitor benchmarking',
        'MVP validation strategy',
        'Consumer behavior tracking'
      ]
    },
    {
      icon: Code,
      title: 'Customized Software & Automation',
      subtitle: 'Bespoke tech solutions built for your workflow',
      description: 'We develop custom software applications and automation systems tailored to your specific business processes, helping you eliminate manual work and scale efficiently.',
      features: [
        'Custom web & mobile apps',
        'Workflow automation (CRM, finance)',
        'API integration & system modernization',
        'Internal dashboards & BI tools',
        'Legacy system upgrades'
      ],
      benefits: [
        'Increase operational efficiency by 40%',
        'Reduce manual work through automation',
        'Scalable solutions that grow with your business',
        'Seamless integration with existing systems'
      ],
      deliverables: [
        'Custom web & mobile apps',
        'Workflow automation (CRM, finance)',
        'API integration & system modernization',
        'Internal dashboards & BI tools',
        'Legacy system upgrades'
      ]
    },
    {
      icon: Bot,
      title: 'Enterprise-Grade AI Agent',
      subtitle: 'Automate with intelligence. Scale with confidence.',
      description: 'Our AI agents handle complex business processes automatically, from customer service to internal operations, helping you scale without proportionally increasing costs.',
      features: [
        'Lead qualification & nurturing',
        'Smart customer service (24/7)',
        'Internal AI assistant for teams',
        'Multilingual chatbot interfaces',
        'AI-powered knowledge retrieval'
      ],
      benefits: [
        'Available 24/7 with consistent performance',
        'Handle 80% of routine inquiries automatically',
        'Improve customer satisfaction scores',
        'Generate actionable business insights'
      ],
      deliverables: [
        'Lead qualification & nurturing',
        'Smart customer service (24/7)',
        'Internal AI assistant for teams',
        'Multilingual chatbot interfaces',
        'AI-powered knowledge retrieval'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      subtitle: 'Protect your business & money with proactive defense',
      description: 'Comprehensive cybersecurity services to protect your digital assets, ensure compliance, and maintain customer trust through robust security measures and continuous monitoring.',
      features: [
        'Risk assessment & gap analysis',
        'Web, cloud, and app vulnerability testing',
        'Data protection & compliance (ISO, GDPR)',
        'Endpoint and network security setup',
        '24/7 threat monitoring & response',
        'Fraud control'
      ],
      benefits: [
        'Protect against 99.9% of known threats',
        'Ensure regulatory compliance',
        'Reduce security incident response time',
        'Build customer trust through security transparency'
      ],
      deliverables: [
        'Risk assessment & gap analysis',
        'Web, cloud, and app vulnerability testing',
        'Data protection & compliance (ISO, GDPR)',
        'Endpoint and network security setup',
        '24/7 threat monitoring & response',
        'Fraud control'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      subtitle: 'Turn vision into scalable digital growth',
      description: 'We help you develop and execute comprehensive digital strategies that align with your business goals, from brand positioning to performance optimization.',
      features: [
        'Brand & messaging frameworks',
        'Omnichannel campaigns (SEO + PPC + Social)',
        'Content strategy & distribution',
        'Website funnel optimization',
        'Data dashboards & performance reviews'
      ],
      benefits: [
        'Achieve 3x faster digital transformation',
        'Maximize ROI on technology investments',
        'Improve employee adoption rates',
        'Create sustainable competitive advantages'
      ],
      deliverables: [
        'Brand & messaging frameworks',
        'Omnichannel campaigns (SEO + PPC + Social)',
        'Content strategy & distribution',
        'Website funnel optimization',
        'Data dashboards & performance reviews'
      ]
    }
  ]

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? -1 : index)
  }

  return (
    <div className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business operations, 
            enhance security, and drive sustainable growth through innovative technology.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div
                className="p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleService(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl">
                      <service.icon className="text-primary-600" size={28} />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-primary-600">
                    {expandedService === index ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </div>
                </div>
                
                <p className="text-secondary-600 mt-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {expandedService === index && (
                <div className="px-8 pb-8 border-t border-gray-100">
                  <div className="grid lg:grid-cols-3 gap-8 mt-8">
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-secondary-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                        Key Benefits
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-secondary-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                        Deliverables
                      </h4>
                      <ul className="space-y-3">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-secondary-600 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="btn-primary">
                      Get Started with {service.title}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can create a tailored 
            solution that addresses your specific challenges and goals.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services