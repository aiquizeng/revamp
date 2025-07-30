import { createClient } from '@supabase/supabase-js'
import { logger } from './logger'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabaseInstance = null

export const getSupabase = () => {
  // Fallback to hardcoded values if env vars not available
  const url = supabaseUrl || 'https://rccdqmxwfxmtdvnvtgiz.supabase.co'
  const key = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjY2RxbXh3ZnhtdGR2bnZ0Z2l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NjIyOTksImV4cCI6MjA2OTQzODI5OX0.gKzj1wmJIvA_0m5EPGonEM-eneOGLLD3xD2-hn8R-Ck'
  
  if (!supabaseInstance) {
    try {
      supabaseInstance = createClient(url, key)
    } catch (error) {
      logger.error('Failed to create Supabase client:', error)
      return null
    }
  }
  
  return supabaseInstance
}

export const supabase = getSupabase()