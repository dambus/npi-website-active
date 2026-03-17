import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/Button'
import { useAuth } from '@/services/auth/AuthProvider'
import { cn } from '@/lib/utils'

export function AdminLayout() {
  const navigate = useNavigate()
  const { isAuthenticated, signOut } = useAuth()
  const [isSigningOut, setIsSigningOut] = useState(false)

  async function handleSignOut() {
    try {
      setIsSigningOut(true)
      await signOut()
      navigate('/admin/login', { replace: true })
    } finally {
      setIsSigningOut(false)
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-stone-700 bg-stone-900 p-6 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Admin</p>
          <p className="mt-3 text-sm leading-6 text-stone-300">Internal project publishing and media management.</p>
          <nav className="mt-8 space-y-2">
            <NavLink className={navClass} to="/admin">
              Dashboard
            </NavLink>
            <NavLink className={navClass} to="/admin/projects">
              Projects
            </NavLink>
            <NavLink className={navClass} to="/admin/projects/new">
              New project
            </NavLink>
          </nav>
          {isAuthenticated ? (
            <div className="mt-8">
              <Button
                className="w-full rounded-lg border border-stone-600 bg-stone-100 text-stone-950 hover:bg-white"
                disabled={isSigningOut}
                onClick={handleSignOut}
                variant="secondary"
              >
                {isSigningOut ? 'Signing out...' : 'Sign out'}
              </Button>
            </div>
          ) : null}
        </aside>
        <main className="bg-stone-950/70 p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function navClass({ isActive }: { isActive: boolean }) {
  return cn(
    'block rounded-lg border px-4 py-3 text-sm font-medium transition',
    isActive
      ? 'border-amber-400/40 bg-stone-100 text-stone-950 shadow-sm'
      : 'border-transparent text-stone-200 hover:border-stone-600 hover:bg-stone-800 hover:text-white',
  )
}

export default AdminLayout
