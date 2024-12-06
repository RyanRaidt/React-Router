import { Link } from "react-router-dom";

export default function Navbar({ changeBackgroundColor }) {
  return (
    <div id="navbar">
      <Link to="/" onClick={() => changeBackgroundColor("")}>
        Home
      </Link>
      <Link to="/blue" onClick={() => changeBackgroundColor("#275db3")}>
        Blue
      </Link>
      <Link to="/red" onClick={() => changeBackgroundColor("#b05f6d")}>
        Red
      </Link>
      <Link to="/green" onClick={() => changeBackgroundColor("#2e8b57")}>
        Green
      </Link>
      <Link to="/yellow" onClick={() => changeBackgroundColor("#ffd700")}>
        Yellow
      </Link>
    </div>
  );
}
