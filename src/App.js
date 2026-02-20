import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Project } from "./components/Project";
import { TrustSignals } from "./components/TrustSignals";
import { EngineeringApproach } from "./components/EngineeringApproach";
import { Experience } from "./components/Experience";
import { Info } from "./components/sections/about/Info";
import { InfoB } from "./components/sections/about/InfoB";
import { Showcase } from "./components/Showcase";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Menu />
      <Showcase />
      <TrustSignals />
      <Project />
      <EngineeringApproach />
      <InfoB />
      <Experience />
      <Info />
      <Contact />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
