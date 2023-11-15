// import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./LayOut.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export const LayOut = ({ type = "login" }) => {
  return (
    <>
      <div className="layout-components">
        <NavBar type={type} />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
