'use client'

import { useActionState, useState } from 'react'
import { signIn, signUp } from './actions'
import { getUI } from '@/lib/i18n/ui'

function SignInForm({ t, lang }) {
  const [state, formAction, pending] = useActionState(signIn, {})

  return (
    <form action={formAction} className="stack-form">
      {/* The server action needs the locale to answer in the right language
          and to redirect back to the right page; it cannot read the route. */}
      <input type="hidden" name="lang" value={lang} />
      <label className="field">
        <span className="field-label">{t.email}</span>
        <input className="text-input" type="email" name="email" autoComplete="email" required />
      </label>

      <label className="field">
        <span className="field-label">{t.password}</span>
        <input
          className="text-input"
          type="password"
          name="password"
          autoComplete="current-password"
          required
        />
      </label>

      <Messages state={state} />

      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? t.signingIn : t.signIn}
      </button>
    </form>
  )
}

function SignUpForm({ t, lang }) {
  const [state, formAction, pending] = useActionState(signUp, {})

  return (
    <form action={formAction} className="stack-form">
      {/* The server action needs the locale to answer in the right language
          and to redirect back to the right page; it cannot read the route. */}
      <input type="hidden" name="lang" value={lang} />
      <label className="field">
        <span className="field-label">{t.name}</span>
        <input className="text-input" name="full_name" autoComplete="name" required />
      </label>

      <label className="field">
        <span className="field-label">{t.age}</span>
        <input className="text-input" name="age" type="number" min="10" max="100" />
      </label>

      <label className="field">
        <span className="field-label">{t.academicYear}</span>
        <input
          className="text-input"
          name="academic_year"
          placeholder={t.academicYearHint}
        />
      </label>

      <label className="field">
        <span className="field-label">{t.email}</span>
        <input className="text-input" type="email" name="email" autoComplete="email" required />
      </label>

      <label className="field">
        <span className="field-label">{t.password}</span>
        <input
          className="text-input"
          type="password"
          name="password"
          autoComplete="new-password"
          minLength={8}
          required
        />
        <span className="field-hint">{t.passwordHint}</span>
      </label>

      <Messages state={state} />

      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? t.creating : t.createButton}
      </button>
    </form>
  )
}

function Messages({ state }) {
  return (
    <>
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
    </>
  )
}

export default function AuthForm({ lang }) {
  const t = getUI(lang).account
  const [mode, setMode] = useState('signup')

  return (
    <div className="panel auth-panel">
      <h2>{mode === 'signin' ? t.signIn : t.createProfile}</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        {mode === 'signin' ? t.welcomeBack : t.signUpIntro}
      </p>

      {/* Each mode owns its own form state, so an error from one does not
          linger when you switch to the other. */}
      {mode === 'signin' ? <SignInForm t={t} lang={lang} /> : <SignUpForm t={t} lang={lang} />}

      <p style={{ margin: '1rem 0 0', fontSize: '0.9rem' }}>
        {mode === 'signin' ? t.noAccount : t.haveAccount}
        <button
          type="button"
          className="link-button"
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
        >
          {mode === 'signin' ? t.createOne : t.signInInstead}
        </button>
      </p>
    </div>
  )
}
