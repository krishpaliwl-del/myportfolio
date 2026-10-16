function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>

          <p className="muted">
            I'm Krish Paliwal, a BCA Computer Science student
            passionate about graphic designing, video editing,
            and creative visual storytelling. I enjoy turning
            ideas into engaging visuals that communicate
            messages effectively.
          </p>

          <p className="muted">
            I'm also interested in marketing content, attention-grabbing
            hooks, motion graphics, and exploring AI tools like
            Higgsfield, Claude, Gemini, ChatGPT, and DaVinci Resolve.
            I continuously experiment with new creative techniques
            to improve my skills and create impactful digital content.
          </p>
        </div>

        <div className="card">
          <h3>Skills & Interests</h3>
          <div className="badges">
            <span className="badge">Graphic Design</span>
            <span className="badge">Video Editing</span>
            <span className="badge">Motion Graphics</span>
            <span className="badge">Marketing Content</span>
            <span className="badge">Content Hooks</span>
            <span className="badge">AI Tools</span>
            <span className="badge">Visual Storytelling</span>
            <span className="badge">BCA Computer Science</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;