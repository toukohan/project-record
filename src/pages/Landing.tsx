import { Link } from 'react-router-dom'
import { landing } from '../copy/landing'

export default function Landing() {
  return (
    <main>
      <h1>{landing.pageTitle}</h1>

      <p>{landing.intro.paragraph1}</p>

      <p>{landing.intro.paragraph2}</p>

      <section>
        <h2>{landing.sections.heading}</h2>

        <ul>
          {landing.sections.items.map((item, i) => (
            <li key={i}>
              <Link to={item.path}><strong>{item.linkText}</strong></Link>
              <br />
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{landing.fitOutcomes.heading}</h2>
        <ul>
          {landing.fitOutcomes.items.map((item, i) => (
            <li key={i}>
              <strong>{item.label}</strong> — {item.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
