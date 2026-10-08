const skillGroups = [
  {
    number: '01',
    title: 'Programming Languages',
    skills: ['C', 'C++', 'JavaScript', 'SQL'],
  },
  {
    number: '02',
    title: 'Web Development',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'MongoDB',
      'MySQL',
    ],
  },
  {
    number: '03',
    title: 'Machine Learning / Data',
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'TensorFlow',
    ],
  },
  {
    number: '04',
    title: 'Design & Creative',
    skills: [
      'Figma',
      'Canva',
      'VN Video Editor',
      'CapCut',
    ],
  },
  {
    number: '05',
    title: 'Tools & Platforms',
    skills: [
      'GitHub',
      'VS Code',
      'Google Colab',
      'MS Excel',
    ],
  },
  {
    number: '06',
    title: 'Core Skills',
    skills: [
      'Data Structures & Algorithms',
      'OOPs',
      'DBMS',
      'Problem Solving',
      'Logic Building',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="skills__container container">

        <div className="skills__header">
          <div>
            <span className="skills__label">
              SKILLS & TECHNOLOGIES
            </span>

            <h2 className="skills__title">
              Tools I Work
              <br />
              <span>With</span>
            </h2>
          </div>

          <p className="skills__intro">
            A collection of tools and technologies I use to
            build, design, learn and bring ideas to life across
            different domains.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article
              className="skills__card"
              key={group.number}
            >
              <div className="skills__card-header">
                <h3 className="skills__card-title">
                  {group.title}
                </h3>

                <span className="skills__number">
                  {group.number}
                </span>
              </div>

              <div className="skills__list">
                {group.skills.map((skill) => (
                  <span
                    className="skills__pill"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills