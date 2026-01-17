import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Landing from './pages/Landing'
import Ask from './pages/Ask'
import Fit from './pages/Fit'
import Experiences from './pages/Experiences'

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

describe('Experiences', () => {
  it('renders experience list', () => {
    render(<MemoryRouter><Experiences /></MemoryRouter>)
    expect(screen.getByText(/Experience Explorer/i)).toBeDefined()
    expect(screen.getByText(/University Software Engineering Group Project/i)).toBeDefined()
  })

  it('renders experience detail with all sections', () => {
    render(
      <MemoryRouter initialEntries={['/experiences/university-group-project']}>
        <Routes>
          <Route path="/experiences/:id" element={<Experiences />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: /University Software Engineering Group Project/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /^Context$/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /^Constraints$/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /^Decisions$/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /^Outcomes$/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /Lessons Learned/i })).toBeDefined()
  })

  it('shows not found for invalid experience id', () => {
    render(
      <MemoryRouter initialEntries={['/experiences/invalid-id']}>
        <Routes>
          <Route path="/experiences/:id" element={<Experiences />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText(/Experience Not Found/i)).toBeDefined()
  })
})
