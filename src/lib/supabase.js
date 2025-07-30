import { createClient } from '@supabase/supabase-js'
import { logger } from './logger'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabaseInstance = null

export const getSupabase = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    logger.warn('Supabase environment variables not configured')
    return null
  }
  
  if (!supabaseInstance) {
    try {
      supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
    } catch (error) {
      logger.error('Failed to create Supabase client:', error)
      return null
    }
  }
  
  return supabaseInstance
}

export const supabase = getSupabase()