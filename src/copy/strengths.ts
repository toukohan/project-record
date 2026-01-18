/**
 * Strengths page copy
 * Single source of truth for all user-facing text on the strengths page.
 */

export const strengths = {
  pageTitle: 'Strengths and Gaps',

  whatThisTellsYou: {
    heading: 'What This Tells You',
    content:
      'This is an honest assessment of where I can contribute and where I cannot. Each strength links to experiences that demonstrate it. Gaps are stated plainly without hedging.',
  },

  howToUse: {
    heading: 'How to Use This',
    intro: 'Compare these against your role requirements:',
    items: [
      { label: 'Strong', description: 'items indicate reliable contribution areas' },
      { label: 'Developing', description: 'items show growth potential with guidance' },
      { label: 'Not my strength yet', description: 'items are gaps that may disqualify the fit' },
    ],
    conclusion:
      'If a gap matches a critical requirement for your role, this is likely not a fit. If strengths align with your needs and gaps are acceptable, proceed to the fit evaluation.',
  },

  evidenceLabel: 'Evidence:',

  nav: {
    checkFit: 'Check fit for your specific role',
    seeExperiences: 'See experiences that demonstrate these patterns',
    backToHome: 'Back to home',
  },
}
