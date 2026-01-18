import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  evaluateFit,
  roleTypeLabels,
  teamSizeLabels,
  domainLabels,
  autonomyLabels,
  fitLevelLabels,
  type RoleInputs,
  type RoleType,
  type TeamSize,
  type DomainFamiliarity,
  type AutonomyLevel,
  type FitResult,
} from '../data/fitEvaluation'
import { fitEvaluation as copy } from '../copy/fitEvaluation'

function FitForm({ onSubmit }: { onSubmit: (inputs: RoleInputs) => void }) {
  const [roleType, setRoleType] = useState<RoleType>('individual-contributor')
  const [teamSize, setTeamSize] = useState<TeamSize>('small')
  const [domainFamiliarity, setDomainFamiliarity] = useState<DomainFamiliarity>('familiar')
  const [autonomyLevel, setAutonomyLevel] = useState<AutonomyLevel>('moderate')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ roleType, teamSize, domainFamiliarity, autonomyLevel })
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{copy.form.roleType}</legend>
        {(Object.keys(roleTypeLabels) as RoleType[]).map((key) => (
          <label key={key}>
            <input
              type="radio"
              name="roleType"
              value={key}
              checked={roleType === key}
              onChange={() => setRoleType(key)}
            />
            {roleTypeLabels[key]}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>{copy.form.teamSize}</legend>
        {(Object.keys(teamSizeLabels) as TeamSize[]).map((key) => (
          <label key={key}>
            <input
              type="radio"
              name="teamSize"
              value={key}
              checked={teamSize === key}
              onChange={() => setTeamSize(key)}
            />
            {teamSizeLabels[key]}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>{copy.form.domainFamiliarity}</legend>
        {(Object.keys(domainLabels) as DomainFamiliarity[]).map((key) => (
          <label key={key}>
            <input
              type="radio"
              name="domainFamiliarity"
              value={key}
              checked={domainFamiliarity === key}
              onChange={() => setDomainFamiliarity(key)}
            />
            {domainLabels[key]}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>{copy.form.autonomyLevel}</legend>
        {(Object.keys(autonomyLabels) as AutonomyLevel[]).map((key) => (
          <label key={key}>
            <input
              type="radio"
              name="autonomyLevel"
              value={key}
              checked={autonomyLevel === key}
              onChange={() => setAutonomyLevel(key)}
            />
            {autonomyLabels[key]}
          </label>
        ))}
      </fieldset>

      <button type="submit">{copy.form.submitButton}</button>
    </form>
  )
}

function FitResultDisplay({ result }: { result: FitResult }) {
  return (
    <section>
      <h2>{fitLevelLabels[result.level]}</h2>
      <p>{result.summary}</p>

      {result.strengths.length > 0 && (
        <>
          <h3>{copy.result.alignmentHeading}</h3>
          <ul>
            {result.strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      )}

      {result.concerns.length > 0 && (
        <>
          <h3>{copy.result.concernsHeading}</h3>
          <ul>
            {result.concerns.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>
      )}

      <h3>{copy.result.recommendationHeading}</h3>
      <p>{result.recommendation}</p>
    </section>
  )
}

export default function FitEvaluation() {
  const [result, setResult] = useState<FitResult | null>(null)

  const handleSubmit = (inputs: RoleInputs) => {
    setResult(evaluateFit(inputs))
  }

  const handleReset = () => {
    setResult(null)
  }

  return (
    <main>
      <h1>{copy.pageTitle}</h1>

      <section>
        <h2>{copy.whatThisTellsYou.heading}</h2>
        <p>{copy.whatThisTellsYou.content}</p>
      </section>

      <section>
        <h2>{copy.whenToTrust.heading}</h2>
        <ul>
          {copy.whenToTrust.items.map((item, i) => (
            <li key={i}>
              <strong>{item.label}</strong> — {item.description}
            </li>
          ))}
        </ul>
      </section>

      {result ? (
        <>
          <FitResultDisplay result={result} />
          <button onClick={handleReset}>{copy.result.evaluateAnother}</button>
          {result.level === 'partial' && (
            <p>
              <em>
                {copy.result.partialNote.split('Strengths and Gaps')[0]}
                <Link to="/strengths">Strengths and Gaps</Link>
                {copy.result.partialNote.split('Strengths and Gaps')[1].split('specific experiences')[0]}
                <Link to="/experiences">specific experiences</Link>
                {copy.result.partialNote.split('specific experiences')[1]}
              </em>
            </p>
          )}
        </>
      ) : (
        <FitForm onSubmit={handleSubmit} />
      )}

      <nav>
        <Link to="/strengths">{copy.nav.viewStrengths}</Link>
        <span> | </span>
        <Link to="/ask">{copy.nav.askFollowUp}</Link>
        <span> | </span>
        <Link to="/">{copy.nav.backToHome}</Link>
      </nav>
    </main>
  )
}
