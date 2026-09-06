import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { projectCategories, projects, type ProjectCategory } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './projects.css'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  useDocumentTitle('Projects — Jariz')
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const visible =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <main className="page container section">
      <h1 className="page-title">Work archive.</h1>
      <p className="page-sub">
        Every shipped project, from client stores to weekend bots. Filter by
        type to explore.
      </p>

      <div className="filters" role="group" aria-label="Filter projects by type">
        {projectCategories.map((c) => (
          <button
            key={c.value}
            type="button"
            className={`filter-btn${filter === c.value ? ' is-active' : ''}`}
            aria-pressed={filter === c.value}
            onClick={() => setFilter(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="filter-count" aria-live="polite">
        Showing {visible.length} of {projects.length}
      </p>

      <div className="projects-grid">
        {visible.map((p, i) => (
          <Reveal key={p.name}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </main>
  )
}
