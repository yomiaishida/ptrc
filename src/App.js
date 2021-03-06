import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Project } from "./components/Project";
import { Info } from "./components/sections/about/Info";
import { InfoB } from "./components/sections/about/InfoB";
import { Showcase } from "./components/Showcase";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  // const styV = (bool) => {
  //   console.log(bool);
  // };

  return (
    <GlobalProvider>
      <Menu />
      <Showcase />
      <Info />
      <InfoB />
      <Project />
      <Contact />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
