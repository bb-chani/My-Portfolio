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
    href: "tel:+19402685547",
    label: "(940) 268-5547",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
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
          <span className="tick"></span>Request Access
        </span>
        <h2>Let's talk security.</h2>
        <p>
          Reviewing my profile for a role? I'd welcome the conversation. Reach
          out through any channel below — access granted on request.
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
