import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ image, title, description, technologies, githubLink, projectLink }) {
  return (
    <div className="card project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p className="muted">{description}</p>

      <div className="badges">
        {technologies.map((technology, index) => (
          <span className="badge small" key={index}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a
          className="btn btn-ghost btn-small"
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`GitHub for ${title}`}
        >
          <Github size={16} />
        </a>

        <a
          className="btn btn-primary btn-small"
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title}`}
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;