import { useState } from "react";
import SectionHeading from "./SectionHeading";

// How many bullets are shown before the "See more" toggle kicks in.
const COLLAPSED_COUNT = 4;

const ENTRIES = [
  {
    range: "2025 — Present",
    company: "Sena Technologies",
    badge: "Current",
    title: "Information Security Analyst — IAM & User Access Support",
    points: [
      <>
        Support identity and access management across internal business systems,
        including account access, MFA, Microsoft&nbsp;365, Active Directory,
        Azure/Entra&nbsp;ID, and <b>user authentication issues</b>.
      </>,
      <>
        Manage <b>15–25 IAM, access, and technical support requests weekly</b>,
        prioritizing by business impact, urgency, and user access needs.
      </>,
      <>
        Support onboarding, offboarding, access changes, password resets, MFA
        enrollment, and account provisioning so users have the{" "}
        <b>right level of system access</b>.
      </>,
      <>
        Coordinate IAM-related issue triage between users, technical support,
        application teams, and higher-level support resources to drive{" "}
        <b>timely resolution</b>.
      </>,
      <>
        Document access issues, troubleshooting steps, escalation notes, and
        resolution outcomes in ticketing systems to support consistency and{" "}
        <b>audit readiness</b>.
      </>,
      <>
        Assist with testing and validation of access changes, system updates,
        and user-facing technology workflows before wider business use.
      </>,
      <>
        Identify recurring access, authentication, and account-related issues
        and share feedback to <b>improve IAM support processes</b> and the
        overall user experience.
      </>,
      <>
        Communicate with business users and stakeholders to explain access
        requirements, resolve identity-related issues, and support smooth
        technology adoption.
      </>,
    ],
  },
  {
    range: "2022 — 2025",
    company: "Goma Gold Miners",
    badge: "3 yrs",
    title: "Business Technology & Website Security Specialist",
    points: [
      <>
        Administered company websites, hosting platforms, domain services, and
        business applications while maintaining{" "}
        <b>secure and reliable access</b> to digital resources.
      </>,
      <>
        Managed user accounts, permissions, and administrative access across
        websites and business systems — supporting <b>least-privilege access</b>{" "}
        and account lifecycle management.
      </>,
      <>
        Reviewed websites and business platforms for access-control issues,
        configuration weaknesses, outdated software components, and{" "}
        <b>potential security risks</b>.
      </>,
      <>
        Coordinated with hosting providers, vendors, and internal stakeholders
        to resolve website, access, and platform-related issues.
      </>,
      <>
        Supported onboarding and offboarding by provisioning, updating, and
        removing access to business applications, collaboration tools, and
        digital platforms.
      </>,
      <>
        Maintained technical documentation, user access records, system
        configurations, and operational procedures to support continuity and{" "}
        <b>audit readiness</b>.
      </>,
    ],
  },
  {
    range: "2018 — 2021",
    company: "ESAT Computer Hub",
    badge: "3 yrs",
    title: "IT Support Technician — Systems, Access & Endpoint Support",
    points: [
      <>
        Diagnosed and resolved hardware, software, networking, malware, and{" "}
        <b>user access issues</b> across Windows-based environments.
      </>,
      <>
        Managed Active Directory accounts, password resets, access requests, and
        Group Policy settings to support <b>secure user access</b> and system
        administration.
      </>,
      <>
        Supported user provisioning, permissions updates, workstation
        deployment, PC imaging, OS installations, upgrades, and data migrations.
      </>,
      <>
        Troubleshot Windows systems, DNS, DHCP, VPN, Wi-Fi, and network
        connectivity issues to <b>restore productivity and reduce downtime</b>.
      </>,
      <>
        Supported endpoint security and system maintenance, including malware
        troubleshooting, patching, and basic security controls.
      </>,
      <>
        Documented technical issues, troubleshooting steps, escalation notes,
        and resolution details to support consistent service delivery.
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
