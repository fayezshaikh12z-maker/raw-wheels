import './Process.css'

// The step order matches the guidelines: enquiry/booking, inspection,
// estimate/approval, service, handover. Confirm the wording with the workshops.
const STEPS = [
  {
    title: 'Enquiry or booking',
    text: 'Contact us or book a service and tell us about your motorcycle and what it needs.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M9 16l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Inspection',
    text: 'Our technicians inspect your motorcycle to find out what it needs.',
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
  },
  {
    title: 'Estimate and approval',
    text: 'We share the estimate with you, and work starts only after you approve it.',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Service',
    text: 'The agreed work is carried out at our workshop.',
    icon: (
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    ),
  },
  {
    title: 'Handover',
    text: 'We hand your motorcycle back to you once the work is complete.',
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
]

function Process() {
  return (
    <section id="process" className="process" aria-labelledby="process-title">
      <div className="container">
        {/* Heading */}
        <div className="process__header">
          <p className="process__eyebrow">Our process</p>

          {/* Plain heading: no single-word underline */}
          <h2 id="process-title" className="process__title">
            How your motorcycle service works
          </h2>

          <p className="process__intro">
            Five clear steps, from your first enquiry to the handover.
          </p>
        </div>

        {/* Steps: a real sequence, so numbers are appropriate.
            The <ol> already announces the order, so the visible number is aria-hidden. */}
        <ol className="process__steps">
          {STEPS.map((step, index) => (
            <li key={step.title} className="process__step">
              <span className="process__number" aria-hidden="true">
                {index + 1}
              </span>

              <div className="process__body">
                <span className="process__icon">
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
                    {step.icon}
                  </svg>
                </span>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Call to action */}
        <div className="process__cta">
          <p className="process__cta-text">Ready to get your motorcycle serviced?</p>
          <a className="process__btn" href="#contact">
            Book your motorcycle service
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
