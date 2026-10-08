import brainTumorImage from '../assets/images/Brain Tumor Segmentation_project.png'
import ataryoImage from '../assets/images/Ataryo_project.png'
import smartLearnImage from '../assets/images/SmartLearn Analytics Dashboard_project.png'
import algoSpotImage from '../assets/images/AlgoSpot Pathfinding Visualizer_project.png'

const projects = [
  {
    number: '01',
    title: 'Brain Tumor Segmentation',
    subtitle: 'using GAN & XAI',
    description:
      'An AI system for brain tumor segmentation from multi-modal MRI images using 3D U-Net, GAN enhancement and Grad-CAM for model interpretability.',
    tags: ['Python', '3D U-Net', 'GAN', 'Grad-CAM'],
    link: 'https://github.com/Praneetha0422/xai-gan-medical-imaging',
    type: 'Research',
    image: brainTumorImage,
  },
  {
    number: '02',
    title: 'Ataryo',
    subtitle: 'Client Website',
    description:
      'A responsive client website designed and developed with a focus on clean UI/UX, intuitive navigation and visually engaging frontend sections.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    link: 'https://www.ataryo.com/',
    type: 'Client Project',
    image: ataryoImage,
  },
  {
    number: '03',
    title: 'Smart Learning',
    subtitle: 'Analytics Platform',
    description:
      'An interactive EdTech platform for analyzing, visualizing and predicting student academic performance using machine learning.',
    tags: ['Python', 'Streamlit', 'Scikit-learn', 'Plotly'],
    link: 'https://smart-learning-analytics-platform-kvsqfebxypchlchknl6spm.streamlit.app/',
    type: 'ML / EdTech',
    image: smartLearnImage,
  },
  {
    number: '04',
    title: 'AlgoSpot',
    subtitle: 'Algorithm Visualizer',
    description:
      'An interactive web application that visually demonstrates pathfinding algorithms and helps users understand how different algorithms explore a grid.',
    tags: ['React.js', 'JavaScript', 'DSA', 'CSS'],
    link: 'https://algospot.onrender.com/',
    type: 'Frontend / DSA',
    image: algoSpotImage,
  },
]

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="projects__container container">

        <div className="projects__header">
          <div>
            <span className="projects__label">
              FEATURED PROJECTS
            </span>

            <h2 className="projects__title">
              Projects
              <br />
              <span>I’ve Built</span>
            </h2>
          </div>

          <p className="projects__intro">
            A selection of projects where I combined design,
            development and problem-solving to build
            meaningful digital experiences.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              className="projects__card"
              key={project.number}
            >
              <div className="projects__preview">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects__image"
                />

                <span className="projects__preview-number">
                  {project.number}
                </span>

                <span className="projects__preview-type">
                  {project.type}
                </span>
              </div>

              <div className="projects__content">
                <div className="projects__content-top">
                  <div>
                    <h3 className="projects__name">
                      {project.title}
                    </h3>

                    <p className="projects__subtitle">
                      {project.subtitle}
                    </p>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__arrow"
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </a>
                </div>

                <p className="projects__description">
                  {project.description}
                </p>

                <div className="projects__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects