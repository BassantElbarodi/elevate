'use client'

import { useActionState } from 'react'
import { saveProfile, signOut } from './actions'

export default function ProfileForm({ email, profile }) {
  const [state, formAction, pending] = useActionState(saveProfile, {})

  return (
    <div className="panel auth-panel">
      <h2>Your profile</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Signed in as <strong style={{ color: 'var(--text)' }}>{email}</strong>
      </p>

      <form action={formAction} className="stack-form">
        <label className="field">
          <span className="field-label">Name</span>
          <input
            className="text-input"
            name="full_name"
            defaultValue={profile?.full_name ?? ''}
            autoComplete="name"
            required
          />
        </label>

        <label className="field">
          <span className="field-label">Age</span>
          <input
            className="text-input"
            name="age"
            type="number"
            min="10"
            max="100"
            defaultValue={profile?.age ?? ''}
          />
        </label>

        <label className="field">
          <span className="field-label">Academic year</span>
          <input
            className="text-input"
            name="academic_year"
            placeholder="e.g. Thanaweya Amma, or 2nd year Engineering"
            defaultValue={profile?.academic_year ?? ''}
          />
        </label>

        {state?.error && (
          <p className="form-error" role="alert">
            {state.error}
          </p>
        )}
        {state?.notice && (
          <p className="form-notice" role="status">
            {state.notice}
          </p>
        )}

        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? 'Saving…' : 'Save profile'}
        </button>
      </form>

      <form action={signOut} style={{ marginTop: '1.25rem' }}>
        <button type="submit" className="link-button">
          Sign out
        </button>
      </form>
    </div>
  )
}
