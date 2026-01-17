# Workplan: Reverse Hiring Interface (Candidate-Controlled Evaluation Surface)

## Purpose
Replace participation in broken ATS/LinkedIn hiring funnels with a candidate-controlled interface that:
- Captures **human attention**
- Enables **interactive evaluation**
- Demonstrates **real capability through use**
- Inverts the supplicant power dynamic
- Helps both sides assess **fit early and honestly**

Success is defined as:
> Gaining minutes of genuine employer engagement instead of seconds of resume scanning.

---

## Core Thesis
The hiring arms race (AI resumes vs AI filters) has collapsed signal value.
The scarce resource is **human attention**, not talent.

Instead of optimizing for filters:
- Create a new interaction surface
- Shift evaluators from *filtering mode* → *investigation mode*
- Replace claims with **demonstrated depth**

---

## Design Principles

1. **Not a resume**
   - Resume = compressed claims
   - Interface = explorable capability

2. **Show, don’t assert**
   - Evidence over bullets
   - Multi-turn interaction over static text

3. **Bidirectional evaluation**
   - Employer evaluates candidate
   - Candidate evaluates fit and says “no” when appropriate

4. **Honest gaps increase trust**
   - Publish strengths *and* weaknesses
   - Confidence > overfitting

5. **AI as amplifier, not disguise**
   - Depth must already exist
   - Interface surfaces reality, cannot fake it at scale

---

## MVP Scope (Phase 1: Manual but Real)

### Deliverable
A public personal site that functions as a **reverse hiring interface**, not a portfolio.

---

## Site Structure

### 1. Landing
- Minimal identity (name, role framing)
- Framing statement:
  > “This site helps you evaluate whether I’m a good fit for your role in minutes.”

Primary CTA:
- “Ask AI about me”
- “Evaluate fit for your role”

---

### 2. AI Query Interface
Purpose:
- Replace passive reading with active inquiry

Capabilities:
- Answer questions about:
  - Past work
  - Decision-making
  - Tradeoffs
  - Leadership style
  - Technical depth
- Admit uncertainty or gaps explicitly

Requirement:
- AI context grounded in **real work artifacts**, not generic summaries

---

### 3. Experience Section (Unflattened)
Each role/project includes:
- Standard summary (brief)
- “View AI Context” expansion:
  - Situation
  - Constraints
  - Decisions made
  - Tradeoffs
  - Outcomes
  - Lessons learned

Goal:
- Make depth discoverable on demand

---

### 4. Skills Matrix
Three explicit columns:
- Strong
- Moderate
- Gaps / Not my strength

Why:
- Signals self-awareness
- Saves evaluator time
- Increases credibility

---

### 5. Fit Assessment Tool (Key Differentiator)

Input:
- Employer pastes job description

Output:
- Honest fit analysis:
  - Strong matches (with evidence)
  - Partial matches
  - Non-matches
- Recommendation:
  - “Good fit → let’s talk”
  - “Not a fit → don’t waste time”

Principle:
> The tool evaluates *you* as much as *they* do.

---

### 6. Evidence Layer
Linked from AI answers and fit analysis:
- Repos
- Design docs
- Architecture diagrams
- Postmortems
- Writeups

No polishing required—clarity over aesthetics.

---

### 7. Clear Next Actions
Low-friction options:
- Schedule conversation
- Request deeper walkthrough
- Download short summary

No funnel tricks. No desperation language.

---

## Implementation Notes

- Can be built with:
  - No/low-code tools (e.g. Lovable)
  - Simple static site + hosted LLM API
- Cost at margin ≈ zero
- Time to first version: hours–days, not weeks

---

## What This Is NOT

- Not a traffic-generation strategy
- Not a resume replacement (still needed for pipes)
- Not effective for early-career candidates with little substance
- Not a gimmick if depth exists

This optimizes **conversion**, not discovery.

---

## Success Metrics

Qualitative:
- Employers spend minutes, not seconds
- Deeper interview questions earlier
- Fewer mismatched calls

Quantitative:
- Higher response quality per contact
- Fewer applications needed per conversation

---

## Risks & Constraints

- Requires real, interrogable expertise
- Audience-dependent (best for tech roles)
- Does not bypass need for distribution entirely

Mitigation:
- Use site as destination link everywhere else

---

## Strategic Outcome

You are no longer:
- One resume in a pile
- Optimizing for filters

You become:
- A discoverable system
- A tool for evaluation
- A candidate who controls the encounter

---

## Guiding Question Going Forward
> “What should an employer be able to *discover* about me that a resume cannot show?”

Build everything around that.
