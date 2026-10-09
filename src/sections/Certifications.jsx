const certifications = [
  {
    number: '01',
    provider: 'Udemy',
    year: '2023',
    title: 'Web Development Bootcamp',
    description:
      'Covered HTML5, CSS3, responsive web design, JavaScript fundamentals, DOM manipulation and website deployment.',
    link:
      'https://www.udemy.com/certificate/UC-2f54f6a0-3d83-4f9c-a782-0b2104632e37/',
  },
  {
    number: '02',
    provider: 'Oracle Academy',
    year: '2024',
    title: 'Database Foundations',
    description:
      'Covered database fundamentals, relational database concepts, SQL querying and an introduction to Oracle Database technologies.',
    link:
      'https://drive.google.com/file/d/1yyU3DziY-ddfGbXzmx3NhbTtoHp8ePRB/view?usp=drive_link',
  },
  {
    number: '03',
    provider: 'Oracle Academy',
    year: '2023',
    title: 'Java Foundations',
    description:
      'Covered Java programming fundamentals, object-oriented programming, classes, objects, methods, inheritance and problem-solving.',
    link:
      'https://drive.google.com/file/d/1QUuxAa4u86ymZIuwVcv8kMnnjkcN-ysm/view?usp=drive_link',
  },
  {
    number: '04',
    provider: 'NPTEL / IIT Kharagpur',
    year: '2024',
    title: 'Roadmap for Patent Creation',
    description:
      'Covered patent fundamentals, intellectual property concepts, patent searching, prior-art analysis and patent documentation.',
    duration: '8 weeks',
    score: '65% — Elite',
    link:
      'https://drive.google.com/file/d/1ji8dKDhu_YhVdKjhmzmGobjuf2D1D7W1/view?usp=drive_link',
  },
  {
    number: '05',
    provider: 'NPTEL / IIT Roorkee',
    year: '2026',
    title: 'Leadership and Team Effectiveness',
    score: '71% — Elite',
    link:
      'https://drive.google.com/file/d/1THsmz4sumdFfne3Uwqh6DKlpOcB3ygQu/view?usp=drive_link',
  },
  {
    number: '06',
    provider: 'NPTEL / IIT Kharagpur',
    year: '2024',
    title: 'Corporate Social Responsibility',
    score: '55%',
    link:
      'https://drive.google.com/file/d/1d6yJwWBqu0MGz875U0mLsQkdK1405mH3/view?usp=drive_link',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="certifications__container container">

        <div className="certifications__header">
          <div>
            <span className="certifications__label">
              CERTIFICATIONS & CONTINUOUS LEARNING
            </span>

            <h2 className="certifications__title">
              The foundations
              <br />
              <span>behind my growth.</span>
            </h2>
          </div>

          <p className="certifications__intro">
            Certifications complement my hands-on projects and
            continuous learning. They help me strengthen core
            concepts, explore new technologies and stay updated
            with industry-relevant skills.
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.map((certification) => (
            <article
              className="certifications__card"
              key={certification.number}
            >
              <div className="certifications__icon">
                <svg
                  viewBox="0 0 64 64"
                  width="56"
                  height="56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Certificate paper */}
                  <rect
                    x="6"
                    y="9"
                    width="40"
                    height="35"
                    rx="3"
                    fill="#EEEBE4"
                    stroke="#59604A"
                    strokeWidth="2"
                  />

                  {/* Certificate text */}
                  <path
                    d="M14 19H36M14 26H33M14 33H29"
                    stroke="#59604A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Ribbon tails */}
                  <path
                    d="M39 39L36 58L44 53L52 58L49 39"
                    fill="#59604A"
                  />

                  {/* Award medal */}
                  <circle
                    cx="44"
                    cy="35"
                    r="11"
                    fill="#E8B44C"
                    stroke="#59604A"
                    strokeWidth="2"
                  />

                  <circle
                    cx="44"
                    cy="35"
                    r="6"
                    fill="#F7F6F2"
                    stroke="#59604A"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="certifications__meta">
                <span>{certification.provider}</span>
                <span>·</span>
                <span>{certification.year}</span>
              </div>

              <h3 className="certifications__name">
                {certification.title}
              </h3>

              {certification.description && (
                <p className="certifications__description">
                  {certification.description}
                </p>
              )}

              {certification.duration && (
                <div className="certifications__duration">
                  {certification.duration}
                </div>
              )}

              <div className="certifications__bottom">
                {certification.score && (
                  <span className="certifications__score">
                    {certification.score}
                  </span>
                )}

                <a
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                  className="certifications__button"
                >
                  <span>View certificate</span>
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certifications