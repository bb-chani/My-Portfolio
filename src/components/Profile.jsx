import SectionHeading from "./SectionHeading";

const STATS = [
  { n: "40+", l: "Alerts triaged daily" },
  { n: "15%", l: "False-positive reduction" },
];

export default function Profile() {
  return (
    <section id="profile">
      <SectionHeading index="01" title="Profile" />
      <div className="profile">
        <p className="reveal-up">
          Security+ certified <b>security analyst</b> running front-line security
          operations for a global user base across time zones. Day to day, that
          means triaging 40+ alerts across Splunk, Microsoft Sentinel,
          CrowdStrike Falcon, and Defender for Endpoint, escalating real threats
          with the logs and timeline already recorded, and writing the detections
          that stop the same noise coming back. I cut false positives 15% through
          SPL and KQL tuning and Sigma rule development, and I automate the
          repetitive parts in Python.
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
