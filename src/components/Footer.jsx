import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Product & Market Research',
    'Custom Software Development',
    'Enterprise AI Agents',
    'Cybersecurity Solutions',
    'Digital Strategy Consulting'
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/digi-cinta-kreatif/' }
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <span className="text-xl font-bold">DigiCinta</span>
            </Link>
            <p className="text-secondary-300 mb-4">
              Empowering businesses with cutting-edge digital solutions, AI innovation, and strategic technology consulting.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-secondary-400 hover:text-primary-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  aria-label={social.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-secondary-300">business@digicinta.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-secondary-300">South Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            © {currentYear} DigiCinta. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)