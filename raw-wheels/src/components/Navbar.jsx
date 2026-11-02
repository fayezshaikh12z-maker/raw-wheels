import { useState, useEffect, useRef } from 'react'
import logo from '../assets/raw-logo-transparent.png'
import './Navbar.css'

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why RAW', href: '#why-raw' },
    { label: 'Locations', href: '#locations', dropdown: true },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
]

// TODO: point these at #shimpoli / #gorai once those blocks have ids
const LOCATIONS = [
    { name: 'Shimpoli', href: '#locations' },
    { name: 'Gorai', href: '#locations' },
]

// Must match the CSS breakpoint where the desktop layout starts
const DESKTOP_QUERY = '(min-width: 1025px)'
const isDesktop = () => window.matchMedia(DESKTOP_QUERY).matches

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeId, setActiveId] = useState('home')
    const navRef = useRef(null)
    const lastPointer = useRef('mouse')

    const closeAll = () => {
        setMenuOpen(false)
        setDropdownOpen(false)
    }

    // Close menus on outside click or Escape key
    useEffect(() => {
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) closeAll()
        }
        const handleKey = (e) => {
            if (e.key === 'Escape') closeAll()
        }
        document.addEventListener('mousedown', handleClick)
        document.addEventListener('keydown', handleKey)
        return () => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('keydown', handleKey)
        }
    }, [])

    // Reset menu state when the viewport crosses the desktop breakpoint
    useEffect(() => {
        const mql = window.matchMedia(DESKTOP_QUERY)
        const onChange = () => closeAll()
        mql.addEventListener('change', onChange)
        return () => mql.removeEventListener('change', onChange)
    }, [])

    // Lock page scroll while the mobile menu is open
    useEffect(() => {
        if (!menuOpen) return
        const previous = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = previous
        }
    }, [menuOpen])

    // Slightly stronger shadow once the page has scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Highlight the link for the section currently in view
    useEffect(() => {
        if (!('IntersectionObserver' in window)) return
        const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean)
        if (!sections.length) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -55% 0px' }
        )
        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    // Mouse users get hover-to-open; touch and keyboard use click/Enter
    const handlePointerEnter = (e) => {
        if (e.pointerType === 'mouse' && isDesktop()) setDropdownOpen(true)
    }
    const handlePointerLeave = (e) => {
        if (e.pointerType === 'mouse' && isDesktop()) setDropdownOpen(false)
    }
    const handleDropdownClick = (e) => {
        // A real mouse click on desktop keeps the hover-opened menu open
        if (e.detail > 0 && lastPointer.current === 'mouse' && isDesktop()) {
            setDropdownOpen(true)
            return
        }
        setDropdownOpen((open) => !open)
    }
    // Close the dropdown when keyboard focus leaves it
    const handleDropdownBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setDropdownOpen(false)
    }

    return (
        <div className="navbar-wrap">
            <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`} ref={navRef}>
                {/* Logo: original artwork, proportional resize only */}
                <a
                    className="navbar__logo"
                    href="#home"
                    aria-label="RAW – A1 BIKE POINT, home"
                    onClick={closeAll}
                >
                    <img
                        src={logo}
                        alt="RAW – A1 BIKE POINT, Repair of All Wheels"
                        width="64"
                        height="64"
                    />
                </a>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span></span>
                </button>

                {/* Navigation */}
                <nav
                    id="primary-navigation"
                    className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}
                    aria-label="Primary"
                >
                    <ul className="navbar__list">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeId === link.href.slice(1)
                            const current = isActive ? 'location' : undefined

                            return link.dropdown ? (
                                <li
                                    key={link.label}
                                    className={`navbar__item navbar__item--dropdown ${dropdownOpen ? 'is-open' : ''}`}
                                    onPointerEnter={handlePointerEnter}
                                    onPointerLeave={handlePointerLeave}
                                    onBlur={handleDropdownBlur}
                                >
                                    <button
                                        type="button"
                                        className="navbar__link navbar__link--button"
                                        aria-expanded={dropdownOpen}
                                        aria-controls="locations-menu"
                                        aria-current={current}
                                        onPointerDown={(e) => {
                                            lastPointer.current = e.pointerType
                                        }}
                                        onClick={handleDropdownClick}
                                    >
                                        {link.label}
                                        <svg
                                            className="navbar__chevron"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>

                                    <ul className="navbar__dropdown" id="locations-menu">
                                        {LOCATIONS.map((loc) => (
                                            <li key={loc.name}>
                                                <a
                                                    className="navbar__dropdown-link"
                                                    href={loc.href}
                                                    onClick={closeAll}
                                                >
                                                    <svg
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                                        <circle cx="12" cy="10" r="3" />
                                                    </svg>
                                                    {loc.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={link.label} className="navbar__item">
                                    <a
                                        className="navbar__link"
                                        href={link.href}
                                        aria-current={current}
                                        onClick={closeAll}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    {/* Book button inside the menu on mobile */}
                    <a className="navbar__book navbar__book--mobile" href="#contact" onClick={closeAll}>
                        Book a service
                    </a>
                </nav>

                {/* Book button on desktop */}
                <a className="navbar__book navbar__book--desktop" href="#contact">
                    Book a service
                </a>
            </header>
        </div>
    )
}

export default Navbar
