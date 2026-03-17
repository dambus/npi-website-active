import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { AdminProjectForm } from '@/components/admin/AdminProjectForm'
import { Card } from '@/components/ui/Card'
import { fetchProjectByIdForAdmin } from '@/services/admin/projects/fetchProjectByIdForAdmin'
import { fetchProjectCategories, type AdminProjectCategory } from '@/services/admin/projects/fetchProjectCategories'
import type { AdminProjectRecord } from '@/services/admin/projects/types'

export function AdminProjectEditPage() {
  const { id } = useParams()
  const [categories, setCategories] = useState<AdminProjectCategory[]>([])
  const [project, setProject] = useState<AdminProjectRecord | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let isActive = true

    async function loadPage() {
      if (!id) {
        setErrorMessage('Missing project id.')
        setIsLoading(false)
        return
      }

      try {
        setErrorMessage(null)
        const [projectData, categoryData] = await Promise.all([
          fetchProjectByIdForAdmin(id),
          fetchProjectCategories(),
        ])

        if (!isActive) {
          return
        }

        setProject(projectData)
        setCategories(categoryData)
      } catch (error) {
        if (isActive) {
          setErrorMessage(error instanceof Error ? error.message : 'Unable to load project.')
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadPage()

    return () => {
      isActive = false
    }
  }, [id])

  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Projects</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Edit project</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
          Update content, category selection, publish state, and media paths from one practical form.
        </p>
      </div>
      {isLoading ? (
        <Card className="rounded-lg border-stone-700 bg-stone-900 text-stone-300">Loading form...</Card>
      ) : errorMessage ? (
        <Card className="rounded-lg border-stone-700 bg-stone-900 text-rose-200">{errorMessage}</Card>
      ) : !project ? (
        <Card className="rounded-lg border-stone-700 bg-stone-900 text-stone-300">Project not found.</Card>
      ) : (
        <AdminProjectForm categories={categories} initialValues={project} mode="edit" projectId={project.id} />
      )}
    </section>
  )
}

export default AdminProjectEditPage
