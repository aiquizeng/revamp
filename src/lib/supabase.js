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

// Validate environment variables
if (!supabaseUrl || supabaseUrl === 'undefined' || supabaseUrl === 'your_supabase_project_url') {
  console.error('❌ VITE_SUPABASE_URL is missing or invalid:', supabaseUrl)
  throw new Error('Missing or invalid VITE_SUPABASE_URL environment variable. Please check your .env file.')
}

if (!supabaseAnonKey || supabaseAnonKey === 'undefined' || supabaseAnonKey === 'your_supabase_anon_key') {
  console.error('❌ VITE_SUPABASE_ANON_KEY is missing or invalid:', supabaseAnonKey)
  throw new Error('Missing or invalid VITE_SUPABASE_ANON_KEY environment variable. Please check your .env file.')
}

// Create Supabase client with error handling
let supabase
try {
  console.log('🔧 Creating Supabase client...')
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false
    }
  })
  console.log('✅ Supabase client created successfully')
} catch (error) {
  console.error('❌ Failed to create Supabase client:', error)
  throw new Error(`Failed to initialize Supabase client: ${error.message}`)
}

export { supabase }