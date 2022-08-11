import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export const Showcase = () => {
  return (
    <header id="showcase">
      <div className="container showcase-container">
        <h1>Welcome</h1>
        <p>I'm Abayomi, an experienced and passionate Front-end developer.</p>
        <Link
          to="about-a"
          spy={true}
          smooth={true}
          // offset={-70}
          duration={500}
          className="btn"
        >
          Read More
        </Link>
      </div>
    </header>
  );
};
