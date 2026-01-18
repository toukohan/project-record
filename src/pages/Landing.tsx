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
        <p>Most evaluations take 2–5 minutes.</p>

        <ol className="evaluation-steps">
          <li>
            <Link to="/fit-evaluation"><strong>Fit Evaluation</strong></Link>
            <br />
            <span>Answer 4 questions. Get a clear fit assessment. Often sufficient to decide.</span>
          </li>
          <li>
            <Link to="/strengths"><strong>Strengths and Gaps</strong></Link>
            <br />
            <span>Explicit capabilities and limitations. Check if fit is partial.</span>
          </li>
          <li>
            <Link to="/experiences"><strong>Experiences</strong></Link>
            <br />
            <span>Read 1–2 relevant experiences. Not all are required.</span>
          </li>
          <li>
            <Link to="/ask"><strong>Ask</strong></Link>
            <br />
            <span>Query specific decisions or reasoning. Best for follow-up.</span>
          </li>
        </ol>
      </section>

      <section>
        <h2>When to Stop</h2>
        <ul>
          <li><strong>"Not a Fit"</strong> — You have enough information. Stop here.</li>
          <li><strong>"Strong Fit"</strong> — Proceed directly. No further exploration needed.</li>
          <li><strong>"Partial Fit"</strong> — Check concerns in Strengths or Experiences.</li>
        </ul>
      </section>
    </main>
  )
}
