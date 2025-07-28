import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0)
    
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className={`transition-all duration-300 ease-out transform ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-4'
    }`}>
      {children}
    </div>
  )
}

PageTransition.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageTransition