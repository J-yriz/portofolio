# Jariz — Portfolio

Personal portfolio of **Fajar Aziz Kurniawan (Jariz)**, full-stack website developer.
Single source of truth for profile, projects, skills, and experience — rendered as a
light editorial site (paper background, serif display type, pine accent).

## Tech stack

- **React 19 + TypeScript + Vite 8** (Rolldown-based build)
- **TanStack Router** — file-based routing (`src/routes`, `routeTree.gen.ts`)
- **React Compiler** via `babel-plugin-react-compiler` (no manual memoization)
- **Oxlint** for linting (`npm run lint`)
- **Phosphor Icons** (`@phosphor-icons/react`)
- Zero CSS framework — hand-written CSS with design tokens in `src/index.css`
- Self-hosted fonts: **Source Serif 4** (display) + **Figtree** (body)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck (tsc -b) + production build → dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Managing content

All content lives in `src/data/` — edit these files, no component changes needed:

| File            | Controls                                              |
| --------------- | ----------------------------------------------------- |
| `projects.ts`   | Project list, `projectCategories` filter, Home top-3  |
| `site.ts`       | Name, roles, socials, nav, stats                      |
| `skills.ts`     | Core technologies                                     |
| `experience.ts` | Work history                                          |

Rules:

- `projects.ts` is ordered **newest-first**. Home "Selected works" shows the first 3
  entries automatically (`featuredProjects = projects.slice(0, 3)`).
- `category` drives the filter buttons on the Projects page — adding a project with a
  new category requires extending `ProjectCategory` + `projectCategories`.
- `website` / `github` are optional. Omit both and the card renders no action links.
- `image` is an optional path under `public/images/`; omitted renders a monogram tile.

## Routes

| Path        | File                   | Description                              |
| ----------- | ---------------------- | ---------------------------------------- |
| `/`         | `src/routes/index.tsx` | Hero, selected works, skills, experience |
| `/projects` | `src/routes/projects.tsx` | Full archive with category filter     |
| `/about`    | `src/routes/about.tsx` | Profile, CV download                     |

Shared UI: `Navbar`, `Footer`, `ProjectCard`, `Reveal` (scroll animation), `Modal`
in `src/components/`; `useDocumentTitle` in `src/hooks/`.

## Design tokens

Locked light editorial theme in `src/index.css` — `--paper: #f7f7f5`,
`--ink: #1a1a1a`, `--pine: #2f7d62`. The favicon (`public/favicon.svg`) is a "J."
monogram using the same three colors.
