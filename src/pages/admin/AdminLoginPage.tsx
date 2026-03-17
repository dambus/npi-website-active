import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useAuth } from '@/services/auth/AuthProvider'

export function AdminLoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, isLoading, signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const redirectTo = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/admin'

  if (!isLoading && isAuthenticated) {
    return <Navigate replace to={redirectTo} />
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      setIsSubmitting(true)
      setErrorMessage(null)
      await signIn(email, password)
      navigate(redirectTo, { replace: true })
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to sign in.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mx-auto max-w-xl overflow-hidden rounded-lg border border-stone-700 bg-stone-900 shadow-2xl shadow-black/30">
      <div className="border-b border-stone-700 bg-stone-950/60 px-8 py-5">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">Admin Login</p>
      </div>
      <div className="p-8">
        <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white">CMS access</h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-stone-200">
          Sign in with your Supabase email/password account to manage project references.
        </p>
        <div className="mt-6 rounded-lg border border-stone-700 bg-stone-950/50 px-4 py-3 text-sm leading-6 text-stone-300">
          Hidden internal route for project publishing, category assignment, and media updates.
        </div>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-semibold text-stone-100" htmlFor="admin-email">
            Email
          </label>
          <Input
            className={adminInputClassName}
            id="admin-email"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            value={email}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-stone-100" htmlFor="admin-password">
            Password
          </label>
          <Input
            className={adminInputClassName}
            id="admin-password"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
        </div>
        {errorMessage ? (
          <p className="rounded-lg border border-rose-500/50 bg-rose-950/40 px-4 py-3 text-sm font-medium text-rose-100">
            {errorMessage}
          </p>
        ) : null}
        <Button
          className="w-full rounded-lg bg-amber-400 text-stone-950 hover:bg-amber-300 disabled:border disabled:border-stone-700 disabled:bg-stone-800 disabled:text-stone-500"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
      </div>
    </section>
  )
}

const adminInputClassName =
  'mt-2 rounded-lg border-stone-500 bg-stone-800 text-white placeholder:text-stone-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 disabled:border-stone-700 disabled:bg-stone-900 disabled:text-stone-500'

export default AdminLoginPage
