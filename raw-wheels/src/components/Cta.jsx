import './Cta.css';

export default function Cta({ bookingHref = '#contact' }) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta__banner">
          {/* The gold accent bar is now drawn in CSS (.cta__content::before),
              so the extra decorative <span> is no longer needed. */}
          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">
              Book your motorcycle service at Shimpoli or Gorai
            </h2>
          </div>

          <a href={bookingHref} className="cta__button">
            Book a service
          </a>
        </div>
      </div>
    </section>
  );
}
