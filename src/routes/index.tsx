import { Fragment } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, MapPin } from '@phosphor-icons/react'
import { HoverPreview } from '../components/HoverPreview'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { skillPreviewImages, skillStory } from '../data/skills'
import { experience } from '../data/experience'
import { featuredProjects } from '../data/projects'
import { site } from '../data/site'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './home.css'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  useDocumentTitle('Jariz — Website Developer')

  return (
    <main className="page">
      {/* Hero */}
      <section className="container hero">
        <div className="hero-copy">
          <p className="hero-kicker">{site.availability}</p>
          <h1 className="hero-title">
            Fajar Aziz
            Kurniawan.
          </h1>
          <p className="hero-sub">
            Full-stack web developer building fast, maintainable apps with
            TypeScript, Node.js, and modern tooling.
          </p>
          <dl className="hero-stats">
            {site.stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual">
          <div className="hero-backdrop" aria-hidden>
            {site.portraitBackdrop && (
              <img src={site.portraitBackdrop} alt="" loading="lazy" />
            )}
          </div>
          <div className="hero-mono">
            {site.portrait ? (
              <img
                src={site.portrait}
                alt={site.portraitAlt}
                fetchPriority="high"
              />
            ) : (
              <span aria-hidden>J</span>
            )}
          </div>
          <div className="hero-badge">
            <MapPin size={20} weight="fill" />
            <div>
              <p>Based in</p>
              <p>{site.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected works */}
      <section className="container section">
        <Reveal>
          <div className="section-head">
            <h2>Selected works</h2>
            <Link to="/projects" className="section-link">
              All projects
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </Reveal>
        <div className="works-grid">
          {featuredProjects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className={i === 0 ? 'works-lead' : ''}
            >
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container section">
        <Reveal>
          <h2>What I work with</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="skills-prose">
            {skillStory.map((part, i) => {
              const content = 'skill' in part ? part.skill : part.text
              const needsSpace = i > 0 && !/^[,.]/.test(content)
              return (
                <Fragment key={i}>
                  {needsSpace ? ' ' : null}
                  {'skill' in part ? (
                    <HoverPreview image={skillPreviewImages[content]} alt={content}>
                      {content}
                    </HoverPreview>
                  ) : (
                    content
                  )}
                </Fragment>
              )
            })}
          </p>
        </Reveal>
      </section>

      {/* Experience preview */}
      <section className="container section">
        <Reveal>
          <div className="section-head">
            <h2>Experience</h2>
            <Link to="/about" className="section-link">
              Full story
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </Reveal>
        <div className="exp-list">
          {experience.map((e) => (
            <Reveal key={`${e.company}-${e.role}`}>
              <article className="exp-row">
                <div>
                  <h3>{e.role}</h3>
                  <p className="exp-company">{e.company}</p>
                </div>
                <p className="exp-period">{e.period}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
