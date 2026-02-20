import React from "react";

export const ProjectItem = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-img">
        <img src={project.img} alt={project.projectTitle} />
      </div>
      <div className="project-card-body">
        <div className="project-card-header">
          <h3 className="project-card-title">{project.projectTitle}</h3>
          <span className="project-card-role">{project.role}</span>
        </div>
        <p className="project-card-desc">{project.description}</p>
        <ul className="project-card-focus">
          {project.engineeringFocus.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="project-card-stack">
          {project.stack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
        <div className="project-card-links">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm"
          >
            Live
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
