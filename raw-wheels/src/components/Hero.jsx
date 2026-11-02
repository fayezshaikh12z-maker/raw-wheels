import heroImage from '../assets/HeroImage.webp'
import './Hero.css'

// Trust points live in data so the list is easy to edit and verify
const TRUST_POINTS = [
  'Inspection before work starts',
  'Estimate shared for your approval',
  'Workshops in Shimpoli and Gorai',
]

// One reusable icon; colours come from CSS variables (see Hero.css)
function CheckIcon() {
  return (
    <svg
      className="hero__check"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="hero__check-bg" cx="12" cy="12" r="12" />
      <path
        className="hero__check-mark"
        d="M7 12.5l3.2 3.2L17 8.8"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        {/* Text column */}
        <div className="hero__content">
          <p className="hero__eyebrow">Multi-brand two-wheeler service centre</p>

          <h1 id="hero-title" className="hero__title">
            Motorcycle service and repair you can rely on
          </h1>

          <p className="hero__text">
            RAW – A1 BIKE POINT looks after your motorcycle at our Shimpoli and
            Gorai workshops. Book a service and we inspect your bike, share the
            estimate for your approval, then carry out the work.
          </p>

          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#contact">
              Book your motorcycle service
            </a>
            <a className="hero__btn hero__btn--secondary" href="#services">
              See our services
            </a>
          </div>

          <ul className="hero__points">
            {TRUST_POINTS.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Image column: use a real RAW workshop photo only */}
        <div className="hero__media">
          <img
            className="hero__image"
            src={heroImage}
            alt="A RAW technician servicing a motorcycle in the workshop"
            width="850"
            height="567"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
