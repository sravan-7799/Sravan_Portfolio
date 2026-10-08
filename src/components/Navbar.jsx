const logoModules = import.meta.glob(
  '../assets/images/SK_Logo.{png,svg,webp,jpg,jpeg}',
  {
    eager: true,
    import: 'default',
  }
)

const logoSrc = Object.values(logoModules)[0]

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner container" aria-label="Primary">
        <a href="#home" className="navbar__brand">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="SK"
              className="brand-logo"
            />
          ) : null}
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link text-nav"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar