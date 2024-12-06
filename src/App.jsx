import { useState } from "react";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  const [bgColor, setBgColor] = useState("");
  const [explosionColor, setExplosionColor] = useState("");
  const [isExploding, setIsExploding] = useState(false);

  const changeBackgroundColor = (color) => {
    setExplosionColor(color);
    setIsExploding(true);

    setTimeout(() => {
      setBgColor(color);
      setIsExploding(false);
    }, 1000);
  };

  return (
    <div id="container" style={{ backgroundColor: bgColor }}>
      <div
        id="color-overlay"
        className={isExploding ? "exploding" : ""}
        style={{ backgroundColor: explosionColor }}
      ></div>
      <h1 id="header">Color Viewer</h1>
      <Navbar changeBackgroundColor={changeBackgroundColor} />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
