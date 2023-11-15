import { Link } from "react-router-dom"; // Asumiendo que estás utilizando React Router

import logo from "./../../assets/logo.svg";
import "./NavBar.css";

const nameNav = "ARESDEV";

const NavBar = ({ type = "login" }) => {
  return (
    <div>
      {type == "login" ? (
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <p>{nameNav}</p>
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
      ) : (
        <div>
          {type == "user" ? (
            <nav className="navbar">
              <Link to="/books" className="navbar-brand">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <p>{nameNav}</p>
              </Link>
              <div className="navbar-links">
                <button className="user">U</button>
              </div>
            </nav>
          ) : (
            <div>
              {type == "admin" ? (
                <nav className="navbar">
                  <Link to="/dashboard" className="navbar-brand">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                    <p>{nameNav}</p>
                  </Link>
                  <div className="navbar-links">
                    <Link to="/dashboard/upload" className="navbar-link">
                      Upload
                    </Link>
                    <button className="user">U</button>
                  </div>
                </nav>
              ) : (
                <div></div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
