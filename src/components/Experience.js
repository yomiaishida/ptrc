import React from "react";

const experiences = [
  {
    id: 1,
    company: "AllofHealth",
    role: "Frontend Engineer",
    type: "Remote",
    period: "July 2025 – Present",
    link: "https://allofhealth.africa/",
    bullets: [
      "Built mobile-responsive UIs for doctor and patient workflows in a Web3 health platform.",
      "Integrated frontend features with backend APIs, supporting authentication and role-based data rendering.",
      "Developed launch-critical product and compliance pages.",
      "Collaborated with cross-functional teams to accelerate platform launch readiness.",
    ],
  },
  {
    id: 2,
    company: "LakexIO",
    role: "Frontend Developer",
    type: "Remote",
    period: "Aug 2022 – Feb 2025",
    link: null,
    bullets: [
      "Developed user interfaces from Figma design wireframes.",
      "Designed scalable, reusable component systems for future implementation.",
      "Collaborated with Product Managers, Designers, and engineers to build and ship new features.",
      "Built responsive layouts for mobile and web screens.",
    ],
  },
  {
    id: 3,
    company: "Covenda Security",
    role: "Frontend Developer (Volunteer)",
    type: "Remote",
    period: "May 2023 – Sept 2023",
    link: "https://covenda.ai/",
    bullets: [
      "Designed and translated Figma wireframes into production-ready frontend code.",
      "Conducted code reviews and refactored codebase for improved maintainability.",
      "Developed responsive UIs across desktop, tablet, and mobile devices.",
      "Performed thorough testing and debugging to resolve functional and UI issues.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="experience-section py-3">
      <div className="container border">
        <h2 className="section-title">Experience</h2>
        <div className="bottom-line"></div>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-company">
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noreferrer">
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <span className="experience-role">{exp.role}</span>
                  <span className="experience-type">{exp.type}</span>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
