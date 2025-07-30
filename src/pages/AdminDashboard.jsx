import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { getFileUrl } from '../lib/fileUpload'
import { 
  LogOut, 
  Mail, 
  Building, 
  Calendar, 
  DollarSign, 
  MessageSquare, 
  Paperclip, 
  Download,
  Eye,
  EyeOff,
  Search,
  Filter,
  RefreshCw,
  Users,
  Clock
} from 'lucide-react'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [submissions, setSubmissions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [filterService, setFilterService] = useState('')

  useEffect(() => {
    checkAuth()
    fetchSubmissions()
  }, [])

  const checkAuth = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (!isAuthenticated) {
      navigate('/admin-login')
    }
  }

  const fetchSubmissions = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw new Error(error.message)
      }

      setSubmissions(data || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
      setError('Failed to load submissions')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
    } catch (error) {
      console.error('Logout error:', error)
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

  const parseFiles = (filesData) => {
    if (!filesData) return []
    try {
      return JSON.parse(filesData)
    } catch {
      return []
    }
  }

  const downloadFile = (filePath, originalName) => {
    const publicUrl = getFileUrl(filePath)
    const link = document.createElement('a')
    link.href = publicUrl
    link.download = originalName
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
  console.log('Services found:', services)
  console.log('Current filter:', filterService)
  console.log('Filtered submissions:', filteredSubmissions.length)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <RefreshCw className="animate-spin" size={24} />
          <span>Loading submissions...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-secondary-900">Admin Dashboard</h1>
              <p className="text-sm sm:text-base text-secondary-600 hidden sm:block">Manage contact form submissions</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm sm:text-base"
            >
              <LogOut size={16} className="sm:hidden" />
              <LogOut size={18} className="hidden sm:block" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center">
              <Users className="text-primary-600" size={20} />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-secondary-600">Total Submissions</p>
                <p className="text-xl sm:text-2xl font-bold text-secondary-900">{submissions.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center">
              <Clock className="text-green-600" size={20} />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-secondary-600">This Month</p>
                <p className="text-xl sm:text-2xl font-bold text-secondary-900">
                  {submissions.filter(s => new Date(s.created_at).getMonth() === new Date().getMonth()).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center">
              <Paperclip className="text-blue-600" size={20} />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-secondary-600">With Attachments</p>
                <p className="text-xl sm:text-2xl font-bold text-secondary-900">
                  {submissions.filter(s => s.files_count > 0).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400 pointer-events-none z-10" size={18} />
                <input
                  type="text"
                  placeholder="Search submissions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 relative z-0"
                />
              </div>
            </div>
            
            <div className="w-full sm:w-64">
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white appearance-none cursor-pointer"
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

            <button
              onClick={fetchSubmissions}
              className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <RefreshCw size={16} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Submissions List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b bg-gray-50">
            <h2 className="text-base sm:text-lg font-semibold text-secondary-900">
              Contact Submissions ({filteredSubmissions.length})
            </h2>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div className="p-8 sm:p-12 text-center">
              <Users className="mx-auto text-gray-400 mb-4" size={36} />
              <p className="text-sm sm:text-base text-gray-600">No submissions found</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredSubmissions.map((submission) => (
                <div key={submission.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      {/* Left Column */}
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <Mail className="text-primary-600 flex-shrink-0" size={16} />
                          <div className="min-w-0">
                            <p className="font-semibold text-sm sm:text-base text-secondary-900 truncate">{submission.name}</p>
                            <p className="text-xs sm:text-sm text-secondary-600 truncate">{submission.email}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <Building className="text-secondary-500 flex-shrink-0" size={16} />
                          <span className="text-xs sm:text-sm text-secondary-700 truncate">
                            {submission.company || 'No company'}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <Calendar className="text-secondary-500 flex-shrink-0" size={16} />
                          <span className="text-xs sm:text-sm text-secondary-700">
                            {formatDate(submission.created_at)}
                          </span>
                        </div>

                        {submission.service && (
                          <div className="inline-block">
                            <span className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs sm:text-sm font-medium">
                              {submission.service}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <MessageSquare className="text-secondary-500" size={18} />
                            <span className="font-medium text-secondary-700">Message</span>
                          </div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            {submission.message.length > 150 
                              ? `${submission.message.substring(0, 150)}...` 
                              : submission.message
                            }
                          </p>
                        </div>

                        {submission.files_count > 0 && (
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Paperclip className="text-secondary-500" size={18} />
                              <span className="font-medium text-secondary-700">
                                {submission.files_count} Attachment(s)
                              </span>
                            </div>
                            
                            {submission.files_data && (
                              <div className="space-y-2">
                                {parseFiles(submission.files_data).map((file, index) => (
                                  <button
                                    key={index}
                                    onClick={() => downloadFile(file.storagePath, file.originalName)}
                                    className="flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200"
                                  >
                                    <Download size={14} />
                                    <span>{file.originalName}</span>
                                    <span className="text-xs text-gray-500">
                                      ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                    </span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedSubmission(
                        selectedSubmission?.id === submission.id ? null : submission
                      )}
                      className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {selectedSubmission?.id === submission.id ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {/* Expanded View */}
                  {selectedSubmission?.id === submission.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-3">Additional Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-secondary-600">Budget:</span>
                              <span className="text-secondary-900">{submission.budget || 'Not specified'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-secondary-600">Timeline:</span>
                              <span className="text-secondary-900">{submission.timeline || 'Not specified'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-secondary-600">Revenue:</span>
                              <span className="text-secondary-900">{submission.revenue || 'Not specified'}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-3">Full Message</h4>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-secondary-700 leading-relaxed whitespace-pre-wrap">
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