import React from "react";
import ReactDom from "react-dom";

const ModalProfile = ({ open, onClose, owner }) => {
  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "50px",
    zIndex: 1000,
  };

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    padding: "50px",
    zIndex: 1000,
  };

  // console.log(owner);

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={overlayStyles}>
        <span>temporal</span>
        <div style={modalStyles}>
          <div>
            <div className="modal__profile">
              <img src={owner.picture} alt="" className="post__modal--img" />
              <span>{owner.firstName}:</span>
              <span>{owner.lastName}:</span>
              <span>{owner.email}</span>
            </div>
          </div>

          <button onClick={onClose}>Close model</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalProfile;
