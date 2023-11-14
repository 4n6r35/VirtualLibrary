import { Link } from "react-router-dom"; // Asumiendo que estás utilizando React Router

import logo from "./../../assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <p>ARESDEV</p>
      </Link>
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/sign-up" className="navbar-link">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
