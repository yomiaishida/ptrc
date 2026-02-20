import React from "react";

export const Info = () => {
  return (
    <section id="about-a" className="text-center py-3">
      <div className="container border">
        <h2 className="section-title">About</h2>
        <div className="bottom-line"></div>
        <div className="about-bio">
          <p className="about-text">
            Frontend Engineer with experience building production-ready
            applications since 2018. I enjoy solving complex UI challenges and
            collaborating with distributed product teams to deliver reliable,
            scalable interfaces.
          </p>
          <p className="about-footnote">
            Past participant: NaijaHacks hackathon, BuildforSDGs (Facebook &times; Andela).{" "}
            Certified in Web Development — Johns Hopkins University &amp; OpenClassrooms.
          </p>
        </div>
      </div>
    </section>
  );
};
