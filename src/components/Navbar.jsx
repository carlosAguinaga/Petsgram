import React from "react";

const Navbar = () => {
  return (
    <div className="NavBar_container">
      <img className="logo" src="/assets/images/petsgram.png" alt="logo"/>
      <img
        className="perfil_picture"
        src="/assets/images/user.jpeg"
        alt="Foto de perfil"
      />
    </div>
  );
};

export default Navbar;
