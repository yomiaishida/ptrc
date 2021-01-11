import "./App.css";
import { Menu } from "./components/Menu";
import { Info } from "./components/sections/about/Info";
import { InfoB } from "./components/sections/about/InfoB";
import { Showcase } from "./components/Showcase";

function App() {
  return (
    <div>
      <Menu />
      <Showcase />
      <Info />
      <InfoB />
    </div>
  );
}

export default App;
