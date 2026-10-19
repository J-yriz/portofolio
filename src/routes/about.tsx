import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Briefcase, Certificate as CertificateIcon, GraduationCap, Users } from '@phosphor-icons/react'
import { Modal } from '../components/Modal'
import { Reveal } from '../components/Reveal'
import { certificates, education, experience, organizations, type Certificate } from '../data/experience'
import { capabilities } from '../data/skills'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './about.css'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  useDocumentTitle('About — Jariz')
  const [activeCert, setActiveCert] = useState<Certificate | null>(null)

  return (
    <main className="page">
      <section className="container section">
        <h1 className="page-title">Developer who ships.</h1>
        <p className="page-sub page-sub-wide">
          I&apos;m Fajar Aziz Kurniawan, a full-stack developer based in
          Semarang, building PoS systems, backoffice dashboards, and web
          apps for SMEs with Next.js, NestJS, and Golang. With a background
          in freelance development and quality assurance, I care about clean
          APIs, reliable databases, and interfaces that stay simple to use.
        </p>
      </section>

      <section className="container section">
        <Reveal>
          <h2>How I work</h2>
        </Reveal>
        <div className="caps-grid">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="cap-card">
                <p className="cap-num">0{i + 1}</p>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <h2 className="row-title">
            <Briefcase size={26} aria-hidden />
            Experience
          </h2>
        </Reveal>
        <div className="timeline">
          {experience.map((e) => (
            <Reveal key={`${e.company}-${e.role}`}>
              <article className="timeline-row">
                <div className="timeline-main">
                  <h3>{e.role}</h3>
                  {e.companyHref ? (
                    <a
                      href={e.companyHref}
                      target="_blank"
                      rel="noreferrer"
                      className="timeline-company"
                    >
                      {e.company}
                      <ArrowUpRight size={15} weight="bold" aria-hidden />
                    </a>
                  ) : (
                    <p className="timeline-company">{e.company}</p>
                  )}
                  <p className="timeline-body">{e.body}</p>
                  <div className="timeline-tags">
                    {e.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="timeline-side">
                  <p className="timeline-period">{e.period}</p>
                  <p className="timeline-loc">{e.location}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <h2 className="row-title">
            <GraduationCap size={26} aria-hidden />
            Education
          </h2>
        </Reveal>
        <div className="timeline">
          {education.map((edu) => (
            <Reveal key={edu.institution}>
              <article className="timeline-row">
                <div className="timeline-main">
                  <h3>{edu.degree}</h3>
                  {edu.institutionHref ? (
                    <a
                      href={edu.institutionHref}
                      target="_blank"
                      rel="noreferrer"
                      className="timeline-company"
                    >
                      {edu.institution}
                      <ArrowUpRight size={15} weight="bold" aria-hidden />
                    </a>
                  ) : (
                    <p className="timeline-company">{edu.institution}</p>
                  )}
                  <p className="timeline-body">{edu.body}</p>
                  <div className="timeline-tags">
                    {edu.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="timeline-side">
                  <p className="timeline-period">{edu.period}</p>
                  <p className="timeline-loc">{edu.location}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <h2 className="row-title">
            <Users size={26} aria-hidden />
            Organization
          </h2>
        </Reveal>
        <div className="timeline">
          {organizations.map((org) => (
            <Reveal key={`${org.organization}-${org.role}`}>
              <article className="timeline-row">
                <div className="timeline-main">
                  <h3>{org.role}</h3>
                  {org.organizationHref ? (
                    <a
                      href={org.organizationHref}
                      target="_blank"
                      rel="noreferrer"
                      className="timeline-company"
                    >
                      {org.organization}
                      <ArrowUpRight size={15} weight="bold" aria-hidden />
                    </a>
                  ) : (
                    <p className="timeline-company">{org.organization}</p>
                  )}
                  <p className="timeline-body">{org.body}</p>
                  <div className="timeline-tags">
                    {org.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="timeline-side">
                  <p className="timeline-period">{org.period}</p>
                  <p className="timeline-loc">{org.location}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <h2 className="row-title">
            <CertificateIcon size={26} aria-hidden />
            Certificates
          </h2>
        </Reveal>
        <div className="cert-grid">
          {certificates.map((c) => (
            <Reveal key={c.name}>
              <button
                type="button"
                className="cert-card"
                onClick={() => setActiveCert(c)}
                aria-haspopup="dialog"
              >
                <span className="cert-view" aria-hidden>
                  View
                  <ArrowUpRight size={16} weight="bold" />
                </span>
                <h3>{c.name}</h3>
                <p>
                  {c.issuer} · {c.year}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {activeCert && (
        <Modal label={activeCert.name} onClose={() => setActiveCert(null)}>
          <img
            src={activeCert.image}
            alt={`${activeCert.name} certificate`}
            className="modal-img"
          />
          <div className="modal-meta">
            <h3>{activeCert.name}</h3>
            <p>
              {activeCert.issuer} · {activeCert.year}
            </p>
          </div>
        </Modal>
      )}
    </main>
  )
}
