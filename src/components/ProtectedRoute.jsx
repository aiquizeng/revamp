import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const localAuth = localStorage.getItem('isAuthenticated')
      
      if (session || localAuth === 'true') {
        setIsAuthenticated(true)
      } else {
        navigate('/admin-login')
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      navigate('/admin-login')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return isAuthenticated ? children : null
}

export default ProtectedRoute