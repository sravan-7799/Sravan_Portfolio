import AboutImage from '../assets/images/Sravan_about.png'

const aboutDetails = [
  {
    label: 'B.Tech',
    value: 'Computer Science & Engineering',
  },
  {
    label: 'Based in',
    value: 'Hyderabad, India',
  },
  {
    label: 'Focus',
    value: 'Design & Development',
  },
  {
    label: 'Core',
    value: 'Frontend & UI',
  },
]

function About() {
  return (
    <section id="about" className="about section">
      <div className="about__container container">
        <div className="about__content">
          <span className="about__label">ABOUT ME</span>

          <h2 className="about__title">
            THE STORY
            <br />
            <span>SO FAR</span>
          </h2>

          <div className="about__text">
            <p>
              I’m Sravan Kumar, a Computer Science graduate interested in
              building meaningful digital experiences through design and
              development.
            </p>

            <p>
              I enjoy working across the visual and technical sides of a
              product — from creating interfaces and visual experiences to
              building responsive web experiences.
            </p>
          </div>

          <div className="about__details">
            {aboutDetails.map((detail) => (
              <div className="about__detail" key={detail.label}>
                <span className="about__detail-label">
                  {detail.label}
                </span>

                <span className="about__detail-value">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          <a href="#designer-coder" className="btn btn--primary about__button">
            More About Me
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about__visual">
          <div className="about__shape about__shape--one" />
          <div className="about__shape about__shape--two" />

          <div className="about__image-frame">
            <img
              src={AboutImage}
              alt="Sravan Kumar working on a laptop"
              className="about__image"
            />
          </div>

          <div className="about__note">
            <span>Design</span>
            <span>Build</span>
            <span>Learn</span>
            <span>Repeat</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About