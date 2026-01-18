import { footer } from '../copy/footer'

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>{footer.name}</span>
      <span className="separator">·</span>
      <span>{footer.email}</span>
      <span className="separator">·</span>
      <a href={`https://github.com/${footer.github}`}>{footer.github}</a>
    </footer>
  )
}
