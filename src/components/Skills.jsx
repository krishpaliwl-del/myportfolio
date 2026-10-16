
function Skills() {
  return (
    <section id="skills" className="section dark-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">My Skills</span>
        </h2>

        <div className="grid">
          <div className="card">
            <h3>Creative Design</h3>
            <div className="badges">
              <span className="badge">Graphic Design</span>
              <span className="badge">Typography</span>
              <span className="badge">Visual Design</span>
              <span className="badge">Branding</span>
            </div>
          </div>

          <div className="card">
            <h3>Video & Motion</h3>
            <div className="badges">
              <span className="badge">Video Editing</span>
              <span className="badge">Motion Graphics</span>
              <span className="badge">Transitions</span>
              <span className="badge">Visual Storytelling</span>
            </div>
          </div>

          <div className="card">
            <h3>Marketing & Content</h3>
            <div className="badges">
              <span className="badge">Content Creation</span>
              <span className="badge">Marketing Content</span>
              <span className="badge">Content Hooks</span>
              <span className="badge">Social Media Content</span>
            </div>
          </div>

          <div className="card">
            <h3>AI & Creative Tools</h3>
            <div className="badges">
              <span className="badge">Higgsfield AI</span>
              <span className="badge">ChatGPT</span>
              <span className="badge">Claude</span>
              <span className="badge">Google Gemini</span>
              <span className="badge">DaVinci Resolve</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
