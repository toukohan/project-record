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
    expect(screen.getByRole('heading', { name: /Project Record/i })).toBeDefined()
  })

  it('displays reader-centric positioning statement', () => {
    render(<App />)
    expect(screen.getByText(/record of past projects/i)).toBeDefined()
  })
})

describe('Landing', () => {
  it('displays available views section', () => {
    render(<MemoryRouter><Landing /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Available Views/i })).toBeDefined()
  })

  it('displays section links', () => {
    render(<MemoryRouter><Landing /></MemoryRouter>)
    expect(screen.getAllByText(/Fit Evaluation/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Strengths and Gaps/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Experiences/i).length).toBeGreaterThan(0)
    // Check both lists exist (available views + fit outcomes)
    expect(screen.getAllByRole('list').length).toBeGreaterThanOrEqual(2)
  })

  it('displays fit outcomes', () => {
    render(<MemoryRouter><Landing /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Fit Outcomes/i })).toBeDefined()
  })
})

describe('Ask', () => {
  it('renders without errors', () => {
    render(<MemoryRouter><Ask /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Ask About How I Work/i })).toBeDefined()
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
  it('redirects to fit-evaluation', () => {
    render(
      <MemoryRouter initialEntries={['/fit']}>
        <Routes>
          <Route path="/fit" element={<Fit />} />
          <Route path="/fit-evaluation" element={<FitEvaluation />} />
        </Routes>
      </MemoryRouter>
    )
    // Should redirect to FitEvaluation
    expect(screen.getByRole('heading', { name: /Fit Evaluation/i })).toBeDefined()
  })
})

describe('Experiences', () => {
  it('renders experience list', () => {
    render(<MemoryRouter><Experiences /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Experience Explorer/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /All Experiences/i })).toBeDefined()
    // Experience appears in the list
    const experienceLinks = screen.getAllByText(/University Software Engineering Group Project/i)
    expect(experienceLinks.length).toBeGreaterThan(0)
  })

  it('renders orientation guidance', () => {
    render(<MemoryRouter><Experiences /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /What This Tells You/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /How to Choose/i })).toBeDefined()
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
