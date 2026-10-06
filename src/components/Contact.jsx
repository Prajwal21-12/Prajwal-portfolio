function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container">

        <p className="section-label">CONTACT</p>

        <h2>
          Let's build something
          <span> meaningful.</span>
        </h2>

        <div className="contact-content">

          <div className="contact-text">
            <p>
              I'm always interested in learning, building new projects
              and connecting with developers and opportunities.
            </p>

            <p>
              If you'd like to discuss a project, internship or
              opportunity, feel free to reach out.
            </p>
          </div>

          <div className="contact-links">

            <a
              href="mailto:hariharprajwal@gmail.com"
              className="contact-link"
            >
              <span>Email</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/prajwal-harihar-9261a1341/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/Prajwal21-12"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact