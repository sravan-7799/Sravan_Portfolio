import internshipStudioLogo from '../assets/images/internship_studio_logo.jpg'
import easeMyNestLogo from '../assets/images/Ease My Nest_logo.jpg'

const experiences = [
  {
    number: '01',
    company: 'Ease My Nest',
    role: 'Digital Marketing Intern',
    period: 'JAN 2025 — JUN 2025',
    logo: easeMyNestLogo,
    points: [
      'Conducted competitor analysis and implemented data-driven strategies that improved social media visibility and steadily increased follower engagement.',
      'Created and scheduled visually engaging content, contributing to significant growth in reel views and improving brand consistency through targeted campaigns and optimized posting.',
    ],
  },
  {
    number: '02',
    company: 'Internship Studio',
    role: 'Machine Learning Intern',
    period: 'JUN 2024 — JUL 2024',
    logo: internshipStudioLogo,
    points: [
      'Developed and optimized machine learning models to predict YouTube ad view performance using engagement metrics, improving prediction accuracy through data preprocessing and feature engineering.',
      'Applied Decision Trees, Linear Regression, Random Forest and XGBoost, tuning hyperparameters and evaluating performance with MAE and RMSE.',
      'Collaborated with developers to integrate insights into decision-making tools.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="experience__container container">

        <div className="experience__header">
          <div>
            <span className="experience__label">
              INTERNSHIP
            </span>

            <h2 className="experience__title">
              Hands-on
              <br />
              <span>Experience</span>
            </h2>
          </div>

          <p className="experience__intro">
            Real-world experience that helped me apply my
            skills, learn new technologies and work on
            meaningful projects.
          </p>
        </div>

        <div className="experience__grid">
          {experiences.map((experience) => (
            <article
              className="experience__card"
              key={experience.number}
            >
              <div className="experience__card-top">
                <span className="experience__number">
                  {experience.number}
                </span>

                <span className="experience__period">
                  {experience.period}
                </span>
              </div>

              <div className="experience__company-row">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="experience__logo"
                />

                <div className="experience__card-heading">
                  <div className="experience__company">
                    {experience.company}
                  </div>

                  <div className="experience__role">
                    {experience.role}
                  </div>
                </div>
              </div>

              <ul className="experience__points">
                {experience.points.map((point) => (
                  <li key={point}>
                    <span className="experience__bullet" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience