import React from "react";
import { Link } from "react-scroll";

export const Showcase = () => {
  return (
    <header id="showcase">
      <div className="container showcase-container">
        <h1>
          Frontend Engineer building scalable React &amp; TypeScript applications
          for modern SaaS products.
        </h1>
        <p>
          I design and develop performant, API-driven interfaces used in
          production environments.
        </p>
        <div className="showcase-cta">
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            className="btn"
          >
            View Work
          </Link>
          <a
            href="https://github.com/yomiaishida"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="btn btn-outline"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};
