import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useParams } from "react-router";
import { getComments } from "../utils/getData";
import "../styles/modalComments.css"


const ModalComments = ({history}) => {
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


  let { id } = useParams();
  const [comments, setcomments] = useState(null)

  useEffect(() => {
    getComments(id).then((res) => setcomments(res));
  }, [id])


  // if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={overlayStyles}>
        <div style={modalStyles}>
          {comments &&
            comments.data.map((comment) => (
              <div key={comment.id}>
                <div className="modal__comment">
                  <img src={comment.owner.picture} alt="" className="post__modal--img" />
                  <span>{comment.owner.firstName}:</span>
                  <span>{comment.message}</span>
                </div>
                <hr />
              </div>
            ))}
          <button onClick={()=> history.goBack() }>close</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalComments;
