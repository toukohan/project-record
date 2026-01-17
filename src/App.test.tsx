import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Landing from './pages/Landing'
import Ask from './pages/Ask'
import Fit from './pages/Fit'
import Experiences from './pages/Experiences'
import Strengths from './pages/Strengths'
import FitEvaluation from './pages/FitEvaluation'

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

  it('has query input and submit button', () => {
    render(<MemoryRouter><Ask /></MemoryRouter>)
    expect(screen.getByPlaceholderText(/Ask a question/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /Ask/i })).toBeDefined()
  })

  it('explains grounded responses', () => {
    render(<MemoryRouter><Ask /></MemoryRouter>)
    expect(screen.getByText(/grounded in documented data/i)).toBeDefined()
  })

  it('links to experiences and strengths', () => {
    render(<MemoryRouter><Ask /></MemoryRouter>)
    expect(screen.getByText(/Browse Experiences/i)).toBeDefined()
    expect(screen.getByText(/View Strengths & Gaps/i)).toBeDefined()
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

describe('Strengths', () => {
  it('renders all three categories', () => {
    render(<MemoryRouter><Strengths /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Strengths and Gaps/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /^Strong$/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /^Developing$/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /Not my strength yet/i })).toBeDefined()
  })

  it('displays strength items with descriptions', () => {
    render(<MemoryRouter><Strengths /></MemoryRouter>)
    expect(screen.getByText(/Judgment under constraints/i)).toBeDefined()
    expect(screen.getByText(/Making practical decisions/i)).toBeDefined()
  })

  it('links strengths to experience evidence', () => {
    render(<MemoryRouter><Strengths /></MemoryRouter>)
    const links = screen.getAllByText(/University Software Engineering Group Project/i)
    expect(links.length).toBeGreaterThan(0)
  })
})

describe('FitEvaluation', () => {
  it('renders form with all input groups', () => {
    render(<MemoryRouter><FitEvaluation /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Fit Evaluation/i })).toBeDefined()
    expect(screen.getByText(/Role Type/i)).toBeDefined()
    expect(screen.getByText(/Team Size/i)).toBeDefined()
    expect(screen.getByText(/Domain Familiarity/i)).toBeDefined()
    expect(screen.getByText(/Autonomy Level/i)).toBeDefined()
  })

  it('has submit button', () => {
    render(<MemoryRouter><FitEvaluation /></MemoryRouter>)
    expect(screen.getByRole('button', { name: /Evaluate Fit/i })).toBeDefined()
  })

  it('links to strengths page', () => {
    render(<MemoryRouter><FitEvaluation /></MemoryRouter>)
    expect(screen.getByText(/View Strengths and Gaps/i)).toBeDefined()
  })
})
