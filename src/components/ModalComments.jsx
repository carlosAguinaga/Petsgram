import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useParams } from "react-router";
import { getComments } from "../utils/getData";
import { useHistory } from "react-router-dom";
import "../styles/modalComments.css"


const ModalComments = () => {
  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
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

  const history = useHistory()
  const back = e => {
    e.stopPropagation();
    history.goBack()
  }


  let { id } = useParams();
  const [comments, setcomments] = useState(null)

  useEffect(() => {
    getComments(id).then((res) => setcomments(res));
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "unset";

  }, [id])



  return ReactDom.createPortal(
    <>
      <div style={overlayStyles} onClick={back}>
        <div style={modalStyles} onClick={e => e.stopPropagation()}>
          {comments &&
            comments.data.map((comment) => (
              <div key={comment.id}>
                <div className="modal__comment">
                  <img src={comment.owner.picture} alt="" className="post__modal--img" />
                  <span>{comment.owner.firstName}:</span>
                  <span>{comment.message}</span>
                </div>
              </div>
            ))}
          <button onClick={ back }>close</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalComments;
