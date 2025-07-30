import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const checkAuth = useCallback(async () => {
    try {
      const localAuth = localStorage.getItem('isAuthenticated')
      
      if (localAuth === 'true') {
        setIsAuthenticated(true)
      } else {
        const { getSupabase } = await import('../lib/supabase')
        const supabase = getSupabase()
        
        if (supabase) {
          const { data: { session } } = await supabase.auth.getSession()
          if (session) {
            setIsAuthenticated(true)
          } else {
            navigate('/admin-login')
          }
        } else {
          navigate('/admin-login')
        }
      }
    } catch (error) {
      const localAuth = localStorage.getItem('isAuthenticated')
      if (localAuth === 'true') {
        setIsAuthenticated(true)
      } else {
        navigate('/admin-login')
      }
    } finally {
      setIsLoading(false)
    }
  }, [navigate])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return isAuthenticated ? children : null
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedRoute