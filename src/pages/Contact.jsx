import { useState, useEffect } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle, Upload, X, AlertCircle, Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { uploadFiles } from '../lib/fileUpload'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    revenue: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [formProgress, setFormProgress] = useState(0)

  // Auto-save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData))
  }, [formData])

  // Calculate form progress
  useEffect(() => {
    const requiredFields = ['name', 'email', 'message']
    const optionalFields = ['company', 'service']
    const allFields = [...requiredFields, ...optionalFields]
    
    const filledFields = allFields.filter(field => formData[field].trim() !== '').length
    const progress = Math.round((filledFields / allFields.length) * 100)
    setFormProgress(progress)
  }, [formData])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (submitError) setSubmitError('')
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    const maxSize = 10 * 1024 * 1024 // 10MB
    
    const validFiles = files.filter(file => {
      if (file.size > maxSize) {
        setSubmitError(`File ${file.name} is too large. Maximum size is 10MB.`)
        return false
      }
      return true
    })

    setUploadedFiles([...uploadedFiles, ...validFiles])
  }

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitError('')
    
    try {
      // Validate required fields
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields.')
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address.')
      }

      // Generate unique submission ID
      const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

      // Upload files first (if any)
      let uploadedFileData = []
      if (uploadedFiles.length > 0) {
        try {
          uploadedFileData = await uploadFiles(uploadedFiles, submissionId)
        } catch (uploadError) {
          throw new Error(`File upload failed: ${uploadError.message}`)
        }
      }

      // Prepare submission data
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        service: formData.service || null,
        budget: formData.budget || null,
        timeline: formData.timeline || null,
        revenue: formData.revenue || null,
        message: formData.message.trim(),
        created_at: new Date().toISOString(),
        files_count: uploadedFiles.length,
        files_data: uploadedFileData.length > 0 ? JSON.stringify(uploadedFileData) : null
      }

      // Submit to Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([submissionData])
        .select()

      if (error) {
        throw new Error(error.message || 'Failed to submit form. Please try again.')
      }

      console.log('Form submitted successfully:', data)
      setIsSubmitted(true)
      
      // Clear form and localStorage after successful submission
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          revenue: '',
          message: ''
        })
        setUploadedFiles([])
        localStorage.removeItem('contactFormData')
      }, 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'business@digicinta.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'South Jakarta, Indonesia',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 8am - 6pm WIB',
      description: 'Weekend support available'
    }
  ]

  const services = [
    'Product & Market Research',
    'Custom Software Development',
    'Enterprise AI Agents',
    'Cybersecurity Solutions',
    'Digital Strategy Consulting',
    'Other'
  ]

  return (
    <div className="py-20">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to transform your business? Let's discuss your project and explore 
            how DigiCinta can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-secondary-900">
                  Send us a message
                </h2>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xs sm:text-sm text-secondary-600">Progress</span>
                  <div className="w-16 sm:w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 ease-out"
                      style={{ width: `${formProgress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary-600">{formProgress}%</span>
                </div>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="animate-bounce mb-4">
                    <CheckCircle className="text-green-600 mx-auto" size={64} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Message Sent Successfully! 🎉
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    Thank you for reaching out to DigiCinta. We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
                    <p className="text-green-800 text-sm">
                      <strong>What's next?</strong> Our team will review your message and contact you at <strong>{formData.email}</strong> with next steps.
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  {submitError && (
                    <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <AlertCircle className="text-red-600 mr-3" size={20} />
                        <p className="text-red-800 text-sm">{submitError}</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* File Upload Section */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Attachments (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary-400 transition-colors duration-200">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center justify-center"
                      >
                        <Upload className="text-gray-400 mb-2" size={32} />
                        <p className="text-gray-600 text-sm text-center">
                          <span className="font-medium text-primary-600">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC, TXT, JPG, PNG up to 10MB each
                        </p>
                      </label>
                    </div>
                    
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium text-secondary-700">Uploaded files:</p>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center">
                              <Upload className="text-primary-600 mr-2" size={16} />
                              <span className="text-sm text-secondary-700">{file.name}</span>
                              <span className="text-xs text-gray-500 ml-2">
                                ({(file.size / 1024 / 1024).toFixed(2)} MB)
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 transition-colors duration-200"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none sm:rows-6"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary flex items-center justify-center w-full disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-2.5 sm:py-3"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="ml-2" />
                      </>
                    )}
                  </button>
                  
                  {formProgress > 0 && (
                    <div className="text-center">
                      <p className="text-xs text-gray-500">
                        💾 Your progress is automatically saved
                      </p>
                    </div>
                  )}
                </form>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-4 sm:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg flex-shrink-0">
                      <info.icon className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-secondary-800 font-medium mb-1">
                        {info.title === 'Email' ? (
                          <a href={`mailto:${info.details}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                            {info.details}
                          </a>
                        ) : info.title === 'Phone' ? (
                          <a href={`tel:${info.details}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                            {info.details}
                          </a>
                        ) : (
                          info.details
                        )}
                      </p>
                      <p className="text-secondary-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-primary-100 mb-6 text-sm leading-relaxed">
                For urgent matters or technical support, our team is available 
                24/7 to assist you with any immediate needs.
              </p>
              <a 
                href="mailto:business@digicinta.com?subject=Emergency Support Request&body=This is an urgent request. Please contact me as soon as possible."
                className="inline-block bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200 text-sm"
              >
                Emergency Support
              </a>
            </div>

            <div className="bg-secondary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Response Time
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary-600">General Inquiries</span>
                  <span className="font-medium text-secondary-900">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Project Proposals</span>
                  <span className="font-medium text-secondary-900">48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Technical Support</span>
                  <span className="font-medium text-secondary-900">2-4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Emergency Issues</span>
                  <span className="font-medium text-secondary-900">Immediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact