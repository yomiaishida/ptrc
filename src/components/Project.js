import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ProjectItem } from "./ProjectItem";

export const Project = () => {
  const { projectDetails } = useContext(GlobalContext);

  return (
    <section className="py-3 project" id="projects">
      <div className="border">
        <h2 className="section-title">My Work</h2>
        <div className="bottom-line"></div>
        <p className="lead">Check out my projects</p>
        <div className="items">
          {projectDetails.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
