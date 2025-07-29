import { Users, Target, Lightbulb, Award } from 'lucide-react'
import WhyChooseUs from '../components/WhyChooseUs'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to empowering businesses through innovative digital solutions that drive real results and sustainable growth.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, continuously exploring new possibilities to solve complex business challenges.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to our clients\' unique needs, ensuring maximum value and long-term success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    }
  ]


  const stats = [
    { number: '51+', label: 'Projects Delivered' },
    { number: '94%', label: 'Client Retention Rate' },
    { number: '11+', label: 'Team Specialists' },
    { number: '8+', label: 'Years Experience' }
  ]

  return (
    <div className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About <span className="text-gradient">DigiCinta</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate technologists, strategists, and innovators 
            dedicated to transforming businesses through cutting-edge digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-secondary-600 leading-relaxed">
              <p>
                Founded in 2017, DigiCinta was born from a shared vision among senior consultants who saw how traditional businesses were struggling to adapt to the fast pace of digital transformation. With deep roots in both the telecom and digital sectors, our founders combined strategic insight with hands-on technical and business expertise to offer solutions that seamlessly bridge technology and profitability for our clients.
              </p>
              <p>
                What began as a small team in Jakarta has grown into a dynamic group of 11+ specialists serving clients across Southeast Asia, APAC, MENA, and beyond. Our early successes with telecom operators and e-commerce platforms helped establish our credibility, paving the way for collaborations with mid-sized firms and large enterprises looking for real-world AI integration and impactful digital transformation.
              </p>
              <p>
                Today, DigiCinta is trusted for delivering tangible business value through technology. Most of our clients see significant operational improvements within just six months. With over 50 successful projects under our belt, from gaming content and affiliate marketing to AI-powered customer engagement and end-to-end cybersecurity upgrades, we remain focused on creating sustainable, long-term growth for every business we serve.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-primary-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-200 rounded-full opacity-10"></div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-6">
                  <value.icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <WhyChooseUs />
    </div>
  )
}

export default About