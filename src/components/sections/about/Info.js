import React from "react";
import about from "../../img/about.jpg";

export const Info = () => {
  return (
    <section id="about-a" className="text-center py-3">
      <div className="container border">
        <h2 className="section-title">About Me</h2>
        <div className="bottom-line"></div>
        <p className="lead">Learn a little about me</p>
        <div className="about-info">
          <img src={about} alt="Hackathon" className="bio-image" />
          <div className="bio bg-light">
            <h4>Your Project Is In Safe Hands</h4>
            <p>
              I traversed into tech back in 2018 and it's been fun learning,
              unlearning and relearning ever since. I've been part of some tech
              programs that have helped me upskill: GADS, DevC and a few others.
              I've also participated in some competitive programs like
              NaijaHacks, a yearly hackathon that holds in Nigeria and
              BuildforSDGs, a program put together by Facebook and Andela to
              help realise United Nation's Sustainable Development Goals. I
              picked a few certifications while learning, some of which are down
              below.
            </p>
          </div>
          <div className="award-1">
            <i className="fas fa-award fa-3x"></i>
            <h3>
              <a
                href="http://coursera.org/verify/DDMWN4ZUVU2Y
              "
                target="_blank"
                rel="noreferrer"
              >
                HTML, CSS, and Javascript for Web Developers
              </a>
            </h3>
            <p>John Hopkins University</p>
          </div>
          <div className="award-2">
            <i className="fas fa-award fa-3x"></i>
            <h3>
              <a
                href="http://coursera.org/verify/DDMWN4ZUVU2Y
                "
              >
                Build web apps with ReactJS
              </a>
            </h3>

            <p>OpenClassroooms</p>
          </div>
          <div className="award-3">
            <i className="fas fa-award fa-3x"></i>

            <h3>
              <a
                href="http://coursera.org/verify/DDMWN4ZUVU2Y
                "
              >
                Build Your First Web Pages With HTML and CSS
              </a>
            </h3>

            <p>OpenClassroooms</p>
          </div>
        </div>
      </div>
    </section>
  );
};
