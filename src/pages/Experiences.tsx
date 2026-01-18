import { Link, useParams } from 'react-router-dom'
import { experiences as experienceData, getExperienceById } from '../data/experiences'
import { experiences as copy } from '../copy/experiences'

function ExperienceList() {
  return (
    <main>
      <h1>{copy.pageTitle}</h1>

      <section>
        <h2>{copy.about.heading}</h2>
        <p>{copy.about.content}</p>
      </section>

      <section>
        <h2>{copy.byTopic.heading}</h2>
        <p>{copy.byTopic.intro}</p>
        <ul>
          {copy.byTopic.topics.map((item, i) => (
            <li key={i}>
              <strong>{item.topic}</strong>: {item.suggestion}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{copy.allExperiences.heading}</h2>
        <ul>
          {experienceData.map((exp) => (
            <li key={exp.id}>
              <Link to={`/experiences/${exp.id}`}>{exp.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <nav>
        <Link to="/strengths">{copy.nav.strengthsLink}</Link>
        <span> | </span>
        <Link to="/">{copy.nav.backToHome}</Link>
      </nav>
    </main>
  )
}

function ExperienceDetail({ id }: { id: string }) {
  const experience = getExperienceById(id)

  if (!experience) {
    return (
      <main>
        <h1>{copy.notFound.heading}</h1>
        <Link to="/experiences">{copy.notFound.backLink}</Link>
      </main>
    )
  }

  const headings = copy.detail.sectionHeadings

  return (
    <main>
      <h1>{experience.title}</h1>

      <section>
        <h2>{headings.context}</h2>
        <ul>
          {experience.context.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{headings.constraints}</h2>
        <ul>
          {experience.constraints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{headings.decisions}</h2>
        {experience.decisions.map((decision, i) => (
          <div key={i}>
            {decision.tension && <p><strong>{headings.tension}</strong> {decision.tension}</p>}
            <ul>
              {decision.choice.map((choice, j) => (
                <li key={j}>{choice}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>{headings.outcomes}</h2>
        <ul>
          {experience.outcomes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{headings.lessonsLearned}</h2>
        <h3>{headings.whatWorked}</h3>
        <ul>
          {experience.lessonsLearned.whatWorked.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {experience.lessonsLearned.whatDidnt.length > 0 && (
          <>
            <h3>{headings.whatDidnt}</h3>
            <ul>
              {experience.lessonsLearned.whatDidnt.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}
        <h3>{headings.whatIdDoDifferently}</h3>
        <ul>
          {experience.lessonsLearned.whatIdDoDifferently.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{headings.signals}</h2>
        <ul>
          {experience.signals.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <nav>
        <Link to="/experiences">{copy.detail.nav.backToExperiences}</Link>
        <span> | </span>
        <Link to="/strengths">{copy.detail.nav.viewStrengths}</Link>
        <span> | </span>
        <Link to="/ask">{copy.detail.nav.askAbout}</Link>
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
