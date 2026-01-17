import { describe, it, expect } from 'vitest'
import { experiences, getExperienceById, type Experience } from './experiences'

describe('experiences', () => {
  it('contains at least three experiences', () => {
    expect(experiences.length).toBeGreaterThanOrEqual(3)
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

  it('returns undefined for non-existent id', () => {
    const exp = getExperienceById('non-existent')
    expect(exp).toBeUndefined()
  })
})
