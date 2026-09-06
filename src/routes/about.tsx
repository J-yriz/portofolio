import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Briefcase, Certificate as CertificateIcon } from '@phosphor-icons/react'
import { Modal } from '../components/Modal'
import { Reveal } from '../components/Reveal'
import { certificates, experience, type Certificate } from '../data/experience'
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
          I&apos;m Fajar Aziz Kurniawan, a full-stack developer at Logika
          Data, building PoS systems, backoffice dashboards, and websites
          for SMEs with Next.js and NestJS. Previously freelancing at
          Raznar, I started out in quality assurance at Nexa.
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
