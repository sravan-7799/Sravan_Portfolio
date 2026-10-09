
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__frame">
        <div className="contact__decoration contact__decoration--top" />
        <div className="contact__decoration contact__decoration--bottom" />

        <div className="contact__content">
          <div className="contact__left">
            <div className="contact__eyebrow">
              <span className="contact__eyebrow-line" />
              LET’S CONNECT
            </div>

            <h2 className="contact__title">
              LET’S BUILD
              <br />
              SOMETHING
              <br />
              <span>MEANINGFUL</span> TOGETHER.
            </h2>

            <p className="contact__description">
              I’m always open to exciting opportunities, collaborations,
              and interesting ideas. Whether it’s a project, a role, or
              just a conversation, feel free to reach out!
            </p>

            <a
              href="mailto:sravankumarraikindi@gmail.com"
              className="contact__button"
            >
              <span aria-hidden="true">→</span>
              Start a Conversation
            </a>
          </div>

          <div className="contact__right">
            <a
              href="mailto:sravankumarraikindi@gmail.com"
              className="contact__item"
            >
              <div className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="contact__item-text">
                <span className="contact__item-label">EMAIL</span>
                <span className="contact__item-value">
                  sravankumarraikindi@gmail.com
                </span>
              </div>
            </a>

            <div className="contact__item">
              <div className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5a7.5 7.5 0 0 0-7.5 7.5c0 5.2 7.5 12 7.5 12s7.5-6.8 7.5-12A7.5 7.5 0 0 0 12 2.5Zm0 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
              </div>

              <div className="contact__item-text">
                <span className="contact__item-label">LOCATION</span>
                <span className="contact__item-value">
                  Hyderabad, Telangana, India
                </span>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/sravan9/"
              target="_blank"
              rel="noreferrer"
              className="contact__item"
            >
              <div className="contact__icon contact__icon--linkedin">
                in
              </div>

              <div className="contact__item-text">
                <span className="contact__item-label">LINKEDIN</span>
                <span className="contact__item-value">
                  linkedin.com/in/sravan9
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
