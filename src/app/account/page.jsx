import { createClient, isSupabaseConfigured } from '@/lib/supabase/server'
import AuthForm from './AuthForm'
import ProfileForm from './ProfileForm'

export const metadata = {
  title: 'Your profile — Elevate',
  description: 'Sign in to Elevate to save your profile.',
}

// Sessions are per-request, so this page must never be cached.
export const dynamic = 'force-dynamic'

export default async function AccountPage() {
  // Say plainly what is wrong rather than throwing a 500 that gives the
  // student no idea why the page is broken.
  if (!isSupabaseConfigured()) {
    return (
      <div className="page container">
        <header className="page-header">
          <h1>Profiles aren’t set up yet</h1>
          <p>
            Accounts need two environment variables — <code>NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>. Add them in your hosting settings and
            redeploy. The rest of the site works without them.
          </p>
        </header>
      </div>
    )
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  let profile = null
  if (user) {
    // RLS means this can only ever return this user's own row.
    const { data } = await supabase
      .from('profiles')
      .select('full_name, age, academic_year')
      .eq('id', user.id)
      .maybeSingle()
    profile = data
  }

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{user ? 'Your profile' : 'Sign in'}</h1>
        <p>
          {user
            ? 'Your details are private — only you can see or change them.'
            : 'Create a profile to save your details. We only ask for what we need.'}
        </p>
      </header>

      <div className="auth-layout">
        {user ? <ProfileForm email={user.email} profile={profile} /> : <AuthForm />}
      </div>
    </div>
  )
}
