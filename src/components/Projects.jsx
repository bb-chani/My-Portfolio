import SectionHeading from './SectionHeading'

const PROJECTS = [
  {
    featured: true,
    title: 'Detection Rules: Sigma + YARA Detection-as-Code',
    link: 'https://github.com/bb-chani/Detection_rules',
    description:
      'Detection rules I write and maintain as code: Sigma rules that deploy to Splunk, Elastic, and Microsoft Defender, plus YARA rules tested automatically in CI.',
    tags: [
      'Sigma',
      'YARA',
      'sigma-cli',
      'Splunk',
      'Elastic',
      'Microsoft Defender',
      'Detection Engineering',
      'CI',
    ],
    button: 'View on GitHub',
  },
  {
    featured: false,
    title: 'Vulnerability Report Triage Automation',
    link: '',
    description:
      'Python + Claude API tool that summarizes incoming vulnerability reports and drafts researcher responses, with generated output validated against the source report before use.',
    tags: ['Python', 'Claude API', 'Automation', 'Vulnerability Disclosure'],
    button: 'View project',
  },
  {
    featured: false,
    title: 'Vulnerability Assessment Lab',
    link: '',
    description:
      'Hands-on lab scanning and assessing targets with Nessus and Nmap, and working through OWASP Top 10 vulnerabilities.',
    tags: ['Nessus', 'Nmap', 'OWASP Top 10'],
    button: 'View project',
  },
  {
    featured: false,
    title: 'Splunk & KQL Query Lab',
    link: '',
    description:
      'Practice environment for writing and tuning SPL and KQL detection and hunting queries.',
    tags: ['Splunk', 'SPL', 'KQL', 'Microsoft Sentinel', 'Threat Hunting'],
    button: 'View project',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeading index="04" title="Projects" />
      <div className="project-grid">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className={`project-card reveal-up${project.featured ? ' featured' : ''}`}
          >
            {project.featured && <span className="project-badge">Featured</span>}
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-stats">[X] Sigma rules · [Y] YARA rules · [Z] ATT&CK techniques</div>
            <div className="tags project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <div className="project-links">
                <a className="btn primary small" href={project.link} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 15, height: 15, fill: 'currentColor' }}>
                    <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.02-.02-1.86-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.86.09-.68.35-1.13.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.11 2.49.32 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.59 5.06.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
                  </svg>
                  {project.button}
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
      <div className="project-progress reveal-up">
        <span className="project-progress-label">In progress</span>
        <span>Home SIEM + Honeypot lab (Wazuh, Suricata, pfSense, Sysmon, Cowrie/T-Pot)</span>
      </div>
    </section>
  )
}
