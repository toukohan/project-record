import { describe, it, expect } from 'vitest'
import {
  strengthItems,
  getStrengthsByCategory,
  getEvidenceForStrength,
  categoryLabels,
} from './strengths'
import { experiences } from './experiences'

describe('strengthItems', () => {
  it('contains items in all three categories', () => {
    const strong = getStrengthsByCategory('strong')
    const developing = getStrengthsByCategory('developing')
    const notMyStrength = getStrengthsByCategory('notMyStrength')

    expect(strong.length).toBeGreaterThan(0)
    expect(developing.length).toBeGreaterThan(0)
    expect(notMyStrength.length).toBeGreaterThan(0)
  })

  it('each item has required fields', () => {
    strengthItems.forEach((item) => {
      expect(item.label).toBeDefined()
      expect(item.description).toBeDefined()
      expect(item.category).toBeDefined()
      expect(Array.isArray(item.evidenceIds)).toBe(true)
    })
  })

  it('evidence IDs reference valid experiences', () => {
    const validIds = experiences.map((exp) => exp.id)

    strengthItems.forEach((item) => {
      item.evidenceIds.forEach((id) => {
        expect(validIds).toContain(id)
      })
    })
  })
})

describe('getEvidenceForStrength', () => {
  it('returns experiences for items with evidence', () => {
    const itemWithEvidence = strengthItems.find((i) => i.evidenceIds.length > 0)
    if (itemWithEvidence) {
      const evidence = getEvidenceForStrength(itemWithEvidence)
      expect(evidence.length).toBe(itemWithEvidence.evidenceIds.length)
    }
  })

  it('returns empty array for items without evidence', () => {
    const itemWithoutEvidence = strengthItems.find((i) => i.evidenceIds.length === 0)
    if (itemWithoutEvidence) {
      const evidence = getEvidenceForStrength(itemWithoutEvidence)
      expect(evidence.length).toBe(0)
    }
  })
})

describe('categoryLabels', () => {
  it('has labels for all categories', () => {
    expect(categoryLabels.strong).toBeDefined()
    expect(categoryLabels.developing).toBeDefined()
    expect(categoryLabels.notMyStrength).toBeDefined()
  })
})
