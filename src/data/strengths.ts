/**
 * Strengths and Gaps Data Model
 *
 * This module defines a structured, honest assessment of capabilities
 * grounded in the canonical experience data. Each item links to specific
 * experiences that demonstrate or reveal the strength or gap.
 *
 * Categories:
 * - strong: Recurring patterns demonstrated across experiences
 * - developing: Areas with evidence of growth but not yet consistent
 * - notMyStrength: Honest gaps, stated plainly without hedging
 *
 * Principles:
 * - No buzzwords or marketing language
 * - Gaps are explicit, not softened
 * - Every claim links to supporting experience evidence
 */

import type { Experience } from './experiences'
import { experiences } from './experiences'

export type StrengthCategory = 'strong' | 'developing' | 'notMyStrength'

export interface StrengthItem {
  label: string
  description: string
  category: StrengthCategory
  evidenceIds: string[]
}

export const strengthItems: StrengthItem[] = [
  // Strong
  {
    label: 'Judgment under constraints',
    description: 'Making practical decisions when time, resources, or information are limited.',
    category: 'strong',
    evidenceIds: ['university-group-project', 'academic-prioritization', 'poeboss-companion-app'],
  },
  {
    label: 'Scope control',
    description: 'Reducing ambition to match reality rather than over-promising.',
    category: 'strong',
    evidenceIds: ['university-group-project', 'poeboss-companion-app'],
  },
  {
    label: 'Learning through iteration',
    description: 'Improving by shipping small increments and responding to feedback.',
    category: 'strong',
    evidenceIds: ['first-professional-role', 'mutudu-todo-app', 'bug-tracker-workforce-training'],
  },
  {
    label: 'High execution capacity',
    description: 'Ability to build and ship functional systems independently.',
    category: 'strong',
    evidenceIds: ['bug-tracker-workforce-training', 'mutudu-todo-app', 'javafx-time-management'],
  },
  {
    label: 'Willingness to adapt process',
    description: 'Changing how I work when evidence shows current approach is failing.',
    category: 'strong',
    evidenceIds: ['first-professional-role'],
  },
  {
    label: 'Honest reflection on failure modes',
    description: 'Identifying and admitting when my approach caused problems.',
    category: 'strong',
    evidenceIds: ['first-professional-role', 'university-group-project', 'bug-tracker-workforce-training'],
  },
  {
    label: 'Willingness to abandon work',
    description: 'Stopping projects based on cost-benefit assessment rather than sunk-cost pressure.',
    category: 'strong',
    evidenceIds: ['poeboss-companion-app'],
  },

  // Developing
  {
    label: 'Early architecture clarity',
    description: 'Defining clear structure upfront before implementation begins.',
    category: 'developing',
    evidenceIds: ['university-group-project', 'javafx-time-management', 'mutudu-todo-app'],
  },
  {
    label: 'Demand validation',
    description: 'Checking whether work will be used or valued before building.',
    category: 'developing',
    evidenceIds: ['bug-tracker-workforce-training', 'poeboss-companion-app'],
  },

  // Not my strength
  {
    label: 'Experience with large-scale systems',
    description: 'I have not worked on systems with high traffic or distributed architectures.',
    category: 'notMyStrength',
    evidenceIds: [],
  },
  {
    label: 'Long-term ownership narratives',
    description: 'I have not yet maintained a system over multiple years.',
    category: 'notMyStrength',
    evidenceIds: [],
  },
]

export function getStrengthsByCategory(category: StrengthCategory): StrengthItem[] {
  return strengthItems.filter((item) => item.category === category)
}

export function getEvidenceForStrength(item: StrengthItem): Experience[] {
  return item.evidenceIds
    .map((id) => experiences.find((exp) => exp.id === id))
    .filter((exp): exp is Experience => exp !== undefined)
}

export const categoryLabels: Record<StrengthCategory, string> = {
  strong: 'Strong',
  developing: 'Developing',
  notMyStrength: 'Not my strength yet',
}
