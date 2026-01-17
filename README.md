# Capability Discovery Interface

A candidate-controlled landing page for employer evaluation.

## Live Demo

**Deployment URL:** https://toukohan.github.io/landing/

## Usage

This interface helps employers evaluate fit through investigation rather than filtering:

1. **Fit Evaluation** (2 min) — Answer 4 questions, get a clear fit assessment
2. **Strengths and Gaps** — Review explicit capabilities and limitations
3. **Experiences** — Read 1–2 relevant experiences for deeper context
4. **Ask** — Query specific decisions, lessons, or reasoning

Most evaluations take 2–5 minutes. Start with Fit Evaluation.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Deployment

The application auto-deploys to GitHub Pages on push to `main`.

To enable deployment:
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch

The deploy workflow runs tests before deploying. If tests fail, deployment is blocked.
