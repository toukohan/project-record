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

      <section>
        <h2>What This Tells You</h2>
        <p>
          This tool provides a deterministic fit assessment based on role characteristics.
          It is grounded in my documented strengths and gaps. The goal is to save time
          for both sides by identifying mismatches early.
        </p>
      </section>

      <section>
        <h2>When to Trust the Result</h2>
        <ul>
          <li><strong>"Not a Fit"</strong> — Stop here. Further exploration is unlikely to change this.</li>
          <li><strong>"Strong Fit"</strong> — Proceed with confidence. Explore further only if you have specific concerns.</li>
          <li><strong>"Partial Fit"</strong> — Review the concerns listed. Check strengths/gaps or specific experiences if concerns are critical to your decision.</li>
        </ul>
      </section>

      {result ? (
        <>
          <FitResultDisplay result={result} />
          <button onClick={handleReset}>Evaluate Another Role</button>
          {result.level === 'partial' && (
            <p>
              <em>
                This result is partial. If concerns are critical, check{' '}
                <Link to="/strengths">Strengths and Gaps</Link> or{' '}
                <Link to="/experiences">specific experiences</Link> for more context.
              </em>
            </p>
          )}
        </>
      ) : (
        <FitForm onSubmit={handleSubmit} />
      )}

      <nav>
        <Link to="/strengths">View Strengths and Gaps</Link>
        <span> | </span>
        <Link to="/ask">Ask follow-up questions</Link>
        <span> | </span>
        <Link to="/">Back to home</Link>
      </nav>
    </main>
  )
}
