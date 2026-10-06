function Projects() {
  const projects = [
    {
    title: "Smart Crop Advisory System",
    category: "AI / Full-Stack",
    description:
        "A smart agriculture application designed to provide farmers with useful crop-related recommendations and advisory support.",
    tech: ["Python", "AI/ML", "React", "REST API"],
    github: "https://github.com/Prajwal21-12/Smart_Crop_Advisory_System",
    demo: "https://smart-crop-advisory-system-hl25dy3fp-match-mind-ai.vercel.app/",
    },

    {
    title: "Snap & Study",
    category: "AI / Generative AI",
    description:
        "An AI-powered study assistant built with Streamlit and Gemini that helps students ask questions, upload images, and receive AI-generated explanations.",
    tech: ["Python", "Streamlit", "Gemini AI"],
    github: "https://github.com/Prajwal21-12/snap-study",
    demo: "https://snap-study-viukrewf78gbjgtaisflwt.streamlit.app",
    },

    {
      title: "MatchMind AI",
      category: "AI / Full-Stack",
      description:
        "An AI-powered sports platform designed to help organize sports events, manage matches and provide intelligent features for users.",
      tech: ["React", "Node.js", "Express", "Gemini AI"],
      github: "https://github.com/Prajwal21-12/MatchMind---AI",
      demo: "https://match-mind-ai-three.vercel.app/",
    },
  ]

  return (
    <section className="projects section" id="projects">
      <div className="section-container">

        <p className="section-label">FEATURED PROJECTS</p>

        <h2>
          Things I've
          <span> built.</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-top">
                <span className="project-category">
                  {project.category}
                </span>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
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

export default Projects