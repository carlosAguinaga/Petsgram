import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { useHistory, useLocation } from "react-router-dom";
import "../styles/modalProfile.css";

const ModalProfile = () => {
  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    minWidth: '300px',
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "30px",
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

  const location = useLocation();
  const { owner } = location.state;

  const history = useHistory();
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return ReactDom.createPortal(
    <>
      <div style={overlayStyles} onClick={back}>
        <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
          <div className="modal-profile__container">
            <img src={owner.picture} alt="" className="modal-profile__img" />
            <span className="modal-profile__name">
              {owner.firstName} {owner.lastName}
            </span>
            <span className="modal-profile__email">{owner.email}</span>
            <button className="modal-profile__button" onClick={back}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalProfile;
