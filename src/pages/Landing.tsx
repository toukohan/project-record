import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <main>
      <h1>Capability Discovery Interface</h1>
      <p>
        This interface helps you decide whether I can contribute to your team,
        learn your domain, and deliver under real constraints.
      </p>
      <p>
        Instead of claims, you can investigate. Instead of filtering, you can explore.
      </p>

      <section>
        <h2>Recommended Evaluation Path</h2>
        <p>
          Most evaluations take 2–5 minutes. Start with the fit evaluation for a quick
          decision, or explore experiences for deeper context.
        </p>
        <ol>
          <li>
            <Link to="/fit-evaluation"><strong>Fit Evaluation</strong></Link> — Answer 4 questions about your role.
            Get a clear fit assessment. Often sufficient to decide.
          </li>
          <li>
            <Link to="/strengths"><strong>Strengths and Gaps</strong></Link> — See explicit capabilities
            and limitations. Useful if fit is partial or you have specific concerns.
          </li>
          <li>
            <Link to="/experiences"><strong>Experiences</strong></Link> — Read 1–2 experiences relevant to your context.
            Not all are required.
          </li>
          <li>
            <Link to="/ask"><strong>Ask</strong></Link> — Query specific decisions, lessons, or reasoning.
            Best for targeted follow-up questions.
          </li>
        </ol>
      </section>

      <section>
        <h2>When to Stop</h2>
        <p>
          If the fit evaluation says "Not a Fit", you have enough information.
          If it says "Strong Fit", you may proceed directly. Explore further only
          if you have specific concerns or need deeper context.
        </p>
      </section>
    </main>
  )
}
