import servicesImage from '../assets/ServicesImage.png'
import './Services.css'

// Verify every line against what the workshops actually offer before launch
const SERVICES = [
  {
    title: 'General service',
    text: 'Routine check and maintenance for your motorcycle',
  },
  {
    title: 'Engine repair',
    text: 'Diagnosis and repair of engine issues',
  },
  {
    title: 'Oil change',
    text: 'Engine oil and oil filter replacement',
  },
  {
    title: 'Brake service',
    text: 'Brake pads, discs and brake fluid checked',
  },
  {
    title: 'Chain and sprocket',
    text: 'Cleaning, lubrication and adjustment',
  },
  {
    title: 'Clutch service',
    text: 'Clutch adjustment and plate replacement',
  },
  {
    title: 'Battery and electricals',
    text: 'Starting problems and wiring faults diagnosed',
  },
  {
    title: 'Tyres and puncture repair',
    text: 'Tyre checks, puncture repair and replacement',
  },
]

// Colours come from CSS variables (see Services.css), not hard-coded hex
function CheckIcon() {
  return (
    <svg
      className="services__check"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="services__check-bg" cx="12" cy="12" r="12" />
      <path
        className="services__check-mark"
        d="M7 12.5l3.2 3.2L17 8.8"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="container services__inner">
        {/* Image column: use a real RAW workshop photo only */}
        <div className="services__media">
          <img
            className="services__image"
            src={servicesImage}
            alt="A technician inspecting a motorcycle in the workshop"
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Content column */}
        <div className="services__content">
          <p className="services__eyebrow">Our services</p>

          {/* Plain heading: no single-word highlight */}
          <h2 id="services-title" className="services__title">
            Motorcycle repairs and servicing
          </h2>

          <p className="services__intro">
            From routine maintenance to essential repairs, our technicians look
            after your motorcycle at our Shimpoli and Gorai workshops.
          </p>

          <ul className="services__list">
            {SERVICES.map((service) => (
              <li key={service.title} className="services__item">
                <CheckIcon />
                <div>
                  <h3 className="services__item-title">{service.title}</h3>
                  <p className="services__item-text">{service.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="services__actions">
            <a className="services__btn" href="#contact">
              Book your motorcycle service
            </a>
            <a className="services__link" href="#process">
              See how a service works
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
      </div>
    </section>
  )
}

export default Services
