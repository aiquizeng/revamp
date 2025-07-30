import { createClient } from '@supabase/supabase-js'

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug logging for environment variables
console.log('Environment variables check:', {
  NODE_ENV: import.meta.env.MODE,
  VITE_SUPABASE_URL: supabaseUrl ? '✅ Found' : '❌ Missing',
  VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? '✅ Found' : '❌ Missing'
})

// Create mock client for fallback
const createMockClient = () => {
  console.warn('🚨 Using mock Supabase client - some features may not work')
  return {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      signOut: () => Promise.resolve({ error: null }),
      signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Mock client - authentication disabled' } })
    },
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      insert: () => Promise.resolve({ data: null, error: { message: 'Mock client - database operations disabled' } }),
      update: () => Promise.resolve({ data: null, error: { message: 'Mock client - database operations disabled' } }),
      delete: () => Promise.resolve({ data: null, error: { message: 'Mock client - database operations disabled' } }),
      order: () => ({ select: () => Promise.resolve({ data: [], error: null }) })
    })
  }
}

// Lazy initialization function
let supabaseInstance = null
let initializationAttempted = false

export const getSupabase = () => {
  if (supabaseInstance) {
    return supabaseInstance
  }

  if (initializationAttempted) {
    return supabaseInstance || createMockClient()
  }

  initializationAttempted = true

  // Validate environment variables
  if (!supabaseUrl || supabaseUrl === 'undefined' || supabaseUrl === 'your_supabase_project_url') {
    console.error('❌ VITE_SUPABASE_URL is missing or invalid:', supabaseUrl)
    supabaseInstance = createMockClient()
    return supabaseInstance
  }

  if (!supabaseAnonKey || supabaseAnonKey === 'undefined' || supabaseAnonKey === 'your_supabase_anon_key') {
    console.error('❌ VITE_SUPABASE_ANON_KEY is missing or invalid:', supabaseAnonKey)
    supabaseInstance = createMockClient()
    return supabaseInstance
  }

  try {
    console.log('🔧 Creating Supabase client...')
    console.log('📍 Using URL:', supabaseUrl)
    console.log('🔑 Using key:', supabaseAnonKey.substring(0, 20) + '...')
    
    // Try creating client with minimal configuration
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      }
    })
    
    console.log('✅ Supabase client created successfully')
    return supabaseInstance
  } catch (error) {
    console.error('❌ Failed to create Supabase client:', error)
    console.error('📊 Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack?.substring(0, 200) + '...'
    })
    
    // Use mock client as fallback
    console.warn('🔄 Falling back to mock client for basic functionality')
    supabaseInstance = createMockClient()
    return supabaseInstance
  }
}

// Export the instance getter
export const supabase = getSupabase()

// For compatibility with existing code
export default supabase