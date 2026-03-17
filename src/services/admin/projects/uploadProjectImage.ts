import { supabase } from '@/lib/supabase'

type UploadProjectImageOptions = {
  file: File
  projectSlug: string
  kind: 'cover' | 'gallery'
}

function buildFileName(file: File) {
  const extension = file.name.includes('.') ? file.name.split('.').pop() : 'jpg'
  const safeBase = file.name.replace(/\.[^/.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return `${safeBase || 'asset'}-${Date.now()}.${extension}`
}

export async function uploadProjectImage({ file, projectSlug, kind }: UploadProjectImageOptions) {
  const fileName = buildFileName(file)
  const path = `projects/${projectSlug}/${kind}/${fileName}`

  const { error } = await supabase.storage.from('project-images').upload(path, file, {
    cacheControl: '3600',
    upsert: true,
  })

  if (error) {
    throw new Error(error.message)
  }

  return path
}
