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
    id: 'bug-tracker-workforce-training',
    title: 'Self-Initiated Bug Tracker During Workforce Training',
    context: [
      'Early workforce training phase (~3 years ago)',
      'No prior professional experience or formal education in software development',
      'No explicit requirement to build tooling beyond assigned coursework',
      'I felt a strong need to prove that I could build something real, despite lacking credentials',
    ],
    constraints: [
      'No real client or user need',
      'No defined success criteria',
      'Limited experience with non-trivial systems',
      'Motivation driven largely by desire to demonstrate competence',
    ],
    decisions: [
      {
        choice: [
          'Independently built a simple bug-tracking web application as a demonstration project',
          'Chose a full-stack approach using Express, server-side templating, MongoDB/Mongoose, Passport.js authentication, and role-based users',
        ],
      },
    ],
    outcomes: [
      'Functional bug tracker completed in ~1 week of full-time effort',
      'Implemented authentication, role-based access, ticket creation, assignment, and completion',
      'Some peers tested it briefly when I asked for feedback; no sustained usage',
    ],
    lessonsLearned: {
      whatWorked: [
        'High learning velocity',
        'Ability to integrate multiple unfamiliar components',
        'End-to-end ownership of a non-trivial system',
        'Gained concrete understanding of system composition beyond tutorial-scale apps',
      ],
      whatDidnt: [
        'No demand validation or alignment with program goals',
        'Effort exceeded what the context realistically required',
        'Output signal was ambiguous: productivity without judgment',
        'Motivation was primarily ego- and proof-driven',
      ],
      whatIdDoDifferently: [
        'First clarify what signal or outcome actually matters',
        'Validate whether the work would be used or valued',
        'Build a minimal demonstrator instead of a full application',
      ],
    },
    signals: [
      'Early-career tendency toward overbuilding',
      'Strong intrinsic motivation and execution capacity',
      'Learning through doing rather than planning',
      'Baseline state prior to later development of scope control and judgment',
    ],
  },
  {
    id: 'mutudu-todo-app',
    title: 'Mutual Todo Application (Mutudu)',
    context: [
      'Pre-employment personal project built before my first professional developer role',
      'The goal was to build a small group-based todo application usable by myself and my partner for shared grocery lists',
      'I wanted to move beyond tutorial-scale apps and understand how real frontend and backend systems interact',
    ],
    constraints: [
      'Very small, informal user base',
      'No prior experience building or deploying multi-application systems',
      'Limited understanding of authentication boundaries, CORS, and production environments',
      'Learning-driven project without external deadlines or validation pressure',
    ],
    decisions: [
      {
        choice: [
          'Intentionally separated the system into a React + TypeScript frontend and a Node/Express + TypeScript backend with MongoDB',
          'Deployed the application so it could be accessed via mobile browsers, rather than remaining a local-only project',
        ],
      },
    ],
    outcomes: [
      'Working group-based todo app with shared lists, invitations, and task state',
      'Frontend and backend successfully integrated and deployed',
      'Iterated on the system over time, addressing bugs, UX issues, auth edge cases, and deployment-related changes',
      'Gained first-hand experience with system boundaries, shared state, and integration failures',
    ],
    lessonsLearned: {
      whatWorked: [
        'Learned to reason about contracts between frontend and backend',
        'Encountered and resolved real deployment friction (CORS, build steps, base URLs)',
        'Developed intuition for shared state, auth boundaries, and user interaction flows',
        'Improved ability to refactor and adjust systems based on emerging issues',
      ],
      whatDidnt: [
        'Architecture decisions were exploratory rather than intentional',
        'Authentication middleware had flaws and was not fully robust',
        'No clear long-term maintenance or ownership model',
        'Feature growth sometimes preceded clarity of design',
      ],
      whatIdDoDifferently: [
        'Define clearer system boundaries and invariants earlier',
        'Start with a smaller core and validate usage before expanding features',
        'Be more deliberate about architecture instead of accumulating solutions',
      ],
    },
    signals: [
      'Transition from single-app to multi-system thinking',
      'First exposure to real-world deployment and integration problems',
      'Learning through iteration and system feedback',
      'Early development of architectural awareness',
    ],
  },
  {
    id: 'javafx-time-management',
    title: 'JavaFX Time Management Application (Programming II Course Project)',
    context: [
      'Solo course project for the second programming course during my first year of university',
      'The project was developed over ~3 months with weekly or bi-weekly milestones',
      'The task was to design and implement a desktop application using Java and JavaFX, starting from an initial design phase',
    ],
    constraints: [
      'Long-lived project with staged deadlines',
      'Limited prior experience with object-oriented design at this scale',
      'Requirement to design before implementation',
      'Concurrent heavy course workload',
    ],
    decisions: [
      {
        choice: [
          'Chose to build a time management application for tracking courses and their deadlines',
          'Designed the system upfront, including UI sketches, data models, and service responsibilities',
          'Stored data using the file system, requiring manual serialization and parsing of objects',
        ],
      },
    ],
    outcomes: [
      'Functional application that met course requirements and passed evaluation',
      'Implemented UI using JavaFX and structured logic using object-oriented abstractions',
      'Gained first exposure to the long-term consequences of early design decisions',
      'The final structure felt overengineered and awkward, and the application was not polished into something I would personally want to use',
    ],
    lessonsLearned: {
      whatWorked: [
        'Learned core object-oriented concepts through sustained use',
        'Experienced the value and cost of separating responsibilities',
        'Understood how early abstractions constrain later changes',
        'Built a non-trivial system over an extended timeline',
      ],
      whatDidnt: [
        'Overengineering in early design created friction later',
        'Some architectural decisions were unnecessary in hindsight',
        'UI development with JavaFX was slow and frustrating',
        'Project quality plateaued due to competing academic demands',
      ],
      whatIdDoDifferently: [
        'Start with a smaller, more concrete core before abstracting',
        'Delay architectural generalization until usage patterns emerge',
        'Be more selective about responding to exploratory feedback mid-project',
      ],
    },
    signals: [
      'First encounter with long-term architectural consequences',
      'Early tendency toward abstraction before necessity',
      'Growing awareness of design cost vs. benefit',
      'Foundation for later emphasis on scope control and pragmatic architecture',
    ],
  },
  {
    id: 'poeboss-companion-app',
    title: 'Early-Stage Next.js Companion App for Path of Exile 2 (PoEBoss)',
    context: [
      'Personal project started around the closed beta release of Path of Exile 2',
      'I had extensive experience with the first game and noticed growing publicity around upcoming boss difficulty and mechanics',
      'We had access to the game via purchasable beta keys, and the idea was to build a strategic companion web application to help players prepare for boss encounters',
    ],
    constraints: [
      'Data gathering required significant manual effort from gameplay and external sources',
      'No certainty that players would want or use a separate strategy resource',
      'Project viability depended on sustained content creation',
      'Learning-driven project without external commitments',
    ],
    decisions: [
      {
        choice: [
          'Chose to build a simple Next.js application focused on core functionality only: CRUD for bosses, abilities, media, and strategies',
          'Avoided styling or premature polish',
          'Intent was to validate feasibility and usefulness before investing heavily in content creation or presentation',
        ],
      },
    ],
    outcomes: [
      'Functional but minimal application implemented',
      'Learned about Next.js development behavior, including caching during development',
      'After assessing the effort required to gather and maintain high-quality data, and the risk that user interest would be limited, I decided not to continue development',
    ],
    lessonsLearned: {
      whatWorked: [
        'Started with a minimal, functional core',
        'Explicitly avoided early overengineering',
        'Evaluated the cost of content creation relative to potential value',
        'Made a conscious decision to stop rather than forcing continuation',
      ],
      whatDidnt: [
        'No early validation of actual user demand',
        'Underestimated the ongoing effort required for data-heavy projects',
        'Project depended heavily on sustained manual input',
      ],
      whatIdDoDifferently: [
        'Validate user interest earlier (e.g. community discussion or surveys)',
        'Define clearer success and abandonment criteria upfront',
        'Separate technical exploration from content-heavy commitments',
      ],
    },
    signals: [
      'Market- and effort-aware decision-making',
      'Improved scope discipline compared to earlier projects',
      'Willingness to abandon work based on cost-benefit assessment',
      'Healthy separation between learning value and sunk-cost pressure',
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
