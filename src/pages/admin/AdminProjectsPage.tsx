import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Card } from '@/components/ui/Card'
import { fetchProjectsForAdmin } from '@/services/admin/projects/fetchProjectsForAdmin'
import type { AdminProjectListItem } from '@/services/admin/projects/types'

export function AdminProjectsPage() {
  const [projects, setProjects] = useState<AdminProjectListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let isActive = true

    async function loadProjects() {
      try {
        setIsLoading(true)
        setErrorMessage(null)
        const data = await fetchProjectsForAdmin()

        if (isActive) {
          setProjects(data)
        }
      } catch (error) {
        if (isActive) {
          setErrorMessage(error instanceof Error ? error.message : 'Unable to load projects.')
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadProjects()

    return () => {
      isActive = false
    }
  }, [])

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Projects</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Project references</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
            Review publish state, featured state, and category coverage before editing individual records.
          </p>
        </div>
        <Link
          className="rounded-lg bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-white"
          to="/admin/projects/new"
        >
          New project
        </Link>
      </div>

      <Card className="overflow-hidden rounded-lg border-stone-700 bg-stone-900 p-0 text-stone-200">
        <div className="overflow-x-auto">
          <div className="min-w-[860px]">
            <div className="grid grid-cols-[minmax(220px,2fr)_120px_minmax(180px,1fr)_120px_120px_100px] gap-4 border-b border-stone-700 bg-stone-950/35 px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-stone-300">
              <span>Title</span>
              <span>Year</span>
              <span>Categories</span>
              <span>Published</span>
              <span>Featured</span>
              <span>Edit</span>
            </div>

            {isLoading ? (
              <div className="px-5 py-8 text-sm text-stone-300">Loading projects...</div>
            ) : errorMessage ? (
              <div className="px-5 py-8 text-sm text-rose-200">{errorMessage}</div>
            ) : projects.length === 0 ? (
              <div className="px-5 py-8 text-sm text-stone-300">No projects exist yet.</div>
            ) : (
              projects.map((project) => (
                <div
                  key={project.id}
                  className="grid grid-cols-[minmax(220px,2fr)_120px_minmax(180px,1fr)_120px_120px_100px] gap-4 border-b border-stone-800 px-5 py-4 text-sm last:border-b-0 hover:bg-stone-950/25"
                >
                  <span className="font-semibold leading-6 text-white">{project.title}</span>
                  <span className="text-stone-200">{project.year ?? '-'}</span>
                  <span className="text-stone-300">{project.categories.join(', ') || '-'}</span>
                  <span className={project.isPublished ? stateOnClassName : stateOffClassName}>
                    {project.isPublished ? 'Published' : 'Draft'}
                  </span>
                  <span className={project.isFeatured ? stateOnClassName : stateOffClassName}>
                    {project.isFeatured ? 'Featured' : 'Standard'}
                  </span>
                  <Link
                    className="font-semibold text-amber-300 transition hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                    to={`/admin/projects/${project.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </Card>
    </section>
  )
}

const stateOnClassName = 'font-medium text-emerald-300'

const stateOffClassName = 'font-medium text-stone-400'

export default AdminProjectsPage
