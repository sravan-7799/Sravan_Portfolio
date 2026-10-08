const education = [
  {
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    institution: 'Sharda University',
    start: '2022',
    end: '2026',
  },
  {
    degree: 'Class 12',
    field: '',
    institution: 'Narayana Junior College',
    start: '2019',
    end: '2021',
  },
  {
    degree: 'Class 10',
    field: '',
    institution: 'Noble High School',
    start: '2018',
    end: '2019',
  },
]

function Education() {
  return (
    <section id="education" className="education section">
      <div className="education__container container">
        <div className="education__header">
          <span className="education__label">
            EDUCATION
          </span>

          <h2 className="education__title">
            THE FOUNDATION
            <br />
            <span>BEHIND THE WORK</span>
          </h2>
        </div>

        <div className="education__timeline">
          {education.map((item, index) => (
            <article
              className="education__item"
              key={`${item.degree}-${item.institution}`}
            >
              <div className="education__number">
                0{index + 1}
              </div>

              <div className="education__content">
                <div className="education__period">
                  {item.start} — {item.end}
                </div>

                <h3 className="education__degree">
                  {item.degree}
                </h3>

                {item.field && (
                  <p className="education__field">
                    {item.field}
                  </p>
                )}

                <p className="education__institution">
                  {item.institution}
                </p>
              </div>

              <div className="education__marker" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education