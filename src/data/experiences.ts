/**
 * Canonical Experience Data Model
 *
 * This module defines the structured representation of personal experiences
 * used for UI rendering and AI grounding. It serves as the single source of
 * truth, replacing unstructured markdown for programmatic use cases.
 *
 * Structure:
 * - Experience: Top-level container for a single experience
 * - context: What the situation was
 * - constraints: Limiting factors that shaped decisions
 * - decisions: Key choices made, including initial tensions/failure modes
 * - outcomes: What resulted from the decisions
 * - lessonsLearned: Reflections on what worked, didn't work, and future improvements
 * - signals: Capabilities or traits this experience demonstrates
 *
 * Extensibility:
 * - Add new optional fields to Experience interface as needed
 * - Add new experiences to the experiences array
 * - Consumers should handle missing optional fields gracefully
 */

export interface Experience {
  id: string
  title: string
  context: string[]
  constraints: string[]
  decisions: Decision[]
  outcomes: string[]
  lessonsLearned: LessonsLearned
  signals: string[]
}

export interface Decision {
  tension?: string
  choice: string[]
}

export interface LessonsLearned {
  whatWorked: string[]
  whatDidnt: string[]
  whatIdDoDifferently: string[]
}

export const experiences: Experience[] = [
  {
    id: 'university-group-project',
    title: 'University Software Engineering Group Project',
    context: [
      'University Software Engineering course group project with an imaginary client',
      'Team members had varied technical capabilities',
      'Total available time was ~6 hours per week per person',
    ],
    constraints: [
      'Tight time budget',
      'Uneven skill distribution in the team',
      'Client preference for a web application',
      'Risk of over-scoping relative to team capability',
    ],
    decisions: [
      {
        tension:
          'I wanted to build a web application but realized it would increase delivery risk, create dependency on me, and serve my personal interest more than team success',
        choice: [
          'Chose an approach aligned with team capability',
          'Focused on completing sprint stories reliably',
          'Prioritized delivery and responsiveness over technical novelty',
        ],
      },
    ],
    outcomes: [
      'Project completed on time',
      'Sprint goals met',
      'Changes implemented based on client feedback',
      'Group received close to maximum points',
    ],
    lessonsLearned: {
      whatWorked: [
        'Ego management',
        'Scope control',
        'Alignment with team reality',
        'Incremental delivery',
      ],
      whatDidnt: [
        'Early architecture was unclear',
        'Initial phase felt scattered',
        'Team members waited on each other unnecessarily',
      ],
      whatIdDoDifferently: [
        'Establish a clearer architecture upfront',
        'Define ownership boundaries earlier',
        'Reduce early ambiguity for the team',
      ],
    },
    signals: [
      'Judgment under constraints',
      'Team-oriented decision-making',
      'Delivery focus',
      'Willingness to sacrifice personal preference for outcome',
    ],
  },
  {
    id: 'first-professional-role',
    title: 'First Professional Web Development Role (Local Company)',
    context: [
      'Worked as a web developer improving an existing e-commerce site',
      'This was my first role as a programmer',
      'The site was based on WordPress and custom theming',
    ],
    constraints: [
      'No prior professional programming experience',
      'Learning while delivering',
      'Real business expectations',
      'Limited feedback structure initially',
    ],
    decisions: [
      {
        tension:
          'I believed work needed to be close to perfect before showing progress, resulting in slow progress, unclear priorities, and frustration for both sides',
        choice: [
          'Shifted to iterative development',
          'Implemented frequent check-ins',
          'Explicit prioritization based on employer feedback',
        ],
      },
    ],
    outcomes: [
      'Clearer direction for development',
      'Tangible progress on the WordPress theme',
      'Reduced anxiety and better alignment',
    ],
    lessonsLearned: {
      whatWorked: [
        'Feedback loops',
        'Breaking work into smaller increments',
        'Aligning effort with business priorities',
      ],
      whatDidnt: ['Initial perfectionism', 'Over-optimizing before validation'],
      whatIdDoDifferently: [
        'Start iterative work immediately',
        'Surface work-in-progress early',
        'Ask clarifying questions sooner',
      ],
    },
    signals: [
      'Learning velocity',
      'Process correction',
      'Comfort with feedback',
      'Ability to function in real-world ambiguity',
    ],
  },
  {
    id: 'academic-prioritization',
    title: 'Academic Workload Prioritization',
    context: ['A period with an overloaded university course schedule'],
    constraints: [
      'Limited time',
      'Multiple simultaneous demands',
      'Optional vs mandatory assignments',
    ],
    decisions: [
      {
        choice: [
          'Dropped an optional assignment after evaluating credit impact, time cost, and overall workload balance',
        ],
      },
    ],
    outcomes: [
      'All courses completed',
      'Mostly strong grades',
      'Reduced stress and better focus',
    ],
    lessonsLearned: {
      whatWorked: [
        'Strategic prioritization',
        'Willingness to drop non-critical work',
      ],
      whatDidnt: [],
      whatIdDoDifferently: [
        'Assess priorities earlier',
        'Re-evaluate commitments sooner',
      ],
    },
    signals: ['Resource allocation', 'Self-regulation', 'Outcome-oriented thinking'],
  },
]

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((exp) => exp.id === id)
}
