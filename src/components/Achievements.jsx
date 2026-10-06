function Achievements() {
  const achievements = [
    {
      title: "Hackathon Projects",
      description:
        "Built AI-powered and full-stack projects focused on solving practical problems.",
    },
    {
      title: "Frontend Development Internship",
      description:
        "Gaining practical experience through project-based frontend development.",
    },
    {
      title: "Open Source",
      description:
        "Learning and contributing to real-world projects through Git and GitHub.",
    },
  ]

  return (
    <section className="achievements section" id="achievements">
      <div className="section-container">

        <p className="section-label">ACHIEVEMENTS</p>

        <h2>
          Things I'm
          <span> proud of.</span>
        </h2>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div className="achievement-card" key={achievement.title}>
              <h3>{achievement.title}</h3>

              <p>{achievement.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievements