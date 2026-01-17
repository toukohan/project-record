import { describe, it, expect } from 'vitest'
import { processQuery, isInScope, type ConversationTurn } from './queryEngine'

describe('processQuery', () => {
  it('handles greetings', () => {
    const response = processQuery('Hello')
    expect(response.answer).toContain('answer questions')
    expect(response.sources).toEqual([])
  })

  it('answers experience questions', () => {
    const response = processQuery('Tell me about your experiences')
    expect(response.answer).toContain('documented')
    expect(response.sources.length).toBeGreaterThan(0)
  })

  it('answers specific experience questions', () => {
    const response = processQuery('Tell me about the university project')
    expect(response.answer).toContain('University Software Engineering')
    expect(response.sources).toContain('University Software Engineering Group Project')
  })

  it('answers questions about bug tracker experience', () => {
    const response = processQuery('Tell me about the bug tracker you built')
    expect(response.answer).toContain('Bug Tracker During Workforce Training')
    expect(response.sources).toContain('Self-Initiated Bug Tracker During Workforce Training')
  })

  it('answers questions about Mutudu todo app', () => {
    const response = processQuery('What about the todo app project?')
    expect(response.answer).toContain('Mutudu')
    expect(response.sources).toContain('Mutual Todo Application (Mutudu)')
  })

  it('answers questions about JavaFX project', () => {
    const response = processQuery('Tell me about the JavaFX time management app')
    expect(response.answer).toContain('JavaFX Time Management')
    expect(response.sources).toContain('JavaFX Time Management Application (Programming II Course Project)')
  })

  it('answers questions about PoEBoss companion app', () => {
    const response = processQuery('What about the Path of Exile companion app?')
    expect(response.answer).toContain('Path of Exile 2')
    expect(response.sources).toContain('Early-Stage Next.js Companion App for Path of Exile 2 (PoEBoss)')
  })

  it('answers strength questions', () => {
    const response = processQuery('What are your strengths?')
    expect(response.answer).toContain('strength')
    expect(response.sources.length).toBeGreaterThan(0)
  })

  it('answers gap questions honestly', () => {
    const response = processQuery('What are your weaknesses or gaps?')
    expect(response.answer).toContain('explicit about my gaps')
    expect(response.answer).toContain('Not my strength')
  })

  it('answers decision questions', () => {
    const response = processQuery('What decisions did you make in the university project?')
    expect(response.answer).toContain('Decision')
    expect(response.sources.length).toBeGreaterThan(0)
  })

  it('answers lesson questions', () => {
    const response = processQuery('What did you learn from your experiences?')
    expect(response.answer).toContain('lesson')
    expect(response.sources.length).toBeGreaterThan(0)
  })

  it('refuses out-of-scope questions', () => {
    const response = processQuery('What is the capital of France?')
    expect(response.answer).toContain('cannot')
    expect(response.followUp).toBeDefined()
  })

  it('is deterministic - same inputs produce same outputs', () => {
    const response1 = processQuery('Tell me about your experiences')
    const response2 = processQuery('Tell me about your experiences')
    expect(response1).toEqual(response2)
  })

  it('supports multi-turn context parameter', () => {
    const history: ConversationTurn[] = [
      { question: 'Hello', response: processQuery('Hello') },
    ]
    const response = processQuery('Tell me about your strengths', history)
    expect(response.answer).toBeDefined()
  })

  it('provides follow-up suggestions', () => {
    const response = processQuery('Tell me about your experiences')
    expect(response.followUp).toBeDefined()
  })

  it('handles fit questions', () => {
    const response = processQuery('Would you be a good fit for a management role?')
    expect(response.answer).toContain('fit')
    expect(response.sources.length).toBeGreaterThan(0)
  })
})

describe('isInScope', () => {
  it('returns true for experience questions', () => {
    expect(isInScope('Tell me about your experience')).toBe(true)
  })

  it('returns true for strength questions', () => {
    expect(isInScope('What are you good at?')).toBe(true)
  })

  it('returns true for gap questions', () => {
    expect(isInScope('What are your weaknesses?')).toBe(true)
  })

  it('returns false for unrelated questions', () => {
    expect(isInScope('What is the weather today?')).toBe(false)
  })

  it('returns false for speculative questions', () => {
    expect(isInScope('Can you predict the future?')).toBe(false)
  })
})
