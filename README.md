# Claude Certification Hub

A complete static GitHub Pages site for an independent, source-backed Claude certification study hub.

## Included

- Homepage with search
- 4 complete certification guide pages
- Certification comparison page
- Exam logistics & policy guide
- Interactive 7-day / 14-day roadmap generator
- Concept library:
  - Prompt Engineering
  - Context Engineering
  - Tool Use & MCP
  - RAG
  - Agents
  - Evaluation & Safety
- Interactive original practice quiz
- Official resource directory
- Dated certification change log
- Editorial/disclaimer page
- Responsive mobile navigation
- GitHub Pages Actions workflow
- 404 page, web manifest and robots.txt

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended)
1. Create a repository, e.g. `claude-certification-hub`.
2. Upload all contents of this folder to the repository root.
3. Push to `main`.
4. GitHub → Settings → Pages → Build and deployment → Source: **GitHub Actions**.
5. The included `.github/workflows/pages.yml` will deploy the site.

### Option B — branch deployment
Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Important editorial rules

- Use `OFFICIAL / VERIFIED` only for claims checked against a primary source.
- Time-sensitive certification facts should carry a verification date.
- Never publish exam dumps, reconstructed live questions, or confidential exam content.
- Community advice must be labeled as unofficial.
- Re-check the exam guide immediately before major updates.

## Primary sources

- https://anthropic-partners.skilljar.com/page/partner-certifications
- https://anthropic-partners.skilljar.com/page/faq-certifications
- https://anthropic-partners.skilljar.com/page/claude-certification-exam-prep-courses
- https://anthropic-partners.skilljar.com/claude-certified-associate-foundations-certification
- https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification
- https://anthropic-partners.skilljar.com/path/claude-certified-developer-foundations
- https://anthropic-partners.skilljar.com/path/claude-certified-architect-professional
- https://docs.anthropic.com/
- https://modelcontextprotocol.io/

Last verified: 2026-09-01.

## Disclaimer
Independent community project. Not affiliated with or endorsed by Anthropic.
Claude and Anthropic are trademarks of Anthropic PBC.
