
import skLogo from '../assets/images/SK_Logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__identity">
          <a href="#home" className="footer__brand" aria-label="Back to home">
            <img src={skLogo} alt="SK logo" />
          </a>

          <p className="footer__tagline">
            Design thoughtfully. Build meaningfully.
          </p>
        </div>

        <nav className="footer__socials" aria-label="Social links">
          <a
            href="https://github.com/sravan-7799"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sravan9/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn ↗
          </a>

          <a
            href="mailto:sravankumarraikindi@gmail.com"
            aria-label="Email"
          >
            Email ↗
          </a>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} Sravan Kumar. All rights reserved.
        </span>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
