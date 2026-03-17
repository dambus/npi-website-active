import { Link } from 'react-router-dom'

export function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Dashboard</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Admin overview</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
          Use the admin area to manage reference projects, publish state, featured homepage items,
          and project media.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-stone-700 bg-stone-900 p-6">
          <h2 className="text-lg font-medium text-white">Projects</h2>
          <p className="mt-3 text-sm leading-7 text-stone-300">
            Manage project references, publish state, featured status, category assignment, and upload paths.
          </p>
          <Link className="mt-5 inline-flex text-sm font-semibold text-amber-300 transition hover:text-amber-200" to="/admin/projects">
            Open projects
          </Link>
        </article>
        <article className="rounded-lg border border-stone-700 bg-stone-900 p-6">
          <h2 className="text-lg font-medium text-white">Scope note</h2>
          <p className="mt-3 text-sm leading-7 text-stone-300">
            This phase intentionally focuses on project CMS foundation only. News, advanced roles, and broader CMS
            tooling stay for later phases.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AdminDashboardPage
