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

function DesignerCoder() {
  return (
    <section id="designer-coder" className="designer-coder section">
      <div className="designer-coder__container container">
        <div className="designer-coder__header">
          <span className="designer-coder__label">
            MY APPROACH
          </span>
        </div>

        <div className="designer-coder__layout">
          {/* Designer */}
          <div className="designer-coder__side designer-coder__side--designer">
            <h2>Designer</h2>

            <div className="designer-coder__skills">
              {designerSkills.map((skill) => (
                <div className="designer-coder__skill" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Central visual */}
          <div className="designer-coder__visual" aria-hidden="true">
            <div className="designer-coder__circle">
              <div className="designer-coder__designer-piece">
                <span>Designer</span>
              </div>

              <div className="designer-coder__coder-piece">
                <span>Coder</span>
              </div>
            </div>
          </div>

          {/* Coder */}
          <div className="designer-coder__side designer-coder__side--coder">
            <h2>Coder</h2>

            <div className="designer-coder__skills">
              {coderSkills.map((skill) => (
                <div className="designer-coder__skill" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignerCoder