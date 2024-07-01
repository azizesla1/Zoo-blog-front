//estilne-disable
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };
  const blogClick = () => {
    navigate("/blog");
  };
  const aboutClick = () => {
    navigate("/about");
  };
  const loginClick = () => {
    navigate("/login")
  };
  return (
    <div className="Navbar">
      <div className="navbar">
        <div className="left">
          <img
            src="https://img.icons8.com/?size=100&id=EzfuS7N64FN8&format=png&color=000000"
            alt=""
          />
          <a href="" onClick={homeClick}>
            Zoo
          </a>
        </div>
        <div className="navitems">
          <a href="" onClick={homeClick}>
            Home
          </a>
          <a href="" onClick={aboutClick}>
            About
          </a>
          <a href="" onClick={blogClick}>
            Blog
          </a>
          <a href="" onClick={loginClick}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
