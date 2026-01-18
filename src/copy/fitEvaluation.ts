/**
 * Fit Evaluation page copy
 * Single source of truth for all user-facing text on the fit evaluation page.
 */

export const fitEvaluation = {
  pageTitle: 'Fit Evaluation',

  whatThisTellsYou: {
    heading: 'What This Tells You',
    content:
      'This tool provides a deterministic fit assessment based on role characteristics. It is grounded in my documented strengths and gaps. The goal is to save time for both sides by identifying mismatches early.',
  },

  whenToTrust: {
    heading: 'When to Trust the Result',
    items: [
      {
        label: '"Not a Fit"',
        description: 'Stop here. Further exploration is unlikely to change this.',
      },
      {
        label: '"Strong Fit"',
        description:
          'Proceed with confidence. Explore further only if you have specific concerns.',
      },
      {
        label: '"Partial Fit"',
        description:
          'Review the concerns listed. Check strengths/gaps or specific experiences if concerns are critical to your decision.',
      },
    ],
  },

  form: {
    roleType: 'Role Type',
    teamSize: 'Team Size',
    domainFamiliarity: 'Domain Familiarity',
    autonomyLevel: 'Autonomy Level',
    submitButton: 'Evaluate Fit',
  },

  result: {
    alignmentHeading: 'Alignment Points',
    concernsHeading: 'Concerns',
    recommendationHeading: 'Recommendation',
    evaluateAnother: 'Evaluate Another Role',
    partialNote:
      'This result is partial. If concerns are critical, check Strengths and Gaps or specific experiences for more context.',
  },

  nav: {
    viewStrengths: 'View Strengths and Gaps',
    askFollowUp: 'Ask follow-up questions',
    backToHome: 'Back to home',
  },
}
