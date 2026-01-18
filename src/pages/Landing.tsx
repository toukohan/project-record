import { Link } from 'react-router-dom'
import { landing } from '../copy/landing'

export default function Landing() {
  return (
    <main>
      <h1>{landing.pageTitle}</h1>

      <p>{landing.intro.paragraph1}</p>

      <p>{landing.intro.paragraph2}</p>

      <section>
        <h2>{landing.evaluationPath.heading}</h2>
        <p>{landing.evaluationPath.leadIn}</p>

        <ol className="evaluation-steps">
          <li>
            <Link to="/fit-evaluation"><strong>{landing.evaluationPath.steps[0].linkText}</strong></Link>
            <br />
            <span>{landing.evaluationPath.steps[0].description}</span>
          </li>
          <li>
            <Link to="/strengths"><strong>{landing.evaluationPath.steps[1].linkText}</strong></Link>
            <br />
            <span>{landing.evaluationPath.steps[1].description}</span>
          </li>
          <li>
            <Link to="/experiences"><strong>{landing.evaluationPath.steps[2].linkText}</strong></Link>
            <br />
            <span>{landing.evaluationPath.steps[2].description}</span>
          </li>
          <li>
            <Link to="/ask"><strong>{landing.evaluationPath.steps[3].linkText}</strong></Link>
            <br />
            <span>{landing.evaluationPath.steps[3].description}</span>
          </li>
        </ol>
      </section>

      <section>
        <h2>{landing.whenToStop.heading}</h2>
        <ul>
          {landing.whenToStop.items.map((item, i) => (
            <li key={i}>
              <strong>{item.label}</strong> — {item.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
