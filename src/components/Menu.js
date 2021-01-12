import React from "react";
import { useState } from "react";
import "../App.css";

export const Menu = (sty) => {
  const [checkedVal, setCheckedValue] = useState(true);

  const handleChange = (e) => {
    setCheckedValue(!checkedVal);
  };

  const handleClick = (e) => {
    setCheckedValue(false);
  };

  // sty(checkedVal);

  return (
    <div className="menu-wrap">
      <input
        type="checkbox"
        checked={checkedVal}
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
                <a className="li" onClick={handleClick} href="#showcase">
                  Home
                </a>
              </li>
              <li>
                <a className="li" onClick={handleClick} href="#about-a">
                  About
                </a>
              </li>
              <li>
                <a className="li" onClick={handleClick} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="li" onClick={handleClick} href="#contact">
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
