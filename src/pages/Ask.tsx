import { useState } from 'react'
import { Link } from 'react-router-dom'
import { processQuery, type ConversationTurn } from '../data/queryEngine'

export default function Ask() {
  const [question, setQuestion] = useState('')
  const [conversation, setConversation] = useState<ConversationTurn[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    const response = processQuery(question, conversation)
    const newTurn: ConversationTurn = { question, response }

    setConversation((prev) => [...prev, newTurn])
    setQuestion('')
  }

  const handleClear = () => {
    setConversation([])
  }

  return (
    <main>
      <h1>Ask About How I Work</h1>

      <section>
        <h2>What This Tells You</h2>
        <p>
          This interface answers questions about my experiences, decisions, strengths, and gaps.
          All responses are grounded in documented data—no generated claims, no speculation.
        </p>
      </section>

      <section>
        <h2>What You Can Ask</h2>
        <ul>
          <li>Questions about specific experiences (e.g., "Tell me about the university project")</li>
          <li>Questions about decisions and tradeoffs (e.g., "Why did you scope down?")</li>
          <li>Questions about strengths and gaps (e.g., "What are your weaknesses?")</li>
          <li>Questions about fit for a role type (e.g., "Would you fit a management role?")</li>
        </ul>
      </section>

      <section>
        <h2>What It Cannot Answer</h2>
        <ul>
          <li>Questions outside documented experiences</li>
          <li>Speculative or hypothetical scenarios</li>
          <li>Topics unrelated to professional capability</li>
        </ul>
        <p>
          If you get an "out of scope" response, try the <Link to="/fit-evaluation">Fit Evaluation</Link>{' '}
          or browse <Link to="/experiences">Experiences</Link> directly.
        </p>
      </section>

      {conversation.length > 0 && (
        <section>
          {conversation.map((turn, i) => (
            <div key={i}>
              <p><strong>You:</strong> {turn.question}</p>
              <div>
                <p style={{ whiteSpace: 'pre-wrap' }}>{turn.response.answer}</p>
                {turn.response.sources.length > 0 && (
                  <p><em>Sources: {turn.response.sources.join(', ')}</em></p>
                )}
                {turn.response.followUp && (
                  <p><em>Suggestion: {turn.response.followUp}</em></p>
                )}
              </div>
              <hr />
            </div>
          ))}
        </section>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          aria-label="Your question"
        />
        <button type="submit">Ask</button>
        {conversation.length > 0 && (
          <button type="button" onClick={handleClear}>
            Clear Conversation
          </button>
        )}
      </form>

      <nav>
        <Link to="/experiences">Browse Experiences</Link>
        <span> | </span>
        <Link to="/strengths">View Strengths & Gaps</Link>
        <span> | </span>
        <Link to="/">Back to home</Link>
      </nav>
    </main>
  )
}
