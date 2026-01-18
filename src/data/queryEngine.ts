/**
 * Query Engine - Deterministic Rule-Based Interface
 *
 * This module provides a rule-based query interface that mimics AI interrogation
 * using canonical experience data, strengths/gaps, and fit logic.
 *
 * No external AI providers, no backend, no secrets.
 * All responses are deterministic and grounded in canonical data.
 */

import { experiences, type Experience } from './experiences'
import { strengthItems, categoryLabels } from './strengths'

export interface QueryResponse {
  answer: string
  sources: string[]
  followUp?: string
}

export interface ConversationTurn {
  question: string
  response: QueryResponse
}

type QueryIntent =
  | 'experience'
  | 'strength'
  | 'gap'
  | 'fit'
  | 'decision'
  | 'lesson'
  | 'context'
  | 'greeting'
  | 'out-of-scope'

/**
 * Process a user query and return a grounded response.
 * This is pure, deterministic logic with no randomness.
 */
export function processQuery(
  question: string,
  _conversationHistory: ConversationTurn[] = []
): QueryResponse {
  const normalizedQuestion = question.toLowerCase().trim()

  // Detect intent
  const intent = detectIntent(normalizedQuestion)

  switch (intent) {
    case 'greeting':
      return handleGreeting()
    case 'experience':
      return handleExperienceQuery(normalizedQuestion)
    case 'strength':
      return handleStrengthQuery()
    case 'gap':
      return handleGapQuery()
    case 'decision':
      return handleDecisionQuery(normalizedQuestion)
    case 'lesson':
      return handleLessonQuery(normalizedQuestion)
    case 'context':
      return handleContextQuery(normalizedQuestion)
    case 'fit':
      return handleFitQuery()
    case 'out-of-scope':
    default:
      return handleOutOfScope()
  }
}

function detectIntent(question: string): QueryIntent {
  // Greetings - check first
  if (/^(hi|hello|hey|greetings)/.test(question)) {
    return 'greeting'
  }

  // Specific intents should be checked before experience keywords
  // because questions like "What decisions did you make in the university project?"
  // should be handled by the decision handler, not experience handler

  // Decision-related - check before experience
  if (/decision|decide|chose|choice|why did you|trade-?off/.test(question)) {
    return 'decision'
  }

  // Lesson-related - check before experience
  if (/learn|lesson|differently|mistake|improve|reflection/.test(question)) {
    return 'lesson'
  }

  // Fit-related - use word boundaries to avoid matching "management" in experience titles
  if (/\bfit\b|suitable|right for|match|align|\bmanagement position|\bmanager\b/.test(question)) {
    return 'fit'
  }

  // Gap-related
  if (/gap|weakness|not good|struggle|lack|missing|don't have|cannot/.test(question)) {
    return 'gap'
  }

  // Strength-related
  if (/strength|strong|good at|capable|skill/.test(question)) {
    return 'strength'
  }

  // Context-related
  if (/context|constraint|situation|challenge|problem/.test(question)) {
    return 'context'
  }

  // Experience-related - check for specific experience keywords
  // These are more specific than general intent patterns
  const experienceKeywords = /bug.?track|workforce|työvoimakoulutus|mutudu|todo app|grocery|shared list|javafx|time management|programming ii|desktop app|poe|path of exile|poeboss|companion|university|group project|team project|software engineering course|professional|first job|web dev|wordpress|e-?commerce|academic|workload|priorit|experience|project|work|job|role/
  if (experienceKeywords.test(question)) {
    return 'experience'
  }

  // Out of scope - anything not matching above patterns
  return 'out-of-scope'
}

function handleGreeting(): QueryResponse {
  return {
    answer:
      'Hello. I can answer questions about my experiences, decisions, strengths, gaps, and what I learned. What would you like to know?',
    sources: [],
    followUp: 'You might ask about a specific experience or what my strengths are.',
  }
}

function handleExperienceQuery(question: string): QueryResponse {
  // Try to match specific experience
  let matchedExperience: Experience | undefined

  if (/bug.?track|workforce|työvoimakoulutus/.test(question)) {
    matchedExperience = experiences.find((e) => e.id === 'bug-tracker-workforce-training')
  } else if (/mutudu|todo app|grocery|shared list/.test(question)) {
    matchedExperience = experiences.find((e) => e.id === 'mutudu-todo-app')
  } else if (/javafx|time management|programming ii|desktop app/.test(question)) {
    matchedExperience = experiences.find((e) => e.id === 'javafx-time-management')
  } else if (/poe|path of exile|poeboss|companion app|game/.test(question)) {
    matchedExperience = experiences.find((e) => e.id === 'poeboss-companion-app')
  } else if (/university|group|team project|software engineering course/.test(question)) {
    matchedExperience = experiences.find((e) => e.id === 'university-group-project')
  } else if (/professional|first job|web dev|wordpress|e-?commerce/.test(question)) {
    matchedExperience = experiences.find((e) => e.id === 'first-professional-role')
  } else if (/academic|workload|priorit|course|schedule/.test(question)) {
    matchedExperience = experiences.find((e) => e.id === 'academic-prioritization')
  }

  if (matchedExperience) {
    return {
      answer: formatExperienceResponse(matchedExperience),
      sources: [matchedExperience.title],
      followUp: 'Would you like to know about the decisions made or lessons learned?',
    }
  }

  // General experience overview
  return {
    answer: `I have documented ${experiences.length} experiences:\n\n${experiences
      .map((e) => `• ${e.title}`)
      .join('\n')}\n\nEach includes context, constraints, decisions, outcomes, and lessons learned.`,
    sources: experiences.map((e) => e.title),
    followUp: 'Which experience would you like to explore in detail?',
  }
}

function formatExperienceResponse(exp: Experience): string {
  return `**${exp.title}**

Context: ${exp.context.join(' ')}

Constraints faced:
${exp.constraints.map((c) => `• ${c}`).join('\n')}

Key outcomes:
${exp.outcomes.map((o) => `• ${o}`).join('\n')}`
}

function handleStrengthQuery(): QueryResponse {
  const strong = strengthItems.filter((s) => s.category === 'strong')

  return {
    answer: `My documented strengths (${categoryLabels.strong}):\n\n${strong
      .map((s) => `• **${s.label}**: ${s.description}`)
      .join('\n\n')}`,
    sources: strong.map((s) => s.label),
    followUp: 'Would you like to know about areas I am developing or gaps I have?',
  }
}

function handleGapQuery(): QueryResponse {
  const gaps = strengthItems.filter((s) => s.category === 'notMyStrength')
  const developing = strengthItems.filter((s) => s.category === 'developing')

  return {
    answer: `I am explicit about my gaps:\n\n**${categoryLabels.notMyStrength}:**\n${gaps
      .map((g) => `• **${g.label}**: ${g.description}`)
      .join('\n')}\n\n**${categoryLabels.developing}:**\n${developing
      .map((d) => `• **${d.label}**: ${d.description}`)
      .join('\n')}`,
    sources: [...gaps, ...developing].map((s) => s.label),
    followUp: 'This honesty helps avoid mismatched roles. Would you like to evaluate fit for a specific role type?',
  }
}

function handleDecisionQuery(question: string): QueryResponse {
  // Find experience with matching decision
  const matchPatterns: Array<{ pattern: RegExp; id: string }> = [
    { pattern: /bug.?track|workforce|työvoimakoulutus/, id: 'bug-tracker-workforce-training' },
    { pattern: /mutudu|todo app|grocery/, id: 'mutudu-todo-app' },
    { pattern: /javafx|time management|programming ii/, id: 'javafx-time-management' },
    { pattern: /poe|path of exile|poeboss|companion/, id: 'poeboss-companion-app' },
    { pattern: /university|group|team/, id: 'university-group-project' },
    { pattern: /professional|first job|work/, id: 'first-professional-role' },
    { pattern: /academic|workload|priorit/, id: 'academic-prioritization' },
  ]

  for (const { pattern, id } of matchPatterns) {
    if (pattern.test(question)) {
      const exp = experiences.find((e) => e.id === id)
      if (exp) {
        const decision = exp.decisions[0]
        const tensionPart = decision.tension
          ? `**Tension:** ${decision.tension}\n\n`
          : ''
        return {
          answer: `In the ${exp.title}:\n\n${tensionPart}**Decision made:**\n${decision.choice.map((c) => `• ${c}`).join('\n')}`,
          sources: [exp.title],
          followUp: 'Would you like to know the outcome of this decision?',
        }
      }
    }
  }

  // General decision overview
  return {
    answer: `Each documented experience includes key decisions and tradeoffs. The decisions I made were shaped by constraints, not ideology.\n\nExamples:\n${experiences
      .map((e) => `• ${e.title}: ${e.decisions[0]?.choice[0] || 'See details'}`)
      .join('\n')}`,
    sources: experiences.map((e) => e.title),
    followUp: 'Which decision would you like to explore further?',
  }
}

function handleLessonQuery(_question: string): QueryResponse {
  // Aggregate lessons from all experiences
  const allLessons = experiences.flatMap((exp) => ({
    experience: exp.title,
    whatWorked: exp.lessonsLearned.whatWorked,
    whatDidnt: exp.lessonsLearned.whatDidnt,
    whatIdDoDifferently: exp.lessonsLearned.whatIdDoDifferently,
  }))

  return {
    answer: `Key lessons across experiences:\n\n${allLessons
      .map(
        (l) =>
          `**${l.experience}:**\n• What worked: ${l.whatWorked.slice(0, 2).join(', ')}\n• What I'd do differently: ${l.whatIdDoDifferently.slice(0, 2).join(', ')}`
      )
      .join('\n\n')}`,
    sources: experiences.map((e) => e.title),
    followUp: 'Would you like more detail on any specific lesson?',
  }
}

function handleContextQuery(question: string): QueryResponse {
  // Find matching experience context
  const matchPatterns: Array<{ pattern: RegExp; id: string }> = [
    { pattern: /bug.?track|workforce|työvoimakoulutus/, id: 'bug-tracker-workforce-training' },
    { pattern: /mutudu|todo app|grocery/, id: 'mutudu-todo-app' },
    { pattern: /javafx|time management|programming ii/, id: 'javafx-time-management' },
    { pattern: /poe|path of exile|poeboss|companion/, id: 'poeboss-companion-app' },
    { pattern: /university|group|team/, id: 'university-group-project' },
    { pattern: /professional|first job|work/, id: 'first-professional-role' },
    { pattern: /academic|workload|priorit/, id: 'academic-prioritization' },
  ]

  for (const { pattern, id } of matchPatterns) {
    if (pattern.test(question)) {
      const exp = experiences.find((e) => e.id === id)
      if (exp) {
        return {
          answer: `**Context for ${exp.title}:**\n\n${exp.context.join('\n')}\n\n**Constraints:**\n${exp.constraints.map((c) => `• ${c}`).join('\n')}`,
          sources: [exp.title],
        }
      }
    }
  }

  return {
    answer: `Each experience is documented with its context and constraints. This grounds all claims in specific situations rather than abstract assertions.`,
    sources: experiences.map((e) => e.title),
    followUp: 'Which experience context would you like to explore?',
  }
}

function handleFitQuery(): QueryResponse {
  return {
    answer: `Fit depends on specific role characteristics. Based on my documented strengths and gaps:\n\n**Good fit indicators:**\n• Individual contributor roles\n• Small to medium teams\n• Environments with feedback loops\n• Roles that value learning over existing expertise\n\n**Poor fit indicators:**\n• Management positions (no experience)\n• Large-scale distributed systems (no experience)\n• Roles requiring day-one autonomy in unfamiliar domains\n\nFor a detailed assessment, use the fit evaluation tool at /fit-evaluation.`,
    sources: ['Strengths Matrix', 'Fit Evaluation Logic'],
    followUp: 'Would you like to use the structured fit evaluation tool?',
  }
}

function handleOutOfScope(): QueryResponse {
  return {
    answer: `I can only answer questions grounded in my documented experiences, strengths, gaps, and fit logic. I cannot:\n\n• Make claims not supported by canonical data\n• Speculate about hypothetical scenarios\n• Provide opinions on topics outside my experience\n• Generate new achievements or metrics\n\nWhat I can discuss: my ${experiences.length} documented experiences, the decisions and tradeoffs I made, my explicit strengths and gaps, and role fit based on that data.`,
    sources: [],
    followUp: 'Try asking about a specific experience, my strengths, or my gaps.',
  }
}

/**
 * Check if a question is within scope.
 * Used for testing.
 */
export function isInScope(question: string): boolean {
  const intent = detectIntent(question.toLowerCase().trim())
  return intent !== 'out-of-scope'
}
