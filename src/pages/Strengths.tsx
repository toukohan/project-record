import { Link } from 'react-router-dom'
import {
  getStrengthsByCategory,
  getEvidenceForStrength,
  categoryLabels,
  type StrengthCategory,
} from '../data/strengths'
import { strengths as copy } from '../copy/strengths'

function StrengthSection({ category }: { category: StrengthCategory }) {
  const items = getStrengthsByCategory(category)

  if (items.length === 0) return null

  return (
    <section>
      <h2>{categoryLabels[category]}</h2>
      <ul>
        {items.map((item) => {
          const evidence = getEvidenceForStrength(item)
          return (
            <li key={item.label}>
              <strong>{item.label}</strong>
              <p>{item.description}</p>
              {evidence.length > 0 && (
                <p>
                  {copy.evidenceLabel}{' '}
                  {evidence.map((exp, i) => (
                    <span key={exp.id}>
                      <Link to={`/experiences/${exp.id}`}>{exp.title}</Link>
                      {i < evidence.length - 1 && ', '}
                    </span>
                  ))}
                </p>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default function Strengths() {
  return (
    <main>
      <h1>{copy.pageTitle}</h1>

      <section>
        <h2>{copy.about.heading}</h2>
        <p>{copy.about.content}</p>
      </section>

      <section>
        <h2>{copy.categories.heading}</h2>
        <ul>
          {copy.categories.items.map((item, i) => (
            <li key={i}>
              <strong>{item.label}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </section>

      <StrengthSection category="strong" />
      <StrengthSection category="developing" />
      <StrengthSection category="notMyStrength" />

      <nav>
        <Link to="/fit-evaluation">{copy.nav.fitEvaluation}</Link>
        <span> | </span>
        <Link to="/experiences">{copy.nav.experiences}</Link>
        <span> | </span>
        <Link to="/">{copy.nav.backToHome}</Link>
      </nav>
    </main>
  )
}
