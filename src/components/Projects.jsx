import SectionHeading from './SectionHeading'

const PROJECTS = [
  {
    featured: true,
    title: 'Detection Rules: Sigma + YARA Detection-as-Code',
    link: 'https://github.com/bb-chani/Detection_rules',
    description:
      'A public detection-as-code repository of Sigma and YARA rules. Sigma rules are converted with sigma-cli for Splunk, Elasticsearch, and Microsoft 365 Defender, and YARA rules are validated through YARA-CI. Includes documented structure and contribution guidelines.',
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
            <div className="tags project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <div className="project-links">
                <a className="btn ghost small" href={project.link} target="_blank" rel="noopener noreferrer">
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
