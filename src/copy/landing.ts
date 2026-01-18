/**
 * Landing page copy
 * Single source of truth for all user-facing text on the landing page.
 */

export const landing = {
  pageTitle: 'Capability Discovery Interface',

  intro: {
    paragraph1:
      'This interface helps you decide whether I can contribute to your team, learn your domain, and deliver under real constraints.',
    paragraph2:
      'Instead of claims, you can investigate. Instead of filtering, you can explore.',
  },

  evaluationPath: {
    heading: 'Recommended Evaluation Path',
    leadIn: 'Most evaluations take 2–5 minutes.',
    steps: [
      {
        linkText: 'Fit Evaluation',
        description:
          'Answer 4 questions. Get a clear fit assessment. Often sufficient to decide.',
      },
      {
        linkText: 'Strengths and Gaps',
        description:
          'Explicit capabilities and limitations. Check if fit is partial.',
      },
      {
        linkText: 'Experiences',
        description: 'Read 1–2 relevant experiences. Not all are required.',
      },
      {
        linkText: 'Ask',
        description: 'Query specific decisions or reasoning. Best for follow-up.',
      },
    ],
  },

  whenToStop: {
    heading: 'When to Stop',
    items: [
      {
        label: '"Not a Fit"',
        description: 'You have enough information. Stop here.',
      },
      {
        label: '"Strong Fit"',
        description: 'Proceed directly. No further exploration needed.',
      },
      {
        label: '"Partial Fit"',
        description: 'Check concerns in Strengths or Experiences.',
      },
    ],
  },
}
