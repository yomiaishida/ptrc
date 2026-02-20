import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import contact from "../components/img/contact.png";
import social from "../components/img/social.jpg";
import ecommerce2 from "../components/img/ecommerce2.jpg";
import smoothies from "../components/img/smoothies.jpg";

// Initial state
const initialState = {
  projectDetails: [
    {
      id: 1,
      img: contact,
      projectLink: "https://yourcontactmanager.netlify.app/",
      githubLink: "https://github.com/yomiaishida/contact-manager",
      projectTitle: "Contact Manager",
      role: "Full-Stack Engineer",
      description:
        "Full-stack contact management system with CRUD operations and persistent state across authenticated sessions.",
      engineeringFocus: [
        "JWT-based authentication",
        "RESTful API integration",
        "Persistent client-side state",
        "CRUD operations",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 2,
      img: ecommerce2,
      projectLink: "https://gardjet.herokuapp.com/",
      githubLink: "https://github.com/yomiaishida/GardJet",
      projectTitle: "E-Shop",
      role: "Full-Stack Engineer",
      description:
        "End-to-end ecommerce platform built on the MERN stack with cart synchronization, product filtering, and authenticated checkout flow.",
      engineeringFocus: [
        "Cart state synchronization",
        "Product filtering & search",
        "Authenticated checkout flow",
        "RESTful API design",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      img: social,
      projectLink: "https://house-market-gray.vercel.app/",
      githubLink: "https://github.com/yomiaishida/House-market",
      projectTitle: "Home Listings",
      role: "Frontend Engineer",
      description:
        "Real estate listing platform with real-time data sync via Google Cloud Firestore and role-based access for buyers and agents.",
      engineeringFocus: [
        "Real-time Firestore data sync",
        "Role-based access control",
        "Firebase 9 authentication",
        "Responsive UI architecture",
      ],
      stack: ["React", "Firebase 9", "Firestore", "Tailwind CSS"],
    },
    {
      id: 4,
      img: smoothies,
      projectLink: "https://insect-bulgarian.cyclic-app.com/login/",
      githubLink: "https://github.com/yomiaishida/Smoothie-nodeJwt",
      projectTitle: "Smoothy",
      role: "Backend-Integrated Frontend",
      description:
        "Server-rendered web application with session-based authentication, JWT token management, and dynamic content templating.",
      engineeringFocus: [
        "Session-based authentication",
        "JWT token management",
        "Server-side rendering with EJS",
        "RESTful route architecture",
      ],
      stack: ["Node.js", "Express", "EJS", "MongoDB"],
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
