import { Github, Linkedin } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting">
            Hi, I'm Krish Paliwal
          </p>

          <h1 className="hero-title gradient-text">
            Graphic Designer & Video Editor
          </h1>

          <p className="hero-text">
            I'm a BCA Computer Science student passionate about
            graphic design, video editing, motion graphics, and
            creative content. I love exploring marketing strategies,
            creating engaging hooks, and using AI tools like Higgsfield,
            Claude, Gemini, ChatGPT, and DaVinci Resolve to bring ideas
            to life. I'm always learning, experimenting, and finding
            new ways to create impactful digital content.
          </p>

          <a className="btn btn-primary">
            Explore My Work
          </a>

          <div className="social-icons">
            <a className="icon-link"><Github size={20} /></a>
            <a className="icon-link"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="hero-photo">
          <img src="\paliwal.jpeg" alt="Krish Paliwal" />
        </div>
      </div>
    </section>
  );
}

export default Hero;