import { Link } from "react-router-dom"; 
import logo from "./../../assets/logo.svg";
import "./NavBar.css";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const nameNav = "ARESDEV";
const NavBar = () => {
  const [user, setUser] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function onEffect() {
      const json = localStorage.getItem("user");
      const u = JSON.parse(json);
      // console.log(u);
      setUser(u);
    }

    onEffect();
  }, []);

  const closeModal=()=>{
    setModal(false)
  }

  return (
    <div>
      {!user ? (
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
        <nav className="navbar">
          <Link to="/books" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <p>{nameNav}</p>
          </Link>
          <div className="navbar-links">
            {user?.typeUser ? (
              <Link to="/books/visualization" className="navbar-link">
              Visualizar
            </Link>
            ):(<div></div>)}
            {user?.typeUser ? (
              <Link to="/books/upload" className="navbar-link">
                Upload
              </Link>
            ):(<div></div>)}
            <button className="user" onClick={()=> setModal(true)}>{user.username[0]}</button>
          </div>
        </nav>
      )}
      <Modal
      isOpen={modal}
      handleClose={closeModal}
      handleLogout/>
    </div>
  );
};

export default NavBar;
