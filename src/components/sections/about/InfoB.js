import React from "react";

const skillGroups = [
  {
    title: "Frontend Engineering",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    title: "State & Data",
    skills: ["Redux", "Context API", "REST APIs", "GraphQL"],
  },
  {
    title: "UI Systems",
    skills: ["Tailwind CSS", "SASS", "Responsive Design", "Component Architecture"],
  },
  {
    title: "Collaboration",
    skills: ["Git", "Agile Workflow", "Code Review", "Firebase"],
  },
];

export const InfoB = () => {
  return (
    <section id="skills" className="bg-dark py-3">
      <div className="container border">
        <h2 className="section-title">Skills</h2>
        <div className="bottom-line"></div>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={i} className="skill-group">
              <h4 className="skill-group-title">{group.title}</h4>
              <div className="skill-tags">
                {group.skills.map((skill, j) => (
                  <span key={j}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
