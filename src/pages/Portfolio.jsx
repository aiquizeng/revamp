import { ExternalLink, Calendar, Tag } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce AI Assistant',
      category: 'Enterprise AI',
      description: 'Custom AI chatbot for a major retail client that increased customer satisfaction by 40% and reduced support ticket volume by 60%.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      date: '2024',
      metrics: [
        { label: 'Customer Satisfaction', value: '+40%' },
        { label: 'Support Tickets', value: '-60%' },
        { label: 'Response Time', value: '< 2 sec' }
      ]
    },
    {
      title: 'Financial Services Security Audit',
      category: 'Cybersecurity',
      description: 'Comprehensive security assessment and infrastructure hardening for a fintech startup, ensuring SOC 2 compliance.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      technologies: ['Security Testing', 'Compliance', 'Infrastructure'],
      date: '2024',
      metrics: [
        { label: 'Vulnerabilities Fixed', value: '47' },
        { label: 'Compliance Score', value: '100%' },
        { label: 'Security Rating', value: 'A+' }
      ]
    },
    {
      title: 'Healthcare Data Platform',
      category: 'Custom Software',
      description: 'HIPAA-compliant patient data management system with real-time analytics and automated reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      technologies: ['Python', 'Django', 'PostgreSQL', 'React'],
      date: '2023',
      metrics: [
        { label: 'Data Processing', value: '10x faster' },
        { label: 'User Adoption', value: '95%' },
        { label: 'Error Reduction', value: '-85%' }
      ]
    },
    {
      title: 'Market Research Dashboard',
      category: 'Digital Strategy',
      description: 'Real-time market intelligence platform that aggregates data from multiple sources to provide actionable business insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'AWS'],
      date: '2023',
      metrics: [
        { label: 'Data Sources', value: '50+' },
        { label: 'Analysis Speed', value: '5x faster' },
        { label: 'Decision Accuracy', value: '+65%' }
      ]
    }
  ]

  const categories = ['All', 'Enterprise AI', 'Cybersecurity', 'Custom Software', 'Digital Strategy']

  return (
    <div className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Explore some of our recent projects and discover how we've helped businesses 
            transform through innovative digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-primary-200 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                  <Calendar size={14} className="mr-1" />
                  <span className="text-sm">{project.date}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-sm"
                    >
                      <Tag size={12} className="mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-gray-100">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {metric.value}
                      </div>
                      <div className="text-xs text-secondary-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                  View Case Study
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business 
            with our comprehensive digital solutions.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio