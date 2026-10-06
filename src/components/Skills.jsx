function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "C", "C++"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js", "React Router"],
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "AI / ML",
      skills: ["Machine Learning", "Generative AI", "RAG", "Embeddings"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ]

  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <p className="section-label">MY SKILLS</p>

        <h2>
          Technologies I use to
          <span> build things.</span>
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills