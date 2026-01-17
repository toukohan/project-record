import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toBeDefined()
  })

  it('displays evaluation-focused positioning statement', () => {
    render(<App />)
    expect(screen.getByText(/helps you decide whether I can contribute/i)).toBeDefined()
  })
})
