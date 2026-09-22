import { useState } from 'react'

const LINKS = [
  { href: '#profile', label: 'Profile' },
  { href: '#clearance', label: 'Clearance' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="mono">CB</span> Chani&nbsp;Boylen
        </a>
        <nav className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
