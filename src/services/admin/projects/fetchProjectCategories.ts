import { supabase } from '@/lib/supabase'

export type AdminProjectCategory = {
  id: string
  name: string
  slug: string
}

export async function fetchProjectCategories(): Promise<AdminProjectCategory[]> {
  const { data, error } = await supabase
    .from('project_categories')
    .select('id, name, slug')
    .order('name', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data ?? []
}
