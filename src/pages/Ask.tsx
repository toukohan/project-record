import { useState } from 'react'
import { Link } from 'react-router-dom'
import { processQuery, type ConversationTurn } from '../data/queryEngine'
import { ask as copy } from '../copy/ask'

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
      <h1>{copy.pageTitle}</h1>

      <section>
        <h2>{copy.about.heading}</h2>
        <p>{copy.about.content}</p>
      </section>

      <section>
        <h2>{copy.scope.heading}</h2>
        <p><strong>{copy.scope.included.label}</strong></p>
        <ul>
          {copy.scope.included.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p><strong>{copy.scope.excluded.label}</strong></p>
        <ul>
          {copy.scope.excluded.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {conversation.length > 0 && (
        <section>
          {conversation.map((turn, i) => (
            <div key={i}>
              <p><strong>{copy.conversation.queryLabel}</strong> {turn.question}</p>
              <div>
                <p style={{ whiteSpace: 'pre-wrap' }}>{turn.response.answer}</p>
                {turn.response.sources.length > 0 && (
                  <p><em>{copy.conversation.sourcesLabel} {turn.response.sources.join(', ')}</em></p>
                )}
                {turn.response.followUp && (
                  <p><em>{copy.conversation.relatedLabel} {turn.response.followUp}</em></p>
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
          placeholder={copy.form.placeholder}
          aria-label={copy.form.ariaLabel}
        />
        <button type="submit">{copy.form.submitButton}</button>
        {conversation.length > 0 && (
          <button type="button" onClick={handleClear}>
            {copy.form.clearButton}
          </button>
        )}
      </form>

      <nav>
        <Link to="/experiences">{copy.nav.experiences}</Link>
        <span> | </span>
        <Link to="/strengths">{copy.nav.patterns}</Link>
        <span> | </span>
        <Link to="/">{copy.nav.backToHome}</Link>
      </nav>
    </main>
  )
}
