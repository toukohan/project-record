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
        <h2>{copy.whatThisTellsYou.heading}</h2>
        <p>{copy.whatThisTellsYou.content}</p>
      </section>

      <section>
        <h2>{copy.whatYouCanAsk.heading}</h2>
        <ul>
          {copy.whatYouCanAsk.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{copy.whatItCannotAnswer.heading}</h2>
        <ul>
          {copy.whatItCannotAnswer.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>
          {copy.whatItCannotAnswer.note.split('Fit Evaluation')[0]}
          <Link to="/fit-evaluation">Fit Evaluation</Link>
          {copy.whatItCannotAnswer.note.split('Fit Evaluation')[1].split('Experiences')[0]}
          <Link to="/experiences">Experiences</Link>
          {copy.whatItCannotAnswer.note.split('Experiences')[1]}
        </p>
      </section>

      {conversation.length > 0 && (
        <section>
          {conversation.map((turn, i) => (
            <div key={i}>
              <p><strong>{copy.conversation.youLabel}</strong> {turn.question}</p>
              <div>
                <p style={{ whiteSpace: 'pre-wrap' }}>{turn.response.answer}</p>
                {turn.response.sources.length > 0 && (
                  <p><em>{copy.conversation.sourcesLabel} {turn.response.sources.join(', ')}</em></p>
                )}
                {turn.response.followUp && (
                  <p><em>{copy.conversation.suggestionLabel} {turn.response.followUp}</em></p>
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
        <Link to="/experiences">{copy.nav.browseExperiences}</Link>
        <span> | </span>
        <Link to="/strengths">{copy.nav.viewStrengths}</Link>
        <span> | </span>
        <Link to="/">{copy.nav.backToHome}</Link>
      </nav>
    </main>
  )
}
