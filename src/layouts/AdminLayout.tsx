import { NavLink, Outlet } from 'react-router-dom'

import { cn } from '@/lib/utils'

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-stone-800 bg-stone-900 p-6 lg:border-b-0 lg:border-r">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Admin</p>
          <nav className="mt-8 space-y-2">
            <NavLink className={navClass} to="/admin">
              Dashboard
            </NavLink>
            <NavLink className={navClass} to="/admin/login">
              Login
            </NavLink>
          </nav>
        </aside>
        <main className="p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function navClass({ isActive }: { isActive: boolean }) {
  return cn(
    'block rounded-2xl px-4 py-3 text-sm transition',
    isActive
      ? 'bg-stone-800 font-medium text-white'
      : 'text-stone-400 hover:bg-stone-800/70 hover:text-white',
  )
}

export default AdminLayout
