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

      <section>
        <h2>What This Tells You</h2>
        <p>
          This is an honest assessment of where I can contribute and where I cannot.
          Each strength links to experiences that demonstrate it.
          Gaps are stated plainly without hedging.
        </p>
      </section>

      <section>
        <h2>How to Use This</h2>
        <p>
          Compare these against your role requirements:
        </p>
        <ul>
          <li><strong>Strong</strong> items indicate reliable contribution areas</li>
          <li><strong>Developing</strong> items show growth potential with guidance</li>
          <li><strong>Not my strength yet</strong> items are gaps that may disqualify the fit</li>
        </ul>
        <p>
          If a gap matches a critical requirement for your role, this is likely not a fit.
          If strengths align with your needs and gaps are acceptable, proceed to the fit evaluation.
        </p>
      </section>

      <StrengthSection category="strong" />
      <StrengthSection category="developing" />
      <StrengthSection category="notMyStrength" />

      <nav>
        <Link to="/fit-evaluation">Check fit for your specific role</Link>
        <span> | </span>
        <Link to="/experiences">See experiences that demonstrate these patterns</Link>
        <span> | </span>
        <Link to="/">Back to home</Link>
      </nav>
    </main>
  )
}
