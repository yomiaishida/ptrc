import React from "react";
import calorie from "./img/calorieTracker.jpg";
import check from "./img/check-list.png";
import contact from "./img/contact.png.jpg";
import fingers from "./img/fingers.png";
import loanCalc from "./img/loanCalc.jpg";

export const Project = () => {
  const cl = "-1";

  return (
    <section className="py-3 project" id="projects">
      <div className="border">
        <h2 className="section-title">My Work</h2>
        <div className="bottom-line"></div>
        <p className="lead">Check out my projects</p>
        <div className="items">
          <div style={{ zIndex: cl }} className="item">
            <div className="item-image">
              <img src={contact} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <a
                  href="https://yourcontactmanager.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="item-text-title">Contact Manager</h2>
                  <p className="item-text-category">
                    An app that helps keep your contacts
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={loanCalc} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <a
                  href="https://yomiaishida.github.io/loan-calculator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="item-text-title">Loan Calculator</h2>
                  <p className="item-text-category">
                    A JavaScript app that helps calculate loan interest over a
                    given period
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={calorie} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <a
                  href="https://yomiaishida.github.io/Calorie-Tacker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="item-text-title">Tracalorie</h2>
                  <p className="item-text-category">
                    Tracalorie helps in monitoring daily calorie intake and it's
                    especially useful for those who are careful about their
                    calorie intake daily
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={check} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <a
                  href="https://yomiaishida.github.io/Task-List-App/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="item-text-title">TODO APP</h2>
                </a>
                <p className="item-text-category">
                  Plan out your daily functions with this todo app
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={fingers} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <a
                  href="https://yomiaishida.github.io/RockPaper/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="item-text-title">GAME</h2>
                </a>
                <p className="item-text-category">
                  Play a game of Rock, Paper, Scissors while you're here
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src="img/" alt="" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <a
                  href="https://yomiaishida.github.io/Blogen-boostrap-app/index.html#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="item-text-title">Bootstrap UI</h2>
                </a>
                <p className="item-text-category">Design Concept</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src="img/" alt="" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <h2 className="item-text-title">Dock Ponder</h2>
                <p className="item-text-category">Photography</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src="img/" alt="" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <a
                  href="https://yomiaishida.github.io/glozz-boot-theme/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="item-text-title">Bootstrap UI</h2>
                </a>
                <p className="item-text-category">Bootstrap 5 project</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src="img/" alt="" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <h2 className="item-text-title">FriendFeed</h2>
                <p className="item-text-category">Social Network Concept</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
