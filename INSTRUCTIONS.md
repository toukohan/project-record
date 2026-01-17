# Instructions for Claude Code

This file contains supplementary context for Claude Code sessions. It is referenced by CLAUDE.md but is not authoritative for requirements—prd.json is the single source of truth.

## Project Context

This is a **Capability Discovery Interface** - a candidate-controlled landing page that enables employers to evaluate reasoning, learning, and fit through investigation rather than filtering. It is not a resume; it is a conversion surface for after attention is earned.

## Key Documents

- **prd.json** - Authoritative source for all requirements and acceptance criteria
- **workplan.md** - Implementation strategy and design principles
- **experience_reference.md** - Canonical source for AI grounding context

## AI Grounding

When implementing the AI query interface, use `experience_reference.md` as the grounding context. The AI should:
- Be honest about gaps
- Prefer explanation over assertion
- Surface reasoning, tradeoffs, and reflection

## Design Constraints

- No marketing language; clarity over polish
- No seniority flex or keyword optimization
- Demonstrate learning, not perfection
- Publish constraints and gaps explicitly
