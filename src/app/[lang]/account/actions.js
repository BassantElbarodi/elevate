'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getUI } from '@/lib/i18n/ui'
import { defaultLocale, isLocale } from '@/lib/i18n/config'

// Auth and profile writes run on the server so the browser never handles
// tokens directly, and so validation cannot be skipped by editing the page.

// Validation messages come back to the browser as strings, so they have to be
// in the reader's language. The form carries the locale in a hidden field —
// a server action has no other way to know it, since it is not a route.
// getUI falls back to English for anything unexpected, and isLocale keeps a
// tampered value from reaching the dictionary.
function messages(formData) {
  const lang = String(formData?.get('lang') || '')
  return getUI(isLocale(lang) ? lang : defaultLocale).account
}

// Redirect back to the page the reader was on, in their language.
function accountPath(formData) {
  const lang = String(formData?.get('lang') || '')
  return `/${isLocale(lang) ? lang : defaultLocale}/account`
}

export async function signUp(prevState, formData) {
  const email = String(formData.get('email') || '').trim()
  const password = String(formData.get('password') || '')
  const fullName = String(formData.get('full_name') || '').trim()
  const academicYear = String(formData.get('academic_year') || '').trim()
  const ageRaw = String(formData.get('age') || '').trim()
  const t = messages(formData)

  if (!fullName) return { error: t.errNoName }
  if (!email || !password) {
    return { error: t.errCredentials }
  }
  if (password.length < 8) {
    return { error: t.errShortPassword }
  }

  let age = null
  if (ageRaw !== '') {
    age = Number(ageRaw)
    if (!Number.isInteger(age) || age < 10 || age > 100) {
      return { error: t.errAge }
    }
  }

  const supabase = await createClient()
  // The profile details ride along as user metadata. A database trigger reads
  // them and creates the profiles row, which works whether or not email
  // confirmation is on — at sign-up there may be no session yet to write with.
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        age: age === null ? '' : String(age),
        academic_year: academicYear,
      },
    },
  })

  if (error) return { error: error.message }

  // Supabase can be configured to require email confirmation. If it is, there
  // is no session yet and the student must click the link first.
  if (!data.session) {
    return { notice: t.noticeConfirm }
  }

  revalidatePath(accountPath(formData))
  redirect(accountPath(formData))
}

export async function signIn(prevState, formData) {
  const email = String(formData.get('email') || '').trim()
  const password = String(formData.get('password') || '')
  const t = messages(formData)

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    // An unconfirmed account is not a secret worth protecting, and hiding it
    // sends the student hunting for a password problem they do not have.
    if (error.code === 'email_not_confirmed') {
      return { error: t.errUnconfirmed }
    }
    // Everything else stays vague on purpose: naming which half was wrong
    // would let someone test whether a given student is registered.
    return { error: t.errSignInFailed }
  }

  revalidatePath(accountPath(formData))
  redirect(accountPath(formData))
}

export async function signOut(formData) {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath(accountPath(formData))
  redirect(accountPath(formData))
}

export async function saveProfile(prevState, formData) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const t = messages(formData)
  if (!user) return { error: t.errNotSignedIn }

  const fullName = String(formData.get('full_name') || '').trim()
  const ageRaw = String(formData.get('age') || '').trim()
  const academicYear = String(formData.get('academic_year') || '').trim()

  if (!fullName) return { error: t.errNoName }

  let age = null
  if (ageRaw !== '') {
    age = Number(ageRaw)
    if (!Number.isInteger(age) || age < 10 || age > 100) {
      return { error: t.errAge }
    }
  }

  // The row id must be the user's own id — RLS rejects anything else, so a
  // tampered request cannot write to someone else's profile.
  const { error } = await supabase.from('profiles').upsert({
    id: user.id,
    full_name: fullName,
    age,
    academic_year: academicYear || null,
  })

  if (error) return { error: error.message }

  revalidatePath(accountPath(formData))
  return { notice: t.noticeSaved }
}
