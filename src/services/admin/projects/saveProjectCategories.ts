import { supabase } from '@/lib/supabase'

export async function saveProjectCategories(projectId: string, categoryIds: string[]) {
  const { error: deleteError } = await supabase
    .from('project_category_links')
    .delete()
    .eq('project_id', projectId)

  if (deleteError) {
    throw new Error(deleteError.message)
  }

  if (categoryIds.length === 0) {
    return
  }

  const { error: insertError } = await supabase.from('project_category_links').insert(
    categoryIds.map((categoryId) => ({
      project_id: projectId,
      category_id: categoryId,
    })),
  )

  if (insertError) {
    throw new Error(insertError.message)
  }
}
