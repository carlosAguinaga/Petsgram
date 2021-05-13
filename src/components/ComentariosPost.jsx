import React from 'react'
import ModalComments from "./ModalComments";

const ComentariosPost = (setIsOpen, comments, isOpen ) => {
    return (
        <div>
            <ModalComments
        open={isOpen}
        onClose={() => setIsOpen(false)}
        comments={comments}
      />
        </div>
    )
}

export default ComentariosPost
