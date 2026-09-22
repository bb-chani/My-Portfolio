import SectionHeading from './SectionHeading'

const ICONS = {
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 3v18h18" />
      <path d="M7 14l3-4 3 3 4-6" />
    </svg>
  ),
  desktop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
}

const SKILLS = [
  {
    icon: 'chart',
    name: 'SIEM & Detection',
    tags: ['Splunk (SPL)', 'Microsoft Sentinel (KQL)', 'Sigma', 'YARA'],
  },
  {
    icon: 'shield',
    name: 'EDR / NDR',
    tags: ['CrowdStrike Falcon', 'Microsoft Defender for Endpoint', 'Darktrace'],
  },
  {
    icon: 'lock',
    name: 'SOAR & Automation',
    tags: ['Splunk SOAR', 'Python', 'PowerShell', 'Bash', 'JavaScript', 'SQL', 'REST APIs', 'Claude API'],
  },
  {
    icon: 'chat',
    name: 'Threat Analysis & IR',
    tags: ['MITRE ATT&CK', 'phishing analysis', 'malware behavior analysis', 'IOC analysis', 'threat hunting', 'digital forensics and chain of custody'],
  },
  {
    icon: 'desktop',
    name: 'Identity & Access',
    tags: ['Microsoft Entra ID', 'Active Directory', 'Okta', 'MFA/SSO', 'access reviews'],
  },
  {
    icon: 'globe',
    name: 'Network, Systems & Cloud',
    tags: ['TCP/IP', 'DNS', 'firewalls', 'IDS/IPS', 'Wireshark', 'tcpdump', 'Nessus', 'Nmap', 'Windows/Linux/macOS', 'AWS', 'Azure', 'Microsoft 365'],
  },
  {
    icon: 'lock',
    name: 'Frameworks & Ticketing',
    tags: ['NIST CSF', 'NIST SP 800-171', 'PCI DSS', 'HIPAA', 'ServiceNow', 'Jira', 'ITIL'],
  },
]

export default function Skills() {
  return (
    <section id="clearance">
      <SectionHeading index="02" title="Clearance & Capabilities" />
      <div className="skill-grid">
        {SKILLS.map((s) => (
          <div key={s.name} className="skill-card reveal-up">
            <div className="sc-top">
              <span className="sc-icon">{ICONS[s.icon]}</span>
              <span className="sc-name">{s.name}</span>
            </div>
            <div className="tags">
              {s.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
