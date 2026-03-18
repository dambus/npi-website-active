import { Outlet } from 'react-router-dom'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text)]">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default PublicLayout
