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
        <legend>Role Type</legend>
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
        <legend>Team Size</legend>
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
        <legend>Domain Familiarity</legend>
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
        <legend>Autonomy Level</legend>
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

      <button type="submit">Evaluate Fit</button>
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
          <h3>Alignment Points</h3>
          <ul>
            {result.strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      )}

      {result.concerns.length > 0 && (
        <>
          <h3>Concerns</h3>
          <ul>
            {result.concerns.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>
      )}

      <h3>Recommendation</h3>
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
      <h1>Fit Evaluation</h1>
      <p>
        This tool helps determine whether a role is a good match based on explicit criteria.
        The evaluation is deterministic and grounded in my documented strengths and gaps.
        The goal is to save time for both sides by identifying mismatches early.
      </p>

      {result ? (
        <>
          <FitResultDisplay result={result} />
          <button onClick={handleReset}>Evaluate Another Role</button>
        </>
      ) : (
        <FitForm onSubmit={handleSubmit} />
      )}

      <nav>
        <Link to="/strengths">View Strengths and Gaps</Link>
        <span> | </span>
        <Link to="/">Back to home</Link>
      </nav>
    </main>
  )
}
