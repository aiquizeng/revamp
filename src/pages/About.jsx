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
      name: 'Ahmad Zain',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      bio: '10+ years leading digital transformation initiatives for SMEs and enterprises across Malaysia and Southeast Asia.',
      linkedin: 'https://linkedin.com/in/ahmadzain-digicinta'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      bio: 'Former Google AI researcher with PhD in Machine Learning. Specializes in enterprise AI implementation and automation.',
      linkedin: 'https://linkedin.com/in/priya-sharma-cto'
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Cybersecurity',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      bio: 'CISSP certified with 12+ years securing Fortune 500 companies. Previously at Deloitte Cyber Risk Services.',
      linkedin: 'https://linkedin.com/in/marcus-chen-security'
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Director of Strategy',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      bio: 'McKinsey alumna with MBA from INSEAD. Leads digital strategy consulting for mid-market and enterprise clients.',
      linkedin: 'https://linkedin.com/in/fatima-alrashid-strategy'
    }
  ]

  const stats = [
    { number: '200+', label: 'Projects Delivered' },
    { number: '94%', label: 'Client Retention Rate' },
    { number: '25+', label: 'Team Specialists' },
    { number: '4', label: 'Years of Impact' }
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
                Founded in 2020 during the global digital acceleration, DigiCinta emerged from 
                a team of senior consultants who witnessed firsthand how traditional businesses 
                struggled with rapid digitalization. With backgrounds from McKinsey, Google, 
                and Deloitte, our founders combined strategy expertise with deep technical knowledge 
                to create a consultancy that truly bridges business and technology.
              </p>
              <p>
                Starting with three consultants in Kuala Lumpur, we've grown to a distributed team 
                of 25+ specialists serving clients across APAC and beyond. Our early wins with 
                manufacturing automation and e-commerce platforms established our reputation, 
                leading to partnerships with mid-market companies and Fortune 1000 enterprises 
                seeking practical AI implementation and digital transformation.
              </p>
              <p>
                Today, DigiCinta is recognized for delivering measurable ROI through technology. 
                Our clients typically see 25-40% operational efficiency improvements within 
                6 months. We've completed over 200 projects, from AI-powered customer service 
                bots to comprehensive cybersecurity overhauls, always focusing on sustainable, 
                long-term business impact.
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