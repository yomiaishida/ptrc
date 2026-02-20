import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ProjectItem } from "./ProjectItem";

export const Project = () => {
  const { projectDetails } = useContext(GlobalContext);

  return (
    <section className="py-3 project" id="work">
      <div className="border">
        <h2 className="section-title">Selected Work</h2>
        <div className="bottom-line"></div>
        <p className="lead">Production applications and engineering problems solved.</p>
        <div className="project-grid">
          {projectDetails.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
