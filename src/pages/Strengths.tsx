import { Link } from 'react-router-dom'
import {
  strengthItems,
  getStrengthsByCategory,
  getEvidenceForStrength,
  categoryLabels,
  type StrengthCategory,
} from '../data/strengths'

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
                  Evidence:{' '}
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
      <h1>Strengths and Gaps</h1>
      <p>
        An honest assessment of where I can contribute and where I cannot.
        Each strength links to experiences that demonstrate it.
        Gaps are stated plainly.
      </p>

      <StrengthSection category="strong" />
      <StrengthSection category="developing" />
      <StrengthSection category="notMyStrength" />

      <nav>
        <Link to="/">Back to home</Link>
      </nav>
    </main>
  )
}
