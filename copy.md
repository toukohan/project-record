# User-Facing Copy Reference

This file contains all user-facing text from the application, organized by page/section.
Use this for tone review, iteration, and external feedback.

---

## Landing Page (`/`)

### Page Title
Project Record

### Introduction
This is a record of past projects, decisions made under constraints, and lessons learned.

The materials here are available for inspection. They document what was built, how, and why.

### Available Views

**Section heading:** Contents

**Fit Evaluation**
- Link text: Fit Evaluation
- Description: A short questionnaire that maps role characteristics to documented strengths and gaps.

**Strengths and Gaps**
- Link text: Strengths and Gaps
- Description: An honest breakdown of capabilities and limitations, with links to supporting experiences.

**Experiences**
- Link text: Experiences
- Description: Detailed project records covering context, constraints, decisions, and outcomes.

**Ask**
- Link text: Ask
- Description: A query interface for exploring specific decisions, tradeoffs, or reasoning.

### Fit Outcomes

**Section heading:** Fit Outcomes

- **Not a Fit** — Clear misalignment based on documented constraints.
- **Strong Fit** — Good alignment with documented strengths.
- **Partial Fit** — Some alignment, with specific concerns noted.

---

## Experiences Page (`/experiences`)

### Page Title
Project Experiences

### About These Records
Each experience documents a real project with its context, constraints, decisions made, outcomes observed, and lessons drawn afterward.

### By Topic
Experiences grouped by primary theme:

- **Team collaboration**: University Software Engineering Group Project
- **Professional work**: First Professional Web Development Role
- **Scope control**: PoEBoss Companion App, Academic Prioritization
- **Early execution patterns**: Bug Tracker, Mutudu Todo App

### All Experiences (section heading)
All Experiences

### Navigation
- Strengths and Gaps
- Back to home

### Experience Detail Page

**Section headings:**
- Context
- Constraints
- Decisions
- Tension (if applicable)
- Outcomes
- Lessons Learned
- What Worked
- What Didn't Work
- What I'd Do Differently
- Signals Demonstrated

**Navigation:**
- Back to experiences
- Related strengths and gaps
- Ask about this experience

**Not Found:**
- Experience Not Found
- Back to experiences

---

## Experience Titles

1. Self-Initiated Bug Tracker During Workforce Training
2. Mutual Todo Application (Mutudu)
3. JavaFX Time Management Application (Programming II Course Project)
4. Early-Stage Next.js Companion App for Path of Exile 2 (PoEBoss)
5. First Professional Web Development Role (Local Company)
6. University Software Engineering Group Project
7. Academic Workload Prioritization

---

## Strengths and Gaps Page (`/strengths`)

### Page Title
Observed Patterns

### About This Page
The items below are patterns inferred from documented project experiences. Each links to the records from which it was derived.

### Categories
- **Consistent**: Patterns demonstrated repeatedly across multiple projects.
- **Emerging**: Patterns visible in some projects but not yet broadly established.
- **Not yet evidenced**: Patterns not present in the available records.

### Category Labels (used in strength sections)
- Strong
- Developing
- Not my strength yet

### Pattern Items

**Strong:**
- **Judgment under constraints** — Making practical decisions when time, resources, or information are limited.
- **Scope control** — Reducing ambition to match reality rather than over-promising.
- **Learning through iteration** — Improving by shipping small increments and responding to feedback.
- **High execution capacity** — Ability to build and ship functional systems independently.
- **Willingness to adapt process** — Changing how I work when evidence shows current approach is failing.
- **Honest reflection on failure modes** — Identifying and admitting when my approach caused problems.
- **Willingness to abandon work** — Stopping projects based on cost-benefit assessment rather than sunk-cost pressure.

**Developing:**
- **Early architecture clarity** — Defining clear structure upfront before implementation begins.
- **Demand validation** — Checking whether work will be used or valued before building.

**Not my strength yet:**
- **Experience with large-scale systems** — Not evidenced in available records (no high-traffic or distributed systems).
- **Long-term ownership narratives** — Not evidenced in available records (no multi-year system maintenance).

### Navigation
- Fit Evaluation
- Project Experiences
- Back to home

---

## Fit Evaluation Page (`/fit-evaluation`)

### Page Title
Fit Evaluation

### About This Page
This evaluation maps role characteristics against documented patterns, constraints, and experience data. The output is a deterministic classification based on input values.

### Output Labels
- **Not a Fit**: Significant gaps exist relative to the specified role characteristics.
- **Strong Fit**: Role characteristics align well with documented patterns.
- **Partial Fit**: Some alignment exists, with specific gaps or concerns identified.

### Form Labels

**Role Type:**
- Individual Contributor
- Tech Lead
- Manager

**Team Size:**
- Small (2-5 people)
- Medium (6-15 people)
- Large (15+ people)

**Domain Familiarity:**
- Familiar domain
- Adjacent domain
- Completely new domain

**Autonomy Level:**
- High autonomy expected
- Moderate guidance available
- Structured onboarding provided

**Submit button:** Evaluate

### Fit Result Labels
- Strong Fit
- Partial Fit
- Not a Fit

### Result Section Headings
- Alignment Points
- Concerns
- Analysis

### Fit Evaluation Responses

**Strong Fit Summary:**
This role appears to be a good alignment with my current capabilities.

**Strong Fit Recommendation:**
I would be interested in exploring this opportunity further.

**Partial Fit Summary:**
This role has some alignment, but there are areas that may require additional support or time.

**Partial Fit Recommendation:**
If the concerns listed are acceptable trade-offs, a conversation may still be worthwhile.

**Not a Fit Summary:**
This role has significant gaps relative to my current capabilities. Proceeding would likely waste time for both sides.

**Not a Fit Recommendation:**
I recommend not proceeding. This is not a criticism of the role—it is an honest assessment that we would both be better served by other matches.

### Alignment/Concern Statements

**Strengths (alignment points):**
- Individual contributor roles align with my current experience level
- Small teams match my experience with close collaboration
- Medium teams are workable with clear communication structures
- Familiar domains reduce ramp-up time
- Adjacent domains are learnable with demonstrated learning velocity
- Structured onboarding supports successful integration
- Moderate guidance matches my iterative working style

**Concerns:**
- Limited experience leading technical direction for a team
- No management experience - this is explicitly not my strength yet
- No experience with large-scale team coordination
- Completely new domains require more onboarding investment
- High autonomy from day one may be challenging without domain context

### Partial Fit Note
This result indicates partial alignment. Specific concerns are listed above.

### Buttons
- Evaluate
- New Evaluation

### Navigation
- Observed Patterns
- Query Interface
- Back to home

---

## Ask Page (`/ask`)

### Page Title
Query Interface

### About This Page
This interface retrieves information from documented project experiences, observed patterns, and fit evaluation logic. Responses are grounded in available records only.

### Query Scope

**Within scope:**
- Documented project experiences and their details
- Decisions and tradeoffs recorded in experiences
- Observed patterns and their evidence
- Fit evaluation inputs and outputs

**Outside scope:**
- Topics not covered by documented records
- Speculative or hypothetical scenarios
- Information not present in the source material

### Form Elements
- Placeholder: Enter query...
- Aria label: Query input
- Submit button: Submit
- Clear button: Clear

### Query Display
- Query: [input]
- Sources: [list]
- Related: [follow-up]

### Navigation
- Project Experiences
- Observed Patterns
- Back to home

---

## Browser Title
Project Record

---

## Common Navigation Patterns

**Separator:** |

**Back links:**
- Back to home
- Back to experiences

---

## Global Footer

**Visible on all pages**

Contact metadata (static, non-interactive):
- Name: Touko Hänninen
- Email: touko.hanninen@gmail.com
- GitHub: toukohan

Separator between items: ·
