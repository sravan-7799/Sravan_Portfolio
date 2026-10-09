import easeMyNestDesigns from '../assets/images/Ease my nest_designs.png'
import publicationImage from '../assets/images/Publication.png'
import eCellImage from '../assets/images/E-Cell_Sharda.png'
import wpmcImage from '../assets/images/WPMC.jpg'

const achievements = [
  {
    number: '01',
    title: 'My Designs @ Ease My Nest',
    description:
      'Designed social media creatives, reels and brand assets for Ease My Nest, contributing to a significant improvement in online visibility and engagement across platforms.',
    button: 'View Designs',
    link: 'https://www.instagram.com/easemynest?stkn=cHF3dGIyeHFhN21j',
    image: easeMyNestDesigns,
  },
  {
    number: '02',
    title: 'Research & Publications',
    description:
      'Presented and published a research paper at an IEEE conference on GAN-based data augmentation and Explainable AI for brain tumor segmentation.',
    button: 'View Paper',
    link: 'https://doi.org/10.1109/ICDCA69396.2026.11620325',
    image: publicationImage,
  },
  {
    number: '03',
    title: 'E - Cell, Sharda University',
    description:
      'Served as Assistant Vice - President and Social Media Lead at E-Cell, Sharda University (Mar 2024 - Mar 2025), organising events, building student engagement and promoting the startup ecosystem.',
    button: 'Know more',
    image: eCellImage,
  },
  {
    number: '04',
    title: 'WPMC 2024 Workshop Winner',
    description:
      'Won 1st Position in the Tutorial & Danish Industry Challenge on Multi Business Model Innovation (MBMI) organized by CTIF Global Capsule (CGC), Denmark, as part of WPMC 2024 at Sharda University, Greater Noida, India.',
    button: 'Know more',
    link: 'https://lnkd.in/p/g3aCc3KB',
    image: wpmcImage,
  },
]

function BeyondCode() {
  return (
    <section id="beyond-code" className="beyond-code section">
      <div className="beyond-code__container container">

        <div className="beyond-code__header">
          <div>
            <span className="beyond-code__label">
              BEYOND THE CODE
            </span>

            <h2 className="beyond-code__title">
              Achievements
              <br />
              <span>That Shape Me</span>
            </h2>
          </div>

          <p className="beyond-code__intro">
            Beyond technical skills, I actively explore opportunities
            in research, leadership, competitions and design —
            experiences that have shaped my growth and perspective.
          </p>
        </div>

        <div className="beyond-code__grid">
          {achievements.map((achievement) => (
            <article
              className="beyond-code__card"
              key={achievement.number}
            >
              <div className="beyond-code__content">

                <div className="beyond-code__top">
                  <span className="beyond-code__number">
                    {achievement.number}
                  </span>

                  <span className="beyond-code__line" />
                </div>

                <h3 className="beyond-code__name">
                  {achievement.title}
                </h3>

                <p className="beyond-code__description">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noreferrer"
                    className="beyond-code__button"
                  >
                    <span>{achievement.button}</span>
                    <span>↗</span>
                  </a>
                )}

                {!achievement.link && (
                  <span className="beyond-code__button beyond-code__button--disabled">
                    <span>{achievement.button}</span>
                  </span>
                )}

              </div>

              <div className="beyond-code__image-wrapper">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="beyond-code__image"
                />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BeyondCode