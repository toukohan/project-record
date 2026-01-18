/**
 * Experiences page copy
 * Single source of truth for all user-facing text on the experiences page.
 */

export const experiences = {
  pageTitle: 'Experience Explorer',

  whatThisTellsYou: {
    heading: 'What This Tells You',
    content:
      'Each experience documents real context, constraints, decisions, and lessons learned. This shows how I work under pressure, what I prioritize, and how I reflect on outcomes.',
  },

  howToChoose: {
    heading: 'How to Choose',
    intro: 'You do not need to read all experiences. Pick 1–2 that are relevant to your context:',
    recommendations: [
      { context: 'team collaboration', suggestion: 'University Software Engineering Group Project' },
      { context: 'professional work', suggestion: 'First Professional Web Development Role' },
      { context: 'scope control', suggestion: 'PoEBoss Companion App or Academic Prioritization' },
      { context: 'early execution patterns', suggestion: 'Bug Tracker or Mutudu Todo App' },
    ],
    note: 'If the fit evaluation already gave you a clear answer, reading experiences may not be necessary.',
  },

  allExperiences: {
    heading: 'All Experiences',
  },

  nav: {
    concernsLink: 'If something concerns you, check Strengths and Gaps',
    backToHome: 'Back to home',
  },

  detail: {
    sectionHeadings: {
      context: 'Context',
      constraints: 'Constraints',
      decisions: 'Decisions',
      tension: 'Tension:',
      outcomes: 'Outcomes',
      lessonsLearned: 'Lessons Learned',
      whatWorked: 'What Worked',
      whatDidnt: "What Didn't Work",
      whatIdDoDifferently: "What I'd Do Differently",
      signals: 'Signals Demonstrated',
    },
    nav: {
      backToExperiences: 'Back to experiences',
      viewStrengths: 'View related strengths and gaps',
      askFollowUp: 'Ask follow-up questions about this experience',
    },
  },

  notFound: {
    heading: 'Experience Not Found',
    backLink: 'Back to experiences',
  },
}
