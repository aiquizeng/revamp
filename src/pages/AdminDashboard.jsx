import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { logger } from '../lib/logger'
import { 
  LogOut, 
  Mail, 
  Building, 
  Calendar, 
  MessageSquare, 
  Eye,
  EyeOff,
  Search,
  RefreshCw,
  Users,
  Clock,
  TrendingUp,
  Filter,
  MoreVertical,
  Star,
  Activity
} from 'lucide-react'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [submissions, setSubmissions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [filterService, setFilterService] = useState('')

  const checkAuth = useCallback(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (!isAuthenticated) {
      navigate('/admin-login')
    }
  }, [navigate])

  useEffect(() => {
    checkAuth()
    fetchSubmissions().catch(error => {
      logger.error('Failed to fetch submissions:', error)
      setError('Failed to load submissions')
      setIsLoading(false)
    })
  }, [checkAuth])

  const fetchSubmissions = async () => {
    setIsLoading(true)
    try {
      const { collection, getDocs, orderBy, query } = await import('firebase/firestore')
      const { db } = await import('../lib/firebase')
      
      const submissionsRef = collection(db, 'contact_submissions')
      const q = query(submissionsRef, orderBy('created_at', 'desc'))
      const querySnapshot = await getDocs(q)
      
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setSubmissions(data || [])
    } catch (error) {
      logger.error('Error fetching submissions:', error)
      setError('Failed to load submissions')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      const { signOut } = await import('firebase/auth')
      const { auth } = await import('../lib/firebase')
      await signOut(auth)
    } catch (error) {
      logger.error('Logout error:', error)
    }
    localStorage.removeItem('isAuthenticated')
    navigate('/admin-login')
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }


  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = !searchTerm || 
      submission.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.message?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesService = !filterService || submission.service === filterService
    
    return matchesSearch && matchesService
  })

  const services = [...new Set(submissions.map(s => s.service).filter(Boolean))].sort()
  
  // Debug log

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <RefreshCw className="animate-spin text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Loading Dashboard</h3>
          <p className="text-gray-600 mb-6">Fetching your contact submissions...</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-sm sm:text-base text-secondary-600 flex items-center space-x-2">
                  <span>Manage contact submissions</span>
                  {submissions.length > 0 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {submissions.length} total
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
                title="Refresh"
              >
                <RefreshCw size={18} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Total Submissions</p>
                <p className="text-3xl font-bold text-gray-900">{submissions.length}</p>
                <p className="text-xs text-primary-600 mt-2 flex items-center">
                  <TrendingUp size={12} className="mr-1" />
                  All time
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={24} />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">This Month</p>
                <p className="text-3xl font-bold text-gray-900">
                  {submissions.filter(s => new Date(s.created_at).getMonth() === new Date().getMonth()).length}
                </p>
                <p className="text-xs text-green-600 mt-2 flex items-center">
                  <Calendar size={12} className="mr-1" />
                  Current month
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">This Week</p>
                <p className="text-3xl font-bold text-gray-900">
                  {submissions.filter(s => {
                    const submissionDate = new Date(s.created_at)
                    const weekStart = new Date()
                    weekStart.setDate(weekStart.getDate() - weekStart.getDay())
                    return submissionDate >= weekStart
                  }).length}
                </p>
                <p className="text-xs text-blue-600 mt-2 flex items-center">
                  <Activity size={12} className="mr-1" />
                  Recent activity
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Services</p>
                <p className="text-3xl font-bold text-gray-900">{services.length}</p>
                <p className="text-xs text-purple-600 mt-2 flex items-center">
                  <Building size={12} className="mr-1" />
                  Categories
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <Filter className="text-white" size={16} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Filter & Search</h3>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search submissions</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400 pointer-events-none z-10" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, email, company, or message..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-72">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by service</label>
              <div className="relative">
                <Filter className="absolute left-3 top-3 text-gray-400 pointer-events-none z-10" size={18} />
                <select
                  value={filterService}
                  onChange={(e) => setFilterService(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50/50 hover:bg-white focus:bg-white appearance-none cursor-pointer transition-all duration-200 shadow-sm"
                >
                  <option value="">All Services ({submissions.length})</option>
                  {services.length > 0 ? (
                    services.map(service => (
                      <option key={service} value={service}>
                        {service} ({submissions.filter(s => s.service === service).length})
                      </option>
                    ))
                  ) : (
                    <option disabled>No services available</option>
                  )}
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button
                onClick={fetchSubmissions}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
              >
                <RefreshCw size={18} />
                <span>Refresh</span>
              </button>
            </div>
          </div>
          
          {(searchTerm || filterService) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Showing {filteredSubmissions.length} of {submissions.length} submissions</span>
                {(searchTerm || filterService) && (
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setFilterService('')
                    }}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="text-white">⚠️</i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-1">Error Loading Data</h3>
                <p className="text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Submissions List */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-white" size={16} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Contact Submissions
                  </h2>
                  <p className="text-sm text-gray-600">{filteredSubmissions.length} submissions found</p>
                </div>
              </div>
              {filteredSubmissions.length > 0 && (
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock size={14} />
                  <span>Latest first</span>
                </div>
              )}
            </div>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-gray-400" size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
              <p className="text-gray-600">
                {searchTerm || filterService 
                  ? "Try adjusting your search or filter criteria" 
                  : "Contact submissions will appear here when received"
                }
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredSubmissions.map((submission, index) => (
                <div key={submission.id} className="p-6 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-200 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Mail className="text-primary-600" size={16} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-gray-900 truncate">{submission.name}</p>
                              <p className="text-sm text-gray-600 truncate">{submission.email}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <Building className="flex-shrink-0" size={14} />
                            <span className="truncate">
                              {submission.company || 'No company specified'}
                            </span>
                          </div>

                          <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <Calendar className="flex-shrink-0" size={14} />
                            <span>{formatDate(submission.created_at)}</span>
                          </div>

                          {submission.service && (
                            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 rounded-full text-sm font-medium">
                              <Star className="mr-1" size={12} />
                              {submission.service}
                            </div>
                          )}
                        </div>

                        {/* Message Preview */}
                        <div className="lg:col-span-2">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                              <MessageSquare className="text-gray-600" size={16} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 mb-2">Message</h4>
                              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  {submission.message.length > 200 
                                    ? `${submission.message.substring(0, 200)}...` 
                                    : submission.message
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => setSelectedSubmission(
                          selectedSubmission?.id === submission.id ? null : submission
                        )}
                        className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 group-hover:bg-white"
                        title={selectedSubmission?.id === submission.id ? "Hide details" : "View details"}
                      >
                        {selectedSubmission?.id === submission.id ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Expanded View */}
                  {selectedSubmission?.id === submission.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200 bg-gradient-to-r from-gray-50/50 to-white rounded-xl p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <MoreVertical className="text-white" size={12} />
                            </div>
                            <h4 className="font-semibold text-gray-900">Additional Details</h4>
                          </div>
                          <div className="space-y-3">
                            {[
                              { label: 'Budget', value: submission.budget },
                              { label: 'Timeline', value: submission.timeline },
                              { label: 'Revenue', value: submission.revenue }
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                                <span className="text-sm font-medium text-gray-600">{item.label}:</span>
                                <span className="text-sm text-gray-900 font-medium">
                                  {item.value || 'Not specified'}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                              <MessageSquare className="text-white" size={12} />
                            </div>
                            <h4 className="font-semibold text-gray-900">Complete Message</h4>
                          </div>
                          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                              {submission.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard