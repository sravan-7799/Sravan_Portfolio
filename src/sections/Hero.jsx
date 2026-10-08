import Navbar from '../components/Navbar'
import designerImage from '../assets/images/Sravan_Designer.png'
import coderImage from '../assets/images/Sravan_Coder.png'

const designerSkills = [
  'UI/UX Design',
  'Visual Design',
  'Creative Posts',
  'Reels & Videos',
  'Web Design',
]

const coderSkills = [
  'Frontend Development',
  'React',
  'Responsive Web',
  'DSA',
  'SQL',
]

function Hero() {
  return (
    <section id="home" className="hero">
      <Navbar />

      <div className="hero__content container">
        <div className="hero__intro">
          <p className="hero__eyebrow">HI, I'M</p>

          <h1 className="hero__name">
            SRAVAN
            <br />
            KUMAR
          </h1>
        </div>

        <div className="hero__split">
          <div className="hero__side hero__side--designer">
            <div className="hero__image-wrap">
              <img
                src={designerImage}
                alt="Sravan Kumar Designer"
                className="hero__image"
              />
            </div>

            <div className="hero__side-info">
              <span className="hero__label">Designer</span>

              <div className="hero__skills">
                {designerSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero__side hero__side--coder">
            <div className="hero__image-wrap">
              <img
                src={coderImage}
                alt="Sravan Kumar Coder"
                className="hero__image"
              />
            </div>

            <div className="hero__side-info">
              <span className="hero__label">Coder</span>

              <div className="hero__skills">
                {coderSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>

          <a href="#about" className="btn btn--secondary">
            About Me
          </a>
        </div>

        <div className="hero__socials">
          <a
            href="https://github.com/sravan-7799"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <span>·</span>

          <a
            href="https://www.linkedin.com/in/sravan9"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <span>·</span>

          <a href="mailto:sravankumarraikindi@gmail.com">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero