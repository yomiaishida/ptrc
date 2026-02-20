import React from "react";

const experiences = [
  {
    id: 1,
    company: "Allof Health",
    role: "Frontend Engineer",
    type: "Remote",
    period: "July 2025 – Present",
    link: "https://allofhealth.africa/",
    bullets: [
      "Architect and develop responsive frontend workflows supporting doctor and patient interactions within a Web3 healthcare platform.",
      "Designed API-driven UI systems enabling authenticated and role-based data rendering across multiple user types.",
      "Delivered launch-critical product and compliance interfaces contributing to platform release readiness.",
      "Collaborated closely with backend engineers and product teams to translate business requirements into scalable frontend solutions.",
      "Improved UI consistency through reusable component patterns and structured state management.",
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
      "Developed scalable frontend features from Figma designs using React-based architecture.",
      "Built reusable component systems improving development speed and long-term maintainability.",
      "Collaborated with product managers and designers to deliver customer-facing features across iterative product releases.",
      "Implemented responsive layouts optimized for mobile and desktop environments.",
      "Contributed to feature planning discussions and frontend implementation strategy.",
    ],
  },
  {
    id: 3,
    company: "Covenda Security",
    role: "Frontend Developer – Volunteer",
    type: "Remote",
    period: "May 2023 – Sept 2023",
    link: "https://covenda.ai/",
    bullets: [
      "Implemented secure, responsive user interfaces aligned with product design specifications.",
      "Conducted code reviews and refactored legacy frontend modules to improve maintainability and readability.",
      "Identified and resolved UI and functional issues through systematic debugging and testing.",
      "Supported cross-team collaboration within a security-focused SaaS environment.",
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
