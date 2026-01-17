import { Link, useParams } from 'react-router-dom'
import { experiences, getExperienceById } from '../data/experiences'

function ExperienceList() {
  return (
    <main>
      <h1>Experience Explorer</h1>
      <p>Select an experience to explore context, constraints, decisions, and lessons learned.</p>
      <ul>
        {experiences.map((exp) => (
          <li key={exp.id}>
            <Link to={`/experiences/${exp.id}`}>{exp.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to home</Link>
    </main>
  )
}

function ExperienceDetail({ id }: { id: string }) {
  const experience = getExperienceById(id)

  if (!experience) {
    return (
      <main>
        <h1>Experience Not Found</h1>
        <Link to="/experiences">Back to experiences</Link>
      </main>
    )
  }

  return (
    <main>
      <h1>{experience.title}</h1>

      <section>
        <h2>Context</h2>
        <ul>
          {experience.context.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Constraints</h2>
        <ul>
          {experience.constraints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Decisions</h2>
        {experience.decisions.map((decision, i) => (
          <div key={i}>
            {decision.tension && <p><strong>Tension:</strong> {decision.tension}</p>}
            <ul>
              {decision.choice.map((choice, j) => (
                <li key={j}>{choice}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Outcomes</h2>
        <ul>
          {experience.outcomes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Lessons Learned</h2>
        <h3>What Worked</h3>
        <ul>
          {experience.lessonsLearned.whatWorked.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {experience.lessonsLearned.whatDidnt.length > 0 && (
          <>
            <h3>What Didn't Work</h3>
            <ul>
              {experience.lessonsLearned.whatDidnt.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}
        <h3>What I'd Do Differently</h3>
        <ul>
          {experience.lessonsLearned.whatIdDoDifferently.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Signals Demonstrated</h2>
        <ul>
          {experience.signals.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <nav>
        <Link to="/experiences">Back to experiences</Link>
      </nav>
    </main>
  )
}

export default function Experiences() {
  const { id } = useParams<{ id: string }>()

  if (id) {
    return <ExperienceDetail id={id} />
  }

  return <ExperienceList />
}
