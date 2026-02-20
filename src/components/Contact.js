import React from "react";

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Available for remote frontend and SaaS product opportunities.
        </p>
        <div className="contact-links">
          <a href="mailto:abayomiaishida@gmail.com" className="contact-link">
            <i className="fas fa-envelope"></i>
            <span>abayomiaishida@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abayomiaishida/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/yomiaishida"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href="http://twitter.com/yomi_aishida"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <i className="fab fa-twitter"></i>
            <span>Twitter / X</span>
          </a>
        </div>
      </div>
    </section>
  );
};
