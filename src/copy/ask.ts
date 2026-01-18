/**
 * Ask page copy
 * Single source of truth for all user-facing text on the ask page.
 */

export const ask = {
  pageTitle: 'Ask About How I Work',

  whatThisTellsYou: {
    heading: 'What This Tells You',
    content:
      'This interface answers questions about my experiences, decisions, strengths, and gaps. All responses are grounded in documented data—no generated claims, no speculation.',
  },

  whatYouCanAsk: {
    heading: 'What You Can Ask',
    items: [
      'Questions about specific experiences (e.g., "Tell me about the university project")',
      'Questions about decisions and tradeoffs (e.g., "Why did you scope down?")',
      'Questions about strengths and gaps (e.g., "What are your weaknesses?")',
      'Questions about fit for a role type (e.g., "Would you fit a management role?")',
    ],
  },

  whatItCannotAnswer: {
    heading: 'What It Cannot Answer',
    items: [
      'Questions outside documented experiences',
      'Speculative or hypothetical scenarios',
      'Topics unrelated to professional capability',
    ],
    note: 'If you get an "out of scope" response, try the Fit Evaluation or browse Experiences directly.',
  },

  form: {
    placeholder: 'Ask a question...',
    ariaLabel: 'Your question',
    submitButton: 'Ask',
    clearButton: 'Clear Conversation',
  },

  conversation: {
    youLabel: 'You:',
    sourcesLabel: 'Sources:',
    suggestionLabel: 'Suggestion:',
  },

  nav: {
    browseExperiences: 'Browse Experiences',
    viewStrengths: 'View Strengths & Gaps',
    backToHome: 'Back to home',
  },
}
