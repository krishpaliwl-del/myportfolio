import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">My Creative Projects</span>
        </h2>

        <div className="grid project-grid">
          <ProjectCard
            image="https://placehold.co/600x400/1a1a2e/ffffff?text=Graphic+Design"
            title="Social Media Design"
            description="A creative social media design concept featuring bold typography, eye-catching visuals, and engaging layouts for digital marketing."
            technologies={["Graphic Design", "Branding", "Typography"]}
            githubLink="https://github.com/"
            projectLink="https://www.behance.net/"
          />

          <ProjectCard
            image="https://placehold.co/600x400/202020/ffffff?text=Video+Editing"
            title="Promotional Video Edit"
            description="A sample promotional video concept combining dynamic cuts, smooth transitions, sound effects, and storytelling to capture attention."
            technologies={["Video Editing", "DaVinci Resolve", "Storytelling"]}
            githubLink="https://github.com/"
            projectLink="https://www.youtube.com/"
          />

          <ProjectCard
            image="https://placehold.co/600x400/251438/ffffff?text=Motion+Graphics"
            title="Motion Graphics & Hooks"
            description="A short-form content concept featuring animated text, motion graphics, and powerful opening hooks designed to engage viewers."
            technologies={["Motion Graphics", "Content Hooks", "AI Tools"]}
            githubLink="https://github.com/"
            projectLink="https://www.behance.net/"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;