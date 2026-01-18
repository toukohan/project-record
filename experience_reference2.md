# Experience Reference (Canonical Source)

This document describes real experiences, decisions, constraints, and lessons.
It is used as:
- AI grounding context
- Personal reference for consistency
- Source of interrogable substance

Claims made elsewhere must be traceable to this file.

---

## Experience 1: Self-Initiated Bug Tracker During Workforce Training (Työvoimakoulutus)

### Context
Early workforce training phase (~3 years ago).  
No prior professional experience or formal education in software development.  
No explicit requirement to build tooling beyond assigned coursework.

I felt a strong need to prove that I could build something real, despite lacking credentials.

### Constraints
- No real client or user need
- No defined success criteria
- Limited experience with non-trivial systems
- Motivation driven largely by desire to demonstrate competence

### Decision
I decided to independently build a simple bug-tracking web application as a demonstration project.  
I chose a full-stack approach using tools I had recently learned (Express, server-side templating, MongoDB/Mongoose, authentication with Passport.js, and role-based users).

### Outcome
- Functional bug tracker completed in ~1 week of full-time effort
- Implemented authentication, role-based access, ticket creation, assignment, and completion
- Some peers tested it briefly when I asked for feedback; no sustained usage

### What Worked
- High learning velocity
- Ability to integrate multiple unfamiliar components
- End-to-end ownership of a non-trivial system
- Gained concrete understanding of system composition beyond tutorial-scale apps

### What Didn’t
- No demand validation or alignment with program goals
- Effort exceeded what the context realistically required
- Output signal was ambiguous: productivity without judgment
- Motivation was primarily ego- and proof-driven

### What I’d Do Differently
- First clarify what signal or outcome actually matters
- Validate whether the work would be used or valued
- Build a minimal demonstrator instead of a full application

### Signals This Experience Demonstrates
- Early-career tendency toward overbuilding
- Strong intrinsic motivation and execution capacity
- Learning through doing rather than planning
- Baseline state prior to later development of scope control and judgment

---

## Experience 2: Mutual Todo Application (Mutudu)

### Context
Pre-employment personal project built before my first professional developer role.  
The goal was to build a small group-based todo application usable by myself and my partner for shared grocery lists.

I wanted to move beyond tutorial-scale apps and understand how real frontend and backend systems interact.

### Constraints
- Very small, informal user base
- No prior experience building or deploying multi-application systems
- Limited understanding of authentication boundaries, CORS, and production environments
- Learning-driven project without external deadlines or validation pressure

### Decision
I chose to intentionally separate the system into:
- A React + TypeScript frontend
- A Node/Express + TypeScript backend with MongoDB

I deployed the application so it could be accessed via mobile browsers, rather than remaining a local-only project.

### Outcome
- Working group-based todo app with shared lists, invitations, and task state
- Frontend and backend successfully integrated and deployed
- Iterated on the system over time, addressing bugs, UX issues, auth edge cases, and deployment-related changes
- Gained first-hand experience with system boundaries, shared state, and integration failures

### What Worked
- Learned to reason about contracts between frontend and backend
- Encountered and resolved real deployment friction (CORS, build steps, base URLs)
- Developed intuition for shared state, auth boundaries, and user interaction flows
- Improved ability to refactor and adjust systems based on emerging issues

### What Didn’t
- Architecture decisions were exploratory rather than intentional
- Authentication middleware had flaws and was not fully robust
- No clear long-term maintenance or ownership model
- Feature growth sometimes preceded clarity of design

### What I’d Do Differently
- Define clearer system boundaries and invariants earlier
- Start with a smaller core and validate usage before expanding features
- Be more deliberate about architecture instead of accumulating solutions

### Signals This Experience Demonstrates
- Transition from single-app to multi-system thinking
- First exposure to real-world deployment and integration problems
- Learning through iteration and system feedback
- Early development of architectural awareness

---

## Experience 3: First Professional Web Development Role (Local Company)

### Context
Worked as a web developer improving an existing e-commerce site.  
This was my first role as a programmer.  
The site was based on WordPress and custom theming.

### Constraints
- No prior professional programming experience
- Learning while delivering
- Real business expectations
- Limited feedback structure initially

### Initial Failure Mode
I believed work needed to be close to perfect before being shown.  
This resulted in:
- Slow progress
- Unclear priorities
- Frustration for both sides

### Decision
Shifted working model to:
- Iterative development
- Frequent check-ins
- Explicit prioritization based on employer feedback

### Outcome
- Clearer development direction
- Tangible progress on the WordPress theme
- Reduced anxiety and better alignment with expectations

### What Worked
- Feedback loops
- Breaking work into smaller increments
- Aligning effort with business priorities

### What Didn’t
- Initial perfectionism
- Over-optimizing before validation

### What I’d Do Differently
- Start iterative work immediately
- Surface work-in-progress early
- Ask clarifying questions sooner

### Signals This Experience Demonstrates
- Learning velocity
- Process correction
- Comfort with feedback
- Ability to function in real-world ambiguity

---

## Experience 4: University Software Engineering Group Project

### Context
University Software Engineering course group project with an imaginary client.  
Team members had varied technical capabilities.  
Total available time was ~6 hours per week per person.

### Constraints
- Tight time budget
- Uneven skill distribution in the team
- Client preference for a web application
- Risk of over-scoping relative to team capability

### Initial Tension
I wanted to build a web application and tested whether I could prototype one quickly.  
I realized this direction would:
- Increase delivery risk
- Create dependency on me
- Serve my personal interest more than team success

### Decision
I intentionally reduced the project scope and technical ambition:
- Chose an approach aligned with team capability
- Focused on completing sprint stories reliably
- Prioritized delivery and responsiveness over technical novelty

### Outcome
- Project completed on time
- Sprint goals met
- Changes implemented based on client feedback
- Group received close to maximum points

### What Worked
- Ego management
- Scope control
- Alignment with team reality
- Incremental delivery

### What Didn’t
- Early architecture was unclear
- Initial phase felt scattered
- Team members waited on each other unnecessarily

### What I’d Do Differently
- Establish a clearer architecture upfront
- Define ownership boundaries earlier
- Reduce early ambiguity for the team

### Signals This Experience Demonstrates
- Judgment under constraints
- Team-oriented decision-making
- Delivery focus
- Willingness to sacrifice personal preference for outcome

---

## Experience 5: Academic Workload Prioritization

### Context
A period with an overloaded university course schedule.

### Constraints
- Limited time
- Multiple simultaneous demands
- Optional vs mandatory assignments

### Decision
Dropped an optional assignment in one course after evaluating:
- Credit impact
- Time cost
- Overall workload balance

### Outcome
- All courses completed
- Mostly strong grades
- Reduced stress and better focus

### What Worked
- Strategic prioritization
- Willingness to drop non-critical work

### What I’d Do Differently
- Assess priorities earlier
- Re-evaluate commitments sooner

### Signals This Experience Demonstrates
- Resource allocation
- Self-regulation
- Outcome-oriented thinking

---

## Summary of Strength Patterns

Recurring strengths across experiences:
- Learning through iteration
- High execution capacity
- Increasing judgment under constraints
- Willingness to adapt process
- Honest reflection on failure modes

Recurring gaps:
- Early-career overproduction without validation
- Early architecture clarity (improving)
- Experience with large-scale or long-term owned systems

These gaps are acknowledged and not hidden.
