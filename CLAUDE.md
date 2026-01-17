# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> ⚠️ Authority Note:
> This file provides contextual guidance only.
> All executable work MUST be driven exclusively by prd.json.
> If there is any conflict, prd.json takes precedence.

## Project Overview

This is a **Capability Discovery Interface** - a candidate-controlled landing page that enables employers to evaluate reasoning, learning, and fit through investigation rather than filtering. It is not a resume; it is a conversion surface for after attention is earned.

## Current State

The project is in the planning phase. No code exists yet. The following documents define the project:

- **prd.json** - Product requirements with acceptance criteria
- **workplan.md** - Implementation strategy and design principles
- **experience_reference.md** - Canonical source for AI grounding context

## Guiding Principles

From prd.json:
1. Foundations before features
2. Verification is a product requirement
3. Static-first, extend later
4. Small tasks, provable completion
5. CI must stay green

## Implementation Requirements (Phase 1)

The PRD defines four requirements that must pass before the MVP is complete:

1. **ENV-001**: Reproducible development environment (install, dev server, build, documented in README)
2. **TEST-001**: Test harness configured and running in CI
3. **UI-001**: Landing page with evaluation-focused framing (not resume-style claims)
4. **UI-002**: Exploration paths visible on landing page (at least two CTAs)

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
