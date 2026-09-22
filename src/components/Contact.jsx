const ROWS = [
  {
    href: "mailto:Boylenchani@gmail.com",
    label: "Boylenchani@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M16 16v-3" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact reveal-up">
        <span className="eyebrow">
          <span className="tick"></span>Let's connect
        </span>
        <h2>Let's talk security.</h2>
        <p>
          I’m open to remote SOC and security operations roles. Reach out through
          any channel below and I’d be glad to connect.
        </p>
        <div className="contact-rows">
          {ROWS.map((r) => (
            <a
              key={r.label}
              className="crl"
              href={r.href}
              {...(r.external ? { target: "_blank", rel: "noopener" } : {})}
            >
              {r.icon}
              {r.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
