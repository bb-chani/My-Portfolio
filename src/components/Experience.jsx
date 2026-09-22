import { useState } from "react";
import SectionHeading from "./SectionHeading";

// How many bullets are shown before the "See more" toggle kicks in.
const COLLAPSED_COUNT = 4;

const ENTRIES = [
  {
    range: 'Feb 2025 – Present',
    company: 'Sena Technologies',
    badge: 'Current',
    title: 'Security Operations Analyst',
    points: [
      <>
        Monitor and triage <b>40+ security alerts daily</b> in Splunk, Microsoft
        Sentinel, CrowdStrike Falcon, and Microsoft Defender for Endpoint across
        endpoint, identity, network, and cloud sources.
      </>,
      <>
        Write and tune SPL and KQL queries and develop Sigma rules, contributing
        to a <b>15% reduction in false-positive alerts</b>.
      </>,
      <>
        Investigate endpoint detections using telemetry and VirusTotal, supporting
        containment of <b>7 confirmed security incidents</b>.
      </>,
      <>
        Build Splunk SOAR playbooks for automated alert enrichment, investigation,
        and response.
      </>,
      <>
        Automate security workflows in Python, including vulnerability-report
        summarization and response drafting on the Claude API, with output
        validated against source data.
      </>,
      <>
        Investigate phishing and account-compromise activity using Entra ID
        conditional access alerts and sign-in anomalies; map activity to MITRE
        ATT&CK.
      </>,
    ],
  },
  {
    range: 'Jan 2022 – Jan 2025',
    company: 'Goma Gold Miners',
    badge: '3 yrs',
    title: 'Information Security Analyst',
    points: [
      <>
        Monitored network traffic across multiple sites and countries with
        Darktrace, investigating detections and coordinating response, including
        an extended overnight shift for cross-time-zone coverage.
      </>,
      <>
        Owned the audit cycle end to end: evidence collection, Entra ID access
        reviews under least privilege, and <b>10+ findings driven to closure</b>.
      </>,
      <>
        Ran vulnerability assessments with Nessus and Nmap, aligned to NIST, PCI
        DSS, and HIPAA.
      </>,
      <>
        Wrote security runbooks and playbooks, and introduced AI tooling that
        cut documentation time roughly <b>40%</b>.
      </>,
    ],
  },
  {
    range: 'Jan 2018 – Dec 2021',
    company: 'ESAT Computer Hub',
    badge: '3 yrs',
    title: 'IT Support Technician, Endpoint Security & Access',
    points: [
      <>
        Resolved malware, endpoint, networking, and access issues across Windows
        and Linux using log analysis and CLI diagnostics.
      </>,
      <>
        Supported endpoint patching, managed Active Directory accounts and Group
        Policy.
      </>,
    ],
  },
];

function ExperienceEntry({ entry }) {
  const [expanded, setExpanded] = useState(false);
  const collapsible = entry.points.length > COLLAPSED_COUNT;
  const visiblePoints =
    collapsible && !expanded
      ? entry.points.slice(0, COLLAPSED_COUNT)
      : entry.points;

  return (
    <article className="entry reveal-up">
      <div className="entry-meta">
        <div className="range">{entry.range}</div>
        <div className="co">{entry.company}</div>
        <span className="badge">{entry.badge}</span>
      </div>
      <div className="entry-body">
        <h3>{entry.title}</h3>
        <ul>
          {visiblePoints.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        {collapsible && (
          <button
            type="button"
            className="see-more"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded
              ? "See less"
              : `See ${entry.points.length - COLLAPSED_COUNT} more`}
            <span className="arrow">{expanded ? "↑" : "↓"}</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading index="03" title="Access Log — Experience" />
      <div className="timeline">
        {ENTRIES.map((e) => (
          <ExperienceEntry key={e.company} entry={e} />
        ))}
      </div>
    </section>
  );
}
