import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Red from "./components/Red";
import Blue from "./components/Blue";

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

      <div id="navbar">
        <Link to="/" onClick={() => changeBackgroundColor("gray")}>
          Home
        </Link>
        <Link to="/blue" onClick={() => changeBackgroundColor("#0e4295")}>
          Blue
        </Link>
        <Link to="/red" onClick={() => changeBackgroundColor("#ab3045")}>
          Red
        </Link>
      </div>

      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
