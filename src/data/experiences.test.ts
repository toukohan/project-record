import { describe, it, expect } from 'vitest'
import { experiences, getExperienceById, type Experience } from './experiences'

describe('experiences', () => {
  it('contains exactly seven experiences', () => {
    expect(experiences.length).toBe(7)
  })

  it('contains all expected experience IDs', () => {
    const expectedIds = [
      'bug-tracker-workforce-training',
      'mutudu-todo-app',
      'javafx-time-management',
      'poeboss-companion-app',
      'first-professional-role',
      'university-group-project',
      'academic-prioritization',
    ]
    const actualIds = experiences.map((e) => e.id)
    expectedIds.forEach((id) => {
      expect(actualIds).toContain(id)
    })
  })

  it('each experience has required fields', () => {
    experiences.forEach((exp: Experience) => {
      expect(exp.id).toBeDefined()
      expect(exp.title).toBeDefined()
      expect(exp.context.length).toBeGreaterThan(0)
      expect(exp.constraints.length).toBeGreaterThan(0)
      expect(exp.decisions.length).toBeGreaterThan(0)
      expect(exp.outcomes.length).toBeGreaterThan(0)
      expect(exp.lessonsLearned).toBeDefined()
      expect(exp.signals.length).toBeGreaterThan(0)
    })
  })

  it('each experience has valid lessonsLearned structure', () => {
    experiences.forEach((exp: Experience) => {
      expect(Array.isArray(exp.lessonsLearned.whatWorked)).toBe(true)
      expect(Array.isArray(exp.lessonsLearned.whatDidnt)).toBe(true)
      expect(Array.isArray(exp.lessonsLearned.whatIdDoDifferently)).toBe(true)
    })
  })

  it('each decision has at least one choice', () => {
    experiences.forEach((exp: Experience) => {
      exp.decisions.forEach((decision) => {
        expect(decision.choice.length).toBeGreaterThan(0)
      })
    })
  })
})

describe('getExperienceById', () => {
  it('returns experience when id exists', () => {
    const exp = getExperienceById('university-group-project')
    expect(exp).toBeDefined()
    expect(exp?.title).toBe('University Software Engineering Group Project')
  })

  it('returns new experiences by id', () => {
    const bugTracker = getExperienceById('bug-tracker-workforce-training')
    expect(bugTracker?.title).toBe('Self-Initiated Bug Tracker During Workforce Training')

    const mutudu = getExperienceById('mutudu-todo-app')
    expect(mutudu?.title).toBe('Mutual Todo Application (Mutudu)')

    const javafx = getExperienceById('javafx-time-management')
    expect(javafx?.title).toBe('JavaFX Time Management Application (Programming II Course Project)')

    const poeboss = getExperienceById('poeboss-companion-app')
    expect(poeboss?.title).toBe('Early-Stage Next.js Companion App for Path of Exile 2 (PoEBoss)')
  })

  it('returns undefined for non-existent id', () => {
    const exp = getExperienceById('non-existent')
    expect(exp).toBeUndefined()
  })
})
