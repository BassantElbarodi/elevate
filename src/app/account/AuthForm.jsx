'use client'

import { useActionState, useState } from 'react'
import { signIn, signUp } from './actions'

function SignInForm() {
  const [state, formAction, pending] = useActionState(signIn, {})

  return (
    <form action={formAction} className="stack-form">
      <label className="field">
        <span className="field-label">Email</span>
        <input className="text-input" type="email" name="email" autoComplete="email" required />
      </label>

      <label className="field">
        <span className="field-label">Password</span>
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
        {pending ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  )
}

function SignUpForm() {
  const [state, formAction, pending] = useActionState(signUp, {})

  return (
    <form action={formAction} className="stack-form">
      <label className="field">
        <span className="field-label">Name</span>
        <input className="text-input" name="full_name" autoComplete="name" required />
      </label>

      <label className="field">
        <span className="field-label">Age</span>
        <input className="text-input" name="age" type="number" min="10" max="100" />
      </label>

      <label className="field">
        <span className="field-label">Academic year</span>
        <input
          className="text-input"
          name="academic_year"
          placeholder="e.g. Thanaweya Amma, or 2nd year Engineering"
        />
      </label>

      <label className="field">
        <span className="field-label">Email</span>
        <input className="text-input" type="email" name="email" autoComplete="email" required />
      </label>

      <label className="field">
        <span className="field-label">Password</span>
        <input
          className="text-input"
          type="password"
          name="password"
          autoComplete="new-password"
          minLength={8}
          required
        />
        <span className="field-hint">At least 8 characters.</span>
      </label>

      <Messages state={state} />

      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? 'Creating…' : 'Create profile'}
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

export default function AuthForm() {
  const [mode, setMode] = useState('signup')

  return (
    <div className="panel auth-panel">
      <h2>{mode === 'signin' ? 'Sign in' : 'Create your profile'}</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        {mode === 'signin'
          ? 'Welcome back — sign in to see and update your profile.'
          : 'Tell us a little about you. You can change any of it later.'}
      </p>

      {/* Each mode owns its own form state, so an error from one does not
          linger when you switch to the other. */}
      {mode === 'signin' ? <SignInForm /> : <SignUpForm />}

      <p style={{ margin: '1rem 0 0', fontSize: '0.9rem' }}>
        {mode === 'signin' ? 'No account yet? ' : 'Already have an account? '}
        <button
          type="button"
          className="link-button"
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
        >
          {mode === 'signin' ? 'Create one' : 'Sign in instead'}
        </button>
      </p>
    </div>
  )
}
