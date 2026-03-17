import { useEffect, useState } from 'react'

import { AdminProjectForm } from '@/components/admin/AdminProjectForm'
import { Card } from '@/components/ui/Card'
import { fetchProjectCategories, type AdminProjectCategory } from '@/services/admin/projects/fetchProjectCategories'

export function AdminProjectNewPage() {
  const [categories, setCategories] = useState<AdminProjectCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let isActive = true

    async function loadCategories() {
      try {
        setErrorMessage(null)
        const data = await fetchProjectCategories()

        if (isActive) {
          setCategories(data)
        }
      } catch (error) {
        if (isActive) {
          setErrorMessage(error instanceof Error ? error.message : 'Unable to load categories.')
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadCategories()

    return () => {
      isActive = false
    }
  }, [])

  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Projects</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Create project</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
          Add the core project details first, then assign categories and upload media as needed.
        </p>
      </div>
      {isLoading ? (
        <Card className="rounded-lg border-stone-700 bg-stone-900 text-stone-300">Loading form...</Card>
      ) : errorMessage ? (
        <Card className="rounded-lg border-stone-700 bg-stone-900 text-rose-200">{errorMessage}</Card>
      ) : (
        <AdminProjectForm categories={categories} mode="create" />
      )}
    </section>
  )
}

export default AdminProjectNewPage
