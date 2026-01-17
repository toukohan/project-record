import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import Landing from './pages/Landing'
import Ask from './pages/Ask'
import Fit from './pages/Fit'

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

describe('Landing', () => {
  it('displays two exploration CTAs', () => {
    render(<MemoryRouter><Landing /></MemoryRouter>)
    expect(screen.getByText(/Ask about how I work/i)).toBeDefined()
    expect(screen.getByText(/Check fit for your role/i)).toBeDefined()
  })
})

describe('Ask', () => {
  it('renders without errors', () => {
    render(<MemoryRouter><Ask /></MemoryRouter>)
    expect(screen.getByRole('heading')).toBeDefined()
  })
})

describe('Fit', () => {
  it('renders without errors', () => {
    render(<MemoryRouter><Fit /></MemoryRouter>)
    expect(screen.getByRole('heading')).toBeDefined()
  })
})
