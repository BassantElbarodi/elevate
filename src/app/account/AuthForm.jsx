'use client'

import { useActionState, useState } from 'react'
import { signIn, signUp } from './actions'

function SubmitRow({ label, pending }) {
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? 'Working…' : label}
    </button>
  )
}

export default function AuthForm() {
  const [mode, setMode] = useState('signin')
  const action = mode === 'signin' ? signIn : signUp
  const [state, formAction, pending] = useActionState(action, {})

  return (
    <div className="panel auth-panel">
      <h2>{mode === 'signin' ? 'Sign in' : 'Create your profile'}</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        {mode === 'signin'
          ? 'Welcome back — sign in to see and update your profile.'
          : 'Make an account to save your details and pick up where you left off.'}
      </p>

      <form action={formAction} className="stack-form">
        <label className="field">
          <span className="field-label">Email</span>
          <input
            className="text-input"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>

        <label className="field">
          <span className="field-label">Password</span>
          <input
            className="text-input"
            type="password"
            name="password"
            autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
            minLength={8}
            required
          />
          {mode === 'signup' && (
            <span className="field-hint">At least 8 characters.</span>
          )}
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

        <SubmitRow label={mode === 'signin' ? 'Sign in' : 'Create account'} pending={pending} />
      </form>

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
