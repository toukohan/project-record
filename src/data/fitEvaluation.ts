/**
 * Fit Evaluation Data Model
 *
 * This module provides deterministic fit evaluation logic based on
 * role characteristics. No AI or probabilistic logic is used.
 *
 * The evaluation maps structured inputs to fit outcomes by checking
 * alignment with known strengths and gaps.
 */

import { strengthItems, type StrengthCategory } from './strengths'

export type RoleType = 'individual-contributor' | 'tech-lead' | 'manager'
export type TeamSize = 'small' | 'medium' | 'large'
export type DomainFamiliarity = 'familiar' | 'adjacent' | 'new'
export type AutonomyLevel = 'high' | 'moderate' | 'low'

export interface RoleInputs {
  roleType: RoleType
  teamSize: TeamSize
  domainFamiliarity: DomainFamiliarity
  autonomyLevel: AutonomyLevel
}

export type FitLevel = 'strong' | 'partial' | 'notAFit'

export interface FitResult {
  level: FitLevel
  summary: string
  strengths: string[]
  concerns: string[]
  recommendation: string
}

export const roleTypeLabels: Record<RoleType, string> = {
  'individual-contributor': 'Individual Contributor',
  'tech-lead': 'Tech Lead',
  'manager': 'Manager',
}

export const teamSizeLabels: Record<TeamSize, string> = {
  small: 'Small (2-5 people)',
  medium: 'Medium (6-15 people)',
  large: 'Large (15+ people)',
}

export const domainLabels: Record<DomainFamiliarity, string> = {
  familiar: 'Familiar domain',
  adjacent: 'Adjacent domain',
  new: 'Completely new domain',
}

export const autonomyLabels: Record<AutonomyLevel, string> = {
  high: 'High autonomy expected',
  moderate: 'Moderate guidance available',
  low: 'Structured onboarding provided',
}

/**
 * Evaluate fit based on role inputs.
 * This is pure, deterministic logic with no randomness.
 */
export function evaluateFit(inputs: RoleInputs): FitResult {
  const strengths: string[] = []
  const concerns: string[] = []

  // Evaluate role type fit
  if (inputs.roleType === 'individual-contributor') {
    strengths.push('Individual contributor roles align with my current experience level')
  } else if (inputs.roleType === 'tech-lead') {
    concerns.push('Limited experience leading technical direction for a team')
  } else if (inputs.roleType === 'manager') {
    concerns.push('No management experience - this is explicitly not my strength yet')
  }

  // Evaluate team size fit
  if (inputs.teamSize === 'small') {
    strengths.push('Small teams match my experience with close collaboration')
  } else if (inputs.teamSize === 'medium') {
    strengths.push('Medium teams are workable with clear communication structures')
  } else if (inputs.teamSize === 'large') {
    concerns.push('No experience with large-scale team coordination')
  }

  // Evaluate domain familiarity
  if (inputs.domainFamiliarity === 'familiar') {
    strengths.push('Familiar domains reduce ramp-up time')
  } else if (inputs.domainFamiliarity === 'adjacent') {
    strengths.push('Adjacent domains are learnable with demonstrated learning velocity')
  } else if (inputs.domainFamiliarity === 'new') {
    concerns.push('Completely new domains require more onboarding investment')
  }

  // Evaluate autonomy level
  if (inputs.autonomyLevel === 'low') {
    strengths.push('Structured onboarding supports successful integration')
  } else if (inputs.autonomyLevel === 'moderate') {
    strengths.push('Moderate guidance matches my iterative working style')
  } else if (inputs.autonomyLevel === 'high') {
    concerns.push('High autonomy from day one may be challenging without domain context')
  }

  // Determine overall fit level
  const level = determineFitLevel(strengths.length, concerns.length)

  return {
    level,
    summary: getSummary(level),
    strengths,
    concerns,
    recommendation: getRecommendation(level),
  }
}

function determineFitLevel(strengthCount: number, concernCount: number): FitLevel {
  if (concernCount >= 3) return 'notAFit'
  if (concernCount >= 2) return 'partial'
  if (concernCount === 1 && strengthCount >= 2) return 'partial'
  return 'strong'
}

function getSummary(level: FitLevel): string {
  switch (level) {
    case 'strong':
      return 'This role appears to be a good alignment with my current capabilities.'
    case 'partial':
      return 'This role has some alignment, but there are areas that may require additional support or time.'
    case 'notAFit':
      return 'This role has significant gaps relative to my current capabilities. Proceeding would likely waste time for both sides.'
  }
}

function getRecommendation(level: FitLevel): string {
  switch (level) {
    case 'strong':
      return 'I would be interested in exploring this opportunity further.'
    case 'partial':
      return 'If the concerns listed are acceptable trade-offs, a conversation may still be worthwhile.'
    case 'notAFit':
      return 'I recommend not proceeding. This is not a criticism of the role—it is an honest assessment that we would both be better served by other matches.'
  }
}

export const fitLevelLabels: Record<FitLevel, string> = {
  strong: 'Strong Fit',
  partial: 'Partial Fit',
  notAFit: 'Not a Fit',
}
