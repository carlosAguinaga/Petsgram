import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "../components/Home";
import ModalComments from "../components/ModalComments";
import ModalProfile from "../components/ModalProfile";
import Navbar from "../components/Navbar";
import "../styles/navbar.css";

const Root = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Navbar />
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/:topic" children={<Home />} />
      </Switch>
      {background && (
        <Route path="/comments/:id" children={<ModalComments />} />
      )}
      {background && (
        <Route path="/profile/user" children={<ModalProfile />} />
      )}
    </>
  );
};

export default Root;
