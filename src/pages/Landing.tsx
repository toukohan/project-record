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
      <nav>
        <Link to="/ask">Ask about how I work</Link>
        <Link to="/fit">Check fit for your role</Link>
      </nav>
    </main>
  )
}
