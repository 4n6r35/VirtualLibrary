// import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./LayOut.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export const LayOut = () => {
  return (
    <>
      <div className="layout-components">
        <NavBar />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
