import { Navigate, Outlet, useLocation } from 'react-router-dom'

const isAuthenticated = false

export function ProtectedRoute() {
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to="/admin/login" />
  }

  return <Outlet />
}

export default ProtectedRoute
