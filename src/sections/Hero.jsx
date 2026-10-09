import { useState } from 'react'
import Navbar from '../components/Navbar'
import designerImage from '../assets/images/Sravan_Designer.jpg'
import coderImage from '../assets/images/Sravan_Coder.jpg'

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
  const [activeSide, setActiveSide] = useState(null)

  const handleHeroMouseMove = (event) => {
    // Keep touch devices on the default split view.
    if (event.pointerType && event.pointerType !== 'mouse') return

    const bounds = event.currentTarget.getBoundingClientRect()
    const midpoint = bounds.left + bounds.width / 2
    const nextSide = event.clientX < midpoint ? 'designer' : 'coder'

    setActiveSide((currentSide) =>
      currentSide === nextSide ? currentSide : nextSide
    )
  }

  const handleHeroMouseLeave = () => {
    setActiveSide(null)
  }

  return (
    <section id="home" className="hero">
      <Navbar />

      <div className="hero__content container">
        <div className="hero__intro">
          <p className="hero__eyebrow">DESIGN MEETS DEVELOPMENT</p>
          <h1 className="hero__name">SRAVAN KUMAR</h1>
        </div>

        <div
          className="hero__showcase"
          onPointerMove={handleHeroMouseMove}
          onPointerLeave={handleHeroMouseLeave}
        >
          <div className="hero__description hero__description--designer">
            <span className="hero__label">Designer</span>

            <h2>Designing experiences that feel simple and meaningful.</h2>

            <p>
              I create thoughtful interfaces, visual designs, creative posts,
              and engaging digital experiences.
            </p>

            <div className="hero__skills">
              {designerSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div
            className={`hero__portrait ${
              activeSide ? `hero__portrait--${activeSide}` : ''
            }`}
          >
            <img
              src={designerImage}
              alt="Sravan Kumar as a designer"
              className="hero__image hero__image--designer"
              draggable="false"
            />

            <img
              src={coderImage}
              alt="Sravan Kumar as a coder"
              className="hero__image hero__image--coder"
              draggable="false"
            />

            <div
              className="hero__portrait-divider"
              aria-hidden="true"
            />
          </div>

          <div className="hero__description hero__description--coder">
            <span className="hero__label">&lt;Coder /&gt;</span>

            <h2>Building clean, responsive, and useful websites.</h2>

            <p>
              I turn ideas into interactive web experiences with a focus on
              frontend development, usability, and detail.
            </p>

            <div className="hero__skills">
              {coderSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
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
            GitHub ↗
          </a>

          <span>·</span>

          <a
            href="https://www.linkedin.com/in/sravan9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <span>·</span>

          <a href="mailto:sravankumarraikindi@gmail.com">
            Email ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero