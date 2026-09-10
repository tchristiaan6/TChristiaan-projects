# tchristiaan.com

Thomas Bouwman's project portfolio: a running list of side projects, experiments, failures, and lessons learned, most recent first.

Static site. No build step. `index.html` holds the page, the styles, and the `PROJECTS` array that renders the cards. Logos and photos live in `assets/`.

## Editing

- Add or change a project: edit the `PROJECTS` array in `index.html`. Fields: `y` (year group), `name`, `url`, `date`, `status` (`live`, `paused`, `wip`, `dead`), `img` or `mono` + `label`, `tags`, `blurb`, `story`.
- Year groups and their kicker text live in `ERAS`.
- Preview locally: `python3 -m http.server 4173` then open http://localhost:4173.

Deployed on Vercel from the `main` branch.
