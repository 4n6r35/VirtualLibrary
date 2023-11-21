import "./Modal.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, handleClose }) => {
  const handleLogout = () => {
    const navigate = useNavigate();
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      {isOpen && (
        <div className="modalOverlay">
          <div className="modal">
            <h2>Cerrar seccion</h2>
            <p>¿Seguro quieres cerrar sesión?</p>
            <div className="modalButtons">
              <button className="exit" onClick={handleClose}>
                Cancelar
              </button>
              <button className="logout" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
