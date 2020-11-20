import React from "react";
import "./index.css";

const Modal = ({ onClose, active, url }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={onClose}
    >
      <div className="modal__img" onClick={onClose}>
        <img src={url} onClick={onClose}/>
      </div>
    </div>
  );
};

export default Modal;
