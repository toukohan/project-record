/**
 * Fit Evaluation page copy
 * Single source of truth for all user-facing text on the fit evaluation page.
 */

export const fitEvaluation = {
  pageTitle: 'Fit Evaluation',

  about: {
    heading: 'About This Page',
    content:
      'This evaluation maps role characteristics against documented patterns, constraints, and experience data. The output is a deterministic classification based on input values.',
  },

  outputLabels: {
    heading: 'Output Labels',
    items: [
      {
        label: 'Not a Fit',
        description: 'Significant gaps exist relative to the specified role characteristics.',
      },
      {
        label: 'Strong Fit',
        description: 'Role characteristics align well with documented patterns.',
      },
      {
        label: 'Partial Fit',
        description: 'Some alignment exists, with specific gaps or concerns identified.',
      },
    ],
  },

  form: {
    roleType: 'Role Type',
    teamSize: 'Team Size',
    domainFamiliarity: 'Domain Familiarity',
    autonomyLevel: 'Autonomy Level',
    submitButton: 'Evaluate',
  },

  result: {
    alignmentHeading: 'Alignment Points',
    concernsHeading: 'Concerns',
    analysisHeading: 'Analysis',
    evaluateAnother: 'New Evaluation',
    partialNote:
      'This result indicates partial alignment. Specific concerns are listed above.',
  },

  nav: {
    patterns: 'Observed Patterns',
    query: 'Query Interface',
    backToHome: 'Back to home',
  },
}
