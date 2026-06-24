import SectionHeading from "./SectionHeading";

const STATS = [
  { n: "7+", l: "Years in IT & security" },
  { n: "3", l: "Certifications held / in progress" },
];

export default function Profile() {
  return (
    <section id="profile">
      <SectionHeading index="01" title="Profile" />
      <div className="profile">
        <p className="reveal-up">
          A CompTIA Security+ certified <b>Information Security Analyst</b> with
          hands-on experience supporting identity and access management, user
          provisioning, MFA, Microsoft&nbsp;365, Active Directory, and
          Azure/Entra&nbsp;ID. I resolve access-related issues, run secure
          onboarding and offboarding workflows, document technical processes,
          and help users adopt secure technology with confidence. Known for{" "}
          <b>clear communication</b>, sharp troubleshooting, and connecting real
          business needs to practical, security-focused solutions.
        </p>
        <div className="stats">
          {STATS.map((s) => (
            <div key={s.l} className="stat reveal-up">
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
