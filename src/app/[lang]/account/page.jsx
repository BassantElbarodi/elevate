import { createClient, isSupabaseConfigured } from '@/lib/supabase/server'
import AuthForm from './AuthForm'
import ProfileForm from './ProfileForm'
import { getUI } from '@/lib/i18n/ui'

export async function generateMetadata({ params }) {
  const { lang } = await params
  const t = getUI(lang).account
  return { title: `${t.yourProfile} — Elevate`, description: t.signInIntro }
}

// Sessions are per-request, so this page must never be cached.
export const dynamic = 'force-dynamic'

export default async function AccountPage({ params }) {
  const { lang } = await params
  const t = getUI(lang).account

  // Say plainly what is wrong rather than throwing a 500 that gives the
  // student no idea why the page is broken.
  if (!isSupabaseConfigured()) {
    return (
      <div className="page container">
        <header className="page-header">
          <h1>{t.notConfiguredTitle}</h1>
          <p>
            {t.notConfiguredBefore} <code>NEXT_PUBLIC_SUPABASE_URL</code> &amp;{' '}
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>. {t.notConfiguredAfter}
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
        <h1>{user ? t.yourProfile : t.signIn}</h1>
        <p>
          {user ? t.profileIntro : t.signInIntro}
        </p>
      </header>

      <div className="auth-layout">
        {user ? (
          <ProfileForm email={user.email} profile={profile} lang={lang} />
        ) : (
          <AuthForm lang={lang} />
        )}
      </div>
    </div>
  )
}
