import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";

export const Menu = () => {
  // const [checkedVal, setCheckedValue] = useState(true);

  const { secondStateVal, toggleCheckBox } = useContext(GlobalContext);

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
        checked={secondStateVal}
        onChange={handleChange}
        className="toggler"
      />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu" id="menu">
        <div className="overlay" onClick={handleClick}>
          <div>
            <ul onClick={handleClick}>
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
