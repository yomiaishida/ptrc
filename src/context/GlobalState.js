import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import contact from "../components/img/contact.png.jpg";
import calorie from "../components/img/calorieTracker.jpg";
import loan from "../components/img/loanCalc.jpg";
import check from "../components/img/check-list.png";
import fingers from "../components/img/fingers.png";

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
      img: loan,
      projectLink: "https://yomiaishida.github.io/loan-calculator/",
      projectTitle: "Loan Calculator",
      description:
        "A JavaScript app that helps calculate loan interest over a given period",
    },
    {
      id: 3,
      img: calorie,
      projectLink: "https://yomiaishida.github.io/Calorie-Tacker",
      projectTitle: "Tracalorie",
      description:
        "Tracalorie helps in monitoring daily calorie intake and it's especially useful for those who are careful about their calorie intake daily",
    },
    {
      id: 4,
      img: check,
      projectLink: "https://yomiaishida.github.io/Task-List-App",
      projectTitle: "TODO APP",
      description: "Plan out your daily functions with this todo app",
    },
    {
      id: 5,
      img: fingers,
      projectLink: "https://yomiaishida.github.io/RockPaper",
      projectTitle: "GAME",
      description: "Play a game of Rock, Paper, Scissors while you're here",
    },
    {
      id: 6,
      img: "",
      projectLink:
        "https://yomiaishida.github.io/Blogen-boostrap-app/index.html#",
      projectTitle: "Bootstrap UI",
      description: "Design Concept",
    },
  ],
  secondStateVal: false,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        projectDetails: state.projectDetails,
        secondStateVal: state.secondStateVal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
