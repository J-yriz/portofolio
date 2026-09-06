import { Link } from '@tanstack/react-router'
import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { mailtoHref, site } from '../data/site'
import './Footer.css'

const socialIcons = [GithubLogo, LinkedinLogo] as const

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-eyebrow">{site.availability}</p>
        <div className="footer-grid">
          <div>
            <h2 className="footer-title">
              Let&apos;s build something solid together.
            </h2>
            <a href={mailtoHref()} className="footer-mail">
              <EnvelopeSimple size={22} aria-hidden />
              {site.email}
            </a>
          </div>
          <div className="footer-cols">
            <nav aria-label="Footer">
              <p className="footer-col-title">Navigation</p>
              {site.nav.map((item) => (
                <Link key={item.to} to={item.to} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div>
              <p className="footer-col-title">Socials</p>
              {site.socials.map((s, i) => {
                const Icon = socialIcons[i % socialIcons.length]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    <Icon size={17} aria-hidden />
                    {s.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 - {new Date().getFullYear()} {site.shortName}. All rights reserved.</p>
          <a href="#root" className="footer-top">
            Back to top
            <ArrowUpRight size={15} weight="bold" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
