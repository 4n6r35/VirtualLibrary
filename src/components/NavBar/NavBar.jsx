/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import "./NavBar.css";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
const nameNav = "ARESDEV";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <p className="brand">{nameNav}</p>
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

const NavBarD = () => {
  const [open, setOpen] = useState("false");
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    function onEffect() {
      const json = localStorage.getItem("user");
      const u = JSON.parse(json);
      setUser(u);
    }
    onEffect();
  }, []);

  const modelOpen = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setOpen(true);
    navigate("/");
  };

  const handleClose = () => {
    setOpen(true);
  };

  return (
    <nav className="navbar">
      <Link to="/books" className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <p className="brand">{nameNav}</p>
      </Link>
      <div className="navbar-links">
        <Link to="/books/orders" className="navbar-link">
          Prestados
        </Link>
        {user?.typeUser ? (
          <Link to="/books/upload" className="navbar-link">
            Upload
          </Link>
        ) : (
          <div></div>
        )}
        <button className="user" onClick={modelOpen}>
          {user?.username[0]}
        </button>
        {!open ? (
          <Modal handleClose={handleClose} handleLogout={handleLogout} />
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export { NavBar, NavBarD };
