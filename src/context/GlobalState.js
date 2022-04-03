import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import contact from "../components/img/contact.png";
import calorie from "../components/img/calorieTracker.jpg";
import loan from "../components/img/loanCalc.jpg";
import check from "../components/img/check-list.png";
import fingers from "../components/img/fingers.png";
import social from "../components/img/social.jpg";
import ecommerce2 from "../components/img/ecommerce2.jpg";
import smoothies from "../components/img/smoothies.jpg";
import bootstrap from "../components/img/bootstrap.jpg";

// Initial state
const initialState = {
  projectDetails: [
    {
      id: 1,
      img: contact,
      projectLink: "https://yourcontactmanager.netlify.app/",
      projectTitle: "Contact Manager",
      description: "An app that helps keep your contacts",
    },
    {
      id: 2,
      img: ecommerce2,
      projectLink: "https://iproshop.herokuapp.com/",
      projectTitle: "E-Shop",
      description: "Ecommerce app built with MERN stack",
    },
    {
      id: 3,
      img: social,
      projectLink: "https://yadevcon.herokuapp.com/",
      projectTitle: "Developer Connector",
      description:
        "Built with the MERN Stack. A powerful web app for connecting developers",
    },
    {
      id: 4,
      img: smoothies,
      projectLink: "https://insect-bulgarian.cyclic-app.com/login/",
      projectTitle: "Smoothy",
      description: "Built Node Express and ejs for static site generation",
    },
    {
      id: 5,
      img: loan,
      projectLink: "https://yomiaishida.github.io/loan-calculator/",
      projectTitle: "Loan Calculator",
      description:
        "A JavaScript app that helps calculate loan interest over a given period",
    },
    {
      id: 6,
      img: calorie,
      projectLink: "https://yomiaishida.github.io/Calorie-Tacker",
      projectTitle: "Tracalorie",
      description:
        "Tracalorie helps in monitoring daily calorie intake and it's especially useful for those who are careful about their calorie intake daily",
    },
    {
      id: 7,
      img: check,
      projectLink: "https://yomiaishida.github.io/Task-List-App",
      projectTitle: "TODO APP",
      description: "Plan out your daily functions with this todo app",
    },
    {
      id: 8,
      img: fingers,
      projectLink: "https://yomiaishida.github.io/RockPaper",
      projectTitle: "GAME",
      description: "Play a game of Rock, Paper, Scissors while you're here",
    },
    {
      id: 9,
      img: bootstrap,
      projectLink:
        "https://yomiaishida.github.io/Blogen-boostrap-app/index.html#",
      projectTitle: "Bootstrap UI",
      description: "Design Concept",
    },
  ],
  toggleValue: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function toggleCheckBox() {
    dispatch({
      type: "TOGGLE_CHECK",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        projectDetails: state.projectDetails,
        toggleValue: state.toggleValue,
        toggleCheckBox,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
