import { Link, useParams } from 'react-router-dom'
import { experiences, getExperienceById } from '../data/experiences'

function ExperienceList() {
  return (
    <main>
      <h1>Experience Explorer</h1>

      <section>
        <h2>What This Tells You</h2>
        <p>
          Each experience documents real context, constraints, decisions, and lessons learned.
          This shows how I work under pressure, what I prioritize, and how I reflect on outcomes.
        </p>
      </section>

      <section>
        <h2>How to Choose</h2>
        <p>
          You do not need to read all experiences. Pick 1–2 that are relevant to your context:
        </p>
        <ul>
          <li>For <strong>team collaboration</strong>: University Software Engineering Group Project</li>
          <li>For <strong>professional work</strong>: First Professional Web Development Role</li>
          <li>For <strong>scope control</strong>: PoEBoss Companion App or Academic Prioritization</li>
          <li>For <strong>early execution patterns</strong>: Bug Tracker or Mutudu Todo App</li>
        </ul>
        <p>
          If the fit evaluation already gave you a clear answer, reading experiences may not be necessary.
        </p>
      </section>

      <section>
        <h2>All Experiences</h2>
        <ul>
          {experiences.map((exp) => (
            <li key={exp.id}>
              <Link to={`/experiences/${exp.id}`}>{exp.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <nav>
        <Link to="/strengths">If something concerns you, check Strengths and Gaps</Link>
        <span> | </span>
        <Link to="/">Back to home</Link>
      </nav>
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
        <span> | </span>
        <Link to="/strengths">View related strengths and gaps</Link>
        <span> | </span>
        <Link to="/ask">Ask follow-up questions about this experience</Link>
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
