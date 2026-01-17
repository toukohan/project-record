import { describe, it, expect } from 'vitest'
import { evaluateFit, type RoleInputs } from './fitEvaluation'

describe('evaluateFit', () => {
  it('returns strong fit for ideal inputs', () => {
    const inputs: RoleInputs = {
      roleType: 'individual-contributor',
      teamSize: 'small',
      domainFamiliarity: 'familiar',
      autonomyLevel: 'moderate',
    }
    const result = evaluateFit(inputs)
    expect(result.level).toBe('strong')
    expect(result.strengths.length).toBeGreaterThan(0)
    expect(result.concerns.length).toBe(0)
  })

  it('returns not a fit for manager role in large team with new domain and high autonomy', () => {
    const inputs: RoleInputs = {
      roleType: 'manager',
      teamSize: 'large',
      domainFamiliarity: 'new',
      autonomyLevel: 'high',
    }
    const result = evaluateFit(inputs)
    expect(result.level).toBe('notAFit')
    expect(result.concerns.length).toBeGreaterThanOrEqual(3)
  })

  it('returns partial fit for mixed inputs', () => {
    const inputs: RoleInputs = {
      roleType: 'individual-contributor',
      teamSize: 'medium',
      domainFamiliarity: 'new',
      autonomyLevel: 'high',
    }
    const result = evaluateFit(inputs)
    expect(result.level).toBe('partial')
  })

  it('is deterministic - same inputs produce same outputs', () => {
    const inputs: RoleInputs = {
      roleType: 'tech-lead',
      teamSize: 'medium',
      domainFamiliarity: 'adjacent',
      autonomyLevel: 'moderate',
    }
    const result1 = evaluateFit(inputs)
    const result2 = evaluateFit(inputs)
    expect(result1).toEqual(result2)
  })

  it('provides recommendation for each fit level', () => {
    const strongInputs: RoleInputs = {
      roleType: 'individual-contributor',
      teamSize: 'small',
      domainFamiliarity: 'familiar',
      autonomyLevel: 'low',
    }
    const notFitInputs: RoleInputs = {
      roleType: 'manager',
      teamSize: 'large',
      domainFamiliarity: 'new',
      autonomyLevel: 'high',
    }

    const strongResult = evaluateFit(strongInputs)
    const notFitResult = evaluateFit(notFitInputs)

    expect(strongResult.recommendation).toBeDefined()
    expect(strongResult.recommendation.length).toBeGreaterThan(0)
    expect(notFitResult.recommendation).toContain('not proceeding')
  })

  it('includes summary for each result', () => {
    const inputs: RoleInputs = {
      roleType: 'individual-contributor',
      teamSize: 'small',
      domainFamiliarity: 'familiar',
      autonomyLevel: 'moderate',
    }
    const result = evaluateFit(inputs)
    expect(result.summary).toBeDefined()
    expect(result.summary.length).toBeGreaterThan(0)
  })
})
