import React from "react";
import "./modal.css";
const Modal = ({ modalImage, handleSwitch }) => {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="mainModal">
        <button onClick={handleSwitch}>X</button>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
