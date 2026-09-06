import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import type { Project } from '../data/projects'
import './ProjectCard.css'

const tileTones = ['tone-pine', 'tone-sand', 'tone-sage', 'tone-clay'] as const

function monogram(name: string): string {
  const words = name.split(' ').filter(Boolean)
  const letters = words.slice(0, 2).map((w) => w[0])
  return letters.join('').toUpperCase()
}

interface ProjectCardProps {
  project: Project
  index?: number
}

/* Card links out to the live site / repo. When a project has neither link,
   the action row is omitted entirely — no dead buttons. */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const tone = tileTones[index % tileTones.length]

  return (
    <article className="project-card">
      <div className={`project-tile ${tone}`}>
        {project.image ? (
          <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
        ) : (
          <span className="project-mono" aria-hidden>
            {monogram(project.name)}
          </span>
        )}
      </div>
      <div className="project-body">
        <p className="project-meta">
          {project.categoryLabel} · {project.year}
        </p>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        {(project.website ?? project.github) && (
          <div className="project-links">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Visit site
                <ArrowUpRight size={16} weight="bold" aria-hidden />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label={`${project.name} source code on GitHub`}
              >
                <GithubLogo size={18} aria-hidden />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
