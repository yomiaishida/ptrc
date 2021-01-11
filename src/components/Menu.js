import React from "react";
import "../App.css";

export const Menu = () => {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu" id="menu">
        <div className="overlay">
          <div>
            <ul>
              <li>
                <a className="li" href="#showcase">
                  Home
                </a>
              </li>
              <li>
                <a className="li" href="#about-a">
                  About
                </a>
              </li>
              <li>
                <a className="li" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="li" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
