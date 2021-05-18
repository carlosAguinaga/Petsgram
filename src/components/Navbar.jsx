import React from "react";
import {useHistory} from 'react-router-dom'

const Navbar = () => {

  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  return (
    <div className="NavBar_container">
      <img className="logo" src="/assets/images/petsgram.png" alt="logo" onClick={ goToHome }/>
      <img
        className="perfil_picture"
        src="/assets/images/user.jpeg"
        alt="Foto de perfil"
      />
    </div>
  );
};

export default Navbar;
