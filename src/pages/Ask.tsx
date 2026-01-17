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
      <p>
        Ask questions about my experiences, decisions, strengths, or gaps.
        All answers are grounded in documented data—no generated claims.
      </p>

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
