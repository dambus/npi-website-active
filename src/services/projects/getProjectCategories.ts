import { supabase } from '@/lib/supabase'

import type { ProjectCategory } from './types'

export async function getProjectCategories(): Promise<ProjectCategory[]> {
  const { data, error } = await supabase
    .from('project_categories')
    .select('id, name, slug')
    .order('name', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data ?? []
}
