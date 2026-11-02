import React from 'react';
import logo from '../assets/raw-logo-transparent.png';
import './Footer.css';

const EXPLORE_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why RAW', href: '#why-raw' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

/*
  Contact details are the same placeholders used in the Locations section.
  Replace with the verified address and phone numbers before launch.
*/
const LOCATIONS = [
  {
    id: 'shimpoli',
    name: 'Shimpoli',
    address: 'Shop No. 00, Sample Road, Shimpoli, Mumbai – 400000',
    phone: '09892400563',
  },
  {
    id: 'gorai',
    name: 'Gorai',
    address: 'Shop No. 00, Sample Lane, Gorai, Mumbai – 400000',
    phone: '09892400563',
  },
];

/*
  Social links are PLACEHOLDERS. Replace each href with RAW's real
  profile URL before launch (remove any platform RAW doesn't use).
*/
const SOCIALS = [
  { id: 'instagram', label: 'RAW on Instagram', href: 'https://www.instagram.com/' },
  { id: 'facebook', label: 'RAW on Facebook', href: 'https://www.facebook.com/' },
  { id: 'linkedin', label: 'RAW on LinkedIn', href: 'https://www.linkedin.com/' },
];

function SocialIcon({ name }) {
  // All three icons share one outline style (stroke, round caps), so they
  // look consistent and stay crisp. The old LinkedIn icon was a filled,
  // hand-traced shape whose tiny curves blurred at 20px.
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: 'false',
  };

  if (name === 'instagram') {
    return (
      <svg {...common}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }

  if (name === 'facebook') {
    return (
      <svg {...common}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const toTel = (phone) => `tel:${phone.replace(/[^+\d]/g, '')}`;

/* Opens the address in Google Maps – no extra data needed */
const toDirections = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            {/* Transparent logo on navy, same treatment as the navbar */}
            <a href="#home" className="footer__logo-link">
              <img
                src={logo}
                alt="RAW – A1 BIKE POINT, back to top"
                className="footer__logo"
                width="120"
                height="120"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="footer__tagline">
              We Love Your Motorcycle As Much As You Do
            </p>
            <p className="footer__descriptor">
              Multi-brand two-wheeler service centre. Repair of All Wheels.
            </p>

            <ul className="footer__social" aria-label="Social media">
              {SOCIALS.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    className="footer__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                  >
                    <SocialIcon name={social.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <nav className="footer__col" aria-labelledby="footer-explore">
            <h3 className="footer__heading" id="footer-explore">Explore</h3>
            <ul className="footer__list">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations */}
          <div className="footer__col footer__col--locations">
            <h3 className="footer__heading">Our workshops</h3>
            <ul className="footer__list footer__list--locations">
              {LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <p className="footer__location-name">{loc.name}</p>
                  <address className="footer__address">{loc.address}</address>
                  <div className="footer__actions">
                    <a
                      href={toTel(loc.phone)}
                      className="footer__link"
                      aria-label={`Call RAW ${loc.name} on ${loc.phone}`}
                    >
                      {loc.phone}
                    </a>
                    <a
                      href={toDirections(loc.address)}
                      className="footer__link footer__link--accent"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Get directions to RAW ${loc.name} (opens in a new tab)`}
                    >
                      Get directions <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="footer__col footer__col--hours">
            <h3 className="footer__heading">Opening hours</h3>
            <ul className="footer__list footer__list--hours">
              <li>
                <p className="footer__hours-label">Monday to Saturday</p>
                <p className="footer__hours-value">9:00 am – 7:00 pm</p>
              </li>
              <li>
                <p className="footer__hours-label">Sunday</p>
                <p className="footer__hours-value">Closed</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar – full-width band in Dark Navy */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {year} RAW – A1 BIKE POINT. All rights reserved.
          </p>
          <ul className="footer__legal">
            <li>
              <a href="/privacy-policy" className="footer__link footer__link--small">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="/terms" className="footer__link footer__link--small">
                Terms and conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
