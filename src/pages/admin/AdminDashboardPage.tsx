export function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Dashboard</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Admin overview</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-400">
          Placeholder dashboard for content management, project publishing, and internal
          website administration.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {['Projects', 'Content', 'Media'].map((item) => (
          <article key={item} className="rounded-[1.5rem] border border-stone-800 bg-stone-900 p-6">
            <h2 className="text-lg font-medium text-white">{item}</h2>
            <p className="mt-3 text-sm leading-7 text-stone-400">
              Placeholder module for {item.toLowerCase()} management.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AdminDashboardPage
