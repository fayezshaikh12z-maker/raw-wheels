import './Testimonials.css';

/*
  IMPORTANT (brand guideline: "publish genuine ratings only when verified"):
  The reviews below are DUMMY content for design purposes only.
  Replace them with real, verified customer reviews (e.g. from Google)
  before launch. Keep the quote text exactly as the customer wrote it,
  and use their real name/area. Remove the dummy names and quotes entirely
  if verified reviews are not ready: an empty section is better than
  unverified reviews.
*/
const REVIEWS = [
  {
    id: 1,
    rating: 5,
    quote:
      'They inspected my bike first and shared the estimate before starting any work. Nothing was done without my approval, and the bike was ready on time.',
    name: 'Rohan Patil',
    meta: 'Shimpoli',
  },
  {
    id: 2,
    rating: 5,
    quote:
      'Very helpful technicians who explained exactly what my motorcycle needed. The engine runs smoother now and the handover was clear and simple.',
    name: 'Sneha Deshmukh',
    meta: 'Gorai',
  },
  {
    id: 3,
    rating: 5,
    quote:
      'Good workshop with proper equipment. They fixed my brake and chain issues properly and kept me updated throughout the service.',
    name: 'Amit Shah',
    meta: 'Shimpoli',
  },
];

// Filled stars are solid gold; empty stars are outlined, so the rating is not
// shown by colour alone. The accessible label carries the exact rating.
function Stars({ rating }) {
  return (
    <div
      className="testimonials__stars"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          className={
            n <= rating
              ? 'testimonials__star'
              : 'testimonials__star testimonials__star--empty'
          }
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ bookingHref = '#contact' }) {
  return (
    <section
      className="testimonials"
      id="reviews"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <header className="testimonials__header">
          {/* Same eyebrow as the other sections (gold bar drawn in CSS) */}
          <p className="testimonials__eyebrow">Reviews</p>

          {/* Plain heading: no single-word highlight */}
          <h2 id="testimonials-title" className="testimonials__title">
            What our customers say
          </h2>

          <p className="testimonials__subtitle">
            Feedback from riders who have brought their motorcycles to RAW –
            A1 BIKE POINT.
          </p>
        </header>

        <ul className="testimonials__grid">
          {REVIEWS.map((review) => (
            <li key={review.id} className="testimonials__item">
              <figure className="testimonials__card">
                <Stars rating={review.rating} />

                <blockquote className="testimonials__quote">
                  “{review.quote}”
                </blockquote>

                <figcaption className="testimonials__author">
                  <span className="testimonials__avatar" aria-hidden="true">
                    {review.name.charAt(0)}
                  </span>
                  <span className="testimonials__author-text">
                    <span className="testimonials__name">{review.name}</span>
                    <span className="testimonials__meta">{review.meta}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="testimonials__cta">
          <p className="testimonials__cta-text">
            Ready to get your motorcycle serviced?
          </p>
          <a href={bookingHref} className="testimonials__button">
            Book your motorcycle service
          </a>
        </div>
      </div>
    </section>
  );
}
