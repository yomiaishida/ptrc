import React from "react";

export const Info = () => {
  return (
    <section id="about-a" className="text-center py-3">
      <div className="container border">
        <h2 className="section-title">About</h2>
        <div className="bottom-line"></div>
        <div className="about-bio">
          <p className="about-text">
            Frontend Engineer experienced in building production-ready web
            applications and scalable user interfaces for modern products.
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
