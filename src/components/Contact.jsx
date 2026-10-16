import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">
            <span className="gradient-text">Let's Connect</span>
          </h2>

          <p className="muted">
            Have a creative project, collaboration idea, or opportunity
            to discuss? I'd love to connect with you. Feel free to reach
            out and let's create something amazing together.
          </p>

          <div className="contact-links">
            <a
              className="icon-link icon-link-text"
              href="mailto:krishpaliwal@example.com"
              aria-label="Email Krish"
            >
              <Mail size={18} />
            </a>

            <a
              className="icon-link icon-link-text"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              className="icon-link icon-link-text"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <a
            className="btn btn-primary"
            href="mailto:krishpaliwal@example.com"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;