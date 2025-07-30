import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug logging
console.log('Debug - Environment check:', {
  supabaseUrl: supabaseUrl ? 'Found' : 'Missing',
  supabaseAnonKey: supabaseAnonKey ? 'Found' : 'Missing'
})

if (!supabaseUrl) {
  throw new Error('Missing VITE_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_ANON_KEY environment variable')
}

console.log('Debug - Creating Supabase client...')
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
console.log('Debug - Supabase client created successfully')