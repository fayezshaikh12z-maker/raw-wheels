import './Locations.css'

/* ----------------------------------------------------------
   DUMMY DATA: replace with the real details from the owner
   before launch (address, phone, opening hours).
   The brand guidelines require verified business information.
   ---------------------------------------------------------- */
const LOCATIONS = [
  {
    id: 'shimpoli',
    name: 'Shimpoli',
    address: 'Shop No. 00, Sample Road, Shimpoli, Mumbai – 400000',
    phone: '09892400563',
    phoneHref: 'tel:09892400563',
    hours: ['Monday to Saturday: 9:00 am – 7:00 pm', 'Sunday: Closed'],
  },
  {
    id: 'gorai',
    name: 'Gorai',
    address: 'Shop No. 00, Sample Lane, Gorai, Mumbai – 400000',
    phone: '09892400563',
    phoneHref: 'tel:09892400563',
    hours: ['Monday to Saturday: 9:00 am – 7:00 pm', 'Sunday: Closed'],
  },
]

const mapsLink = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `RAW A1 Bike Point ${address}`
  )}`

// Row icons share one style (24px grid, 2px stroke, round caps).
// Each is used once per card, so the pin no longer appears twice.
const ICONS = {
  address: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  ),
  hours: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
}

function RowIcon({ name }) {
  return (
    <span className="locations__row-icon">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        {ICONS[name]}
      </svg>
    </span>
  )
}

function Locations() {
  return (
    <section id="locations" className="locations" aria-labelledby="locations-title">
      <div className="container">
        {/* Heading */}
        <div className="locations__header">
          <p className="locations__eyebrow">Our locations</p>

          {/* Plain heading: no single-word highlight */}
          <h2 id="locations-title" className="locations__title">
            Find your nearest RAW workshop
          </h2>

          <p className="locations__intro">
            Visit us at Shimpoli or Gorai. Call ahead or get directions to the
            workshop closest to you.
          </p>
        </div>

        {/* Cards */}
        <ul className="locations__grid">
          {LOCATIONS.map((loc) => (
            <li key={loc.id} id={loc.id} className="locations__card">
              {/* Card heading (the extra pin badge was removed: it repeated
                  the address icon directly below it) */}
              <div className="locations__card-head">
                <h3 className="locations__name">{loc.name}</h3>
                <p className="locations__brand">RAW – A1 BIKE POINT</p>
              </div>

              {/* Details */}
              <address className="locations__details">
                <div className="locations__row">
                  <RowIcon name="address" />
                  <div>
                    <p className="locations__label">Address</p>
                    <p className="locations__value">{loc.address}</p>
                  </div>
                </div>

                <div className="locations__row">
                  <RowIcon name="phone" />
                  <div>
                    <p className="locations__label">Phone</p>
                    <p className="locations__value">
                      <a className="locations__phone" href={loc.phoneHref}>
                        {loc.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="locations__row">
                  <RowIcon name="hours" />
                  <div>
                    <p className="locations__label">Opening hours</p>
                    {loc.hours.map((line) => (
                      <p key={line} className="locations__value">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </address>

              {/* Actions */}
              <div className="locations__actions">
                <a
                  className="locations__btn locations__btn--primary"
                  href={mapsLink(loc.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get directions to the ${loc.name} workshop (opens in a new tab)`}
                >
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
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get directions
                </a>
                <a
                  className="locations__btn locations__btn--secondary"
                  href={loc.phoneHref}
                  aria-label={`Call RAW ${loc.name}`}
                >
                  Call RAW
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Locations
