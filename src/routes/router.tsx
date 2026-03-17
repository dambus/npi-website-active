import { createBrowserRouter } from 'react-router-dom'

import { AdminLayout } from '@/layouts/AdminLayout'
import { PublicLayout } from '@/layouts/PublicLayout'
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage'
import { AdminLoginPage } from '@/pages/admin/AdminLoginPage'
import { AdminProjectEditPage } from '@/pages/admin/AdminProjectEditPage'
import { AdminProjectNewPage } from '@/pages/admin/AdminProjectNewPage'
import { AdminProjectsPage } from '@/pages/admin/AdminProjectsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { AboutPage } from '@/pages/public/AboutPage'
import { ContactPage } from '@/pages/public/ContactPage'
import { HomePage } from '@/pages/public/HomePage'
import { ReferenceDetailPage } from '@/pages/public/ReferenceDetailPage'
import { ReferencesPage } from '@/pages/public/ReferencesPage'
import { ServicesPage } from '@/pages/public/ServicesPage'

import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'references', element: <ReferencesPage /> },
      { path: 'references/:slug', element: <ReferenceDetailPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      { path: 'login', element: <AdminLoginPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <AdminDashboardPage /> },
          { path: 'projects', element: <AdminProjectsPage /> },
          { path: 'projects/new', element: <AdminProjectNewPage /> },
          { path: 'projects/:id/edit', element: <AdminProjectEditPage /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
