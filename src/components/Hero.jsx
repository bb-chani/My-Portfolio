import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const CRED_ROWS = [
  { label: "ROLE", value: "SOC Analyst" },
  { label: "CERTIFICATION", value: "Security+" },
  { label: "LOCATION", value: "Denton, TX (DFW)" },
  { label: "REMOTE", value: "Open to remote", ok: true },
];

/** Sequentially reveals the credential rows, then flips the VERIFIED badge on. */
function useCredentialSequence(rowCount) {
  // When reduced motion is requested, start fully revealed so the effect has nothing to animate.
  const reduce = prefersReducedMotion();
  const [revealed, setRevealed] = useState(reduce ? rowCount : 0);
  const [verified, setVerified] = useState(reduce);

  useEffect(() => {
    if (reduce) return;

    const timers = [];
    for (let i = 0; i < rowCount; i++) {
      timers.push(
        setTimeout(() => setRevealed((n) => Math.max(n, i + 1)), 500 + i * 260),
      );
    }
    timers.push(
      setTimeout(() => setVerified(true), 500 + rowCount * 260 + 200),
    );

    return () => timers.forEach(clearTimeout);
  }, [rowCount, reduce]);

  return { revealed, verified };
}

export default function Hero() {
  const { revealed, verified } = useCredentialSequence(CRED_ROWS.length);

  return (
    <section className="hero" style={{ paddingTop: 64 }}>
      <div className="hero-text">
        <span className="eyebrow">
          <span className="tick"></span>Security Operations Analyst
        </span>
        <h1>Chani Boylen</h1>
        <p className="hero-sub">
          <b>Security+ certified analyst.</b> SIEM triage, detection
          engineering, and automation.
        </p>
        <div className="meta-line">
          <span>
            <span className="k">LOC:</span> Denton, TX (DFW)
          </span>
          <span>
            <span className="k">REMOTE:</span> Open to remote roles
          </span>
          <span>
            <span className="k">FOCUS:</span> SOC operations
          </span>
        </div>
        <div className="cta-row">
          <a className="btn ghost" href="https://github.com/bb-chani" target="_blank" rel="noopener noreferrer">
            View GitHub <span className="arrow">→</span>
          </a>
          <a className="btn primary" href="#experience">
            View experience
          </a>
        </div>
      </div>

      <CredentialCard revealed={revealed} verified={verified} />
    </section>
  );
}

function CredentialCard({ revealed, verified }) {
  return (
    <div className="cred">
      <div className="cred-scan"></div>
      <div className="cred-head">
        <span className="cred-tag">// SECURITY PROFILE</span>
        <span className={`verified${verified ? " on" : ""}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          VERIFIED
        </span>
      </div>
      <div className="cred-id">
        <div className="avatar">CB</div>
        <div>
          <div className="nm">Chani Boylen</div>
          <div className="rl">Security Operations Analyst</div>
        </div>
      </div>
      <div className="cred-rows">
        {CRED_ROWS.map((row, i) => (
          <div
            key={row.label}
            className={`crow${i < revealed ? " reveal" : ""}`}
          >
            <span className="lbl">{row.label}</span>
            <span className={`val${row.ok ? " ok" : ""}`}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
