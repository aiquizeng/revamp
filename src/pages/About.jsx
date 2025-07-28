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

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      bio: '15+ years in enterprise software development and digital transformation leadership.'
    },
    {
      name: 'Sarah Kim',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      bio: 'AI/ML expert with PhD in Computer Science and extensive experience in enterprise AI solutions.'
    },
    {
      name: 'Michael Thompson',
      role: 'Head of Cybersecurity',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      bio: 'Former cybersecurity consultant with 12+ years protecting enterprise infrastructure.'
    },
    {
      name: 'Emily Chen',
      role: 'Head of Strategy',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'Digital transformation strategist with MBA and track record of successful business transformations.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '5', label: 'Years of Excellence' }
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
                Founded in 2019, DigiCinta emerged from a simple yet powerful vision: 
                to bridge the gap between innovative technology and practical business solutions. 
                Our founders, with combined decades of experience in enterprise software 
                and digital transformation, recognized the need for a consultancy that could 
                truly understand both technical possibilities and business realities.
              </p>
              <p>
                What started as a small team of developers has grown into a comprehensive 
                digital solutions provider, serving clients from startups to Fortune 500 companies. 
                We've helped organizations across various industries harness the power of AI, 
                strengthen their cybersecurity posture, and execute successful digital transformations.
              </p>
              <p>
                Today, DigiCinta stands as a trusted partner for businesses seeking to navigate 
                the complex digital landscape. Our success is measured not just in projects delivered, 
                but in the long-term growth and success of our clients.
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

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {member.bio}
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