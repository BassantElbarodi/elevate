'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

// Auth and profile writes run on the server so the browser never handles
// tokens directly, and so validation cannot be skipped by editing the page.

export async function signUp(prevState, formData) {
  const email = String(formData.get('email') || '').trim()
  const password = String(formData.get('password') || '')

  if (!email || !password) {
    return { error: 'Email and password are both required.' }
  }
  if (password.length < 8) {
    return { error: 'Use at least 8 characters for your password.' }
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signUp({ email, password })

  if (error) return { error: error.message }

  // Supabase can be configured to require email confirmation. If it is, there
  // is no session yet and the student must click the link first.
  if (!data.session) {
    return { notice: 'Check your email for a confirmation link, then sign in.' }
  }

  revalidatePath('/account')
  redirect('/account')
}

export async function signIn(prevState, formData) {
  const email = String(formData.get('email') || '').trim()
  const password = String(formData.get('password') || '')

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  // Deliberately vague: saying which of the two was wrong tells an attacker
  // whether an email is registered.
  if (error) return { error: 'That email and password combination did not work.' }

  revalidatePath('/account')
  redirect('/account')
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/account')
  redirect('/account')
}

export async function saveProfile(prevState, formData) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return { error: 'You need to be signed in to save a profile.' }

  const fullName = String(formData.get('full_name') || '').trim()
  const ageRaw = String(formData.get('age') || '').trim()
  const academicYear = String(formData.get('academic_year') || '').trim()

  if (!fullName) return { error: 'Please enter your name.' }

  let age = null
  if (ageRaw !== '') {
    age = Number(ageRaw)
    if (!Number.isInteger(age) || age < 10 || age > 100) {
      return { error: 'Age should be a whole number between 10 and 100.' }
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

  revalidatePath('/account')
  return { notice: 'Profile saved.' }
}
