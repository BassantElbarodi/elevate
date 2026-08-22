'use client'

import { useActionState } from 'react'
import { saveProfile, signOut } from './actions'
import { getUI } from '@/lib/i18n/ui'

export default function ProfileForm({ email, profile, lang }) {
  const t = getUI(lang).account
  const [state, formAction, pending] = useActionState(saveProfile, {})

  return (
    <div className="panel auth-panel">
      <h2>{t.yourProfile}</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        {t.signedInAs} <strong style={{ color: 'var(--text)' }}>{email}</strong>
      </p>

      <form action={formAction} className="stack-form">
        {/* The server action needs the locale to answer in the right language
            and to redirect back to the right page; it cannot read the route. */}
        <input type="hidden" name="lang" value={lang} />
        <label className="field">
          <span className="field-label">{t.name}</span>
          <input
            className="text-input"
            name="full_name"
            defaultValue={profile?.full_name ?? ''}
            autoComplete="name"
            required
          />
        </label>

        <label className="field">
          <span className="field-label">{t.age}</span>
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
          <span className="field-label">{t.academicYear}</span>
          <input
            className="text-input"
            name="academic_year"
            placeholder={t.academicYearHint}
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
          {pending ? t.saving : t.saveButton}
        </button>
      </form>

      <form action={signOut} style={{ marginTop: '1.25rem' }}>
        <input type="hidden" name="lang" value={lang} />
        <button type="submit" className="link-button">
          {t.signOut}
        </button>
      </form>
    </div>
  )
}
