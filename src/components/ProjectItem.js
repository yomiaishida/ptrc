import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ProjectItem = ({ project }) => {
  const { secondStateVal } = useContext(GlobalContext);
  return (
    <>
      <div style={{ zIndex: secondStateVal ? "-1" : "1" }} className="item">
        <div className="item-image">
          <img src={project.img} alt="" />
        </div>
        <div className="item-text">
          <div className="item-text-wrap">
            <a href={project.projectLink} target="_blank" rel="noreferrer">
              <h2 className="item-text-title">{project.projectTitle}</h2>
              <p className="item-text-category">{project.description}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
