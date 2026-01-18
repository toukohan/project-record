/**
 * Ask page copy
 * Single source of truth for all user-facing text on the ask page.
 */

export const ask = {
  pageTitle: 'Query Interface',

  about: {
    heading: 'About This Page',
    content:
      'This interface retrieves information from documented project experiences, observed patterns, and fit evaluation logic. Responses are grounded in available records only.',
  },

  scope: {
    heading: 'Query Scope',
    included: {
      label: 'Within scope:',
      items: [
        'Documented project experiences and their details',
        'Decisions and tradeoffs recorded in experiences',
        'Observed patterns and their evidence',
        'Fit evaluation inputs and outputs',
      ],
    },
    excluded: {
      label: 'Outside scope:',
      items: [
        'Topics not covered by documented records',
        'Speculative or hypothetical scenarios',
        'Information not present in the source material',
      ],
    },
  },

  form: {
    placeholder: 'Enter query...',
    ariaLabel: 'Query input',
    submitButton: 'Submit',
    clearButton: 'Clear',
  },

  conversation: {
    queryLabel: 'Query:',
    sourcesLabel: 'Sources:',
    relatedLabel: 'Related:',
  },

  nav: {
    experiences: 'Project Experiences',
    patterns: 'Observed Patterns',
    backToHome: 'Back to home',
  },
}
