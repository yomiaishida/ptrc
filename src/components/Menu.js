import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";

export const Menu = () => {
  const { toggleValue, toggleCheckBox } = useContext(GlobalContext);

  const handleChange = (e) => {
    return toggleCheckBox();
  };

  const handleClick = (e) => {
    toggleCheckBox();
  };

  return (
    <div className="menu-wrap">
      <input
        type="checkbox"
        checked={toggleValue}
        onChange={handleChange}
        className="toggler"
      />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu" id="menu">
        <div className="overlay" onClick={handleClick}>
          <div>
            <ul>
              <li>
                <Link
                  className="li"
                  onClick={handleClick}
                  to="showcase"
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="li"
                  onClick={handleClick}
                  to="about-a"
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="li"
                  onClick={handleClick}
                  to="projects"
                  spy={true}
                  smooth={true}
                  // offset={120}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="li"
                  onClick={handleClick}
                  to="contact"
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
