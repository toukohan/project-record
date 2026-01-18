/**
 * Experiences page copy
 * Single source of truth for all user-facing text on the experiences page.
 */

export const experiences = {
  pageTitle: 'Project Experiences',

  about: {
    heading: 'About These Records',
    content:
      'Each experience documents a real project with its context, constraints, decisions made, outcomes observed, and lessons drawn afterward.',
  },

  byTopic: {
    heading: 'By Topic',
    intro: 'Experiences grouped by primary theme:',
    topics: [
      { topic: 'Team collaboration', suggestion: 'University Software Engineering Group Project' },
      { topic: 'Professional work', suggestion: 'First Professional Web Development Role' },
      { topic: 'Scope control', suggestion: 'PoEBoss Companion App, Academic Prioritization' },
      { topic: 'Early execution patterns', suggestion: 'Bug Tracker, Mutudu Todo App' },
    ],
  },

  allExperiences: {
    heading: 'All Experiences',
  },

  nav: {
    strengthsLink: 'Strengths and Gaps',
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
      viewStrengths: 'Related strengths and gaps',
      askAbout: 'Ask about this experience',
    },
  },

  notFound: {
    heading: 'Experience Not Found',
    backLink: 'Back to experiences',
  },
}
