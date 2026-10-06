function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hero-label">
          AI ENGINEER • FULL-STACK DEVELOPER
        </p>

        <h1>
          Hi, I'm <span>Prajwal Harihar</span> 👋
        </h1>

        <p className="hero-description">
          I build intelligent and scalable applications by combining Artificial Intelligence with modern full-stack technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Projects
          </a>

          <a
            href="https://github.com/Prajwal21-12"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary-btn"
          >
            GitHub
          </a>
          <a
              href={`${import.meta.env.BASE_URL}Prajwal-Harihar-Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              View Resume 
          </a>
          <a
            href="https://www.linkedin.com/in/prajwal-harihar-9261a1341/"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
            >
            LinkedIn 
          </a>
          <a
            href="mailto:hariharprajwal@gmail.com"
            className="secondary-btn"
            >
            Email Me 
          </a>
        </div>

      </div>

      <div className="scroll-indicator">
        ↓ Scroll to explore
      </div>
    </section>
  )
}

export default Hero