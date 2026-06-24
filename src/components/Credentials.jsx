import SectionHeading from './SectionHeading'

const SEALS = {
  medal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="6" />
      <path d="M9 14l-2 7 5-3 5 3-2-7" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2 4 6v6c0 5 8 10 8 10s8-5 8-10V6z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
}

const CERTS = [
  { seal: 'medal', title: 'CompTIA Security+', status: 'Verified · Active' },
  { seal: 'shield', title: 'CompTIA Cybersecurity Basics', status: 'Competency · Active' },
  { seal: 'clock', title: 'Cisco CCNA', status: 'In progress · Expected 2026', prog: true },
]

export default function Credentials() {
  return (
    <section id="credentials">
      <SectionHeading index="04" title="Credentials & Education" />
      <div className="cred-grid">
        <div className="certs">
          {CERTS.map((c) => (
            <div key={c.title} className="cert reveal-up">
              <span className="seal">{SEALS[c.seal]}</span>
              <div>
                <div className="ct">{c.title}</div>
                <div className={`cs${c.prog ? ' prog' : ''}`}>{c.status}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="edu-card reveal-up">
          <div className="lab">// Education</div>
          <div className="deg">B.Sc. Computer Science</div>
          <div className="sch">University of Strathmore</div>
        </div>
      </div>
    </section>
  )
}
