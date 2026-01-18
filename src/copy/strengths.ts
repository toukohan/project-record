/**
 * Strengths page copy
 * Single source of truth for all user-facing text on the strengths page.
 */

export const strengths = {
  pageTitle: 'Observed Patterns',

  about: {
    heading: 'About This Page',
    content:
      'The items below are patterns inferred from documented project experiences. Each links to the records from which it was derived.',
  },

  categories: {
    heading: 'Categories',
    items: [
      { label: 'Consistent', description: 'Patterns demonstrated repeatedly across multiple projects.' },
      { label: 'Emerging', description: 'Patterns visible in some projects but not yet broadly established.' },
      { label: 'Not yet evidenced', description: 'Patterns not present in the available records.' },
    ],
  },

  evidenceLabel: 'Derived from:',

  nav: {
    fitEvaluation: 'Fit Evaluation',
    experiences: 'Project Experiences',
    backToHome: 'Back to home',
  },
}
