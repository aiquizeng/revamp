/**
 * Upload files to Supabase Storage
 * @param {File[]} files - Array of files to upload
 * @param {string} submissionId - Unique identifier for the submission
 * @returns {Promise<string[]>} Array of file paths
 */
export const uploadFiles = async (files, submissionId) => {
  if (!files || files.length === 0) {
    return []
  }

  try {
    const { getSupabase } = await import('./supabase')
    const supabase = getSupabase()
    
    if (!supabase) {
      throw new Error('Supabase not configured')
    }
    
    const uploadPromises = files.map(async (file, index) => {
      // Create unique filename
      const fileExtension = file.name.split('.').pop()
      const fileName = `${submissionId}_${index}_${Date.now()}.${fileExtension}`
      const filePath = `contact-submissions/${fileName}`

      // Upload file to Supabase Storage
      const { data, error } = await supabase.storage
        .from('contact-files')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) {
        console.error(`Error uploading file ${file.name}:`, error)
        throw new Error(`Failed to upload ${file.name}: ${error.message}`)
      }

      return {
        originalName: file.name,
        storagePath: data.path,
        size: file.size,
        type: file.type
      }
    })

    const uploadResults = await Promise.all(uploadPromises)
    return uploadResults
  } catch (error) {
    console.error('File upload error:', error)
    throw error
  }
}

/**
 * Get public URL for uploaded file
 * @param {string} filePath - Path to file in storage
 * @returns {string} Public URL
 */
export const getFileUrl = async (filePath) => {
  try {
    const { getSupabase } = await import('./supabase')
    const supabase = getSupabase()
    
    if (!supabase) {
      return '#'
    }
    
    const { data } = supabase.storage
      .from('contact-files')
      .getPublicUrl(filePath)
    
    return data.publicUrl
  } catch (error) {
    console.error('Error getting file URL:', error)
    return '#'
  }
}

/**
 * Delete files from storage
 * @param {string[]} filePaths - Array of file paths to delete
 * @returns {Promise<void>}
 */
export const deleteFiles = async (filePaths) => {
  if (!filePaths || filePaths.length === 0) {
    return
  }

  try {
    const { getSupabase } = await import('./supabase')
    const supabase = getSupabase()
    
    if (!supabase) {
      throw new Error('Supabase not configured')
    }
    
    const { error } = await supabase.storage
      .from('contact-files')
      .remove(filePaths)

    if (error) {
      console.error('Error deleting files:', error)
      throw error
    }
  } catch (error) {
    console.error('File deletion error:', error)
    throw error
  }
}