import './WhyRaw.css'

// Icons share one style (24px grid, 2px stroke, round caps).
// Verify every claim below against real business facts before launch.
const REASONS = [
  {
    title: 'Multi-brand capability',
    text: 'We service motorcycles from different brands under one roof.',
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
  },
  {
    title: 'Technicians who know bikes',
    text: 'Our technicians look after your motorcycle with care and attention to detail.',
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </>
    ),
  },
  {
    title: 'Proper workshop equipment',
    text: 'The tools and equipment needed to inspect and repair your motorcycle correctly.',
    icon: (
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    ),
  },
  {
    title: 'Inspection before work',
    text: 'We inspect your motorcycle first, so we know what it needs before we start.',
    icon: (
      <>
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Clear estimate and approval',
    text: 'You see the estimate and approve it before any work is carried out.',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </>
    ),
  },
  {
    title: 'Two workshops',
    text: 'Visit us at Shimpoli or Gorai, whichever is closer to you.',
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
]

function WhyRaw() {
  return (
    <section id="why-raw" className="why" aria-labelledby="why-title">
      <div className="container">
        {/* Heading */}
        <div className="why__header">
          <p className="why__eyebrow">Why RAW</p>

          {/* Plain heading: no single-word highlight */}
          <h2 id="why-title" className="why__title">
            Why choose RAW
          </h2>

          <p className="why__intro">
            What you can expect when you bring your motorcycle to RAW – A1 BIKE
            POINT.
          </p>
        </div>

        {/* Cards */}
        <ul className="why__grid">
          {REASONS.map((reason) => (
            <li key={reason.title} className="why__card">
              <span className="why__icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  {reason.icon}
                </svg>
              </span>
              <h3 className="why__card-title">{reason.title}</h3>
              <p className="why__card-text">{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyRaw
