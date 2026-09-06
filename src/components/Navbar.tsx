import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Cube, DownloadSimple, List, X } from '@phosphor-icons/react'
import { site } from '../data/site'
import './Navbar.css'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <Cube size={26} weight="regular" aria-hidden />
          <span>{site.brand}</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href={site.cv}
            download={site.cvFilename}
            className="btn btn-primary btn-sm"
          >
            <span>Hire</span>
            <DownloadSimple size={17} weight="bold" aria-hidden />
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden /> : <List size={24} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          {site.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-mobile-link"
              activeProps={{ className: 'nav-mobile-link is-active' }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
