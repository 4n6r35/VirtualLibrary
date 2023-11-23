/* eslint-disable react/prop-types */
import "./Modal.css";

const Modal = ({ handleClose, handleLogout }) => {

  return (
    <>
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
    </>
  );
};

export default Modal;
