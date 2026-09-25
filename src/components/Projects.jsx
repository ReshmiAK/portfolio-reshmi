import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="projects">
      <p className="eyebrow">Projects</p>
      <h2>Things I've built</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="card project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn">
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              )}
              {!project.liveUrl && !project.githubUrl && (
                <span className="project-pending">Coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
