import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/services/auth/AuthProvider'

export function ProtectedRoute() {
  const location = useLocation()
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <section className="rounded-[1.5rem] border border-stone-800 bg-stone-900 p-6 text-sm text-stone-400">
        Checking admin session...
      </section>
    )
  }

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to="/admin/login" />
  }

  return <Outlet />
}

export default ProtectedRoute
