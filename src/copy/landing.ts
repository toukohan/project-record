/**
 * Landing page copy
 * Single source of truth for all user-facing text on the landing page.
 */

export const landing = {
  pageTitle: 'Project Record',

  intro: {
    paragraph1:
      'This is a record of past projects, decisions made under constraints, and lessons learned.',
    paragraph2:
      'The materials here are available for inspection. They document what was built, how, and why.',
  },

  sections: {
    heading: 'Available Views',
    items: [
      {
        linkText: 'Fit Evaluation',
        path: '/fit-evaluation',
        description:
          'A short questionnaire that maps role characteristics to documented strengths and gaps.',
      },
      {
        linkText: 'Strengths and Gaps',
        path: '/strengths',
        description:
          'An honest breakdown of capabilities and limitations, with links to supporting experiences.',
      },
      {
        linkText: 'Experiences',
        path: '/experiences',
        description:
          'Detailed project records covering context, constraints, decisions, and outcomes.',
      },
      {
        linkText: 'Ask',
        path: '/ask',
        description:
          'A query interface for exploring specific decisions, tradeoffs, or reasoning.',
      },
    ],
  },

  fitOutcomes: {
    heading: 'Fit Outcomes',
    items: [
      {
        label: 'Not a Fit',
        description: 'Clear misalignment. The fit evaluation explains why.',
      },
      {
        label: 'Strong Fit',
        description: 'Good alignment with documented strengths.',
      },
      {
        label: 'Partial Fit',
        description: 'Some alignment, with specific concerns noted.',
      },
    ],
  },
}
