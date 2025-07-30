import { createClient } from '@supabase/supabase-js'
import { logger } from './logger'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabaseInstance = null

export const getSupabase = () => {
  console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Not set', supabaseUrl)
  console.log('Supabase Key:', supabaseAnonKey ? 'Set' : 'Not set', supabaseAnonKey?.substring(0, 20) + '...')
  console.log('All env vars:', import.meta.env)
  
  if (!supabaseUrl || !supabaseAnonKey) {
    logger.warn('Supabase environment variables not configured')
    console.error('Missing Supabase environment variables')
    return null
  }
  
  if (!supabaseInstance) {
    try {
      console.log('Creating Supabase client...')
      supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
      console.log('Supabase client created successfully')
    } catch (error) {
      logger.error('Failed to create Supabase client:', error)
      console.error('Supabase client creation failed:', error)
      return null
    }
  }
  
  return supabaseInstance
}

export const supabase = getSupabase()